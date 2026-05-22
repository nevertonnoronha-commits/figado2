import React from 'react';
import { HeartPulse, Stethoscope } from 'lucide-react';

export const MarqueeBanner = () => (
  <div className="bg-[#B91C1C] text-white py-3 font-black uppercase tracking-[0.15em] text-xs border-y-2 border-[#7F1D1D] marquee-container relative z-20 max-w-full" style={{ overflow: 'hidden' }}>
    <div className="marquee-content" style={{ animationDuration: '55s' }}>
      {[...Array(10)].map((_, i) => (
        <div key={i} className="flex items-center mx-8 gap-8">
          <div className="flex items-center gap-2">
            <Stethoscope size={14} />
            <span>PROTOCOLO CLÍNICO VERIFICADO</span>
          </div>
          <span className="opacity-40">|</span>
          <div className="flex items-center gap-2">
            <HeartPulse size={14} />
            <span>+12.000 CASOS DOCUMENTADOS</span>
          </div>
          <span className="opacity-40">|</span>
          <span>ESTEATOSIS HEPÁTICA · REGENERACIÓN EN 28 DÍAS</span>
          <span className="opacity-40">|</span>
        </div>
      ))}
    </div>
  </div>
);
