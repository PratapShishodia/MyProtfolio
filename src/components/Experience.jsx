
import {
  FiBriefcase,
  FiCalendar,
  FiArrowUpRight,
  FiCheckCircle,
} from "react-icons/fi";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "TechNova Solutions",
    type: "Full-time",
    period: "Jan 2025 — Present",
    location: "Remote",
    description:
      "Building and improving modern web applications, from responsive user interfaces to backend APIs and database integrations.",
    achievements: [
      "Developed reusable React components to improve UI consistency.",
      "Built REST APIs and integrated application data flows.",
      "Collaborated on responsive layouts and application performance.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    current: true,
  },
  {
    role: "Frontend Developer Intern",
    company: "PixelCraft Studio",
    type: "Internship",
    period: "Jun 2024 — Dec 2024",
    location: "Hybrid",
    description:
      "Worked on interface development and helped translate design concepts into responsive, accessible web experiences.",
    achievements: [
      "Implemented responsive pages from design mockups.",
      "Improved reusable styling patterns across UI components.",
      "Worked with Git-based collaboration and code reviews.",
    ],
    technologies: ["JavaScript", "React", "Tailwind CSS", "Git"],
    current: false,
  },
  {
    role: "Web Development Trainee",
    company: "CodeBridge Academy",
    type: "Training",
    period: "Jan 2024 — May 2024",
    location: "On-site",
    description:
      "Built foundational skills in modern web development through guided learning, practical exercises, and sample projects.",
    achievements: [
      "Created responsive layouts using HTML and CSS.",
      "Practiced JavaScript fundamentals and DOM interactions.",
      "Built sample projects to strengthen development skills.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    current: false,
  },
];

function ExperienceItem({ experience, index }) {
  return (
    <article className="group relative pb-10 pl-9 last:pb-0 sm:pl-12">
      {/* Timeline connector */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[9px] top-0 w-px bg-gradient-to-b from-sky-400/60 via-slate-700 to-slate-700/20 group-last:hidden sm:left-[11px]"
      />

      {/* Timeline node */}
      <div className="absolute left-0 top-1 z-10 flex h-5 w-5 items-center justify-center rounded-full border border-sky-400/50 bg-[#0F172A] transition-all duration-300 group-hover:border-sky-300 group-hover:shadow-[0_0_18px_rgba(56,189,248,0.25)] sm:h-6 sm:w-6">
        <span
          className={`h-2 w-2 rounded-full ${
            experience.current ? "bg-sky-400" : "bg-slate-500"
          } transition-colors duration-300 group-hover:bg-sky-300`}
        />
      </div>

      <div className="rounded-2xl border border-slate-700/70 bg-[#111C33]/80 p-5 transition-all duration-300 hover:border-sky-400/30 hover:bg-slate-800/60 sm:p-7">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-400">
              <FiBriefcase size={20} />
            </div>

            <div className="min-w-0">
              <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
                {experience.role}
              </h3>

              <p className="mt-1 font-medium text-sky-300">
                {experience.company}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {experience.type} · {experience.location}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-2 sm:flex-col sm:items-end">
            <span className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 text-xs font-medium text-slate-300">
              <FiCalendar size={14} className="text-sky-400" />
              {experience.period}
            </span>

            {experience.current && (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Current role
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
          {experience.description}
        </p>

        {/* Achievements */}
        <div className="mt-5 space-y-3">
          {experience.achievements.map((achievement) => (
            <div key={achievement} className="flex items-start gap-3">
              <FiCheckCircle
                size={17}
                className="mt-1 shrink-0 text-sky-400"
              />
              <p className="text-sm leading-6 text-slate-300">
                {achievement}
              </p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-700/60 pt-5">
          {experience.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-slate-700/80 bg-[#0F172A] px-3 py-1.5 text-xs font-medium text-slate-400 transition-colors duration-200 hover:border-sky-400/30 hover:text-sky-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-20 overflow-hidden bg-[#0F172A] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 2xl:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-24 h-96 w-96 rounded-full bg-sky-400/[0.05] blur-[110px]"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-12 max-w-3xl sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">
            Career journey
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Experience &{" "}
            <span className="text-sky-400">growth.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            A snapshot of professional growth, hands-on development, and
            continuous learning across the software development lifecycle.
          </p>
        </div>

        {/* Timeline */}
        <div>
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={`${experience.company}-${experience.role}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* Closing note */}
        <div className="mt-10 rounded-2xl border border-slate-700/70 bg-[#111C33]/70 p-5 text-center sm:p-7">
          <p className="text-base font-medium text-white">
            Every project is an opportunity to grow.
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Learning new technologies, improving existing skills, and
            building better solutions along the way.
          </p>
        </div>
      </div>
    </section>
  );
}
