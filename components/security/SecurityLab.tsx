"use client";

import { useState } from "react";
import {
  ChevronDown,
  Code2,
  Database,
  Network,
  ShieldCheck,
} from "lucide-react";

import {
  labEntries,
  labTracks,
  type LabEntry,
  type TrackIcon,
  type TrackStatus,
} from "@/content/labs";

const iconMap: Record<TrackIcon, typeof Network> = {
  network: Network,
  linux: Code2,
  recon: ShieldCheck,
  web: Database,
  traffic: Network,
};

const statusLabel: Record<TrackStatus, string> = {
  learning: "LEARNING",
  practicing: "PRACTICING",
  documented: "DOCUMENTED",
};

function WriteUp({ entry }: { entry: LabEntry }) {
  const [open, setOpen] = useState(false);
  const detailsId = `lab-details-${entry.slug}`;
  const track = labTracks.find((item) => item.id === entry.trackId);

  return (
    <article className="sl-entry">
      <div className="sl-entry-top">
        <span className="sl-entry-track">{track?.title ?? "Lab"}</span>
        <span className="sl-entry-date">{entry.date}</span>
      </div>

      <h4>{entry.title}</h4>
      <p>{entry.objective}</p>

      <div className="sl-tags">
        {entry.tools.map((tool) => (
          <span className="sl-tag" key={tool}>
            {tool}
          </span>
        ))}
      </div>

      <button
        type="button"
        className="sl-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={detailsId}
      >
        {open ? "Hide write-up" : "Read write-up"}
        <ChevronDown
          size={14}
          className={open ? "sl-chevron sl-chevron-open" : "sl-chevron"}
        />
      </button>

      {open && (
        <div className="sl-details" id={detailsId}>
          <h5>Environment</h5>
          <p>{entry.environment}</p>

          <h5>Steps performed</h5>
          <ul>
            {entry.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>

          <h5>Findings</h5>
          <ul>
            {entry.findings.map((finding) => (
              <li key={finding}>{finding}</li>
            ))}
          </ul>

          <h5>Lessons learned</h5>
          <ul>
            {entry.lessons.map((lesson) => (
              <li key={lesson}>{lesson}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export default function SecurityLab() {
  return (
    <div className="sl-wrap">
      {/* LEARNING TRACKS */}
      <h3 className="sl-subheading">/ learning_tracks</h3>

      <div className="sl-grid">
        {labTracks.map((track) => {
          const Icon = iconMap[track.icon];

          return (
            <article className="sl-track" key={track.id}>
              <div className="sl-track-top">
                <span className="sl-track-icon">
                  <Icon size={18} aria-hidden="true" />
                </span>

                <span
                  className={
                    track.status === "learning"
                      ? "sl-status sl-status-learning"
                      : "sl-status sl-status-active"
                  }
                >
                  {statusLabel[track.status]}
                </span>
              </div>

              <h4>{track.title}</h4>
              <p>{track.description}</p>

              <ul className="sl-topics">
                {track.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>

              {track.tools.length > 0 && (
                <div className="sl-tags">
                  {track.tools.map((tool) => (
                    <span className="sl-tag" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* WRITE-UPS */}
      <h3 className="sl-subheading">/ lab_writeups</h3>

      {labEntries.length === 0 ? (
        <div className="sl-empty">
          <div>
            <span className="sl-empty-prompt">noel@lab:~$ </span>
            <span className="sl-empty-cmd">ls writeups/</span>
          </div>
          <div className="sl-empty-out">
            No published write-ups yet. Entries will appear here as labs are
            completed and documented.
          </div>
        </div>
      ) : (
        <div className="sl-entries">
          {labEntries.map((entry) => (
            <WriteUp entry={entry} key={entry.slug} />
          ))}
        </div>
      )}

      <p className="sl-note">
        All security practice happens only in environments I own or am
        authorized to test, such as local virtual machines and intentionally
        vulnerable training applications.
      </p>
    </div>
  );
}