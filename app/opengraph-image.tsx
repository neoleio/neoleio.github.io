import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Noel Jr. Sipin | Full-Stack Developer & Cybersecurity";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px",
          background: "#080C0A",
          border: "2px solid #1d4d36",
          color: "#E8F0EA",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#39E58C",
            letterSpacing: 4,
          }}
        >
          {">_ SYSTEM STATUS: BUILDING"}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 86,
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            Building systems.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 86,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#22D3EE",
            }}
          >
            Exploring security.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 32,
            color: "#9FB5A8",
          }}
        >
          <div style={{ display: "flex" }}>Noel Jr. Sipin</div>
          <div style={{ display: "flex", color: "#39E58C" }}>
            neoleio.github.io
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}