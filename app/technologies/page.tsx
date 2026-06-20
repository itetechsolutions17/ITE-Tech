"use client";

import { motion } from "framer-motion";
import { useState } from "react";

function GlowCard({ title, desc }: { title: string; desc: string }) {
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
      className="relative bg-white/5 p-6 rounded-xl border border-white/10 overflow-hidden"
    >
      {/* Cursor Glow */}
      <div
        className="absolute pointer-events-none w-40 h-40 bg-blue-500/30 rounded-full blur-2xl"
        style={{
          left: pos.x - 80,
          top: pos.y - 80,
        }}
      />

      <h3 className="text-blue-400 font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </motion.div>
  );
}

export default function Technologies() {
  return (
    <div className="bg-[#0b1120] text-gray-200 min-h-screen px-6 md:px-16 py-24">

      {/* HEADER */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Technology Stack</h1>
        <p className="max-w-2xl mx-auto text-gray-400">
          At Innovative Tech Engineers, we use modern, scalable and industry-proven technologies
          to deliver high-performance digital solutions. 
        </p>
      </section>

      {/* FRONTEND */}
      <Section title="Frontend Technologies" items={[
        ["HTML5 & CSS3", "Modern responsive UI development."],
        ["JavaScript (ES6+)", "Dynamic and interactive web applications."],
        ["React.js", "Component-based scalable frontend architecture."],
        ["Angular", "Enterprise-grade frontend framework."],
        ["Tailwind CSS", "Utility-first CSS for rapid UI design."],
        ["Vue.js", "Progressive JavaScript framework for building UIs."]
      ]} />

      {/* BACKEND */}
      <Section title="Backend Technologies" items={[
        ["Node.js", "High-performance server-side applications."],
        ["Python", "Robust backend and automation development."],
        [".NET Core", "Enterprise-level secure backend systems."],
        ["PHP", "Dynamic web backend solutions."]
      ]} />

      {/* FRAMEWORKS */}
      <Section title="Frameworks" items={[
        ["Django", "Secure and scalable Python web framework."],
        ["Django REST Framework", "Powerful API development with authentication support."],
        ["Express.js", "Minimal and flexible Node.js framework."],
        ["Next.js", "Server-side rendering for modern React apps."],
        ["Laravel", "Elegant PHP framework for web applications."]
      ]} />

      {/* DATABASE */}
      <Section title="Databases" items={[
        ["MySQL", "Relational database for structured data."],
        ["PostgreSQL", "Advanced open-source relational database."],
        ["MongoDB", "NoSQL database for scalable applications."],
        ["Redis", "In-memory data structure store for caching and real-time applications."]
      ]} />

      {/* CLOUD */}
      <Section title="Cloud & DevOps" items={[
        ["AWS", "Cloud hosting and scalable infrastructure."],
        ["Microsoft Azure", "Enterprise cloud computing solutions."],
        ["Vercel", "Frontend deployment and serverless hosting."],
        ["Docker", "Containerized application deployment."]
      ]} />

      {/* TOOLS */}
      <Section title="Development Tools" items={[
        ["Git & GitHub", "Version control and collaboration."],
        ["Postman", "API testing and debugging."],
        ["VS Code", "Professional code editor."],
        ["Jira", "Agile project management."]
      ]} />

    </div>
  );
}

/* SECTION COMPONENT */
function Section({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center">{title}</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(([title, desc], i) => (
          <GlowCard key={i} title={title} desc={desc} />
        ))}
      </div>
    </section>
  );
}