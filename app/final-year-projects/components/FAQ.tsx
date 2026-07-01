"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you provide IEEE based projects?",
    answer:
      "Yes. We provide guidance for IEEE as well as innovative non-IEEE engineering projects across multiple domains.",
  },
  {
    question: "Which engineering branches do you support?",
    answer:
      "We support Computer Engineering, Information Technology, Electronics & Computer Engineering, Mechanical Engineering and other technology-based disciplines.",
  },
  {
    question: "Will I receive the complete source code?",
    answer:
      "Yes. Complete source code is provided along with implementation guidance and project explanation.",
  },
  {
    question: "Do you provide project documentation?",
    answer:
      "Yes. We provide Synopsis, SRS, UML Diagrams, Stage-I Report, Stage-II Report, PPT and other academic documents as required.",
  },
  {
    question: "Is online support available?",
    answer:
      "Yes. Technical guidance is provided through Google Meet, Zoom, AnyDesk and WhatsApp whenever required.",
  },
  {
    question: "Can the project be customized?",
    answer:
      "Yes. Features, GUI and functionality can be customized according to your academic requirements.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="relative py-24 px-6 md:px-16 bg-gray-100 dark:bg-[#0d1728] transition-colors duration-500">

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >

        <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-500 text-sm font-medium">

          Frequently Asked Questions

        </span>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold">

          Have Questions?

        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">

          Find answers to the most commonly asked questions
          about our Final Year Engineering Project guidance.

        </p>

      </motion.div>

      <div className="max-w-4xl mx-auto mt-20 space-y-5">

        {faqs.map((faq, index) => {

          const isOpen = active === index;

          return (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-xl overflow-hidden shadow-lg"
            >

              <button
                onClick={() =>
                  setActive(isOpen ? null : index)
                }
                className="w-full flex items-center justify-between p-7 text-left"
              >

                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">

                  {faq.question}

                </h3>

                <motion.div
                  animate={{
                    rotate: isOpen ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >

                  <ChevronDown className="text-cyan-500" />

                </motion.div>

              </button>

              <AnimatePresence>

                {isOpen && (

                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >

                    <div className="px-7 pb-7">

                      <p className="leading-8 text-gray-600 dark:text-gray-300">

                        {faq.answer}

                      </p>

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}