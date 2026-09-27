"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function Footer() {
  return (
    <footer className="bg-[#fcfbf7] text-[#0b3322] pt-16 pb-10 border-t border-[#e8e4d8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#e8e4d8]">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-black flex items-center justify-center border border-black shadow-sm">
                <Image
                  src="/images/logo.png"
                  alt="Subhashini Industries Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-heading font-black text-lg tracking-tight text-[#0b3322] leading-none">
                  Subhashini
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] text-[#0b3322] uppercase leading-tight mt-0.5">
                  INDUSTRIES PVT. LTD.
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4a5951] leading-relaxed max-w-sm">
              A diversified business group focused on global agri exports, modern retail, commercial spaces and sustainable growth.
            </p>

            {/* Social SVG Icons matching reference image */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-[#d8d2c2] flex items-center justify-center text-[#0b3322] hover:bg-[#0b3322] hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.73 5.6c1.07 0 2.19.19 2.19.19v2.41h-1.24c-1.23 0-1.62.77-1.62 1.56V12h2.72l-.43 3h-2.29v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-[#d8d2c2] flex items-center justify-center text-[#0b3322] hover:bg-[#0b3322] hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-[#d8d2c2] flex items-center justify-center text-[#0b3322] hover:bg-[#0b3322] hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-[#d8d2c2] flex items-center justify-center text-[#0b3322] hover:bg-[#0b3322] hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0b3322]">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[#4a5951]">
              <li>
                <a href="#hero" className="hover:text-[#0b3322] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#0b3322] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#ventures" className="hover:text-[#0b3322] transition-colors">
                  Our Businesses
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#0b3322] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#sustainability" className="hover:text-[#0b3322] transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#0b3322] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-[#0b3322] transition-colors">
                  News & Updates
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#0b3322] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Businesses */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0b3322]">
              Our Businesses
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[#4a5951]">
              <li>
                <a href="#ventures" className="hover:text-[#0b3322] font-semibold transition-colors">
                  Subha Greenz
                </a>
              </li>
              <li>
                <a href="#ventures" className="hover:text-[#0b3322] font-semibold transition-colors">
                  Shiva Exporting
                </a>
              </li>
              <li>
                <a href="#ventures" className="hover:text-[#0b3322] font-semibold transition-colors">
                  Subhashini Tower
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0b3322]">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3 text-xs text-[#4a5951]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0b3322] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.location.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0b3322] shrink-0" />
                <span>{COMPANY_INFO.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0b3322] shrink-0" />
                <span>{COMPANY_INFO.contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4a5951]">
          <p>© 2024 Subhashini Industries Pvt. Ltd. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#0b3322] transition-colors">
              Privacy Policy
            </a>
            <span className="text-[#d8d2c2]">|</span>
            <a href="#" className="hover:text-[#0b3322] transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
