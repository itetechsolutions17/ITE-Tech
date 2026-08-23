import type { Metadata } from "next";
import PageWrapper from "@/components/PageWrapper";

import Hero from "./components/hero";
import AboutProjects from "./components/AboutProjects";
import Branches from "./components/Branches";
import Domains from "./components/Domains";
import Deliverables from "./components/Deliverables";
import Process from "./components/Process";
import WhyChoose from "./components/WhyChoose";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export const metadata: Metadata = {
  title: "Final Year Projects",
  description:
    "End-to-end guidance for Final Year Engineering Projects: IEEE research papers, AI/ML, web development, IoT, cloud computing, documentation, source code, and viva preparation.",
  alternates: {
    canonical: "/final-year-projects",
  },
  openGraph: {
    title: "Final Year Engineering Projects & Guidance | ITE Tech Solutions",
    description:
      "Complete final year project guidance including IEEE paper selection, software implementation, documentation, PPT, and technical mentoring.",
    url: "https://itetechsolutions.com/final-year-projects",
  },
};

export default function FinalYearProjectsPage() {
  return (
    <PageWrapper>
      <main className="bg-white dark:bg-[#081120] text-gray-900 dark:text-white transition-colors duration-500 overflow-x-hidden">
        {/* Hero */}
        <Hero />

        {/* About */}
        <AboutProjects />

        {/* Engineering Branches */}
        <Branches />

        {/* Technology Domains */}
        <Domains />

        {/* Project Deliverables */}
        <Deliverables />

        {/* Development Process */}
        <Process />

        {/* Why Choose ITE */}
        <WhyChoose />

        {/* FAQ */}
        <FAQ />

        {/* Call To Action */}
        <CTA />
      </main>
    </PageWrapper>
  );
}