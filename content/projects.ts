export type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  image?: string;
  features?: string[];
};

export const projects: Project[] = [
  {
    number: "01",
    name: "K-Tech",
    category: "Repair Shop Management",
    description:
      "A repair shop management platform with job orders, inventory tracking, customer records, repair requests, and sales reporting.",
    technologies: ["React", "Vite", "Vercel API", "Neon PostgreSQL"],
    liveUrl: "https://ktech-system.vercel.app",
    githubUrl: "https://github.com/neoleio/ktech-system",
    image: "/images/projects/ktech.png",
    features: [
      "Job orders with repair status tracking",
      "Inventory management and stock movement",
      "Customer management and receipt printing",
      "Sales reporting with revenue and estimated profit dashboard",
      "Repair completion and warranty workflow",
    ],
  },
  {
    number: "02",
    name: "ProFix",
    category: "Gadget Repair Management",
    description:
      "A gadget repair business website and management system designed to organize repair requests, job orders, customers, and service workflows.",
    technologies: ["React", "Vite", "Vercel API", "Neon PostgreSQL"],
    liveUrl: "https://profixsai.vercel.app",
    githubUrl: "https://github.com/neoleio/profixsai",
    image: "/images/projects/profix.png",
    features: [
      "Public business website",
      "Repair requests and customer records",
      "Job orders with repair status tracking",
      "Service management and order slips",
      "Administrative dashboard",
    ],
  },
  {
    number: "03",
    name: "Banahaw Spa",
    category: "Business Website",
    description:
      "A web project for a spa business, included in my growing collection of full-stack and business-oriented applications.",
    technologies: ["React", "Supabase", "Vercel"],
    liveUrl: "https://banahaw-spa.vercel.app",
    image: "/images/projects/banahaw-spa.png",
  },
  {
    number: "04",
    name: "Lark Paper Products",
    category: "Business Website",
    description:
      "A business website project for Lark Paper Products, demonstrating practical website development for a business use case.",
    technologies: ["React", "Supabase", "Vercel"],
    liveUrl: "https://lark-paper-products.vercel.app",
    image: "/images/projects/lark-paper-products.png",
  },
];