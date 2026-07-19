import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    // We add the 'relative' class so the fixed background glow stays positioned correctly
    <div className="relative min-h-screen">
      {/* 1. Dynamic Background Glow */}
      <div className="bg-crucible-glow" aria-hidden="true" />

      {/* 2. Navigation Bar */}
      <Navbar />

      {/* 3. Main Content Area */}
      <main className="z-10 relative">
        <Hero />
        {/* We can add future sections like Speakers and Program here */}
      </main>
    </div>
  );
}

export default App;