import React from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-white px-6 py-12 md:px-12 lg:px-20 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">SCHOQ</h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-md">
              Schoq IT Solutions is a full-service digital company specializing
              in web and app development, UI/UX design, and AI-powered
              applications. We empower businesses through innovation and
              seamless user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                >
                  Imprint
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@schoq.com"
                  className="flex items-center gap-3 text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>info@schoq.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+4917622569816"
                  className="flex items-center gap-3 text-sm md:text-base text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>+49 176 22569816</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500 text-center">
            © 2025 Schoq IT Solutions. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
