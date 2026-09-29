"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SubhGreenzNavbar() {
  const pathname = usePathname();
  const [businessesOpen, setBusinessesOpen] = useState(false);

  const businessItems = [
    { label: "Subh Greenz Hypermarket", href: "/subh-greenz" },
    { label: "Shiva Exporting", href: "/#ventures" },
    { label: "Subhashini Tower", href: "/#ventures" },
  ];

  return (
    <header className="sticky top-0 z-50 py-4 sm:py-5 px-4 sm:px-6 lg:px-10 bg-transparent transition-all duration-300">
      <div className="w-full max-w-[1440px] mx-auto relative flex items-center justify-between min-h-[4.5rem] sm:min-h-[5rem]">
        
        {/* Left: Subh Greenz Logo (Extra Large & Prominent) */}
        <div className="flex items-center shrink-0 z-20">
          <Link href="/subh-greenz" className="relative block h-20 sm:h-24 w-72 sm:w-96 shrink-0 transition-transform hover:scale-105">
            <Image
              src="/images/subh-greenz-logo-transparent.png"
              alt="subh Greenz HYPER MARKET"
              fill
              priority
              className="object-contain object-left filter brightness-125 drop-shadow-[0_4px_20px_rgba(255,255,255,0.45)]"
            />
          </Link>
        </div>

        {/* Center: Floating White Glass Pill Navbar */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-2xl border border-gray-200/90 shadow-2xl shadow-black/40 rounded-full px-5 py-2.5 items-center gap-3 z-30">
          
          {/* Navigation Links inside White Pill */}
          <nav className="flex items-center gap-1 sm:gap-1.5 relative">
            <Link
              href="/subh-greenz"
              className={`px-4 py-2 rounded-full text-sm sm:text-[15px] font-extrabold tracking-tight transition-all whitespace-nowrap ${
                pathname === "/subh-greenz"
                  ? "bg-[#00a859] text-white shadow-lg shadow-[#00a859]/35"
                  : "text-gray-800 hover:text-[#00a859] hover:bg-gray-100/90"
              }`}
            >
              Home
            </Link>

            <Link
              href="/subh-greenz/about"
              className={`px-4 py-2 rounded-full text-sm sm:text-[15px] font-extrabold tracking-tight transition-all whitespace-nowrap ${
                pathname === "/subh-greenz/about"
                  ? "bg-[#00a859] text-white shadow-lg shadow-[#00a859]/35"
                  : "text-gray-800 hover:text-[#00a859] hover:bg-gray-100/90"
              }`}
            >
              About Us
            </Link>

            {/* Our Businesses Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={() => setBusinessesOpen(true)}
              onMouseLeave={() => setBusinessesOpen(false)}
            >
              <button
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm sm:text-[15px] font-extrabold tracking-tight text-gray-800 hover:text-[#00a859] hover:bg-gray-100/90 transition-all whitespace-nowrap"
              >
                <span>Our Businesses</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${businessesOpen ? "rotate-180 text-[#00a859]" : ""}`} />
              </button>

              <AnimatePresence>
                {businessesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-gray-200/90 p-2 z-50"
                  >
                    {businessItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setBusinessesOpen(false)}
                        className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-gray-800 hover:bg-[#00a859]/10 hover:text-[#00a859] transition-all group"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-4 h-4 text-[#00a859] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/subh-greenz/careers"
              className={`px-4 py-2 rounded-full text-sm sm:text-[15px] font-extrabold tracking-tight transition-all whitespace-nowrap ${
                pathname === "/subh-greenz/careers"
                  ? "bg-[#00a859] text-white shadow-lg shadow-[#00a859]/35"
                  : "text-gray-800 hover:text-[#00a859] hover:bg-gray-100/90"
              }`}
            >
              Careers
            </Link>

            <Link
              href="/subh-greenz/contact"
              className={`px-4 py-2 rounded-full text-sm sm:text-[15px] font-extrabold tracking-tight transition-all whitespace-nowrap ${
                pathname === "/subh-greenz/contact"
                  ? "bg-[#00a859] text-white shadow-lg shadow-[#00a859]/35"
                  : "text-gray-800 hover:text-[#00a859] hover:bg-gray-100/90"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Search & Cart Icons inside Pill */}
          <div className="flex items-center gap-1.5 text-gray-800 pl-2">
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-800 hover:text-[#00a859] transition-colors" aria-label="Search">
              <Search className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-800 hover:text-[#00a859] transition-colors" aria-label="Cart">
              <ShoppingCart className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Divider | */}
          <div className="w-[1.5px] h-6 bg-gray-300 mx-1.5" />

          {/* Green CTA Pill Button inside Pill */}
          <Link
            href="/subh-greenz/contact"
            className="inline-flex items-center gap-2 bg-[#00a859] hover:bg-[#008f4c] text-white px-6 py-2.5 rounded-full font-black text-sm tracking-wide transition-all shadow-lg shadow-[#00a859]/30 hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            <span>Visit Us</span>
            <ArrowRight className="w-4.5 h-4.5 stroke-[3]" />
          </Link>
        </div>

        {/* Right Mobile Quick Action */}
        <div className="flex lg:hidden items-center gap-3 z-20">
          <Link
            href="/subh-greenz/contact"
            className="inline-flex items-center gap-1.5 bg-[#00a859] text-white px-4 py-2 rounded-full font-extrabold text-xs shadow-md"
          >
            <span>Visit Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </header>
  );
}
