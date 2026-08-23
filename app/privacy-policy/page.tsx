import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how ITE Tech Solutions collects, uses, and safeguards your personal information when using our website and services.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | ITE Tech Solutions",
    description:
      "Learn how ITE Tech Solutions collects, uses, and safeguards your personal information.",
    url: "https://itetechsolutions.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0b1120] text-gray-700 dark:text-gray-300 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent mb-6">
          Privacy Policy
        </h1>

        <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-500 text-sm font-medium mb-6">
          Data Protection & Privacy
        </div>

        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Last Updated: June 2026
        </p>

        <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 backdrop-blur-xl p-8 md:p-10">
          <section className="space-y-8">
            <p className="leading-8 text-gray-600 dark:text-gray-300">
              At ITE Tech Solutions, we are committed to protecting your
              privacy and ensuring the security of your personal information.
              This Privacy Policy explains how we collect, use, and protect
              information obtained through our website.
            </p>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                1. Information We Collect
              </h2>
              <p className="leading-8 text-gray-600 dark:text-gray-300">
                We may collect the following information when you interact
                with our website:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-3 text-gray-600 dark:text-gray-300 leading-8">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Company Information</li>
                <li>Project Requirements</li>
                <li>Information submitted through Contact Forms</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                2. How We Use Your Information
              </h2>
              <p className="leading-8 text-gray-600 dark:text-gray-300">
                The information collected may be used to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-3 text-gray-600 dark:text-gray-300 leading-8">
                <li>Respond to inquiries and service requests</li>
                <li>Provide technical support</li>
                <li>Deliver requested services</li>
                <li>Improve website performance and user experience</li>
                <li>Communicate project updates and important information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                3. Data Security
              </h2>
              <p className="leading-8 text-gray-600 dark:text-gray-300">
                We implement appropriate technical and organizational
                security measures to protect your personal information
                against unauthorized access, disclosure, alteration,
                or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                4. Cookies
              </h2>
              <p className="leading-8 text-gray-600 dark:text-gray-300">
                Our website may use cookies and similar technologies to
                enhance user experience, analyze website traffic, and improve
                website functionality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                5. Third-Party Services
              </h2>
              <p className="leading-8 text-gray-600 dark:text-gray-300">
                We may use third-party services such as hosting providers,
                analytics platforms, and communication tools. These services
                may collect information according to their own privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                6. Information Sharing
              </h2>
              <p className="leading-8 text-gray-600 dark:text-gray-300">
                ITE Tech Solutions does not sell, rent, or trade your
                personal information to third parties except where required
                by applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                7. External Links
              </h2>
              <p className="leading-8 text-gray-600 dark:text-gray-300">
                Our website may contain links to third-party websites.
                We are not responsible for the privacy practices or content
                of external websites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                8. Changes to This Policy
              </h2>
              <p className="leading-8 text-gray-600 dark:text-gray-300">
                We reserve the right to update this Privacy Policy at any
                time. Any changes will be posted on this page with the
                updated revision date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                9. Contact Us
              </h2>
              <div className="mt-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6">
                <h3 className="text-gray-900 dark:text-white font-semibold">
                  ITE Tech Solutions
                </h3>

                <p className="mt-2 text-gray-600 dark:text-gray-300 leading-7">
                  Harikrishna Complex, First Floor
                  <br />
                  Main Road, Samarth Nagar
                  <br />
                  New Sangavi
                  <br />
                  Pimpri-Chinchwad
                  <br />
                  Maharashtra – 411027
                </p>

                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  <a
                    href="mailto:itetechsolutions17@gmail.com"
                    className="text-cyan-500 hover:underline break-all"
                  >
                    itetechsolutions17@gmail.com
                  </a>
                </p>

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  <a
                    href="tel:+919607522007"
                    className="text-cyan-500 hover:underline"
                  >
                    +91 96075-22007
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

