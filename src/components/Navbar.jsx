import React from 'react';
import { motion } from 'framer-motion';

const navLinks = ['ABOUT', 'SPEAKERS', 'PROGRAM', 'CONTACT'];

export default function Navbar({ onApplyClick, onLogoClick }) {
  return (
    <motion.nav 
      // Entrance animation: Slide down from the top
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-20 px-6 md:px-12 flex items-center justify-between z-50 bg-black/80 backdrop-blur-sm fixed top-0"
    >
      {/* 1. Logo Section (Clicking takes user back home) */}
      <div 
        onClick={onLogoClick}
        className="font-extrabold text-2xl tracking-tighter cursor-pointer select-none"
      >
        TED<span className="text-ted-red">x</span>
        <span className="text-white font-semibold">CrucibleLusaka</span>
      </div>

      {/* 2. Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={onLogoClick} // Navigating to a section switches back to the main page
            className="text-xs font-semibold text-zinc-300 hover:text-white tracking-widest transition-colors duration-200"
          >
            {link}
          </a>
        ))}
        
        {/* Call to Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onApplyClick}
          className="bg-ted-red text-white text-xs font-bold px-6 py-3 tracking-widest uppercase hover:bg-[#d00024] transition-colors duration-300 cursor-pointer"
        >
          APPLY TO SPEAK
        </motion.button>
      </div>

      {/* 3. Mobile Menu Icon */}
      <div className="md:hidden text-white cursor-pointer p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </motion.nav>
  );
}