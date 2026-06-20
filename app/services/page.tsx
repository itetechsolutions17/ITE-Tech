"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageWrapper from "../../components/PageWrapper";

export default function Services() {

  const services = [
    {
      title: "Custom Software Development",
      desc: "End-to-end web and enterprise software built with scalable architecture and modern technologies.",
      icon: "💻",
    },
    {
      title: "Website Development",
      desc: "Responsive and scalable websites using modern frameworks.",
      icon: "🌐",
    },
    {
      title: "Software Solutions",
      desc: "Custom enterprise software and automation tools.",
      icon: "⚙️",
    },
    {
      title: "AI/ML Solutions",
      desc: "Smart systems using AI and machine learning.",
      icon: "🤖",
    },
    {
      title: "Web & Mobile Applications",
      desc: "High-performance web platforms and Android/iOS applications with modern UI.",
      icon: "📱",
    },
    {
      title: "Enterprise Solutions",
      desc: "ERP, CRM and automation systems to improve workflow efficiency.",
      icon: "🏢",
    },
    {
      title: "Cloud & DevOps",
      desc: "Cloud infrastructure, Docker, CI/CD pipelines and scalable deployment.",
      icon: "☁️",
    },
    {
      title: "UI/UX & Product Design",
      desc: "User-centric interface design with modern and engaging experiences.",
      icon: "🎨",
    },
    {
      title: "Industry Internship Programs",
      desc: "Live project-based internships aligned with industry standards.",
      icon: "🚀",
    },
  ];

  return (
    <PageWrapper>

      <main className="relative overflow-hidden bg-[#081120] text-white min-h-screen">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full" />

        {/* HERO */}
        <section className="relative text-center py-28 px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-block mb-8 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300">

              Enterprise Software Services

            </div>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent">

              Our Core Services

            </h1>

            <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-lg leading-9">

              Innovative Tech Engineers delivers scalable, secure and
              performance-driven digital solutions tailored for startups,
              enterprises and institutions.

            </p>

          </motion.div>

        </section>

        {/* SERVICES GRID */}

        <section className="px-6 md:px-16 py-16">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.03
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden relative"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 transition duration-500" />

                <div className="relative">

                  <div className="text-5xl mb-6">

                    {service.icon}

                  </div>

                  <h2 className="text-2xl font-bold text-cyan-400 mb-4">

                    {service.title}

                  </h2>

                  <p className="text-gray-400 leading-8">

                    {service.desc}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </section>

        {/* CTA */}

        <section className="text-center py-28 px-6">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl font-bold mb-6">

              Need a Custom Solution?

            </h2>

            <p className="max-w-2xl mx-auto text-gray-400 text-lg">

              Let's discuss how ITE Tech Solutions can transform your ideas
              into scalable digital products.

            </p>

            <Link
              href="/contact"
              className="inline-block mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold hover:scale-105 transition"
            >

              Start Your Project

            </Link>

          </motion.div>

        </section>
      </main>

    </PageWrapper>
  );
}