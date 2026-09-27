"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCTS_DATA } from "@/data/companyData";

export default function ProductGallery() {
  return (
    <section id="products" className="py-20 bg-[#fbfbf8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching reference image */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#155c3d]">
              OUR PRODUCTS
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0b3322] tracking-tight">
              Quality Produce <br className="hidden sm:inline" />
              <span className="text-[#155c3d]">from India to the World</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#4a5951] leading-relaxed">
              We export a wide range of fresh fruits, vegetables and agricultural products, sourced from trusted farms and delivered with care.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#contact"
              className="text-xs font-bold text-[#0b3322] hover:text-[#155c3d] flex items-center gap-1"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="hidden sm:flex items-center gap-2">
              <button
                aria-label="Previous Products"
                className="w-8 h-8 rounded-full border border-[#d8d2c2] bg-white flex items-center justify-center text-[#0b3322] hover:bg-[#0b3322] hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                aria-label="Next Products"
                className="w-8 h-8 rounded-full border border-[#d8d2c2] bg-white flex items-center justify-center text-[#0b3322] hover:bg-[#0b3322] hover:text-white transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 5 Produce Cards Horizontal Carousel / Grid matching reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {PRODUCTS_DATA.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#e8e4d8] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="relative aspect-[4/3] bg-[#0b3322] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4 bg-white flex items-center justify-center text-center">
                <h3 className="font-heading text-xs font-extrabold text-[#0b3322] group-hover:text-[#155c3d] transition-colors">
                  {product.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
