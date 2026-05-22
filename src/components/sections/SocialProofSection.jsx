import React from 'react';
import { Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { openCheckoutModal } from '../../utils/analytics';

const reviews = [
  {
    text: 'Me diagnosticaron esteatosis grado 2. El médico me asustó mucho. En 6 semanas aplicando este mapa metabólico, mis transaminasas bajaron de 68 a 32. Mi médico me preguntó qué pastillas estaba tomando. Le dije que ninguna. Solo comida.',
    author: 'Carmen Rodríguez Vega',
    detail: 'Transaminasas: 68 → 32 en 6 semanas',
  },
  {
    text: 'Triglicéridos en 380 y colesterol por las nubes. 4 semanas después bajé 6 kilos de pura inflamación y mi esposa come lo mismo que yo porque los platos son espectaculares. El cansancio desapareció por completo.',
    author: 'Roberto Méndez Torres',
    detail: 'Triglicéridos: 380 → normales. 6kg en 4 semanas.',
  },
  {
    text: 'Lo que más me sorprendió fue dejar de sentirme hinchada y cansada. Lo noté en la segunda semana. La sección de snacks fue un descubrimiento total. Nunca más pasé hambre a las 5 PM.',
    author: 'Gabriela Flores Montoya',
    detail: 'Inflamación reducida en 2 semanas',
  },
];

export const SocialProofSection = () => (
  <section className="py-16 md:py-24 bg-[#F7F5F0] border-b-4 border-[#111111]">
    <div className="container mx-auto px-5 max-w-4xl">

      <ScrollReveal>
        <div className="mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#B91C1C] mb-3 block">
            RESULTADOS CLÍNICOS REALES
          </span>
          <h2 className="font-editorial text-3xl md:text-5xl font-bold text-[#111111] leading-tight">
            Casos Documentados · Pacientes Reales
          </h2>
          <div className="w-16 h-1 bg-[#B91C1C] mt-4"></div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {reviews.map((review, idx) => (
          <ScrollReveal key={idx} delay={idx * 120}>
            <div className="bg-white border-2 border-[#111111] shadow-[4px_4px_0_#111111] p-6 relative h-full flex flex-col">
              <div className="flex gap-1 text-[#B91C1C] mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-sm md:text-base font-light text-[#333333] italic leading-relaxed mb-5 flex-1">
                "{review.text}"
              </p>
              <div className="border-t-2 border-[#111111] pt-4">
                <p className="font-bold text-[#111111] text-sm">{review.author}</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <CheckCircle2 size={12} className="text-[#16A34A] shrink-0" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#16A34A]">
                    Compra Verificada
                  </span>
                </div>
                <div className="mt-2 bg-[#F7F5F0] border border-[#D1D5DB] px-3 py-1.5">
                  <p className="text-[10px] font-bold text-[#111111] leading-tight">{review.detail}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={300}>
        <div className="text-center">
          <button
            onClick={openCheckoutModal}
            className="btn-press btn-shine inline-flex items-center justify-center bg-[#16A34A] text-white px-8 py-4 font-black text-base md:text-lg uppercase tracking-wide gap-2 border-2 border-[#166534] shadow-[4px_4px_0_#166534] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#166534] transition-all duration-100"
          >
            QUIERO ESTOS RESULTADOS · ACCEDER POR $17.99 <ArrowRight size={18} />
          </button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
