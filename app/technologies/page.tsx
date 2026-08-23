import type { Metadata } from "next";
import TechnologiesClient from "./TechnologiesClient";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "Explore the modern technology stack at ITE Tech Solutions: React, Next.js, Node.js, Python, Django, Cloud platforms, Docker, databases, and DevOps tools.",
  alternates: {
    canonical: "/technologies",
  },
  openGraph: {
    title: "Technology Stack | ITE Tech Solutions",
    description:
      "Modern programming languages, frameworks, cloud infrastructures, and database technologies used to build resilient software systems.",
    url: "https://itetechsolutions.com/technologies",
  },
};

export default function TechnologiesPage() {
  return <TechnologiesClient />;
}