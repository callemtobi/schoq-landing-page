"use client";

import Image from "next/image";
import PhoneBG from "@/public/services/phone-bg.png";

export default function ProductDemonstration() {
  return (
    <section className="w-full min-h-screen py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0f9ff] via-[#eef2ff] to-[#ecfdf5] flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full mx-auto space-y-10 md:space-y-14 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
            Product Demonstration
          </h2>
        </div>

        {/* Image Frame Container */}
        <div className="w-full relative rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-slate-900 bg-slate-900 shadow-2xl overflow-hidden group">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">
            <Image
              src={PhoneBG}
              alt="Product Demonstration Mockup Showcase"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1152px"
              priority
              className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.01]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
