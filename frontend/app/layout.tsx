import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lapsa - AI Marketing Briefs in Telegram for Ecommerce",
  description:
    "Join early access for Lapsa: a Telegram-first AI marketing brief for ecommerce operators who want clearer daily Shopify, GA4, and ads insights.",
  keywords: [
    "AI media buyer",
    "ecommerce analytics",
    "Google Ads reporting",
    "Shopify analytics",
    "Telegram bot",
    "GA4 analytics",
    "ad spend optimization",
    "ROAS tracking",
    "Latvia",
    "Baltic ecommerce",
    "PMax optimization",
    "media buyer AI",
  ],
  metadataBase: new URL("https://lapsa.lv"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lapsa.lv",
    title: "Lapsa - AI Marketing Briefs in Telegram",
    description:
      "Join early access for a Telegram-first daily marketing brief for ecommerce operators.",
    siteName: "Lapsa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lapsa - AI Marketing Briefs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lapsa - AI Marketing Briefs in Telegram",
    description:
      "Join early access for a Telegram-first daily marketing brief for ecommerce operators.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://lapsa.lv",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lapsa",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Telegram",
  description:
    "Telegram-first AI marketing brief for ecommerce store owners. Lapsa is currently onboarding early stores and validating Shopify, GA4, and ads reporting workflows.",
  offers: [
    {
      "@type": "Offer",
      name: "Early Access",
      price: "0",
      priceCurrency: "EUR",
      description: "Join the early access list",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-zinc-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
