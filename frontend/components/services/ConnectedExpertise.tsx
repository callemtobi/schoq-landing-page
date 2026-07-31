"use client";

import { SingleArrowIcon } from "@/components/icons/Icons";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// TypeScript interface for Expertise Cards
interface ExpertiseCard {
  id: string;
  firstLine: string;
  secondLine: string;
}

gsap.registerPlugin(ScrollTrigger);

export default function ConnectedExpertise() {
  const cardContainer = useRef(null);
  const expertiseItems: ExpertiseCard[] = [
    {
      id: "custom-software",
      firstLine: "CUSTOM",
      secondLine: "SOFTWARE",
    },
    {
      id: "product-design",
      firstLine: "PRODUCT",
      secondLine: "DESIGN",
    },
    {
      id: "ai-solutions",
      firstLine: "AI",
      secondLine: "SOLUTIONS",
    },
    {
      id: "cloud-engineering",
      firstLine: "CLOUD",
      secondLine: "ENGINEERING",
    },
  ];

  useGSAP(() => {
    gsap.from(cardContainer.current, {
      y: 150,
      opacity: 0,
      duration: 0.8,

      scrollTrigger: {
        trigger: cardContainer.current,
        start: "top 30%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center font-sans">
      <div className="max-w-6xl w-full mx-auto space-y-12 md:space-y-16 text-center">
        {/* Header Section */}
        <div className="bg-red-400 space-y-4 max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-slate-800">
            Connected Expertise
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.08] uppercase max-w-3xl mx-auto">
            Everything your mobile product may need beyond the app.
          </h2>
        </div>

        {/* Pill-Shaped Cards Grid */}
        <div
          ref={cardContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-center justify-center max-w-5xl mx-auto"
        >
          {expertiseItems.map((item) => (
            <div key={item.id} className="flex justify-center items-center">
              {/* Pill Container with Subtle Gradient Border */}
              <div className="group relative w-full max-w-[200px] aspect-[4/5] rounded-[90px] p-[1.5px] bg-gradient-to-br from-indigo-200 via-sky-200 to-emerald-200 hover:from-indigo-300 hover:via-sky-300 hover:to-emerald-300 transition-all duration-300 shadow-xs cursor-pointer">
                {/* Inner Content */}
                <div className="w-full h-full bg-white/60 backdrop-blur-xs rounded-[88.5px] p-6 flex flex-col items-center justify-center space-y-4 hover:bg-white/90 transition-all duration-300">
                  {/* Single Arrow Icon */}
                  <div className="text-slate-700 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <SingleArrowIcon />
                  </div>

                  {/* Gradient Title Text */}
                  <div className="text-center font-bold text-sm sm:text-base leading-tight uppercase tracking-tight">
                    <span className="bg-gradient-to-r from-[#5063ed] via-[#3b82f6] to-[#10b981] bg-clip-text text-transparent block">
                      {item.firstLine}
                    </span>
                    <span className="bg-gradient-to-r from-[#5063ed] via-[#3b82f6] to-[#10b981] bg-clip-text text-transparent block">
                      {item.secondLine}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
