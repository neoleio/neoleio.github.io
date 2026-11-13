"use client";

import { useState } from "react";
import { ArrowRight, Check, Copy, ExternalLink, Mail } from "lucide-react";

import { profile } from "@/content/profile";

export default function ContactActions() {
  const { email, linkedin, github } = profile.contact;
  const [status, setStatus] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("Email address copied.");
    } catch {
      setStatus("Could not copy. Please copy the address manually.");
    }

    window.setTimeout(() => setStatus(""), 2500);
  }

  return (
    <>
      <div className="contact-actions">
        {email && (
          <>
            <a href={`mailto:${email}`} className="button-primary">
              <Mail size={16} aria-hidden="true" />
              Send an email
            </a>

            <button
              type="button"
              className="button-secondary ctc-copy"
              onClick={copyEmail}
            >
              {status === "Email address copied." ? (
                <Check size={15} aria-hidden="true" />
              ) : (
                <Copy size={15} aria-hidden="true" />
              )}
              Copy email
            </button>
          </>
        )}

        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            LinkedIn
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={email ? "button-secondary" : "button-primary"}
          >
            {email ? "GitHub" : "Visit GitHub"}
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        )}
      </div>

      <p className="ctc-status" role="status" aria-live="polite">
        {status}
      </p>

      {email && <p className="ctc-address">{email}</p>}
    </>
  );
}