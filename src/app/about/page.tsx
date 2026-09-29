"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Globe,
  ShieldCheck,
  Building2,
  Users,
  Sprout,
  ArrowRight,
  CheckCircle2,
  Anchor,
  TrendingUp,
  MapPin,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPANY_INFO, TIMELINE_MILESTONES, WHY_US_PILLARS } from "@/data/companyData";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fcfbf7] text-[#1a1a1a] font-sans antialiased overflow-x-hidden selection:bg-emerald-600 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#fcfbf7] text-[#0b3322] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/about-hero.png"
            alt="Subhashini Enterprises Corporate Headquarters"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fcfbf7] via-[#fcfbf7]/90 to-transparent" />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-bold text-emerald-800 tracking-wider uppercase mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>ESTABLISHED 1999 | KERALA, INDIA</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-[#0b3322] leading-[1.1] mb-6"
            >
              Building a Legacy of <span className="text-amber-500">Global Trust</span> & Produce Excellence.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium mb-8"
            >
              From a dedicated regional produce merchant in Vaikom, Kerala to an international export power supplying premium fresh produce across the Indian Ocean and operating multi-sector commercial ventures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-[#0b3322] hover:bg-[#145337] text-white font-bold text-sm tracking-wide transition-all shadow-lg flex items-center gap-2 group"
              >
                <span>Connect With Leadership</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#ventures"
                className="px-7 py-3.5 rounded-full bg-white/80 hover:bg-white backdrop-blur-md border border-gray-200 text-[#0b3322] font-bold text-sm tracking-wide transition-all shadow-sm"
              >
                Explore Group Ventures
              </Link>
            </motion.div>
          </div>

          {/* Quick Metrics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-gray-200"
          >
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-100 hover:border-emerald-200 transition-colors shadow-sm"
              >
                <div className="text-3xl sm:text-4xl font-black font-heading text-emerald-700 mb-1">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-bold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Corporate Heritage Section */}
      <section className="py-20 md:py-28 bg-[#fcfbf7] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/10 aspect-[4/3]">
                <Image
                  src="/images/about-hero.png"
                  alt="Subhashini Corporate Facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md text-[#0b3322] border border-white/50 shadow-xl">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Headquarters & Export Processing
                  </div>
                  <div className="text-sm font-black font-heading mt-0.5">
                    St. Joseph Building, Vaikom, Kerala, India
                  </div>
                </div>
              </div>

              {/* Decorative Accent Pill */}
              <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-[#0b3322] text-white shadow-2xl border border-white/20">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
                  25+
                </div>
                <div>
                  <div className="text-xs font-bold">Years of Trust</div>
                  <div className="text-[10px] text-gray-300">Continuous Operations</div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold tracking-wider uppercase mb-4">
                <Building2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>Our 25-Year Legacy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-[#0b3322] leading-tight mb-6">
                Connecting India's Rich Agricultural Produce with International Markets.
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4 font-normal">
                Subhashini Enterprises, a dedicated merchant exporter based out of Vaikom, Alappuzha, Kerala, has established a reputable 25-year legacy. Driven by a commitment to high-quality standards and efficient supply chain management, the firm has successfully navigated the challenges of exporting highly perishable fresh goods.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                The Maldives represents one of the primary and most consistent export destinations for Subhashini Enterprises, where we supply core export products directly from Kerala's fertile soil to world-class resort chains and supermarkets.
              </p>

              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold font-heading text-[#0b3322] mb-2">Leadership: Sanu Sreedharan</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Sanu Sreedharan is the foundational leader behind Subhashini Enterprises, steering the company's operations as its primary executive officer. Under his direction, the business transitioned from a regional trade setup in Kerala into an established international merchant exporter specializing in perishable fresh produce.
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-bold text-emerald-700 mb-1">Key Leadership & Operational Focus</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    <strong>Strategic Growth:</strong> He has overseen the 25-year evolution of the firm, managing high-risk agricultural supply chains from their operational base at the St. Joseph Building in Vaikom, Alappuzha.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-[#0b3322] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight text-white">
              Built on Integrity, Driven by Quality.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Uncompromising Quality</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Multi-stage quality checks ensure every fruit, vegetable, and coconut shipped meets international food safety and export compliance standards.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Global Reach & Reliability</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Reliable distribution schedules connecting Cochin Port to international resort chains, supermarkets, and import houses across Maldives and beyond.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-400/40 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-sky-400/10 text-sky-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sprout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">Sustainable Partnerships</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Empowering smallholder farmers with fair trade prices, sustainable agricultural practices, and long-term economic stability in South India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold font-heading text-[#0b3322]">
              Recognized Export Standards & Accreditation
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Operating under strict regulatory standards prescribed by Indian & international food safety authorities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "APEDA Certified", desc: "Agri & Processed Food Products Export Development Authority" },
              { title: "FSSAI Compliant", desc: "Food Safety and Standards Authority of India" },
              { title: "ISO 22000 Certified", desc: "Food Safety Management System Standard" },
              { title: "Spices Board India", desc: "Authorized Spice & Produce Exporter" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#fcfbf7] border border-gray-200 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#0b3322] mb-1">{item.title}</h4>
                <p className="text-[11px] text-gray-500 leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#fcfbf7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-r from-[#0b3322] to-[#145337] text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-black font-heading mb-4">
                Partner with Subhashini Enterprises
              </h2>
              <p className="text-sm sm:text-base text-gray-200 mb-8 font-light">
                Looking for reliable, premium fresh produce exports or commercial partnerships? Reach out to our team today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-bold text-sm transition-all shadow-lg"
                >
                  Contact Trade Desk
                </Link>
                <Link
                  href="/careers"
                  className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/30 transition-all"
                >
                  Join Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
