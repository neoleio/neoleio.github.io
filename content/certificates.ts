export type Certificate = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  skills?: string[];
  credentialUrl?: string;
};

/*
  Newest first. To add a certificate, copy an entry, fill in the exact
  details from the certificate itself, and add it at the top.
*/
export const certificates: Certificate[] = [
  {
    id: "fortigate-76-operator",
    name: "FortiGate 7.6 Operator Self-Paced",
    issuer: "Fortinet Training Institute",
    date: "Nov 2026",
  },
  {
    id: "cybersecurity-cloud-fundamentals",
    name: "Cybersecurity and Cloud Fundamentals 1.0",
    issuer: "Fortinet Training Institute",
    date: "Sep 2026",
  },
  {
    id: "endpoint-security",
    name: "Endpoint Security",
    issuer: "Cisco Networking Academy",
    date: "2026",
  },
  {
    id: "networking-devices-basic-configuration",
    name: "Networking Devices and Basic Configuration",
    issuer: "Cisco Networking Academy",
    date: "Mar 2026",
    skills: [
      "Hierarchical network design",
      "IPv4 subnetting",
      "ARP, DNS and DHCP",
      "Cisco IOS",
    ],
    credentialUrl:
      "https://www.credly.com/badges/0a42b0ca-689b-4b2c-8c99-53e6f039957c",
  },
  {
    id: "networking-basics",
    name: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "Feb 2026",
    skills: [
      "Network communication",
      "Ethernet",
      "IPv4 and IPv6",
      "Connectivity troubleshooting",
    ],
    credentialUrl:
      "https://www.credly.com/badges/ffa1ad08-ab02-445a-9db4-55ad235d0256",
  },
  {
    id: "introduction-to-cybersecurity",
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Sep 2025",
    skills: [
      "Online safety",
      "Common threats and attacks",
      "Protecting organizations",
      "Cybersecurity careers",
    ],
    credentialUrl:
      "https://www.credly.com/badges/6efb253c-dfdc-4a13-aa2a-5d90eff49f4a",
  },
  {
    id: "tesda-nc3-visual-graphic-design",
    name: "NC III – Visual Graphic Design",
    issuer: "TESDA",
    date: "2023",
  },
  {
    id: "tesda-nc2-computer-system-servicing",
    name: "NC II – Computer System Servicing",
    issuer: "TESDA",
    date: "2023",
  },
  {
    id: "tesda-nc2-mechatronics-servicing",
    name: "NC II – Mechatronics Servicing",
    issuer: "TESDA",
    date: "2022",
  },
];