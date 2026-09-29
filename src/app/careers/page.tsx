"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Heart, 
  GraduationCap, 
  Globe, 
  Coffee,
  X,
  Upload,
  CheckCircle2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- Mock Data for Careers ---
const BENEFITS = [
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health insurance and wellness programs for you and your family." },
  { icon: GraduationCap, title: "Continuous Learning", desc: "Sponsorships for certifications, training, and skill development courses." },
  { icon: Globe, title: "Global Exposure", desc: "Opportunities to work on international trade projects and travel." },
  { icon: Coffee, title: "Modern Workspace", desc: "State-of-the-art office facilities in Kerala with flexible work options." },
];

const JOB_OPENINGS = [
  { 
    id: "job-1",
    title: "Senior International Trade Manager", 
    department: "Exports & Logistics", 
    location: "Vaikom / Kochi", 
    type: "Full-time" 
  },
  { 
    id: "job-2",
    title: "Cold-Chain Logistics Supervisor", 
    department: "Logistics", 
    location: "Cochin Port Facility", 
    type: "Full-time" 
  },
  { 
    id: "job-3",
    title: "Hypermarket General Manager", 
    department: "Retail Operations", 
    location: "Subh Greenz, Vaikom", 
    type: "Full-time" 
  },
  { 
    id: "job-4",
    title: "Agri-Sourcing & QA Specialist", 
    department: "Quality Assurance", 
    location: "Alappuzha", 
    type: "Full-time" 
  },
  { 
    id: "job-5",
    title: "Commercial Property Manager", 
    department: "Real Estate Management", 
    location: "Subhashini Tower", 
    type: "Full-time" 
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof JOB_OPENINGS[0] | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleApplyClick = (job: typeof JOB_OPENINGS[0]) => {
    setSelectedJob(job);
    setIsSubmitted(false);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setTimeout(() => setIsSubmitted(false), 300); // Reset after animation
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, this would send data to an API
  };

  return (
    <div className="min-h-screen bg-[#fcfbf7] text-[#1a1a1a] font-sans antialiased selection:bg-emerald-600 selection:text-white pb-20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#fcfbf7] text-[#0b3322] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/careers-hero.png"
            alt="Subhashini Enterprises Team"
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
            <Briefcase className="w-4 h-4 text-emerald-600" />
            <span>Careers at Subhashini</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-[#0b3322] leading-tight max-w-4xl mx-auto mb-6"
          >
            Shape the Future of <span className="text-emerald-700">Global Agri-Trade</span> & Retail.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            Join a diverse, dynamic team dedicated to operational excellence, sustainability, and delivering premium quality to the world.
          </motion.p>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black font-heading text-[#0b3322] mb-4">Why Work With Us?</h2>
            <p className="text-gray-600">
              We believe our people are our greatest asset. At Subhashini Enterprises, we foster a culture of growth, respect, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-[#fcfbf7] border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0b3322] mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-[#fcfbf7]" id="openings">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black font-heading text-[#0b3322] mb-3">Open Positions</h2>
              <p className="text-gray-600">Explore current opportunities across our group ventures.</p>
            </div>
            
            {/* Simple Filter placeholder - could be made functional */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {['All', 'Exports', 'Retail', 'Real Estate'].map((dept, i) => (
                <button 
                  key={i}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                    i === 0 ? 'bg-[#0b3322] text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {JOB_OPENINGS.map((job, idx) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
              >
                <div>
                  <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">{job.department}</div>
                  <h3 className="text-xl font-bold text-[#0b3322] mb-3">{job.title}</h3>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => handleApplyClick(job)}
                  className="shrink-0 px-6 py-3 rounded-full bg-gray-50 text-[#0b3322] font-bold text-sm border border-gray-200 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all flex items-center justify-center gap-2"
                >
                  Apply Now
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden my-8"
            >
              {/* Modal Header */}
              <div className="bg-[#0b3322] p-6 text-white relative">
                <button 
                  onClick={handleCloseModal}
                  className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Apply For Role</div>
                <h3 className="text-2xl font-black font-heading pr-8">{selectedJob.title}</h3>
                <div className="flex items-center gap-3 text-sm text-gray-300 mt-3">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {selectedJob.location}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-400" />
                  <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {selectedJob.department}</span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="py-12 flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#0b3322] mb-3">Application Received!</h4>
                    <p className="text-gray-600 max-w-md">
                      Thank you for applying for the <strong>{selectedJob.title}</strong> position. Our HR team will review your profile and get back to you soon.
                    </p>
                    <button 
                      onClick={handleCloseModal}
                      className="mt-8 px-8 py-3 rounded-full bg-[#0b3322] text-white font-bold"
                    >
                      Done
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-sm font-bold text-gray-700">Full Name *</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-gray-50" placeholder="John Doe" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-bold text-gray-700">Email Address *</label>
                        <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-gray-50" placeholder="john@example.com" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-sm font-bold text-gray-700">Phone Number *</label>
                        <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-gray-50" placeholder="+91 98765 43210" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-bold text-gray-700">Years of Experience *</label>
                        <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-gray-50 text-gray-700">
                          <option value="">Select experience</option>
                          <option value="0-2">0-2 Years</option>
                          <option value="3-5">3-5 Years</option>
                          <option value="5-10">5-10 Years</option>
                          <option value="10+">10+ Years</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-gray-700">Cover Letter / Message</label>
                      <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all bg-gray-50 resize-none" placeholder="Tell us why you're a great fit..."></textarea>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-gray-700">Resume / CV *</label>
                      <div className="w-full border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          <Upload className="w-5 h-5" />
                        </div>
                        <p className="text-sm font-medium text-[#0b3322]">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
                      <button 
                        type="button" 
                        onClick={handleCloseModal}
                        className="px-6 py-3 rounded-full text-sm font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit"
                        className="px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-lg transition-all"
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

      <Footer />
    </div>
  );
}
