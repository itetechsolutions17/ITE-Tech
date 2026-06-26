"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <PageWrapper>

      <main className="relative overflow-hidden bg-white dark:bg-[#081120] text-gray-900 dark:text-gray-200 min-h-screen transition-colors duration-500">

        {/* BACKGROUND GLOW */}

        {/* Top Left */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[180px] rounded-full" />

        {/* Top Right */}
        <div className="absolute top-[25%] right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full" />

        {/* Bottom Center */}
        <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/5 blur-[220px] rounded-full" />
        {/* HERO */}
        <section className="relative text-center py-28 px-6">

          {/* Animated Floating Orb */}
          <motion.div
            animate={{
              y: [15, -15, 15],
              x: [10, -10, 10],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 left-[8%] w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-600/20 blur-3xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block mb-8 px-5 py-2 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300 text-sm font-medium tracking-wide hover:bg-blue-500/20 transition duration-300">
              Trusted Technology Partner for Digital Transformation
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent">

              Building Digital
              <br />

              Solutions That
              <br />

              Drive Business Growth

            </h1>

            <p className="mt-6 text-cyan-400 font-medium tracking-wide">

              Website Development • Mobile Apps • AI • Cloud • Cybersecurity

            </p>

            <p className="max-w-3xl mx-auto mt-10 text-gray-400 text-lg md:text-xl leading-9">

              Empowering startups, enterprises, and organizations with innovative software,
              AI-powered solutions, cloud technologies, and enterprise-grade digital transformation services.

            </p>

            <div className="mt-8 flex justify-center h-10">
              <div className="relative">

                {/* Glow Effect */}
                <div className="absolute inset-0 blur-xl bg-cyan-500/20 rounded-full"></div>

                <h2 className="relative text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">

                  <Typewriter
                    words={[
                      "Got an Idea?",
                      "Need a Digital Solution?",
                      "Looking for Custom Software?",
                      "Need a Professional Website?",
                      "Need a Mobile Application?",
                      "Planning Cloud Migration?",
                      "Need AI Integration?",
                      "Protect Your Business with Cybersecurity.",
                      "Let's Build Something Amazing Together."
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="▋"
                    typeSpeed={70}
                    deleteSpeed={40}
                    delaySpeed={1800}
                  />

                </h2>

              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-12 flex justify-center gap-6 flex-wrap">

              <Link
                href="/services"
                className="group relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] transition duration-300"
              >

                <span className="relative z-10">
                  Explore Services
                </span>

                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />

              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-lg text-cyan-300 font-semibold hover:bg-cyan-400/10 hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] transition duration-300"
              >
                Book Free Consultation
              </Link>

            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">

              <span>✓ Free Consultation </span>

              <span>✓ Custom Software Development </span>

              <span>✓ Enterprise-Grade Security </span>

              <span>✓ Dedicated Technical Support </span>

            </div>

          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cyan-400 text-2xl"
          >
            ↓
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
              "Node.js",
              "Java",
              "Cybersecurity",
              "DevOps",
              "CRM",
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
              "Node.js",
              "Java",
              "Cybersecurity",
              "DevOps",
              "CRM",
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

        {/* FREE CONSULTATION */}
        <section className="px-6 md:px-16 py-20">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >

            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-600/10 blur-3xl rounded-full" />

            <div className="relative grid lg:grid-cols-2 gap-12 items-center p-10 md:p-16">

              {/* Left Side */}
              <div>

                <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium">
                  30-Minute Free Strategy Session
                </span>

                <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
                  Got an Idea?
                </h2>

                <p className="mt-4 text-cyan-400 text-2xl font-semibold">
                  Let's Build It Together.
                </p>

                <p className="mt-6 text-gray-400 leading-8 text-lg">
                  Every successful digital product starts with a conversation.
                  Whether you need a website, mobile application, enterprise software,
                  AI integration, cloud solutions, or cybersecurity services,
                  our experts are here to guide you.
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-300">

                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                    ✓ Free Consultation
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                    ✓ Expert Guidance
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                    ✓ Business Solutions
                  </span>

                </div>

                <Link
                  href="/contact"
                  className="inline-block mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] transition duration-300"
                >
                  Book Free Consultation
                </Link>

              </div>

              {/* Right Side */}
              <div className="hidden lg:flex justify-center">

                <div className="relative w-80 h-80">

                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-3xl animate-pulse" />

                  <div className="absolute inset-10 rounded-full border border-cyan-400/20 bg-white/5 backdrop-blur-xl flex items-center justify-center">

                    <div className="text-center">

                      <h3 className="text-3xl font-bold text-cyan-300">
                        Let's Talk
                      </h3>

                      <p className="mt-3 text-gray-400">
                        Your next successful project starts here.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </section>

        {/* STATS */}
        <section className="px-6 md:px-16 py-12">

          <div className="grid md:grid-cols-4 gap-6">

            {[
              { value: "Secure", label: "Software Solutions" },
              { value: "10+", label: "Technologies Used" },
              { value: "100%", label: "Commitment" },
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
                title: "Custom Software Development",
                desc: "Tailored software solutions to meet your unique business needs.",
              },
              {
                title: "AI & Machine Learning Solutions",
                desc: "Intelligent systems that enhance decision-making and automation.",
              },
              {
                title: "Cloud Solutions & Migration",
                desc: "Seamless cloud integration and migration for scalable operations.",
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
              {
                title: "Cybersecurity Services",
                desc: "Protecting your digital assets with advanced security measures.",
              },
              {
                title: "IT Consulting & Support",
                desc: "Strategic IT consulting and reliable technical support to accelerate business growth.",
              }
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
              Ready to Transform Your Business?
            </h2>

            <p className="max-w-3xl mx-auto text-gray-400 text-xl leading-10">

              Transform your ideas into innovative digital solutions with ITE Tech Solutions.

              Whether you're building a startup, modernizing an existing business, or launching your next enterprise software, our experts are ready to help you every step of the way.

            </p>

            <Link
              href="/contact"
              className="inline-block mt-12 px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-lg font-semibold hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] transition duration-300"
            >
              Book Free Consultation
            </Link>

          </motion.div>
        </section>
      </main>

    </PageWrapper>
  );
}