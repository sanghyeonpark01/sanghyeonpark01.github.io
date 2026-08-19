import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const instrument = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400", style: ["normal", "italic"] });

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
  return <html lang="en"><body className={`${geist.variable} ${instrument.variable}`}>{children}</body></html>;
}
