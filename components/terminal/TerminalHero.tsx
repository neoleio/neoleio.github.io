"use client";

import {
  type FormEvent,
  type KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import { motion, useReducedMotion } from "framer-motion";

type TerminalEntry = {
  id: number;
  command: string;
  output: string;
};

const commandResponses: Record<string, string> = {
  help: [
    "AVAILABLE COMMANDS",
    "-----------------",
    "help       - Display available commands",
    "whoami     - About the developer",
    "about      - Display developer information",
    "projects   - View featured projects",
    "skills     - Display technical skills",
    "focus      - Current learning objectives",
    "contact    - Display contact information",
    "github     - Open GitHub profile",
    "clear      - Clear terminal history",
  ].join("\n"),

  whoami:
    "Full-stack developer in progress, exploring cybersecurity, Linux, networking, and database systems.",

  about:
    "I build practical web applications and learn through hands-on projects, troubleshooting, and controlled cybersecurity labs.",

  projects:
    "FEATURED PROJECTS\n-----------------\n01. K-Tech - Repair shop management system\n02. ProFix - Gadget repair management system\n03. Banahaw Spa - Business website\n04. Lark Paper Products - Business website\n\nScroll to ./projects to explore them.",

  skills:
    "DEVELOPMENT: React, JavaScript, Node.js, Next.js\nDATABASES: PostgreSQL, Neon, Supabase, SQL\nINFRASTRUCTURE: Linux, Networking, Git, Vercel\nSECURITY: Nmap, Wireshark, Burp Suite, Security Labs",

  focus:
    "CURRENT OBJECTIVES\n-------------------\n[01] Improve full-stack development\n[02] Strengthen Linux fundamentals\n[03] Practice networking concepts\n[04] Build cybersecurity lab experience\n[05] Document technical projects",

  contact:
    "GitHub: https://github.com/neoleio\nUse the contact section to connect.",

  github: "Opening GitHub profile: github.com/neoleio",
};

const bootLines = [
  "Initializing portfolio environment...",
  "Loading developer profile...",
  "Loading project modules...",
  "Loading technical toolkit...",
  "System ready. Welcome.",
];

export default function TerminalHero() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<TerminalEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [bootComplete, setBootComplete] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const shouldReduceMotion = useReducedMotion();
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(0);

  // Simulated terminal boot sequence
  useEffect(() => {
    if (shouldReduceMotion) {
      setBootComplete(true);
      return;
    }

    let index = 0;

    const interval = window.setInterval(() => {
      index += 1;

      if (index >= bootLines.length) {
        window.clearInterval(interval);
        setBootComplete(true);
      }
    }, 300);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  // Automatically scroll to the latest terminal output
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history, bootComplete]);

  function executeCommand(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const submitted = command.trim();

    if (!submitted) return;

    const normalized = submitted.toLowerCase();

    if (normalized === "clear") {
      setHistory([]);
      setShowIntro(false);
      setCommand("");
      setCommandHistory((previous) => [...previous, submitted]);
      setHistoryIndex(-1);
      return;
    }

    if (normalized === "github") {
      window.open(
        "https://github.com/neoleio",
        "_blank",
        "noopener,noreferrer"
      );
    }

    const output = Object.prototype.hasOwnProperty.call(
      commandResponses,
      normalized
    )
      ? commandResponses[normalized]
      : `Command not found: ${submitted}. Type "help" to see available commands.`;

    setHistory((previous) => [
      ...previous,
      {
        id: nextId.current++,
        command: submitted,
        output,
      },
    ]);

    setCommandHistory((previous) => [...previous, submitted]);
    setHistoryIndex(-1);
    setCommand("");
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (commandHistory.length === 0) return;

      const nextIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(nextIndex);
      setCommand(commandHistory[nextIndex]);
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (historyIndex === -1) return;

      const nextIndex = historyIndex + 1;

      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setCommand("");
      } else {
        setHistoryIndex(nextIndex);
        setCommand(commandHistory[nextIndex]);
      }
    }
  }

  return (
    <motion.div
      className="terminal-window"
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 35, rotateX: 8 }
      }
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* TERMINAL HEADER */}
      <div className="terminal-header">
        <div className="terminal-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <span className="terminal-title">noel@dev: ~/portfolio</span>

        <span className="terminal-title">bash</span>
      </div>

      {/* TERMINAL CONTENT */}
      <div
        className="terminal-body"
        role="region"
        ref={outputRef}
        onClick={() => inputRef.current?.focus()}
        aria-label="Interactive simulated portfolio terminal"
      >
        {!bootComplete ? (
          <div className="terminal-output boot-sequence" aria-live="polite">
            {bootLines.map((line, index) => (
              <motion.div
                key={line}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.3,
                }}
              >
                <span className="terminal-prompt">[ OK ] </span>
                {line}
              </motion.div>
            ))}
          </div>
        ) : (
          <>
            {/* INITIAL TERMINAL CONTENT (hidden after "clear") */}
            {showIntro && (
              <>
                <div className="terminal-line">
                  <span className="terminal-prompt">noel@dev:~$ </span>
                  <span className="terminal-cyan">whoami</span>
                </div>

                <div className="terminal-output">
                  Full-stack developer in progress.
                </div>

                <div className="terminal-line" style={{ marginTop: 18 }}>
                  <span className="terminal-prompt">noel@dev:~$ </span>
                  <span className="terminal-cyan">cat focus.txt</span>
                </div>

                <div className="terminal-output">
                  {"[01]"} Web application development{"\n"}
                  {"[02]"} Databases and backend systems{"\n"}
                  {"[03]"} Linux and computer networking{"\n"}
                  {"[04]"} Cybersecurity and security labs
                </div>

                <div className="terminal-line" style={{ marginTop: 18 }}>
                  <span className="terminal-prompt">noel@dev:~$ </span>
                  <span className="terminal-cyan">echo $STATUS</span>
                </div>

                <div className="terminal-output">
                  <span style={{ color: "#39e58c" }}>
                    BUILDING. LEARNING. DOCUMENTING.
                  </span>
                </div>
              </>
            )}

            {/* USER COMMAND HISTORY */}
            {history.map((entry) => (
              <div key={entry.id} style={{ marginTop: 14 }}>
                <div className="terminal-line">
                  <span className="terminal-prompt">noel@dev:~$ </span>
                  <span className="terminal-cyan">{entry.command}</span>
                </div>

                <div className="terminal-output">{entry.output}</div>
              </div>
            ))}

            {/* COMMAND INPUT */}
            <form className="terminal-input-row" onSubmit={executeCommand}>
              <label className="terminal-prompt" htmlFor="terminal-command">
                noel@dev:~$
              </label>

              <input
                id="terminal-command"
                ref={inputRef}
                className="terminal-input"
                value={command}
                onChange={(event) => setCommand(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type help and press Enter..."
                autoComplete="off"
                spellCheck={false}
                aria-label="Enter a simulated terminal command"
              />
            </form>

            <div className="terminal-hint">
              ↑ / ↓ command history · Type help for commands
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}