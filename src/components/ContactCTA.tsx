"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-[#fbfbf8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-[#0b3322] text-white p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl border border-emerald-800/40 flex items-center"
        >
          {/* Produce Backdrop Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1400&auto=format&fit=crop"
              alt="Fresh Produce Export Background"
              fill
              className="object-cover opacity-25 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b3322] via-[#0b3322]/90 to-transparent w-full lg:w-3/4" />
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 w-full">
            <div className="flex flex-col items-start gap-2 max-w-2xl">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-emerald-400">
                GET IN TOUCH
              </span>

              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Build a Stronger Tomorrow Together.
              </h2>

              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                We are always open to new partnerships, opportunities and collaborations.
              </p>
            </div>

            <button
              onClick={scrollToContact}
              className="shrink-0 px-8 py-3.5 rounded-full bg-white text-[#0b3322] font-bold text-xs tracking-wide hover:bg-emerald-100 transition-all shadow-lg flex items-center justify-center gap-2 group"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
