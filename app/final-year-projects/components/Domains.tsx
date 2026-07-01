"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Globe,
  Cloud,
  Cpu,
  Bot,
  Wrench,
} from "lucide-react";

const domains = [
  {
    title: "Artificial Intelligence & Machine Learning",
    icon: Brain,
    tech: ["Python", "TensorFlow", "OpenCV", "Scikit-Learn"],
  },
  {
    title: "Web & Mobile Development",
    icon: Globe,
    tech: ["React", "Next.js", "Node.js", "Android"],
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
    tech: ["AWS", "Azure", "Docker", "DevOps"],
  },
  {
    title: "IoT & Embedded Systems",
    icon: Cpu,
    tech: ["Arduino", "ESP32", "Raspberry Pi", "Sensors"],
  },
  {
    title: "Robotics & Automation",
    icon: Bot,
    tech: ["Automation", "ROS", "Embedded", "Python"],
  },
  {
    title: "Mechanical Design & Analysis",
    icon: Wrench,
    tech: ["CAD", "ANSYS", "SolidWorks", "Automation"],
  },
];

export default function Domains() {
  return (
    <section
      id="domains"
      className="relative py-24 px-6 md:px-16 bg-gray-100 dark:bg-[#0d1728]"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-500 text-sm font-medium">
          Latest Technologies
        </span>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold">
          Project Domains
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Select from trending engineering technologies and build projects
          aligned with current industry requirements.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-20 max-w-7xl mx-auto">

        {domains.map((domain, index) => {

          const Icon = domain.icon;

          return (

            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-xl p-8 shadow-lg transition-all duration-300 hover:border-cyan-500/40"
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white">

                <Icon size={30} />

              </div>

              <h3 className="mt-8 text-2xl font-bold leading-snug">

                {domain.title}

              </h3>

              <div className="flex flex-wrap gap-3 mt-8">

                {domain.tech.map((item) => (

                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-200 dark:border-white/10 text-sm text-blue-700 dark:text-cyan-300"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </motion.div>

          );

        })}

      </div>
    </section>
  );
}