"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Keep a persistent reference to the mobile menu timeline
  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Entrance and scroll effects
  useGSAP(
    () => {
      // Logo entrance
      gsap.from(logoRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1,
      });

      // Desktop nav links
      gsap.from(navRef.current?.children || [], {
        opacity: 0,
        y: -20,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.2,
      });

      // Language switcher
      gsap.from(languageRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.4,
      });

      // CTA
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.5,
      });
    },
    { scope: headerRef },
  );

  // Handle header changes on scroll
  useGSAP(() => {
    if (scrolled) {
      gsap.to(headerRef.current, {
        backgroundColor: "rgba(255,255,255,0.95)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
        backdropFilter: "blur(12px)",
        borderColor: "rgba(229,231,235,0.3)",
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(headerRef.current, {
        backgroundColor: "rgba(255,255,255,0.4)",
        boxShadow: "none",
        backdropFilter: "blur(0px)",
        borderColor: "rgba(229,231,235,1)",
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [scrolled]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Create a clean, single timeline for the mobile drawer
  useGSAP(
    () => {
      const mobileLinks =
        mobileMenuRef.current?.querySelectorAll(".mobile-link");

      // Initialize the master timeline paused
      const tl = gsap.timeline({ paused: true });

      tl.set(overlayRef.current, { display: "block" })
        .to(overlayRef.current, {
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        })
        .fromTo(
          mobileMenuRef.current,
          { x: "100%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 0.4, ease: "power3.out" },
          "-=0.15", // overlapping track
        );

      if (mobileLinks && mobileLinks.length > 0) {
        tl.fromTo(
          mobileLinks,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.05,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.2",
        );
      }

      menuTimelineRef.current = tl;

      return () => {
        tl.kill();
      };
    },
    { scope: headerRef },
  );

  // Control mobile drawer animation cleanly based on state
  useEffect(() => {
    if (menuTimelineRef.current) {
      if (isMobileMenuOpen) {
        menuTimelineRef.current.play();
      } else {
        menuTimelineRef.current.reverse();
      }
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Services", href: "#services", hasDropdown: false },
    { name: "Projects", href: "#projects", hasDropdown: false },
    { name: "About", href: "/about", hasDropdown: false },
    { name: "Contact", href: "#contact", hasDropdown: false },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className={`w-fit mx-auto mt-4 rounded-lg transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-lg backdrop-blur-md border border-gray-100"
            : "bg-[#FFFFFF66] shadow border-b border-gray-200"
        } px-6 py-3 md:px-12 lg:px-10`}
      >
        <div className="max-w-7xl mx-auto flex gap-10 items-center justify-between">
          <div ref={logoRef}>
            <Link
              href="/"
              className="text-3xl font-extrabold tracking-tight bg-linear-to-r from-[#4A4CE6] via-[#34A1B4] to-[#4BE191] bg-clip-text text-transparent hover:scale-105 transition-transform inline-block"
            >
              SCHOQ
            </Link>
          </div>

          <nav
            ref={navRef}
            className="hidden lg:flex items-center space-x-1 text-base font-medium text-gray-500"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>

          <span className="text-gray-300 hidden lg:block">|</span>

          <div className="flex items-center space-x-4">
            <div
              ref={languageRef}
              className="hidden sm:flex items-center space-x-1 text-sm font-medium text-gray-600 shadow-[inset_0_1px_8px_rgba(0,0,0,0.15)] px-3 py-1.5 rounded-lg"
            >
              <button className="hover:text-gray-900 transition-colors">
                DE
              </button>
              <span className="text-gray-400">/</span>
              <button className="hover:text-gray-900 transition-colors">
                EN
              </button>
            </div>

            <div ref={ctaRef}>
              <Link
                href="#"
                className="hidden md:inline-block bg-linear-to-r from-[#4A4CE6] via-[#34A1B4] to-[#4BE191] text-white text-sm px-8 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Start a Project
              </Link>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        style={{ opacity: 0, display: "none" }}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Content Container */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden flex flex-col"
        style={{ transform: "translateX(100%)", opacity: 0 }}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <Link
            href="/"
            className="text-2xl font-extrabold bg-linear-to-r from-[#4A4CE6] via-[#34A1B4] to-[#4BE191] bg-clip-text text-transparent"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            SCHOQ
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors mobile-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-6 border-t border-gray-100 mt-6 mobile-link">
            <Link
              href="#"
              className="block w-full text-center bg-linear-to-r from-[#4A4CE6] via-[#34A1B4] to-[#4BE191] text-white font-semibold py-3.5 rounded-lg hover:shadow-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
