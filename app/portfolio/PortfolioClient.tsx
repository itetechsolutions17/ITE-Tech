"use client";

import { motion } from "framer-motion";
import PageWrapper from "../../components/PageWrapper";
import Image from "next/image";
import Link from "next/link";

import {
  Globe,
  Building2,
  GraduationCap,
  BriefcaseBusiness,
  ChartColumn,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    title: "Edurefer Platform",
    desc: "A modern education referral platform connecting students with learning opportunities and digital resources.",
    image: "/projects/edurefer.jpg",
    tech: ["Next.js", "Node.js", "MongoDB"],
    icon: GraduationCap,
    category: "Education",
    status: "Completed",
    url: "https://edurefertech.com",
  },
  {
    title: "Institute ERP System",
    desc: "Comprehensive academic and institute management solution with student and staff modules.",
    image: "/projects/erp.jpg",
    tech: ["React", "Python", "MySQL"],
    icon: BriefcaseBusiness,
    category: "ERP",
    status: "Completed",
    url: "/contact",
  },
  {
    title: "Internship Portal",
    desc: "Platform for internship management, student applications and mentor coordination.",
    image: "/projects/internship.jpg",
    tech: ["Next.js", "Firebase"],
    icon: Globe,
    category: "Internship",
    status: "Completed",
    url: "/contact",
  },
  {
    title: "CRM Software",
    desc: "Customer relationship management system designed for growing businesses.",
    image: "/projects/crm.jpg",
    tech: ["React", "Django"],
    icon: Building2,
    category: "CRM",
    status: "Custom Solution",
    url: "/contact",
  },
  {
    title: "Business Dashboard",
    desc: "Enterprise analytics dashboard with reporting and business insights.",
    image: "/projects/dashboard.jpg",
    tech: ["Next.js", "PostgreSQL"],
    icon: ChartColumn,
    category: "Analytics",
    status: "Custom Solution",
    url: "/contact",
  },
  {
    title: "E-Commerce Platform",
    desc: "Complete online shopping platform with secure payment integration.",
    image: "/projects/ecommerce.jpg",
    tech: ["React", "Node.js"],
    icon: ShoppingCart,
    category: "E-Commerce",
    status: "Custom Solution",
    url: "/contact",
  },
];

export default function PortfolioClient() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-white dark:bg-[#0b1120] text-gray-900 dark:text-white transition-colors duration-500 px-6 md:px-16 py-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent">
            Our Portfolio
          </h1>

          <p className="mt-8 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-xl leading-9">
            Explore some of the innovative digital products, enterprise applications and software solutions developed by ITE Tech Solutions.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    {/* Status + Category */}
                    <div className="flex justify-between items-center mb-5">
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-medium ${
                          project.status === "Completed"
                            ? "bg-green-500/10 text-green-600 dark:text-green-400"
                            : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                        }`}
                      >
                        {project.status}
                      </span>

                      <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-600 dark:text-cyan-400">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <Icon size={26} className="text-cyan-500" />
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-7">
                      {project.desc}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Button */}
                    <Link
                      href={project.url}
                      className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-semibold text-white transition hover:scale-[1.02]"
                    >
                      View Project
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28"
        >
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-14 md:px-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Have a Project Idea?
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-blue-100">
              Whether you&apos;re a startup, educational institute, or enterprise, our team can transform your idea into a scalable digital solution.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-10 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
            >
              Book Free Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.section>
      </main>
    </PageWrapper>
  );
}
