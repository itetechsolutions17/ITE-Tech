import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore professional IT services by ITE Tech Solutions: Website Development, Custom Software, Mobile Apps, AI/ML Solutions, Cloud Architecture, DevOps, and Enterprise ERP/CRM Systems.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our IT & Software Services | ITE Tech Solutions",
    description:
      "Modern website development, enterprise software, mobile applications, AI solutions, and cloud architecture built to scale.",
    url: "https://itetechsolutions.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}