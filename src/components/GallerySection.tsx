"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_IMAGES, GalleryItem } from "@/data/companyData";
import LightboxModal from "./LightboxModal";
import NewsSection from "./NewsSection";

export default function GallerySection() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 bg-[#fbfbf8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Gallery "Moments from Our Journey" */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#155c3d] block">
                  GALLERY
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0b3322]">
                  Moments from Our Journey
                </h2>
              </div>

              {/* Navigation Arrows matching reference image */}
              <div className="flex items-center gap-2">
                <button
                  aria-label="Previous"
                  className="w-8 h-8 rounded-full border border-[#d8d2c2] bg-white flex items-center justify-center text-[#0b3322] hover:bg-[#0b3322] hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  aria-label="Next"
                  className="w-8 h-8 rounded-full border border-[#d8d2c2] bg-white flex items-center justify-center text-[#0b3322] hover:bg-[#0b3322] hover:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 4 Image Grid matching reference layout */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {GALLERY_IMAGES.slice(0, 4).map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  onClick={() => setActiveItem(item)}
                  className="editorial-card group relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#0b3322] cursor-pointer shadow-md hover:shadow-xl border border-[#e8e4d8] transition-all"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="editorial-card-image object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                  <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/80 text-[#0b3322] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-heading text-xs font-bold text-white line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: News & Updates "Latest from Subhashini" */}
          <div id="news" className="lg:col-span-5">
            <NewsSection />
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
}
