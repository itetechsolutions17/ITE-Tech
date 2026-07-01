"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  FileText,
  Code2,
  Users,
} from "lucide-react";

export default function AboutProjects() {
  return (
    <section className="relative px-6 md:px-16 py-24">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <span className="inline-block px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-cyan-500 text-sm font-medium">

            About Our Services

          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">

            Complete Final Year
            <br />

            Engineering Project Support

          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600 dark:text-gray-300">

            At <span className="font-semibold text-cyan-500">ITE Tech Solutions</span>,
            we provide complete academic project development and technical
            guidance for engineering students.

          </p>

          <p className="mt-6 text-lg leading-9 text-gray-600 dark:text-gray-300">

            Our objective is to help students understand modern technologies,
            implement innovative solutions, prepare professional documentation
            and successfully complete their academic projects with confidence.

          </p>

        </motion.div>

        {/* Right Cards */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid sm:grid-cols-2 gap-6"
        >

          {[
            {
              icon: GraduationCap,
              title: "IEEE & Non-IEEE",
              desc: "Latest project ideas based on current technologies."
            },
            {
              icon: FileText,
              title: "Complete Documentation",
              desc: "Synopsis, Reports, PPT, SRS and UML diagrams."
            },
            {
              icon: Code2,
              title: "Implementation",
              desc: "Working project with proper explanation and guidance."
            },
            {
              icon: Users,
              title: "Expert Mentoring",
              desc: "Continuous technical guidance throughout your project."
            },
          ].map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-xl p-8 shadow-lg"
              >

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white">

                  <Icon size={28} />

                </div>

                <h3 className="mt-6 text-2xl font-bold">

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