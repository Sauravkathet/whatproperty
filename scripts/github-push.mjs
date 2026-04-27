#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const TOKEN = process.env.GITHUB_TOKEN;
const OWNER = 'Sauravkathet';
const REPO = 'whatproperty';
const BRANCH = 'main';
const API = 'https://api.github.com';
const COMMIT_MESSAGE = "Initial commit: What's Your Property Worth? prototype";

if (!TOKEN) {
  console.error('GITHUB_TOKEN not set');
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': 'replit-agent',
};

const EXCLUDE_DIRS = new Set([
  '.git',
  'node_modules',
  '.cache',
  '.local',
  '.agents',
  '.pnpm-store',
  'dist',
  '.next',
  '.expo',
  'tmp',
  'out-tsc',
  '.idea',
  'coverage',
]);

const EXCLUDE_FILES = new Set(['.DS_Store', 'Thumbs.db']);

function walk(dir, base = '') {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (EXCLUDE_FILES.has(e.name)) continue;
    if (e.isDirectory()) {
      if (EXCLUDE_DIRS.has(e.name)) continue;
      out.push(...walk(path.join(dir, e.name), path.posix.join(base, e.name)));
    } else if (e.isFile()) {
      out.push({
        absPath: path.join(dir, e.name),
        repoPath: path.posix.join(base, e.name),
      });
    }
  }
  return out;
}

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

async function api(method, url, body, attempt = 1) {
  const res = await fetch(url.startsWith('http') ? url : `${API}${url}`, {
    method,
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json;
  try { json = JSON.parse(text); } catch { json = text; }
  if (!res.ok) {
    // Retry on rate-limit (403 secondary, 429) and 5xx
    const retryable = res.status === 403 || res.status === 429 || res.status >= 500;
    if (retryable && attempt <= 6) {
      const retryAfter = Number(res.headers.get('retry-after')) || 0;
      const wait = Math.max(retryAfter * 1000, Math.min(60_000, 2000 * 2 ** (attempt - 1)));
      console.log(`  rate-limited (status ${res.status}); waiting ${wait}ms (attempt ${attempt})`);
      await sleep(wait);
      return api(method, url, body, attempt + 1);
    }
    throw new Error(`${method} ${url} -> ${res.status}: ${text.slice(0, 500)}`);
  }
  return json;
}

async function createBlob(absPath) {
  const data = fs.readFileSync(absPath);
  const content = data.toString('base64');
  const blob = await api('POST', `/repos/${OWNER}/${REPO}/git/blobs`, {
    content,
    encoding: 'base64',
  });
  return blob.sha;
}

async function main() {
  console.log('Verifying repo...');
  const repo = await api('GET', `/repos/${OWNER}/${REPO}`);
  console.log(`  repo: ${repo.full_name} (default: ${repo.default_branch}, private: ${repo.private})`);

  // Get latest commit on branch (if exists)
  let parentSha = null;
  let baseTreeSha = null;
  try {
    const ref = await api('GET', `/repos/${OWNER}/${REPO}/git/ref/heads/${BRANCH}`);
    parentSha = ref.object.sha;
    const parentCommit = await api('GET', `/repos/${OWNER}/${REPO}/git/commits/${parentSha}`);
    baseTreeSha = parentCommit.tree.sha;
    console.log(`  found existing branch ${BRANCH} at ${parentSha.slice(0, 7)}`);
  } catch (e) {
    console.log(`  branch ${BRANCH} does not exist yet — seeding repo via contents API`);
    // Empty repo: create first file via contents API to bootstrap
    const seed = await api('PUT', `/repos/${OWNER}/${REPO}/contents/.gitkeep-init`, {
      message: 'chore: bootstrap repo',
      content: Buffer.from('init').toString('base64'),
      branch: BRANCH,
    });
    parentSha = seed.commit.sha;
    const parentCommit = await api('GET', `/repos/${OWNER}/${REPO}/git/commits/${parentSha}`);
    baseTreeSha = parentCommit.tree.sha;
    console.log(`  seeded ${BRANCH} at ${parentSha.slice(0, 7)}`);
  }

  console.log('Walking files...');
  const files = walk(process.cwd());
  // Hard size cap per file: 95MB (GitHub limit is 100MB)
  const filtered = files.filter((f) => {
    const sz = fs.statSync(f.absPath).size;
    if (sz > 95 * 1024 * 1024) {
      console.log(`  skipping oversized: ${f.repoPath} (${sz})`);
      return false;
    }
    return true;
  });
  console.log(`  ${filtered.length} files to upload`);

  // Upload blobs sequentially with small delay (avoids GitHub secondary rate limits)
  const tree = [];
  let done = 0;
  for (const f of filtered) {
    try {
      const sha = await createBlob(f.absPath);
      tree.push({ path: f.repoPath, mode: '100644', type: 'blob', sha });
    } catch (e) {
      console.error(`  FAIL ${f.repoPath}: ${e.message}`);
      throw e;
    }
    done++;
    if (done % 25 === 0 || done === filtered.length) {
      console.log(`  blobs: ${done}/${filtered.length}`);
    }
    await sleep(120); // ~8 req/sec, safely under secondary limit
  }

  console.log('Creating tree...');
  const treeBody = { tree };
  if (baseTreeSha) treeBody.base_tree = baseTreeSha;
  // Actually for a clean snapshot, don't set base_tree so we get exactly these files
  // For initial commit there's no base anyway
  const newTree = await api('POST', `/repos/${OWNER}/${REPO}/git/trees`, { tree });
  console.log(`  tree: ${newTree.sha}`);

  console.log('Creating commit...');
  const commitBody = {
    message: COMMIT_MESSAGE,
    tree: newTree.sha,
  };
  if (parentSha) commitBody.parents = [parentSha];
  const newCommit = await api('POST', `/repos/${OWNER}/${REPO}/git/commits`, commitBody);
  console.log(`  commit: ${newCommit.sha}`);

  console.log(`Updating ref heads/${BRANCH}...`);
  if (parentSha) {
    await api('PATCH', `/repos/${OWNER}/${REPO}/git/refs/heads/${BRANCH}`, {
      sha: newCommit.sha,
      force: true,
    });
  } else {
    await api('POST', `/repos/${OWNER}/${REPO}/git/refs`, {
      ref: `refs/heads/${BRANCH}`,
      sha: newCommit.sha,
    });
  }
  console.log('\n✓ Pushed successfully!');
  console.log(`  https://github.com/${OWNER}/${REPO}/tree/${BRANCH}`);
}

main().catch((e) => {
  console.error('FATAL:', e.message);
  process.exit(1);
});
