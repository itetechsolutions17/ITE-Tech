import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ITE Tech Solutions, our mission, vision, experienced engineering leadership, and client-first digital philosophy.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | ITE Tech Solutions",
    description:
      "Learn about ITE Tech Solutions, our mission, vision, experienced engineering leadership, and client-first digital philosophy.",
    url: "https://itetechsolutions.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}