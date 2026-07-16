"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import gsap from "gsap";

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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initial entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo animation
      gsap.from(logoRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1,
      });

      // Navigation links animation
      gsap.from(navRef.current?.children || [], {
        opacity: 0,
        y: -20,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.2,
      });

      // Language toggle animation
      gsap.from(languageRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.4,
      });

      // CTA button animation
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.5,
      });

      // Header scroll effect
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
    }, headerRef);

    return () => ctx.revert();
  }, [scrolled]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
        setIsProjectsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Mobile menu animations
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Show overlay
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        display: "block",
      });

      // Slide in menu
      gsap.fromTo(
        mobileMenuRef.current,
        {
          x: "100%",
          opacity: 0,
        },
        {
          x: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
      );

      // Animate mobile links with stagger
      const mobileLinks =
        mobileMenuRef.current?.querySelectorAll(".mobile-link");
      if (mobileLinks) {
        gsap.fromTo(
          mobileLinks,
          {
            opacity: 0,
            x: 30,
          },
          {
            opacity: 1,
            x: 0,
            stagger: 0.06,
            duration: 0.4,
            ease: "power3.out",
            delay: 0.2,
          },
        );
      }
    } else {
      // Hide overlay
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        display: "none",
      });

      // Slide out menu
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [isMobileMenuOpen]);

  // Dropdown animations
  useEffect(() => {
    const dropdowns = document.querySelectorAll(".dropdown-menu");
    dropdowns.forEach((dropdown) => {
      if (dropdown.classList.contains("services-dropdown")) {
        if (isServicesOpen) {
          gsap.to(dropdown, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            display: "block",
          });
        } else {
          gsap.to(dropdown, {
            opacity: 0,
            y: -10,
            scale: 0.95,
            duration: 0.2,
            ease: "power2.in",
            display: "none",
          });
        }
      }
      if (dropdown.classList.contains("projects-dropdown")) {
        if (isProjectsOpen) {
          gsap.to(dropdown, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            display: "block",
          });
        } else {
          gsap.to(dropdown, {
            opacity: 0,
            y: -10,
            scale: 0.95,
            duration: 0.2,
            ease: "power2.in",
            display: "none",
          });
        }
      }
    });
  }, [isServicesOpen, isProjectsOpen]);

  const handleDropdownToggle = (type: "services" | "projects") => {
    if (type === "services") {
      setIsServicesOpen(!isServicesOpen);
      if (isProjectsOpen) setIsProjectsOpen(false);
    } else {
      setIsProjectsOpen(!isProjectsOpen);
      if (isServicesOpen) setIsServicesOpen(false);
    }
  };

  const navLinks = [
    {
      name: "Services",
      href: "#services",
      hasDropdown: true,
      type: "services",
    },
    {
      name: "Projects",
      href: "#projects",
      hasDropdown: true,
      type: "projects",
    },
    { name: "About", href: "#about", hasDropdown: false },
    { name: "Contact", href: "#contact", hasDropdown: false },
  ];

  // const serviceItems = [
  //   "Custom Software",
  //   "AI & Machine Learning",
  //   "Web Development",
  //   "Mobile Apps",
  //   "UI/UX Design",
  //   "SaaS Development",
  // ];

  // const projectItems = [
  //   "IBIZA Journey",
  //   "MyAnza",
  //   "HR Management",
  //   "E-Commerce",
  //   "FinTech",
  // ];

  return (
    <>
      <header
        ref={headerRef}
        className={`w-auto mx-auto mt-4 rounded-lg transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-lg backdrop-blur-md border border-gray-100"
            : "bg-[#FFFFFF66] shadow border-b border-gray-200"
        } px-6 py-3 md:px-12 lg:px-10`}
      >
        <div className="max-w-7xl mx-auto flex gap-10 items-center justify-between">
          {/* Logo */}
          <div ref={logoRef}>
            <Link
              href="/"
              className="text-3xl font-extrabold tracking-tight bg-linear-to-r from-[#4A4CE6] via-[#34A1B4] to-[#4BE191] bg-clip-text text-transparent hover:scale-105 transition-transform inline-block"
            >
              SCHOQ
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center space-x-1 text-base font-medium text-gray-500"
          >
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                ref={link.hasDropdown ? dropdownRef : null}
                // onMouseEnter={() => {
                //   if (link.hasDropdown && link.type === "services")
                //     setIsServicesOpen(true);
                //   if (link.hasDropdown && link.type === "projects")
                //     setIsProjectsOpen(true);
                // }}
                // onMouseLeave={() => {
                //   if (link.hasDropdown && link.type === "services")
                //     setIsServicesOpen(false);
                //   if (link.hasDropdown && link.type === "projects")
                //     setIsProjectsOpen(false);
                // }}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 ${
                    (link.type === "services" && isServicesOpen) ||
                    (link.type === "projects" && isProjectsOpen)
                      ? "text-gray-900 bg-gray-50"
                      : ""
                  }`}
                  // onClick={() => {
                  //   if (link.hasDropdown && link.type === "services")
                  //     handleDropdownToggle("services");
                  //   if (link.hasDropdown && link.type === "projects")
                  //     handleDropdownToggle("projects");
                  // }}
                >
                  {link.name}
                  {/* {link.hasDropdown && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        (link.type === "services" && isServicesOpen) ||
                        (link.type === "projects" && isProjectsOpen)
                          ? "rotate-180"
                          : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )} */}
                </button>

                {/* Dropdown Menu - Services */}
                {/* {link.hasDropdown && link.type === "services" && (
                  <div
                    className="dropdown-menu services-dropdown absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 hidden"
                    style={{ opacity: 0, y: -10, scale: 0.95 }}
                  >
                    {serviceItems.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-linear-to-r hover:from-[#4A4CE6]/10 hover:via-[#34A1B4]/10 hover:to-[#4BE191]/10 hover:text-gray-900 transition-all duration-200"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )} */}

                {/* Dropdown Menu - Projects */}
                {/* {link.hasDropdown && link.type === "projects" && (
                  <div
                    className="dropdown-menu projects-dropdown absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 hidden"
                    style={{ opacity: 0, y: -10, scale: 0.95 }}
                  >
                    {projectItems.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-linear-to-r hover:from-[#4A4CE6]/10 hover:via-[#34A1B4]/10 hover:to-[#4BE191]/10 hover:text-gray-900 transition-all duration-200"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )} */}
              </div>
            ))}
          </nav>

          <span className="text-gray-300 hidden lg:block">|</span>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
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

            {/* Start a Project Button */}
            <div ref={ctaRef}>
              <Link
                href="#"
                className="hidden md:inline-block bg-linear-to-r from-[#4A4CE6] via-[#34A1B4] to-[#4BE191] text-white text-sm px-8 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Start a Project
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden flex flex-col"
        style={{ x: "100%", opacity: 0 }}
      >
        {/* Mobile Menu Header */}
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

        {/* Mobile Menu Links */}
        <div className="flex-1 overflow-y-auto p-6 space-y-2">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.hasDropdown ? (
                <>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors mobile-link"
                    onClick={() => {
                      if (link.type === "services")
                        handleDropdownToggle("services");
                      if (link.type === "projects")
                        handleDropdownToggle("projects");
                    }}
                  >
                    {link.name}
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        (link.type === "services" && isServicesOpen) ||
                        (link.type === "projects" && isProjectsOpen)
                          ? "rotate-180"
                          : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* {((link.type === "services" && isServicesOpen) ||
                    (link.type === "projects" && isProjectsOpen)) && (
                    <div className="ml-4 space-y-1 overflow-hidden">
                      {(link.type === "services"
                        ? serviceItems
                        : projectItems
                      ).map((item) => (
                        <Link
                          key={item}
                          href="#"
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors mobile-link"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )} */}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors mobile-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
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
