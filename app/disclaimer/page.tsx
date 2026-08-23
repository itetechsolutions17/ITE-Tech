import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Review the legal disclaimer and terms of service information for ITE Tech Solutions.",
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: "Disclaimer | ITE Tech Solutions",
    description:
      "Review the legal disclaimer and terms of service information for ITE Tech Solutions.",
    url: "https://itetechsolutions.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0b1120] text-gray-700 dark:text-gray-300 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent mb-6">
          Disclaimer
        </h1>

        <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-500 text-sm font-medium mb-6">
          Legal Notice
        </div>

        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Last Updated: June 2026
        </p>

        <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 backdrop-blur-xl p-8 md:p-10">
          <section className="space-y-8">
            <p className="leading-8 text-gray-600 dark:text-gray-300">
              The information provided on this website is for general
              informational purposes only. While ITE Tech Solutions
              strives to keep the information accurate and up to date,
              we make no warranties or representations regarding the
              completeness, reliability, or accuracy of any information.
            </p>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Service Disclaimer
              </h2>
              <p className="leading-8 text-gray-600 dark:text-gray-300">
                All services provided by ITE Tech Solutions are delivered
                on a best-effort basis. Project timelines, performance,
                and outcomes may vary depending on client requirements,
                third-party services, and technical factors.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                External Links
              </h2>
              <p className="leading-8 text-gray-600 dark:text-gray-300">
                This website may contain links to third-party websites.
                We have no control over the content, policies, or
                practices of such websites and accept no responsibility
                for them.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Limitation of Liability
              </h2>
              <p className="leading-8 text-gray-600 dark:text-gray-300">
                ITE Tech Solutions shall not be liable for any direct,
                indirect, incidental, consequential, or special damages
                arising from the use of this website or reliance upon
                the information provided herein.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Changes to Disclaimer
              </h2>
              <p className="leading-8 text-gray-600 dark:text-gray-300">
                We reserve the right to modify this Disclaimer at any
                time without prior notice. Updates will be published
                on this page.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

