import type { Metadata } from "next";
import { cinzel, inter, jetbrainsMono } from "@/lib/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { organizationJsonLd, localBusinessJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Quantum Wellness Warrior | Transformational Center on Hawaii's Active Volcano",
    template: "%s | Quantum Wellness Warrior",
  },
  description:
    "Hawaii's first volcanic transformational center. Not a retreat — a rite-of-passage training center featuring week-long apprenticeships, breathwork, and permaculture on the Big Island.",
  keywords: [
    "transformational center Hawaii",
    "volcano retreat Hawaii",
    "men's transformation retreat Hawaii",
    "breathwork retreat Big Island",
    "sober retreat Hawaii",
    "permaculture training Hawaii",
    "wellness warrior",
    "Big Island transformation",
  ],
  metadataBase: new URL("https://quantumwellnesswarrior.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quantumwellnesswarrior.com",
    siteName: "Quantum Wellness Warrior",
    title: "Quantum Wellness Warrior | Transformational Center on Hawaii's Active Volcano",
    description:
      "Hawaii's first volcanic transformational center. Not a retreat — a rite-of-passage training center on the Big Island.",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Quantum Wellness Warrior — Volcanic Transformational Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Wellness Warrior",
    description: "Hawaii's first volcanic transformational center.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
      </head>
      <body
        className={`${cinzel.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
