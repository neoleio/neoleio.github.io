/*
  EDIT THIS FILE to update your About and Contact sections.
  - Leave a contact field as "" to hide it.
  - Only keep facts that are true and that you're happy to make public.
*/

export type ProfileItem = {
  title: string;
  detail?: string;
};

export const profile = {
    education: [
    {
      title: "BS in Computer Science (Cybersecurity)",
      detail: "Trimex Colleges Biñan · Ongoing",
    },
    {
      title: "Diploma in Computer and Network Administration",
      detail: "International Electronics and Technical Institute · 2021",
    },
  ] as ProfileItem[],

  experience: [
    {
      title: "Freelance Full-Stack Web Developer",
      detail: "2026 – Present",
    },
    {
      title: "Sales and Marketing Staff",
      detail: "February 2021 – April 2026",
    },
    {
      title: "Student Assistant, IETI College",
      detail: "2018 – 2020",
    },
  ] as ProfileItem[],

  interests: [
    { title: "Full-stack web development" },
    { title: "Databases and backend systems" },
    { title: "Networking and Linux" },
    { title: "Security operations (SOC) and SIEM fundamentals" },
  ] as ProfileItem[],

  goals: [
    { title: "Keep shipping practical web applications" },
    { title: "Build hands-on cybersecurity lab experience" },
    { title: "Land an entry-level IT support, network support, or SOC analyst role" },
    { title: "Document what I build and learn" },
  ] as ProfileItem[],

  contact: {
    email: "noeljrsipin.work@gmail.com", 
    linkedin: "https://www.linkedin.com/in/noejrsipin/", 
    github: "https://github.com/neoleio",
  },
};