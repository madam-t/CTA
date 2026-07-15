import React from 'react';

interface CtaLogoProps {
  className?: string;
  size?: number;
}

export const CtaLogoIcon: React.FC<CtaLogoProps> = ({ className = '', size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} select-none`}
    >
      <defs>
        {/* Gold Arrow Gradient - Shiny & Rich */}
        <linearGradient id="goldGrad" x1="10" y1="20" x2="90" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF9E6" />
          <stop offset="25%" stopColor="#E6C35C" />
          <stop offset="50%" stopColor="#B38D24" />
          <stop offset="75%" stopColor="#E6C35C" />
          <stop offset="100%" stopColor="#805C00" />
        </linearGradient>

        {/* Charcoal & Silver Gradient for Dark Arrows */}
        <linearGradient id="charcoalGrad" x1="110" y1="100" x2="30" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0B0B0C" />
          <stop offset="35%" stopColor="#1E1F22" />
          <stop offset="70%" stopColor="#43454A" />
          <stop offset="90%" stopColor="#80828A" />
          <stop offset="100%" stopColor="#1E1F22" />
        </linearGradient>

        {/* Sophisticated drop shadow for 3D overlap realism */}
        <filter id="logoShadow" x="-10%" y="-10%" width="130%" height="130%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.75" />
        </filter>
        <filter id="logoInnerShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feOffset dx="1" dy="1"/>
          <feGaussianBlur stdDeviation="1" result="offset-blur"/>
          <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/>
          <feFlood floodColor="black" floodOpacity="0.6" result="color"/>
          <feComposite operator="in" in="color" in2="inverse" result="shadow"/>
          <feComposite operator="over" in="shadow" in2="SourceGraphic"/>
        </filter>
      </defs>

      {/* BACKGROUND GRAPHIC GROUP WITH 3 OVERLAPPING ARROWS */}
      <g filter="url(#logoShadow)">
        {/* Arrow 1: Upper-Right Swooping Down (Shiny Gold) */}
        <path
          d="M 60 15 
             C 82 15, 98 29, 102 48 
             L 112 40 
             L 98 75 
             L 74 54 
             L 85 52 
             C 81 41, 71 31, 60 30 
             Z"
          fill="url(#goldGrad)"
        />

        {/* Arrow 2: Left curving to Top-Right (Gleaming Gold) */}
        <path
          d="M 23 42 
             C 31 26, 47 16, 60 15 
             L 60 30 
             C 51 31, 41 38, 35 48 
             L 44 54 
             L 10 60 
             L 16 26 
             Z"
          fill="url(#goldGrad)"
        />

        {/* Arrow 3: Bottom curving from Right to Left-Middle (Deep Charcoal & Silver metallic) */}
        <path
          d="M 98 75 
             C 92 93, 76 105, 60 105 
             C 40 105, 23 92, 18 73 
             L 28 68 
             C 32 81, 44 90, 60 90 
             C 71 90, 81 82, 85 71 
             L 76 64 
             L 110 58 
             L 108 92 
             Z"
          fill="url(#charcoalGrad)"
        />
      </g>
    </svg>
  );
};

export const CtaFullLogo: React.FC<CtaLogoProps & { showTagline?: boolean }> = ({ 
  className = '', 
  size = 48, 
  showTagline = true 
}) => {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <CtaLogoIcon size={size} />
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className="font-sans font-bold text-2xl tracking-tight text-white">CTA</span>
        </div>
        <span className="text-[9px] uppercase font-medium tracking-wider text-gold-500 font-mono mt-0.5 whitespace-nowrap">
          CHASE, TJIMUNE & AFFILIATES
        </span>
        {showTagline && (
          <span className="text-[8px] font-sans italic text-neutral-400 font-normal tracking-wide mt-0.5">
            Outsource. Optimize. Succeed.
          </span>
        )}
      </div>
    </div>
  );
};
