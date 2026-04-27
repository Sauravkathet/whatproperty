import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Home } from "lucide-react";

export function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/get-appraisal", label: "GET APPRAISAL" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
    { href: "/for-agents", label: "FOR AGENTS" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded bg-brand-green text-white shrink-0">
            <Home className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div className="flex flex-col text-[11px] sm:text-sm font-bold leading-tight truncate">
            <span className="text-gray-800">WHAT'S YOUR</span>
            <span className="text-brand-green">PROPERTY WORTH?</span>
          </div>
        </Link>

        {/* Desktop Nav (lg+) */}
        <nav className="hidden items-center gap-5 xl:gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-bold tracking-wide transition-colors hover:text-brand-teal whitespace-nowrap ${
                location === link.href ? "text-brand-teal" : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile / Tablet Menu Toggle (<lg) */}
        <button
          aria-label="Toggle navigation"
          className="p-2 text-gray-600 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile / Tablet Nav (<lg) */}
      {isMobileMenuOpen && (
        <nav className="absolute left-0 top-16 sm:top-20 w-full bg-white p-4 shadow-lg lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`block text-sm font-bold tracking-wide transition-colors hover:text-brand-teal ${
                    location === link.href ? "text-brand-teal" : "text-gray-600"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
