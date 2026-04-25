import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Internship from './components/Internship';
import Projects from './components/Projects';


import Skills from './components/Skills';
import Certification from './components/Certification';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import Disclaimer from './components/Disclaimer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Apply theme class to body for global styles if needed
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 selection:bg-[#11d3bb] selection:text-[#0d1117] overflow-x-hidden ${darkMode ? 'bg-[#0d1117] text-white' : 'bg-[#f8fafc] text-slate-900'}`}>
      <ScrollToTop />
      {/* Background Decorations */}
      <div className={`fixed inset-0 grid-bg pointer-events-none transition-opacity duration-500 z-0 ${darkMode ? 'opacity-30' : 'opacity-[0.05]'}`}></div>
      
      {/* Vertical Grid Lines for the whole page */}
      <div className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-7xl px-8 pointer-events-none z-0">
        <div className={`h-full w-full border-x flex justify-around ${darkMode ? 'border-white/[0.03]' : 'border-slate-900/[0.03]'}`}>
          <div className={`h-full border-r ${darkMode ? 'border-white/[0.03]' : 'border-slate-900/[0.03]'}`}></div>
          <div className={`h-full border-r ${darkMode ? 'border-white/[0.03]' : 'border-slate-900/[0.03]'}`}></div>
          <div className={`h-full border-r ${darkMode ? 'border-white/[0.03]' : 'border-slate-900/[0.03]'}`}></div>
        </div>
      </div>
      
      {/* Top Soft Glow */}
      <div className={`fixed top-0 left-1/2 -translate-x-1/2 w-full h-[300px] pointer-events-none overflow-hidden transition-opacity duration-500 ${darkMode ? 'opacity-60' : 'opacity-40'}`}>
        <div className="absolute top-[-50px] left-[-10%] w-[40%] h-full bg-cyan-400/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[50%] h-full bg-blue-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-[-50px] right-[-10%] w-[40%] h-full bg-purple-400/10 blur-[120px] rounded-full"></div>
      </div>

      <div className={`fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/[0.05] blur-[120px] rounded-full pointer-events-none transition-opacity duration-500 ${darkMode ? 'opacity-100' : 'opacity-50'}`}></div>
      <div className={`fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/[0.05] blur-[120px] rounded-full pointer-events-none transition-opacity duration-500 ${darkMode ? 'opacity-100' : 'opacity-50'}`}></div>

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-[1000]">
        <div className={`absolute inset-0 transition-colors duration-500 ${darkMode ? 'bg-[#0a0f1c]/90' : 'bg-[#f8fafc]/90'} backdrop-blur-md border-b ${darkMode ? 'border-white/5' : 'border-slate-200'}`}></div>
        <div className="relative">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24">
        <Routes>
        <Route path="/" element={
          <div className="space-y-0">
            <Hero darkMode={darkMode} />
            <About darkMode={darkMode} />
            <Internship darkMode={darkMode} />
            <Skills darkMode={darkMode} />
            <Projects darkMode={darkMode} />
            <Certification darkMode={darkMode} />
            <ContactSection darkMode={darkMode} />
          </div>
        } />
        <Route path="/privacy-policy" element={<PrivacyPolicy darkMode={darkMode} />} />
        <Route path="/disclaimer" element={<Disclaimer darkMode={darkMode} />} />
      </Routes>
      </div>

      <Footer darkMode={darkMode} />

      {/* Floating Scroll Top */}
      <div className="fixed bottom-10 right-10 z-50">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#f02e65] p-3 rounded-full shadow-[0_0_20px_rgba(240,46,101,0.3)] hover:translate-y-[-5px] transition-all text-white"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
