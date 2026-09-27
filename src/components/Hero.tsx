"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] lg:min-h-[92vh] pt-32 pb-20 flex items-center bg-[#fbfbf8] text-[#111827] overflow-hidden"
    >
      {/* Exact User Provided Hero Section Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-agri-bg.png"
          alt="Subhashini Industries Hero Export Banner"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Subtle left gradient overlay ensuring 100% crisp black text legibility over the farm landscape */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent w-full lg:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl flex flex-col items-start gap-5">
          {/* Eyebrow Label matching reference template */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] font-black tracking-[0.25em] uppercase text-[#374151]">
              {COMPANY_INFO.eyebrow}
            </span>
          </motion.div>

          {/* Main Title matching reference template */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.98] text-[#111827]">
              SUBHASHINI <br />
              INDUSTRIES <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111827]">PVT. LTD</span>
            </h1>
          </motion.div>

          {/* Subheading matching reference template */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[#1f2937]"
          >
            {COMPANY_INFO.heroSubheading}
          </motion.h2>

          {/* Description Paragraph matching reference template */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base text-[#374151] leading-relaxed max-w-lg font-medium"
          >
            {COMPANY_INFO.heroDescription}
          </motion.p>

          {/* CTA Pill Button matching reference template */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-2"
          >
            <button
              onClick={() => scrollToSection("ventures")}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#0b3322] hover:bg-[#155c3d] text-white text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-xl group"
            >
              <span>Explore Our Group</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
