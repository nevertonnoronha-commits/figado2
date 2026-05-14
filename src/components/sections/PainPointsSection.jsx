import React from 'react';
import { Frown, Utensils, Smartphone, ZapOff, Activity, ShieldAlert } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const PainPointsSection = () => (
  <section className="py-24 md:py-32 bg-[#fcfbf9] text-[#04100b] relative">
    <div className="container mx-auto px-6 max-w-6xl">
      <ScrollReveal>
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-editorial text-5xl md:text-6xl text-[#0a2517] mb-6">¿Te suena <span className="italic text-[#e2b764]">alguna de estas?</span></h2>
          <p className="text-xl md:text-2xl font-light text-[#04100b]/70 max-w-2xl mx-auto">
            Porque si tenés hígado graso, seguro pasaste por más de una.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
        {[
          { icon: Frown, title: 'El diagnóstico sin plan', text: 'El médico te dijo "cambiá la alimentación"... y nada más. Sabés lo que no podés comer, pero no tenés idea de qué sí.' },
          { icon: Utensils, title: 'Confusión en la cocina', text: 'Te quedás parado frente a la heladera sin saber qué hacer. ¿Sin harinas, frituras, azúcar? La cocina es un problema.' },
          { icon: Smartphone, title: 'Sobrecarga de información', text: 'Buscaste en Google y quedaste más confundido. "La fruta está bien". "No, evitala". Y así, sin respuestas claras.' },
          { icon: ZapOff, title: 'Dietas insostenibles', text: 'Probaste dietas que duraron tres días. Aburridas, sin sabor. Imposibles de sostener cuando tenés familia y una vida real.' },
          { icon: Activity, title: 'Cansancio extremo', text: 'El cansancio y la hinchazón no dan respiro. Amanecés pesado, sin energía. Y el médico solo dice "mejorá los hábitos".' },
          { icon: ShieldAlert, title: 'Miedo constante', text: 'Y en el fondo, el miedo no se va. ¿Y si esto avanza? ¿Cirrosis? Esa incertidumbre de fondo es agotadora.' }
        ].map((item, idx) => (
          <ScrollReveal key={idx} delay={idx * 100} className="group cursor-default">
            <div className="bg-white p-8 md:p-10 border border-black/5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e2b764]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-[#e2b764]/20 transition-colors"></div>
              <div className="w-14 h-14 bg-[#0a2517] text-[#e2b764] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <item.icon size={24} />
              </div>
              <h3 className="font-editorial text-2xl font-semibold mb-4 text-[#0a2517]">{item.title}</h3>
              <p className="text-[#04100b]/70 font-light text-lg leading-relaxed">{item.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={300} className="mt-12 text-center">
        <div className="inline-block bg-[#0a2517] text-white px-8 py-6 rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a5c36] to-transparent opacity-50"></div>
          <p className="font-editorial text-2xl md:text-3xl italic relative z-10">
            Si te reconociste en más de uno, <span className="text-[#e2b764]">esto es exactamente para vos.</span>
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
