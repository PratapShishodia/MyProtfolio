
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiVite,
  SiFigma,
} from "react-icons/si";
import { FiArrowUpRight, FiLayers } from "react-icons/fi";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building polished, responsive user interfaces.",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB", level: "Core" },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
        level: "Core",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        level: "Familiar",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
        level: "Core",
      },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: "Core" },
      { name: "CSS3", icon: SiCss, color: "#1572B6", level: "Core" },
    ],
  },
  {
    title: "Backend",
    description: "Creating APIs and application logic.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#83CD29", level: "Core" },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#E2E8F0",
        level: "Core",
      },
      {
        name: "Python",
        icon: SiPython,
        color: "#FFD43B",
        level: "Familiar",
      },
    ],
  },
  {
    title: "Databases",
    description: "Storing and organizing application data.",
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
        level: "Core",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#699ECA",
        level: "Familiar",
      },
      { name: "MySQL", icon: SiMysql, color: "#4479A1", level: "Familiar" },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Building, testing, and shipping software.",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032", level: "Core" },
      { name: "GitHub", icon: SiGithub, color: "#F8FAFC", level: "Core" },
      { name: "Docker", icon: SiDocker, color: "#2496ED", level: "Familiar" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37", level: "Core" },
      { name: "Vite", icon: SiVite, color: "#A78BFA", level: "Core" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E", level: "Familiar" },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-20 overflow-hidden bg-[#0F172A] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 2xl:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-sky-400/[0.06] blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/[0.06] px-4 py-2 text-sm font-medium text-sky-300">
            <FiLayers size={16} />
            My toolkit
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Technologies I work{" "}
            <span className="text-sky-400">with.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            A collection of tools and technologies for crafting modern
            interfaces, building dependable backends, and delivering
            complete web applications.
          </p>
        </div>

        {/* Skill groups */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:gap-7">
          {skillGroups.map((group, groupIndex) => (
            <article
              key={group.title}
              className="group rounded-2xl border border-slate-700/70 bg-[#111C33]/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:shadow-xl hover:shadow-sky-950/20 sm:p-7"
              style={{ animationDelay: `${groupIndex * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {group.description}
                  </p>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/70 text-sky-400 transition-colors duration-300 group-hover:border-sky-400/30 group-hover:bg-sky-400/10">
                  <FiArrowUpRight size={19} />
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-700/60 bg-[#0F172A]/70 p-3 transition-all duration-300 hover:border-sky-400/30 hover:bg-slate-800/70 sm:p-4"
                    >
                      <Icon
                        size={23}
                        style={{ color: skill.color }}
                        className="shrink-0 transition-transform duration-300 hover:scale-110"
                        aria-hidden="true"
                      />

                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-slate-200">
                          {skill.name}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {skill.level}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>

        {/* Closing note */}
        <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
          <span className="text-sm text-slate-400">
            My toolkit keeps evolving.
          </span>
          <span className="text-sm font-medium text-sky-400">
            Always learning, always improving.
          </span>
        </div>
      </div>
    </section>
  );
}
