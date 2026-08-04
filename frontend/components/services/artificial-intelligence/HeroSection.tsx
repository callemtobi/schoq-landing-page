"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroImg from "@/public/services/Ai-bg.png";

export default function SectionMain() {
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
        <div className="relative w-full aspect-video md:aspect-[21/9] min-h-[360px] bg-slate-900">
          <Image
            src={HeroImg}
            alt="AI & Automation Workflow"
            fill
            priority
            className="object-cover opacity-80 filter grayscale"
          />

          {/* Workflow Badge Overlay */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 w-auto">
            <div className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-xl shadow-md border border-slate-100 flex items-center justify-center space-x-2 text-xs md:text-sm font-semibold tracking-wider text-slate-700 uppercase">
              <span>INPUT</span>
              <span className="text-slate-400">→</span>
              <span>CONTEXT</span>
              <span className="text-slate-400">→</span>
              <span className="font-bold text-slate-900">DECISION</span>
              <span className="text-slate-400">→</span>
              <span>ACTION</span>
            </div>
          </div>

          {/* Review Required Interactive Alert Card Overlay */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-[90%] max-w-lg">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-slate-100/80 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between text-xs uppercase tracking-wider">
                <div className="flex items-center space-x-2 text-red-600 font-bold">
                  <span className="w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px]">
                    !
                  </span>
                  <span>REVIEW REQUIRED</span>
                </div>
                <span className="text-slate-400 font-medium">
                  STAGE 04: REVIEW
                </span>
              </div>

              {/* Body Text */}
              <p className="text-slate-800 text-xs sm:text-sm font-medium leading-normal">
                Invoice #4492 processing results outside expected variance (0.89
                confidence).
              </p>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-2 pt-1 text-xs font-semibold uppercase">
                <button className="py-2.5 px-3 rounded-lg bg-emerald-400 hover:bg-emerald-500 text-slate-900 transition-colors">
                  APPROVE
                </button>
                <button className="py-2.5 px-3 rounded-lg bg-slate-200/80 hover:bg-slate-300/80 text-slate-800 transition-colors">
                  EDIT
                </button>
                <button className="py-2.5 px-3 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 transition-colors">
                  RETURN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
