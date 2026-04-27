import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/images/logo.png";

export function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/get-appraisal", label: "Get Appraisal" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/for-agents", label: "For Agents" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#efefef] bg-white/98 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1540px] items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-10 lg:py-4">
        <Link href="/" className="flex min-w-0 items-center">
          <img
            src={logo}
            alt="What's Your Property Worth"
            className="h-12 w-auto sm:h-14 lg:h-[78px]"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`whitespace-nowrap text-[1rem] font-medium transition-colors duration-300 hover:text-brand-teal xl:text-[1.05rem] ${
                location === link.href ? "text-brand-teal" : "text-[#111111]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle navigation"
          className="rounded-full p-2 text-[#111111] transition-colors hover:bg-black/5 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="border-t border-black/5 bg-white px-4 py-4 shadow-sm lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`block text-base font-medium transition-colors hover:text-brand-teal ${
                    location === link.href ? "text-brand-teal" : "text-[#111111]"
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
