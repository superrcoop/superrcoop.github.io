export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "repyt",
    number: "01",
    name: "Repyt AI Word Game",
    category: "AI Semantic Odyssey",
    description: "An addictive real-time AI word rally and semantic proximity puzzle powered by Next.js, Google Gemini, and procedural Web Audio.",
    liveUrl: "https://playrepyt.vercel.app/",
    githubUrl: "https://github.com/superrcoop/repyt",
    col1Image1: "/repyt-mobile.png",
    col1Image2: "/repyt-voyage-card.png",
    col2Image: "/repyt-preview.png",
  },
  {
    id: "pixel-runner",
    number: "02",
    name: "Pixel Runner",
    category: "Retro 8-Bit Cyber Arcade",
    description: "High-intensity 8-bit cyber obstacle runner built with React 18, TypeScript, Vite, Web Audio API synthesizers, and multi-platform controls.",
    liveUrl: "https://github.com/superrcoop/pixel-run-game",
    githubUrl: "https://github.com/superrcoop/pixel-run-game",
    col1Image1: "/pixel-runner-gameplay.png",
    col1Image2: "/pixel-runner-action.png",
    col2Image: "/pixel-runner-menu.png",
  },
  {
    id: "crackerjack",
    number: "03",
    name: "Crackerjack",
    category: "Identity Security & Cyber Deception",
    description: "High-resilience identity security platform, active cyber deception engine, and real-time credential auditing designed to stay uncompromised under pressure.",
    liveUrl: "https://crackerjack-security.pages.dev",
    githubUrl: "https://github.com/superrcoop/crackerjack",
    col1Image1: "/crackerjack-mobile.png",
    col1Image2: "/crackerjack-resources.png",
    col2Image: "/crackerjack-desktop.png",
  },
  {
    id: "superrcoop-net",
    number: "04",
    name: "superrcoop.net",
    category: "Systems & 3D Art Gallery",
    description: "Personal systems portfolio, 3D model showcase, research archives, and sound system blueprints for Lead Cloud & Distributed Systems Architect.",
    liveUrl: "https://superrcoop.net",
    githubUrl: "https://superrcoop.net",
    col1Image1: "/superrcoop-journal.png",
    col1Image2: "/superrcoop-resume.png",
    col2Image: "/superrcoop-gallery.png",
  },
];
