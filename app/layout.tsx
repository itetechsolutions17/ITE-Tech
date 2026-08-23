import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://itetechsolutions.com"),

  title: {
    default: "ITE Tech Solutions | Digital Solutions & Software Development",
    template: "%s | ITE Tech Solutions",
  },

  description:
    "ITE Tech Solutions builds modern websites, custom software, mobile applications, AI solutions, cloud systems and cybersecurity solutions.",

  keywords: [
    "ITE Tech Solutions",
    "Digital Solutions",
    "Website Development Pune",
    "Software Development Pune",
    "Mobile App Development Pune",
    "SEO Services",
    "Online Ordering System Development",
    "AI Solutions",
    "Cloud Solutions",
    "Cybersecurity Services",
    "Software Maintanance and Support",
    "IT Consulting Pune",
  ],

  openGraph: {
    title: "ITE Tech Solutions",
    description:
      "Building modern websites, software, mobile applications and digital solutions for businesses and organizations.",
    url: "https://itetechsolutions.com",
    siteName: "ITE Tech Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/projects/logo.ico",
        width: 1200,
        height: 630,
        alt: "ITE Tech Solutions Logo",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/projects/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-gray-900 transition-colors duration-500 dark:bg-[#0b1120] dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Navbar />

          <main className="pt-24">
            {children}

          </main>

          <Footer />

          <WhatsAppButton />

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
            }}
          />

        </ThemeProvider>
      </body>
    </html>
  );
}