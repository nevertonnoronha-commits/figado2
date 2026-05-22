import React from 'react';
import { AlertTriangle, Hourglass } from 'lucide-react';

export const StickyUrgencyBar = ({ timeLeft }) => {
  const formatTime = (val) => val.toString().padStart(2, '0');

  return (
    <div className="sticky top-0 z-50 bg-[#111111] border-b-2 border-[#B91C1C] py-2.5 sm:py-3 px-3 sm:px-4 shadow-lg">
      <div className="container mx-auto flex flex-row items-center justify-center gap-2 sm:gap-6 text-center">
        <div className="flex items-center gap-1.5 sm:gap-2 text-white justify-center min-w-0">
          <AlertTriangle size={14} className="text-[#EF4444] animate-pulse shrink-0 sm:w-4 sm:h-4" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/90 leading-tight">
            <span className="hidden sm:inline">⚠ OFERTA LIMITADA · Solo quedan 23 accesos con 85% OFF</span>
            <span className="sm:hidden">Solo 23 accesos · 85% OFF</span>
          </span>
        </div>
        <div className="w-px h-4 bg-white/20 hidden sm:block shrink-0"></div>
        <div className="flex items-center justify-center gap-1.5 pulse-warning font-mono text-sm sm:text-base font-bold shrink-0">
          <Hourglass size={13} className="shrink-0" />
          <span>{formatTime(timeLeft.h)}:{formatTime(timeLeft.m)}:{formatTime(timeLeft.s)}</span>
          <span className="hidden md:inline text-xs font-sans text-white/40 lowercase normal-case tracking-normal font-normal ml-1">
            Después vuelve al precio normal
          </span>
        </div>
      </div>
    </div>
  );
};
