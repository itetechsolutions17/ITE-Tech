"use client";

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

export default function FinalYearProjectsPage() {
  return (
    <PageWrapper>
      <main className="bg-white dark:bg-[#081120] text-gray-900 dark:text-white transition-colors duration-500">

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