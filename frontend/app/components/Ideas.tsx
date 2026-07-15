"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Idea1 from "@/public/Idea1.png";
import Idea2 from "@/public/Idea2.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: typeof Idea1;
}

const Ideas: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

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
  const visibleCards = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  // const prevSlide = () => {
  //   setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  // };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play carousel - Updated to 2 seconds (2000ms)
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

  return (
    <section className="w-full bg-slate-50/50 px-6 py-16 md:px-12 lg:px-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-2 ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] text-center">
            IDEAS BROUGHT <br></br> TO LIFE
          </h2>
        </div>

        {/* Description and CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">
          <p className="text-base text-center sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Explore selected platforms, applications and digital <br></br>{" "}
            experiences designed and developed by Schoq.
          </p>
          <div className="flex items-start justify-center">
            <Link
              href="#"
              className="inline-block bg-linear-to-r from-[#4A4CE6] via-[#34A1B4] to-[#4BE191] text-white text-base sm:text-lg font-medium px-8 py-3.5 rounded hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* Carousel Container - Redesigned to support overlapping stacks */}
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
            {projects.map((project, index) => {
              // Calculate index relative to the active slide at the front-right
              let position = index - currentIndex;

              // Handle infinite wrapping calculations
              if (position < -2) position += totalSlides;
              if (position > totalSlides - 3) position -= totalSlides;

              // Determine visibility and styles based on stacking rules
              const isVisible = position <= 0 && position >= -2;

              let scale = 1;
              let translationX = "0%";
              let zIndex = 0;
              let opacity = 1;

              if (position === 0) {
                // Main topmost card
                scale = 1;
                translationX = "0%";
                zIndex = 30;
                opacity = 1;
              } else if (position === -1) {
                // First card behind
                scale = 0.88;
                translationX = "-35%";
                zIndex = 20;
                opacity = 0.9;
              } else if (position === -2) {
                // Second card behind
                scale = 0.76;
                translationX = "-65%";
                zIndex = 10;
                opacity = 0.75;
              }

              return (
                <div
                  key={project.id}
                  className={`absolute right-0 w-full md:w-[75%] lg:w-[68%] h-full transition-all duration-700 ease-out origin-right ${
                    isVisible
                      ? "pointer-events-auto"
                      : "pointer-events-none opacity-0"
                  }`}
                  style={{
                    transform: `translateX(${translationX}) scale(${scale})`,
                    zIndex: zIndex,
                    opacity: opacity,
                  }}
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
              );
            })}
          </div>

          {/* Navigation Buttons */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 hover:border-gray-200 z-40 hidden sm:block"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button> */}
          {/* <button
            onClick={nextSlide}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 hover:border-gray-200 z-40 hidden sm:block"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button> */}
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
