"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 px-6 md:px-16">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-blue-500/10 blur-[180px] rounded-full" />

      <div className="absolute top-40 right-0 w-[450px] h-[450px] bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-cyan-500/10 blur-[220px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 text-sm font-medium">

            <GraduationCap size={18} />

            2026 Final Year Engineering Project Solutions

          </div>

          <h1 className="mt-8 text-4xl md:text-6xl font-bold leading-tight">

            Engineering Project

            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">

              Development &

            </span>

            Academic Guidance

          </h1>

          <p className="mt-8 text-lg md:text-xl leading-9 text-gray-600 dark:text-gray-300 max-w-2xl">

            We provide complete guidance for Final Year Engineering Projects
            including IEEE paper selection, project implementation,
            documentation, source code explanation, technical mentoring,
            internship certification and post-delivery support.

          </p>

          {/* CTA */}

          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              href="#domains"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-105 transition"
            >

              Explore Domains

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />

            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-cyan-500/30 bg-white/60 dark:bg-white/5 backdrop-blur-xl font-semibold hover:bg-cyan-500/10 transition"
            >
              Contact Our Team
            </Link>

          </div>

          {/* Highlights */}

          <div className="grid sm:grid-cols-2 gap-4 mt-12">

            {[
              "IEEE Based Projects",
              "Complete Documentation",
              "Expert Technical Guidance",
              "Project Customization",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-3"
              >

                <CheckCircle2
                  className="text-cyan-500"
                  size={20}
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex justify-center"
        >

          <div className="relative w-[390px] rounded-[32px] border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-2xl p-10">

            <div className="flex justify-between items-center">

              <BookOpen
                className="text-cyan-500"
                size={40}
              />

              <span className="rounded-full bg-green-500/10 border border-green-500/20 px-3 py-1 text-green-500 text-sm">

                Academic Support

              </span>

            </div>

            <h2 className="mt-8 text-3xl font-bold">

              Project Deliverables

            </h2>

            <div className="mt-8 space-y-4">

              {[
                "IEEE Research Paper",
                "Project Documentation",
                "Complete Source Code",
                "PPT & Reports",
                "Viva Preparation",
                "Internship Certificate",
                "Technical Support",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-4 py-3"
                >

                  <CheckCircle2
                    size={18}
                    className="text-cyan-500"
                  />

                  <span className="text-sm">

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}