import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lapsa — AI Media Buyer in Your Pocket | Shopify + Google Ads Analytics",
  description:
    "Connect Shopify and Google Ads, get a daily morning brief in Telegram, and ask your AI media buyer anything. Free 14-day trial, no card needed.",
  keywords: [
    "AI media buyer",
    "ecommerce analytics",
    "Google Ads automation",
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
    title: "Lapsa — AI Media Buyer in Your Pocket",
    description:
      "Connect Shopify and Google Ads, get a daily morning brief in Telegram, and ask your AI media buyer anything.",
    siteName: "Lapsa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lapsa — AI Media Buyer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lapsa — AI Media Buyer in Your Pocket",
    description:
      "Connect Shopify and Google Ads, get a daily morning brief in Telegram, and ask your AI media buyer anything.",
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
    "AI media buyer for ecommerce store owners. Connects Shopify, Google Ads, and GA4 to deliver daily briefs and answer questions in plain language via Telegram.",
  offers: [
    {
      "@type": "Offer",
      name: "Free Trial",
      price: "0",
      priceCurrency: "EUR",
      description: "14-day free trial, no credit card needed",
    },
    {
      "@type": "Offer",
      name: "Starter",
      price: "29",
      priceCurrency: "EUR",
      billingIncrement: "P1M",
    },
    {
      "@type": "Offer",
      name: "Growth",
      price: "79",
      priceCurrency: "EUR",
      billingIncrement: "P1M",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "50",
  },
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
