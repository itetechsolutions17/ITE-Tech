export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0b1120] text-gray-700 dark:text-gray-300 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent mb-6">
          Terms & Conditions
        </h1>
      </div>

      <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-500 text-sm font-medium mb-6">

        <p className="text-gray-500 dark:text-gray-400 mb-12">
          Last Updated: June 2026
        </p>

        <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 backdrop-blur-xl p-8 md:p-10">

          <section className="space-y-8">
            <p>
              Welcome to ITE Tech Solutions. By accessing and using this
              website, you agree to comply with and be bound by the following
              Terms & Conditions.
            </p>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                1. Acceptance of Terms
              </h2>

              <p className="leading-8 text-gray-600 dark:text-gray-300">
                By accessing this website, you acknowledge that you have read,
                understood, and agreed to these Terms & Conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                2. Services
              </h2>

              <p className="leading-8 text-gray-600 dark:text-gray-300">
                ITE Tech Solutions provides professional IT services including:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-3 text-gray-600 dark:text-gray-300 leading-8">
                <li>Website Development</li>
                <li>Software Development</li>
                <li>Automation Testing</li>
                <li>Cyber Security Services</li>
                <li>IT Consulting</li>
                <li>Technical Support</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                3. Intellectual Property
              </h2>

              <p className="leading-8 text-gray-600 dark:text-gray-300">
                All content, logos, designs, graphics, source code, and
                materials available on this website are the property of
                ITE Tech Solutions and are protected by applicable copyright
                and intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                4. User Responsibilities
              </h2>

              <p className="leading-8 text-gray-600 dark:text-gray-300">Users agree not to:</p>

              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Use the website for unlawful purposes.</li>
                <li>Attempt unauthorized access to systems or servers.</li>
                <li>Distribute malware or harmful software.</li>
                <li>Copy or reproduce website content without permission.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                5. Limitation of Liability
              </h2>

              <p className="leading-8 text-gray-600 dark:text-gray-300">
                ITE Tech Solutions shall not be held responsible for any direct,
                indirect, incidental, or consequential damages resulting from
                the use of this website or its services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                6. Third-Party Links
              </h2>

              <p className="leading-8 text-gray-600 dark:text-gray-300">
                This website may contain links to third-party websites.
                ITE Tech Solutions is not responsible for the content,
                policies, or practices of external websites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                7. Changes to Terms
              </h2>

              <p className="leading-8 text-gray-600 dark:text-gray-300">
                We reserve the right to modify these Terms & Conditions
                at any time without prior notice. Continued use of the
                website constitutes acceptance of updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                8. Governing Law
              </h2>

              <p className="leading-8 text-gray-600 dark:text-gray-300">
                These Terms & Conditions shall be governed and interpreted
                in accordance with the laws of India.
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

                <p className="mt-2 text-gray-600 dark:text-gray-300">
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

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  <a
                    href="mailto:itetechsolutions17@gmail.com"
                    className="text-cyan-500 hover:underline"
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
