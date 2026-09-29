"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Store, 
  Truck, 
  CheckCircle2, 
  Headset,
  Sparkles,
  ArrowRight
} from "lucide-react";
import SubhGreenzNavbar from "@/components/SubhGreenzNavbar";
import SubhGreenzFooter from "@/components/SubhGreenzFooter";

export default function SubhGreenzContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
            <Headset className="w-3.5 h-3.5 text-[#2fb562]" />
            <span>SUBH GREENZ CUSTOMER & STORE DESK</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
          >
            Visit Our Store or <span className="text-[#2fb562]">Get in Touch</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Have questions about products, store hours, home delivery, or supplier onboarding? Our store desk is ready to help.
          </motion.p>
        </div>
      </section>

      {/* Main Content: Store Cards & Form */}
      <section className="relative z-20 py-12 px-4 sm:px-6 lg:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Store Locations & Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Flagship Store Card */}
              <div className="bg-[#030d22]/90 backdrop-blur-md border border-[#2fb562]/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2fb562]/20 border border-[#2fb562]/40 text-xs font-bold text-[#2fb562]">
                    <Store className="w-3.5 h-3.5" />
                    <span>FLAGSHIP HYPERMARKET</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#2fb562] animate-ping" />
                    Open Today
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Subh Greenz Hypermarket</h3>
                <p className="text-xs text-gray-400 mb-6">Vaikom Branch</p>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-[#2fb562] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">St. Joseph Building, Near Private Bus Stand, Vaikom, Alappuzha, Kerala - 686141</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <Clock className="w-5 h-5 text-[#2fb562] shrink-0" />
                    <span>8:00 AM – 10:00 PM (Monday - Sunday)</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-[#2fb562] shrink-0" />
                    <span>Store Desk: +91 98471 23456</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <Truck className="w-5 h-5 text-[#2fb562] shrink-0" />
                    <span>Home Delivery Hotline: +91 98471 23457</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-[#2fb562] shrink-0" />
                    <span>Email: greenz@subhashinienterprises.com</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-400">Home Delivery Radius: <strong>10 km</strong></span>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-[#2fb562] hover:underline flex items-center gap-1"
                  >
                    <span>Get Directions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Vendor & Supplier Card */}
              <div className="bg-[#0f4022]/60 backdrop-blur-md border border-[#2fb562]/30 rounded-3xl p-6 shadow-xl">
                <h4 className="text-lg font-bold text-white mb-2">Farmer & Supplier Registration</h4>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  Are you a local organic farmer or food product manufacturer? Partner with Subh Greenz for direct shelf placement.
                </p>
                <div className="text-xs font-bold text-[#2fb562]">
                  Supplier Desk: procurement@subhashinienterprises.com
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#030d22]/90 backdrop-blur-md border border-[#2fb562]/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#2fb562]" />

                <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-8">Fill out the details below and our store management will get back to you promptly.</p>

                {isSubmitted ? (
                  <div className="py-12 flex flex-col items-center text-center bg-[#0f4022]/40 rounded-2xl border border-[#2fb562]/30">
                    <div className="w-16 h-16 rounded-full bg-[#2fb562]/20 text-[#2fb562] flex items-center justify-center mb-4 border border-[#2fb562]/40">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h4>
                    <p className="text-gray-300 text-sm max-w-sm">Thank you for reaching out to Subh Greenz. Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-300">Inquiry Type *</label>
                      <select required className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-[#030d22] focus:outline-none focus:border-[#2fb562] text-sm text-white">
                        <option value="">Select Topic...</option>
                        <option value="delivery">Home Delivery Request</option>
                        <option value="product">Product Availability Check</option>
                        <option value="feedback">Customer Feedback / Suggestion</option>
                        <option value="vendor">Farmer / Supplier Onboarding</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-300">Full Name *</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:border-[#2fb562] text-sm text-white" placeholder="John Doe" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-300">Phone Number *</label>
                        <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:border-[#2fb562] text-sm text-white" placeholder="+91 98765 43210" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-300">Email Address</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:border-[#2fb562] text-sm text-white" placeholder="john@example.com" />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-300">Message / Delivery Request Details *</label>
                      <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:border-[#2fb562] text-sm text-white resize-none" placeholder="Type your message or requested items here..."></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2fb562] hover:bg-[#28c76f] text-[#02042e] font-black text-sm tracking-wide shadow-lg transition-all flex items-center justify-center gap-2 group"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <SubhGreenzFooter />
    </div>
  );
}
