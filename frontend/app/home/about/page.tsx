// app/about/page.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

const AboutPage = () => {
  const container = useRef(null);

  // Values data
  const values = [
    {
      title: "Human Thinking",
      description:
        "We put people at the center of every decision, ensuring technology serves human needs first.",
    },
    {
      title: "Product Thinking",
      description:
        "Every line of code is written with the end product in mind, bridging vision and execution.",
    },
    {
      title: "Engineering Excellence",
      description:
        "Swiss precision meets modern engineering to deliver robust, scalable solutions.",
    },
  ];

  // Team/approach cards
  const approachCards = [
    {
      icon: "🎯",
      title: "Human-Centred Design",
      description:
        "We design with empathy, creating experiences that feel natural and intuitive.",
    },
    {
      icon: "⚡",
      title: "Software Engineering",
      description:
        "Clean, maintainable code built with modern frameworks and best practices.",
    },
    {
      icon: "🧩",
      title: "Product Thinking",
      description:
        "We think beyond features to solve real business problems and create value.",
    },
  ];

  return (
    <main
      ref={container}
      className="min-h-screen bg-white px-6 py-12 md:px-12 lg:px-20 flex flex-col"
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
        {/* About Header */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <span className="text-sm font-medium tracking-widest text-[#4A4CE6] uppercase">
            About Schoq
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mt-4">
            Human Thinking
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Main Description */}
          <div className="space-y-6">
            <div className="bg-linear-to-r from-[#4A4CE6] via-[#34A1B4] to-[#4BE191] p-8 md:p-10 rounded-2xl">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-relaxed">
                Technology should feel clear—even when the challenge is complex.
              </p>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Schoq brings product thinking, human-centred design and software
              engineering together to create digital systems built around real
              business needs.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-[#4A4CE6] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3a3cc4] transition-colors"
              >
                Let&apos;s Talk
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Our Work
              </Link>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="border-l-4 border-[#4A4CE6] pl-6 py-2"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mt-1">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Approach Section */}
        <div className="mt-16 md:mt-20 lg:mt-24 border-t border-gray-200 pt-12 md:pt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Engineered Delivery
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Our approach combines the best of design thinking and software
              engineering to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approachCards.map((card, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 md:p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 bg-linear-to-r from-[#4A4CE6] via-[#34A1B4] to-[#4BE191] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-6">
            Let&apos;s combine human thinking with engineering excellence to
            create your next digital product.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-white text-[#4A4CE6] px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center items-center pt-12 pb-4 mt-8">
          <div className="flex flex-col items-center gap-2 text-gray-400 text-xs font-medium tracking-widest uppercase animate-bounce">
            <span>Explore More</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
