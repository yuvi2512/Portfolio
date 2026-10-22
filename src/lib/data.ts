export const profile = {
  name: "Yatish Joshi",
  title: "Software Developer",
  location: "Indore",
  email: "joshiyatish25@gmail.com",
  phone: "+91 7000938418",
  phoneHref: "tel:+917000938418",
  linkedin: "https://www.linkedin.com/in/yatish-joshi-23997622a/",
  github: "https://github.com/yuvi2512",
  resume: "/yatish-joshi-resume.pdf",
  summary:
    "Software developer with 3+ years of experience building responsive, scalable, and high-performance web applications using React.js and Next.js. Strong expertise in state management, REST API integration, performance optimization, and modern frontend architecture.",
};

export const nav = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Work" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
] as const;

export const experience = [
  {
    role: "Frontend Developer",
    company: "App Wizards",
    place: "Indore",
    dates: "October 2025 — Present",
    current: true,
    points: [
      "Own the architectural migration and scalability of core frontend applications, using Next.js to optimize server-side rendering and improve SEO.",
      "Establish and enforce code quality standards across the frontend team through rigorous code reviews, custom ESLint configurations, and robust TypeScript and JavaScript patterns.",
    ],
  },
  {
    role: "Web Developer",
    company: "Express Solution Labs",
    place: "Indore",
    dates: "March 2024 — September 2025",
    current: false,
    points: [
      "Built and deployed ERP and SaaS platforms with React.js and Next.js for business automation, analytics, and reporting.",
      "Designed and developed RESTful APIs with Node.js and Express.js, along with Next.js API Routes, integrating optimized PostgreSQL queries for accuracy, performance, and scalability.",
      "Collaborated with UI/UX designers, frontend, and backend engineers on usability, accessibility, and engagement.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Cubixsys Technologies",
    place: "Indore",
    dates: "September 2023 — February 2024",
    current: false,
    stat: "95%",
    statLabel: "on-time delivery",
    points: [
      "Designed and implemented scalable frontend components for multiple projects.",
      "Developed reusable UI components with React.js and Material UI, improving efficiency and maintainability.",
      "Worked with cross-functional teams to streamline project workflows and collaboration.",
    ],
  },
] as const;

export type Project = {
  slug: string;
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  eyebrow: string;
  summary: string;
  place: string;
  live?: string;
  repo?: string;
  stack: string[];
  points: string[];
};

export const projects: Project[] = [
  {
    slug: "learn-linker",
    title: "Learn Linker",
    image: { src: "/Learn.png", width: 1920, height: 940 },
    eyebrow: "Selected work 01",
    place: "Role-based learning platform",
    summary:
      "A role-based Next.js application with access control for three or more user types, school workflows, and AI-assisted study tools.",
    live: "https://learn-linker.vercel.app/dashboard",
    repo: "https://github.com/yuvi2512/Learn-Linker",
    stack: [
      "Next.js",
      "React",
      "NextAuth",
      "PostgreSQL",
      "Sequelize",
      "REST APIs",
    ],
    points: [
      "Developed a role-based Next.js application with RBAC for 3+ user types, with granular permissions and secure data access across user-specific workflows.",
      "Built and integrated core modules for batch management, attendance, marksheets, assignments, timetables, and student dashboards using React and Next.js.",
      "Integrated AI-powered study notes and test-paper generation through external APIs, with environment-based feature toggles.",
      "Designed the database layer with PostgreSQL and Sequelize ORM, combining ORM operations with direct SQL queries and migrations.",
      "Implemented authentication and authorization with NextAuth, including session management and a teacher invitation workflow with a bootstrap-admin onboarding pattern.",
    ],
  },
  {
    slug: "erp-saas",
    title: "ERP & SaaS platforms",
    image: { src: "/ERP.png", width: 1920, height: 960 },
    eyebrow: "Selected work 02",
    place: "Express Solution Labs · Indore",
    summary:
      "Business platforms for automation, analytics, and reporting — React and Next.js on the surface, Node, Express, and PostgreSQL underneath.",
    stack: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "REST APIs",
    ],
    points: [
      "Built and deployed ERP and SaaS platforms using React.js and Next.js, delivering scalable solutions for business automation, analytics, and reporting.",
      "Designed and developed RESTful APIs using Node.js and Express.js, along with Next.js API Routes.",
      "Integrated optimized SQL queries in PostgreSQL so reporting stayed accurate as the data grew.",
      "Collaborated closely with UI/UX designers and engineers to improve usability, accessibility, and engagement.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    note: "Interfaces and application UI",
    items: [
      "React.js",
      "Next.js",
      "Material UI",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
    ],
  },
  {
    label: "Backend",
    note: "APIs and data",
    items: ["Next.js API Routes", "REST APIs", "Node.js", "Express.js", "SQL (PostgreSQL)"],
  },
  {
    label: "Tools",
    note: "Daily workflow",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Chrome DevTools",
      "VS Code",
      "NPM",
      "Yarn",
      "Vite",
      "Cursor",
      "Claude",
    ],
  },
] as const;

export const education = {
  degree: "Masters of Computer Applications",
  school: "Manipal University, Jaipur",
  dates: "2023 — 2025",
};

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
