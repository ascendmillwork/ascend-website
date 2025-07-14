import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const JakartaSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const DMSans = DM_Sans({
  variable: "--font-geist-mono",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Custom Millwork Solutions Made in USA | Ascend Millwork",
  description:
    "Ascend Millwork delivers turnkey hotel millwork, cabinetry, stone tops, vanities, and kitchenettes for hospitality and multifamily projects. US-based manufacturing, quality, and speed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        {/* SEO Title and Description */}
        <title>Custom Millwork Solutions Made in USA | Ascend Millwork</title>
        <meta
          name="description"
          content="Ascend Millwork delivers turnkey hotel millwork, cabinetry, stone tops, vanities, and kitchenettes for hospitality and multifamily projects. US-based manufacturing, quality, and speed."
        />
        <meta
          name="keywords"
          content="Millwork, Millwork Solutions, Made in USA, Hotel Millwork, Cabinetry, Stone Tops, Vanities, Kitchenettes, Kitchen, Doors"
        />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Custom Millwork Solutions Made in USA | Ascend Millwork"
        />
        <meta
          property="og:description"
          content="Turnkey hotel millwork, cabinetry, stone tops, vanities, and kitchenettes for hospitality and multifamily. US-based manufacturing, quality, and speed."
        />
        <meta
          property="og:image"
          content="https://ascendmillwork.com/path-to-thumbnail.jpg"
        />
        <meta property="og:url" content="https://ascendmillwork.com/" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom Millwork Solutions Made in USA | Ascend Millwork"
        />
        <meta
          name="twitter:description"
          content="Explore our US-based turnkey millwork solutions for hotels and multifamily: cabinetry, vanities, stone tops, kitchenettes, and more."
        />
        <meta
          name="twitter:image"
          content="https://ascendmillwork.com/path-to-thumbnail.jpg"
        />
        {/* Canonical Link */}
        <link rel="canonical" href="https://ascendmillwork.com/" />
        <link rel="icon" href="/favicon.ico" />
        {/* Organization & LocalBusiness Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              name: "Ascend Millwork",
              description:
                "Custom Millwork Solutions Made in USA. Specializing in hotel millwork, cabinetry, stone tops, vanities, kitchenettes, and doors for hospitality and multifamily projects.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1440 Industrial BLVD",
                addressLocality: "Madison",
                addressRegion: "GA",
                postalCode: "30650",
                addressCountry: "US",
              },
              telephone: "+1 (706) 438-8485",
              email: "hello@ascendmillwork.com",
              url: "https://ascendmillwork.com/",
              image: "https://ascendmillwork.com/path-to-logo.png",
              keywords:
                "Millwork, Millwork Solutions, Made in USA, Hotel Millwork, Cabinetry, Stone Tops, Vanities, Kitchenettes, Kitchen, Doors",
            }),
          }}
        />
      </Head>
      <html lang="en">
        <body
          className={`${JakartaSans.variable} ${DMSans.variable} antialiased`}
        >
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only absolute top-2 left-2 bg-white text-black p-2 z-50 rounded shadow"
          >
            Skip to main content
          </a>
          <Analytics />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
