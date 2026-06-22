"use client";

import { motion } from "framer-motion";
import PageWrapper from "../../components/PageWrapper";
import Image from "next/image";

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

export default function About() {
  return (
    <PageWrapper>

      <section className="relative min-h-screen overflow-hidden px-6 md:px-16 py-24 text-white">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >

            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              About ITE Tech Solutions
            </h1>

            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-8">
              ITE Tech Solutions delivers high-quality software,
              scalable web applications and innovative digital
              solutions for startups, institutions and enterprises.
            </p>

          </motion.div>


          {/* STATS */}

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            {[
              {
                value: "25+",
                label: "Projects Delivered",
                color: "text-blue-400"
              },
              {
                value: "10+",
                label: "Technologies Used",
                color: "text-cyan-400"
              },
              {
                value: "100%",
                label: "Client Focused",
                color: "text-blue-300"
              }
            ].map((item, i) => (

              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  y: -8
                }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl text-center"
              >

                <h2 className={`text-5xl font-bold ${item.color}`}>
                  {item.value}
                </h2>

                <p className="mt-4 text-gray-400">
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
                  y: 50
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.2
                }}
                whileHover={{
                  scale: 1.03,
                  y: -10
                }}
                className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl"
              >

                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />

                <h3 className="relative text-2xl font-bold text-blue-400 mb-4">
                  {card.title}
                </h3>

                <p className="relative text-gray-400 leading-8">
                  {card.desc}
                </p>

              </motion.div>

            ))}

          </div>



          {/* Mission Vision */}

          <div className="grid lg:grid-cols-2 gap-8 mt-28">

            <motion.div
              whileHover={{
                scale: 1.03
              }}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl"
            >

              <h2 className="text-4xl font-bold text-blue-400 mb-6">
                Our Mission
              </h2>

              <p className="text-gray-400 leading-9">
                To empower startups, institutions and businesses
                through innovative technology solutions that
                improve productivity and accelerate growth.
              </p>

            </motion.div>



            <motion.div
              whileHover={{
                scale: 1.03
              }}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl"
            >

              <h2 className="text-4xl font-bold text-cyan-400 mb-6">
                Our Vision
              </h2>

              <p className="text-gray-400 leading-9">
                To become a leading technology company delivering
                intelligent and future-ready digital solutions.
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
              className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl"
            >

              <div className="grid lg:grid-cols-3 gap-10 items-center">

                {/* Founder Image */}
                <div className="flex justify-center">
                  <Image
                    src="/projects/founder.jpg"
                    alt="Pushkar Bhegade"
                    width={260}
                    height={260}
                    className="rounded-3xl object-cover border border-blue-500/30"
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

                  <p className="text-cyan-400 mt-2 text-lg">
                    Founder & Director
                  </p>

                  <p className="mt-6 text-gray-400 leading-9">
                    Pushkar Bhegade is the Founder & Director of ITE Tech Solutions,
                    a technology-driven company focused on delivering innovative
                    software solutions for businesses. With expertise in software
                    development, web technologies, cloud solutions, automation,
                    and cybersecurity, he is passionate about creating scalable
                    digital products that help organizations grow and succeed
                    in the modern digital landscape.
                  </p>

                  <p className="mt-4 text-gray-400 leading-9">
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
              className="mt-12">

              <div className="relative bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

                <blockquote className="text-center max-w-4xl mx-auto">

                  <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-200 italic">

                    "Technology is not just about building software —
                    it's about creating solutions that empower people,
                    accelerate growth, and transform ideas into reality..."

                  </p>

                  <footer className="mt-8">
                    <h4 className="text-xl font-semibold text-blue-400">
                      Pushkar Bhegade
                    </h4>

                    <p className="text-gray-500">
                      Founder & Director, ITE Tech Solutions
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
                "Dedicated Support"
              ].map((item, i) => (

                <motion.div
                  key={i}
                  whileHover={{
                    y: -10,
                    scale: 1.05
                  }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-xl"
                >

                  <div className="text-5xl mb-5">
                    ⭐
                  </div>

                  <h3 className="font-semibold text-lg">
                    {item}
                  </h3>

                  <p className="mt-3 text-gray-400 leading-7">
                    {item === "Live Industry Projects" && "Hands-on experience with real-world projects."}
                    {item === "Scalable Architecture" && "Building systems that grow with your business."}
                    {item === "Modern Technologies" && "Utilizing the latest tools and frameworks."}
                    {item === "Dedicated Support" && "Reliable assistance for all your technical needs."}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </PageWrapper>
  );
}