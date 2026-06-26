"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageWrapper from "../../components/PageWrapper";
import {
  Code2,
  Globe,
  BrainCircuit,
  Smartphone,
  Building2,
  Cloud,
  Palette,
  GraduationCap,
  LaptopMinimal
} from "lucide-react";

export default function Services() {

  const services = [
    {
      title: "Website Development",
      desc: "Responsive and scalable websites using modern frameworks.",
      icon: Globe,
    },
    {
      title: "Custom Software Development",
      desc: "End-to-end web and enterprise software built with scalable architecture and modern technologies.",
      icon: LaptopMinimal,
    },
    {
      title: "Web & Mobile Applications",
      desc: "High-performance web platforms and Android/iOS applications with modern UI.",
      icon: Smartphone,
    },
    {
      title: "AI/ML Solutions",
      desc: "Smart systems using AI and machine learning.",
      icon: BrainCircuit,
    },
    {
      title: "Enterprise Solutions",
      desc: "ERP, CRM and automation systems to improve workflow efficiency.",
      icon: Building2,
    },
    {
      title: "Cloud & DevOps",
      desc: "Cloud infrastructure, Docker, CI/CD pipelines and scalable deployment.",
      icon: Cloud,
    },
    {
      title: "UI/UX & Product Design",
      desc: "User-centric interface design with modern and engaging experiences.",
      icon: Palette,
    },
    {
      title: "Software Solutions",
      desc: "Custom enterprise software and automation tools.",
      icon: Code2,
    },
    {
      title: "Industry Internship Programs",
      desc: "Live project-based internships aligned with industry standards.",
      icon: GraduationCap,
    },
  ];

  return (
    <PageWrapper>

      <main className="relative overflow-hidden bg-white dark:bg-[#0b1120] text-gray-900 dark:text-white transition-colors duration-500 min-h-screen">

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

              Trusted IT Partner for Startups, Businesses & Institutions

            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Transforming Ideas Into
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Powerful Digital Solutions
              </span>
            </h1>

            <p className="max-w-4xl mx-auto mt-8 text-gray-600 dark:text-gray-300 text-lg leading-9">

              We design, develop and deliver
              modern software solutions,
              enterprise applications,
              websites and AI-powered products
              that help businesses grow.

            </p>

          </motion.div>

        </section>

        {/* SERVICES GRID */}

        <section className="px-6 md:px-16 py-16">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, i) => {

              const Icon = service.icon;

              return (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: {
                      duration: 0.3
                    }
                  }}

                  className="group relative rounded-3xl border border-gray-200 dark:border-white/10 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-lg hover:shadow-[0_0_35px_rgba(6,182,212,0.18)] transition-all duration-500">

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 transition duration-500" />

                  <div className="relative">

                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition">

                      <Icon
                        size={32}
                        className="text-cyan-500"
                      />

                    </div>

                    <h2 className="text-2xl font-bold text-cyan-500 mb-4">
                      {service.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 leading-8">
                      {service.desc}
                    </p>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 mt-6 text-cyan-500 font-semibold hover:translate-x-1 transition-all">
                      Learn More →
                    </Link>

                  </div>

                </motion.div>

              );

            })}
          </div>

        </section>

        {/* CTA */}

        <section className="py-28 px-6">

          <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-16 md:px-16 text-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >

              <h2 className="text-4xl md:text-5xl font-bold text-white">

                Ready to Build Your Next Digital Product?

              </h2>

              <p className="mt-6 max-w-4xl mx-auto text-lg leading-8 text-blue-100">

                Whether you're a startup, business, or educational institution,
                our team is ready to transform your ideas into secure,
                scalable and future-ready digital solutions.

              </p>

              <Link
                href="/contact"
                className="inline-flex items-center mt-10 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 hover:scale-105 transition">

                Book Free Consultation

              </Link>

            </motion.div>
          </div>
        </section>
      </main>

    </PageWrapper>
  );
}