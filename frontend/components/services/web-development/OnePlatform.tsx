"use client";

import Image from "next/image";
import LargeScreen from "@/public/services/Large-screen.png";
import LaptopScreen from "@/public/services/Laptop.png";
import TabletScreen from "@/public/services/Tablet.png";

export default function OnePlatform() {
  return (
    <section className="w-full min-screen pt-16 sm:pt-20 md:pt-28 pb-0 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0f9ff] via-[#eef2ff] to-[#ecfdf5] flex flex-col justify-between font-sans overflow-hidden">
      {/* Section Header */}
      <div className="max-w-4xl w-full mx-auto text-center space-y-3 pt-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
          One Platform. Every Screen.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal">
          One codebase, infinite viewports.
        </p>
      </div>

      {/* Clean Showcase Grid - Touches the bottom edge */}
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-end justify-center gap-6 lg:gap-8 pt-10">
        {/* Desktop Preview */}
        <div className="w-full md:w-[48%] flex items-end">
          <Image
            src={LargeScreen}
            alt="Desktop platform viewport"
            className="w-full h-auto object-contain drop-shadow-sm block align-bottom"
            priority
          />
        </div>

        {/* Tablet / Dual Laptop Preview */}
        <div className="w-full md:w-[30%] flex items-end">
          <Image
            src={LaptopScreen}
            alt="Laptop viewports"
            className="w-full h-auto object-contain drop-shadow-sm block align-bottom"
          />
        </div>

        {/* Mobile / Tablet Preview */}
        <div className="w-full md:w-[22%] flex items-end">
          <Image
            src={TabletScreen}
            alt="Mobile viewport"
            className="w-full h-auto object-contain drop-shadow-sm block align-bottom"
          />
        </div>
      </div>
    </section>
  );
}
