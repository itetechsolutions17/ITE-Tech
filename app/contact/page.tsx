import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact ITE Tech Solutions for custom software development, website design, mobile apps, internship inquiries, or engineering project guidance. Book a free consultation today.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | ITE Tech Solutions",
    description:
      "Get in touch with ITE Tech Solutions to discuss your project requirements or book a free 30-minute strategy session.",
    url: "https://itetechsolutions.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}