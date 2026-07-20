import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png';
import crucibleBuildingImg from '../assets/crucible.png';
import bg from '../assets/bg.png'

// --- Animation Variants for Scroll Reveals ---
const sectionFadeIn = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } 
  }
};

const horizontalStepVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function MainContent({ onApplyClick }) {
  return (
    <div className="bg-black text-white selection:bg-ted-red selection:text-white overflow-hidden">
      
      {/* =========================================================
          SECTION 1: THE INSTITUTION (Refining the Future)
         ========================================================= */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={sectionFadeIn}
          className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center w-full"
        >
          {/* Left Text Block */}
          <div className="w-full lg:w-1/2 bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-8 md:p-12 relative group shadow-xl">
            
            {/* Logo Replacement */}
            <div className="mb-6">
              <img 
                src= {logoImg}
                alt="Crucible Lusaka Logo" 
                className="h-6 md:h-30 w-auto object-contain"
                
              />
             
            </div>

            {/* School Description */}
            <p className="text-zinc-300 leading-relaxed mb-6 font-normal">
            Crucible Lusaka serves as our vibrant intellectual hub where students are challenged to think critically, innovate fearlessly, and develop ideas that extend far beyond traditional boundaries.
            </p>
            <p className="text-zinc-300 leading-relaxed font-normal">
              By providing an empowering environment for young people, the school nurtures the next generation of leaders, thinkers, and changemakers as they submit their perspectives to the public stage and shape the future of the country and beyond.
            </p>
            <span className="absolute bottom-4 right-6 text-[10px] font-bold text-zinc-700 tracking-widest uppercase pointer-events-none">
              TEDx
            </span>
          </div>

          {/* Right Action Graphic / Crucible Building Image */}
          <div className="w-full lg:w-1/2 aspect-[4/4] overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl relative group">
            <img 
              src={crucibleBuildingImg} 
              alt="Crucible Building" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden absolute inset-0 bg-gradient-to-br from-zinc-900 to-black items-center justify-center p-8 text-center flex-col">
              <span className="text-ted-red text-6xl font-black opacity-30 tracking-tighter mb-2">CRUCIBLE</span>
              <p className="text-xs text-zinc-500 tracking-widest uppercase">Crucible Building Image Placeholder</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          SECTION 2: CARDS 
         ========================================================= */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-24">
        <div className="w-full">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionFadeIn}
            className="mb-12 text-left"
          >
            <span className="text-ted-red text-[10px] font-extrabold tracking-[0.3em] uppercase block mb-3">
              Our Pitch
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Why Give A Ted Talk?
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            {/* Card 1 */}
            <motion.div 
              variants={cardVariant}
              whileHover={{ y: -6, border: '1px solid #ff2b06' }}
              className="md:col-span-7 bg-zinc-900/50 border border-zinc-800 p-8 flex flex-col justify-between min-h-[220px] transition-all duration-300"
            >
              <div>
                <h3 className="text-xl font-bold mb-3">Encourages critical thinking</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                  The format of TedX Talks encourages critical thinking, as speakers are given limited time to present their ideas engagingly. This forces listeners to pay attention and to think critically about what is being said.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={cardVariant}
              whileHover={{ y: -6 }}
              className="md:col-span-5 bg-zinc-900/90 border-l-4 border-ted-red border-y border-r border-zinc-800 p-8 flex flex-col justify-between min-h-[220px] shadow-lg transition-all duration-300"
            >
              <div>
                <div className="text-ted-red mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-6-6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm12 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Helps develop public speaking skills</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-normal">
              Listening and giving TEDx Talks can foster development of public speaking skills. By hearing how othr people deliver their ideas, one can learn how to structure their speeches and presentations.


                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={cardVariant}
              whileHover={{ y: -6 }}
              className="md:col-span-4 min-h-[220px] overflow-hidden bg-zinc-900 border border-zinc-800 relative group transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/80 to-transparent z-10 p-8 flex items-end">
                <h3 className="text-xl font-bold">Widens knowledge</h3>
              </div>
              <img 
                src={bg}
                alt="Lusaka urban backdrop" 
                className="w-full h-full object-cover opacity-30 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-40 group-hover:grayscale-0"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              variants={cardVariant}
              whileHover={{ y: -6, border: '1px solid #ff2b06' }}
              className="md:col-span-8 bg-zinc-900/50 border border-zinc-800 p-8 flex flex-col justify-between min-h-[220px] transition-all duration-300 relative overflow-hidden"
            >
              <div className="z-10">
                <h3 className="text-xl font-bold mb-3">Collaborative Forging</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-normal max-w-xl">
                  Connect face-to-face with 500+ innovative thinkers, creators, and change-makers dynamic across the continent.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: SELECTION PROCESS
         ========================================================= */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 max-w-5xl mx-auto py-24">
        <div className="w-full">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionFadeIn}
            className="mb-16 text-left"
          >
            <span className="text-ted-red text-[10px] font-extrabold tracking-[0.3em] uppercase block mb-3">
              THE ROAD TO THE STAGE
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Selection Process
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="relative border-l-2 border-zinc-800 pl-6 ml-4 space-y-12"
          >
            {/* Step 1 */}
            <motion.div variants={horizontalStepVariant} className="relative group">
              <div className="absolute -left-[35px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-700 group-hover:border-ted-red transition-colors duration-300" />
              <div className="space-y-2">
                <span className="text-ted-red text-[10px] font-black tracking-wider uppercase block">
                  PHASE 01 — APPLICATION SUBMISSION
                </span>
                <h3 className="text-xl font-bold">Pitch Your Core Concept</h3>
                <p className="text-zinc-400 text-sm max-w-2xl font-normal leading-relaxed">
                  Fill out our deep review application stating clearly what your idea worth spreading is, why it holds structural value, and why you are the designated engine to deliver it.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={horizontalStepVariant} className="relative group">
              <div className="absolute -left-[35px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-700 group-hover:border-ted-red transition-colors duration-300" />
              <div className="space-y-2">
                <span className="text-ted-red text-[10px] font-black tracking-wider uppercase block">
                  PHASE 02 — CURATORIAL INTERVIEW
                </span>
                <h3 className="text-xl font-bold">Outcome</h3>
                <p className="text-zinc-400 text-sm max-w-2xl font-normal leading-relaxed">
                  Shortlisted visionaries are invited to sit down with the executive curatorial committee. You will deliver a concise 3-minute raw framework presentation followed by constructive scope Q&A.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={horizontalStepVariant} className="relative group">
              <div className="absolute -left-[35px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-700 group-hover:border-ted-red transition-colors duration-300" />
              <div className="space-y-2">
                <span className="text-ted-red text-[10px] font-black tracking-wider uppercase block">
                  PHASE 03 — CO-CREATION & FORGING
                </span>
                <h3 className="text-xl font-bold">Intensive Scripting Workshops</h3>
                <p className="text-zinc-400 text-sm max-w-2xl font-normal leading-relaxed">
                  Selected speakers enter the production phase. Work alongside TEDx stage coaches to structure structural transitions, design visual slides, and polish theatrical delivery parameters.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: TIMELINE / CALL TO ACTION
         ========================================================= */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 max-w-5xl mx-auto py-24 text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={sectionFadeIn}
          className="w-full space-y-10"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
            Do You Have an Idea?
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            We are looking for the visionaries, the outliers, and the quiet observers who hold a perspective capable of changing how we see the world. Give it a shot!.
          </p>

          <div className="bg-zinc-900/60 border border-zinc-800 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-800 max-w-3xl mx-auto shadow-xl p-4">
            <div className="p-8 space-y-2 text-center md:text-left md:pl-10">
              <span className="text-[10px] font-extrabold text-ted-red tracking-widest uppercase block">
                DEADLINE FOR SUBMISSIONS
              </span>
              <span className="text-2xl md:text-3xl font-black block tracking-tight">
                September 30, 2026
              </span>
            </div>
            <div className="p-8 space-y-2 text-center md:text-left md:pl-12">
              <span className="text-[10px] font-extrabold text-ted-red tracking-widest uppercase block">
                EVENT DATE
              </span>
              <span className="text-2xl md:text-3xl font-black block tracking-tight">
                November 15, 2026
              </span>
            </div>
          </div>

          <div className="pt-4">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: '#d00024' }}
              whileTap={{ scale: 0.96 }}
              onClick={onApplyClick}
              className="bg-ted-red text-white text-xs font-bold px-8 py-4 tracking-widest uppercase shadow-lg cursor-pointer"
            >
              APPLY TO SPEAK
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}