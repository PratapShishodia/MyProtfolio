
import {
  FiArrowUp,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiHeart,
} from "react-icons/fi";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-700/60 bg-[#0F172A] px-5 pb-6 pt-12 sm:px-8 sm:pt-14 lg:px-12 2xl:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Main footer */}
        <div className="grid gap-10 border-b border-slate-700/60 pb-10 md:grid-cols-[1fr_auto] md:items-start">
          {/* Branding */}
          <div className="max-w-md">
            <a
              href="#home"
              aria-label="Rana Dev, back to home"
              className="group inline-flex items-center gap-2"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-400/10 text-lg font-bold text-sky-400 transition-all duration-300 group-hover:border-sky-400/60 group-hover:bg-sky-400/20">
                R
              </span>

              <span className="text-xl font-bold tracking-tight text-white">
                RANA<span className="text-sky-400">.DEV</span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Building thoughtful digital experiences with modern
              technologies, clean code, and a focus on solving real problems.
            </p>

            <p className="mt-4 inline-flex items-center gap-2 text-sm text-slate-500">
              Made with
              <FiHeart
                size={15}
                className="fill-sky-400/20 text-sky-400"
                aria-label="love"
              />
              and a lot of coffee.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:min-w-[280px]">
            <h2 className="text-sm font-semibold text-white">
              Quick Links
            </h2>

            <nav
              aria-label="Footer navigation"
              className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 md:grid-cols-2"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm text-slate-400 transition-colors duration-200 hover:text-sky-400"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col gap-5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-slate-500 sm:text-sm">
            © {currentYear} Rana.dev. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-300"
            >
              <FiGithub size={18} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-300"
            >
              <FiLinkedin size={18} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="group ml-1 inline-flex h-10 items-center gap-2 rounded-xl border border-sky-400/30 bg-sky-400/10 px-3 text-sm font-medium text-sky-300 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/60 hover:bg-sky-400/15"
            >
              Back to top
              <FiArrowUp
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              <FiArrowUpRight className="sr-only" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
