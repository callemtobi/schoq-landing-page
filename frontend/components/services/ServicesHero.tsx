"use client";

import {
  CurvedLine,
  DashedWireframeGrouped,
  DoubleArrowIcons,
  MobileWireframeGreen,
  MobileWireframePurple,
} from "@/components/icons/Icons";

export default function ServicesHero() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center px-4 py-16 md:py-24 font-sans selection:bg-purple-100">
      {/* Text Header Section */}
      <div className="Container-One max-w-4xl mx-auto text-center space-y-3">
        <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-slate-800">
          Mobile App Development
        </h3>

        <h1 className="text-3xl sm:text-5xl md:text-5xl font-black tracking-tight leading-[1.08] text-slate-900 uppercase max-w-8xl mx-auto">
          Mobile products people choose to keep using.
        </h1>

        <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
          Schoq designs and develops intuitive, scalable mobile applications -
          from early product strategy and UX to engineering, launch and
          continuous improvement.
        </p>

        {/* CTA Button */}
        <div className="pt-2">
          <button className="px-6 py-3.5 text-sm sm:text-base font-medium text-white rounded-md bg-linear-to-r from-[#5063ed] via-[#488beb] to-[#45d197] shadow-sm hover:shadow-md hover:opacity-95 transition-all duration-200 cursor-pointer">
            Start Building a Mobile App
          </button>
        </div>
      </div>

      {/* Process Illustration Section */}
      <div className="Container-Two w-full max-w-6xl mx-auto mt-16 md:mt-16 overflow-x-auto pb-4 scrollbar-none">
        <div className="min-w-212.5 relative flex items-center justify-center gap-6 py-8 px-4">
          {/* 1. Wireframes SVG (Left Side) */}
          <div className="Dashbed-Wireframe relative z-10 shrink-0">
            <DashedWireframeGrouped />
          </div>

          {/* 2. Curved Background Line SVG */}
          <div className="Curved-Line absolute bottom-25 inset-0 z-0 flex items-center justify-center pointer-events-none">
            <CurvedLine />
          </div>

          {/* 3. Arrow SVG (Middle) */}
          <div className="Double-Arrows relative z-10 shrink-0 px-1">
            <DoubleArrowIcons />
          </div>

          {/* 4. Mockups Side-by-Side (Right Side) */}
          <div className="Wireframe-Group relative z-10 shrink-0 flex items-center gap-3">
            <MobileWireframePurple />
            <MobileWireframeGreen />
            <MobileWireframePurple />
            <MobileWireframeGreen />
          </div>
        </div>
      </div>
    </main>
  );
}
