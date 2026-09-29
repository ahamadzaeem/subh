"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Search, 
  ShoppingCart, 
  ArrowRight,
  Leaf,
  Droplets,
  Wheat,
  Coffee,
  Sparkles,
  Smile,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Heart,
  Tag,
  Store,
  Globe
} from "lucide-react";
import SubhGreenzNavbar from "@/components/SubhGreenzNavbar";
import SubhGreenzFooter from "@/components/SubhGreenzFooter";

const COLORS = {
  jade: "#2fb562",
  darkGreen: "#0f4022",
  navy: "#02042e",
  white: "#ffffff",
  black: "#000000"
};

export default function SubhGreenzPage() {
  return (
    <div className="min-h-screen font-sans bg-[#02042e] text-white selection:bg-[#2fb562] selection:text-white overflow-x-hidden relative">
      
      {/* Fixed Background Image throughout the Subh Greenz website */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/subh-greenz-main-bg.png"
          alt="Subh Greenz Background"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        {/* Subtle overlay for content readability */}
        <div className="absolute inset-0 bg-[#02042e]/30" />
      </div>

      <SubhGreenzNavbar />

      {/* Hero Section with 16:9 Aspect Ratio Container & Vibrant Visual Aesthetics */}
      <section className="relative w-full max-w-[1440px] mx-auto aspect-[16/9] min-h-[520px] lg:min-h-[660px] flex items-center bg-transparent overflow-hidden z-10 px-4 sm:px-6 lg:px-12 py-6">
        
        {/* Background Ambient Radial Glows */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#2fb562]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#0f4022]/40 rounded-full blur-[160px] pointer-events-none" />

        <div className="w-full h-full grid lg:grid-cols-12 items-center relative z-10 gap-8">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 px-4 sm:px-6 lg:pl-8 py-4 flex flex-col justify-center relative z-20">
            
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f4022]/90 border border-[#2fb562]/40 backdrop-blur-md w-fit mb-5 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-[#2fb562]" />
              <span className="text-[11px] font-black tracking-[0.2em] text-[#2fb562] uppercase">
                Vaikom's Premier Hypermarket
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-5">
              Fresh Food.<br />
              Healthy Living.<br />
              <span className="bg-gradient-to-r from-[#2fb562] via-[#52e587] to-[#7effa8] bg-clip-text text-transparent">
                Brighter Tomorrows.
              </span>
            </h1>

            {/* Paragraph text */}
            <p className="text-gray-200 text-xs sm:text-sm lg:text-base leading-relaxed max-w-md mb-6 font-medium">
              Your trusted hypermarket in Vaikom offering farm-fresh produce, organic groceries, cold-chain dairy, and daily household essentials under one roof.
            </p>

            {/* Quick Highlight Feature Chips */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8">
              <span className="px-3 py-1 rounded-full bg-[#041a0d]/90 border border-[#2fb562]/30 text-xs font-bold text-gray-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2fb562]" /> 100% Farm Fresh
              </span>
              <span className="px-3 py-1 rounded-full bg-[#041a0d]/90 border border-[#2fb562]/30 text-xs font-bold text-gray-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2fb562]" /> Daily Super Deals
              </span>
              <span className="px-3 py-1 rounded-full bg-[#041a0d]/90 border border-[#2fb562]/30 text-xs font-bold text-gray-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2fb562]" /> Home Delivery
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2.5 bg-[#2fb562] hover:bg-[#28c76f] text-[#02042e] px-7 py-3.5 rounded-full font-black text-xs sm:text-sm tracking-wide transition-all shadow-xl shadow-[#2fb562]/25 hover:scale-105 active:scale-95"
              >
                <span>Explore Fresh Products</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </a>
              <Link
                href="/subh-greenz/about"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm transition-all"
              >
                <span>About Our Store</span>
              </Link>
            </div>
          </div>

          {/* Right Image Column in 16:9 Proportion Box */}
          <div className="lg:col-span-7 relative w-full h-full p-2 sm:p-4 lg:p-6 flex items-center justify-center z-20">
            
            {/* The Hero Image Box Container with 16:9 proportions */}
            <div className="relative w-full h-full aspect-[16/10] max-h-[500px] rounded-[32px] lg:rounded-tl-[130px] lg:rounded-bl-[130px] lg:rounded-tr-[35px] lg:rounded-br-[35px] overflow-hidden border-4 border-[#2fb562]/80 shadow-[0_20px_60px_rgba(47,181,98,0.4)] group transition-transform duration-700 hover:scale-[1.01]">
              <Image
                src="/images/subh-greenz-hero-aisle.png"
                alt="Subh Greenz Hypermarket Fresh Aisle"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Top Right Floating Savings Badge */}
              <div className="absolute top-5 right-5 bg-[#2fb562] text-[#02042e] px-4 py-2 rounded-full font-black text-xs shadow-2xl flex items-center gap-2 animate-bounce">
                <Sparkles className="w-3.5 h-3.5 text-[#02042e]" />
                <span>DAILY SUPER DEALS</span>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#02042e]/70 via-transparent to-black/20" />

              {/* Floating Feature Badge inside box */}
              <div className="absolute bottom-5 left-5 right-5 sm:left-7 sm:right-auto bg-[#041a0d]/95 backdrop-blur-xl border border-[#2fb562]/40 p-4 rounded-2xl flex items-center gap-4 shadow-2xl">
                <div className="w-10 h-10 rounded-xl bg-[#2fb562] text-[#02042e] flex items-center justify-center shrink-0 shadow-md">
                  <Leaf className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm leading-tight">100% Organic & Farm Fresh</h4>
                  <p className="text-[#2fb562] text-xs font-semibold mt-0.5">Restocked Every Morning</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Categories Section - All in One Place (100% matching Image 2 design) */}
      <section className="py-12 px-4 sm:px-6 lg:px-12 bg-transparent relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#041a0d]/90 backdrop-blur-xl rounded-[35px] lg:rounded-[45px] p-8 sm:p-12 border border-[#2fb562]/30 shadow-2xl overflow-hidden">
            
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-10 h-0.5 bg-[#2fb562]" />
                <span className="text-xs font-black tracking-[0.2em] text-[#2fb562] uppercase">EVERYTHING YOU NEED</span>
                <div className="w-10 h-0.5 bg-[#2fb562]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">All <span className="text-[#2fb562]">in One Place</span></h2>
              <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">From fresh produce to daily essentials, explore a wide range of quality products.</p>
            </div>

            {/* 6 Framed Category Cards matching Image 2 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
              {[
                { 
                  title: "Fruits &\nVegetables", 
                  desc: "Farm-fresh produce for a healthier you.", 
                  img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=500", 
                  icon: Leaf 
                },
                { 
                  title: "Dairy & Dairy\nProducts", 
                  desc: "Nutritious essentials for your family.", 
                  img: "/images/cat-dairy.png", 
                  icon: Droplets 
                },
                { 
                  title: "Grains &\nStaples", 
                  desc: "Quality grains for everyday meals.", 
                  img: "/images/cat-grains.png", 
                  icon: Wheat 
                },
                { 
                  title: "Snacks &\nBeverages", 
                  desc: "Your favourite brands for every moment.", 
                  img: "/images/cat-snacks.png", 
                  icon: ShoppingCart 
                },
                { 
                  title: "Household\nEssentials", 
                  desc: "Trusted essentials for a cleaner home.", 
                  img: "/images/cat-household.png", 
                  icon: Sparkles 
                },
                { 
                  title: "Personal\nCare", 
                  desc: "Everyday care for a better you.", 
                  img: "/images/cat-personal.png", 
                  icon: Smile 
                },
              ].map((cat, idx) => (
                <div 
                  key={idx} 
                  className="group bg-[#072615]/90 border border-[#2fb562]/30 hover:border-[#2fb562] rounded-[22px] p-3 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#2fb562]/20 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <div>
                    {/* Image Box */}
                    <div className="relative w-full aspect-[4/3] rounded-[18px] overflow-hidden mb-3.5 border border-white/10">
                      <Image 
                        src={cat.img} 
                        alt={cat.title.replace('\n', ' ')} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      
                      {/* Overlapping Circular Icon Badge bottom right */}
                      <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-[#2fb562] border-2 border-[#041a0d] text-[#02042e] flex items-center justify-center shadow-lg">
                        <cat.icon className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-white text-sm sm:text-base leading-tight mb-2 whitespace-pre-line px-1 group-hover:text-[#2fb562] transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[11px] text-gray-300 leading-snug px-1 pt-2 border-t border-white/10 mt-1">
                    {cat.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Banner Section - Freshness in Every Basket (100% matching image 2 design) */}
      <section className="py-10 px-4 sm:px-6 lg:px-12 bg-transparent relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#062413]/90 backdrop-blur-xl rounded-[40px] overflow-hidden border border-[#2fb562]/30 shadow-2xl grid lg:grid-cols-12 min-h-[380px]">
            
            {/* Left Content Side */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative z-20">
              <div>
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
                  Freshness<br />
                  in <span className="text-[#2fb562]">Every Basket</span>
                </h2>
                
                <p className="text-gray-200 text-sm sm:text-base mb-8 max-w-md leading-relaxed font-medium">
                  Farm-fresh fruits and vegetables handpicked for your family.
                </p>
                
                <div className="mb-10">
                  <button className="inline-flex items-center gap-2 bg-[#2fb562] hover:bg-[#28c76f] text-[#02042e] px-7 py-3 rounded-full font-black text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-[#2fb562]/20 hover:scale-105 active:scale-95">
                    <span>Shop Fresh Produce</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
              </div>

              {/* Bottom 3 Badges with Green Circle Icons */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#2fb562] text-[#02042e] flex items-center justify-center shrink-0 shadow-md">
                    <Leaf className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-bold text-gray-200">Closer to Nature</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#2fb562] text-[#02042e] flex items-center justify-center shrink-0 shadow-md">
                    <Heart className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-bold text-gray-200">Healthier Choices</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#2fb562] text-[#02042e] flex items-center justify-center shrink-0 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-bold text-gray-200">A Sustainable Tomorrow</span>
                </div>
              </div>
            </div>

            {/* Right Basket Image Side with Organic Green Wave framing & Chalk Badge */}
            <div className="lg:col-span-6 relative min-h-[280px] lg:min-h-full overflow-hidden">
              {/* Organic Green Fluid Wave Divider framing the right image */}
              <div className="absolute inset-y-0 -left-1 z-10 w-24 pointer-events-none hidden lg:block">
                <svg className="h-full w-full text-[#062413]" viewBox="0 0 100 400" preserveAspectRatio="none" fill="currentColor">
                  <path d="M0,0 C60,100 80,200 20,300 C0,340 10,380 0,400 L0,0 Z" />
                </svg>
                {/* Glowing Wave Outer stroke */}
                <svg className="h-full w-full absolute top-0 left-1 text-[#2fb562] opacity-70" viewBox="0 0 100 400" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="8">
                  <path d="M0,0 C60,100 80,200 20,300 C0,340 10,380 0,400" />
                </svg>
              </div>

              {/* Basket Produce Image */}
              <Image
                src="/images/freshness-basket-right.png"
                alt="Farm fresh vegetables in woven basket"
                fill
                priority
                className="object-cover object-center"
              />

              {/* Subtle Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#062413]/40" />

              {/* Floating Chalk Badge on top right (matching Image 2) */}
              <div className="absolute top-6 right-6 bg-[#0f4022]/90 backdrop-blur-md border-2 border-[#2fb562]/50 p-4 rounded-2xl shadow-2xl text-right flex flex-col items-end z-20 max-w-[170px]">
                <div className="flex items-center gap-1.5 text-[#2fb562] mb-1">
                  <Leaf className="w-4 h-4 transform -rotate-45" />
                  <Leaf className="w-3.5 h-3.5 transform rotate-12" />
                </div>
                <div className="text-white font-black text-sm leading-tight tracking-tight">
                  Good<br />
                  Food.<br />
                  <span className="text-[#2fb562]">Brighter</span><br />
                  Days
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Fresh Picks Products */}
      <section className="py-24 bg-transparent relative z-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-px bg-[#2fb562]" />
              <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Featured Products</span>
              <div className="w-12 h-px bg-[#2fb562]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Fresh <span className="text-[#2fb562]">Picks for You</span></h2>
            <p className="text-gray-400">Top quality products at great value, handpicked for your everyday needs.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Fresh Tomatoes", desc: "Farm Fresh | 1 kg", price: "32", img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=300" },
              { name: "Premium Bananas", desc: "Fresh & Sweet | 1 kg", price: "48", img: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=300" },
              { name: "Fresh Milk", desc: "Daily Fresh | 1 L", price: "64", img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=300" },
              { name: "Basmati Rice", desc: "Premium Quality | 1 kg", price: "120", img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&q=80&w=300" },
              { name: "Sunflower Oil", desc: "Pure & Healthy | 1 L", price: "145", img: "https://images.unsplash.com/photo-1629984551151-5b7fb8f3a3f0?auto=format&fit=crop&q=80&w=300" },
              { name: "Fresh Apples", desc: "Imported | 1 kg", price: "180", img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bcc6?auto=format&fit=crop&q=80&w=300" },
            ].map((prod, idx) => (
              <div key={idx} className="bg-[#0f4022]/85 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-[#2fb562]/50 transition-colors group flex flex-col shadow-xl">
                <div className="relative aspect-square bg-white p-4">
                  <Image src={prod.img} alt={prod.name} fill className="object-cover" />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-white text-sm mb-1 truncate">{prod.name}</h3>
                  <p className="text-[10px] text-gray-400 mb-4">{prod.desc}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="font-black text-lg text-white">₹ {prod.price}</div>
                    <button className="w-8 h-8 rounded-full bg-[#2fb562] text-[#02042e] flex items-center justify-center hover:bg-white transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthier Tomorrow Split Section - Exactly matching reference Image 2 */}
      <section className="relative z-20 py-12 px-4 sm:px-6 lg:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto">
          {/* Main Top Grid: Left Curved Image Box & Right Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
            
            {/* Left Image Side with Custom Rounded Arch / Curve */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[480px] rounded-[36px] lg:rounded-tr-[120px] overflow-hidden border border-white/15 shadow-2xl">
              <Image 
                src="/images/subh-greenz-about-interior.png"
                alt="Subh Greenz Store Interior"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
            
            {/* Right Content Side */}
            <div className="lg:col-span-6 flex flex-col justify-center px-4 lg:px-8 py-6 relative">
              {/* Green Glow Background Effect */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-[#2fb562] rounded-full blur-[140px] opacity-15 pointer-events-none" />
              
              {/* Eyebrow badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[2px] bg-[#2fb562]" />
                <span className="text-xs sm:text-sm font-bold tracking-widest text-[#2fb562] uppercase">
                  About Subh Greenz
                </span>
                <span className="w-2 h-[2px] bg-[#2fb562]" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-[1.15] tracking-tight">
                More Than a Hypermarket.<br/>
                <span className="text-[#2fb562]">A Healthier Tomorrow.</span>
              </h2>
              
              <p className="text-gray-300 mb-8 leading-relaxed text-sm sm:text-base max-w-xl">
                Subh Greenz is a modern hypermarket offering fresh groceries, household essentials and a wide range of quality products. We are committed to bringing healthy, fresh and reliable products to every home — because your family deserves the best.
              </p>
              
              <div>
                <button className="bg-[#2fb562] hover:bg-[#28a156] text-[#02042e] px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-[#2fb562]/30 hover:scale-105 flex items-center gap-2 text-sm sm:text-base">
                  Know More About Us <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row: 4 Feature Cards matching Image 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#030d22]/90 backdrop-blur-md border border-[#2fb562]/30 hover:border-[#2fb562] rounded-2xl p-4 flex items-center gap-4 transition-all hover:bg-[#061535]">
              <div className="w-12 h-12 rounded-xl bg-[#2fb562]/15 flex items-center justify-center text-[#2fb562] shrink-0 border border-[#2fb562]/30">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">Wide Range</h4>
                <p className="text-xs text-gray-300">of Products</p>
              </div>
            </div>

            <div className="bg-[#030d22]/90 backdrop-blur-md border border-[#2fb562]/30 hover:border-[#2fb562] rounded-2xl p-4 flex items-center gap-4 transition-all hover:bg-[#061535]">
              <div className="w-12 h-12 rounded-xl bg-[#2fb562]/15 flex items-center justify-center text-[#2fb562] shrink-0 border border-[#2fb562]/30">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">Fresh &</h4>
                <p className="text-xs text-gray-300">Premium Quality</p>
              </div>
            </div>

            <div className="bg-[#030d22]/90 backdrop-blur-md border border-[#2fb562]/30 hover:border-[#2fb562] rounded-2xl p-4 flex items-center gap-4 transition-all hover:bg-[#061535]">
              <div className="w-12 h-12 rounded-xl bg-[#2fb562]/15 flex items-center justify-center text-[#2fb562] shrink-0 border border-[#2fb562]/30">
                <Tag className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">Affordable</h4>
                <p className="text-xs text-gray-300">Prices</p>
              </div>
            </div>

            <div className="bg-[#030d22]/90 backdrop-blur-md border border-[#2fb562]/30 hover:border-[#2fb562] rounded-2xl p-4 flex items-center gap-4 transition-all hover:bg-[#061535]">
              <div className="w-12 h-12 rounded-xl bg-[#2fb562]/15 flex items-center justify-center text-[#2fb562] shrink-0 border border-[#2fb562]/30">
                <Store className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">Multiple</h4>
                <p className="text-xs text-gray-300">Branches</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Banner Section - Exactly matching reference Image 2 */}
      <section className="relative z-20 py-12 px-4 sm:px-6 lg:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto relative min-h-[380px] lg:min-h-[440px] rounded-[35px] overflow-hidden border border-[#2fb562]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between">
          
          {/* Full background sprout image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/sustainability-sprout-bg.png"
              alt="Sustainability Sprout"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Left Dark Organic Overlay Panel */}
          <div className="relative z-10 lg:w-5/12 bg-gradient-to-r from-[#031409]/95 via-[#031409]/85 to-transparent p-8 sm:p-12 flex flex-col justify-center h-full min-h-[380px] lg:min-h-[440px]">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-[1.1] tracking-tight">
              Good for People.<br/>
              Good for the Planet.
            </h2>
            <p className="text-gray-200 mb-8 text-xs sm:text-sm lg:text-base leading-relaxed max-w-md">
              We believe in sustainable and responsible practices to bring you fresh and safe products while supporting a healthier planet.
            </p>
            <div>
              <button className="bg-[#2fb562] hover:bg-[#28a156] text-[#02042e] px-7 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-[#2fb562]/30 flex items-center gap-2 text-sm sm:text-base">
                Our Sustainability Journey <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Center Sprout Spacer */}
          <div className="hidden lg:block lg:w-3/12 h-full z-0 pointer-events-none" />

          {/* Right Dark Organic Overlay Panel with Checklist items */}
          <div className="relative z-10 lg:w-4/12 bg-gradient-to-l from-[#031409]/95 via-[#031409]/85 to-transparent p-8 sm:p-12 flex flex-col justify-center h-full min-h-[380px] lg:min-h-[440px] gap-6">
            {[
              { text: "Sustainable Sourcing", icon: Leaf },
              { text: "Reduced Food Waste", icon: CheckCircle2 },
              { text: "Eco-friendly Practices", icon: Sparkles },
              { text: "Healthier Communities", icon: Heart }
            ].map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[#2fb562]/20 border border-[#2fb562]/40 text-[#2fb562] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                    <ItemIcon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-white text-sm sm:text-base tracking-wide group-hover:text-[#2fb562] transition-colors">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Stores Section */}
      <section className="py-24 bg-[#02042e]/75 backdrop-blur-md text-white px-6 lg:px-12 relative z-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-px bg-[#2fb562]" />
              <span className="text-xs font-bold tracking-widest text-[#2fb562] uppercase">Our Stores</span>
              <div className="w-12 h-px bg-[#2fb562]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Visit a Subh Greenz Near You</h2>
            <p className="text-gray-300">Multiple locations to serve you better.</p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { city: "Vaikom", addr: "Main Road, Vaikom, Kerala", img: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=500" },
                { city: "Alappuzha", addr: "Beach Road, Alappuzha, Kerala", img: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=500" },
                { city: "Kochi", addr: "MG Road, Kochi, Kerala", img: "https://images.unsplash.com/photo-1580982327559-c1202864eb05?auto=format&fit=crop&q=80&w=500" },
                { city: "Thrissur", addr: "Main Road, Thrissur, Kerala", img: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&q=80&w=500" },
              ].map((store, idx) => (
                <div key={idx} className="bg-[#0f4022]/85 rounded-2xl overflow-hidden border border-white/10 hover:shadow-2xl transition-all group">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image src={store.img} alt={store.city} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-1 text-white">{store.city}</h3>
                    <p className="text-sm text-gray-300 mb-6">{store.addr}</p>
                    <button className="text-[#2fb562] font-bold text-sm flex items-center gap-2 hover:text-white transition-colors">
                      Get Directions <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel Arrows (Visual only for mockup) */}
            <button className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0f4022] shadow-lg border border-white/10 flex items-center justify-center text-[#2fb562] hover:bg-[#2fb562] hover:text-[#02042e] hidden lg:flex">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0f4022] shadow-lg border border-white/10 flex items-center justify-center text-[#2fb562] hover:bg-[#2fb562] hover:text-[#02042e] hidden lg:flex">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      <SubhGreenzFooter />

    </div>
  );
}
