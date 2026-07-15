"use client";

import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-auto mx-auto mt-4 shadow rounded bg-[#FFFFFF66] border-b border-gray-200 px-6 py-3 md:px-12 lg:px-10">
      <div className="max-w-7xl mx-auto flex gap-10 items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-tight bg-linear-to-r from-[#4A4CE6] via-[#34A1B4] to-[#4BE191] bg-clip-text text-transparent">
          SCHOQ
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex items-center space-x-5 text-base font-medium text-gray-500">
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
        <span className="text-gray-300">|</span>

        {/* Right Section */}
        <div className="flex items-center space-x-5">
          {/* Language Toggle */}
          <div className="hidden sm:flex items-center space-x-1 text-sm font-medium text-gray-600 shadow-[inset_0_1px_8px_rgba(0,0,0,0.15)] px-3  py-1 rounded">
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
            className="hidden md:inline-block bg-linear-to-r from-[#4A4CE6] via-[#34A1B4] to-[#4BE191] text-white text-sm px-10 py-3 rounded font-bold hover:bg-gray-800 transition-colors"
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
