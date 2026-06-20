import Link from "next/link";
import { Mail, Phone, MapPin }
  from "lucide-react";

export default function Footer() {
  return (<footer className="mt-20 bg-slate-950 border-t border-slate-800 text-slate-300">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            ITE Tech Solutions
          </h2>

          <p className="text-slate-400 leading-7">
            Transforming Ideas into Digital Solutions through
            Software Development, Web Applications, Automation
            Testing, Cybersecurity, and IT Consulting Services.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Services
          </h3>

          <div className="flex flex-col gap-3">
            <span>Website Development</span>
            <span>Software Development</span>
            <span>Automation Testing</span>
            <span>Cyber Security</span>
            <span>IT Consulting</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">
            <Link href="/about" className="hover:text-blue-400 transition">
              About Us
            </Link>

            <Link href="/services" className="hover:text-blue-400 transition">
              Services
            </Link>

            <Link href="/contact" className="hover:text-blue-400 transition">
              Contact Us
            </Link>

            <Link
              href="/privacy-policy"
              className="hover:text-blue-400 transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="hover:text-blue-400 transition"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/disclaimer"
              className="hover:text-blue-400 transition"
            >
              Disclaimer
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact
          </h3>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>itetechsolutions17@gmail.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+91 96075 22007</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} ITE Tech Solutions. All Rights Reserved.
      </p>

      <p className="text-sm text-slate-500">
        Designed & Developed by ITE Tech Solutions |
      </p>
    </div>
  </footer >

  );
}