"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Heart, 
  GraduationCap, 
  Smile, 
  Tag, 
  X, 
  Upload, 
  CheckCircle2,
  Sparkles,
  ArrowRight
} from "lucide-react";
import SubhGreenzNavbar from "@/components/SubhGreenzNavbar";
import SubhGreenzFooter from "@/components/SubhGreenzFooter";

const GREENZ_PERKS = [
  { icon: Tag, title: "Store Discounts", desc: "Generous staff discounts on all groceries, fresh produce, and household essentials." },
  { icon: GraduationCap, title: "On-the-Job Training", desc: "Structured retail management training and skill advancement programs." },
  { icon: Smile, title: "Positive Work Environment", desc: "Supportive team dynamics, fair scheduling, and employee appreciation rewards." },
  { icon: Heart, title: "Health Benefits", desc: "Health coverage and medical assistance programs for full-time team members." },
];

const GREENZ_JOBS = [
  {
    id: "sg-1",
    title: "Hypermarket Floor Manager",
    department: "Store Operations",
    location: "Subh Greenz, Vaikom",
    type: "Full-time"
  },
  {
    id: "sg-2",
    title: "Fresh Produce Quality Lead",
    department: "Quality Assurance",
    location: "Subh Greenz, Vaikom",
    type: "Full-time"
  },
  {
    id: "sg-3",
    title: "Head Cashier & Billing Supervisor",
    department: "Customer Service",
    location: "Subh Greenz, Vaikom",
    type: "Full-time"
  },
  {
    id: "sg-4",
    title: "Inventory & Cold-Chain Controller",
    department: "Logistics & Stock",
    location: "Subh Greenz, Vaikom",
    type: "Full-time"
  },
  {
    id: "sg-5",
    title: "Customer Associate (Fresh Counter)",
    department: "Retail Sales",
    location: "Subh Greenz, Vaikom",
    type: "Full-time / Part-time"
  },
];

export default function SubhGreenzCareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof GREENZ_JOBS[0] | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleApplyClick = (job: typeof GREENZ_JOBS[0]) => {
    setSelectedJob(job);
    setIsSubmitted(false);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setTimeout(() => setIsSubmitted(false), 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
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
            <Briefcase className="w-3.5 h-3.5 text-[#2fb562]" />
            <span>JOIN THE SUBH GREENZ TEAM</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
          >
            Build a Rewarding Career in <span className="text-[#2fb562]">Modern Retail</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Be part of a passionate, customer-focused hypermarket team in Vaikom. We offer great perks, career advancement, and a supportive workplace.
          </motion.p>
        </div>
      </section>

      {/* Why Work at Subh Greenz Perks */}
      <section className="relative z-20 py-12 px-4 sm:px-6 lg:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-3">Why Work With Us?</h2>
            <p className="text-gray-300 text-sm max-w-xl mx-auto">We invest in our people so our team and customers thrive together.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GREENZ_PERKS.map((perk, idx) => {
              const IconComp = perk.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#030d22]/90 backdrop-blur-md border border-[#2fb562]/30 p-6 rounded-3xl hover:border-[#2fb562] transition-all hover:bg-[#061535] group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#2fb562]/20 text-[#2fb562] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{perk.title}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">{perk.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="relative z-20 py-16 px-4 sm:px-6 lg:px-12 bg-transparent" id="openings">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#2fb562]" />
                <span className="text-xs font-bold text-[#2fb562] uppercase tracking-widest">Active Hiring</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Current Job Openings</h2>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {GREENZ_JOBS.map((job) => (
              <div 
                key={job.id}
                className="bg-[#030d22]/90 backdrop-blur-md border border-[#2fb562]/30 hover:border-[#2fb562] rounded-3xl p-6 transition-all hover:bg-[#061535] flex flex-col sm:flex-row sm:items-center justify-between gap-6 group"
              >
                <div>
                  <span className="text-xs font-bold text-[#2fb562] uppercase tracking-wider block mb-1">{job.department}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                  
                  <div className="flex flex-wrap gap-4 text-xs text-gray-300">
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#2fb562]" /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#2fb562]" /> {job.type}</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleApplyClick(job)}
                  className="bg-[#2fb562] hover:bg-[#28c76f] text-[#02042e] px-6 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md group-hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>Apply Now</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#030d22] border border-[#2fb562]/40 text-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden my-8 relative"
            >
              {/* Modal Header */}
              <div className="bg-[#0f4022] p-6 text-white relative border-b border-[#2fb562]/30">
                <button 
                  onClick={handleCloseModal}
                  className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <div className="text-xs font-bold text-[#2fb562] uppercase tracking-wider mb-1">Apply Role</div>
                <h3 className="text-2xl font-black pr-8">{selectedJob.title}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-300 mt-2">
                  <span>{selectedJob.location}</span>
                  <span>•</span>
                  <span>{selectedJob.department}</span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8">
                {isSubmitted ? (
                  <div className="py-12 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#2fb562]/20 text-[#2fb562] flex items-center justify-center mb-4 border border-[#2fb562]/40">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Application Received!</h4>
                    <p className="text-gray-300 text-sm max-w-md">
                      Thank you for applying for the <strong>{selectedJob.title}</strong> role at Subh Greenz. Our hiring team will review your application soon.
                    </p>
                    <button 
                      onClick={handleCloseModal}
                      className="mt-6 px-8 py-3 rounded-full bg-[#2fb562] text-[#02042e] font-bold text-sm"
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-300">Full Name *</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:border-[#2fb562] text-sm text-white" placeholder="John Doe" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-300">Email Address *</label>
                        <input required type="email" className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:border-[#2fb562] text-sm text-white" placeholder="john@example.com" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-300">Phone Number *</label>
                        <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:border-[#2fb562] text-sm text-white" placeholder="+91 98765 43210" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-300">Relevant Experience *</label>
                        <select required className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#030d22] focus:outline-none focus:border-[#2fb562] text-sm text-white">
                          <option value="">Select experience</option>
                          <option value="Fresher">Fresher / Entry Level</option>
                          <option value="1-3">1 - 3 Years Retail</option>
                          <option value="3-5">3 - 5 Years Retail</option>
                          <option value="5+">5+ Years Store Management</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-300">Brief Message / Introduction</label>
                      <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:border-[#2fb562] text-sm text-white resize-none" placeholder="Tell us about yourself..."></textarea>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-300">Resume / CV *</label>
                      <div className="w-full border-2 border-dashed border-white/20 rounded-xl p-5 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors cursor-pointer">
                        <Upload className="w-6 h-6 text-[#2fb562] mb-2" />
                        <p className="text-xs font-medium text-white">Click or drag resume here (PDF/DOC, Max 5MB)</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
                      <button 
                        type="button" 
                        onClick={handleCloseModal}
                        className="px-6 py-2.5 rounded-full text-xs font-bold text-gray-300 hover:text-white transition-colors"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit"
                        className="px-8 py-2.5 rounded-full bg-[#2fb562] text-[#02042e] text-xs font-bold shadow-lg transition-all"
                      >
                        Submit Application
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <SubhGreenzFooter />
    </div>
  );
}
