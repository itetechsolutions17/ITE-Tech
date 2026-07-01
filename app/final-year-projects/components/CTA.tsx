"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 px-6 md:px-16">

      {/* Background Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-7xl mx-auto rounded-[36px] overflow-hidden border border-cyan-500/20 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 shadow-2xl"
      >

        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative px-8 md:px-16 py-16 text-center">

          <span className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm">

            Start Your Final Year Project Today

          </span>

          <h2 className="mt-8 text-4xl md:text-5xl font-bold text-white leading-tight">

            Ready to Build an
            <br />

            Innovative Engineering Project?

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-blue-100 text-lg leading-9">

            Get complete academic guidance, project development,
            documentation, source code explanation and technical
            support from the experts at ITE Tech Solutions.

          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 hover:scale-105 transition"
            >
              Contact Our Team

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </Link>

            <a
              href="https://wa.me/919607522007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-white font-semibold hover:bg-white/10 transition"
            >
              <MessageCircle size={18} />

              WhatsApp Now

            </a>

            <a
              href="tel:+919607522007"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-white font-semibold hover:bg-white/10 transition"
            >
              <Phone size={18} />

              Call Now

            </a>

          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90 text-sm">

            <span>✓ IEEE & Non-IEEE Projects</span>

            <span>✓ Expert Technical Guidance</span>

            <span>✓ Complete Documentation</span>

            <span>✓ Online & Offline Support</span>

          </div>

        </div>

      </motion.div>

    </section>
  );
}