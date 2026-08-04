"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HeaderBorderStyle } from "../icons/Icons";

export const NAV_LINKS = [
  {
    name: "Services",
    href: "#",
    children: [
      {
        title: "Web Development",
        href: "/services/web-development",
      },
      {
        title: "Mobile Development",
        href: "/services/mobile-development",
      },
      {
        title: "Artificial Intelligence",
        href: "/services/artificial-intelligence",
      },
    ],
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(
    null,
  );

  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      gsap.from(logoRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1,
      });

      gsap.from(navRef.current?.children || [], {
        opacity: 0,
        y: -20,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(languageRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.4,
      });

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

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useGSAP(
    () => {
      const mobileLinks =
        mobileMenuRef.current?.querySelectorAll(".mobile-link");

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
          "-=0.15",
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

  useEffect(() => {
    if (menuTimelineRef.current) {
      if (isMobileMenuOpen) {
        menuTimelineRef.current.play();
      } else {
        menuTimelineRef.current.reverse();
      }
    }
  }, [isMobileMenuOpen]);

  const toggleMobileSubmenu = (name: string) => {
    setExpandedMobileMenu((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <header
        ref={headerRef}
        className="absolute inset-x-0 top-0 z-50 w-full bg-transparent"
      >
        <div className="w-fit mx-auto rounded-lg px-6 py-3 md:px-12 lg:px-10">
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
              className="hidden lg:flex items-center space-x-1 text-base font-medium"
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);
                const hasChildren = link.children && link.children.length > 0;

                return (
                  <div key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      className={`relative flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "text-gray-900 font-semibold"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                      }`}
                    >
                      {link.name}
                      {hasChildren && (
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                      )}
                    </Link>
                    {isActive && (
                      <div className="absolute bottom-1 left-4 right-3">
                        <HeaderBorderStyle />
                      </div>
                    )}

                    {/* Desktop Hover Dropdown Menu */}
                    {hasChildren && (
                      <div className="absolute top-full left-0 pt-2 w-56 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
                        <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-100 p-2 flex flex-col gap-1">
                          {link.children.map((child) => {
                            const isChildActive = pathname === child.href;
                            return (
                              <Link
                                key={child.title}
                                href={child.href}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                  isChildActive
                                    ? "bg-gray-100 text-gray-900 font-semibold"
                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                }`}
                              >
                                {child.title}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <span className="text-gray-300 hidden lg:block">|</span>

            <div className="flex items-center space-x-4">
              <div
                ref={languageRef}
                className="hidden sm:flex items-center space-x-1 text-sm font-medium text-gray-600 shadow-[inset_0_1px_8px_rgba(0,0,0,0.15)] px-3 py-1.5 rounded-lg backdrop-blur-sm"
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
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100/80 transition-colors"
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
        </div>
      </header>

      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        style={{ opacity: 0, display: "none" }}
        onClick={() => setIsMobileMenuOpen(false)}
      />

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
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            const hasChildren = link.children && link.children.length > 0;
            const isExpanded = expandedMobileMenu === link.name;

            return (
              <div key={link.name} className="mobile-link">
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    className={`relative flex-1 px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                      isActive
                        ? "text-gray-900 font-semibold bg-gray-50/80 after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:bg-linear-to-r after:from-[#4A4CE6] after:via-[#34A1B4] after:to-[#4BE191] after:rounded-full"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {hasChildren && (
                    <button
                      onClick={() => toggleMobileSubmenu(link.name)}
                      className="p-3 text-gray-500 hover:text-gray-800"
                      aria-label={`Toggle ${link.name} submenu`}
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Submenu */}
                {hasChildren && isExpanded && (
                  <div className="ml-4 pl-2 border-l-2 border-gray-100 space-y-1 mt-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        className="block px-4 py-2 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

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
