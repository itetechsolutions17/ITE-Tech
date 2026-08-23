"use client";

import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Monitor,
  Server,
  Boxes,
  Database,
  Cloud,
  Hammer,
  LucideIcon,
} from "lucide-react";

function GlowCard({
  title,
  desc,
  icon: Icon,
}: {
  title: string;
  desc: string;
  icon: LucideIcon;
}) {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      className="relative bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden"
    >
      {/* Cursor Glow */}
      <div
        className="absolute pointer-events-none w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl"
        style={{
          left: pos.x - 80,
          top: pos.y - 80,
        }}
      />

      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
          <Icon size={24} className="text-cyan-500" />
        </div>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{desc}</p>
    </motion.div>
  );
}

export default function TechnologiesClient() {
  return (
    <PageWrapper>
      <div className="bg-white dark:bg-[#0b1120] text-gray-900 dark:text-gray-200 transition-colors duration-500 min-h-screen px-6 md:px-16 py-24">
        {/* HEADER */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies We Use To Build Modern Software
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            ITE Tech Solutions leverages modern, industry-proven technologies,
            frameworks and cloud platforms to deliver scalable, secure and
            high-performance digital solutions.
          </p>
        </section>

        {/* FRONTEND */}
        <Section
          title="Frontend Development"
          icon={Monitor}
          items={[
            ["HTML5 & CSS3", "Modern responsive UI development."],
            ["JavaScript (ES6+)", "Dynamic and interactive web applications."],
            ["React.js", "Component-based scalable frontend architecture."],
            ["Angular", "Enterprise-grade frontend framework."],
            ["Tailwind CSS", "Utility-first CSS for rapid UI design."],
            ["Vue.js", "Progressive JavaScript framework for building UIs."],
          ]}
        />

        {/* BACKEND */}
        <Section
          title="Backend Development"
          icon={Server}
          items={[
            ["Node.js", "High-performance server-side applications."],
            ["Python", "Robust backend and automation development."],
            [".NET Core", "Enterprise-level secure backend systems."],
            ["PHP", "Dynamic web backend solutions."],
          ]}
        />

        {/* FRAMEWORKS */}
        <Section
          title="Frameworks & Libraries"
          icon={Boxes}
          items={[
            ["Django", "Secure and scalable Python web framework."],
            [
              "Django REST Framework",
              "Powerful API development with authentication support.",
            ],
            ["Express.js", "Minimal and flexible Node.js framework."],
            ["Next.js", "Server-side rendering for modern React apps."],
            ["Laravel", "Elegant PHP framework for web applications."],
          ]}
        />

        {/* DATABASE */}
        <Section
          title="Databases"
          icon={Database}
          items={[
            ["MySQL", "Relational database for structured data."],
            ["PostgreSQL", "Advanced open-source relational database."],
            ["MongoDB", "NoSQL database for scalable applications."],
            [
              "Redis",
              "In-memory data structure store for caching and real-time applications.",
            ],
          ]}
        />

        {/* CLOUD */}
        <Section
          title="Cloud & DevOps"
          icon={Cloud}
          items={[
            ["AWS", "Cloud hosting and scalable infrastructure."],
            ["Microsoft Azure", "Enterprise cloud computing solutions."],
            ["Vercel", "Frontend deployment and serverless hosting."],
            ["Docker", "Containerized application deployment."],
          ]}
        />

        {/* TOOLS */}
        <Section
          title="Developer Tools"
          icon={Hammer}
          items={[
            ["Git & GitHub", "Version control and collaboration."],
            ["Postman", "API testing and debugging."],
            ["VS Code", "Professional code editor."],
            ["Jira", "Agile project management."],
          ]}
        />
      </div>
    </PageWrapper>
  );
}

/* SECTION COMPONENT */
function Section({
  title,
  icon,
  items,
}: {
  title: string;
  icon: LucideIcon;
  items: [string, string][];
}) {
  const SectionIcon = icon;

  return (
    <section className="mb-16">
      <div className="flex items-center justify-center gap-3 mb-10">
        <SectionIcon size={34} className="text-cyan-500" />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(([title, desc], i) => (
          <GlowCard key={i} title={title} desc={desc} icon={icon} />
        ))}
      </div>
    </section>
  );
}

