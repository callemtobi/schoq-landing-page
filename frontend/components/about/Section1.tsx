"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section1() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create a master timeline linked to scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Triggers when top of section hits 80% of viewport height
          toggleActions: "play none none reverse",
        },
      });

      // 1st: "about-schoq-1" slide-fades in from the right with "about-shoq-content" following it
      tl.from(".about-schoq-1", {
        x: 60,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
      }).from(
        ".about-shoq-content",
        {
          x: 30,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=2", // Millisecond delay relative to previous animation start
      );

      // 2nd: "human-thinking-2" slides out from behind the vertical line (revealing rightwards)
      tl.from(
        ".human-thinking-2",
        {
          x: 80,
          opacity: 0,
          clipPath: "inset(0% 0% 0% 100%)", // Fully hidden from the right edge
          duration: 1,
          ease: "power3.out",
        },
        "-=0.3",
      );

      // 3rd: "delivery-3" slides out from behind the vertical line (revealing leftwards)
      tl.from(
        ".delivery-3",
        {
          x: -80,
          opacity: 0,
          clipPath: "inset(0% 100% 0% 0%)", // Fully hidden from the left edge
          duration: 1,
          ease: "power3.out",
        },
        "-=0.4",
      );
    }, containerRef);

    // Clean up GSAP animations on unmount
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-[40%_60%] grid-rows-1 md:grid-rows-2 flex-1 mt-13 mb-10 bg-white text-foreground relative"
    >
      {/* Vertical divider - hidden on mobile */}
      <div className="hidden md:block absolute left-[40%] top-1/2 -translate-y-1/2 h-[180%] w-0.5 bg-linear-to-r from-emerald-400 to-blue-600 opacity-30 mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)" />

      {/* Horizontal divider - hidden on mobile */}
      {/* <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gray-200 -translate-y-1/2" /> */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-emerald-400 to-blue-600 -translate-y-1/2 opacity-30" />

      {/* TOP-LEFT cell - Human Thinking */}
      <div className="human-thinking-2 flex items-center justify-center px-4 md:ps-20 py-8 md:py-4 order-1 md:order-0 border-b border-gray-100 md:border-none">
        <div className="text-5xl sm:text-6xl md:text-6xl font-extrabold uppercase leading-[0.85] tracking-tight text-neutral-900 text-center md:text-left">
          HUMAN
          <br />
          THINKING
        </div>
      </div>

      {/* TOP-RIGHT cell - About Schoq content */}
      <div className="about-schoq-1 flex flex-col justify-center px-6 md:px-8 py-8 md:py-4 gap-2 md:gap-1.5 order-2 md:order-0 text-center md:text-left items-center md:items-start">
        <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-neutral-400">
          ABOUT SCHOQ
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-[1.2] md:leading-[1.1] text-neutral-900">
          TECHNOLOGY SHOULD FEEL
          <br />
          CLEAR-
          <span className="bg-linear-to-r from-emerald-400 to-blue-600 bg-clip-text text-transparent">
            EVEN WHEN THE
            <br />
            CHALLENGE IS COMPLEX.
          </span>
        </h2>

        <p className="about-shoq-content text-sm md:text-xs text-neutral-500 max-w-sm leading-relaxed mt-2 md:mt-1">
          Schoq brings product thinking, human-centred design and software
          engineering together to create digital systems built around real
          business needs.
        </p>
      </div>

      {/* BOTTOM-LEFT cell - empty spacer */}
      <div className="hidden md:block px-8 py-4" />

      {/* BOTTOM-RIGHT cell - Engineered Delivery */}
      <div className="delivery-3 flex items-center justify-center md:justify-start px-4 md:px-8 py-8 md:py-4 order-3 md:order-0">
        <div className="text-5xl sm:text-6xl md:text-6xl font-extrabold uppercase leading-[0.85] tracking-tight text-neutral-900 text-center md:text-left">
          ENGINEERED
          <br />
          DELIVERY
        </div>
      </div>
    </section>
  );
}
