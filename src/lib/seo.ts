import type { Metadata } from "next";

const SITE_URL = "https://quantumwellnesswarrior.com";
const SITE_NAME = "Quantum Wellness Warrior";

export function createMetadata({
  title,
  description,
  path = "",
  ogImage,
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = ogImage || `${SITE_URL}/og/default.png`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logos/qww-logo.png`,
    description:
      "Hawaii's first volcanic transformational center. Not a retreat — a rite-of-passage training center on the Big Island.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hilo",
      addressRegion: "HI",
      addressCountry: "US",
    },
    sameAs: [],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description:
      "Volcanic transformational center offering week-long apprenticeship programs, breathwork training, and permaculture residency on Hawaii's Big Island.",
    url: SITE_URL,
    image: `${SITE_URL}/og/default.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hilo",
      addressRegion: "HI",
      postalCode: "96720",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.7241,
      longitude: -155.0868,
    },
    priceRange: "$$$$",
    openingHours: "Mo-Su 08:00-20:00",
  };
}

export function courseJsonLd({
  name,
  description,
  price,
  url,
}: {
  name: string;
  description: string;
  price: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "USD",
      url,
      availability: "https://schema.org/LimitedAvailability",
    },
    courseMode: "onsite",
    locationCreated: {
      "@type": "Place",
      name: "The Forge — Volcanic Training Ground",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hilo",
        addressRegion: "HI",
        addressCountry: "US",
      },
    },
  };
}

export function articleJsonLd({
  title,
  description,
  publishedTime,
  modifiedTime,
  url,
  image,
}: {
  title: string;
  description: string;
  publishedTime: string;
  modifiedTime?: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image || `${SITE_URL}/og/default.png`,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logos/qww-logo.png`,
      },
    },
    mainEntityOfPage: url,
  };
}
