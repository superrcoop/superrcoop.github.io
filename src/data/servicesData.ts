export interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    name: "Cloud Architecture",
    description: "Designing resilient, high-throughput cloud infrastructure on Google Cloud and AWS with Kubernetes, Terraform, and automated zero-downtime CI/CD pipelines.",
  },
  {
    number: "02",
    name: "Full-Stack Engineering",
    description: "Building lightning-fast, reactive web applications with React 18, TypeScript, Next.js, Vue 3, and scalable distributed microservices.",
  },
  {
    number: "03",
    name: "AI & Autonomous Agents",
    description: "Engineering real-time generative AI workflows, semantic search indexes, and autonomous multi-agent systems powered by Google Gemini and advanced LLM orchestrations.",
  },
  {
    number: "04",
    name: "Distributed Systems",
    description: "Architecting fault-tolerant streaming pipelines, high-availability PostgreSQL/Neon databases, and low-latency transactional distributed backends.",
  },
  {
    number: "05",
    name: "Creative Tech & Web3",
    description: "Crafting tactile interactive digital experiences, procedural Web Audio sound synthesizers, canvas simulations, and secure Web3 contract architectures.",
  },
];
