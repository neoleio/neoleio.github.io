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
      "A repair shop management system for job orders, inventory tracking, customer records, repair requests, and sales reporting. Currently in active development.",
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
      "A repair shop website and management system with role-based access for administrators, staff, and technicians, covering job orders, warranty tracking, audit logs, and reports.",
    technologies: ["React", "Vite", "Vercel API", "Neon PostgreSQL"],
    liveUrl: "https://profixsai.vercel.app",
    githubUrl: "https://github.com/neoleio/profixsai",
    image: "/images/projects/profix.png",
    features: [
      "Public business website",
      "Role-based access: Administrator, Staff, and Technician",
      "Repair requests, customer records, and job orders",
      "Repair status tracking and order slips",
      "Warranty tracking and audit logs",
      "Reports and administrative dashboard",
    ],
  },
  {
    number: "03",
    name: "Banahaw Spa",
    category: "Booking Website",
    description:
      "A booking website for a spa business with an admin dashboard, secured with Row Level Security in Supabase.",
    technologies: ["React", "Supabase", "Vercel"],
    liveUrl: "https://banahaw-spa.vercel.app",
    image: "/images/projects/banahaw-spa.png",
    features: [
      "Online booking for spa services",
      "Admin dashboard",
      "Database access secured with Row Level Security",
    ],
  },
  {
    number: "04",
    name: "Lark Paper Products",
    category: "E-commerce Website",
    description:
      "An e-commerce website for Lark Paper Products with an admin dashboard.",
    technologies: ["React", "Supabase", "Vercel"],
    liveUrl: "https://lark-paper-products.vercel.app",
    image: "/images/projects/lark-paper-products.png",
    features: ["E-commerce storefront", "Admin dashboard"],
  },
];