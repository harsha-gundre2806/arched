import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#ebceb2] text-[#2c2621] font-sans border-t border-[#e8dfd3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start pb-12 border-b border-[#e8dfd3]">
          
          {/* Column 1: Studio Identity */}
          <div className="md:col-span-5 space-y-4 text-left">
            <span className="text-xl font-serif font-semibold tracking-widest text-[#1a1512]">
              THE AR<span className="text-amber-600">.</span> ACHIEVER
            </span>
            <p className="max-w-sm text-xs sm:text-sm text-[#5c5047] font-light leading-relaxed">
              An elite tech-driven education ecosystem specializing in structural engineering, conceptual frameworks, and multi-dimensional architectural training.
            </p>
          </div>

          {/* Column 2: Communication Node */}
          <div className="md:col-span-3 space-y-3.5 text-left">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#1a1512] font-bold">
              Connect
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm text-[#5c5047] font-light">
              <p className="hover:text-amber-700 transition-colors duration-200">
                <span className="font-mono text-[11px] text-[#a39485] block uppercase tracking-wider">Email</span>
                info@thearachiever.com
              </p>
              <p className="hover:text-amber-700 transition-colors duration-200 pt-1">
                <span className="font-mono text-[11px] text-[#a39485] block uppercase tracking-wider">Phone</span>
                +91 93728 25114
              </p>
            </div>
          </div>

          {/* Column 3: Physical Coordinates */}
          <div className="md:col-span-4 space-y-3.5 text-left">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#1a1512] font-bold">
              Address
            </h4>
            <p className="text-xs sm:text-sm text-[#5c5047] font-light leading-relaxed">
              20-2-472/9F , Revenue Ward No. 20 , Korlagunta Main Road,<br />
              Tirupati, Andhra Pradesh <br />
              <span className="font-mono text-[14px] text-[#a39485]">PIN — 517501, India</span>
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal Nodes */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Copyright Assertion */}
          <p className="text-[11px] font-mono text-[#a39485] uppercase tracking-wider text-center sm:text-left">
            &copy; {new Date().getFullYear()} The Ar Achiever. All rights reserved.
          </p>
          
          {/* Legal Document Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] font-mono uppercase tracking-widest text-[#4a3e35]">
            <a href="/privacy-policy" className="hover:text-amber-700 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="hover:text-amber-700 transition-colors duration-200">
              Terms &amp; Conditions
            </a>
            <a href="/refunds" className="hover:text-amber-700 transition-colors duration-200">
              Returns &amp; Refunds
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}