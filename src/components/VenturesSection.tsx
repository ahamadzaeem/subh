"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Leaf,
  Users,
  MapPin,
  Globe,
  ShieldCheck,
  Container,
  BarChart,
  ShoppingBag,
  Building,
  ArrowRight,
} from "lucide-react";
import { VENTURES_DATA, Venture } from "@/data/companyData";

const ICON_COMPONENTS: Record<string, React.ElementType> = {
  ShoppingCart,
  Leaf,
  Users,
  MapPin,
  Globe,
  ShieldCheck,
  Container,
  BarChart,
  ShoppingBag,
  Building,
};

// Clean custom logos for the 3 businesses matching reference template
const VENTURE_LOGOS: Record<string, { logoTitle: string; logoSub: string; logoIconColor: string; bgImage: string }> = {
  "subh-greenz": {
    logoTitle: "subh Greenz",
    logoSub: "HYPER MARKET",
    logoIconColor: "text-emerald-400",
    bgImage: "/images/subh-greenz-clean.png",
  },
  "shiva-exporting": {
    logoTitle: "Shiva",
    logoSub: "EXPORTING",
    logoIconColor: "text-red-500",
    bgImage: "/images/shiva-exporting-clean.png",
  },
  "subhashini-tower": {
    logoTitle: "Subhashini",
    logoSub: "TOWER",
    logoIconColor: "text-sky-400",
    bgImage: "/images/subhashini-tower-clean.png",
  },
};

export default function VenturesSection() {
  return (
    <section id="ventures" className="py-20 bg-[#fcfbf7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching reference template */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-[11px] font-extrabold tracking-[0.25em] text-[#155c3d] uppercase">
            <span className="w-6 h-[1px] bg-[#155c3d]" />
            <span>OUR BUSINESSES</span>
            <span className="w-6 h-[1px] bg-[#155c3d]" />
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black text-[#0b3322] tracking-tight mt-1">
            A Diverse Group. <br className="hidden sm:inline" />
            <span className="text-[#155c3d]">A Stronger Tomorrow.</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#4a5951] leading-relaxed max-w-2xl mt-1">
            Subhashini Industries and its group of businesses work together to deliver quality, value and growth across global markets and local communities.
          </p>
        </div>

        {/* 3 Business Cards Grid matching landing page design.png 100% */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VENTURES_DATA.map((venture, index) => (
            <VentureCard key={venture.id} venture={venture} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VentureCard({ venture, index }: { venture: Venture; index: number }) {
  const customLogo = VENTURE_LOGOS[venture.id] || {
    logoTitle: venture.name,
    logoSub: "",
    logoIconColor: "text-emerald-500",
    bgImage: venture.image,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="editorial-card group bg-white rounded-3xl overflow-hidden shadow-lg border border-[#e8e4d8] flex flex-col justify-between hover:shadow-2xl transition-all duration-500"
    >
      <div>
        {/* Top Image Banner Header */}
        <div className="relative aspect-[16/10] bg-[#0b3322] overflow-hidden">
          <Image
            src={customLogo.bgImage}
            alt={venture.name}
            fill
            priority
            className="editorial-card-image object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

          {/* Badge Label */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-widest text-[#0b3322] shadow-sm">
              {venture.badge}
            </span>
          </div>

          {/* Business Logo Header inside image matching template */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2.5">
            {venture.id === "subh-greenz" ? (
              <div className="relative w-44 h-12">
                <Image
                  src="/images/subh-greenz-logo-transparent.png"
                  alt="subh Greenz HYPER MARKET"
                  fill
                  className="object-contain object-left filter drop-shadow-lg"
                />
              </div>
            ) : (
              <>
                <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center shadow-md shrink-0">
                  <span className={`font-black text-xl font-heading ${customLogo.logoIconColor}`}>
                    {venture.name.charAt(0)}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight leading-none drop-shadow-md">
                    {customLogo.logoTitle}
                  </span>
                  <span className="text-[10px] font-black tracking-[0.2em] text-emerald-300 uppercase leading-tight mt-0.5">
                    {customLogo.logoSub}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Card Body Text & Button */}
        <div className="p-6 sm:p-7 flex flex-col gap-4">
          <h3 className="font-heading text-xl font-bold text-[#0b3322] leading-snug">
            {venture.tagline}
          </h3>

          <p className="text-xs sm:text-sm text-[#4a5951] leading-relaxed min-h-[64px]">
            {venture.description}
          </p>

          <div className="pt-2">
            <Link
              href={venture.href || "/contact"}
              className={`inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-white text-xs font-bold transition-all shadow-md group-hover:scale-105 ${venture.buttonBg}`}
            >
              <span>{venture.buttonText}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom 4 Feature Icons Bar matching reference template */}
      <div className="border-t border-[#e8e4d8] bg-[#fbfbf8] px-3 py-3.5 grid grid-cols-4 gap-1 text-center">
        {venture.features.map((feat) => {
          const IconComp = ICON_COMPONENTS[feat.iconName] || Leaf;
          return (
            <div key={feat.label} className="flex flex-col items-center gap-1">
              <div className="w-7 h-7 rounded-full bg-[#0b3322]/5 text-[#0b3322] flex items-center justify-center">
                <IconComp className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] font-bold text-[#374151] leading-tight">
                {feat.label}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
