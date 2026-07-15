/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Cpu, HeartHandshake, Palette, ShieldCheck, Laptop, Check, ArrowRight, Zap, Target } from 'lucide-react';
import { ServiceItem } from '../types';

interface BentoServicesProps {
  onCTASelect: () => void;
}

export default function BentoServices({ onCTASelect }: BentoServicesProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'strategy',
      miniTitle: 'CATEGORY 01',
      title: 'Business Strategy & Consulting',
      badge: 'STRATEGY',
      outcome: 'Structured Growth',
      description: 'Detailed assessment and strategic planning to drive structured business growth.',
      features: [
        'Business assessments',
        'Growth planning',
        'Operational reviews',
        'Strategic planning',
        'Process improvement',
        'Business performance analysis'
      ],
      savingPercent: 'Tailored Roadmap'
    },
    {
      id: 'automation',
      miniTitle: 'CATEGORY 02',
      title: 'Digital Transformation & Automation',
      badge: 'AUTOMATION',
      outcome: 'Zero Manual Friction',
      description: 'We modernise business operations through:',
      features: [
        'Workflow automation',
        'CRM implementation',
        'Appointment scheduling systems',
        'Cloud-based collaboration',
        'Digital document management',
        'AI-assisted business processes',
        'Business software integration'
      ],
      savingPercent: '20+ hrs saved/week'
    },
    {
      id: 'cx',
      miniTitle: 'CATEGORY 03',
      title: 'Customer Experience Solutions',
      badge: 'EXPERIENCE',
      outcome: 'Seamless Engagement',
      description: 'Helping businesses improve client engagement through:',
      features: [
        'Customer journey mapping',
        'Online booking systems',
        'Customer communication platforms',
        'Automated follow-up systems',
        'Feedback and review management',
        'Client onboarding workflows'
      ],
      savingPercent: '98% retention boost'
    },
    {
      id: 'marketing',
      miniTitle: 'CATEGORY 04',
      title: 'Branding & Marketing',
      badge: 'BRANDING',
      outcome: 'Strong Market Presence',
      description: 'Strengthening market presence through:',
      features: [
        'Brand strategy',
        'Visual identity development',
        'Marketing planning',
        'Digital marketing support',
        'Social media strategy',
        'Online presence optimisation'
      ],
      savingPercent: '3x visibility leverage'
    },
    {
      id: 'operations',
      miniTitle: 'CATEGORY 05',
      title: 'Operational Excellence',
      badge: 'EXCELLENCE',
      outcome: 'Flawless Execution',
      description: 'Improving internal efficiency through:',
      features: [
        'Standard Operating Procedures (SOPs)',
        'Staff workflow design',
        'Performance dashboards',
        'KPI reporting',
        'Business process documentation',
        'Operational audits'
      ],
      savingPercent: 'Zero-waste workflows'
    },
    {
      id: 'tech',
      miniTitle: 'CATEGORY 06',
      title: 'Technology Consulting',
      badge: 'CONSULTING',
      outcome: 'Optimised Tech Stack',
      description: 'Helping businesses adopt the right technologies through:',
      features: [
        'Software selection',
        'System integration',
        'Technology implementation',
        'Digital transformation planning',
        'AI adoption consulting',
        'Staff technology training'
      ],
      savingPercent: 'Future-proof stack'
    }
  ];

  const getIcon = (id: string) => {
    switch (id) {
      case 'strategy': return <TrendingUp className="w-6 h-6 text-gold-500" />;
      case 'automation': return <Cpu className="w-6 h-6 text-gold-500" />;
      case 'cx': return <HeartHandshake className="w-6 h-6 text-gold-500" />;
      case 'marketing': return <Palette className="w-6 h-6 text-gold-500" />;
      case 'operations': return <ShieldCheck className="w-6 h-6 text-gold-500" />;
      case 'tech': return <Laptop className="w-6 h-6 text-gold-500" />;
      default: return <Zap className="w-6 h-6 text-gold-500" />;
    }
  };

  return (
    <section id="services-bento" className="py-24 px-4 bg-black max-w-7xl mx-auto">
      <div className="space-y-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-gold-500 text-xs font-mono tracking-widest uppercase flex items-center gap-2">
              <Zap className="w-3 h-3 text-gold-500" />
              OPERATIONAL BLUEPRINTS
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white leading-none">
              Services built to <span className="text-gold-500 italic">scale</span>
            </h2>
            <p className="text-neutral-400 text-sm max-w-md">
              We design, modernise, and optimize your business architecture with proven strategies and seamless automation.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-500 font-mono">Hover to inspect operational goals</span>
          </div>
        </div>

        {/* Bento Grid (Strict 2 columns, 3 rows layout on md and above) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              id={`card-${item.id}`}
              className="bg-[#141414] border border-neutral-800 rounded-3xl p-8 md:p-10 relative overflow-hidden transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:border-gold-500/40 min-h-[460px]"
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Radial golden glow in corner */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-gold-500/5 blur-3xl rounded-full group-hover:bg-gold-500/10 transition-colors" />

              {/* Card Top Section */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-2xl group-hover:border-gold-500/30 transition-colors">
                    {getIcon(item.id)}
                  </div>
                  <span className="text-[10px] font-mono text-gold-400 bg-gold-950/40 border border-gold-900/40 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] font-mono text-neutral-500 tracking-widest block uppercase">
                    {item.miniTitle}
                  </span>
                  <h3 className="text-2xl font-display font-medium text-white group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 bg-neutral-900 border border-neutral-800/80 px-3 py-1 rounded-lg">
                    <Target className="w-3 h-3 text-gold-500" />
                    <span className="text-xs font-mono text-gold-400 font-bold uppercase">{item.outcome}</span>
                  </div>
                  
                  <p className="text-neutral-400 text-sm leading-relaxed pt-2">
                    {item.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300 leading-snug">
                        <Check className="w-3.5 h-3.5 text-gold-500/80 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Savings Stat Hook */}
              <div className="mt-8 pt-6 border-t border-neutral-900/60">
                <div className="bg-[#1b1b1b] border border-neutral-800/40 px-4 py-3 rounded-2xl flex items-center justify-between">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest text-left">TARGET OUTCOME</span>
                  <span className="text-xs font-mono text-gold-400 font-bold text-right">{item.savingPercent}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global Bottom CTA Promo */}
        <div className="bg-[#111111] border border-neutral-800 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-display text-white">Pragmatic, real-world execution.</h4>
            <p className="text-xs text-neutral-400">High-performance custom workflows designed solely for bottom-line leverage.</p>
          </div>
          <button
            onClick={onCTASelect}
            className="bg-white hover:bg-gold-500 hover:text-black text-black px-6 py-3.5 rounded-xl text-xs font-display font-semibold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-white/5 active:scale-95"
          >
            Design My Blueprint
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
