import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { openCheckoutModal } from '../../utils/analytics';

export const FinalCTASection = () => (
  <section className="py-20 md:py-28 relative text-white text-center overflow-hidden flex items-center justify-center border-b-4 border-[#B91C1C]">
    <div className="absolute inset-0 z-0">
      <img
        src="https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/generated-image%20(8).webp"
        alt="Familia reunida en la mesa"
        loading="lazy"
        className="w-full h-full object-cover object-center"
        onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 600' fill='%230F2033'%3E%3Crect width='1000' height='600'/%3E%3C/svg%3E"; }}
      />
      <div className="absolute inset-0 bg-[#111111]/85"></div>
    </div>

    <div className="container mx-auto px-5 max-w-3xl relative z-10">
      <ScrollReveal>
        {/* Main CTA */}
        <h2 className="font-editorial text-3xl md:text-5xl font-bold mb-5 leading-tight text-white">
          Tu hígado puede recuperarse.{' '}
          <span className="italic text-[#FBBF24]">Vos tenés el poder, y ahora tenés el plan.</span>
        </h2>
        <p className="text-base md:text-lg font-light text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
          No esperes que el médico te dé malas noticias para actuar. En 5 minutos podés tener el
          protocolo en tu celular y estar planificando la cena reparadora de esta misma noche.
        </p>

        <button
          onClick={openCheckoutModal}
          className="btn-press btn-shine inline-flex items-center justify-center w-full md:w-auto bg-[#16A34A] text-white px-8 py-5 font-black text-lg md:text-2xl uppercase tracking-wide gap-3 border-2 border-[#166534] shadow-[5px_5px_0_#166534] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#166534] transition-all duration-100 animate-[button-breathe_2s_infinite_alternate]"
        >
          SÍ, QUIERO SANAR MI HÍGADO AHORA <ArrowRight size={22} />
        </button>

        <p className="mt-5 text-xs font-black uppercase tracking-widest text-white/40">
          $17.99 (85% OFF) &nbsp;|&nbsp; Garantía Incondicional 30 Días
        </p>

        {/* P.S. */}
        <div className="mt-14 text-left bg-black/40 border border-white/10 p-6 max-w-2xl mx-auto">
          <p className="text-base text-white/80 font-light leading-relaxed mb-4">
            <strong className="font-bold text-white">P.S.</strong> Recordá: El hígado graso es un
            asesino silencioso. No duele hasta que ya es muy tarde. Cada día que pasa con ese "filtro"
            tapado de grasa, tu metabolismo se ralentiza un poco más. Actuá hoy, aprovechá el descuento
            de 85% y respaldalo con la garantía de 30 días.{' '}
            <button onClick={openCheckoutModal} className="underline text-[#FBBF24] font-bold cursor-pointer hover:opacity-80">
              Hacé clic acá para acceder.
            </button>
          </p>
          <p className="text-base text-white/80 font-light leading-relaxed">
            <strong className="font-bold text-white">P.P.S.</strong> En 5 minutos podés tener el
            protocolo en tu celular. ¿Vas a seguir esperando que el médico te dé malas noticias, o
            vas a tomar el control hoy?{' '}
            <button onClick={openCheckoutModal} className="underline text-[#FBBF24] font-bold cursor-pointer hover:opacity-80">
              Acceder al Sistema NATURALE.
            </button>
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
