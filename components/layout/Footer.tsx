import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="ft-bar">
      <div className="container ft-inner">
        <span className="ft-cmd">
          <span className="ft-prompt">{">_ noel@dev:~$"}</span> exit
        </span>

        <span className="ft-note">
          Built with Next.js, TypeScript, and curiosity.
        </span>

        <a
          className="ft-link"
          href="https://github.com/neoleio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Code2 size={15} aria-hidden="true" />
          GitHub
        </a>
      </div>
    </footer>
  );
}