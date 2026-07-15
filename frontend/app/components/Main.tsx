import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Main: React.FC = () => {
  return (
    <main className="min-h-screen bg-white px-6 py-12 md:px-12 lg:px-20 flex flex-col justify-between">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center pt-8 md:pt-0">
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-gray-900 leading-[1.05]">
          STOP TALKING.
          <br />
          START BUILDING.
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
          We combine Swiss precision with deep technical expertise to
          <br className="hidden sm:block" />
          architect, design, and engineer world-class software solutions for
          <br className="hidden sm:block" />
          ambitious leaders.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <Link
            href="#"
            className="inline-block bg-gray-900 text-white text-base sm:text-lg font-medium px-8 py-3.5 rounded-full hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
          >
            Let&apos;s Discuss Your Project
          </Link>
        </div>

        {/* Feature Tags */}
        <div className="mt-12 flex flex-wrap gap-3 sm:gap-4">
          {[
            "Strategy",
            "Code",
            "Human Experience",
            "Optimization",
            "Quality",
          ].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center pb-8 md:pb-12">
        <div className="flex flex-col items-center gap-2 text-gray-400 text-xs sm:text-sm font-medium tracking-widest uppercase animate-bounce">
          <span>SCROLL TO BUILD</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </main>
  );
};

export default Main;
