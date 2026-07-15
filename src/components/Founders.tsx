/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { User, Server, Terminal, Instagram, Mail, Phone, ExternalLink } from 'lucide-react';
import neoPortrait from '../assets/images/Neo Main.jpeg';
import metumuPortrait from '../assets/images/Metumu Main.png';

interface FoundersProps {
  onCTASelect: () => void;
}

export default function Founders({ onCTASelect }: FoundersProps) {
  const team = [
    {
      name: 'Neo Chase-Shimi',
      role: 'Co-Founder',
      codeTitle: 'OPERATIONS LEAD // CLIENT LOGISTICS',
      image: neoPortrait,
      email: 'mrchase@ctaffiliates.com',
      qualification: 'Bachelors of Business Management',
      ethos: 'Have Faith in Mr Chase'
    },
    {
      name: 'Metumu Tjimune',
      role: 'Co-Founder',
      codeTitle: 'SYSTEMS ARCHITECT // OPS DESIGN',
      image: metumuPortrait,
      email: 'madamt@ctaffiliates.com',
      qualification: 'Bachelors of Business Science in Marketing',
      ethos: 'Go worry-free with Madam T'
    }
  ];

  return (
    <section id="founders" className="py-24 px-4 bg-black relative">
      {/* Background graphic elements */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gold-400/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="text-center md:text-left space-y-3 max-w-2xl">
          <span className="text-gold-500 text-xs font-mono tracking-widest uppercase flex items-center justify-center md:justify-start gap-2">
            <Terminal className="w-3.5 h-3.5" />
            THE COMMAND CENTER
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white leading-tight">
            Meet the <span className="text-gold-500 italic">Architects</span>
          </h2>
          <p className="text-neutral-400 text-sm">
            No dry strategy slides. We roll up our sleeves and physically build the automated structures your company needs.
          </p>
        </div>

        {/* Co-founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {team.map((founder, index) => (
            <div
              key={index}
              className="bg-[#121212] border border-neutral-800 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group gold-glow-hover"
            >
              {/* Background index label */}
              <span className="absolute right-6 top-4 font-mono text-7xl font-extrabold text-neutral-900 select-none opacity-20 group-hover:text-gold-500/10 transition-colors">
                0{index + 1}
              </span>

              <div className="space-y-8">
                {/* Image & Main titles block */}
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-neutral-800/80 group-hover:border-gold-500/40 transition-colors shrink-0">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] tracking-widest font-mono text-gold-500 uppercase bg-gold-950/40 border border-gold-900/60 px-2.5 py-0.5 rounded-full inline-block">
                      {founder.codeTitle}
                    </span>
                    <h3 className="text-2xl font-display font-medium text-white group-hover:text-gold-300 transition-colors">
                      {founder.name}
                    </h3>
                    <p className="text-xs text-neutral-400">{founder.role}</p>
                  </div>
                </div>

                <hr className="border-neutral-900" />

                {/* Qualification Block */}
                <div className="space-y-2 text-xs leading-relaxed text-neutral-300">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block tracking-wider">Professional Qualification</span>
                  <p className="text-white text-sm font-medium">{founder.qualification}</p>
                </div>

                {/* Ethos Block */}
                <div className="bg-[#181818] border border-neutral-800/60 p-5 rounded-2xl text-[11px] font-mono text-neutral-400">
                  <span className="text-[9px] text-neutral-500 uppercase block tracking-widest mb-1.5">Personal Systems Ethos:</span>
                  <p className="text-gold-400 font-sans italic text-sm font-medium">"{founder.ethos}"</p>
                </div>
              </div>

              {/* Bottom Communication Action */}
              <div className="mt-8 pt-6 border-t border-neutral-900 flex justify-between items-center">
                <a
                  href={`mailto:${founder.email}`}
                  className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-gold-500 transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-gold-500" />
                  {founder.email}
                </a>

                {/* External contact link */}
                <button
                  onClick={onCTASelect}
                  className="bg-neutral-900 hover:bg-gold-500 hover:text-black p-2 rounded-lg border border-neutral-800 hover:border-gold-500 transition-colors cursor-pointer group/btn"
                  title="Direct Booking"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover/btn:text-black" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
