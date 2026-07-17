"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Idea1 from "@/public/Idea1.png";
import Idea2 from "@/public/Idea2.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  image: typeof Idea1;
}

// Pure helper: given a card's own index and the currently active slide,
// return where that card should sit in the stack. Shared by the mount-time
// entrance setup and the ongoing slide-transition effect so both always
// agree on the "resting" layout.
const getCardState = (index: number, activeIndex: number, total: number) => {
  let position = index - activeIndex;
  if (position < -2) position += total;
  if (position > total - 3) position -= total;

  if (position === 0) return { xPercent: 0, scale: 1, zIndex: 30, opacity: 1 };
  if (position === -1)
    return { xPercent: -35, scale: 0.88, zIndex: 20, opacity: 0.9 };
  if (position === -2)
    return { xPercent: -65, scale: 0.76, zIndex: 10, opacity: 0.75 };
  return { xPercent: 0, scale: 1, zIndex: 0, opacity: 0 };
};

const Ideas: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const container = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isFirstRender = useRef(true);

  const projects: Project[] = [
    {
      id: 1,
      title: "MyAnza",
      description:
        "MyAnza is a pioneering-first social platform built for leisure, adventure, and meaningful digital interactions. The platform enables users to share content, connect with others, and explore new destinations. MyAnza's innovative approach to travel and social networking has been recognized by several industry awards.",
      image: Idea2,
    },
    {
      id: 2,
      title: "Workforce Management System for HR",
      description:
        "Designed and developed a custom attendance management system. The solution includes employee attendance reporting dashboards, role-based permissions, shift scheduling, and more.",
      image: Idea1,
    },
    {
      id: 3,
      title: "NEVER STOP EXPLORING THE WORLD",
      description:
        "A comprehensive travel exploration platform connecting adventurers with unique experiences worldwide.",
      image: Idea1,
    },
  ];

  const totalSlides = projects.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) {
        nextSlide();
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [isDragging]);

  // Touch and mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // ---- Header text reveal (unchanged) ----
  useGSAP(
    () => {
      //   const tl = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: container.current,
      //       start: "top 40%",
      //       end: "bottom top",
      //       toggleActions: "play reverse play reverse",
      //     },
      //     defaults: { ease: "power3.out" },
      //   });

      //   tl.from(".header-two", {
      //     yPercent: 100,
      //     opacity: 0,
      //     duration: 1,
      //     delay: 0.5,
      //   });
      // },

      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 30%",
          end: "bottom 60%",
          markers: true,
          toggleActions: "play reverse play reverse",
          // scrub: 1,
        },
      });

      headerTimeline.from(".header-two", {
        y: "100%",
        duration: 1.1,
        ease: "power4.out",
      });
    },
    { scope: container },
  );

  // ---- Card stack: one-time directional entrance ----
  // Runs once, decoupled from the header's reverse-capable trigger above —
  // the cards shouldn't replay their entrance every time someone scrolls
  // past this section again while the carousel is also mid-autoplay.
  useGSAP(
    () => {
      // Lock in the resting stacked layout instantly (no animation) as the
      // base state that the entrance tween will animate away from.
      projects.forEach((_, index) => {
        const el = cardRefs.current[index];
        if (!el) return;
        const state = getCardState(index, 0, totalSlides); // currentIndex is 0 on mount
        gsap.set(el, {
          xPercent: state.xPercent,
          scale: state.scale,
          zIndex: state.zIndex,
          opacity: state.opacity,
        });
      });

      // index 0 = front/right card -> enters from bottom-right
      // index 1 = middle card      -> enters from bottom
      // index 2 = back/left card   -> enters from bottom-left
      const entranceX = [200, 0, -200];

      const cardsTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".start-btn",
          start: "top 80%",
          // once: true,
        },
        defaults: { duration: 1.1, ease: "power3.out" },
      });

      entranceX.forEach((x, index) => {
        const el = cardRefs.current[index];
        if (!el) return;
        cardsTl.from(el, { x, y: 160, opacity: 0 }, index === 0 ? 0 : "-=0.85");
      });
    },
    { scope: container },
  );

  // ---- Card stack: smooth slide-to-slide transition ----
  // Replaces the old CSS `transition-all` approach. Skips the very first
  // run (mount) since the entrance effect above already establishes the
  // resting layout for currentIndex === 0.
  useGSAP(
    () => {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }

      projects.forEach((_, index) => {
        const el = cardRefs.current[index];
        if (!el) return;
        const state = getCardState(index, currentIndex, totalSlides);

        gsap.set(el, { zIndex: state.zIndex }); // stacking order snaps instantly
        gsap.to(el, {
          xPercent: state.xPercent,
          scale: state.scale,
          opacity: state.opacity,
          x: 0,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          overwrite: "auto", // prevents pile-up if autoplay ticks before a tween finishes
        });
      });
    },
    { dependencies: [currentIndex], scope: container },
  );

  return (
    <section
      ref={container}
      className="w-full bg-slate-50/50 px-6 py-16 md:px-12 lg:px-20 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="header-one mb-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] text-center">
            IDEAS BROUGHT <br /> TO LIFE
          </h2>
        </div>

        {/* Description and CTA */}
        <div className="header-two grid grid-cols-1 lg:grid-cols-1 place-items-center gap-6 mb-12 md:mb-16">
          <p className="max-w-[50%] text-base text-center sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Explore selected platforms, applications and digital experiences
            designed and developed by Schoq.
          </p>
          <div className="flex items-start justify-center">
            <Link
              href="#"
              className="start-btn rounded-lg inline-block bg-linear-to-r from-[#4A4CE6] via-[#34A1B4] to-[#4BE191] text-white text-base sm:text-lg font-medium px-8 py-3.5  hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full h-87.5 md:h-120 flex items-center justify-end px-4 md:px-12">
          <div
            ref={carouselRef}
            className="relative w-full h-full flex items-center justify-end select-none cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="absolute right-0 w-full md:w-[75%] lg:w-[68%] h-full origin-right pointer-events-auto"
              >
                <div className="w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100/50 flex flex-row items-stretch">
                  {/* Left side info panel */}
                  <div className="w-1/2 p-6 md:p-12 flex flex-col justify-center">
                    <h3 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#2B354F] mb-3 md:mb-6">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm lg:text-base text-gray-500 leading-relaxed line-clamp-4 md:line-clamp-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Right side mockup/visual */}
                  <div className="w-1/2 relative bg-gray-50/50 flex items-center justify-center overflow-hidden border-l border-gray-100">
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-10 md:mt-14 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gray-800 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ideas;
