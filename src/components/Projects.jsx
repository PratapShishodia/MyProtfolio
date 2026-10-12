
import {
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
  FiLayers,
} from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiStripe,
  SiTypescript,
} from "react-icons/si";

const projects = [
  {
    number: "01",
    title: "Nexus Commerce",
    category: "Full Stack Application",
    description:
      "A modern e-commerce experience featuring product discovery, shopping cart management, user accounts, and a streamlined checkout flow.",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/",
    demo: "https://example.com/",
    featured: true,
    preview: "commerce",
    label: "ECOMMERCE PLATFORM",
  },
  {
    number: "02",
    title: "FlowBoard",
    category: "Productivity Tool",
    description:
      "A collaborative task management dashboard concept with project boards, task organization, and a clean workflow-focused interface.",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/",
    demo: "https://example.com/",
    featured: false,
    preview: "dashboard",
    label: "PROJECT MANAGEMENT",
  },
  {
    number: "03",
    title: "PayPilot",
    category: "Fintech Concept",
    description:
      "A sample financial dashboard that brings together transaction summaries, spending insights, and payment workflow concepts.",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Stripe", icon: SiStripe },
    ],
    github: "https://github.com/",
    demo: "https://example.com/",
    featured: false,
    preview: "finance",
    label: "FINANCE DASHBOARD",
  },
];

function CommercePreview() {
  return (
    <div className="relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-t-2xl bg-gradient-to-br from-slate-800 via-[#14243B] to-[#0F172A] p-5 sm:min-h-[320px] sm:p-7">
      <div className="absolute -right-12 -top-16 h-52 w-52 rounded-full bg-sky-400/15 blur-3xl" />

      <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-sky-400" />
          <span className="text-sm font-bold tracking-wide text-white">
            nexus<span className="text-sky-400">.</span>
          </span>
        </div>
        <div className="flex gap-2">
          <span className="h-2 w-12 rounded-full bg-white/10" />
          <span className="h-2 w-8 rounded-full bg-white/10" />
        </div>
      </div>

      <div className="relative mt-6 grid flex-1 grid-cols-2 gap-4">
        <div className="flex flex-col justify-center">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-sky-300">
            NEW COLLECTION
          </span>
          <p className="mt-3 text-2xl font-bold leading-tight text-white sm:text-4xl">
            Shop the
            <br />
            everyday.
          </p>
          <div className="mt-4 w-fit rounded-lg bg-sky-400 px-3 py-2 text-xs font-semibold text-slate-950">
            Explore products
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute h-36 w-36 rounded-full border border-sky-300/20 sm:h-48 sm:w-48" />
          <div className="absolute h-28 w-28 rounded-full bg-sky-400/10 blur-xl sm:h-40 sm:w-40" />
          <div className="relative flex h-28 w-24 -rotate-6 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-slate-500/40 to-slate-900/80 shadow-2xl transition-transform duration-500 group-hover:rotate-0 sm:h-36 sm:w-32">
            <FiLayers className="text-sky-300" size={48} />
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="relative min-h-[210px] overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#17253D] to-[#101827] p-5 sm:min-h-[235px] sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-400">Workspace overview</p>
          <p className="mt-1 text-lg font-bold text-white">My projects</p>
        </div>
        <div className="rounded-lg border border-sky-400/20 bg-sky-400/10 px-3 py-2 text-xs text-sky-300">
          + New task
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {["To do", "In progress", "Completed"].map((label, index) => (
          <div
            key={label}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 sm:p-3"
          >
            <p className="text-[10px] text-slate-400 sm:text-xs">{label}</p>
            <div
              className={`mt-3 h-1.5 rounded-full ${
                index === 1 ? "w-3/4 bg-sky-400" : "w-1/2 bg-slate-500/60"
              }`}
            />
            <div className="mt-2 h-1.5 w-2/3 rounded-full bg-slate-700" />
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-300">Website redesign</span>
          <span className="text-[10px] text-sky-300">75%</span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-slate-700">
          <div className="h-full w-3/4 rounded-full bg-sky-400" />
        </div>
      </div>
    </div>
  );
}

function FinancePreview() {
  return (
    <div className="relative min-h-[210px] overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#152B3A] to-[#0F172A] p-5 sm:min-h-[235px] sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-400">Total balance</p>
          <p className="mt-1 text-2xl font-bold text-white">$24,680.50</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
          <SiStripe size={23} />
        </div>
      </div>

      <div className="mt-5 flex h-20 items-end gap-2 sm:h-24">
        {[35, 55, 40, 75, 50, 85, 62, 100, 68, 80, 48, 72].map(
          (height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t-sm bg-sky-400/70 transition-all duration-300 hover:bg-sky-300"
              style={{ height: `${height}%` }}
            />
          ),
        )}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
        <span className="text-xs text-slate-400">Monthly overview</span>
        <span className="text-xs font-medium text-sky-300">
          Sample analytics
        </span>
      </div>
    </div>
  );
}

const previews = {
  commerce: CommercePreview,
  dashboard: DashboardPreview,
  finance: FinancePreview,
};

function ProjectCard({ project }) {
  const Preview = previews[project.preview];

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700/70 bg-[#111C33] transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400/40 hover:shadow-2xl hover:shadow-sky-950/30 ${
        project.featured ? "lg:grid lg:grid-cols-2" : ""
      }`}
    >
      <div className="relative overflow-hidden">
        <div className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-[#0F172A]/80 px-3 py-1.5 text-[10px] font-semibold tracking-wider text-slate-200 backdrop-blur-md">
          {project.label}
        </div>
        <div className="transition-transform duration-500 group-hover:scale-[1.02]">
          <Preview />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-sky-400">
              {project.category}
            </p>
            <h3 className="mt-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-sky-300 sm:text-2xl">
              {project.title}
            </h3>
          </div>
          <span className="text-sm font-medium text-slate-600">
            {project.number}
          </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <span
                key={technology.name}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-800/50 px-2.5 py-1.5 text-xs text-slate-300"
              >
                <Icon size={13} />
                {technology.name}
              </span>
            );
          })}
        </div>

        <div className="mt-auto flex items-center gap-4 border-t border-slate-700/70 pt-5 mt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title} source on GitHub`}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-sky-300"
          >
            <FiGithub size={17} />
            Source
            <FiExternalLink size={13} />
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} live demo`}
            className="group/demo ml-auto inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition-colors hover:text-sky-300"
          >
            Live Demo
            <FiArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover/demo:-translate-y-0.5 group-hover/demo:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-hidden bg-[#111C33] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 2xl:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-sky-400/[0.05] blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">
              Selected work
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Projects that bring ideas{" "}
              <span className="text-sky-400">to life.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              A selection of sample projects demonstrating interface design,
              application architecture, and full stack development.
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-300">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            03 Sample Projects
          </span>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:mt-14 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.number}
              className={project.featured ? "lg:col-span-2" : ""}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-sm text-slate-400">
            These are placeholder projects for the portfolio design.
          </p>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-400/[0.06] hover:text-sky-300"
          >
            <FiGithub size={18} />
            Explore GitHub
            <FiArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
