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
const REVEAL_DURATION = 2;
const REVEAL_DELAY = 1;
const REVEAL_EASE = "power3.inOut";

const Main: React.FC = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Desktop Animation (lg and above)
        mm.add("(min-width: 1024px)", () => {
          const tl = gsap.timeline({
            defaults: { duration: REVEAL_DURATION, ease: REVEAL_EASE },
            delay: REVEAL_DELAY,
          });

          // Desktop: Main container reveals left-to-right
          tl.fromTo(
            ".main-container",
            { clipPath: "inset(0% 99% 0% 0%)", x: "60%" },
            { clipPath: "inset(0% 0% 0% 0%)", x: "10%" },
            0,
          );

          // Desktop: Tags slide in from left
          tl.fromTo(
            ".main-tags",
            { xPercent: -20, x: "-100%", opacity: 0.4 },
            { xPercent: 10, x: "35", opacity: 1 },
            0,
          );

          // Desktop: Tag letters animation
          tl.fromTo(
            ".tag-rest",
            { opacity: 1 },
            {
              opacity: 0,
              delay: 0.1,
              stagger: 0.06,
            },
            0,
          );
          tl.to(
            ".tag-first",
            {
              stagger: 0.06,
              color: "#4A4CE6",
            },
            0,
          );

          return () => tl.kill();
        });

        // Mobile Animation (below lg)
        mm.add("(max-width: 1023px)", () => {
          const tl = gsap.timeline({
            defaults: { duration: 1.2, ease: "power3.out" },
            delay: 0.5,
          });

          // Mobile: Main container fades up with scale
          tl.fromTo(
            ".main-container",
            {
              opacity: 0,
              y: 40,
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
            },
            0,
          );

          // Mobile: Tags fade in with stagger from bottom
          const tags = document.querySelectorAll(".tags");
          tl.fromTo(
            tags,
            {
              opacity: 0,
              y: 20,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.08,
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.3",
          );

          // Mobile: Keep full tag text visible (no letter animation)
          tl.set(".tag-rest", { opacity: 1 });
          tl.set(".tag-first", { color: "#4A4CE6" }, "-=0.5");

          return () => tl.kill();
        });
      });

      // Reduced-motion users: snap to end state
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".main-container", {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          y: 0,
          scale: 1,
        });
        gsap.set(".main-tags", { xPercent: 0, opacity: 1 });
        gsap.set(".tag-rest", { opacity: 0 });
      });

      return () => mm.revert();
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className="min-h-screen b  px-6 py-12 md:px-12 lg:px-20 flex flex-col justify-between"
    >
      {/* Hero Content - Centered */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center items-center pt-8 md:pt-0">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center w-full px-5">
          {/* Gradient Hero Box */}
          <div className="main-container flex-1 bg-linear-to-r from-[#4A4CE6] via-[#34A1B4] to-[#4BE191] p-6 md:p-8 lg:p-6 xl:p-10 2xl:p-12 rounded max-w-4xl mx-auto lg:mx-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold tracking-tight leading-[1.05] text-white text-center lg:text-left">
              STOP TALKING.
              <br />
              START BUILDING.
            </h1>

            <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-xl text-white leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
              We combine Swiss precision with deep technical expertise to
              architect, design, and engineer world-class software solutions for
              ambitious leaders.
            </p>

            <div className="mt-6 lg:mt-4 xl:mt-6 2xl:mt-8 flex justify-center lg:justify-start">
              <Link
                href="#"
                className="inline-block bg-transparent text-white text-base lg:text-sm xl:text-base 2xl:text-lg font-medium border border-white/20 px-6 py-2.5 lg:px-5 lg:py-2 xl:px-6 xl:py-2.5 2xl:px-8 2xl:py-3.5 rounded transition-colors shadow-lg hover:shadow-xl"
              >
                Let&apos;s Discuss Your Project
              </Link>
            </div>
          </div>

          {/* Tag Column - Desktop */}
          <div className="main-tags hidden lg:flex flex-col justify-evenly h-auto gap-4 lg:gap-3 xl:gap-4 2xl:gap-6 shrink-0">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="tags lg:text-3xl text-2xl w-fit font-bold tracking-tight whitespace-nowrap"
              >
                <span className="tag-first">{tag.charAt(0)}</span>
                <span className="tag-rest">{tag.slice(1)}</span>
              </span>
            ))}
          </div>

          {/* Tag Row - Mobile (visible only on mobile) */}
          <div className="lg:hidden w-full flex flex-wrap justify-center gap-3 mt-4">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="tags px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center items-center pb-8 md:pb-12 mt-8">
        <div className="flex flex-col items-center gap-2 text-gray-400 text-xs sm:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-widest uppercase animate-bounce">
          <span className="">SCROLL TO BUILD</span>
          <ChevronDown className="w-4 h-4 lg:w-3 lg:h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5" />
        </div>
      </div>
    </main>
  );
};

export default Main;
