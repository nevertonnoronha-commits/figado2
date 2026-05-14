import React from 'react';
import { Zap, Scale, Activity, Smile } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const BenefitsSection = () => (
  <section className="py-24 md:py-32 bg-[#04100b] border-y border-[#e2b764]/20 relative overflow-hidden">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a5c36]/40 to-transparent blur-3xl pointer-events-none"></div>

    <div className="container mx-auto px-6 max-w-6xl relative z-10">
      <ScrollReveal>
        <h2 className="font-editorial text-5xl md:text-6xl text-white mb-16 text-center leading-tight">
          ¿Qué cambia en tu vida <br />
          <span className="text-[#e2b764] italic">cuando comés bien?</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          {[
            { icon: Zap, title: 'Más energía desde los primeros días', desc: 'El cansancio crónico cede rápido. No es sutil, lo notás en el día a día.' },
            { icon: Scale, title: 'Pérdida de peso sostenida', desc: 'El metabolismo se activa. El peso baja y no vuelve, sin pasar hambre.' },
            { icon: Activity, title: 'Mejores resultados clínicos', desc: 'Transaminasas más bajas. Triglicéridos normalizados. Buenas noticias en la ecografía.' },
            { icon: Smile, title: 'Menos hinchazón', desc: 'La inflamación responde rápido. En días, ya te sentís diferente y liviano.' }
          ].map((item, idx) => (
            <ScrollReveal
              key={idx}
              delay={150 * idx}
              direction={idx % 2 === 0 ? "left" : "right"}
              className="flex items-start md:items-center gap-6 p-6 border-l-4 border-[#e2b764] bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <div className="bg-[#e2b764] p-4 text-[#04100b] shrink-0 shadow-[0_0_15px_rgba(226,183,100,0.5)]">
                <item.icon size={24} strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-editorial text-2xl text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-base font-light">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="lg:col-span-5 h-full">
          <ScrollReveal delay={300} className="h-full">
            <img
              src="https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/Familia%20inicio.webp"
              alt="Familia feliz comiendo saludable"
              loading="lazy"
              className="w-full h-full object-cover img-shadow-pro aspect-[4/5] lg:aspect-auto"
              onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500' fill='%230a2517'%3E%3Crect width='400' height='500'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%23C5A880'%3EFamilia inicio%3C/text%3E%3C/svg%3E"; }}
            />
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);
