"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroImg from "@/public/services/Ai-bg.webp";

export default function AIHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textHeaderRef = useRef<HTMLDivElement>(null);
  const containerOneButtonRef = useRef<HTMLDivElement>(null);
  const containerTwoRef = useRef<HTMLDivElement>(null);

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center px-4 py-16 md:py-24 font-sans selection:bg-purple-100"
    >
      {/* Container-One: Text Header Section */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div ref={textHeaderRef} className="space-y-4">
          <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-slate-800">
            AI & AUTOMATION
          </h3>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-slate-900 uppercase max-w-4xl mx-auto">
            INTELLIGENT SYSTEMS.
            <br />
            HUMAN DECISIONS.
          </h1>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Schoq designs AI-assisted products and automated workflows that help
            teams understand complex information, prepare better decisions and
            move work forward - with people remaining in control.
          </p>
        </div>

        {/* CTA Button */}
        <div ref={containerOneButtonRef} className="pt-2">
          <Link
            href="#"
            className="inline-block px-7 py-3.5 text-sm sm:text-base font-medium text-white rounded-md bg-linear-to-r from-[#5063ed] via-[#3b82f6] to-[#10b981] shadow-sm hover:shadow-md hover:opacity-95 transition-all duration-200 cursor-pointer"
          >
            Discuss an AI Opportunity
          </Link>
        </div>
      </div>

      {/* Container-Two: Process Illustration Section */}
      <div
        ref={containerTwoRef}
        className="w-full max-w-5xl mx-auto mt-12 md:mt-16 relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl"
      >
        {/* Background Image Container */}
        <div className="relative w-full aspect-video md:aspect-[21/9] min-h-[360px] ">
          <Image
            src={HeroImg}
            alt="AI & Automation Workflow"
            fill
            priority
            className="object-cover opacity-80 filter "
          />
        </div>
      </div>
    </main>
  );
}
