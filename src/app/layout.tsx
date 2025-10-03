import type React from "react";
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default:
      "Rizos & Partners | Global Maritime Supply Chain Solutions & Ship Services",
    template: "%s | Rizos & Partners",
  },
  description:
    "Global maritime supply chain specialists connecting ship suppliers worldwide with Greek shipowners. Ship supplies, technical spares, safety equipment, underwater repairs & port agency services across 28+ locations.",
  keywords: [
    "maritime supply chain",
    "ship supplies",
    "technical spares",
    "Greek shipping",
    "shipowners",
    "ship chandlers",
    "port agency services",
    "underwater repairs",
    "marine safety equipment",
    "vessel provisioning",
    "maritime logistics",
    "shipping services",
    "global maritime network",
    "ship management services",
    "maritime procurement",
    "deck engine stores",
    "LSA life saving appliances",
    "towage services",
    "Piraeus Greece",
    "ship chandlery",
    "vessel supplies",
    "maritime intermediary",
  ],
  authors: [{ name: "Rizos & Partners" }],
  creator: "Rizos & Partners",
  publisher: "Rizos & Partners",
  metadataBase: new URL("https://www.rizosandpartners.gr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rizos & Partners | Global Maritime Supply Chain Solutions",
    description:
      "Global maritime supply chain specialists. Ship supplies, technical spares, safety equipment & port agency services. Connecting suppliers with Greek shipowners worldwide.",
    url: "https://www.rizosandpartners.gr/",
    siteName: "Rizos & Partners",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Rizos & Partners - Global Maritime Supply Chain Solutions",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Maritime Supply Chain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body
        className={`font-sans ${poppins.variable} ${inter.variable} antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
