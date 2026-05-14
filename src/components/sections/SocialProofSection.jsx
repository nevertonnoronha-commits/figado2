import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

const reviews = [
  { text: "Me diagnosticaron hígado graso grado 2 y estaba desesperada. Empecé con las recetas y en 6 semanas mis transaminasas bajaron de 68 a 32. Mi médico quedó sorprendido.", author: "Carmen Rodríguez Vega" },
  { text: "Tenía triglicéridos en 380 y colesterol alto además. Seguí el plan 4 semanas al pie de la letra y bajé 6 kilos sin pasar hambre. Mi esposa y mis hijos las comen felices.", author: "Roberto Méndez Torres" },
  { text: "Lo que más me sorprendió fue dejar de sentirme hinchada y cansada. Lo noté en la segunda semana. La sección de snacks fue un descubrimiento total.", author: "Gabriela Flores Montoya" }
];

export const SocialProofSection = () => (
  <section className="py-24 bg-[#fcfbf9] text-[#04100b]">
    <div className="container mx-auto px-6 max-w-6xl">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="font-editorial text-5xl text-[#0a2517] mb-4">Resultados Reales</h2>
          <div className="w-24 h-1 bg-[#e2b764] mx-auto"></div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <ScrollReveal key={idx} delay={idx * 150} className="bg-white p-8 border border-black/5 shadow-lg relative rounded-xl hover:-translate-y-2 transition-transform duration-300">
            <span className="absolute -top-6 -left-2 text-8xl font-editorial text-[#e2b764] opacity-20">"</span>
            <div className="flex gap-1 text-[#e2b764] mb-6 relative z-10">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-lg font-light italic text-[#04100b]/80 mb-8 relative z-10 leading-relaxed">"{review.text}"</p>
            <div className="mt-auto border-t border-black/10 pt-4">
              <p className="font-bold text-[#0a2517]">{review.author}</p>
              <p className="text-xs font-bold text-[#4CAF50] uppercase flex items-center gap-1 mt-1">
                <CheckCircle2 size={12} /> Compra Verificada
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
