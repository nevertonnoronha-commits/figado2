import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const TransformationSection = () => (
  <section className="py-24 bg-[#0a2517] text-white relative overflow-hidden">
    <div className="noise-bg opacity-20"></div>
    <div className="container mx-auto px-6 max-w-5xl relative z-10">
      <ScrollReveal direction="left">
        <div className="text-center mb-16">
          <h2 className="font-editorial text-4xl md:text-5xl text-[#e2b764] mb-4">La Transformación Real</h2>
          <p className="text-xl font-light text-white/70">Lo que sucede cuando le das a tu cuerpo lo que necesita.</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200} direction="right">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto relative">
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#e2b764]/50 to-transparent z-0"></div>

          <div className="relative flex-1 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] w-full group max-w-sm z-10 bg-[#04100b]">
            <div className="absolute top-3 left-3 bg-[#ff4747] text-white font-bold text-xs px-3 py-1.5 rounded tracking-widest z-10 shadow-md backdrop-blur-sm border border-white/20">ANTES</div>
            <div className="aspect-[4/5] bg-gray-900 relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src="https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/generated-image%20(4).webp"
                alt="Mujer cansada con dolor de hígado"
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100 grayscale-[30%]"
                onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500' fill='%23111'%3E%3Crect width='400' height='500'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%23555'%3EAntes%3C/text%3E%3C/svg%3E"; }}
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 z-10 bg-[#0a2517] p-4 rounded-full border border-[#e2b764]/20 shadow-xl">
            <div className="bg-[#4CAF50] text-[#04100b] w-12 h-12 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(76,175,80,0.4)]">
              <ArrowRight size={24} />
            </div>
            <span className="text-[10px] text-[#e2b764] font-bold uppercase tracking-[0.3em] whitespace-nowrap">Con Naturale</span>
          </div>

          <div className="relative flex-1 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] w-full group max-w-sm z-10 bg-[#04100b]">
            <div className="absolute top-3 left-3 bg-[#4CAF50] text-white font-bold text-xs px-3 py-1.5 rounded tracking-widest z-10 shadow-md backdrop-blur-sm border border-white/20">DESPUÉS</div>
            <div className="aspect-[4/5] bg-gray-900 relative">
              <div className="absolute inset-0 bg-[#e2b764]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
              <img
                src="https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/50013078-e65b-47fa-b40a-f44ff0acf15d.webp"
                alt="Mujer con energía y sana"
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500' fill='%23111'%3E%3Crect width='400' height='500'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%23555'%3EDespués%3C/text%3E%3C/svg%3E"; }}
              />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
