"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sprout, CheckCircle2, Box, Ship } from "lucide-react";
import { PROCESS_STAGES } from "@/data/companyData";

const ICON_MAP: Record<string, React.ElementType> = {
  Sprout,
  CheckCircle2,
  Box,
  Ship,
};

export default function ExportProcess() {
  return (
    <section id="process" className="py-24 bg-[#0b3322] text-white relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-800/40 hidden lg:block -translate-y-1/2 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase">
              EXPORT SUPPLY CHAIN
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Farm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-amber-200">to Market.</span>
          </h2>

          <p className="text-base text-emerald-200/80 leading-relaxed">
            Our streamlined four-stage supply workflow maintains maximum produce integrity from harvest field to international port.
          </p>
        </div>

        {/* 4 Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STAGES.map((stage, idx) => {
            const IconComp = ICON_MAP[stage.icon] || Sprout;
            return (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#051c12] rounded-3xl p-7 border border-emerald-800/40 flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading text-3xl font-black text-emerald-400 opacity-90">
                      {stage.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-900/60 border border-emerald-700/50 text-emerald-300 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-[#0b3322] transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-xs font-extrabold tracking-widest text-emerald-400 uppercase block mb-1">
                    {stage.title}
                  </span>

                  <h3 className="font-heading text-lg font-bold text-white mb-3">
                    {stage.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-emerald-200/70 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-emerald-900/60 flex items-center gap-2 text-[11px] font-bold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Stage {idx + 1} Verified Protocol</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
