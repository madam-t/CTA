/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, User, Building, Radio, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface LeadDiagnosisFormProps {
  onFormSuccess?: () => void;
}

export default function LeadDiagnosisForm({ onFormSuccess }: LeadDiagnosisFormProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyPurpose, setCompanyPurpose] = useState('');
  const [biggestChallenge, setBiggestChallenge] = useState('');
  const [weeklyWastedHours, setWeeklyWastedHours] = useState(15);

  const handleAddFieldSuggestion = (field: 'purpose' | 'challenge', value: string) => {
    if (field === 'purpose') {
      setCompanyPurpose(value);
    } else {
      setBiggestChallenge(value);
    }
  };

  const isValidEmail = (emailStr: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(emailStr.trim());
  };

  const handleNext = () => {
    if (step === 1 && (!name || !email || !phone || !isValidEmail(email))) {
      alert('Please fill out all contact fields with a valid email address to proceed.');
      return;
    }
    if (step === 2 && (!companyName || !companyPurpose)) {
      alert("Please enter your company's profile description.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!biggestChallenge) {
      alert('Please explain your biggest administrative or systems challenge.');
      return;
    }

    setLoading(true);

    const emailBody = `
New Operations Diagnosis Evaluation Submission

Client Contact Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}

Business Profile:
- Business Name: ${companyName}
- Core Focus / Purpose: ${companyPurpose}

Operational Bottleneck & Roadblocks:
- Bottleneck Description: ${biggestChallenge}
- Weekly Administrative Wasted Hours: ${weeklyWastedHours} hours/week

Recipients:
info@ctaffiliates.com, chase.s@ctaffiliates.com, madamt@ctaffiliates.com
    `.trim();

    try {
      // 1. Send via Web3Forms API (Direct frontend email delivery service)
      const web3FormsPayload = {
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "web3forms_cta_access_key",
        subject: `New Operations Diagnosis Request: ${name} (${companyName})`,
        from_name: "CTA Affiliates Website",
        to_email: "info@ctaffiliates.com, chase.s@ctaffiliates.com, madamt@ctaffiliates.com",
        name,
        email,
        phone,
        companyName,
        companyPurpose,
        biggestChallenge,
        weeklyWastedHours,
        message: emailBody,
      };

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(web3FormsPayload),
      }).catch(() => {});

      // 2. Submit as Netlify Form URL-encoded POST if hosted on Netlify
      const netlifyParams = new URLSearchParams({
        "form-name": "diagnosis-evaluation",
        name,
        email,
        phone,
        companyName,
        companyPurpose,
        biggestChallenge,
        weeklyWastedHours: String(weeklyWastedHours),
      });

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: netlifyParams.toString(),
      }).catch(() => {});

    } catch (err) {
      console.error("Form submission notification error:", err);
    } finally {
      setLoading(false);
      setStep(4);
      if (onFormSuccess) {
        onFormSuccess();
      }
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setCompanyName('');
    setCompanyPurpose('');
    setBiggestChallenge('');
    setWeeklyWastedHours(15);
    setStep(1);
  };

  return (
    <section id="diagnosis-form" className="py-24 px-4 bg-black relative">
      {/* Visual background divider lines */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-[0.02]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-gold-500 h-full" />
        ))}
      </div>

      <div className="max-w-4xl mx-auto backdrop-blur-md relative z-10">
        
        {/* Header branding */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-gold-500 font-mono text-xs tracking-widest uppercase flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 bg-gold-400 rounded-full animate-ping" />
            DIAGNOSIS EVALUATION
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white">
            Book an Operations <span className="text-gold-500 italic">Diagnosis</span>
          </h2>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto">
            Tell us your operational bottlenecks. We will design a custom optimization blueprint before our call.
          </p>
        </div>

        {/* Wizard Card */}
        <div className="bg-[#121212] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl relative">
          
          {/* Progress Tracker Horizontal */}
          <div className="bg-[#181818] px-8 py-4 border-b border-neutral-800 flex justify-between items-center text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-6">
              <span className={step >= 1 ? 'text-gold-500 font-bold' : ''}>1. CONTACTS</span>
              <ArrowRight className="w-3 h-3 text-neutral-700" />
              <span className={step >= 2 ? 'text-gold-500 font-bold' : ''}>2. BUSINESS</span>
              <ArrowRight className="w-3 h-3 text-neutral-700" />
              <span className={step >= 3 ? 'text-gold-400 font-bold' : ''}>3. ROADBLOCKS</span>
            </div>
            <div className="text-neutral-500">
              STEP <span className="text-white font-bold">{Math.min(step, 3)}</span> OF 3
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: CONTACT DETAILS */}
              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-medium text-white flex items-center gap-2">
                      <User className="w-5 h-5 text-gold-500" /> Let’s start with the basics.
                    </h3>
                    <p className="text-xs text-neutral-400">Who should we contact for the follow-up systems walkthrough?</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs text-neutral-400 font-mono uppercase">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-3.5 w-4 h-4 text-neutral-500" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Neo Chase-Shimi"
                          className="w-full bg-[#1c1c1c] border border-neutral-800 focus:border-gold-500 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white font-sans focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-neutral-400 font-mono uppercase">Mobile Number (WhatsApp Preferred)</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-3.5 w-4 h-4 text-neutral-500" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+264 81 123 4567"
                          className="w-full bg-[#1c1c1c] border border-neutral-800 focus:border-gold-500 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white font-mono focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-neutral-400 font-mono uppercase">Professional Email Address</label>
                    <div className="relative">
                      <Mail className={`absolute left-4 top-3.5 w-4 h-4 ${email.length > 0 && !isValidEmail(email) ? 'text-red-500' : 'text-neutral-500'}`} />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="neo@ctaffiliates.com"
                        className={`w-full bg-[#1c1c1c] border ${
                          email.length > 0 && !isValidEmail(email)
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-neutral-800 focus:border-gold-500'
                        } rounded-xl py-3.5 pl-11 pr-4 text-sm text-white font-mono focus:outline-none transition-colors`}
                      />
                    </div>
                    {email.length > 0 && !isValidEmail(email) && (
                      <p className="text-xs text-red-500 font-mono mt-1">
                        Please enter a valid email address (e.g. name@domain.com or name@domain.na).
                      </p>
                    )}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!name || !email || !phone || !isValidEmail(email)}
                      className="bg-gold-500 hover:bg-gold-400 disabled:bg-neutral-800 disabled:text-neutral-500 disabled:cursor-not-allowed text-black px-6 py-3.5 rounded-xl text-sm font-display font-medium flex items-center gap-2 transition-all group cursor-pointer"
                    >
                      Continue to Business Info
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: COMPANY LANDSCAPE */}
              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-medium text-white flex items-center gap-2">
                      <Building className="w-5 h-5 text-gold-500" /> Describe your Business
                    </h3>
                    <p className="text-xs text-neutral-400">Briefly capture what your enterprise does and your current scale.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs text-neutral-400 font-mono uppercase">Company Name</label>
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Namibian Logistics Express"
                        className="w-full bg-[#1c1c1c] border border-neutral-800 focus:border-gold-500 rounded-xl py-3.5 px-4 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-neutral-400 font-mono uppercase">In one sentence, describe what your company does:</label>
                      <textarea
                        required
                        rows={2}
                        value={companyPurpose}
                        onChange={(e) => setCompanyPurpose(e.target.value)}
                        placeholder="We provide prompt freight logistics and regional dispatching between Walvis Bay and Windhoek."
                        className="w-full bg-[#1c1c1c] border border-neutral-800 focus:border-gold-500 rounded-xl p-4 text-sm text-white focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Suggestions Box to aid fast testing */}
                    <div className="space-y-2">
                      <p className="text-[10px] text-neutral-500 font-mono tracking-wider uppercase">Or Click a sample description to populate:</p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'We are a high-end luxury safari agency operating out of Swakopmund.',
                          'We manage B2B operations for a regional affiliate distributor network.',
                          'We run a busy professional dental and medical facility with 3 clinical hubs.'
                        ].map((suggestion, idx) => (
                          <button
                            type="button"
                            key={idx}
                            onClick={() => handleAddFieldSuggestion('purpose', suggestion)}
                            className="bg-neutral-900 hover:bg-neutral-800 text-[11px] text-neutral-400 px-3 py-1.5 rounded-lg border border-neutral-800 transition-colors cursor-pointer"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-neutral-500 hover:text-white text-sm font-medium flex items-center gap-2 group cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!companyName || !companyPurpose}
                      className="bg-gold-500 hover:bg-gold-400 disabled:bg-neutral-800 disabled:text-neutral-500 text-black px-6 py-3.5 rounded-xl text-sm font-display font-medium flex items-center gap-2 transition-all group cursor-pointer"
                    >
                      Continue to Roadblocks
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: ROADBLOCKS & BOTTLENECK CHALLENGES */}
              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl font-display font-medium text-white flex items-center gap-2">
                      <Radio className="w-5 h-5 text-gold-500 animate-pulse" /> Identify the Operations Bottleneck
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs text-neutral-400 font-mono uppercase">In one sentence, describe the biggest challenge your company currently faces:</label>
                      <textarea
                        required
                        rows={3}
                        value={biggestChallenge}
                        onChange={(e) => setBiggestChallenge(e.target.value)}
                        placeholder="Leads from Facebook/Instagram sit in the inbox for 48 hours because we rely on the manual sales team to transfer them."
                        className="w-full bg-[#1c1c1c] border border-neutral-800 focus:border-gold-500 rounded-xl p-4 text-sm text-white focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Suggestions Box */}
                    <div className="space-y-2">
                      <p className="text-[10px] text-neutral-500 font-mono tracking-wider uppercase">Or Click a sample challenge bottleneck:</p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'No automated response tracker so leads get ghosted over the weekend.',
                          'Clunky manual scheduling flows that result in double-booked customer calls.',
                          'Manual reporting requires 10 hours a week of compiling messy WhatsApp text messages.'
                        ].map((suggestion, idx) => (
                          <button
                            type="button"
                            key={idx}
                            onClick={() => handleAddFieldSuggestion('challenge', suggestion)}
                            className="bg-neutral-900 hover:bg-neutral-800 text-[11px] text-neutral-400 px-3 py-1.5 rounded-lg border border-neutral-800 transition-colors cursor-pointer"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Wasted Hours Link */}
                    <div className="bg-[#1a1309] border border-gold-950/40 p-4 rounded-xl flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-mono text-gold-400 block uppercase">Hours slider check</span>
                        <span className="text-xs text-neutral-300">Roughly how many administrative hours per week do you waste?</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min="1"
                          max="80"
                          value={weeklyWastedHours}
                          onChange={(e) => setWeeklyWastedHours(Number(e.target.value))}
                          className="w-16 bg-[#261d0f] border border-gold-900/60 font-mono text-center text-sm font-bold text-gold-400 rounded p-2 focus:outline-none focus:border-gold-500"
                        />
                        <span className="text-xs text-neutral-400 font-mono">hrs</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-neutral-500 hover:text-white text-sm font-medium flex items-center gap-2 group cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading || !biggestChallenge}
                      className="bg-gold-500 hover:bg-gold-400 disabled:bg-neutral-800 disabled:text-neutral-500 text-black px-8 py-4 rounded-xl text-sm font-display font-semibold flex items-center gap-2 transition-all shadow-lg shadow-gold-500/10 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Securing Connection...
                        </>
                      ) : (
                        <>
                          Request Diagnosis Call
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: SUCCESS OVERLAY */}
              {step === 4 && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-6 space-y-6"
                >
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gold-950/80 border border-gold-500 flex items-center justify-center text-gold-500 animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-gold-500 tracking-wider bg-gold-950/40 border border-gold-900/60 px-3 py-1 rounded-full uppercase">Form Sent Successfully</span>
                    <h3 className="text-2xl md:text-3xl font-display font-medium text-white">
                      Your System Diagnosis has been <span className="text-gold-500 italic">Initiated</span>.
                    </h3>
                    <p className="text-sm md:text-base text-neutral-300 max-w-lg mx-auto leading-relaxed">
                      Thank you <span className="text-white font-semibold">{name}</span>. Mr Chase and Madam T at CTA are analyzing your bottleneck. We will reach out to you shortly.
                    </p>
                  </div>

                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="border border-neutral-800 hover:border-neutral-700 bg-neutral-900/40 text-neutral-300 px-5 py-2.5 rounded-xl text-xs font-mono transition-colors cursor-pointer"
                    >
                      SUBMIT ANOTHER DIAGNOSIS
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>

      </div>
    </section>
  );
}
