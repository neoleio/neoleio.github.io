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
      title: "Bachelor of Science in Computer Science",
      // Optional: add your school or expected year, for example:
      // detail: "School name · Expected 2027",
    },
  ] as ProfileItem[],

  experience: [
    {
      title: "Sales & Marketing Staff",
      detail: "February 2021 – April 2026",
    },
  ] as ProfileItem[],

  interests: [
    { title: "Full-stack web development" },
    { title: "Databases and backend systems" },
    { title: "Linux and computer networking" },
    { title: "Cybersecurity fundamentals" },
  ] as ProfileItem[],

  goals: [
    { title: "Keep shipping practical web applications" },
    { title: "Build hands-on cybersecurity lab experience" },
    { title: "Work toward junior SOC analyst skills" },
    { title: "Document what I build and learn" },
  ] as ProfileItem[],

  contact: {
    email: "noeljrsipin.work@gmail.com", 
    linkedin: "https://www.linkedin.com/in/noejrsipin/", 
    github: "https://github.com/neoleio",
  },
};