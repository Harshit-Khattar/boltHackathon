import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PrizesSection from './components/PrizesSection';
import SponsorsSection from './components/SponsorsSection';
import JudgesSection from './components/JudgesSection';
import FAQSection from './components/FAQSection';
import ThreeBackground from './components/ThreeBackground';
import InteractiveElements from './components/InteractiveElements';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1f] text-white">
      <ThreeBackground />
      <InteractiveElements />
      <Navbar scrollY={scrollY} />
      <main className="relative z-10">
        <div className="">
          <HeroSection />
          <div className="py-20"></div>
          <AboutSection />
          <div className="py-00"></div>
          <PrizesSection />
          <div className="py-20"></div>
          <SponsorsSection />
          <div className="py-20"></div>
          <JudgesSection />
          <div className="py-20"></div>

          <FAQSection />
          <div className="py-20"></div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;