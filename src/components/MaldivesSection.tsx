"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Plane, Ship, Anchor, CheckCircle } from "lucide-react";

export default function MaldivesSection() {
  return (
    <section className="py-24 bg-[#0b3322] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Coastline / Island Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-800/40 aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop"
                alt="Maldives Tropical Island Export Destination"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b3322]/80 via-transparent to-transparent" />

              {/* Route Pin Overlay */}
              <div className="absolute top-6 left-6 bg-emerald-950/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-emerald-500/40 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-amber-400 animate-ping" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">
                    DIRECT EXPORT CORRIDOR
                  </span>
                  <span className="text-xs font-black text-white uppercase tracking-wider">
                    KERALA ➔ MALDIVES
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase">
                PRIMARY DESTINATION SPOTLIGHT
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Freshness <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-amber-200">
                Across the Sea.
              </span>
            </h2>

            <p className="text-base text-emerald-200/90 leading-relaxed">
              From Kerala's lush inland farms to island resort markets in the Maldives, our supply network is engineered around freshness, strict climate control, and on-time maritime dispatch.
            </p>

            <div className="flex flex-col gap-3 w-full bg-[#051c12] p-5 rounded-2xl border border-emerald-800/40">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-emerald-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Consignment custom-sorted for luxury resorts & local distributors</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-emerald-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Daily produce consolidation at Vaikom sorting hub</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-emerald-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Direct sea freight to Malé port with minimal transit duration</span>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-emerald-500 text-[#0b3322] text-xs font-bold tracking-wide hover:bg-emerald-400 transition-all shadow-md group"
            >
              <span>Explore Our Export Markets</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
