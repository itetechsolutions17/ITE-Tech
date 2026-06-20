import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://itetechsolutions.com"),

  title: {
    default: "ITE Tech Solutions | Website Development, Software Development, Mobile App Development, SEO and IT Consulting Services.",
    template: "%s | ITE Tech Solutions | Website Development, Software Development, Mobile App Development, SEO and IT Consulting Services.",
  },

  description:
    "ITE Tech Solutions provides Website Development, Software Development, Mobile App Development, SEO, Digital Marketing and IT Consulting Services.",

  keywords: [
    "ITE Tech Solutions",
    "Website Development Pune",
    "Software Development",
    "Mobile App Development",
    "SEO Services",
    "Digital Marketing",
    "IT Company Pune",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "ITE Tech Solutions",
    description:
      "Website Development, Software Development, Mobile App Development, SEO and IT Consulting Services.",
    url: "https://itetechsolutions.com",
    siteName: "ITE Tech Solutions | delivers scalable, secure and performance-driven digital solutions tailored for startups, enterprises and institutions.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/projects/logo.ico",
        width: 1200,
        height: 630,
        alt: "ITE Tech Solutions Logo",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/projects/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0b1120] text-white">

        <Navbar />

        <main className="pt-24">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}