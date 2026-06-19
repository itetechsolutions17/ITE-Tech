"use client";

import { motion } from "framer-motion";
import PageWrapper from "../../components/PageWrapper";

const internships = [
  {
    title: "Web Development Internship",
    desc: "3–6 month live project-based training using modern tech stacks.",
  },

  {
    title: "Python & Django Internship",
    desc: "Backend development with REST APIs and real deployment experience.",
  },

  {
    title: "MERN Stack Internship",
    desc: "Full-stack development with MongoDB, Express, React & Node.js.",
  },

  {
    title: "Industrial Training",
    desc: "Professional software engineering workflow and real client exposure.",
  },
];

export default function Internships() {
  return (
    <PageWrapper>

      <section className="relative min-h-screen overflow-hidden px-6 md:px-16 py-24 text-white">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

        <div className="relative max-w-7xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent leading-tight">
              Industry-Ready Internship Programs
            </h1>

            <p className="mt-8 text-gray-300 max-w-4xl mx-auto text-xl leading-10">
              We bridge the gap between academic learning and
              real-world software development through live projects
              and mentorship.
            </p>

          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {internships.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />

                {/* Content */}
                <div className="relative">

                  <h2 className="text-4xl font-bold text-cyan-400 leading-tight mb-8">
                    {item.title}
                  </h2>

                  <p className="text-gray-300 text-xl leading-10">
                    {item.desc}
                  </p>

                </div>

                {/* Bottom Border */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500" />

              </motion.div>
            ))}

          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-4 gap-6 mt-24"
          >

            {[
              "Live Projects",
              "Certificate Provided",
              "Industry Mentorship",
              "Placement Guidance",
            ].map((feature, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center text-lg text-gray-300"
              >
                {feature}
              </div>
            ))}

          </motion.div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 text-center py-8 text-gray-500 bg-[#050b16]">
        © 2026 Innovative Tech Engineers. All Rights Reserved.
      </footer>

    </PageWrapper>
  );
}