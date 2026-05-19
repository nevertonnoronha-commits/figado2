import React, { useState, useEffect } from 'react';
import { Flame, Hourglass } from 'lucide-react';

export const StickyUrgencyBar = ({ timeLeft }) => {
  const formatTime = (val) => val.toString().padStart(2, '0');

  return (
    <div className="sticky top-0 z-50 bg-[#04100b] border-b border-[#e2b764]/30 py-2 sm:py-3 px-3 sm:px-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md">
      <div className="container mx-auto flex flex-row items-center justify-center gap-2 sm:gap-6 font-semibold tracking-wide uppercase text-center">
        <div className="flex items-center gap-1.5 sm:gap-2 text-[#e2b764] justify-center min-w-0">
          <Flame size={14} className="animate-pulse shrink-0 sm:w-[18px] sm:h-[18px]" />
          <span className="text-[10px] sm:text-sm leading-tight">
            <span className="hidden sm:inline">OFERTA NATURALE: Solo quedan 23 accesos (85% OFF)</span>
            <span className="sm:hidden">85% OFF — Solo 23 accesos</span>
          </span>
        </div>
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 pulse-warning font-mono text-sm sm:text-lg shrink-0">
          <Hourglass size={14} className="shrink-0 sm:w-[18px] sm:h-[18px]" />
          <span>{formatTime(timeLeft.h)}:{formatTime(timeLeft.m)}:{formatTime(timeLeft.s)}</span>
          <span className="hidden md:inline text-xs font-sans text-white/50 lowercase normal-case tracking-normal"> Después vuelve al precio normal</span>
        </div>
      </div>
    </div>
  );
};
