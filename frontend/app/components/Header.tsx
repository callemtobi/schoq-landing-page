"use client";

import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-tight text-gray-900">
          SCHOQ
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex items-center space-x-10 text-base font-medium text-gray-700">
          <Link href="#" className="hover:text-gray-900 transition-colors">
            Services
          </Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">
            Projects
          </Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-5">
          {/* Language Toggle */}
          <div className="hidden sm:flex items-center space-x-1 text-sm font-medium text-gray-600">
            <button className="hover:text-gray-900 transition-colors">
              DE
            </button>
            <span className="text-gray-400">/</span>
            <button className="hover:text-gray-900 transition-colors">
              EN
            </button>
          </div>

          {/* Start a Project Button */}
          <Link
            href="#"
            className="hidden md:inline-block bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
          >
            Start a Project
          </Link>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
