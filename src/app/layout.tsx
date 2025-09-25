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
      "Rizos & Partners | Global Maritime Gateway to the Greek Shipping Market",
    template: "%s | Rizos & Partners",
  },
  description:
    "Rizos & Partners connects global maritime service providers with Greece’s leading shipowners, ship managers, and charterers. Access the Greek shipping market: compliance, technical, commercial and strategic maritime solutions.",
  keywords: [
    "Rizos & Partners",
    "Greek shipping market",
    "shipowners",
    "ship managers",
    "charterers",
    "maritime services",
    "shipping consulting",
    "marine brokerage",
    "vessel management",
    "maritime compliance",
  ],
  authors: [{ name: "Rizos & Partners" }],
  creator: "Rizos & Partners",
  publisher: "Rizos & Partners",
  metadataBase: new URL("https://www.rizosandpartners.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rizos & Partners | Global Maritime Gateway",
    description:
      "Bridge to the Greek shipping market: connect with top shipowners, managers & charterers. Strategic maritime advisory and services.",
    url: "https://www.rizosandpartners.com/",
    siteName: "Rizos & Partners",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rizos & Partners - Global Maritime Gateway",
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
  category: "Maritime Shipping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${poppins.variable} ${inter.variable} antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
