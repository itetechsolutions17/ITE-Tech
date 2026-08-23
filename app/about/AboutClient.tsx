"use client";

import { motion } from "framer-motion";
import PageWrapper from "../../components/PageWrapper";
import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Innovation",
    desc: "Modern technologies and scalable architecture for future-ready systems.",
  },
  {
    title: "Reliability",
    desc: "Production-grade applications with performance and security.",
  },
  {
    title: "Growth",
    desc: "Helping businesses and students grow with practical solutions.",
  },
];

export default function AboutClient() {
  return (
    <PageWrapper>
      <section className="relative min-h-screen overflow-hidden px-6 md:px-16 py-24 text-gray-900 dark:text-white bg-white dark:bg-[#0b1120] transition-colors duration-500">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-block px-5 py-2 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300 text-sm font-medium tracking-wide">
              ABOUT ITE TECH SOLUTIONS
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl text-gray-900 dark:text-white font-bold leading-tight">
              Building Technology That Drives Business Growth
            </h1>

            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-8 mt-6">
              ITE Tech Solutions is a technology-driven software company specializing in custom software development,
              web applications, mobile solutions, cloud technologies, AI integration, and cybersecurity services.
              We partner with startups, enterprises, educational institutions, and growing businesses to build secure,
              scalable, and future-ready digital solutions.
            </p>
          </motion.div>

          {/* STATS */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              {
                value: "10+",
                label: "Technologies Used",
                color: "text-blue-600 dark:text-blue-400",
              },
              {
                value: "24/7",
                label: "Technical Support",
                color: "text-blue-600 dark:text-blue-400",
              },
              {
                value: "100%",
                label: "Commitment",
                color: "text-blue-600 dark:text-blue-400",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 backdrop-blur-xl text-center shadow-lg"
              >
                <h2 className={`text-5xl font-bold ${item.color}`}>
                  {item.value}
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Core Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.2,
                }}
                whileHover={{
                  scale: 1.03,
                  y: -10,
                }}
                className="relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 backdrop-blur-xl shadow-lg"
              >
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />

                <h3 className="relative text-2xl font-bold text-blue-400 mb-4">
                  {card.title}
                </h3>

                <p className="relative text-gray-600 dark:text-gray-300 leading-8">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mission Vision */}
          <div className="grid lg:grid-cols-2 gap-8 mt-28">
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg rounded-3xl p-10 backdrop-blur-xl"
            >
              <h2 className="text-4xl font-bold text-blue-400 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-9">
                To empower startups, institutions and businesses through innovative technology solutions that improve productivity and accelerate growth.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg rounded-3xl p-10 backdrop-blur-xl"
            >
              <h2 className="text-4xl font-bold text-cyan-400 mb-6">
                Our Vision
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-9">
                To become a leading technology company delivering intelligent and future-ready digital solutions.
              </p>
            </motion.div>
          </div>

          {/* Founder Section */}
          <div className="mt-28">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg rounded-3xl p-10 backdrop-blur-xl"
            >
              <div className="grid lg:grid-cols-3 gap-10 items-center">
                {/* Founder Image */}
                <div className="flex justify-center">
                  <Image
                    src="/projects/founder.jpg"
                    alt="Pushkar Bhegade - Founder & Director"
                    width={260}
                    height={260}
                    className="rounded-3xl object-cover border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:scale-105 transition duration-500"
                    priority
                  />
                </div>

                {/* Founder Content */}
                <div className="lg:col-span-2">
                  <p className="text-blue-400 font-semibold uppercase tracking-wider">
                    Meet The Founder
                  </p>

                  <h2 className="text-4xl font-bold mt-3">
                    Pushkar Bhegade
                  </h2>

                  <div className="mt-2 space-y-1">
                    <p className="text-cyan-400 text-lg font-semibold">
                      Founder & Director
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 text-sm tracking-wide">
                      Software Architect • Technology Strategist
                    </p>
                  </div>

                  <p className="mt-6 text-gray-600 dark:text-gray-300 leading-9">
                    Pushkar Bhegade is the Founder & Director of ITE Tech Solutions,
                    a technology-driven company focused on delivering innovative
                    software solutions for businesses. With expertise in software
                    development, web technologies, cloud solutions, automation,
                    and cybersecurity, he is passionate about creating scalable
                    digital products that help organizations grow and succeed
                    in the modern digital landscape.
                  </p>

                  <p className="mt-4 text-gray-600 dark:text-gray-300 leading-9">
                    Under his leadership, ITE Tech Solutions provides custom
                    web applications, mobile app development, cloud hosting,
                    software maintenance, and cybersecurity services. His vision
                    is to build a trusted technology company that empowers
                    startups, institutions, and enterprises through innovation,
                    quality, and long-term partnerships.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Founder Quote */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg rounded-3xl p-10 backdrop-blur-xl">
                <blockquote className="text-center max-w-4xl mx-auto">
                  <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-700 dark:text-gray-200 italic">
                    &ldquo;We don&apos;t just build software. We build scalable digital solutions that help businesses innovate, grow, and lead with confidence.&rdquo;
                  </p>

                  <footer className="mt-8">
                    <h4 className="text-xl font-semibold text-blue-400">
                      Pushkar Bhegade
                    </h4>
                    <p className="text-gray-600 dark:text-gray-500">
                      Founder & Director
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      ITE Tech Solutions
                    </p>
                  </footer>
                </blockquote>
              </div>
            </motion.div>
          </div>

          {/* Why Choose */}
          <div className="mt-28">
            <h2 className="text-4xl font-bold text-center mb-14">
              Why Choose ITE Tech Solutions?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Live Industry Projects",
                "Scalable Architecture",
                "Modern Technologies",
                "Dedicated Support",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                  }}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg rounded-2xl p-8 text-center backdrop-blur-xl"
                >
                  <div className="text-5xl mb-5">✓</div>
                  <h3 className="font-semibold text-lg">{item}</h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-300 leading-7">
                    {item === "Live Industry Projects" && "Hands-on experience with real-world projects."}
                    {item === "Scalable Architecture" && "Building systems that grow with your business."}
                    {item === "Modern Technologies" && "Utilizing the latest tools and frameworks."}
                    {item === "Dedicated Support" && "Reliable assistance for all your technical needs."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <section className="text-center py-24">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to transform your ideas into secure, scalable and modern digital solutions?
            </p>
            <Link
              href="/contact"
              className="inline-block mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-105 transition shadow-lg"
            >
              Book Free Consultation
            </Link>
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
