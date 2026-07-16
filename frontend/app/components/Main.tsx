"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      // matchMedia lets us skip motion entirely for reduced-motion users
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { duration: REVEAL_DURATION, ease: REVEAL_EASE },
          delay: REVEAL_DELAY,
        });

        // 1) main-container: revealed left-to-right from a thin sliver.
        // clip-path (not scaleX) so the heading/paragraph text inside
        // isn't stretched while it grows.
        tl.fromTo(
          ".main-container",
          { clipPath: "inset(0% 99% 0% 0%)", x: "50%" },
          { clipPath: "inset(0% 0% 0% 0%)", x: "0%" },
          0, // <-- start at the same timeline position as the tags
        );

        // 2) main-tags column: slides/fades in as a whole...
        tl.fromTo(
          ".main-tags",
          { xPercent: -10, x: "-130%", opacity: 0.4 },
          { xPercent: 0, x: "20", opacity: 1 },
          0, // same position, same duration -> perfectly synced with the box
        );

        // 3) ...while, simultaneously, everything but each tag's first
        // letter fades out. Runs at the same position + duration as above.
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

      // Reduced-motion users: just snap to the end state, no animation
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".main-container", { clipPath: "inset(0% 0% 0% 0%)" });
        gsap.set(".main-tags", { xPercent: 0, opacity: 1 });
        gsap.set(".tag-rest", { opacity: 0 });
      });

      return () => mm.revert();
    },
    { scope: container },
  );

  // useGSAP(
  //   () => {
  //     gsap.from(".main-container", {
  //       opacity: 0,
  //       x: 200,
  //       duration: 2,
  //       delay: 2,
  //       ease: "power2.out",
  //     });
  //   },
  //   { scope: container },
  // );

  // useGSAP(() => {
  //   gsap.fromTo(
  //     ".main-tags",
  //     { opacity: 0.5, x: -450},
  //     { opacity: 1, x: 0, duration: 4, delay: 2, ease: "expo.out" },
  //   );
  // });

  return (
    <main
      ref={container}
      className="h-screen bg-b lack px-6 py-12 md:px-12 lg:px-20 flex flex-col justify-start"
    >
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center pt-8 md:pt-0">
        <div className="flex flex-col lg:flex-row gap-2 items-stretch px-5">
          {/* Gradient Hero Box */}
          <div className="main-container flex-1 bg-linear-to-r from-[#4A4CE6] via-[#34A1B4] to-[#4BE191] p-6 md:p-8 lg:p-6 xl:p-10 2xl:p-12 rounded">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold tracking-tight leading-[1.05] text-white">
              STOP TALKING.
              <br />
              START BUILDING.
            </h1>

            <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-xl text-white leading-relaxed">
              We combine Swiss precision with deep technical expertise to
              architect, design, and engineer world-class software solutions for
              ambitious leaders.
            </p>

            <div className="mt-6 lg:mt-4 xl:mt-6 2xl:mt-8">
              <Link
                href="#"
                className="inline-block bg-transparent text-white text-base lg:text-sm xl:text-base 2xl:text-lg font-medium border border-white/20 px-6 py-2.5 lg:px-5 lg:py-2 xl:px-6 xl:py-2.5 2xl:px-8 2xl:py-3.5 rounded transition-colors shadow-lg hover:shadow-xl"
              >
                Let&apos;s Discuss Your Project
              </Link>
            </div>
          </div>

          {/* Tag Column */}
          <div className="main-tags flex flex-col justify-evenly h-auto gap-4 lg:gap-3 xl:gap-4 2xl:gap-6 shrink-0">
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
        </div>
      </div>

      <div className="bg-r ed-500 flex justify-center items-center h-70">
        <div className="flex items-center justify-center bg-g ray-600 h-fit text-gray-400 text-xs sm:text-sm lg:text-[10px] xl:text-xs 2xl:text-sm font-medium tracking-widest uppercase animate-bounce">
          <span className="">SCROLL TO BUILD</span>
          <ChevronDown className=" w-4 h-4 lg:w-3 lg:h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5" />
        </div>
      </div>
    </main>
  );
};

export default Main;
