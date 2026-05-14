import React from 'react';
import { Salad, Ban, Clock, CircleDollarSign, Users, BarChart3 } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const MechanismSection = () => (
  <section className="py-24 md:py-32 bg-[#04100b] text-white relative">
    <div className="noise-bg opacity-30"></div>
    <div className="container mx-auto px-6 max-w-6xl relative z-10">
      <ScrollReveal>
        <div className="text-center mb-20">
          <h2 className="font-editorial text-5xl md:text-6xl text-white mb-6">
            Existe una solución. <br />
            <span className="italic text-[#e2b764]">Y es más simple de lo que pensás.</span>
          </h2>
          <p className="text-xl md:text-2xl font-light text-white/70 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-[#e2b764] font-semibold">NATURALE</strong> es una guía de alimentación terapéutica diseñada desde cero para personas que quieren comer bien, sin aburrirse y sin que parezca "comida de enfermo".
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Salad, title: 'Recetas 24/7', desc: 'Desayuno, almuerzo, merienda y cena específicas para el hígado graso.' },
          { icon: Ban, title: 'Guía Clara', desc: 'Alimentos prohibidos y permitidos sin tecnicismos complejos.' },
          { icon: Clock, title: 'Menos de 30 min', desc: 'Preparaciones rápidas porque tu vida no gira alrededor de la cocina.' },
          { icon: CircleDollarSign, title: 'Ingredientes Comunes', desc: 'Nada exótico ni caro. Solo ingredientes de tu supermercado local.' },
          { icon: Users, title: 'Para la Familia', desc: 'No cocinás dos veces. Todos disfrutan la misma comida sana.' },
          { icon: BarChart3, title: 'Info Nutricional', desc: 'Datos claros para que entiendas por qué cada receta te hace bien.' }
        ].map((item, idx) => (
          <ScrollReveal key={idx} delay={idx * 100}>
            <div className="group bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-[#e2b764]/50 transition-all duration-300 h-full backdrop-blur-sm">
              <item.icon size={32} className="text-[#e2b764] mb-6 transform group-hover:-translate-y-2 transition-transform duration-300" />
              <h3 className="font-editorial text-2xl text-white mb-3">{item.title}</h3>
              <p className="text-white/60 font-light leading-relaxed">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
