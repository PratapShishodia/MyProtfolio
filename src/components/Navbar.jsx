
import { useState } from "react";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMenu,
  FiX,
} from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#0F172A]/85 backdrop-blur-xl">
      <nav
        className="mx-auto flex min-h-[76px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12 2xl:px-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-2"
          aria-label="Rana Dev - Home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-400/10 text-lg font-bold text-sky-400 transition-all duration-300 group-hover:border-sky-400/70 group-hover:bg-sky-400/20">
            R
          </span>

          <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
            RANA<span className="text-sky-400">.DEV</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-sky-400"
            >
              {link.name}
              <span className="absolute bottom-1 left-4 right-4 h-[2px] origin-left scale-x-0 rounded-full bg-sky-400 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* Social Links + CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-sky-400"
          >
            <FiGithub size={19} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-sky-400"
          >
            <FiLinkedin size={19} />
          </a>

          <a
            href="#contact"
            className="group ml-1 inline-flex items-center gap-2 rounded-xl border border-sky-400/40 bg-sky-400/10 px-4 py-2.5 text-sm font-semibold text-sky-300 transition-all duration-300 hover:border-sky-400 hover:bg-sky-400 hover:text-slate-950 hover:shadow-lg hover:shadow-sky-400/10"
          >
            Let's Talk
            <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 transition-colors hover:border-sky-400/40 hover:text-sky-400 lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <FiX size={23} /> : <FiMenu size={23} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="min-h-0">
          <div className="border-t border-white/[0.08] bg-[#111C33] px-5 py-4 sm:px-8">
            <div className="mx-auto flex max-w-[1600px] flex-col gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={closeMenu}
                  style={{ transitionDelay: isMenuOpen ? `${index * 40}ms` : "0ms" }}
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-sky-400/10 hover:text-sky-400"
                >
                  {link.name}
                  <FiArrowUpRight className="text-slate-500" />
                </a>
              ))}

              <a
                href="#contact"
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={closeMenu}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-4 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-300"
              >
                Let's Talk
                <FiArrowUpRight size={18} />
              </a>

              <div className="mt-3 flex items-center justify-center gap-6 border-t border-white/[0.08] pt-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-slate-400 transition-colors hover:text-sky-400"
                >
                  <FiGithub size={21} />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-400 transition-colors hover:text-sky-400"
                >
                  <FiLinkedin size={21} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
