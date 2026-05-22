import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { scrollToOffer } from '../../utils/smoothScroll';

export const MechanismSection = () => (
  <section className="py-16 md:py-24 bg-white border-b-4 border-[#111111]">
    <div className="container mx-auto px-5 max-w-3xl">

      <ScrollReveal>
        <div className="mb-10">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#B91C1C] mb-2 block">
            ◆ EL DESCUBRIMIENTO CLÍNICO
          </span>
          <h2 className="font-editorial text-3xl md:text-5xl font-bold text-[#111111] leading-tight mb-5">
            Por qué las dietas fallan{' '}
            <span className="italic text-[#B91C1C]">y la Inteligencia Metabólica funciona</span>
          </h2>
        </div>
      </ScrollReveal>

      {/* Feature boxes: 3 facts */}
      <ScrollReveal delay={100}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {[
            { n: '01', label: 'Recetas 24/7', desc: 'Desayuno, almuerzo, snack y cena específicos para el hígado graso.' },
            { n: '02', label: 'Solo 20 min', desc: 'Preparaciones rápidas con ingredientes de tu supermercado local.' },
            { n: '03', label: 'Para la familia', desc: 'No cocinás dos veces. Todos comen lo mismo sin saber que es terapéutico.' },
          ].map((f) => (
            <div key={f.n} className="border-2 border-[#111111] p-4 shadow-[3px_3px_0_#111111]">
              <span className="text-xs font-black text-[#B91C1C] tracking-widest block mb-1">{f.n}</span>
              <p className="font-bold text-[#111111] mb-1">{f.label}</p>
              <p className="text-sm text-[#525252] font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <p className="text-base md:text-lg text-[#333333] leading-relaxed mb-5 font-light">
          <strong className="font-bold text-[#111111]">NATURALE</strong> no es un libro de recetas lindas.
          Es un mapa de{' '}
          <strong className="font-bold">farmacología aplicada a través de la comida diaria</strong>,
          dividido en 4 fases estratégicas que trabajan como un protocolo de regeneración hepática.
        </p>
        <p className="text-base md:text-lg text-[#333333] leading-relaxed mb-8 font-light">
          Al combinar estratégicamente proteínas, carbohidratos y grasas específicas, creás un
          "detergente natural" dentro de tus células hepáticas. Esto obliga a tu cuerpo a utilizar
          la grasa acumulada en el órgano como fuente de energía.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="bg-[#111111] text-white p-5 md:p-6 mb-8">
          <p className="text-base md:text-lg font-editorial italic leading-relaxed">
            "Podés sanar comiendo platos abundantes, sabrosos y reales. Compartiendo la misma mesa
            y la misma comida con tu familia, sin que nadie se dé cuenta de que estás siguiendo
            un tratamiento médico."
          </p>
          <p className="mt-3 text-xs font-black uppercase tracking-widest text-[#FBBF24]">
            — Dra. Elinna Novaz, Especialista en Nutrición Terapéutica Hepática
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={250}>
        <button
          onClick={scrollToOffer}
          className="btn-press btn-shine w-full sm:w-auto bg-[#16A34A] text-white px-8 py-4 font-black text-base uppercase tracking-widest flex items-center justify-center gap-2 border-2 border-[#166534] shadow-[4px_4px_0_#166534] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#166534] transition-all duration-100"
        >
          SÍ, QUIERO SANAR MI HÍGADO <ArrowRight size={18} />
        </button>
      </ScrollReveal>
    </div>
  </section>
);
