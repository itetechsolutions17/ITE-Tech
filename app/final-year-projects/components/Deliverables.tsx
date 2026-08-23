"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  FileText,
  BookOpen,
  Code2,
  Presentation,
  GraduationCap,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const deliverables = [
  "IEEE / Base Research Paper",
  "10–20 Reference Papers",
  "Synopsis & Documentation",
  "Stage I & Stage II Reports",
  "SRS & UML Diagrams",
  "Complete Source Code",
  "Line-by-Line Code Explanation",
  "Algorithms & Flowcharts",
  "PPT for Final Presentation",
  "GUI Customization",
  "Technical Support",
  "Internship Certificate",
];

const features = [
  {
    icon: FileText,
    title: "Documentation",
    desc: "Professional reports and academic documentation.",
  },
  {
    icon: Code2,
    title: "Implementation",
    desc: "Complete working project with source code.",
  },
  {
    icon: Presentation,
    title: "Presentation",
    desc: "Ready-to-use PPT and viva guidance.",
  },
  {
    icon: GraduationCap,
    title: "Academic Guidance",
    desc: "Mentoring throughout your project journey.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    desc: "Online assistance whenever required.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Delivery",
    desc: "Latest technologies with proper implementation.",
  },
];

export default function Deliverables() {
  return (
    <section className="relative py-24 px-6 md:px-16">

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >

        <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-500 text-sm font-medium">
          Complete Project Package
        </span>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold">
          What You&apos;ll Receive
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Everything required to successfully complete your final year
          engineering project under one comprehensive package.
        </p>

      </motion.div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 mt-20">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-xl p-10 shadow-lg"
        >

          <div className="flex items-center gap-3 mb-8">

            <BookOpen className="text-cyan-500" size={30} />

            <h3 className="text-3xl font-bold">
              Deliverables
            </h3>

          </div>

          <div className="grid gap-5">

            {deliverables.map((item) => (

              <div
                key={item}
                className="flex items-center gap-3"
              >

                <CheckCircle2
                  className="text-cyan-500 shrink-0"
                  size={22}
                />

                <span className="text-gray-700 dark:text-gray-300">

                  {item}

                </span>

              </div>

            ))}

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >

          {features.map((item) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-xl p-8 shadow-lg"
              >

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white">

                  <Icon size={28} />

                </div>

                <h3 className="mt-6 text-xl font-bold">

                  {item.title}

                </h3>

                <p className="mt-4 leading-8 text-gray-600 dark:text-gray-300">

                  {item.desc}

                </p>

              </motion.div>

            );

          })}

        </motion.div>

      </div>

    </section>
  );
}