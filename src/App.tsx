/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowDown, Flame, Globe, MapPin, Phone, Mail, CheckCircle2, ChevronRight, Zap, Target, Star, Layers, Cpu, Award } from 'lucide-react';
import ChaosCalculator from './components/ChaosCalculator';
import { CtaFullLogo } from './components/CtaLogo';
import BentoServices from './components/BentoServices';
import Timeline from './components/Timeline';
import Founders from './components/Founders';
import LeadDiagnosisForm from './components/LeadDiagnosisForm';

export default function App() {
  const [successToast, setSuccessToast] = useState(false);

  const handleFormSubmitted = () => {
    setSuccessToast(true);
    setTimeout(() => setSuccessToast(false), 5000);
  };

  const scrollToDiagnosis = () => {
    const el = document.getElementById('diagnosis-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services-bento');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-black text-white selection:bg-gold-500 selection:text-black min-h-screen relative font-sans">
      
      {/* Top Glassmorphic Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#000000]/60 backdrop-blur-md border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          
          {/* Logo Brand Frame with Custom SVG Logo */}
          <CtaFullLogo size={40} showTagline={false} />

          {/* Quick Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-neutral-400">
            <button onClick={scrollToServices} className="hover:text-gold-400 transition-colors cursor-pointer">SERVICES</button>
            <a href="#chaos-calculator" className="hover:text-gold-400 transition-colors">CHAOS TAX</a>
            <a href="#timeline" className="hover:text-gold-400 transition-colors">ROADMAP</a>
            <a href="#founders" className="hover:text-gold-400 transition-colors">ARCHITECTS</a>
          </nav>

          {/* Golden CTA Button */}
          <div>
            <button
              onClick={scrollToDiagnosis}
              className="bg-gold-500 hover:bg-gold-400 text-black px-4 py-2.5 rounded-xl text-xs font-display font-semibold transition-all duration-300 shadow-md shadow-gold-500/5 cursor-pointer hover:scale-[1.02]"
            >
              Book a Diagnosis
            </button>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 overflow-hidden pt-12">
        {/* Dynamic Background gold gradients */}
        <div className="absolute top-[10%] left-1/4 w-[350px] h-[350px] bg-gold-500/[0.04] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] right-10 w-[400px] h-[400px] bg-gold-400/[0.03] blur-[140px] rounded-full pointer-events-none" />
        
        {/* Dark theme geometric grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-35" />

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-[#141414] border border-neutral-800 rounded-full px-4 py-1.5 text-xs text-neutral-400 font-mono">
            <Flame className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
            <span>STREAMLINE. OPTIMIZE. SUCCEED</span>
          </div>

          {/* Big Header (Bricolage Grotesque / Space Grotesk) */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-[0.9] uppercase max-w-4xl mx-auto">
            Your Operations <br /> Are Messy. <br />
            <span className="text-gold-500 italic block mt-3 font-normal font-display lowercase tracking-normal">we fix that.</span>
          </h1>

          {/* Subheader */}
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-sans">
            We build automated systems to free you from administrative drag. 90 days to total operational autopilot.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <button
              onClick={scrollToDiagnosis}
              className="w-full sm:w-auto bg-gradient-to-r from-gold-600 to-gold-400 text-black px-8 py-4 rounded-xl font-display font-semibold transition-all duration-300 shadow-xl shadow-gold-500/10 cursor-pointer gold-glow-button active:scale-95"
            >
              Book My Diagnosis Call
            </button>
            <button
              onClick={scrollToServices}
              className="w-full sm:w-auto border border-neutral-800 hover:border-neutral-700 bg-[#0c0c0c] text-neutral-300 px-6 py-4 rounded-xl text-xs font-mono transition-colors cursor-pointer tracking-wider flex items-center justify-center gap-2 group"
            >
              INSPECT OPERATIONAL PROTOCOLS
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>



        </div>
      </section>

      {/* Services Bento Grid Section */}
      <BentoServices onCTASelect={scrollToDiagnosis} />

      {/* Chaos Calculator Section */}
      <ChaosCalculator onCTASelect={scrollToDiagnosis} />



      {/* Roadmap Timeline Section */}
      <Timeline />

      {/* Founders Section */}
      <Founders onCTASelect={scrollToDiagnosis} />

      {/* Big Submission Form Section */}
      <LeadDiagnosisForm onFormSuccess={handleFormSubmitted} />

      {/* Web Footer */}
      <footer className="bg-[#050505] border-t border-neutral-900 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 text-sm text-neutral-400">
          
          {/* Logo Brand Descriptor with Custom SVG Logo */}
          <div className="md:col-span-5 space-y-4">
            <CtaFullLogo size={36} showTagline={true} />
            <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
              We design and build custom communication networks, booking automations, and invoicing pipelines to put your business on autopilot.
            </p>
            <div className="text-[10px] font-mono text-neutral-600">
              © {new Date().getFullYear()} Chase, Tijmune & Affiliates. All Rights Reserved.
            </div>
          </div>

          {/* Quick contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="text-xs font-mono uppercase tracking-widest text-white">COMMUNICATION CODES</h5>
            <div className="space-y-3 text-xs text-neutral-400">
              <a href="tel:+264814465591" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-gold-500" />
                <span>+264 81 446 5591</span>
              </a>
              <a href="tel:+264812209306" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-gold-500" />
                <span>+264 81 220 9306</span>
              </a>
              <a href="mailto:info@ctaffiliates.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-gold-500" />
                <span>info@ctaffiliates.com</span>
              </a>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-gold-500" />
                <span>Windhoek, Namibia</span>
              </div>
            </div>
          </div>

          {/* Location & Slogan Details */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="text-xs font-mono uppercase tracking-widest text-white">CORE SYSTEMS ETHOS</h5>
            <p className="text-xs text-neutral-500 italic">
              "We don’t stay forever, we set you free on autopilot."
            </p>
          </div>

        </div>
      </footer>

      {/* Success Notification Toast */}
      {successToast && (
        <div className="fixed bottom-6 right-6 bg-[#161616] border border-gold-500/60 p-4 rounded-xl shadow-2xl z-50 max-w-sm flex gap-3 animate-slide-in">
          <div className="h-8 w-8 rounded-full bg-gold-950 text-gold-500 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-white block font-display">System Lead Logged</span>
            <span className="text-[11px] text-neutral-400 leading-tight block mt-0.5">
              Your Diagnosis Form completed. Check the system logs at the bottom of the page to inspect visual data.
            </span>
          </div>
        </div>
      )}

    </div>
  );
}
