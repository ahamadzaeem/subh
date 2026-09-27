"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  {
    label: "Our Businesses",
    href: "#ventures",
    hasDropdown: true,
    dropdownItems: [
      { label: "Subh Greenz Hypermarket", href: "#ventures" },
      { label: "Shiva Exporting", href: "#ventures" },
      { label: "Subhashini Tower", href: "#ventures" },
    ],
  },
  { label: "Products", href: "#products" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Gallery", href: "#gallery" },
  { label: "News & Updates", href: "#news" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setBusinessesOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
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
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 sm:gap-6">
        {/* Left Side: MUCH BIGGER Logo with Rounded Edges */}
        <Link
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="relative h-16 sm:h-20 w-48 sm:w-64 shrink-0 group rounded-3xl overflow-hidden shadow-2xl border-2 border-white/30 bg-black transition-all hover:scale-105 hover:border-emerald-400"
        >
          <Image
            src="/images/logo-cropped.png"
            alt="Subhashini Industries Official Logo"
            fill
            priority
            className="object-contain p-2"
          />
        </Link>

        {/* Center / Right: Floating Black Navigation Pill Bar */}
        <div className="bg-[#0a0a0a]/95 backdrop-blur-md border border-white/20 shadow-2xl rounded-full px-5 py-2.5 sm:px-6 sm:py-3.5 flex items-center justify-between gap-3 text-white shrink">
          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setBusinessesOpen(true)}
                    onMouseLeave={() => setBusinessesOpen(false)}
                  >
                    <button
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 transition-all ${
                        isActive || businessesOpen
                          ? "bg-emerald-600 text-white font-bold shadow-md"
                          : "text-gray-200 hover:text-white hover:bg-white/15"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {businessesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-[#121212] text-white rounded-2xl shadow-2xl border border-white/20 py-2 overflow-hidden z-50"
                        >
                          {link.dropdownItems?.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={(e) => scrollToSection(e, item.href)}
                              className="px-4 py-2.5 text-xs font-semibold hover:bg-white/10 flex items-center justify-between text-gray-100 hover:text-white transition-colors"
                            >
                              <span>{item.label}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-emerald-600 text-white font-bold shadow-md"
                      : "text-gray-200 hover:text-white hover:bg-white/15"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Search & Get in Touch Pill Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              aria-label="Search"
              className="p-1.5 text-gray-200 hover:text-white transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            <div className="w-[1px] h-4 bg-white/25" />

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-wide transition-all shadow-md group whitespace-nowrap"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/15 text-white hover:bg-white/25"
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
            className="lg:hidden max-w-7xl mx-auto mt-2 bg-[#121212] text-white rounded-3xl p-6 shadow-2xl border border-white/20 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-4 py-2.5 rounded-xl bg-white/10 text-sm font-medium text-white hover:bg-white/20"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-center text-sm shadow-md mt-2"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
