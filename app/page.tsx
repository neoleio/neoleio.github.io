import {
  ArrowDown,
  ArrowRight,
  Code2,
  Database,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TerminalHero from "@/components/terminal/TerminalHero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import SecurityLab from "@/components/security/SecurityLab";
import Certificates from "@/components/certificates/Certificates";
import AboutDetails from "@/components/about/AboutDetails";
import ContactActions from "@/components/contact/ContactActions";

const skillGroups = [
  {
    title: "Web Development",
    icon: Code2,
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Node.js",
      "HTML",
      "CSS",
      "PHP",
    ],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: [
      "PostgreSQL",
      "Supabase",
      "Neon",
      "MariaDB",
      "SQL",
      "Git",
      "GitHub",
      "Vercel",
    ],
  },
  {
    title: "Networking & IT Support",
    icon: Network,
    skills: [
      "Networking fundamentals",
      "Network device configuration",
      "Hardware troubleshooting",
      "Windows",
      "Kali Linux",
      "Ubuntu",
      "VMware Workstation",
    ],
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    skills: [
      "CIA Triad",
      "SOC fundamentals",
      "Alert lifecycle and severity",
      "Security monitoring",
      "Incident response basics",
      "Nmap",
      "Wireshark",
      "tcpdump",
      "UFW",
      "Splunk (in training)",
      "Microsoft Sentinel (in training)",
    ],
  },
  {
    title: "AI Tools",
    icon: Sparkles,
    skills: ["Claude", "ChatGPT", "Gemini", "GitHub Copilot"],
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        {/* HERO SECTION */}
        <section className="container hero" id="home">
          <div className="hero-glow" />

          <Reveal direction="left">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="status-dot" />
                SYSTEM STATUS: BUILDING
              </div>

              <h1>
                Building
                <br />
                <span className="gradient-text">systems.</span>
                <br />
                Exploring
                <br />
                <span className="cyan-text">security.</span>
              </h1>

              <p className="hero-description">
                I&apos;m a developer building practical web applications
                and exploring the world of cybersecurity. I document
                what I build, what I learn, and the problems I solve
                along the way.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="button-primary">
                  Explore projects
                  <ArrowRight size={16} />
                </a>

                <a href="#about" className="button-secondary">
                  Discover my journey
                  <ArrowDown size={15} />
                </a>
              </div>

              <div className="hero-meta">
                <span>⌘ FULL-STACK DEVELOPMENT</span>
                <span>⌘ CYBERSECURITY</span>
                <span>⌘ CONTINUOUS LEARNING</span>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <TerminalHero />
          </Reveal>
        </section>

        {/* PROJECTS SECTION */}
        <section className="section" id="projects">
          <div className="container">
            <Reveal>
              <div className="section-heading">
                <span className="section-kicker">
                  01 / SELECTED WORK
                </span>

                <h2 className="section-title">
                  Projects<span className="gradient-text">_</span>
                </h2>

                <p className="section-description">
                  Applications and websites I&apos;ve worked on.
                  Each project represents practical experience,
                  problem-solving, and continuous improvement.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <FeaturedProjects />
            </Reveal>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="section" id="skills">
          <div className="container">
            <Reveal>
              <div className="section-heading">
                <span className="section-kicker">
                  02 / TECHNICAL TOOLKIT
                </span>

                <h2 className="section-title">
                  Skills &amp; Technologies
                </h2>

                <p className="section-description">
                  Technologies and tools I have used in projects,
                  coursework, and hands-on experiments. This list
                  will grow as I gain more experience.
                </p>
              </div>
            </Reveal>

            <div className="skills-grid">
              {skillGroups.map((group, index) => {
                const Icon = group.icon;

                return (
                  <Reveal
                    key={group.title}
                    delay={index * 0.12}
                  >
                    <article className="skill-panel">
                      <h3>
                        <Icon
                          size={16}
                          style={{
                            display: "inline",
                            verticalAlign: "middle",
                            marginRight: 8,
                          }}
                        />
                        {group.title}
                      </h3>

                      <ul>
                        {group.skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECURITY LAB SECTION */}
        <section className="section" id="labs">
          <div className="container">
            <Reveal>
              <div className="section-heading">
                <span className="section-kicker">
                  03 / SECURITY LAB
                </span>

                <h2 className="section-title">
                  Security Lab &amp; Technical Exploration
                </h2>

                <p className="section-description">
                  The areas I&apos;m studying and practicing, plus
                  write-ups of hands-on labs as I complete them.
                  Everything here is done in controlled, authorized
                  environments.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <SecurityLab />
            </Reveal>
          </div>
        </section>

        {/* CERTIFICATES SECTION */}
        <section className="section" id="certificates">
          <div className="container">
            <Reveal>
              <div className="section-heading">
                <span className="section-kicker">
                  04 / CERTIFICATES
                </span>

                <h2 className="section-title">
                  Certificates &amp; Learning
                </h2>

                <p className="section-description">
                  Completed certifications and training that support
                  my development and cybersecurity learning.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <Certificates />
            </Reveal>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="section" id="about">
          <div className="container">
            <Reveal>
              <div className="section-heading">
                <span className="section-kicker">
                  05 / THE JOURNEY
                </span>

                <h2 className="section-title">
                  Build. Break. Learn. Improve.
                </h2>

                <p className="section-description">
                  My journey combines full-stack development with
                  an interest in systems, networking, and cybersecurity.
                  I learn by building applications, experimenting in
                  controlled labs, troubleshooting problems, and
                  documenting what I discover.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="focus-panel">
                <div>
                  <h3>
                    Currently expanding my technical foundation.
                  </h3>

                  <p>
                    Working on web application development while
                    strengthening my Linux, networking, and
                    cybersecurity knowledge through practical labs.
                  </p>
                </div>

                <a
                  href="https://github.com/neoleio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary"
                >
                  View GitHub
                  <ArrowRight size={15} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <AboutDetails />
            </Reveal>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="section" id="contact">
          <div className="container">
            <Reveal>
              <div className="contact-panel">
                <span className="section-kicker">
                  06 / ESTABLISH CONNECTION
                </span>

                <h2>
                  Let&apos;s build something
                  <span className="gradient-text"> meaningful.</span>
                </h2>

                <p>
                  Interested in my projects, development journey,
                  or potential collaboration? Feel free to get in
                  touch using the links below.
                </p>

                <ContactActions />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
