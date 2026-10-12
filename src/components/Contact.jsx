
import { useState } from "react";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

const contactDetails = {
  email: "hello@example.com",
  location: "India · Open to remote opportunities",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (error) setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, subject, message } = form;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please complete your name, email, and message.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const mailSubject = subject.trim() || "Portfolio inquiry";

    const body = [
      `Name: ${name.trim()}`,
      `Reply email: ${email.trim()}`,
      "",
      message.trim(),
    ].join("\n");

    const mailtoUrl =
      `mailto:${contactDetails.email}` +
      `?subject=${encodeURIComponent(mailSubject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  const inputClasses =
    "mt-2 w-full rounded-xl border border-slate-700 bg-[#0F172A]/80 px-4 py-3.5 text-sm text-white outline-none transition-all duration-200 placeholder:text-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/10";

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-[#111C33] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 2xl:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-400/[0.06] blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">
            Get in touch
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Have a project in{" "}
            <span className="text-sky-400">mind?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Have an idea, an opportunity, or just want to connect?
            I'd love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          {/* Contact information */}
          <aside className="flex flex-col rounded-2xl border border-slate-700/70 bg-[#0F172A] p-6 sm:p-8 lg:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-400">
              <FiMail size={23} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Let's connect.
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              I'm always happy to discuss interesting projects,
              collaborations, and opportunities to build something useful.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href={`mailto:${contactDetails.email}`}
                className="group flex items-start gap-4 rounded-xl border border-slate-700/60 bg-slate-800/30 p-4 transition-colors duration-300 hover:border-sky-400/30 hover:bg-slate-800/70"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                  <FiMail size={19} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-slate-500">
                    Email me
                  </span>
                  <span className="mt-1 block break-all text-sm font-medium text-slate-200 transition-colors group-hover:text-sky-300">
                    {contactDetails.email}
                  </span>
                </span>

                <FiArrowUpRight
                  className="shrink-0 text-slate-500 transition-colors group-hover:text-sky-400"
                  size={18}
                />
              </a>

              <div className="flex items-start gap-4 rounded-xl border border-slate-700/60 bg-slate-800/30 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                  <FiMapPin size={19} />
                </span>

                <span>
                  <span className="block text-xs text-slate-500">
                    Location
                  </span>
                  <span className="mt-1 block text-sm font-medium text-slate-200">
                    {contactDetails.location}
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-700/70 pt-6">
              <p className="text-sm font-medium text-slate-300">
                Find me online
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href={contactDetails.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-300"
                >
                  <FiGithub size={20} />
                </a>

                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-300"
                >
                  <FiLinkedin size={20} />
                </a>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-sky-400/15 bg-sky-400/[0.05] p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-sky-200">
                <FiCheckCircle size={17} />
                Open to new opportunities
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                Availability details are sample content and can be
                updated to match your current situation.
              </p>
            </div>
          </aside>

          {/* Contact form */}
          <div className="rounded-2xl border border-slate-700/70 bg-[#0F172A]/70 p-6 sm:p-8 lg:p-9">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Send a message
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Fill out the details below to prepare an email.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-slate-300"
                  >
                    Your name <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-slate-300"
                  >
                    Email address <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="text-sm font-medium text-slate-300"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  maxLength={150}
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-slate-300"
                >
                  Your message <span className="text-sky-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  maxLength={5000}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about what you have in mind..."
                  className={`${inputClasses} resize-y`}
                />
                <p className="mt-2 text-right text-xs text-slate-500">
                  {form.message.length}/5000
                </p>
              </div>

              {error && (
                <p role="alert" className="text-sm text-rose-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
              >
                Prepare Email
                <FiSend
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                />
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                This demo opens your email application. It does not send
                messages directly from the website.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
