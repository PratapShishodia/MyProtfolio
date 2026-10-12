# 🚀 Developer Portfolio

A modern, responsive developer portfolio built with **React, Vite, Tailwind CSS, and React Icons**. Designed with a professional Midnight Navy theme, subtle Sky Blue accents, smooth animations, and interactive UI elements.

The portfolio showcases personal information, technical skills, projects, professional experience, and contact details in a clean, developer-focused design.

## ✨ Features

* **Responsive Design** — Optimized for desktops, laptops, tablets, and mobile devices.
* **Modern UI** — Midnight Navy background with Sky Blue accents and slate-colored surfaces.
* **Interactive Navbar** — Sticky navigation with a responsive mobile menu.
* **Animated Hero Section** — Centered introduction with rotating developer roles and call-to-action buttons.
* **About Section** — Personal introduction and key strengths.
* **Tech Stack** — Organized technical skills by category.
* **Projects Showcase** — Project previews, technology tags, and demo/source links.
* **Experience Timeline** — Professional experience, achievements, and technologies.
* **Contact Section** — Contact form with email-app integration and social links.
* **Reusable Components** — Separate React components for easier maintenance.
* **Accessibility Considerations** — Semantic sections and reduced-motion support.

## 🛠️ Tech Stack

| Technology       | Purpose                              |
| ---------------- | ------------------------------------ |
| React            | Component-based UI                   |
| Vite             | Development server and build tooling |
| Tailwind CSS     | Responsive styling and layouts       |
| React Icons      | Icons throughout the interface       |
| JavaScript (JSX) | Application logic and UI components  |

## 📁 Project Structure

```text
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── Component/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── TechStack.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

> The structure above is a suggested layout. Add `src/pages/Home.jsx` if you want to keep page-level composition separate from reusable components. The current portfolio can also be composed directly in `App.jsx`.

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/) — preferably a current LTS release.
* npm — included with Node.js.
* Git (optional, for version control).

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd portfolio
```

If the project already exists on your computer, open its root folder in your terminal instead.

### 2. Install dependencies

```bash
npm install
```

### 3. Install React Icons

```bash
npm install react-icons
```

If Tailwind CSS has not yet been configured, follow the installation instructions for the version compatible with your project:

[Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

### 5. Build for production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

### 6. Preview the production build

```bash
npm run preview
```

## 🎨 Design System

The portfolio uses a dark, professional color palette rather than a completely black background.

| Element            | Color     |
| ------------------ | --------- |
| Main background    | `#0F172A` |
| Surface background | `#111C33` |
| Secondary surface  | `#1E293B` |
| Primary accent     | `#38BDF8` |
| Primary text       | `#F8FAFC` |
| Secondary text     | `#94A3B8` |

### Design Principles

* Use Sky Blue for important buttons, links, highlights, and interactive states.
* Keep spacing consistent between sections.
* Use subtle borders, gradients, and shadows to add depth.
* Keep animations smooth and avoid excessive visual effects.
* Test layouts on large monitors, laptops, and mobile screens.
* Respect reduced-motion preferences wherever possible.

## 🧩 Main Components

| Component        | Responsibility                                    |
| ---------------- | ------------------------------------------------- |
| `Navbar.jsx`     | Site branding and navigation                      |
| `Hero.jsx`       | Introduction, role animation, and calls to action |
| `About.jsx`      | Personal summary and strengths                    |
| `TechStack.jsx`  | Technical skills and tools                        |
| `Projects.jsx`   | Featured projects and project links               |
| `Experience.jsx` | Experience timeline and achievements              |
| `Contact.jsx`    | Contact form and social links                     |
| `Footer.jsx`     | Quick links, copyright, and back-to-top action    |

Keep shared UI in `src/Component/` and page-level layouts in `src/pages/`.

## ✏️ Customization

Before publishing, replace the placeholder content with your actual details.

### Personal Information

Update the relevant content in:

* `Hero.jsx` — name, title, introduction, and statistics.
* `About.jsx` — biography, strengths, and personal details.
* `TechStack.jsx` — skills you actually use.
* `Experience.jsx` — real roles, organizations, dates, and achievements.

### Projects

In `Projects.jsx`, replace the example projects with your own. For each project, provide:

* Project name and description.
* Technologies used.
* GitHub repository URL.
* Live demo URL, if available.

Replace all placeholder URLs, including `https://example.com/`, before deployment.

### Contact Details

In `Contact.jsx`, update the email address and social links with your own details.

**Important:** The current contact form uses a `mailto` flow to open the visitor's default email application. It does not send messages directly from the website. For direct submissions, integrate a backend API or a suitable form service.

### Branding and Navigation

Update the site name and navigation links in `Navbar.jsx` and `Footer.jsx`. Make sure each section ID matches its corresponding navigation link.

## 📱 Responsive Design

The layout should adapt to different viewport sizes, including:

* Large desktop monitors (2560 × 1440).
* Laptop screens (1920 × 1200).
* Tablets and mobile devices.

Use Tailwind CSS responsive prefixes such as `sm:`, `md:`, `lg:`, and `xl:` to adapt grids, typography, spacing, and navigation.

## 🚢 Deployment

You can deploy the production build to services such as:

* [Vercel](https://vercel.com/)
* [Netlify](https://www.netlify.com/)
* [GitHub Pages](https://pages.github.com/)

For most static hosting providers, configure the build command as `npm run build` and the output directory as `dist`.

Follow the chosen provider's instructions for configuring a Vite project and custom domain.

## ✅ Before Publishing

* [ ] Replace all dummy text with real information.
* [ ] Update email, GitHub, LinkedIn, and other social links.
* [ ] Add real project repository and demo URLs.
* [ ] Verify that every navigation link works.
* [ ] Test the layout on desktop and mobile.
* [ ] Check the browser console for errors.
* [ ] Run `npm run build` and resolve any build errors.
* [ ] Add a favicon and page metadata.
* [ ] Test the contact form behavior.

## 📄 License

Choose a license before making this repository public. If you want others to reuse or modify your code, consider adding an appropriate open-source license, such as the MIT License.

---

**Built with React, Vite, Tailwind CSS, and a focus on clean design.**
