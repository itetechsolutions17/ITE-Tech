"use client";

import { motion } from "framer-motion";
import PageWrapper from "../../components/PageWrapper";
import { useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import {
  MapPinned,
  PhoneCall,
  Mail,
  ShieldCheck,
  Clock3,
  BriefcaseBusiness,
  Headset,
  Loader2,
} from "lucide-react";
import toast from "react-hot-toast";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    if (formData.name.trim().length < 3) {
      toast.error("Name must be at least 3 characters long.");
      return;
    }
    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      toast.error("Name should contain only letters.");
      return;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxDfLSd-u7SM2yEv9LXRZ0ANXdcNQo-Crzty9xdEE9a5nBiaVtX4T0M9lIYv-0EEw9j/exec",
        {
          method: "POST",
          body: new URLSearchParams({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
          }),
        }
      );

      if (res && !res.ok) {
        throw new Error(`Request failed with status: ${res.status}`);
      }
      toast.success("Your inquiry has been submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <section className="relative min-h-screen overflow-hidden px-6 md:px-16 py-24 text-gray-900 dark:text-white transition-colors duration-500">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

        <div className="relative max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 dark:from-white dark:via-blue-200 dark:to-cyan-400 bg-clip-text text-transparent">
              Let&apos;s Build Something Amazing Together
            </h1>

            <p className="mt-8 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-xl leading-10">
              Whether you&apos;re planning a website, mobile application, enterprise software, AI solution, cloud infrastructure, or cybersecurity services, our experts are ready to help bring your vision to life.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="lg:col-span-2 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 text-sm font-medium mb-2">
              Trusted by Startups • Businesses • Educational Institutions
            </div>

            <div className="lg:col-start-1">
              {/* FORM */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 backdrop-blur-xl p-8 md:p-10 transition-all duration-300"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />

                <div className="relative">
                  <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">
                    Request a Free Consultation
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Fill in your details and our team will get back to you within 24 business hours.
                  </p>

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
                      className="w-full rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-5 py-4 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-5 py-4 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    />

                    <input
                      type="tel"
                      placeholder="Phone Number (10 Digits)"
                      required
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        if (value.length <= 10) {
                          setFormData({ ...formData, phone: value });
                        }
                      }}
                      className="w-full rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-5 py-4 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    />

                    <select
                      required
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          service: e.target.value,
                        })
                      }
                      className="w-full rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-5 py-4 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    >
                      <option value="" disabled className="text-gray-500 dark:text-gray-300">
                        Select a Service
                      </option>
                      <option className="text-gray-900 dark:text-white">Website Development</option>
                      <option className="text-gray-900 dark:text-white">Software Development</option>
                      <option className="text-gray-900 dark:text-white">Mobile App Development</option>
                      <option className="text-gray-900 dark:text-white">Enterprise Solutions</option>
                      <option className="text-gray-900 dark:text-white">iOS Application Development</option>
                      <option className="text-gray-900 dark:text-white">Cloud Solutions</option>
                      <option className="text-gray-900 dark:text-white">Cybersecurity</option>
                      <option className="text-gray-900 dark:text-white">AI Solutions</option>
                      <option className="text-gray-900 dark:text-white">IT Consulting</option>
                      <option className="text-gray-900 dark:text-white">Internship</option>
                      <option className="text-gray-900 dark:text-white">Final Year Project</option>
                      <option className="text-gray-900 dark:text-white">Other</option>
                    </select>

                    <textarea
                      rows={6}
                      placeholder="Tell us about your project..."
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-5 py-4 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    />

                    <button
                      type="submit"
                      className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 text-lg font-semibold text-white hover:scale-[1.02] transition duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="animate-spin" size={18} />
                          Sending...
                        </span>
                      ) : (
                        "Request Consultation"
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>

            {/* INFO */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              {/* Info Card */}
              <div className="rounded-3xl border bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-xl p-8 md:p-10">
                <h3 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-8">
                  Contact Information
                </h3>

                <div className="space-y-5">
                  {/* Email */}
                  <div className="rounded-2xl border bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-lg p-5 hover:border-cyan-400/30 transition">
                    <p className="text-cyan-500 dark:text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href="mailto:itetechsolutions17@gmail.com"
                      className="mt-2 block text-gray-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition break-all"
                    >
                      itetechsolutions17@gmail.com
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="rounded-2xl border bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-lg p-5 hover:border-cyan-400/30 transition">
                    <p className="text-cyan-500 dark:text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                      Phone
                    </p>
                    <a
                      href="tel:+919607522007"
                      className="mt-2 block text-gray-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition"
                    >
                      +91 96075 22007
                    </a>
                  </div>

                  {/* Office */}
                  <div className="rounded-2xl border bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-lg p-5 hover:border-cyan-400/30 transition">
                    <p className="text-cyan-500 dark:text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                      Office Address
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 leading-7">
                      ITE Tech Solutions
                      <br />
                      Harikrishna Complex, First Floor
                      <br />
                      Main Road, Samarth Nagar,
                      <br />
                      New Sangavi,
                      <br />
                      Pimpri-Chinchwad,
                      <br />
                      Maharashtra – 411027
                    </p>
                  </div>
                </div>
              </div>

              {/* MAP */}
              <div className="overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-4">
                <iframe
                  title="ITE Tech Solutions Office Location"
                  src="https://www.google.com/maps?q=ITE%20Tech%20Solutions,%20Harikrishna%20Complex,%20Main%20Road,%20Samarth%20Nagar,%20New%20Sangavi,%20Pimpri-Chinchwad,%20Maharashtra%20411027&output=embed"
                  width="100%"
                  height="300"
                  className="rounded-2xl border-0"
                  loading="lazy"
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                  <a
                    href="https://maps.google.com/?q=ITE+Tech+Solutions+Harikrishna+Complex+New+Sangavi+Pune"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-white font-semibold hover:scale-105 transition duration-300 shadow-md text-sm"
                  >
                    <MapPinned size={18} />
                    Directions
                  </a>

                  <a
                    href="tel:+919607522007"
                    className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 py-3 text-gray-900 dark:text-white font-semibold hover:border-cyan-400/30 hover:scale-105 transition-all duration-300 text-sm"
                  >
                    <PhoneCall size={18} />
                    Call Now
                  </a>

                  <a
                    href="mailto:itetechsolutions17@gmail.com"
                    className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 py-3 text-gray-900 dark:text-white font-semibold hover:border-cyan-400/30 hover:scale-105 transition-all duration-300 text-sm"
                  >
                    <Mail size={18} />
                    Email Us
                  </a>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 backdrop-blur-xl p-8">
                <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-6 text-center">
                  Why Contact ITE Tech Solutions?
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 hover:border-cyan-400/30 transition duration-300">
                    <ShieldCheck size={24} className="text-cyan-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        Free Consultation
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mt-1 leading-5">
                        Discuss your project requirements with our experts before getting started.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 hover:border-cyan-400/30 transition duration-300">
                    <Clock3 size={24} className="text-cyan-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        Quick Response
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mt-1 leading-5">
                        We aim to respond to all inquiries within 24 business hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 hover:border-cyan-400/30 transition duration-300">
                    <BriefcaseBusiness size={24} className="text-cyan-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        Business-Focused
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mt-1 leading-5">
                        Solutions designed to support your business goals and growth.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 hover:border-cyan-400/30 transition duration-300">
                    <Headset size={24} className="text-cyan-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        Dedicated Support
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mt-1 leading-5">
                        From planning to deployment, our team supports every stage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 justify-center">
                <a
                  href="https://www.linkedin.com/company/ite-tech-solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#0A66C2] transition duration-300 hover:scale-110"
                >
                  <FaLinkedin size={28} />
                </a>

                <a
                  href="https://www.instagram.com/itetech_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition duration-300 hover:scale-110"
                >
                  <FaInstagram size={28} />
                </a>

                <a
                  href="https://www.github.com/itetechsolutions17"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300 hover:scale-110"
                >
                  <FaGithub size={28} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
