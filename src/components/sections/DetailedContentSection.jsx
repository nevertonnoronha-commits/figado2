import React from 'react';
import { Sunrise, Utensils, Nut, Moon } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const DetailedContentSection = () => (
  <section className="py-24 bg-[#fcfbf9] text-[#04100b] overflow-hidden">
    <div className="container mx-auto px-6 max-w-4xl">
      <ScrollReveal>
        <div className="text-center mb-20">
          <span className="text-[#e2b764] tracking-widest uppercase text-sm font-bold mb-4 block">Dentro de la guía</span>
          <h2 className="font-editorial text-4xl md:text-5xl text-[#0a2517]">Recetas para cada momento del día</h2>
        </div>
      </ScrollReveal>

      <div className="space-y-12 md:space-y-16 border-l border-[#0a2517]/10 pl-8 ml-4 md:ml-0 md:border-none md:pl-0">
        {[
          { icon: Sunrise, time: 'MAÑANA', title: 'Desayunos que activan, no que hunden', desc: 'Empezá el día con preparaciones que activan el metabolismo hepático, cortan la inflamación de raíz y te dan energía real. Sin picos de azúcar que te tiran abajo a las 10 AM.' },
          { icon: Utensils, time: 'MEDIODÍA', title: 'Almuerzos completos que no parecen de dieta', desc: 'Platos principales sabrosos, nutritivos y rápidos. Los preparás en 20 minutos, los come toda la familia con gusto y nadie se da cuenta de que son terapéuticos.' },
          { icon: Nut, time: 'TARDE', title: 'Snacks que matan el hambre', desc: 'El problema con las dietas no es la comida principal, es el hambre entre comidas. Acá tenés opciones concretas para cortar la ansiedad sin procesados y sin culpa.' },
          { icon: Moon, time: 'NOCHE', title: 'Cenas livianas para dormir bien', desc: 'Preparaciones rápidas que no cargan el hígado cuando más descansa. Mejoran la digestión nocturna, reducen la inflamación y te ayudan a levantarte sin esa pesadez.' }
        ].map((item, idx) => (
          <ScrollReveal key={idx} delay={200} className="relative md:flex items-start gap-12 group">
            <div className="absolute -left-[49px] top-0 bg-[#fcfbf9] p-2 md:relative md:left-0 md:p-0 md:w-1/4 md:text-right">
              <div className="md:hidden w-8 h-8 rounded-full bg-[#0a2517] flex items-center justify-center text-[#e2b764] shadow-md">
                <item.icon size={14} />
              </div>
              <div className="hidden md:flex flex-col items-end">
                <span className="text-[#e2b764] tracking-widest text-xs uppercase font-bold mb-2">{item.time}</span>
                <div className="w-16 h-16 rounded-full bg-[#0a2517] flex items-center justify-center text-[#e2b764] group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
              </div>
            </div>
            <div className="md:w-3/4 pt-1 md:pt-4">
              <h3 className="font-editorial text-2xl md:text-3xl text-[#0a2517] mb-3">{item.title}</h3>
              <p className="text-[#04100b]/70 font-light text-lg leading-relaxed">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
