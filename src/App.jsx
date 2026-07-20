import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Footer from './components/Footer'; 
import SpeakerForm from './components/SpeakerForm'; // 1. Import the new SpeakerForm

function App() {
  // 2. Track whether the user is on the application page or landing page
  const [showApplyForm, setShowApplyForm] = useState(false);

  const handleOpenApply = () => {
    setShowApplyForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setShowApplyForm(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Pass the navigation handlers to Navbar */}
      <Navbar onApplyClick={handleOpenApply} onLogoClick={handleGoHome} />

      {/* Conditionally render Form OR Home Content */}
      {showApplyForm ? (
        <div className="pt-20">
          <SpeakerForm />
        </div>
      ) : (
        <>
          <Hero onApplyClick={handleOpenApply} />
          {/* Pass handler to MainContent so the lower CTA button works too */}
          <MainContent onApplyClick={handleOpenApply} />
        </>
      )}

      <Footer /> 
    </div>
  );
}

export default App;