"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Award,
  Users,
  GraduationCap,
  UserCheck,
  Workflow,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import PageWrapper from "../../components/PageWrapper";

const internships = [
  {
    title: "Web Development Internship",
    Subtitle: "3-6 months",
    desc: "Understand the Era of Frontend Web Development with live project-based training using modern tech stacks.",
  },
  {
    title: "Python & Django Internship",
    Subtitle: "3-6 months",
    desc: "Backend development with REST APIs and real deployment experience.",
  },
  {
    title: "MERN Stack Internship",
    Subtitle: "4-6 months",
    desc: "Full-stack development with MongoDB, Express, React & Node.js.",
  },
  {
    title: "Database Intern",
    Subtitle: "1-3 months",
    desc: "Database Management using MySQL, PostgreSQL, MongoDB, database optimization, and SQL query development.",
  },
  {
    title: "Data Analyst",
    Subtitle: "2-4 months",
    desc: "Work with real-world datasets, dashboards, SQL, Excel, Power BI, and business intelligence projects.",
  },
  {
    title: "AI & ML Intern",
    Subtitle: "3-6 months",
    desc: "Build AI-powered applications using Python, machine learning models, and practical industry use cases.",
  },
  {
    title: "Industrial Training",
    Subtitle: "4-6 months",
    desc: "Professional software engineering workflow and real client exposure.",
  },
];

export default function InternshipClient() {
  return (
    <PageWrapper>
      <section className="relative min-h-screen overflow-hidden px-6 md:px-16 py-24 text-gray-900 dark:text-white transition-colors duration-500">
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
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 dark:from-white dark:to-blue-400 bg-clip-text text-transparent leading-tight">
              Launch Your Career
            </h1>
            <p className="text-2xl md:text-4xl font-semibold mt-4 text-gray-800 dark:text-gray-200">
              With Real-World Software Development Experience
            </p>

            <p className="mt-8 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-xl leading-10">
              We bridge the gap between academic learning and real-world software development through live projects and mentorship.
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
                className="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 backdrop-blur-xl p-10 md:p-12"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />

                {/* Content */}
                <div className="relative">
                  <h2 className="text-3xl md:text-4xl font-bold text-cyan-500 dark:text-cyan-400 leading-tight mb-4">
                    {item.title}
                  </h2>

                  <p className="inline-block rounded-full bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-6">
                    {item.Subtitle}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-8">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Border */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Program Benefits */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-28"
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
              Internship Benefits
            </h2>

            <p className="mt-5 text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
              Gain practical experience, industry exposure, and professional mentorship while working on real-world software projects.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
              {[
                {
                  icon: BriefcaseBusiness,
                  title: "Live Projects",
                  desc: "Work on real client projects with modern technologies.",
                },
                {
                  icon: Award,
                  title: "Internship Certificate",
                  desc: "Receive an industry-recognized completion certificate.",
                },
                {
                  icon: Users,
                  title: "Expert Mentorship",
                  desc: "Learn directly from experienced software professionals.",
                },
                {
                  icon: GraduationCap,
                  title: "Placement Guidance",
                  desc: "Career mentoring, resume building and interview preparation.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                    }}
                    className="rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 backdrop-blur-xl p-8 text-center transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                  >
                    <Icon size={42} className="mx-auto text-cyan-500 mb-6" />

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Who Can Apply */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-28"
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
              Who Can Apply?
            </h2>

            <p className="mt-5 text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
              Our internship programs are designed for students and fresh graduates who are passionate about building a career in software development.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
              {[
                "Diploma (CS / IT) Students",
                "BE / BTech Students",
                "BCA Students",
                "BSc (CS / IT)",
                "MCA Students",
                "Fresh Graduates",
                "Career Switchers",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 backdrop-blur-xl p-8 text-center hover:border-cyan-400/30 transition-all duration-300"
                >
                  <UserCheck size={40} className="mx-auto text-cyan-500 mb-5" />

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Internship Process */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-28"
          >
            <div className="text-center">
              <Workflow size={48} className="mx-auto text-cyan-500 mb-5" />

              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Internship Process
              </h2>

              <p className="mt-5 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
                Our internship journey is structured to help you learn, build, and grow with real industry experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
              {[
                {
                  step: "01",
                  title: "Apply",
                  desc: "Submit your internship application.",
                },
                {
                  step: "02",
                  title: "Screening",
                  desc: "Our team reviews your profile.",
                },
                {
                  step: "03",
                  title: "Selection",
                  desc: "Qualified candidates receive confirmation.",
                },
                {
                  step: "04",
                  title: "Training",
                  desc: "Learn modern technologies with mentors.",
                },
                {
                  step: "05",
                  title: "Live Projects",
                  desc: "Work on real client projects.",
                },
                {
                  step: "06",
                  title: "Certification",
                  desc: "Receive internship certificate and career guidance.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                >
                  <div className="text-5xl font-bold text-cyan-500">
                    {item.step}
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Apply Now CTA */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-28"
          >
            <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-gradient-to-r from-blue-600 to-cyan-500 p-10 md:p-16 text-center shadow-xl">
              <Rocket size={54} className="mx-auto text-white mb-6" />

              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Launch Your IT Career?
              </h2>

              <p className="mt-6 max-w-3xl mx-auto text-blue-100 text-lg leading-8">
                Join our internship program, work on real-world software projects,
                learn from experienced mentors, and gain practical skills that prepare
                you for a successful career in the IT industry.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-5">
                <Link
                  href="/contact"
                  className="rounded-full bg-white px-8 py-4 font-semibold text-blue-700 hover:scale-105 transition duration-300 shadow-md"
                >
                  Apply for Internship
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </section>
    </PageWrapper>
  );
}

