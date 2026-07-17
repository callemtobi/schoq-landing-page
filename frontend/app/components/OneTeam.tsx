"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { image1, image2, image3, image4, image5, image6 } from "@/assets";

// Register ScrollTrigger safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const OneTeam: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  const services = [
    {
      image: image1,
      title: "Custom Software",
      description:
        "Tailored enterprise software solutions and custom system development for unique business requirements.",
    },
    {
      image: image2,
      title: "AI & Machine Learning",
      description:
        "Tailored enterprise software solutions and custom system development for unique business requirements.",
    },
    {
      image: image3,
      title: "Web Development",
      description:
        "From business websites to custom web applications, delivering fast, reliable, and user-focused digital experiences.",
    },
    {
      image: image4,
      title: "Mobile Apps",
      description:
        "Tailored enterprise software solutions and custom system development for unique business requirements.",
    },
    {
      image: image5,
      title: "UI/UX Design",
      description:
        "Tailored enterprise software solutions and custom system development for unique business requirements.",
    },
    {
      image: image6,
      title: "SaaS Development",
      description:
        "Build and scale secure, multi-tenant software-as-a-service platforms globally.",
    },
    {
      image: image2,
      title: "DevOps & Cloud Infrastructure",
      description:
        "Tailored enterprise software solutions and custom system development for unique business requirements.",
    },
  ];

  const firstRow = services.slice(0, 4);
  const secondRow = services.slice(4);

  useGSAP(
    () => {
      // ---- Header & Button ----
      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".header-trigger",
          start: "top 80%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      headerTimeline
        .from(".reveal-text", {
          y: "100%",
          duration: 1.1,
          ease: "power4.out",
        })
        .from(
          ".reveal-btn",
          {
            y: "110%",
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.8",
        );

      // ---- Service Cards - One-by-One from Below ----
      const servicesTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 85%",
          // markers: true,
          toggleActions: "play reverse play reverse",
        },
      });

      // Get all service cards
      const allCards = document.querySelectorAll(".service-card");

      // Set initial state - hidden below
      gsap.set(allCards, {
        y: 80,
        opacity: 0,
        scale: 0.95,
      });

      // Animate each card one-by-one from below
      servicesTL.to(allCards, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.2,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="w-full bg-gray-50 px-6 py-16 md:px-12 lg:px-20 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto header-trigger">
        {/* Header with wrapper mask */}
        <div className="mb-8 md:mb-12 text-center overflow-hidden py-1">
          <div className="reveal-text">
            <h2 className="oneTeam-header text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              ONE TEAM. COMPLETE
              <br />
              PRODUCT EXPERTISE.
            </h2>
          </div>
        </div>

        {/* Description and CTA */}
        <div className="grid grid-cols-1 mx-auto text-center w-11/12 md:w-2/3 lg:w-1/2 justify-items-center gap-6 md:gap-8 mb-12 md:mb-16">
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            From product strategy and UX to web, mobile, AI and cloud, Schoq
            brings the expertise required to design, build and scale digital
            products.
          </p>

          {/* Button wrapped in an overflow-hidden mask */}
          <div className="overflow-hidden py-2 px-4">
            <div className="reveal-btn">
              <Link
                href="#"
                className="inline-block bg-linear-to-r from-[#4A4CE6] via-[#34A1B4] to-[#4BE191] text-white text-base sm:text-lg font-medium px-8 py-3.5 rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>

        <div className="services-section space-y-8">
          {/* First Row Container */}
          <div className="service-wrapper1 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {firstRow.map((service, index) => (
              <div
                key={index}
                className="service-card group bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-15 h-15 rounded-xl bg-gray-900/5 flex items-center justify-center mb-4 group-hover:bg-gray-900/10 transition-colors">
                  <Image
                    alt={service.title}
                    src={service.image}
                    width={100}
                    height={100}
                  />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Second Row Container */}
          <div className="service-wrapper2 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {secondRow.map((service, index) => (
              <div
                key={index}
                className="service-card group bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-15 h-15 rounded-xl bg-gray-900/5 flex items-center justify-center mb-4 group-hover:bg-gray-900/10 transition-colors">
                  <Image
                    alt={service.title}
                    src={service.image}
                    width={100}
                    height={100}
                  />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneTeam;
