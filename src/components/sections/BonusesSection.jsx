import React from 'react';
import { Gift, CheckCircle2, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { BonusCard } from '../ui/BonusCard';

const bonosGratis = [
  {
    title: "BONO #1: El Té Secreto del Hígado",
    subtitle: "Tomalo cada mañana y en 7 días notás la diferencia",
    desc: "Este té de 3 ingredientes naturales activa la regeneración hepática desde adentro sin pastillas, sin suplementos caros, sin complicaciones.",
    val: "9.99",
    img: "https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/generated-image%20(1).webp",
    alt: "Té natural para el hígado con hierbas"
  },
  {
    title: "BONO #2: 10 Recetas para Dormir sin Dolor",
    subtitle: "Cenas que calman el hígado de noche",
    desc: "Si te acostás con pesadez o te despertás sintiéndote mal, tu hígado necesita apoyo nocturno. Estas cenas están diseñadas para eso.",
    val: "9.99",
    img: "https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/generated-image%20(6).webp",
    alt: "Cena ligera en ambiente nocturno relajante"
  },
  {
    title: "BONO #3: Los 12 Alimentos Traidores",
    subtitle: "Parecen saludables pero están dañando tu hígado",
    desc: "El jugo de naranja natural. El yogur light. La avena instantánea. Algunos alimentos que creés que te ayudan hacen exactamente lo contrario. Acá te muestro por qué.",
    val: "7.99",
    img: "https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/2f453bea-34f4-467f-ae9a-341787e258ee.webp",
    alt: "Alimentos aparentemente sanos con alerta"
  },
  {
    title: "BONO #4: Guía de Seguimiento",
    subtitle: "Sabé si tu hígado está mejorando semana a semana",
    desc: "¿Qué significan tus transaminasas? ¿Cuándo debería mejorar la ecografía? Esta guía explica todo en lenguaje simple para tu próxima consulta médica.",
    val: "12.99",
    img: "https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/c2e5eaf0-d4ce-4e4c-8102-908be94d8a30.webp",
    alt: "Confirmación médica de mejoría"
  }
];

export const BonusesSection = () => (
  <section className="py-24 md:py-32 bg-[#0a2517] text-white border-t border-[#e2b764]/20 relative">
    <div className="noise-bg opacity-40"></div>
    <div className="container mx-auto px-6 max-w-6xl relative z-10">
      <ScrollReveal>
        <div className="text-center mb-16">
          <Gift size={48} className="mx-auto text-[#e2b764] mb-6 animate-pulse" />
          <h2 className="font-editorial text-4xl md:text-6xl text-white mb-6">
            Bonos Exclusivos <br /><span className="italic text-[#e2b764] text-3xl md:text-4xl"> Solo con esta Oferta</span>
          </h2>
          <p className="text-xl font-light text-white/80">
            Comprás las recetas y te llevás todo esto incluido, sin costo adicional:
          </p>
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-8 mb-20 max-w-4xl mx-auto">
        {bonosGratis.map((bono, idx) => (
          <BonusCard key={idx} bono={bono} idx={idx} />
        ))}
      </div>

      <ScrollReveal delay={200} className="max-w-3xl mx-auto">
        <div className="bg-[#04100b] border-2 border-[#e2b764] p-8 md:p-12 rounded-2xl shadow-[0_0_40px_rgba(226,183,100,0.15)] relative">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#e2b764] text-[#04100b] font-black uppercase tracking-widest px-6 py-2 rounded-full text-sm shadow-lg whitespace-nowrap">
            📦 Lo que recibís hoy:
          </div>

          <ul className="space-y-4 mb-8 text-white/90 font-light mt-4">
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-[#4CAF50]" /> Recetas para Sanar el Hígado</span>
              <span className="font-medium">$79.99</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2 text-white/70">
              <span className="flex gap-2 items-center"><Gift size={16} className="text-[#e2b764]" /> Bono #1: Té Secreto</span>
              <span className="line-through">$9.99</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2 text-white/70">
              <span className="flex gap-2 items-center"><Gift size={16} className="text-[#e2b764]" /> Bono #2: Cenas Sin Dolor</span>
              <span className="line-through">$9.99</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2 text-white/70">
              <span className="flex gap-2 items-center"><Gift size={16} className="text-[#e2b764]" /> Bono #3: Alimentos Traidores</span>
              <span className="line-through">$7.99</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2 text-white/70">
              <span className="flex gap-2 items-center"><Gift size={16} className="text-[#e2b764]" /> Bono #4: Guía de Seguimiento</span>
              <span className="line-through">$12.99</span>
            </li>
          </ul>

          <div className="bg-[#1a5c36]/30 p-6 rounded-xl text-center mb-8 border border-[#4CAF50]/30">
            <p className="text-white/50 text-sm mb-1 uppercase tracking-widest">Valor Total: <span className="line-through">$120.95</span></p>
            <p className="font-editorial text-4xl md:text-5xl text-white mb-2">Hoy Pagás Solo: <span className="text-[#e2b764] font-bold">$17.99</span></p>
            <p className="text-[#4CAF50] font-bold uppercase tracking-wide text-sm bg-[#4CAF50]/10 inline-block px-4 py-1 rounded-full">
              Ahorrás $102.96  85% de descuento
            </p>
          </div>

          <a href="#offer" className="btn-shine block w-full text-center bg-[#e2b764] text-[#04100b] py-5 rounded-lg font-extrabold text-xl md:text-2xl tracking-wide shadow-[0_0_30px_rgba(226,183,100,0.3)] transition-all hover:bg-[#f3c97b]">
            Quiero Todo Esto Ahora <ArrowRight size={24} className="inline-block ml-2" />
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
