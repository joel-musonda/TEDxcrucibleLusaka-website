import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.215, 0.610, 0.355, 1.000] 
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, x: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1, ease: [0.215, 0.610, 0.355, 1.000], delay: 0.4 }
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto overflow-hidden pt-36 pb-16 lg:py-0">
      
      {/* FIX: Changed items-center to items-end on desktop so baseline matches */}
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-16 w-full z-10">
        
        {/* Left Column: Text Content */}
        {/* FIX: Added lg:mb-4 to match the padding baseline of the picture frame container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 md:space-y-8 w-full lg:w-[58%] text-left lg:mb-4"
        >
          <motion.div 
            variants={itemVariants} 
            className="inline-block bg-ted-red text-white text-[10px] font-extrabold px-3 py-1.5 tracking-[0.2em] uppercase"
          >
            THEME: THE CRUCIBLE
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]"
          >
            TED<span className="text-ted-red">x</span>CrucibleLusaka:<br />
            <span className="text-ted-red">Ideas Worth Spreading</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-base md:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl"
          >
            Enter the Crucible—a high-pressure catalyst for transformation. Here, raw thoughts are refined through the heat of conversation, emerging as the powerful innovations that will shape the future of Lusaka and beyond.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: '#d00024' }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 bg-ted-red text-white text-xs font-bold px-6 py-4 tracking-wider uppercase transition-colors duration-200 cursor-pointer"
            >
              APPLY TO SPEAK
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: '#ffffff', color: '#000000' }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 border border-white text-white text-xs font-bold px-6 py-4 tracking-wider uppercase transition-colors duration-200 cursor-pointer"
            >
              WATCH VIDEOS
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 transform transition-transform duration-300 group-hover:scale-115">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column: Speaker Image Frame */}
        <motion.div 
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[38%] flex justify-center items-center relative"
        >
          <div className="absolute -inset-2 border border-ted-red/20 scale-95 pointer-events-none rounded-sm hidden lg:block" />
          
          <div className="w-full max-w-md lg:max-w-full aspect-[4/5] bg-zinc-900 border border-zinc-800 overflow-hidden relative shadow-2xl group">
            <img 
              src={heroImage} 
              alt="Speakers on stage at school event" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
          </div>
        </motion.div>
        
      </div>
      
      {/* Floating Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center z-10 pointer-events-none hidden lg:flex"
      >
        <span className="text-[9px] font-bold text-zinc-500 tracking-[0.25em] uppercase mb-2">SCROLL TO EXPLORE</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-ted-red"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </motion.div>

    </section>
  );
}