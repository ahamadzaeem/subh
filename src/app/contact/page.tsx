"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Building2,
  Globe2,
  Headset,
  CheckCircle2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPANY_INFO } from "@/data/companyData";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, this would send data to an API
    setTimeout(() => setIsSubmitted(false), 5000); // Reset form after 5 seconds
  };

  return (
    <div className="min-h-screen bg-[#fcfbf7] text-[#1a1a1a] font-sans antialiased selection:bg-emerald-600 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#fcfbf7] text-[#0b3322] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/contact-hero.png"
            alt="Subhashini Enterprises Global Trade Desk"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcfbf7] via-[#fcfbf7]/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-bold text-emerald-800 tracking-wider uppercase mb-6 shadow-sm"
          >
            <Headset className="w-4 h-4 text-emerald-600" />
            <span>Global Support & Inquiries</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-[#0b3322] leading-tight max-w-4xl mx-auto mb-6"
          >
            Connect With Our <span className="text-emerald-700">Global Team</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            Whether you are looking to import premium fresh produce, partner with our retail ventures, or inquire about commercial spaces, we are here to assist.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Col: Contact Info & Map */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="text-3xl font-black font-heading text-[#0b3322] mb-6">Corporate Directory</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#fcfbf7] border border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0b3322] mb-1">Corporate Headquarters</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{COMPANY_INFO.location.fullAddress}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#fcfbf7] border border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0b3322] mb-1">Phone Directory</h4>
                      <p className="text-sm text-gray-600">Export Desk: {COMPANY_INFO.contact.mobile}</p>
                      <p className="text-sm text-gray-600">General Info: {COMPANY_INFO.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#fcfbf7] border border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0b3322] mb-1">Email Contacts</h4>
                      <p className="text-sm text-gray-600">Exports: {COMPANY_INFO.contact.emailExport}</p>
                      <p className="text-sm text-gray-600">General: {COMPANY_INFO.contact.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-[#0b3322] mb-4">Global Reach</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center gap-2 text-emerald-700 mb-2">
                      <Globe2 className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase">Middle East</span>
                    </div>
                    <p className="text-sm font-bold text-gray-900">Dubai, UAE</p>
                    <p className="text-xs text-gray-500">Trade Representative</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center gap-2 text-emerald-700 mb-2">
                      <Globe2 className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase">South Asia</span>
                    </div>
                    <p className="text-sm font-bold text-gray-900">Male, Maldives</p>
                    <p className="text-xs text-gray-500">Regional Partner Desk</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="p-8 md:p-10 rounded-3xl bg-white shadow-2xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-emerald-600 to-[#0b3322]" />
                
                <h2 className="text-2xl md:text-3xl font-black font-heading text-[#0b3322] mb-2">Send an Inquiry</h2>
                <p className="text-gray-500 text-sm mb-8">Fill out the form below and our respective team will get back to you within 24 hours.</p>

                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="py-16 flex flex-col items-center text-center bg-emerald-50 rounded-2xl border border-emerald-100"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b3322] mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600 text-sm max-w-sm">Thank you for reaching out to Subhashini Enterprises. We have received your inquiry.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-gray-700">Department Inquiry *</label>
                      <select required className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-gray-50 text-gray-700">
                        <option value="">Select Department...</option>
                        <option value="exports">Global Produce Exports</option>
                        <option value="retail">Subh Greenz Hypermarket</option>
                        <option value="realestate">Subhashini Tower Commercial</option>
                        <option value="careers">Careers & General Inquiries</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label className="text-sm font-bold text-gray-700">Full Name *</label>
                        <input required type="text" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-gray-50" placeholder="John Doe" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-bold text-gray-700">Email Address *</label>
                        <input required type="email" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-gray-50" placeholder="john@company.com" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label className="text-sm font-bold text-gray-700">Phone Number</label>
                        <input type="tel" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-gray-50" placeholder="+1 234 567 8900" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-bold text-gray-700">Company / Organization</label>
                        <input type="text" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-gray-50" placeholder="Company Name" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-gray-700">Message *</label>
                      <textarea required rows={5} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-gray-50 resize-none" placeholder="How can we help you today?"></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#0b3322] hover:bg-emerald-800 text-white font-bold tracking-wide shadow-lg transition-all flex items-center justify-center gap-2 group"
                    >
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
