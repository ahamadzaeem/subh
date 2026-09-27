"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Sprout, Recycle, ArrowRight } from "lucide-react";

export default function SustainabilitySection() {
  const CARDS = [
    {
      title: "Sustainable Sourcing",
      icon: Leaf,
    },
    {
      title: "Supporting Farmers",
      icon: Sprout,
    },
    {
      title: "Reducing Environmental Impact",
      icon: Recycle,
    },
  ];

  return (
    <section id="sustainability" className="py-20 bg-[#fbfbf8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-[#0b3322] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-emerald-800/40 min-h-[440px] flex items-center"
        >
          {/* Background Agricultural Farm Field Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop"
              alt="Sustainable Farming Harvest Background"
              fill
              className="object-cover opacity-40 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b3322] via-[#0b3322]/85 to-transparent w-full lg:w-3/5" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start gap-4">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-emerald-400">
                SUSTAINABILITY
              </span>

              <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.12]">
                Growing Responsibly <br />
                <span className="text-emerald-300">for a Healthier Tomorrow</span>
              </h2>

              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-xl">
                We are committed to sustainable practices that support farmers, protect natural resources and ensure a better future for generations to come.
              </p>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-[#051c12] hover:bg-emerald-950 border border-emerald-500/40 text-white text-xs font-bold tracking-wide transition-all shadow-md group"
                >
                  <span>Our Commitment</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-emerald-400" />
                </a>
              </div>
            </div>

            {/* Right 3 Cards Grid matching reference screenshot */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CARDS.map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/60 text-[#0b3322] flex flex-col items-center justify-center text-center gap-3 shadow-lg hover:bg-white transition-all min-h-[140px]"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#0b3322]/10 text-[#0b3322] flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-xs sm:text-sm font-extrabold leading-snug">
                      {card.title}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
