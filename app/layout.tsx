import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://sanghyeonpark01.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sang-Hyeon Park | Computational Materials Science",
  description: "Research portfolio of Sang-Hyeon Park, exploring computational materials science, solid-state batteries, and electrochemical interfaces.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Sang-Hyeon Park | Computational Materials Science",
    description: "Computational materials science, solid-state batteries, and electrochemical interfaces.",
    type: "website",
    url: siteUrl,
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Sang-Hyeon Park — Computational Materials Science" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
