"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Tag } from "lucide-react";
import { GalleryItem } from "@/data/companyData";

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function LightboxModal({ item, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-5xl w-full bg-[#051c12] rounded-3xl overflow-hidden border border-emerald-800/50 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-emerald-500 hover:text-[#0b3322] flex items-center justify-center transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Main Image Container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Metadata Footer */}
            <div className="p-6 bg-[#0b3322] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-emerald-800/40">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-[10px] font-extrabold uppercase tracking-widest text-emerald-300">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-200/80">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>

              <span className="text-xs text-emerald-300/60 font-mono">
                SUBHASHINI ENTERPRISES ARCHIVE
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
