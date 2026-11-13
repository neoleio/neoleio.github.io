import type { Metadata, Viewport } from "next";
import AnimatedBackground from "../components/ui/AnimatedBackground";
import CommandPalette from "../components/ui/CommandPalette";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: [
    "Full-stack developer",
    "Web development",
    "Cybersecurity",
    "React",
    "Next.js",
    "Linux",
    "Networking",
    "Portfolio",
  ],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Noel Jr. Sipin | Developer Portfolio",
    description:
      "Building systems. Exploring security. Documenting the journey.",
    url: "/",
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noel Jr. Sipin | Developer Portfolio",
    description:
      "Building systems. Exploring security. Documenting the journey.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080c0a",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Full-Stack Developer",
  sameAs: [site.github],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="a11y-skip" href="#main-content">
          Skip to main content
        </a>
        <AnimatedBackground />
        <CommandPalette />
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}