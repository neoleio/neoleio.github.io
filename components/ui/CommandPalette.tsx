"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Code2,
  Database,
  ExternalLink,
  FolderCode,
  Network,
  ShieldCheck,
} from "lucide-react";

type PaletteItem = {
  id: string;
  label: string;
  hint: string;
  keywords: string;
  icon: typeof ArrowRight;
  run: () => void;
};

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  element.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });

  window.history.replaceState(null, "", `#${sectionId}`);
}

const items: PaletteItem[] = [
  {
    id: "home",
    label: "Go to Home",
    hint: "#home",
    keywords: "home top hero intro",
    icon: ArrowRight,
    run: () => scrollToSection("home"),
  },
  {
    id: "projects",
    label: "Go to Projects",
    hint: "#projects",
    keywords: "projects work portfolio apps",
    icon: FolderCode,
    run: () => scrollToSection("projects"),
  },
  {
    id: "skills",
    label: "Go to Skills",
    hint: "#skills",
    keywords: "skills technologies tools stack",
    icon: Database,
    run: () => scrollToSection("skills"),
  },
  {
    id: "labs",
    label: "View Security Lab",
    hint: "#labs",
    keywords: "security lab labs cybersecurity nmap wireshark burp writeups",
    icon: ShieldCheck,
    run: () => scrollToSection("labs"),
  },
  {
    id: "certificates",
    label: "View Certificates",
    hint: "#certificates",
    keywords: "certificates certifications credentials achievements nse",
    icon: ShieldCheck,
    run: () => scrollToSection("certificates"),
  },
  {
    id: "about",
    label: "Go to About",
    hint: "#about",
    keywords: "about journey learning",
    icon: Network,
    run: () => scrollToSection("about"),
  },
  {
    id: "contact",
    label: "Go to Contact",
    hint: "#contact",
    keywords: "contact connect hire email",
    icon: ShieldCheck,
    run: () => scrollToSection("contact"),
  },
  {
    id: "github",
    label: "Open GitHub profile",
    hint: "github.com/neoleio",
    keywords: "github code source repositories",
    icon: Code2,
    run: () =>
      window.open("https://github.com/neoleio", "_blank", "noopener,noreferrer"),
  },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return items;

    return items.filter((item) =>
      `${item.label} ${item.keywords}`.toLowerCase().includes(normalized)
    );
  }, [query]);

  function openPalette() {
    previousFocus.current = document.activeElement as HTMLElement | null;
    setQuery("");
    setActiveIndex(0);
    setOpen(true);
  }

  function closePalette() {
    setOpen(false);
    previousFocus.current?.focus?.();
  }

  function runItem(item: PaletteItem) {
    setOpen(false);
    window.setTimeout(() => item.run(), 60);
  }

  // Global shortcut: Ctrl+K / Cmd+K
  useEffect(() => {
    function handleShortcut(event: globalThis.KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();

        if (open) {
          closePalette();
        } else {
          openPalette();
        }
      }
    }

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  });

  // Focus the search box and lock page scroll while open
  useEffect(() => {
    if (!open) return;

    inputRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // Keep the highlighted option visible
  useEffect(() => {
    if (!open) return;

    const active = listRef.current?.querySelector<HTMLElement>(
      '[aria-selected="true"]'
    );
    active?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open, filtered]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      closePalette();
      return;
    }

    if (event.key === "Tab") {
      // Keep focus inside the dialog
      event.preventDefault();
      return;
    }

    if (filtered.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % filtered.length);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex(
        (index) => (index - 1 + filtered.length) % filtered.length
      );
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const item = filtered[activeIndex];
      if (item) runItem(item);
    }
  }

  const activeId = filtered[activeIndex]
    ? `cp-option-${filtered[activeIndex].id}`
    : undefined;

  return (
    <>
      <button
        type="button"
        className="cp-trigger"
        onClick={openPalette}
        aria-label="Open command palette"
        aria-haspopup="dialog"
      >
        <span aria-hidden="true">&gt;_</span>
        <span className="cp-trigger-keys" aria-hidden="true">
          Ctrl K
        </span>
      </button>

      {open && (
        <div
          className="cp-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closePalette();
          }}
        >
          <div
            className="cp-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            onKeyDown={handleKeyDown}
          >
            <div className="cp-search">
              <span className="cp-prompt" aria-hidden="true">
                &gt;
              </span>

              <input
                ref={inputRef}
                className="cp-input"
                type="text"
                role="combobox"
                aria-expanded="true"
                aria-controls="cp-listbox"
                aria-activedescendant={activeId}
                aria-label="Search commands"
                placeholder="Type a command or search..."
                autoComplete="off"
                spellCheck={false}
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setActiveIndex(0);
                }}
              />

              <kbd className="cp-kbd">Esc</kbd>
            </div>

            <ul
              className="cp-list"
              id="cp-listbox"
              role="listbox"
              ref={listRef}
            >
              {filtered.length === 0 && (
                <li className="cp-empty" role="presentation">
                  No matching commands.
                </li>
              )}

              {filtered.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === activeIndex;

                return (
                  <li
                    key={item.id}
                    id={`cp-option-${item.id}`}
                    role="option"
                    aria-selected={isActive}
                    className={isActive ? "cp-item cp-item-active" : "cp-item"}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => runItem(item)}
                  >
                    <Icon size={16} aria-hidden="true" />
                    <span className="cp-item-label">{item.label}</span>
                    <span className="cp-item-hint">
                      {item.id === "github" && (
                        <ExternalLink size={12} aria-hidden="true" />
                      )}
                      {item.hint}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="cp-footer" aria-hidden="true">
              <span>↑ ↓ navigate</span>
              <span>Enter select</span>
              <span>Esc close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}