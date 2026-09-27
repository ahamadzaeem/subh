"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, MessageCircle, Send, CheckCircle, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate fast form processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#fbfbf8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-start gap-8"
          >
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0b3322]/10 border border-[#0b3322]/20 text-[#0b3322]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0b3322]" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase">
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b3322] tracking-tight">
                Connect with <br />
                <span className="text-[#155c3d]">Subhashini.</span>
              </h2>

              <p className="text-base text-[#4a5951] leading-relaxed">
                Have questions regarding produce availability, export shipping schedules to Maldives, or customized bulk packaging? Our team is at your service.
              </p>
            </div>

            {/* Address & Info Cards */}
            <div className="w-full flex flex-col gap-4">
              <div className="bg-white p-5 rounded-2xl border border-[#e8e4d8] shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0b3322] text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-[#0b3322]">
                    Registered Headquarters
                  </h4>
                  <p className="text-xs text-[#4a5951] mt-0.5 leading-relaxed">
                    {COMPANY_INFO.location.fullAddress}
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#e8e4d8] shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0b3322] text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-[#0b3322]">
                    Email Enquiries
                  </h4>
                  <p className="text-xs text-[#4a5951] mt-0.5">
                    {COMPANY_INFO.contact.email}
                  </p>
                  <p className="text-xs text-[#4a5951]">
                    {COMPANY_INFO.contact.emailExport}
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#e8e4d8] shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0b3322] text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-[#0b3322]">
                    Phone & WhatsApp
                  </h4>
                  <p className="text-xs text-[#4a5951] mt-0.5">
                    Landline: {COMPANY_INFO.contact.phone}
                  </p>
                  <p className="text-xs text-[#4a5951]">
                    Mobile / WhatsApp: {COMPANY_INFO.contact.mobile}
                  </p>
                </div>
              </div>

              <div className="bg-[#f5f3eb] p-4 rounded-2xl border border-[#e8e4d8] flex items-center gap-3 text-xs text-[#4a5951]">
                <Clock className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>{COMPANY_INFO.contact.workingHours}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#e8e4d8] shadow-xl"
          >
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#0b3322]">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-sm text-[#4a5951] max-w-md">
                  Thank you for reaching out to Subhashini Enterprises. Our export team in Vaikom will review your requirements and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#0b3322] text-white text-xs font-bold hover:bg-[#155c3d] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#0b3322]">
                    Send a Business Enquiry
                  </h3>
                  <p className="text-xs text-[#4a5951] mt-1">
                    Fill in your details below and our export team will contact you promptly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#0b3322] uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-[#e8e4d8] bg-[#fbfbf8] text-sm text-[#121c17] focus:outline-none focus:border-[#0b3322] focus:ring-1 focus:ring-[#0b3322] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#0b3322] uppercase tracking-wider">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company / Resort / Business"
                      className="w-full px-4 py-3 rounded-xl border border-[#e8e4d8] bg-[#fbfbf8] text-sm text-[#121c17] focus:outline-none focus:border-[#0b3322] focus:ring-1 focus:ring-[#0b3322] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#0b3322] uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#e8e4d8] bg-[#fbfbf8] text-sm text-[#121c17] focus:outline-none focus:border-[#0b3322] focus:ring-1 focus:ring-[#0b3322] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#0b3322] uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+960 7712345 / +91 9876543210"
                      className="w-full px-4 py-3 rounded-xl border border-[#e8e4d8] bg-[#fbfbf8] text-sm text-[#121c17] focus:outline-none focus:border-[#0b3322] focus:ring-1 focus:ring-[#0b3322] transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#0b3322] uppercase tracking-wider">
                    Destination Country / Port
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. Maldives (Malé Port) / United Arab Emirates"
                    className="w-full px-4 py-3 rounded-xl border border-[#e8e4d8] bg-[#fbfbf8] text-sm text-[#121c17] focus:outline-none focus:border-[#0b3322] focus:ring-1 focus:ring-[#0b3322] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#0b3322] uppercase tracking-wider">
                    Export Requirement Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify produce items required, expected volume, frequency, and port delivery terms..."
                    className="w-full px-4 py-3 rounded-xl border border-[#e8e4d8] bg-[#fbfbf8] text-sm text-[#121c17] focus:outline-none focus:border-[#0b3322] focus:ring-1 focus:ring-[#0b3322] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#0b3322] hover:bg-[#155c3d] text-white font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Sending Enquiry...</span>
                  ) : (
                    <>
                      <span>Send Export Enquiry</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
