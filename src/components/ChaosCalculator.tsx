/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Scale, Sparkles, AlertTriangle, Coins, Hourglass, ArrowRight } from 'lucide-react';

interface ChaosCalculatorProps {
  onCTASelect: () => void;
}

export default function ChaosCalculator({ onCTASelect }: ChaosCalculatorProps) {
  const [hours, setHours] = useState<number>(15);
  const [hourlyRate, setHourlyRate] = useState<number>(450); // NAD / hour, approx 25 USD (Standard high tier rate in Namibia)
  const [currency, setCurrency] = useState<'N$' | '$'>('N$');

  const EXCHANGE_RATE = 18.5; // NAD to USD

  const displayRate = currency === '$' ? Math.round(hourlyRate / EXCHANGE_RATE) : hourlyRate;

  const handleRateChange = (val: number) => {
    if (currency === '$') {
      setHourlyRate(Math.round(val * EXCHANGE_RATE));
    } else {
      setHourlyRate(val);
    }
  };

  // Calculations
  const weeklyCost = hours * hourlyRate;
  const monthlyCost = weeklyCost * 4.33;
  const yearlyCost = weeklyCost * 52;

  // Let's make some hyper-localized Namibian & B2B references
  const getWastedMetrics = (costInNAD: number) => {
    const cost = costInNAD;
    const coffeeRoasters = Math.round(cost / 40); // NAD 40 for a luxury double espresso at Slowtown Windhoek
    const developers = (cost / 15000).toFixed(1); // NAD 15,000 is entry/mid salary in Namibia for junior admins
    const planeTicket = Math.round(cost / 9000); // NAD 9,000 for Windhoek to Johannesburg flight
    return {
      coffeeRoasters,
      developers,
      planeTicket
    };
  };

  const wastes = getWastedMetrics(yearlyCost);

  return (
    <section id="chaos-calculator" className="relative py-20 px-4 max-w-7xl mx-auto">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="bg-[#111111] border border-neutral-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Border gradient effect */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Inputs Section */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-gold-500 text-xs font-mono tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                SYSTEM LEAK DETECTOR
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-white leading-tight">
                Cost of <span className="text-gold-500 italic">administrative chaos</span>
              </h2>
              <p className="text-neutral-400 text-sm max-w-xl">
                Manual emails, calendar double-bookings, and chasing leads drain growth capital. See your real operational leakage.
              </p>
            </div>

            {/* Slider 1: Hours */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm text-neutral-300 font-mono flex items-center gap-2">
                  <Hourglass className="w-4 h-4 text-gold-500" />
                  WASTED HOURS / WEEK
                </label>
                <div className="text-right">
                  <span className="text-3xl font-display font-bold text-gold-500">{hours}</span>
                  <span className="text-xs text-neutral-500 ml-1">Hrs</span>
                </div>
              </div>
              <input
                type="range"
                min="3"
                max="50"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full h-1.5 bg-[#1e1e1e] rounded-lg appearance-none cursor-pointer accent-gold-500 focus:outline-none"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                <span>3 hrs (Lightly bugged)</span>
                <span>25 hrs (Standard mess)</span>
                <span>50 hrs (Total Ops meltdown)</span>
              </div>
            </div>

            {/* Slider 2: Hourly Rate */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm text-neutral-300 font-mono flex items-center gap-2">
                  <Coins className="w-4 h-4 text-gold-500" />
                  YOUR HOURLY RATE
                </label>
                <div className="flex items-center gap-3">
                  {/* Currency Switcher */}
                  <div className="bg-[#1a1a1a] p-1 rounded-lg border border-neutral-800 flex gap-1">
                    <button
                      type="button"
                      onClick={() => setCurrency('N$')}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${currency === 'N$' ? 'bg-gold-500 text-black' : 'text-neutral-400'}`}
                    >
                      N$ (NAD)
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrency('$')}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${currency === '$' ? 'bg-gold-500 text-black' : 'text-neutral-400'}`}
                    >
                      $ (USD)
                    </button>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-display font-bold text-white">
                      {currency}
                      {displayRate.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-neutral-500 ml-1">/hr</span>
                  </div>
                </div>
              </div>
              <input
                type="range"
                min={currency === '$' ? 10 : 150}
                max={currency === '$' ? 150 : 2500}
                step={currency === '$' ? 5 : 50}
                value={displayRate}
                onChange={(e) => handleRateChange(Number(e.target.value))}
                className="w-full h-1.5 bg-[#1e1e1e] rounded-lg appearance-none cursor-pointer accent-gold-500 focus:outline-none"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                <span>{currency === '$' ? '$10/hr' : 'N$150/hr'} (Junior Admin)</span>
                <span>{currency === '$' ? '$150/hr' : 'N$2500/hr'} (Founder/Architect)</span>
              </div>
            </div>
          </div>

          {/* Results Bento Box */}
          <div className="lg:col-span-5 bg-[#171717]/80 rounded-2xl border border-neutral-800 p-6 space-y-6 relative">
            <div className="absolute top-3 right-3 bg-red-950/40 border border-red-900/40 text-[10px] px-2 py-0.5 rounded-full text-red-400 font-mono flex items-center gap-1">
              <AlertTriangle className="w-2.5 h-2.5" />
              ANNUAL SYSTEM LEAK
            </div>

            <div className="space-y-1">
              <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest">Growth Capital Flushed</p>
              <div className="text-4xl md:text-5xl font-display font-medium text-gold-500">
                {currency}
                {Math.round(currency === '$' ? yearlyCost / EXCHANGE_RATE : yearlyCost).toLocaleString()}
              </div>
              <p className="text-xs text-neutral-400">
                Lacking automations costs you approx.{' '}
                <span className="text-white font-semibold">
                  {currency}
                  {Math.round(currency === '$' ? monthlyCost / EXCHANGE_RATE : monthlyCost).toLocaleString()}
                </span>{' '}
                every single month.
              </p>
            </div>

            <hr className="border-neutral-800" />

            {/* Hyperlocal Impact */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-gold-500" />
                This annual budget is equivalent to:
              </h4>
              <div className="space-y-2.5 text-xs text-neutral-400">
                <div className="flex justify-between py-1 border-b border-neutral-800/40">
                  <span>Windhoek administrative staff (FTE):</span>
                  <span className="text-white font-semibold font-mono">{wastes.developers}x</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/40">
                  <span>Double espressos @ Slowtown:</span>
                  <span className="text-white font-semibold font-mono">{wastes.coffeeRoasters.toLocaleString()}x</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Flights (Windhoek ⇆ Joburg):</span>
                  <span className="text-white font-semibold font-mono">{wastes.planeTicket}x</span>
                </div>
              </div>
            </div>

            <button
              onClick={onCTASelect}
              className="w-full bg-gold-500 hover:bg-gold-400 text-black py-4 rounded-xl font-display font-semibold transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-gold-500/10 gold-glow-button"
            >
              Stop the Leak. Repair My Ops
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
