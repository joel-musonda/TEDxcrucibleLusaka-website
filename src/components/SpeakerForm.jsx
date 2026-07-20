import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SpeakerForm() {
  
    // Reading the key from w3forms 
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    location: '',
    bio: '',
    talkTitle: '',
    ideaWorthSpreading: '',
    whyNow: '',
    videoLink: '',
    portfolioUrl: '',
    rehearsalAvailable: false,
    eventAvailable: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionPayload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New TEDx Speaker Application: ${formData.fullName}`,
      from_name: "TEDxCrucibleLusaka",
      ...formData,
      rehearsalAvailable: formData.rehearsalAvailable ? "Yes" : "No",
      eventAvailable: formData.eventAvailable ? "Yes" : "No",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionPayload),
      });

      const result = await res.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong with the submission. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Submission error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-zinc-950 text-white py-24 px-6 min-h-screen flex items-center justify-center">
        <div className="max-w-md text-center space-y-6 bg-zinc-900/60 border border-zinc-800 p-10 backdrop-blur-md">
          <div className="w-16 h-16 bg-ted-red/10 text-ted-red border border-ted-red/20 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
            ✓
          </div>
          <h2 className="text-3xl font-black">Application Sent.</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Thank you for showing interest in giving a TED talk. The curatorial team will review your application and respond shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 md:px-8 selection:bg-ted-red selection:text-white">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* Top Header Badge & Title */}
        <div className="text-center space-y-4">
          <span className="inline-block border border-ted-red/40 bg-ted-red/10 text-ted-red text-[10px] font-mono tracking-widest uppercase px-4 py-1">
            SPEAKER CALL 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Forge Your Idea.
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            The Crucible is where raw thoughts are refined into powerful narratives. Share your vision with Lusaka and the world.
          </p>
        </div>

        {/* Form Main Container */}
        <div className="bg-zinc-900/70 border border-zinc-800 backdrop-blur-md p-6 md:p-10 shadow-2xl relative">
          
          {/* STEPPER PROGRESS BAR */}
          <div className="grid grid-cols-4 gap-2 mb-12 relative">
            {[
              { id: 1, label: 'PROFILE' },
              { id: 2, label: 'IDEA' },
              { id: 3, label: 'HISTORY' },
              { id: 4, label: 'FINALIZE' },
            ].map((s) => (
              <div key={s.id} className="flex flex-col items-center group">
                <div 
                  className={`w-10 h-10 flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 mb-2 ${
                    step > s.id 
                      ? 'bg-zinc-800 border border-zinc-700 text-white' 
                      : step === s.id 
                      ? 'bg-zinc-800 border-2 border-ted-red text-white shadow-[0_0_15px_rgba(255,43,6,0.3)]' 
                      : 'bg-zinc-900/50 border border-zinc-800 text-zinc-600'
                  }`}
                >
                  {step > s.id ? '✓' : s.id}
                </div>
                <span className={`text-[10px] font-mono tracking-widest ${step >= s.id ? 'text-zinc-300' : 'text-zinc-600'}`}>
                  {s.label}
                </span>
              </div>
            ))}
            
            {/* Red Line Connection */}
            <div className="absolute top-5 left-[12%] right-[12%] h-[2px] bg-zinc-800 -z-10">
              <div 
                className="h-full bg-ted-red transition-all duration-500" 
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* STEP CONTENT FIELDS */}
          <form onSubmit={step === 4 ? handleSubmit : handleNext} className="space-y-6">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: PROFILE */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 block">FULL NAME</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-zinc-950/80 border-b border-zinc-700 focus:border-ted-red text-white p-3 text-sm focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 block">LOCATION</label>
                      <input
                        type="text"
                        name="location"
                        required
                        placeholder="Lusaka, Zambia"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full bg-zinc-950/80 border-b border-zinc-700 focus:border-ted-red text-white p-3 text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <label className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 block">PROFESSIONAL BIO</label>
                    <textarea
                      name="bio"
                      required
                      rows={3}
                      placeholder="Tell us about yourself in 2-3 sentences..."
                      value={formData.bio}
                      onChange={handleChange}
                      className="w-full bg-zinc-950/80 border-b border-zinc-700 focus:border-ted-red text-white p-3 text-sm focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </motion.div>
              )}

              {/* STEP 2: IDEA */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 block">PROPOSED TALK TITLE</label>
                    <input
                      type="text"
                      name="talkTitle"
                      required
                      placeholder="The Future of..."
                      value={formData.talkTitle}
                      onChange={handleChange}
                      className="w-full bg-zinc-950/80 border-b border-zinc-700 focus:border-ted-red text-white p-3 text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 block">THE "IDEA WORTH SPREADING"</label>
                    <textarea
                      name="ideaWorthSpreading"
                      required
                      rows={3}
                      placeholder="What is the core message of your talk?"
                      value={formData.ideaWorthSpreading}
                      onChange={handleChange}
                      className="w-full bg-zinc-950/80 border-b border-zinc-700 focus:border-ted-red text-white p-3 text-sm focus:outline-none transition-colors resize-none"
                    />
                    <p className="text-[10px] text-zinc-500 italic">Aim for clarity and singularity. One talk, one big idea.</p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 block">WHY NOW?</label>
                    <textarea
                      name="whyNow"
                      required
                      rows={3}
                      placeholder="Explain the urgency and relevance of this topic today."
                      value={formData.whyNow}
                      onChange={handleChange}
                      className="w-full bg-zinc-950/80 border-b border-zinc-700 focus:border-ted-red text-white p-3 text-sm focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </motion.div>
              )}

              {/* STEP 3: HISTORY */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6"
                >
                  <div className="flex items-start space-x-4 bg-zinc-950/40 p-4 border border-zinc-800 mb-6">
                    <div className="text-ted-red pt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold">Past Experience</h4>
                      <p className="text-xs text-zinc-400">Share links to previous talks, portfolios, or published articles.</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 block">VIDEO LINK (YOUTUBE / VIMEO)</label>
                    <input
                      type="url"
                      name="videoLink"
                      placeholder="https://youtube.com/watch?v=..."
                      value={formData.videoLink}
                      onChange={handleChange}
                      className="w-full bg-zinc-950/80 border-b border-zinc-700 focus:border-ted-red text-white p-3 text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 block">PORTFOLIO OR PERSONAL WEBSITE</label>
                    <input
                      type="url"
                      name="portfolioUrl"
                      placeholder="https://..."
                      value={formData.portfolioUrl}
                      onChange={handleChange}
                      className="w-full bg-zinc-950/80 border-b border-zinc-700 focus:border-ted-red text-white p-3 text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </motion.div>
              )}

              {/* STEP 4: FINALIZE */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6"
                >
                  <h3 className="text-lg font-bold">Event Commitment</h3>

                  <div className="space-y-4">
                    <label className="flex items-center space-x-3 bg-zinc-950/60 p-4 border border-zinc-800 cursor-pointer hover:border-zinc-700 transition-colors">
                      <input
                        type="checkbox"
                        name="rehearsalAvailable"
                        checked={formData.rehearsalAvailable}
                        onChange={handleChange}
                        className="accent-ted-red w-4 h-4"
                      />
                      <span className="text-xs text-zinc-300">I am available for the rehearsal dates (Nov 15-20, 2026).</span>
                    </label>

                    <label className="flex items-center space-x-3 bg-zinc-950/60 p-4 border border-zinc-800 cursor-pointer hover:border-zinc-700 transition-colors">
                      <input
                        type="checkbox"
                        name="eventAvailable"
                        checked={formData.eventAvailable}
                        onChange={handleChange}
                        className="accent-ted-red w-4 h-4"
                      />
                      <span className="text-xs text-zinc-300">I am available for the main event (December 5, 2026).</span>
                    </label>
                  </div>

                  <div className="p-4 bg-ted-red/5 border-l-2 border-ted-red space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-ted-red uppercase font-bold block">NOTICE</span>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Selected speakers will undergo a rigorous content development and coaching cycle. Ensure you can commit 30 minutes weekly during this period.
                    </p>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>

            {/* BUTTON FOOTER */}
            <div className="flex justify-between items-center pt-8 border-t border-zinc-800/80">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-3 border border-zinc-700 text-xs font-mono tracking-widest text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
                >
                  BACK
                </button>
              ) : <div />}

              {step < 4 ? (
                <button
                  type="submit"
                  className="px-8 py-3 bg-ted-red hover:bg-ted-red/90 text-white text-xs font-mono font-bold tracking-widest uppercase transition-all shadow-lg"
                >
                  NEXT STEP
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-ted-red hover:bg-ted-red/90 disabled:bg-zinc-800 text-white text-xs font-mono font-bold tracking-widest uppercase transition-all shadow-lg"
                >
                  {isSubmitting ? "FORGING..." : "SUBMIT APPLICATION"}
                </button>
              )}
            </div>

          </form>

        </div>

        <p className="text-center text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
          APPLICATION DEADLINE: SEPTEMBER 30, 2026
        </p>

      </div>
    </div>
  );
}