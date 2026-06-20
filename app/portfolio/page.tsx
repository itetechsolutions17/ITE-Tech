"use client";

import { motion } from "framer-motion";
import PageWrapper from "../../components/PageWrapper";
import Image from "next/image";

const projects = [
  {
    title: "Edurefer Platform",
    desc: "Educational referral ecosystem",
    image: "/projects/edurefer.jpg",
    tech: ["Next.js", "Node.js", "MongoDB"],
    icon: "🚀",
  },

  {
    title: "Institute ERP System",
    desc: "Academic management solution",
    image: "/projects/erp.jpg",
    tech: ["React", "Python", "MySQL"],
    icon: "🏢",
  },

  {
    title: "Internship Portal",
    desc: "Student internship management",
    image: "/projects/internship.jpg",
    tech: ["Next.js", "Firebase"],
    icon: "🎓",
  },

  {
    title: "CRM Software",
    desc: "Customer relationship platform",
    image: "/projects/crm.jpg",
    tech: ["React", "Django"],
    icon: "💼",
  },

  {
    title: "Business Dashboard",
    desc: "Enterprise analytics platform",
    image: "/projects/dashboard.jpg",
    tech: ["Next.js", "PostgreSQL"],
    icon: "📊",
  },

  {
    title: "E-Commerce Platform",
    desc: "Complete online store system",
    image: "/projects/ecommerce.jpg",
    tech: ["React", "Node"],
    icon: "🛒",
  },
];

export default function Portfolio() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-[#081120] text-white px-6 md:px-16 py-24">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">

            Our Portfolio

          </h1>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">

            Building innovative products and enterprise-grade
            software solutions.

          </p>

        </motion.div>


        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1
              }}
              className="group perspective h-[420px]"
            >

              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">


                {/* FRONT */}

                <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 [backface-visibility:hidden]">

                  <div className="text-6xl">

                    {project.icon}

                  </div>

                  <h2 className="mt-6 text-3xl font-bold text-cyan-400">

                    {project.title}

                  </h2>

                  <p className="mt-5 text-gray-400 leading-8">

                    {project.desc}

                  </p>

                  <div className="mt-8 text-blue-300">

                    Hover To Flip →

                  </div>

                </div>


                {/* BACK */}

                <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-[#101826] [transform:rotateY(180deg)] [backface-visibility:hidden]">

                  <div className="relative h-[65%]">

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />

                  </div>

                  <div className="p-6">

                    <h3 className="font-bold text-xl">

                      Technologies

                    </h3>

                    <div className="flex flex-wrap gap-2 mt-4">

                      {project.tech.map((tech, index) => (

                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm"
                        >

                          {tech}

                        </span>

                      ))}

                    </div>

                  </div>

                </div>


              </div>

            </motion.div>

          ))}

        </div>
      </main>

    </PageWrapper>
  );
} 