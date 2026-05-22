import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b-2 border-[#111111]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none gap-4 py-4 min-h-[44px]"
      >
        <h4 className="font-bold text-base md:text-lg text-[#111111] pr-4 leading-snug">{question}</h4>
        <ChevronDown
          size={18}
          className={`text-[#B91C1C] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-[#333333] leading-relaxed font-light text-sm md:text-base">{answer}</p>
      </div>
    </div>
  );
};
