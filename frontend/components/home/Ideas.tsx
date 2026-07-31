"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Idea1 from "@/public/Idea1.png";
import Idea2 from "@/public/Idea2.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { heroBgImage } from "@/public";

interface Project {
  id: number;
  title: string;
  image: typeof Idea1;
}

// Pure helper: given a card's own index and the currently active slide,
// return where that card should sit in the stack.
const getCardState = (index: number, activeIndex: number, total: number) => {
  let position = index - activeIndex;
  if (position < -2) position += total;
  if (position > total - 3) position -= total;

  if (position === 0) return { xPercent: 0, scale: 1, zIndex: 30, opacity: 0 };
  if (position === -1)
    return { xPercent: -35, scale: 0.88, zIndex: 20, opacity: 1 };
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
      image: Idea2,
    },
    {
      id: 2,
      title: "Workforce Management System for HR",
      image: Idea1,
    },
  ];

  const totalSlides = projects.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

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

  // ---- Header text reveal ----
  useGSAP(
    () => {
      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
          end: "bottom 60%",
          // markers: true,
          toggleActions: "play reverse play reverse",
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

  // ---- Card stack: Swift + Smooth Entrance Animation ----
  useGSAP(
    () => {
      // Set initial state for cards
      projects.forEach((_, index) => {
        const el = cardRefs.current[index];
        if (!el) return;
        const state = getCardState(index, 0, totalSlides);
        gsap.set(el, {
          xPercent: state.xPercent,
          scale: state.scale,
          zIndex: state.zIndex,
          opacity: state.opacity,
        });
      });

      // Swift entrance animation with different directions
      const entranceConfigs = [
        { x: 250, y: 0, rotation: 8, scale: 0.85 },
        { x: 0, y: 180, rotation: -5, scale: 0.88 },
      ];

      const cardsTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".start-btn",
          start: "top 85%",
          toggleActions: "play none play reverse",
        },
        defaults: { duration: 0.9, ease: "power3.out" },
      });

      entranceConfigs.forEach((config, index) => {
        const el = cardRefs.current[index];
        if (!el) return;

        const state = getCardState(index, 0, totalSlides);

        cardsTl.fromTo(
          el,
          {
            x: config.x,
            y: config.y,
            opacity: 0,
            scale: config.scale,
            rotation: config.rotation,
          },
          {
            x: -10,
            y: 0,
            rotation: 0,
            opacity: state.opacity,
            scale: state.scale,
            xPercent: state.xPercent,
            duration: 0.9,
            ease: "power3.out",
          },
          index === 0 ? 0 : "-=0.7",
        );
      });
    },
    { scope: container },
  );

  // ---- Card stack: Smooth slide-to-slide transition ----
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

        gsap.set(el, { zIndex: state.zIndex });
        gsap.to(el, {
          xPercent: state.xPercent,
          scale: state.scale,
          opacity: state.opacity,
          x: -20,
          y: 0,
          rotation: 0,
          duration: 0.7,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    },
    { dependencies: [currentIndex], scope: container },
  );

  return (
    <section
      style={{ backgroundImage: `url(${heroBgImage.src})` }}
      ref={container}
      className="w-full bg-cover bg-center bg-no-repeat px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24 lg:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="header-one mb-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] text-center">
            IDEAS BROUGHT <br /> TO LIFE
          </h2>
        </div>

        {/* Description and CTA */}
        <div className="header-two grid grid-cols-1 place-items-center gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
          <p className="w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed text-center">
            Explore selected platforms, applications and digital experiences
            designed and developed by Schoq.
          </p>
          <div className="flex items-start justify-center">
            <Link
              href="#"
              className="start-btn rounded-lg inline-block bg-linear-to-r from-[#4A4CE6] via-[#34A1B4] to-[#4BE191] text-white text-sm sm:text-base lg:text-lg font-medium px-6 sm:px-8 py-2.5 sm:py-3.5 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full h-80 sm:h-100 md:h-125 lg:h-140 xl:h-160 flex items-center justify-center px-2 sm:px-4">
          <div
            ref={carouselRef}
            className="relative w-full h-full flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
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
                className="absolute left-1/2 -translate-x-1/2 w-[75%] md:w-[85%] lg:w-[75%] xl:w-[68%] h-full origin-center pointer-events-auto"
              >
                <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-100/50">
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 75vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 z-10 backdrop-blur-sm"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 z-10 backdrop-blur-sm"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800" />
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-14 gap-1.5 sm:gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gray-800 w-6 sm:w-8"
                  : "bg-gray-300 w-1.5 sm:w-2 hover:bg-gray-400"
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
