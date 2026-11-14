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
    status: "practicing",
    description:
      "Understanding how devices communicate, configuring them, and troubleshooting connectivity.",
    topics: [
      "IPv4 subnetting",
      "ARP, DNS and DHCP",
      "Device configuration",
      "Troubleshooting",
    ],
    tools: ["Cisco IOS"],
  },
  {
    id: "linux",
    title: "Linux",
    icon: "linux",
    status: "practicing",
    description:
      "Working in the command line and securing systems in a Kali Linux lab.",
    topics: ["Commands", "Firewall rules", "System logs", "Administration"],
    tools: ["Kali Linux", "Ubuntu", "UFW"],
  },
  {
    id: "recon",
    title: "Reconnaissance",
    icon: "recon",
    status: "practicing",
    description:
      "Discovering hosts and services in controlled lab environments.",
    topics: ["Port scanning", "Service identification", "Network access control"],
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
    status: "practicing",
    description:
      "Reading network captures and monitoring traffic to understand how protocols behave.",
    topics: ["Packet capture", "Wireless security", "Security monitoring"],
    tools: ["Wireshark", "tcpdump"],
  },
];

/*
  HOW TO ADD A WRITE-UP:
  Copy the example below, remove the comment markers, fill in YOUR real work,
  and paste it inside the array. Only publish labs done on systems you own or
  have permission to test. Never include credentials, tokens, or private IPs.

  {
    slug: "kali-network-security-lab",
    title: "Network Security Lab (Kali Linux)",
    trackId: "recon",
    date: "2026-11-20",
    objective: "What you set out to learn.",
    environment: "Kali Linux (academic project)",
    tools: ["Nmap", "UFW", "Wireshark", "tcpdump"],
    steps: ["What you did, step by step."],
    findings: ["What you observed."],
    lessons: ["What you learned."],
  },
*/
export const labEntries: LabEntry[] = [];