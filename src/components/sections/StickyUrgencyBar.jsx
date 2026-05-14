import React, { useState, useEffect } from 'react';
import { Flame, Hourglass } from 'lucide-react';

export const StickyUrgencyBar = ({ timeLeft }) => {
  const formatTime = (val) => val.toString().padStart(2, '0');

  return (
    <div className="sticky top-0 z-50 bg-[#04100b] border-b border-[#e2b764]/30 py-3 px-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm font-semibold tracking-wide uppercase text-center">
        <div className="flex items-center gap-2 text-[#e2b764] justify-center">
          <Flame size={18} className="animate-pulse" />
          <span>OFERTA NATURALE: Solo quedan 23 accesos (85% OFF)</span>
        </div>
        <div className="flex items-center justify-center gap-2 pulse-warning font-mono text-lg">
          <Hourglass size={18} />
          <span>{formatTime(timeLeft.h)}:{formatTime(timeLeft.m)}:{formatTime(timeLeft.s)}</span>
          <span className="hidden md:inline text-xs font-sans text-white/50 lowercase"> Después vuelve al precio normal</span>
        </div>
      </div>
    </div>
  );
};
