"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#fbfbf8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text & Stats Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start gap-6"
          >
            {/* Eyebrow */}
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#155c3d]">
              ABOUT US
            </span>

            {/* Title */}
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#0b3322] tracking-tight leading-[1.12]">
              A Legacy of Trust. <br />
              <span className="text-[#155c3d]">A Future of Possibilities.</span>
            </h2>

            {/* Description matching exact reference document text */}
            <p className="text-sm sm:text-base text-[#4a5951] leading-relaxed max-w-2xl">
              Subhashini Enterprises, a dedicated merchant exporter based out of Vaikom, Alappuzha, Kerala, has established a reputable 25-year legacy in connecting India's rich agricultural produce with international markets. Driven by a commitment to high-quality standards and efficient supply chain management, the firm has successfully navigated the challenges of exporting highly perishable fresh produce.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#journey"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#0b3322] text-white text-xs font-bold tracking-wide hover:bg-[#155c3d] transition-all shadow-md group"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* 4 Stat Grid matching reference layout */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full pt-8 border-t border-[#e8e4d8] mt-4">
              {COMPANY_INFO.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-heading text-3xl sm:text-4xl font-black text-[#0b3322]">
                    {stat.number}
                  </span>
                  <span className="text-xs font-bold text-[#4a5951] mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Kerala Houseboat Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#e8e4d8] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop"
                alt="Kerala Backwaters Houseboat Vaikom Alappuzha"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
