"use client";

import React from "react";
import { Leaf, Globe, Handshake, Sprout } from "lucide-react";
import { motion } from "framer-motion";
import { TRUST_STRIP_ITEMS } from "@/data/companyData";

const ICON_MAP = {
  Leaf: Leaf,
  Globe: Globe,
  Handshake: Handshake,
  Sprout: Sprout,
};

export default function TrustStrip() {
  return (
    <section className="bg-[#fcfbf7] border-y border-[#e8e4d8] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_STRIP_ITEMS.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon as keyof typeof ICON_MAP] || Leaf;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#0b3322] text-[#22c55e] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div className="flex flex-col">
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#0b3322] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4a5951] mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
