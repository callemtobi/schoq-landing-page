"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const TAGS = [
  "Strategy",
  "Code",
  "Human Experience",
  "Optimization",
  "Quality",
];
const REVEAL_DURATION = 1.8; // Slightly faster for snapper modern user experience
const REVEAL_DELAY = 0.4; // Reduced start lag
const REVEAL_EASE = "power4.out"; // Custom luxury ease out curve for butter smoothness

const Main: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { duration: REVEAL_DURATION, ease: REVEAL_EASE },
          delay: REVEAL_DELAY,
        });

        // 1) Smooth gradient block reveal.
        tl.fromTo(
          ".main-container",
          { clipPath: "inset(0% 100% 0% 0%)", x: "30%" },
          { clipPath: "inset(0% 0% 0% 0%)", x: "0%", duration: 2 },
          0,
        );

        // 2) Tag column transitions into space smoothly
        tl.fromTo(
          ".main-tags",
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, ease: "power3.out" },
          0.3, // delay start slightly relative to the box expansion
        );

        // 3) Letters color styling and character shifts
        tl.fromTo(
          ".tag-rest",
          { opacity: 1 },
          {
            opacity: 0.35, // Keep a subtle trace of lowercase tags visible on dark screens
            stagger: 0.04,
            duration: 1.2,
          },
          0.4,
        );

        tl.to(
          ".tag-first",
          {
            stagger: 0.04,
            color: "#4A4CE6",
            duration: 1.2,
          },
          0.4,
        );

        return () => tl.kill();
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".main-container", {
          clipPath: "inset(0% 0% 0% 0%)",
          x: "0%",
        });
        gsap.set(".main-tags", { opacity: 1, x: 0 });
        gsap.set(".tag-rest", { opacity: 0.35 });
      });

      return () => mm.revert();
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className="min-h-screen px-4 py-8 md:px-12 lg:px-20 flex flex-col justify-between overflow-x-hidden"
    >
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center py-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-stretch px-2 sm:px-5">
          {/* Gradient Hero Box */}
          <div className="main-container flex-1 w-full bg-linear-to-r from-[#4A4CE6] via-[#34A1B4] to-[#4BE191] p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl shadow-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold tracking-tight leading-[1.1] text-white">
              STOP TALKING.
              <br />
              START BUILDING.
            </h1>

            <p className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-xl text-white/90 leading-relaxed">
              We combine Swiss precision with deep technical expertise to
              architect, design, and engineer world-class software solutions for
              ambitious leaders.
            </p>

            <div className="mt-6 lg:mt-6 xl:mt-8">
              <Link
                href="#"
                className="inline-block bg-white/10 hover:bg-white text-white hover:text-black text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-lg font-medium border border-white/20 px-5 py-3 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Let&apos;s Discuss Your Project
              </Link>
            </div>
          </div>

          {/* Tag Column */}
          <div className="main-tags w-full lg:w-auto flex flex-row flex-wrap lg:flex-col justify-center lg:justify-evenly gap-4 md:gap-6 lg:gap-4 shrink-0 text-white">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="tags text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight whitespace-nowrap"
              >
                <span className="tag-first">{tag.charAt(0)}</span>
                <span className="tag-rest transition-colors duration-300">
                  {tag.slice(1)}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="flex justify-center items-center py-6">
        <div className="flex items-center gap-1.5 text-gray-500 hover:text-gray-300 text-[10px] sm:text-xs tracking-widest uppercase animate-bounce cursor-pointer transition-colors duration-200">
          <span>SCROLL TO BUILD</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </main>
  );
};

export default Main;
