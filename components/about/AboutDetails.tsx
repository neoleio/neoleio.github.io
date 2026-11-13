import { profile, type ProfileItem } from "@/content/profile";

type Group = {
  heading: string;
  items: ProfileItem[];
};

export default function AboutDetails() {
  const groups: Group[] = [
    { heading: "Education", items: profile.education },
    { heading: "Experience", items: profile.experience },
    { heading: "Interests", items: profile.interests },
    { heading: "Goals", items: profile.goals },
  ].filter((group) => group.items.length > 0);

  return (
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
  );
}