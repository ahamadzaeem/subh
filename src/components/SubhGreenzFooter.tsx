"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export default function SubhGreenzFooter() {
  return (
    <footer className="bg-[#02042e] text-white pt-16 pb-12 border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <Link href="/subh-greenz" className="relative block h-14 w-48">
              <Image
                src="/images/subh-greenz-logo-transparent.png"
                alt="subh Greenz HYPER MARKET"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Your modern, reliable hypermarket in Vaikom offering farm-fresh groceries, household essentials, premium dairy, and quality organic selections.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#2fb562] font-semibold pt-2">
              <span className="w-2 h-2 rounded-full bg-[#2fb562] animate-pulse" />
              A Division of Subhashini Enterprises
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#2fb562]">
              Explore Subh Greenz
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-300">
              <li>
                <Link href="/subh-greenz" className="hover:text-[#2fb562] transition-colors flex items-center gap-1">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/subh-greenz/about" className="hover:text-[#2fb562] transition-colors flex items-center gap-1 font-medium">
                  <span>About Subh Greenz</span>
                </Link>
              </li>
              <li>
                <Link href="/subh-greenz#products" className="hover:text-[#2fb562] transition-colors flex items-center gap-1">
                  <span>Fresh Products</span>
                </Link>
              </li>
              <li>
                <Link href="/subh-greenz#stores" className="hover:text-[#2fb562] transition-colors flex items-center gap-1">
                  <span>Our Stores</span>
                </Link>
              </li>
              <li>
                <Link href="/subh-greenz/careers" className="hover:text-[#2fb562] transition-colors flex items-center gap-1 font-medium">
                  <span>Careers at Subh Greenz</span>
                </Link>
              </li>
              <li>
                <Link href="/subh-greenz/contact" className="hover:text-[#2fb562] transition-colors flex items-center gap-1 font-medium">
                  <span>Contact & Support</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Store Hours */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#2fb562]">
              Store Timings
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#2fb562] shrink-0" />
                <span>Monday - Sunday</span>
              </div>
              <p className="text-xs text-gray-400 pl-6">8:00 AM – 10:00 PM (Everyday)</p>
              <div className="pt-2 text-xs text-gray-400">
                <strong className="text-white block mb-0.5">Home Delivery:</strong>
                Available within 10km radius of Vaikom.
              </div>
            </div>
          </div>

          {/* Col 4: Corporate Backlink */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#2fb562]">
              Subhashini Group
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Explore our parent group company and international agri-export operations.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#0f4022] hover:bg-[#2fb562] hover:text-[#02042e] px-4 py-2 rounded-full border border-[#2fb562]/40 transition-all w-fit mt-1"
            >
              <span>Main Corporate Site</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Subh Greenz Hypermarket. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/subh-greenz/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/subh-greenz/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
