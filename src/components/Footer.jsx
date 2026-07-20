import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-zinc-900 px-6 md:px-16 lg:px-24 py-12 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-zinc-900 w-full">
        
        {/* Left Side: Brand Logo */}
        <div className="space-y-2">
          <div className="text-xl md:text-2xl font-black tracking-tight">
            TED<span className="text-ted-red">x</span>CrucibleLusaka
          </div>
          <p className="text-xs text-zinc-500 font-normal max-w-sm">
            This TEDx event is operated under license from TED. An independent event refining future perspectives.
          </p>
        </div>

        {/* Right Side: Quick Links Grid */}
        <div className="flex flex-wrap gap-x-12 gap-y-4 text-xs font-bold tracking-wider uppercase">
          <a href="#about" className="text-zinc-400 hover:text-white transition-colors duration-200">
            About
          </a>
          <a href="#speakers" className="text-zinc-400 hover:text-white transition-colors duration-200">
            Speakers
          </a>
          <a href="#program" className="text-zinc-400 hover:text-white transition-colors duration-200">
            Program
          </a>
          <a href="#contact" className="text-zinc-400 hover:text-white transition-colors duration-200">
            Contact
          </a>
        </div>
      </div>

      {/* Bottom Row: Legalities & Credits */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 text-[11px] text-zinc-500 font-normal">
        <div>
          &copy; {currentYear} TEDxCrucibleLusaka. All rights reserved.
        </div>
        <div className="flex gap-2 items-center">
          <span>Organized by Students at Crucible Lusaka.</span>
        </div>
      </div>
    </footer>
  );
}