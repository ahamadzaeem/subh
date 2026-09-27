"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function LegacyJourneyBanner() {
  return (
    <section className="py-12 bg-[#fbfbf8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-[#0b3322] text-white overflow-hidden shadow-2xl border border-emerald-800/40 min-h-[400px] flex items-center"
        >
          {/* Background Historic Kerala Architecture & Palm Trees Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop"
              alt="Kerala Historic Heritage Architecture"
              fill
              className="object-cover opacity-30 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b3322] via-[#0b3322]/90 to-transparent w-full lg:w-2/3" />
          </div>

          {/* Right Content Overlay */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl flex flex-col items-start gap-4">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-emerald-400">
              OUR JOURNEY
            </span>

            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.15]">
              From a Regional Trade Setup <br />
              <span className="text-emerald-300">to a Global Presence</span>
            </h2>

            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              Sanu Sneeharan, the foundational leader behind Subhashini Enterprises, steered the company's operations as its primary executive officer. Under his direction, the business transitioned from a regional trade setup in Kerala into an established international merchant exporter specializing in perishable fresh produce.
            </p>

            <div className="pt-2">
              <a
                href="#journey"
                className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-white text-[#0b3322] text-xs font-bold tracking-wide hover:bg-emerald-100 transition-all shadow-md group"
              >
                <span>Our Story</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
