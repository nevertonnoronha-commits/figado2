import React from 'react';
import { CheckCircle2, HeartPulse } from 'lucide-react';

export const MarqueeBanner = () => (
  <div className="bg-[#e2b764] text-[#04100b] py-3 font-bold uppercase tracking-widest text-sm border-y border-[#b58c40] marquee-container relative z-20">
    <div className="marquee-content">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="flex items-center mx-8">
          <CheckCircle2 size={16} className="mr-2" />
          <span>RESULTADOS VERIFICADOS</span>
          <span className="mx-8 opacity-30"></span>
          <HeartPulse size={16} className="mr-2" />
          <span>RECUPERÁ TU ENERGÍA</span>
          <span className="mx-8 opacity-30"></span>
        </div>
      ))}
    </div>
  </div>
);
