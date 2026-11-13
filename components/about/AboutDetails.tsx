"use client";

import { useState } from "react";

import { profile, type ProfileItem } from "@/content/profile";

type Group = {
  heading: string;
  items: ProfileItem[];
};

export default function AboutDetails() {
  const [photoFailed, setPhotoFailed] = useState(false);

  const groups: Group[] = [
    { heading: "Education", items: profile.education },
    { heading: "Experience", items: profile.experience },
    { heading: "Interests", items: profile.interests },
    { heading: "Goals", items: profile.goals },
  ].filter((group) => group.items.length > 0);

  return (
    <>
      <div className="abt-profile">
        {!photoFailed && (
          <div className="abt-photo-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="abt-photo"
              src="/images/profile.jpg"
              alt="Portrait of Noel Jr. Sipin"
              width={640}
              height={800}
              loading="lazy"
              onError={() => setPhotoFailed(true)}
            />
          </div>
        )}

        <div className="abt-profile-text">
          <span className="abt-profile-kicker">{"noel@dev:~$ whoami"}</span>
          <h3>Noel Jr. Sipin</h3>
          <p className="abt-role">
            Full-stack developer · Computer Science student
          </p>
          <p>
            I build practical web applications for businesses and explore
            cybersecurity through hands-on, controlled labs. I document what
            I build, what I learn, and the problems I solve along the way.
          </p>
        </div>
      </div>

      <div className="abt-grid">
        {groups.map((group) => (
          <article className="abt-card" key={group.heading}>
            <h3>{group.heading}</h3>

            <ul>
              {group.items.map((item) => (
                <li key={item.title}>
                  <span className="abt-item-title">{item.title}</span>
                  {item.detail && (
                    <span className="abt-item-detail">{item.detail}</span>
                  )}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
}