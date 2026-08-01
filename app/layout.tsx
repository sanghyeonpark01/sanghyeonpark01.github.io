import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const instrument = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400", style: ["normal", "italic"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "sang-hyeon-park-research.ghbond010126.chatgpt.site";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const imageUrl = `${protocol}://${host}/og.png`;

  return {
    title: "Sang-Hyeon Park | Computational Materials Science",
    description: "Research portfolio of Sang-Hyeon Park, exploring computational materials science, solid-state batteries, and electrochemical interfaces.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "Sang-Hyeon Park | Computational Materials Science",
      description: "Computational materials science, solid-state batteries, and electrochemical interfaces.",
      type: "website",
      images: [{ url: imageUrl, width: 1731, height: 909, alt: "Sang-Hyeon Park — Computational Materials Science" }],
    },
    twitter: { card: "summary_large_image", images: [imageUrl] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${instrument.variable}`}>{children}</body></html>;
}
