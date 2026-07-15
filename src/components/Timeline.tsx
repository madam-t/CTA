/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Layers, ShieldCheck, CheckSquare, Sparkles, Award } from 'lucide-react';

export default function Timeline() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      month: 1,
      title: 'Audit & Blueprint',
      subTitle: 'MONTH 1: PLUG THE HOLES',
      icon: <Layers className="w-5 h-5 text-gold-500" />,
      description: 'We run a diagnostic sweep across your operations, tracking exactly where leads leak and admin time is wasted.',
      deliverables: [
        'Operations Bottleneck Ledger',
        '90-Day Automation Blueprint',
        'Lead Speed & Inbox Audit'
      ],
      outcome: 'A clear operations roadmap, removing manual administrative guesswork entirely.'
    },
    {
      month: 2,
      title: 'Build & Launch',
      subTitle: 'MONTH 2: THE ENGINE ONLINE',
      icon: <Calendar className="w-5 h-5 text-gold-500" />,
      description: 'We deploy custom automations connecting your socials, chats, and calendars directly to a central CRM.',
      deliverables: [
        'Centralized Leads Dashboard',
        'WhatsApp & Booking Automations',
        'Self-Healing Database Integrations'
      ],
      outcome: 'Immediate lead response speed established and up to 18 hours of weekly admin time reclaimed.'
    },
    {
      month: 3,
      title: 'Sovereignty',
      subTitle: 'MONTH 3: AUTOPILOT HANDOVER',
      icon: <ShieldCheck className="w-5 h-5 text-gold-500" />,
      description: "We don't stay forever—we hand over full sovereignty, train your staff, and document your exact systems.",
      deliverables: [
        'Staff System Playbooks',
        'Escalation & Monitoring Routing',
        'Post-Launch Integrity Check-ups'
      ],
      outcome: 'Your organization runs at 100% capacity on autopilot. Total operations release.'
    }
  ];

  return (
    <section id="timeline" className="py-24 px-4 bg-black relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-gold-500 text-xs font-mono tracking-widest uppercase flex items-center justify-center gap-2">
            <Award className="w-3 h-3 text-gold-500" />
            THE 3-MONTH STREAMLINE ROADMAP
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white">
            From Chaos to <span className="text-gold-500 italic">Autopilot</span>
          </h2>
          <p className="text-neutral-400 text-sm">
            Our high-intensity, structured transition transforms your manual administrative operations into self-contained B2B scaling engines.
          </p>
        </div>

        {/* Desktop Progress Bar Header */}
        <div className="hidden md:grid grid-cols-3 gap-6 relative max-w-4xl mx-auto pb-4">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-neutral-900 -translate-y-1/2 z-0" />
          {steps.map((st) => (
            <button
              key={st.month}
              onClick={() => setActiveStep(st.month)}
              className="relative z-10 flex flex-col items-center text-center cursor-pointer group"
            >
              <div
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  activeStep === st.month
                    ? 'bg-gold-500 border-gold-500 text-black shadow-lg shadow-gold-500/20'
                    : 'bg-[#111111] border-neutral-800 text-neutral-400 group-hover:border-neutral-700'
                }`}
              >
                <span className="font-mono text-sm font-bold">0{st.month}</span>
              </div>
              <span className={`mt-3 text-xs font-mono uppercase tracking-wider ${activeStep === st.month ? 'text-gold-500 font-bold' : 'text-neutral-500'}`}>
                {st.title}
              </span>
            </button>
          ))}
        </div>

        {/* Interactive Presenter Card */}
        <div className="bg-[#121212] border border-neutral-800 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
          
          {/* Mobile switcher block */}
          <div className="flex md:hidden justify-between items-center bg-[#171717]/80 border border-neutral-800 rounded-xl p-2.5 mb-8">
            {steps.map((st) => (
              <button
                key={st.month}
                onClick={() => setActiveStep(st.month)}
                className={`flex-1 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                  activeStep === st.month ? 'bg-gold-500 text-black' : 'text-neutral-500'
                }`}
              >
                MONTH 0{st.month}
              </button>
            ))}
          </div>

          {/* Core Monthly Overview Details */}
          {steps.map((st) => {
            if (st.month !== activeStep) return null;
            return (
              <div key={st.month} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: Deliverables Checklist */}
                <div className="md:col-span-4 space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-gold-500 bg-gold-950/40 border border-gold-900/40 px-2.5 py-1 rounded-full">
                      MONTH 0{st.month}
                    </span>
                    <span className="text-[10px] text-neutral-500 font-mono">DELIVERABLES</span>
                  </div>
                  
                  <div className="space-y-3">
                    {st.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3 bg-[#181818] p-3 rounded-xl border border-neutral-800 text-xs text-neutral-300">
                        <span className="h-4 w-4 bg-gold-950 text-gold-500 rounded flex items-center justify-center mt-0.5 shrink-0">
                          <CheckSquare className="w-3 h-3" />
                        </span>
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side: High Impact Summary Copy */}
                <div className="md:col-span-8 space-y-6 border-t md:border-t-0 md:border-l border-neutral-800 pt-6 md:pt-0 md:pl-8">
                  <div className="space-y-2">
                    <span className="text-gold-500 font-mono text-[10px] tracking-wider uppercase">{st.subTitle}</span>
                    <h3 className="text-2xl font-display font-semibold text-white tracking-tight">{st.title} Protocol</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{st.description}</p>
                  </div>

                  <div className="bg-[#19150b] border border-gold-950/20 p-5 rounded-2xl">
                    <span className="text-[10px] font-mono text-gold-400 block uppercase tracking-widest mb-1.5 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-gold-500" /> Month 0{st.month} Ultimate Outcome:
                    </span>
                    <p className="text-xs text-neutral-300 font-medium">"{st.outcome}"</p>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* Slogan card */}
        <div className="text-center">
          <p className="text-gold-400 italic font-display text-lg md:text-xl font-medium">
            "We don’t stay forever, we set you free."
          </p>
        </div>

      </div>
    </section>
  );
}
