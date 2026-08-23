import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "ITE Tech Solutions | Website Development, Software Development & IT Consulting",
  description:
    "ITE Tech Solutions is a premier digital solutions and software development company building modern websites, custom software, mobile apps, AI solutions, cloud systems, and cybersecurity.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ITE Tech Solutions | Digital Solutions & Software Development",
    description:
      "Empowering startups, enterprises, and organizations with modern websites, custom software, mobile applications, AI solutions, and cloud systems.",
    url: "https://itetechsolutions.com",
    siteName: "ITE Tech Solutions",
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
};

export default function HomePage() {
  return <HomeClient />;
}