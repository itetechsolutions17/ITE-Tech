"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Lightbulb,
  Code2,
  FileText,
  Presentation,
  LifeBuoy,
} from "lucide-react";

const steps = [
  {
    title: "Requirement Discussion",
    desc: "Understand your academic requirements and project expectations.",
    icon: MessageSquare,
  },
  {
    title: "Topic Selection",
    desc: "Choose an innovative project based on your branch and domain.",
    icon: Lightbulb,
  },
  {
    title: "Project Development",
    desc: "Implementation using modern tools and technologies.",
    icon: Code2,
  },
  {
    title: "Documentation",
    desc: "Reports, PPT, Synopsis and complete documentation.",
    icon: FileText,
  },
  {
    title: "Demo & Viva",
    desc: "Project explanation, demo preparation and presentation guidance.",
    icon: Presentation,
  },
  {
    title: "Support",
    desc: "Continuous technical support even after project delivery.",
    icon: LifeBuoy,
  },
];

export default function Process() {
  return (
    <section className="py-24 px-6 md:px-16 bg-gray-100 dark:bg-[#0d1728] transition-colors duration-500">

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >

        <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-500 text-sm font-medium">

          Simple Workflow

        </span>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold">

          Our Project Development Process

        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">

          A transparent process designed to ensure quality,
          timely delivery and complete academic support.

        </p>

      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

        {steps.map((step, index) => {

          const Icon = step.icon;

          return (

            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                y: -8,
              }}
              className="relative rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-xl p-8 shadow-lg"
            >

              <div className="absolute top-6 right-6 text-5xl font-bold text-cyan-500/10">

                0{index + 1}

              </div>

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white">

                <Icon size={30} />

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                {step.title}

              </h3>

              <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8">

                {step.desc}

              </p>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}