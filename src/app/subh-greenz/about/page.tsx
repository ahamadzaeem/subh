"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Leaf, 
  ShoppingCart, 
  Heart, 
  Tag, 
  Store, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  Users, 
  ArrowRight,
  Smile
} from "lucide-react";
import SubhGreenzNavbar from "@/components/SubhGreenzNavbar";
import SubhGreenzFooter from "@/components/SubhGreenzFooter";

export default function SubhGreenzAboutPage() {
  return (
    <div className="min-h-screen font-sans bg-[#02042e] text-white selection:bg-[#2fb562] selection:text-white overflow-x-hidden relative">
      
      {/* Fixed Parallax Background Image */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/subh-greenz-main-bg.png"
          alt="Subh Greenz Background"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-[#02042e]/35" />
      </div>

      <SubhGreenzNavbar />

      {/* Hero Header Section */}
      <section className="relative z-20 pt-20 pb-16 px-4 sm:px-6 lg:px-12 text-center bg-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0f4022]/90 border border-[#2fb562]/40 text-xs font-black tracking-widest text-[#2fb562] uppercase mb-6 backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2fb562]" />
            <span>ABOUT SUBH GREENZ HYPERMARKET</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
          >
            Bringing Fresh, Healthy & <span className="text-[#2fb562]">Reliable Choices</span> to Every Family.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-medium"
          >
            Subh Greenz is a premier modern hypermarket venture under Subhashini Enterprises, dedicated to elevating everyday grocery shopping with farm-fresh produce, organic foods, and daily essentials.
          </motion.p>
        </div>
      </section>

      {/* Store Showcase & Story Section */}
      <section className="relative z-20 py-12 px-4 sm:px-6 lg:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Store Image */}
            <div className="lg:col-span-6 relative min-h-[400px] lg:min-h-[500px] rounded-[36px] lg:rounded-tr-[120px] overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src="/images/subh-greenz-about-interior.png"
                alt="Subh Greenz Hypermarket Interior"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Right Story Content */}
            <div className="lg:col-span-6 flex flex-col justify-center px-2 lg:px-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#2fb562]" />
                <span className="text-xs font-bold tracking-widest text-[#2fb562] uppercase">Our Journey & Philosophy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                From Local Roots to a Modern <span className="text-[#2fb562]">Hypermarket Experience</span>.
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Rooted in Vaikom, Kerala, Subh Greenz was founded to bridge the gap between local farming excellence and modern retail convenience. Leveraging Subhashini Enterprises' 25-year agricultural export heritage, we source produce directly from trusted local farmers and cold-chain supply routes.
              </p>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                Our spacious, state-of-the-art store provides a seamless shopping environment where hygiene, variety, affordable pricing, and customer satisfaction come together under one roof.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#030d22]/90 border border-[#2fb562]/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2fb562]/20 text-[#2fb562] flex items-center justify-center font-bold">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Direct Sourcing</h4>
                    <p className="text-xs text-gray-400">Zero Middlemen</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#030d22]/90 border border-[#2fb562]/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2fb562]/20 text-[#2fb562] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Daily QA Checks</h4>
                    <p className="text-xs text-gray-400">100% Guaranteed</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="relative z-20 py-16 px-4 sm:px-6 lg:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#2fb562]" />
              <span className="text-xs font-black tracking-widest text-[#2fb562] uppercase">OUR PROMISE TO YOU</span>
              <span className="w-8 h-[2px] bg-[#2fb562]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">What Sets <span className="text-[#2fb562]">Subh Greenz Apart</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Leaf,
                title: "Farm Fresh Daily",
                desc: "Harvested fresh and restocked every morning directly from Kerala's greenest farms."
              },
              {
                icon: ShoppingCart,
                title: "Wide Variety",
                desc: "Over 10,000+ items across groceries, dairy, snacks, personal care, and household items."
              },
              {
                icon: Tag,
                title: "Best Value Prices",
                desc: "Unbeatable daily deals, bundled savings, and member rewards for maximum affordability."
              },
              {
                icon: Smile,
                title: "Warm Service",
                desc: "Friendly, helpful staff and easy checkout lines designed to make shopping a delight."
              }
            ].map((pillar, i) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={i} 
                  className="bg-[#030d22]/90 backdrop-blur-md border border-[#2fb562]/30 hover:border-[#2fb562] p-6 rounded-3xl transition-all hover:bg-[#061535] group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#2fb562]/15 text-[#2fb562] flex items-center justify-center mb-5 border border-[#2fb562]/30 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative z-20 py-16 px-4 sm:px-6 lg:px-12 bg-transparent">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#0f4022] to-[#041d0e] rounded-[35px] p-8 sm:p-12 border border-[#2fb562]/40 shadow-2xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Visit Subh Greenz Today</h2>
            <p className="text-gray-200 text-sm sm:text-base mb-8">Experience freshness, variety, and savings under one roof at our Vaikom store.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/subh-greenz/contact"
                className="bg-[#2fb562] hover:bg-[#28c76f] text-[#02042e] px-8 py-3.5 rounded-full font-black text-sm tracking-wide transition-all shadow-lg hover:scale-105"
              >
                Store Location & Contact
              </Link>
              <Link
                href="/subh-greenz/careers"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-full font-bold text-sm transition-all"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SubhGreenzFooter />
    </div>
  );
}
