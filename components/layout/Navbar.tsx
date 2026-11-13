
"use client";

import { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a
          className="brand"
          href="#home"
          onClick={() => setMenuOpen(false)}
          aria-label="Go to homepage"
        >
          <span className="brand-mark">
            <Terminal size={19} />
          </span>
          <span className="brand-name">
            noel<span>@</span>dev
          </span>
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav
          className={`nav-links ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            ./contact
          </a>
        </nav>
      </div>
    </header>
  );
}
