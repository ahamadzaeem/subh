"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { WHY_US_PILLARS } from "@/data/companyData";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#f6f5ef] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Large Agricultural Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#e8e4d8] shadow-2xl aspect-[3/4]">
              <Image
                src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=1200&auto=format&fit=crop"
                alt="Subhashini Quality Inspection & Packing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b3322] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 text-[#0b3322]">
                <span className="text-xs font-black uppercase tracking-widest text-[#155c3d] block mb-1">
                  OUR COMMITMENT
                </span>
                <p className="font-heading font-extrabold text-base text-[#0b3322]">
                  "Zero Compromise on Quality & Speed"
                </p>
                <p className="text-xs text-[#4a5951] mt-1">
                  Connecting Kerala's finest growers with overseas resort chains and food distributors.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right 6 Pillars Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0b3322]/10 border border-[#0b3322]/20 text-[#0b3322]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0b3322]" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase">
                  WHY SUBHASHINI ENTERPRISES
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b3322] tracking-tight">
                Built Around <span className="text-[#155c3d]">Trust.</span>
              </h2>

              <p className="text-base text-[#4a5951] leading-relaxed">
                Over 25 years of steadfast dedication, honest farming partnerships, and reliable international logistics have established Subhashini Enterprises as a cornerstone merchant exporter.
              </p>
            </div>

            {/* 6 Numbered Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pt-4">
              {WHY_US_PILLARS.map((pillar, idx) => (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-[#e8e4d8] shadow-sm hover:shadow-md transition-shadow flex flex-col gap-2"
                >
                  <span className="font-heading text-2xl font-black text-emerald-600">
                    {pillar.number}
                  </span>
                  <h3 className="font-heading text-base font-bold text-[#0b3322]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#4a5951] leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
