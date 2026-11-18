"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#labs", label: "Security Lab" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="nav-bar">
      <div className="container nav-inner">
        <a className="nav-logo" href="#home" onClick={() => setOpen(false)}>
          <span className="nav-logo-icon" aria-hidden="true">
            {">_"}
          </span>
          noel@dev
        </a>

        <nav className="nav-menu" aria-label="Primary">
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          <ul className="nav-links" id="primary-nav" data-open={open}>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  className="nav-link"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <a
                className="nav-link nav-link-cta"
                href="#contact"
                onClick={() => setOpen(false)}
              >
                ./contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}