import { ExternalLink, ShieldCheck } from "lucide-react";

import { certificates } from "@/content/certificates";

export default function Certificates() {
  if (certificates.length === 0) {
    return (
      <div className="cert-empty">
        <div>
          <span className="cert-empty-prompt">noel@dev:~$ </span>
          <span className="cert-empty-cmd">ls certificates/</span>
        </div>
        <div className="cert-empty-out">
          Certificates will be listed here once their details are verified.
        </div>
      </div>
    );
  }

  return (
    <div className="cert-grid">
      {certificates.map((certificate) => (
        <article className="cert-card" key={certificate.id}>
          <div className="cert-top">
            <span className="cert-icon">
              <ShieldCheck size={18} aria-hidden="true" />
            </span>
            <span className="cert-date">{certificate.date}</span>
          </div>

          <h3>{certificate.name}</h3>
          <p className="cert-issuer">{certificate.issuer}</p>

          {certificate.skills && certificate.skills.length > 0 && (
            <div className="cert-tags">
              {certificate.skills.map((skill) => (
                <span className="cert-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          )}

          {certificate.credentialUrl && (
            <a
              className="cert-link"
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Verify ${certificate.name} credential`}
            >
              <ExternalLink size={14} aria-hidden="true" />
              Verify credential
            </a>
          )}
        </article>
      ))}
    </div>
  );
}