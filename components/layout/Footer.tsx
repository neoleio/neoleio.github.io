
import { Terminal, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          <Terminal
            size={13}
            style={{
              display: "inline",
              verticalAlign: "middle",
              marginRight: 7,
            }}
          />
          noel@dev:~$ exit
        </span>

        <span>
          Built with Next.js, TypeScript, and curiosity.
        </span>

        <a
          href="https://github.com/neoleio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
        >
          <Code2
            size={14}
            style={{
              display: "inline",
              verticalAlign: "middle",
              marginRight: 6,
            }}
          />
          GitHub
        </a>
      </div>
    </footer>
  );
}
