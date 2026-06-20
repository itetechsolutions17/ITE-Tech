"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>

      <main className="relative overflow-hidden bg-[#081120] text-gray-200 min-h-screen">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[180px] rounded-full" />

        <div className="absolute top-[30%] right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

        {/* HERO */}
        <section className="relative text-center py-28 px-6">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block mb-8 px-5 py-2 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300 text-sm font-medium tracking-wide hover:bg-blue-500/20 transition duration-300">
              Enterprise Software & Digital Solutions
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent">

              Innovative Software
              <br />

              Solutions For The
              <br />

              Digital Era

            </h1>

            <p className="max-w-3xl mx-auto mt-10 text-gray-400 text-lg md:text-xl leading-9">

              Empowering startups, enterprises, and educational institutions
              with scalable software, intelligent automation, modern UI/UX,
              AI-powered systems, and enterprise-grade digital solutions.

            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex justify-center gap-5 flex-wrap">

              <Link
                href="/services"
                className="group relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-105 transition duration-300"
              >

                <span className="relative z-10">
                  Explore Services
                </span>

                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />

              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-lg text-cyan-300 font-semibold hover:bg-cyan-400/10 hover:scale-105 transition duration-300"
              >
                Talk to Experts
              </Link>

            </div>

          </motion.div>

        </section>

        {/* TECH MARQUEE */}
        <section className="relative overflow-hidden py-10 border-y border-white/10 bg-[#081120]">

          <div className="flex gap-6 whitespace-nowrap animate-marquee">

            {[
              "Next.js",
              "React",
              "AI Solutions",
              "Cloud Systems",
              "ERP Development",
              "UI/UX Design",
              "Automation",
              "Python",
              "Mobile Apps",
              "Enterprise Software",
              "Machine Learning",
              "API Development",
            ].map((item, i) => (

              <div
                key={i}
                className="px-6 py-3 rounded-full border border-blue-400/20 bg-white/5 backdrop-blur-lg text-blue-300 text-sm font-medium"
              >
                {item}
              </div>

            ))}

            {/* Duplicate for smooth infinite effect */}
            {[
              "Next.js",
              "React",
              "AI Solutions",
              "Cloud Systems",
              "ERP Development",
              "UI/UX Design",
              "Automation",
              "Python",
              "Mobile Apps",
              "Enterprise Software",
              "Machine Learning",
              "API Development",
            ].map((item, i) => (

              <div
                key={`dup-${i}`}
                className="px-6 py-3 rounded-full border border-blue-400/20 bg-white/5 backdrop-blur-lg text-blue-300 text-sm font-medium"
              >
                {item}
              </div>

            ))}

          </div>

        </section>

        {/* STATS */}
        <section className="px-6 md:px-16 py-12">

          <div className="grid md:grid-cols-4 gap-6">

            {[
              { value: "25+", label: "Projects Completed" },
              { value: "10+", label: "Technologies Used" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support & Guidance" },
            ].map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center"
              >

                <h3 className="text-4xl font-bold text-cyan-400 mb-2">
                  {item.value}
                </h3>

                <p className="text-gray-400">
                  {item.label}
                </p>

              </motion.div>

            ))}

          </div>

        </section>

        {/* SERVICES */}
        <section className="px-6 md:px-16 py-28">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-center font-bold mb-20"
          >

            Our Core Services

          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Internship-Oriented Development",
                desc: "Live project exposure with industry-ready training programs.",
              },
              {
                title: "Web Application Development",
                desc: "Modern scalable web applications using latest technologies.",
              },
              {
                title: "Mobile App Development",
                desc: "Android & iOS applications with premium UI experiences.",
              },
              {
                title: "Enterprise Systems",
                desc: "ERP, CRM & automation systems for operational growth.",
              },
            ].map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />

                <div className="relative">

                  <h3 className="text-2xl font-bold text-cyan-400 mb-5">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-8">
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </section>

        {/* WHY US */}
        <section className="relative px-6 md:px-16 py-28 bg-[#0d1728]">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-center font-bold mb-20"
          >

            Why Partner With Us?

          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Industry Ready",
                desc: "Solutions aligned with real-world software demands.",
              },
              {
                title: "Experienced Developers",
                desc: "Production-grade architecture and coding standards.",
              },
              {
                title: "Agile Execution",
                desc: "Fast milestone-driven development methodology.",
              },
              {
                title: "Affordable & Transparent",
                desc: "Clear pricing and scalable business solutions.",
              },
            ].map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center"
              >

                <h4 className="text-2xl font-bold mb-5 text-white">
                  {item.title}
                </h4>

                <p className="text-gray-400 leading-8">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </section>

        {/* CTA */}
        <section className="relative text-center py-32 px-6 overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >

            <h2 className="text-5xl font-bold mb-8">
              Let’s Build Something Powerful Together
            </h2>

            <p className="max-w-3xl mx-auto text-gray-400 text-xl leading-10">
              Transform your ideas into scalable digital products with
              Innovative Tech Engineers.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-12 px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-lg font-semibold hover:scale-105 transition duration-300"
            >
              Start Your Project
            </Link>

          </motion.div>

        </section>
      </main>

    </PageWrapper>
  );
}