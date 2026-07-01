"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  MonitorSmartphone,
  Cpu,
  Cog,
  ArrowRight,
} from "lucide-react";

const branches = [
  {
    title: "Computer Engineering",
    icon: Laptop,
    description:
      "AI, ML, Web Development, Software Engineering, Cloud Computing and Data Science projects.",
  },
  {
    title: "Information Technology",
    icon: MonitorSmartphone,
    description:
      "Modern web applications, mobile apps, cybersecurity and enterprise software projects.",
  },
  {
    title: "Electronics & Computer",
    icon: Cpu,
    description:
      "Embedded Systems, IoT, Robotics and hardware-software integration projects.",
  },
  {
    title: "Mechanical Engineering",
    icon: Cog,
    description:
      "Design Analysis, Automation, CAD based concepts and innovative mechanical projects.",
  },
];

export default function Branches() {
  return (
    <section className="relative px-6 md:px-16 py-24">

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >

        <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-500 text-sm font-medium">

          Engineering Branches

        </span>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold">

          Branches We Support

        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">

          We provide complete engineering project development,
          implementation guidance and technical support across
          multiple engineering disciplines.

        </p>

      </motion.div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

        {branches.map((branch, index) => {

          const Icon = branch.icon;

          return (

            <motion.div
              key={branch.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-xl p-8 shadow-lg transition-all duration-300 hover:border-cyan-500/40"
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg">

                <Icon size={30} />

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                {branch.title}

              </h3>

              <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8">

                {branch.description}

              </p>

              <div className="mt-8 flex items-center gap-2 text-cyan-500 font-medium group-hover:gap-3 transition-all">

                Learn More

                <ArrowRight size={18} />

              </div>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}