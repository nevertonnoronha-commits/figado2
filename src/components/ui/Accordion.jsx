import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#04100b]/10 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none"
      >
        <h4 className="font-editorial text-xl font-medium text-[#0a2517] pr-8">{question}</h4>
        <ChevronDown
          className={`text-[#e2b764] transition-transform duration-500 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-[#04100b]/70 leading-relaxed font-light">{answer}</p>
      </div>
    </div>
  );
};
