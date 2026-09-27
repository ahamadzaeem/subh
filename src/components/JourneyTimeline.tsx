"use client";

import React from "react";
import { motion } from "framer-motion";
import { TIMELINE_MILESTONES } from "@/data/companyData";

export default function JourneyTimeline() {
  return (
    <section id="journey" className="py-24 bg-[#fbfbf8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0b3322]/10 border border-[#0b3322]/20 text-[#0b3322]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0b3322]" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase">
              OUR JOURNEY & HERITAGE
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b3322] tracking-tight">
            25+ Years of <span className="text-[#155c3d]">Moving Forward.</span>
          </h2>

          <p className="text-base text-[#4a5951] leading-relaxed">
            From a regional produce trade setup in Vaikom, Alappuzha to an established international merchant exporter serving global markets.
          </p>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Central Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-0.5 bg-[#d8d2c2] sm:-translate-x-1/2 z-0" />

          <div className="flex flex-col gap-12 sm:gap-16 relative z-10">
            {TIMELINE_MILESTONES.map((m, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Box */}
                  <div className="w-full sm:w-1/2 pl-10 sm:pl-0 sm:px-8">
                    <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#e8e4d8] shadow-md hover:shadow-xl transition-shadow flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-widest text-[#155c3d]">
                          {m.yearLabel}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#0b3322]/10 text-[10px] font-bold text-[#0b3322]">
                          {m.badge}
                        </span>
                      </div>

                      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0b3322]">
                        {m.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#4a5951] leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>

                  {/* Circle Dot Marker */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0b3322] border-4 border-[#fbfbf8] shadow-md flex items-center justify-center text-emerald-400 font-bold text-xs mt-6 sm:mt-8">
                    •
                  </div>

                  {/* Empty side filler for desktop balance */}
                  <div className="hidden sm:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
