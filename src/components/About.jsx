
import {
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiTarget,
  FiZap,
  FiCheckCircle,
} from "react-icons/fi";

const strengths = [
  {
    icon: FiCode,
    title: "Clean Code",
    description: "Readable, maintainable code built with good practices.",
  },
  {
    icon: FiLayers,
    title: "Full Stack Thinking",
    description: "Connecting polished interfaces with reliable backend systems.",
  },
  {
    icon: FiTarget,
    title: "Problem Solving",
    description: "Breaking complex challenges into practical solutions.",
  },
  {
    icon: FiZap,
    title: "Continuous Learning",
    description: "Exploring new tools and improving with every project.",
  },
];

const technologies = ["React", "Node.js", "Express", "MongoDB"];

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-[#111C33] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 2xl:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-sky-400/[0.05] blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">
            A little about me
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            More than just writing{" "}
            <span className="text-sky-400">code.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            I enjoy turning ideas into useful digital products, solving
            meaningful problems, and building experiences that people love
            to use.
          </p>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Developer profile card */}
          <div className="group relative flex min-h-[390px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-700/70 bg-[#0F172A] p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl transition-all duration-500 group-hover:bg-sky-400/20"
            />

            <div className="relative flex items-start justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-2xl font-bold text-sky-400">
                R
              </div>

              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-xs font-medium text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Open to opportunities
              </span>
            </div>

            <div className="relative mt-12">
              <p className="text-sm font-medium text-sky-400">
                YOUR NEXT DEVELOPER
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Creative mind.
                <br />
                <span className="text-slate-400">Technical mindset.</span>
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
                Focused on building responsive interfaces, dependable
                applications, and thoughtful user experiences.
              </p>
            </div>

            <div className="relative mt-8 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2 text-xs font-medium text-slate-300 transition-colors duration-300 hover:border-sky-400/40 hover:text-sky-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="relative mt-8 flex items-center justify-between border-t border-slate-700/70 pt-5">
              <span className="text-sm text-slate-400">
                Always building. Always learning.
              </span>
              <FiArrowUpRight
                className="text-sky-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                size={22}
              />
            </div>
          </div>

          {/* About copy and strengths */}
          <div className="flex flex-col justify-center">
            <div className="space-y-4 text-base leading-7 text-slate-400">
              <p>
                Hi, I'm <span className="font-semibold text-white">Rana</span>,
                a Full Stack Developer passionate about creating modern web
                applications from the first idea to the final deployment.
              </p>

              <p>
                I enjoy working across the stack—from crafting intuitive
                frontends with React to building APIs, handling data, and
                connecting the pieces into a reliable application.
              </p>

              <p>
                My approach is simple: understand the problem, keep the
                solution practical, and pay attention to the details that
                make software easier to use and maintain.
              </p>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {strengths.map((strength) => {
                const Icon = strength.icon;

                return (
                  <article
                    key={strength.title}
                    className="group rounded-2xl border border-slate-700/70 bg-[#0F172A]/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-slate-800/70 sm:p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 transition-colors duration-300 group-hover:bg-sky-400/20">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-4 font-semibold text-slate-100">
                      {strength.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {strength.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-7 flex items-center gap-3 text-sm text-slate-400">
              <FiCheckCircle className="shrink-0 text-sky-400" size={18} />
              <span>
                Focused on quality, collaboration, and continuous improvement.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
