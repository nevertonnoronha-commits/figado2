import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const GuaranteeSection = () => (
  <section className="py-20 bg-[#0a2517] text-white border-y border-[#e2b764]/20 relative overflow-hidden">
    <div className="absolute inset-0 bg-noise opacity-20"></div>
    <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
      <ScrollReveal>
        <ShieldCheck size={80} className="mx-auto text-[#e2b764] mb-8 animate-pulse" strokeWidth={1} />
        <h2 className="font-editorial text-4xl md:text-5xl text-white mb-6">Garantía Total de 30 Días</h2>
        <p className="text-2xl text-[#e2b764] font-editorial italic mb-8">Sin preguntas, sin vueltas.</p>
        <p className="text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
          30 días es tiempo más que suficiente para probar las recetas, notar la diferencia en tu energía, tu digestión y tu bienestar. Si por cualquier motivo no quedás conforme — nos escribís y te devolvemos todo. Sin formularios. Sin explicaciones.
          <br /><br />
          <strong className="text-white font-medium bg-black/30 px-4 py-2 rounded">El único riesgo real es no hacer nada y que el hígado siga igual mañana que hoy.</strong>
        </p>
      </ScrollReveal>
    </div>
  </section>
);
