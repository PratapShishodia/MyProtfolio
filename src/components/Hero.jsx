import { useEffect, useState } from "react";
import {
  FiArrowDown,
  FiArrowRight,
  FiCode,
  FiLayers,
  FiTerminal,
} from "react-icons/fi";

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
];

const highlights = [
  { value: "10+", label: "Projects Built", icon: FiLayers },
  { value: "15+", label: "Technologies", icon: FiCode },
  { value: "100%", label: "Passion for Code", icon: FiTerminal },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-76px)] scroll-mt-20 items-center overflow-hidden bg-[#0F172A] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 2xl:px-16"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_25%,rgba(56,189,248,0.10),transparent_55%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

        <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 animate-pulse rounded-full bg-sky-400/[0.08] blur-[100px] sm:h-96 sm:w-96" />

        <div className="absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-blue-500/[0.06] blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col items-center text-center">
          {/* Availability badge */}
          <div className="animate-[fadeInUp_0.7s_ease-out_both] inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/[0.07] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
            </span>

            <span className="text-xs font-medium tracking-wide text-sky-200 sm:text-sm">
              Available for opportunities
            </span>
          </div>

          {/* Main heading */}
          <h1 className="mt-8 max-w-4xl animate-[fadeInUp_0.8s_ease-out_0.1s_both] text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Building digital
            <span className="mt-2 block">
              experiences that{" "}
              <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                matter.
              </span>
            </span>
          </h1>

          {/* Rotating role */}
          <div
            className="mt-7 flex min-h-8 items-center justify-center gap-2 text-base font-medium text-slate-300 sm:text-lg"
            aria-live="polite"
            aria-atomic="true"
          >
            <FiCode className="shrink-0 text-sky-400" size={20} />
            <span
              key={roleIndex}
              className="animate-[fadeInUp_0.35s_ease-out_both]"
            >
              {roles[roleIndex]}
            </span>
          </div>

          {/* Description */}
          <p className="mt-5 max-w-2xl animate-[fadeInUp_0.8s_ease-out_0.2s_both] text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            I craft modern, responsive web applications with clean code,
            thoughtful design, and scalable architecture — turning complex ideas
            into simple digital experiences.
          </p>

          {/* Actions */}
          <div className="mt-9 flex w-full animate-[fadeInUp_0.8s_ease-out_0.3s_both] flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="#projects"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-sky-400 px-7 py-3 font-semibold text-slate-950 shadow-lg shadow-sky-400/10 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-300 hover:shadow-xl hover:shadow-sky-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
            >
              View Projects
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/40 px-7 py-3 font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-slate-800 hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              Let's Connect
              <FiArrowRight size={17} />
            </a>
          </div>

          {/* Highlights */}
          <div className="mt-16 grid w-full max-w-3xl grid-cols-1 divide-y divide-slate-700/60 rounded-2xl border border-slate-700/60 bg-slate-800/25 px-5 py-2 backdrop-blur-sm sm:mt-20 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group flex items-center justify-center gap-4 px-3 py-5 transition-colors duration-300 hover:bg-sky-400/[0.04] sm:flex-col sm:gap-2 sm:rounded-xl sm:py-6"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-sky-400 transition-all duration-300 group-hover:border-sky-400/30 group-hover:bg-sky-400/10">
                    <Icon size={19} />
                  </span>

                  <div className="text-left sm:text-center">
                    <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll cue */}
          <a
            href="#about"
            className="mt-12 hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-sky-400 sm:inline-flex"
          >
            Explore more
            <FiArrowDown className="animate-bounce" size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
