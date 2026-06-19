"use client";

import { motion } from "framer-motion";
import PageWrapper from "../../components/PageWrapper";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (formData.name.trim().length < 3) {
      alert("Name must be at least 3 characters long.");
      return;
    }

    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      alert("Name should contain only letters.");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (formData.message.trim().length < 10) {
      alert("Message must be at least 10 characters long.");
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzaOshvH7Jx-cbR9S7zgPCsN6CMR1haFZdX4fXerr_pP8JB5z2A0BM6dQW8AhKcbtpc/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Message Sent Successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <PageWrapper>

      <section className="relative min-h-screen overflow-hidden px-6 md:px-16 py-24 text-white">

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

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Let’s Start a Conversation
            </h1>

            <p className="mt-8 text-gray-300 max-w-4xl mx-auto text-xl leading-10">
              Have a project in mind? Need internship collaboration?
              Get in touch with ITE Tech Solutions today.
            </p>

          </motion.div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10"
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />

              <div className="relative">

                <h2 className="text-3xl font-bold text-cyan-400 mb-8">
                  Send Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">

                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                      setFormData({ ...formData, name: value });
                    }}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      if (value.length <= 10) {
                        setFormData({ ...formData, phone: value });
                      }
                    }}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none"
                  />


                  <textarea
                    rows={6}
                    placeholder="Tell us about your project..."
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 text-lg font-semibold hover:scale-[1.02] transition duration-300"
                  >
                    Send Message
                  </button>

                </form>

              </div>

            </motion.div>

            {/* INFO */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >

              {/* Info Card */}
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">

                <h3 className="text-3xl font-bold text-cyan-400 mb-8">
                  Contact Information
                </h3>

                <div className="space-y-6 text-lg text-gray-300 leading-9">

                  <p>
                    <span className="text-white font-semibold">Email:</span><br />
                    iteinfosolutions@gmail.com
                  </p>

                  <p>
                    <span className="text-white font-semibold">Phone:</span><br />
                    +91-9607522003
                  </p>

                  <p>
                    <span className="text-white font-semibold">Location:</span><br />
                    ITE Tech Solutions, Harikrishna Complex,
                    Main Road, Samarth Nagar, New Sangavi,
                    Pimpri-Chinchwad, Maharashtra 411027
                  </p>

                </div>

              </div>

              {/* MAP */}
              <div className="overflow-hidden rounded-3xl border border-white/10">

                <iframe
                  src="https://www.google.com/maps?q=ITE%20Tech%20Solutions,%20Harikrishna%20Complex,%20Main%20Road,%20Samarth%20Nagar,%20New%20Sangavi,%20Pimpri-Chinchwad,%20Maharashtra%20411027&output=embed"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  loading="lazy"
                />

              </div>

              {/* Response Time */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center text-gray-300 text-lg">
                We typically respond within 24 hours.
              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 text-center py-8 text-gray-500 bg-[#050b16]">
        © 2026 Innovative Tech Engineers. All Rights Reserved.
      </footer>

    </PageWrapper>
  );
} 