import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1f1f1f] py-4 text-center text-sm text-[#b8b8b8]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <p>whatsyourpropertyworth.com © 2026</p>
        <p className="cursor-pointer hover:text-white transition-colors">Privacy Policy</p>
        <button
          onClick={scrollToTop}
          className="flex h-8 w-8 items-center justify-center bg-brand-teal text-white transition-colors hover:bg-brand-blue"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </footer>
  );
}
