export type TrackStatus = "learning" | "practicing" | "documented";

export type TrackIcon = "network" | "linux" | "recon" | "web" | "traffic";

export type LabTrack = {
  id: string;
  title: string;
  icon: TrackIcon;
  status: TrackStatus;
  description: string;
  topics: string[];
  tools: string[];
};

export type LabEntry = {
  slug: string;
  title: string;
  trackId: string;
  date: string;
  objective: string;
  environment: string;
  tools: string[];
  steps: string[];
  findings: string[];
  lessons: string[];
};

/*
  STATUS GUIDE (change these honestly as you progress):
  - "learning"    -> studying the topic
  - "practicing"  -> doing hands-on exercises in a lab
  - "documented"  -> at least one published write-up below
*/
export const labTracks: LabTrack[] = [
  {
    id: "networking",
    title: "Networking",
    icon: "network",
    status: "learning",
    description:
      "Understanding how devices communicate and how to troubleshoot connectivity.",
    topics: ["IP addressing", "DNS", "TCP/IP", "Troubleshooting"],
    tools: [],
  },
  {
    id: "linux",
    title: "Linux",
    icon: "linux",
    status: "learning",
    description:
      "Working comfortably in the command line and understanding system basics.",
    topics: ["Commands", "Permissions", "Users and groups", "Administration"],
    tools: [],
  },
  {
    id: "recon",
    title: "Reconnaissance",
    icon: "recon",
    status: "learning",
    description:
      "Learning how to discover hosts and services in controlled lab environments.",
    topics: ["Port scanning", "Service identification", "Enumeration"],
    tools: ["Nmap"],
  },
  {
    id: "web",
    title: "Web Application Security",
    icon: "web",
    status: "learning",
    description:
      "Studying common web vulnerabilities using intentionally vulnerable applications.",
    topics: ["HTTP requests", "Authentication", "Input validation"],
    tools: ["Burp Suite Community", "OWASP Juice Shop"],
  },
  {
    id: "traffic",
    title: "Traffic Analysis",
    icon: "traffic",
    status: "learning",
    description:
      "Reading network captures to understand how protocols behave.",
    topics: ["DNS traffic", "TCP handshakes", "HTTP and HTTPS"],
    tools: ["Wireshark"],
  },
];

/*
  HOW TO ADD A WRITE-UP:
  Copy the example below, remove the comment markers, fill in YOUR real work,
  and paste it inside the array. Only publish labs done on systems you own or
  have permission to test. Never include credentials, tokens, or private IPs.

  {
    slug: "juice-shop-login-analysis",
    title: "Analyzing the Juice Shop login request",
    trackId: "web",
    date: "2026-11-20",
    objective: "What you set out to learn.",
    environment: "e.g. OWASP Juice Shop running locally in Docker",
    tools: ["Burp Suite Community"],
    steps: ["What you did, step by step."],
    findings: ["What you observed."],
    lessons: ["What you learned."],
  },
*/
export const labEntries: LabEntry[] = [];