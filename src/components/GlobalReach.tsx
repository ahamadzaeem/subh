"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function GlobalReach() {
  return (
    <section id="markets" className="py-20 bg-[#fbfbf8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column matching reference screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-start gap-6"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#155c3d]">
              GLOBAL REACH
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0b3322] tracking-tight leading-[1.15]">
              Exporting Freshness <br />
              <span className="text-[#155c3d]">to the World</span>
            </h2>

            <p className="text-sm sm:text-base text-[#4a5951] leading-relaxed">
              The Maldives represents one of the primary and most consistent export destinations for Subhashini Enterprises. Our products reach international markets with a commitment to quality, reliability and timely delivery.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#0b3322] text-white text-xs font-bold tracking-wide hover:bg-[#155c3d] transition-all shadow-md group"
              >
                <span>Our Export Markets</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right World Map Representation matching reference image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative aspect-[16/9] bg-[#f4f1ea] rounded-3xl border border-[#e8e4d8] p-6 overflow-hidden flex items-center justify-center shadow-inner"
          >
            {/* World Map Vector Silhouette */}
            <svg viewBox="0 0 1000 500" className="w-full h-full text-[#d8d2c2] fill-current">
              <path d="M150 120 Q180 100 240 130 T280 200 T220 280 T140 220 Z" />
              <path d="M260 290 Q300 280 340 330 T320 420 T270 450 T240 370 Z" />
              <path d="M450 140 Q520 120 580 160 T560 280 T480 300 T440 200 Z" />
              <path d="M600 120 Q700 80 820 140 T880 260 T760 300 T620 200 Z" />
              <path d="M780 340 Q840 330 880 380 T840 440 T760 410 Z" />
            </svg>

            {/* Global Location Pins */}
            <div className="absolute top-[28%] left-[55%] w-3 h-3 rounded-full bg-[#0b3322]" />
            <div className="absolute top-[35%] left-[30%] w-3 h-3 rounded-full bg-[#0b3322]" />
            <div className="absolute top-[48%] left-[78%] w-3 h-3 rounded-full bg-[#0b3322]" />
            <div className="absolute top-[22%] left-[62%] w-3 h-3 rounded-full bg-[#0b3322]" />

            {/* ROUTE SVG LAYER */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 500">
              {/* Kerala Pin (Origin) */}
              <g transform="translate(680, 260)">
                <circle r="14" fill="#155c3d" opacity="0.3" className="animate-ping" />
                <circle r="6" fill="#0b3322" />
              </g>

              {/* Maldives Pin (Destination) */}
              <g transform="translate(670, 320)">
                <circle r="18" fill="#b91c1c" opacity="0.3" className="animate-ping" />
                <circle r="8" fill="#b91c1c" />
              </g>

              {/* Route Curve */}
              <path
                d="M680,260 Q695,290 670,320"
                fill="none"
                stroke="#155c3d"
                strokeWidth="3"
                strokeDasharray="6 4"
                className="animate-dash-route"
              />
            </svg>

            {/* Maldives Highlight Badge with Circular Island Photo matching reference image */}
            <div className="absolute bottom-6 right-6 bg-white p-2.5 rounded-full shadow-2xl border border-[#e8e4d8] flex items-center gap-3 pr-5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-600 shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=400&auto=format&fit=crop"
                  alt="Maldives Island"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-[#b91c1c]">
                <MapPin className="w-4 h-4 fill-current" />
                <span className="font-heading font-black text-sm text-[#0b3322]">Maldives</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
