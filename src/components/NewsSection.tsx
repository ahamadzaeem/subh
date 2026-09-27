"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NEWS_ITEMS } from "@/data/companyData";

export default function NewsSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#155c3d] block">
            NEWS & UPDATES
          </span>
          <h3 className="font-heading text-2xl font-extrabold text-[#0b3322]">
            Latest from Subhashini
          </h3>
        </div>

        <a
          href="#news"
          className="text-xs font-bold text-[#0b3322] hover:text-[#155c3d] flex items-center gap-1"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="flex flex-col gap-4">
        {NEWS_ITEMS.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white p-3 rounded-2xl border border-[#e8e4d8] shadow-sm hover:shadow-md transition-all flex items-center gap-4 group cursor-pointer"
          >
            <div className="relative w-20 h-16 rounded-xl overflow-hidden bg-[#0b3322] shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-[#155c3d] uppercase tracking-wider">
                {item.date}
              </span>
              <h4 className="font-heading text-xs sm:text-sm font-bold text-[#0b3322] group-hover:text-[#155c3d] transition-colors line-clamp-2">
                {item.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
