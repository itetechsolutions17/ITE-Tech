import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore projects and custom software solutions delivered by ITE Tech Solutions, including Edurefer Platform, ERP systems, CRM, dashboards, and ecommerce applications.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio & Case Studies | ITE Tech Solutions",
    description:
      "Explore projects and custom software solutions delivered by ITE Tech Solutions across diverse industry domains.",
    url: "https://itetechsolutions.com/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}