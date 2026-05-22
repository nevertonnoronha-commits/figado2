import React from 'react';
import { Sunrise, Utensils, Nut, Moon } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

const phases = [
  {
    n: 'FASE 1',
    icon: Sunrise,
    title: 'Desayunos de Activación',
    sub: 'Cortan la inflamación de raíz sin picos de insulina',
    desc: 'La combinación exacta de 3 alimentos comunes que obliga a tu hígado a salir del modo "almacenamiento" y entrar en modo "quema de grasa" antes de las 10 AM. Olvidate del sueño a media mañana y los picos de azúcar que te tiran abajo.',
  },
  {
    n: 'FASE 2',
    icon: Utensils,
    title: 'Almuerzos Terapéuticos',
    sub: 'Listos en 20 min · diseñados para trabajar mientras vos trabajás',
    desc: 'Platos principales tan sabrosos que tu familia pedirá repetir. Científicamente formulados para mantener el filtro hepático activo sin ingredientes exóticos ni presupuesto extra. Nada de comida "de hospital".',
  },
  {
    n: 'FASE 3',
    icon: Nut,
    title: 'El "Engaño" del Snack',
    sub: 'Cero ansiedad. Cero costo metabólico para el hígado',
    desc: 'El problema de las dietas no es la comida principal · es el hambre desesperada a las 5 PM. Acá descubrís los snacks que engañan a tu cerebro saciando la ansiedad, pero con costo metabólico prácticamente nulo para tu hígado.',
  },
  {
    n: 'FASE 4',
    icon: Moon,
    title: 'Cenas de Reparación Nocturna',
    sub: 'Desinflaman mientras dormís · te levantás sin pesadez',
    desc: 'Preparaciones específicas que no cargan tu sistema digestivo. Desinflaman tus órganos internos mientras dormís, garantizando que te levantés liviano y con energía real al día siguiente. Adiós a la pesadez matutina.',
  },
];

export const DetailedContentSection = () => (
  <section className="py-16 md:py-24 bg-white border-b-4 border-[#111111]">
    <div className="container mx-auto px-5 max-w-3xl">

      <ScrollReveal>
        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#B91C1C] mb-3 block">
          PRESENTAMOS EL SISTEMA NATURALE
        </span>
        <h2 className="font-editorial text-3xl md:text-5xl font-bold text-[#111111] leading-tight mb-4">
          El Protocolo Clínico de Regeneración Hepática en Casa
        </h2>
        <p className="text-base md:text-lg text-[#525252] font-light leading-relaxed mb-12 border-l-4 border-[#111111] pl-4">
          No es un PDF de recetas lindas. Es un mapa de farmacología aplicada a través de tu comida diaria, dividido en 4 fases estratégicas.
        </p>
      </ScrollReveal>

      <div className="space-y-5">
        {phases.map((phase, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="border-2 border-[#111111] bg-white shadow-[4px_4px_0_#111111] overflow-hidden">
              <div className="bg-[#111111] text-white px-5 py-3 flex items-center gap-3">
                <phase.icon size={18} className="shrink-0 text-[#FBBF24]" />
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#FBBF24] block leading-none mb-0.5">
                    {phase.n}
                  </span>
                  <p className="font-bold text-white text-sm md:text-base leading-tight">{phase.title}</p>
                </div>
              </div>
              <div className="px-5 py-4">
                <p className="text-xs font-black uppercase tracking-wider text-[#B91C1C] mb-2">{phase.sub}</p>
                <p className="text-sm md:text-base text-[#333333] font-light leading-relaxed">{phase.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
