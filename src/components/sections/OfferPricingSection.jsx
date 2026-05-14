import React from 'react';
import { ShieldCheck, Star, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const OfferPricingSection = () => (
  <section id="offer" className="py-32 bg-[#fcfbf9] text-[#04100b] relative">
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <ScrollReveal>
        <h2 className="font-editorial text-5xl md:text-7xl mb-6 text-[#0a2517]">Tu hígado no puede esperar.</h2>
        <p className="text-2xl font-light text-[#04100b]/60 mb-16">
          Hoy es el momento. No lo postergues más.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="relative bg-[#04100b] text-white p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-[#e2b764]/30 transform transition-transform hover:-translate-y-2 rounded-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#e2b764] text-[#04100b] px-8 py-2 font-black uppercase tracking-widest text-sm shadow-xl rounded-full whitespace-nowrap">
            🔥 OFERTA: 85% OFF
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12 mt-4">
            <div className="text-center md:text-right">
              <p className="text-white/40 text-xl md:text-2xl line-through decoration-red-500 decoration-2 font-light">Valor Total: $120.95</p>
              <div className="bg-[#1a5c36] text-[#e2b764] font-bold px-4 py-1 inline-block mt-2 text-lg rounded-sm">
                HOY: 85% OFF
              </div>
            </div>

            <div className="w-px h-24 bg-white/10 hidden md:block"></div>

            <div className="text-center md:text-left flex items-baseline gap-2">
              <span className="text-4xl text-[#e2b764] font-light">$</span>
              <span className="font-editorial text-8xl md:text-9xl text-white leading-none tracking-tighter">17<span className="text-6xl text-[#e2b764]">.99</span></span>
            </div>
          </div>

          <button className="btn-shine w-full bg-[#e2b764] text-[#04100b] py-6 md:py-8 rounded-lg font-extrabold text-2xl md:text-3xl tracking-wide flex items-center justify-center gap-4 transition-all hover:bg-[#f3c97b] shadow-[0_0_40px_rgba(226,183,100,0.4)]">
            SÍ, QUIERO SANAR MI HÍGADO <ArrowRight size={32} />
          </button>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-white/60 font-medium">
            <div className="flex items-center gap-2">
              <div className="flex text-[#e2b764]">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span>4.9/5 Verificado</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-white/20 rounded-full"></div>
            <div className="flex items-center gap-2 text-[#e2b764]">
              <ShieldCheck size={18} />
              <span>Garantía de 30 días - Riesgo Cero</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
