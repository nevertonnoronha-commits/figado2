import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const ExpertSection = () => (
  <section className="py-24 bg-[#0a2517] relative border-t border-white/5">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-4 flex justify-center">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute inset-0 bg-[#e2b764] rounded-xl translate-x-4 translate-y-4 opacity-20"></div>
              <img
                src="https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/0a5cf9de-90ce-4fdf-ac99-cd2a085896a8.webp"
                alt="Dra. Elinna Novaz"
                loading="lazy"
                className="w-[200px] md:w-[280px] h-auto object-cover rounded-xl img-shadow-pro relative z-10 aspect-[3/4]"
                onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400' fill='%23154734'%3E%3Crect width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23C5A880'%3EDra. Elinna Novaz%3C/text%3E%3C/svg%3E"; }}
              />
            </div>
          </ScrollReveal>
        </div>

        <div className="md:col-span-8 text-white">
          <ScrollReveal delay={100}>
            <h2 className="font-editorial text-3xl md:text-5xl mb-6 leading-tight">
              Las recetas no las escribió un algoritmo.<br />
              <span className="text-[#e2b764] italic">Las desarrolló ella con más de 12.000 casos reales.</span>
            </h2>

            <p className="text-lg font-bold mb-1 text-[#e2b764]">Dra. Elinna Novaz Nutricionista Clínica</p>
            <p className="text-sm font-light text-white/60 mb-6 uppercase tracking-wider">Especialista en salud hepática y alimentación terapéutica</p>

            <p className="font-light text-white/80 leading-relaxed mb-6 text-lg">
              Hace más de 10 años, la Dra. Elinna notó algo que la preocupaba: sus pacientes con hígado graso llegaban con un diagnóstico pero sin un plan. "Cambiá la dieta", y nada más. Sin recetas. Sin guía. Solo restricciones vagas que duraban una semana y terminaban en frustración.
            </p>
            <p className="font-light text-white/80 leading-relaxed mb-8 text-lg">
              Así nació este método: recetas reales, accesibles, probadas en más de 12.000 pacientes a lo largo de una década.
            </p>

            <ul className="space-y-3 mb-10 text-white/90">
              {[
                '+12.000 pacientes tratados con resultados comprobados',
                'Especialista en alimentación hepática y nutrición terapéutica',
                'Redujo transaminasas en miles de casos documentados',
                'Más de 10 años de experiencia clínica en esteatosis hepática'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#4CAF50] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <blockquote className="border-l-4 border-[#4CAF50] bg-white/5 p-6 rounded-r-lg font-editorial text-xl italic text-white/90 shadow-inner">
              "El hígado graso no se cura con pastillas. Se cura con lo que ponés en el plato, todos los días. Por eso creé estas recetas para que cualquier persona pueda hacerlo, sin importar si sabe cocinar o no."
              <footer className="mt-4 text-sm font-sans font-bold text-[#e2b764] not-italic"> Dra. Elinna Novaz</footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);
