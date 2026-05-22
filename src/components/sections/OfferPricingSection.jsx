import React from 'react';
import { ShieldCheck, Star, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { openCheckoutModal } from '../../utils/analytics';

export const OfferPricingSection = () => (
  <section className="py-16 md:py-24 bg-[#111111] text-white border-b-4 border-[#B91C1C]">
    <div className="container mx-auto px-5 max-w-3xl">

      <ScrollReveal>
        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#B91C1C] mb-6 block">
          LA MATEMÁTICA DE TU SALUD
        </span>
        <h2 className="font-editorial text-3xl md:text-5xl text-white font-bold leading-tight mb-10">
          El Costo Oculto de{' '}
          <span className="italic text-[#FBBF24]">No Hacer Nada</span>
        </h2>
      </ScrollReveal>

      {/* Cost comparison */}
      <ScrollReveal delay={100}>
        <div className="space-y-3 mb-10">
          {[
            { q: '¿Cuánto gastás por mes en pastillas para la digestión, Omeprazol o tés mágicos que no funcionan?', a: 'Mínimo $40 al mes · sin resultados reales.' },
            { q: '¿Cuánto cuesta una consulta privada con un especialista donde solo te dicen "bajá de peso"?', a: 'Arriba de $150 por 15 minutos de nada.' },
            { q: '¿Y cuál es el costo físico, emocional y financiero si dejás que ese hígado graso avance hacia una fibrosis irreversible?', a: 'Incalculable. Y ya es demasiado tarde para arrepentirse.' },
          ].map((item, i) => (
            <div key={i} className="border border-white/10 bg-white/5 p-5">
              <p className="text-sm md:text-base font-light text-white/70 italic mb-2">{item.q}</p>
              <p className="text-sm md:text-base font-bold text-[#FBBF24]">→ {item.a}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Price reveal */}
      <ScrollReveal delay={200}>
        <div className="border-2 border-[#FBBF24] shadow-[6px_6px_0_#B8860B] p-7 md:p-10 text-center mb-8">
          <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-1">
            El Sistema NATURALE + 4 Bonos Clínicos tienen un valor real de:
          </p>
          <p className="text-white/40 text-2xl md:text-3xl line-through decoration-[#B91C1C] decoration-2 font-light mb-2">
            $120.95
          </p>

          <p className="text-white/80 text-sm md:text-base font-light mb-1">
            Pero si ingresás ahora, antes de que se agoten los accesos con descuento de este mes...
          </p>
          <p className="text-white/80 font-light mb-1">No vas a pagar $120.</p>
          <p className="text-white/80 font-light mb-5">Tampoco vas a pagar la mitad, $60.</p>

          <div className="border-t border-white/10 pt-5 mb-5">
            <p className="text-xs font-black uppercase tracking-widest text-[#FBBF24] mb-2">
              TU INVERSIÓN HOY · UN ÚNICO PAGO DE:
            </p>
            <div className="flex items-baseline justify-center gap-1 mb-1">
              <span className="text-3xl md:text-4xl text-[#FBBF24] font-light">$</span>
              <span className="font-editorial text-7xl md:text-8xl text-white leading-none font-bold">
                17<span className="text-4xl md:text-5xl text-[#FBBF24]">.99</span>
              </span>
            </div>
            <span className="inline-block bg-[#16A34A] text-white text-xs font-black uppercase tracking-wider px-4 py-1.5">
              85% OFF · ACCESO DE POR VIDA
            </span>
          </div>

          <button
            onClick={openCheckoutModal}
            className="btn-press btn-shine w-full bg-[#16A34A] text-white py-5 md:py-6 font-black text-xl md:text-2xl uppercase tracking-wide flex items-center justify-center gap-3 border-2 border-[#166534] shadow-[5px_5px_0_#166534] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#166534] transition-all duration-100 animate-[button-breathe_2s_infinite_alternate]"
          >
            SÍ, QUIERO DESTAPAR MI HÍGADO HOY ($17.99)
            <ArrowRight size={22} />
          </button>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-white/50 font-medium">
            <div className="flex items-center gap-1.5 text-[#FBBF24]">
              {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
              <span className="text-white/50 ml-1">4.9/5 Verificado</span>
            </div>
            <span className="hidden sm:block opacity-30">|</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-[#16A34A]" />
              <span>Garantía Incondicional de 30 Días</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
