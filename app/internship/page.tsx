import type { Metadata } from "next";
import InternshipClient from "./InternshipClient";

export const metadata: Metadata = {
  title: "Internship Programs",
  description:
    "Join industry-recognized software development internships at ITE Tech Solutions: Web Development, Python/Django, MERN Stack, Databases, Data Analytics, and AI/ML with live client projects and certification.",
  alternates: {
    canonical: "/internship",
  },
  openGraph: {
    title: "Software Engineering Internships | ITE Tech Solutions",
    description:
      "Bridge the gap between academics and software industry with hands-on live project training, mentorship, and certification.",
    url: "https://itetechsolutions.com/internship",
  },
};

export default function InternshipPage() {
  return <InternshipClient />;
}