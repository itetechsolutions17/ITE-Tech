"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Brain,
  Clock3,
  BadgeCheck,
  Users,
  Headset,
} from "lucide-react";

const features = [
  {
    title: "Latest Technologies",
    description:
      "Projects based on AI, Machine Learning, Cloud Computing, IoT and other modern technologies.",
    icon: Brain,
  },
  {
    title: "Quality Documentation",
    description:
      "Professional reports, SRS, UML diagrams, synopsis and presentation materials.",
    icon: BadgeCheck,
  },
  {
    title: "Experienced Mentors",
    description:
      "Learn from experienced developers with practical implementation guidance.",
    icon: Users,
  },
  {
    title: "On-Time Delivery",
    description:
      "Structured planning and timely project completion without compromising quality.",
    icon: Clock3,
  },
  {
    title: "Reliable Technical Support",
    description:
      "Online assistance through Google Meet, Zoom, AnyDesk and WhatsApp.",
    icon: Headset,
  },
  {
    title: "Professional Approach",
    description:
      "Industry-oriented implementation with focus on learning and academic excellence.",
    icon: ShieldCheck,
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-24 px-6 md:px-16">

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >

        <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-500 text-sm font-medium">

          Why Choose Us

        </span>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold">

          Why Students Choose
          <br />
          ITE Tech Solutions

        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">

          We combine technical expertise, industry experience and
          academic guidance to help students successfully complete
          innovative engineering projects.

        </p>

      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 max-w-7xl mx-auto">

        {features.map((feature, index) => {

          const Icon = feature.icon;

          return (

            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-xl p-8 shadow-lg transition-all duration-300 hover:border-cyan-500/40"
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white">

                <Icon size={30} />

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                {feature.title}

              </h3>

              <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8">

                {feature.description}

              </p>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}