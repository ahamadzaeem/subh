"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Our Businesses",
    href: "/#ventures",
    hasDropdown: true,
    dropdownItems: [
      { label: "Subh Greenz Hypermarket", href: "/subh-greenz" },
      { label: "Shiva Exporting", href: "/#ventures" },
      { label: "Subhashini Tower", href: "/#ventures" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessesOpen, setBusinessesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY && currentScrollY > 150) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
      } else {
        setIsScrolled(false);
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);

      if (pathname === "/") {
        const sections = ["hero", "about", "ventures", "products", "sustainability", "gallery", "news", "contact"];
        for (const sectionId of sections.reverse()) {
          const el = document.getElementById(sectionId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 160) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    setBusinessesOpen(false);

    if (href.includes("#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.substring(href.indexOf("#") + 1);
      const element = document.getElementById(targetId);
      if (element) {
        const offsetTop = element.offsetTop - 90;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{
        y: scrollDirection === "down" ? -140 : 0,
        opacity: scrollDirection === "down" ? 0 : 1,
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 transition-all duration-300"
    >
      <div className="w-full relative flex items-center justify-between min-h-[4rem] sm:min-h-[5rem] px-2 sm:px-6 lg:px-10">
        {/* Left Side: Logo aligned far to left of screen */}
        <div className="flex items-center shrink-0 z-10">
          <Link
            href="/"
            className="relative block h-16 sm:h-24 md:h-28 lg:h-32 w-44 sm:w-72 md:w-80 lg:w-96 shrink-0 group transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/images/logo-enterprises-updated.png"
              alt="Subhashini Enterprises Logo"
              fill
              priority
              className="object-contain object-left drop-shadow-md"
            />
          </Link>
        </div>

        {/* Center: Floating Transparent Glass Navigation Pill Bar centered on screen */}
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 top-1/2 -translate-y-1/2 bg-white/75 backdrop-blur-xl border border-white/80 shadow-xl shadow-black/5 rounded-full px-5 py-2.5 sm:px-6 sm:py-3.5 flex items-center justify-between gap-3 text-gray-900 shrink z-20">
          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {NAV_LINKS.map((link) => {
              const isRouteActive = pathname === link.href;
              const isSectionActive = pathname === "/" && activeSection === link.href.replace("/#", "").replace("#", "");
              const isActive = isRouteActive || isSectionActive;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setBusinessesOpen(true)}
                    onMouseLeave={() => setBusinessesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 transition-all ${
                        isActive || businessesOpen
                          ? "bg-emerald-600 text-white font-bold shadow-md"
                          : "text-gray-800 hover:text-black hover:bg-black/5"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-700 group-hover:text-black" />
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {businessesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl text-gray-900 rounded-2xl shadow-2xl border border-gray-200/80 py-2 overflow-hidden z-50"
                        >
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={(e) => handleNavClick(e, item.href)}
                              className="px-4 py-2.5 text-xs font-semibold hover:bg-emerald-50 flex items-center justify-between text-gray-700 hover:text-emerald-900 transition-colors"
                            >
                              <span>{item.label}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-emerald-600 text-white font-bold shadow-md"
                      : "text-gray-800 hover:text-black hover:bg-black/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Search & Get in Touch Pill Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              aria-label="Search"
              className="p-1.5 text-gray-700 hover:text-black transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            <div className="w-[1px] h-4 bg-gray-300" />

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold tracking-wide transition-all shadow-md group whitespace-nowrap"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-black/5 text-gray-800 hover:bg-black/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden max-w-7xl mx-auto mt-2 bg-white/95 backdrop-blur-xl text-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-200/80 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 rounded-xl bg-gray-100/80 text-sm font-medium text-gray-900 hover:bg-emerald-50 hover:text-emerald-900"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-center text-sm shadow-md mt-2"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
