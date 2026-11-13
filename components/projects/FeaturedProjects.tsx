"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Code2,
  ExternalLink,
} from "lucide-react";

import { projects, type Project } from "@/content/projects";

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const hasFeatures = Boolean(project.features?.length);
  const detailsId = `project-details-${project.number}`;

  return (
    <article className="pc-card">
      {/* PREVIEW IMAGE */}
      <div className="pc-media">
        <div className="pc-placeholder" aria-hidden="true">
          <span>{"// preview"}</span>
          <span>{project.name}</span>
        </div>

        {project.image && !imageFailed && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="pc-image"
              src={project.image}
              alt={`Screenshot of the ${project.name} website`}
              loading="lazy"
              onError={() => setImageFailed(true)}
            />
          </>
        )}
      </div>

      {/* CARD CONTENT */}
      <div className="pc-body">
        <div className="pc-top">
          <span className="pc-number">/ PROJECT_{project.number}</span>
          <span className="pc-category">{project.category}</span>
        </div>

        <h3>{project.name}</h3>

        <p>{project.description}</p>

        <div className="pc-tags">
          {project.technologies.map((technology) => (
            <span className="pc-tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>

        {hasFeatures && (
          <>
            <button
              type="button"
              className="pc-toggle"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls={detailsId}
            >
              {open ? "Hide details" : "View details"}
              <ChevronDown
                size={14}
                className={open ? "pc-chevron pc-chevron-open" : "pc-chevron"}
              />
            </button>

            {open && (
              <ul className="pc-features" id={detailsId}>
                {project.features?.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            )}
          </>
        )}

        <div className="pc-links">
          <a
            className="pc-link pc-link-primary"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.name} live website`}
          >
            <ExternalLink size={15} />
            Live Demo
            <ArrowUpRight size={13} />
          </a>

          {project.githubUrl && (
            <a
              className="pc-link"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} GitHub repository`}
            >
              <Code2 size={15} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function FeaturedProjects() {
  return (
    <div className="pc-grid">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.number} />
      ))}
    </div>
  );
}