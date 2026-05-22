import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

const painItems = [
  { label: 'Diagnóstico sin plan',        text: 'El médico dijo "cambiá la dieta" y nada más. Sin recetas, sin guía, solo restricciones vagas.' },
  { label: 'Confusión total en la cocina', text: 'No sabés qué comer. ¿Sin harinas? ¿Sin azúcar? La cocina se convirtió en un problema.' },
  { label: 'Sobrecarga de información',   text: '"La fruta está bien." "No, evitala." Buscaste en Google y quedaste más confundido que antes.' },
  { label: 'Dietas que duran 3 días',      text: 'Probaste planes aburridos, sin sabor. Imposibles de mantener con familia y vida real.' },
  { label: 'Cansancio extremo',            text: 'Te levantás pesado, sin energía. El médico solo dice "mejorá los hábitos" sin explicar cómo.' },
  { label: 'Miedo constante al futuro',    text: '¿Y si avanza hacia fibrosis? ¿Hacia cirrosis? Esa incertidumbre silenciosa es agotadora.' },
];

export const PainPointsSection = () => (
  <section className="bg-[#F7F5F0] py-16 md:py-24 border-b-4 border-[#111111]">
    <div className="container mx-auto px-5 max-w-3xl space-y-7">

      {/* P1 · gancho emocional */}
      <ScrollReveal>
        <p className="text-lg md:text-xl text-[#111111] leading-[1.8] font-light">
          Si te despertás agotado aunque duermas 8 horas, sentís el abdomen pesado después de cada
          comida, o vivís con esa "neblina mental" que no te deja concentrarte...{' '}
          <strong className="font-bold">
            <span className="highlight-sweep">necesito que leas esta página con extrema atención.</span>
          </strong>
        </p>
      </ScrollReveal>

      {/* P2 · audit de acusações */}
      <ScrollReveal>
        <div className="border-l-4 border-[#111111] bg-white px-5 py-4 shadow-[3px_3px_0_#111111]">
          <p className="text-base md:text-lg text-[#333333] leading-relaxed italic font-light">
            Sé exactamente lo que estás pensando:{' '}
            <em className="not-italic font-bold text-[#111111]">
              "Acá viene otra dieta restrictiva más. Otro gurú que me va a decir que deje las harinas,
              que me prohíba comer con mi familia y que me mate de hambre comiendo lechuga hervida."
            </em>
          </p>
        </div>
      </ScrollReveal>

      {/* P3 · validação emocional */}
      <ScrollReveal>
        <p className="text-lg md:text-xl font-bold text-[#111111]">
          Mirá, voy a ser directo con vos:{' '}
          <span className="highlight-sweep text-[#B91C1C]">No es tu culpa.</span>{' '}
          Y definitivamente no te estás volviendo perezoso por la edad.
        </p>
      </ScrollReveal>

      {/* P4 · cena do consultório */}
      <ScrollReveal>
        <p className="text-base md:text-lg text-[#333333] leading-relaxed font-light">
          Probablemente ya fuiste al médico. Te sentaste en el consultorio, asustado por tus niveles de
          transaminasas, triglicéridos o esa ecografía que mostró "Hígado Graso Grado 2".
          ¿Y qué te dijo el especialista?
        </p>
      </ScrollReveal>

      {/* P5 · o pior conselho — caixa vermelha */}
      <ScrollReveal>
        <div className="bg-[#B91C1C] text-white p-5 md:p-6 shadow-[4px_4px_0_#7F1D1D]">
          <p className="text-base md:text-lg font-bold italic leading-relaxed mb-2">
            Te dio el peor consejo posible:
          </p>
          <p className="font-black text-xl md:text-2xl not-italic leading-snug">
            "Tenés que cambiar los hábitos. Cerrá la boca y bajá de peso."
          </p>
          <p className="text-sm text-white/70 mt-3 font-light">
            Te vas a casa con un diagnóstico, pero sin un plan.
          </p>
        </div>
      </ScrollReveal>

      {/* P6 · heladera */}
      <ScrollReveal>
        <p className="text-base md:text-lg text-[#333333] leading-relaxed font-light">
          Te parás frente a la heladera con miedo a comer. ¿La fruta hace mal? ¿El yogur light sirve?
          Buscás en Google y terminás con una sobrecarga de información contradictoria.
        </p>
      </ScrollReveal>

      {/* P7 · revelação clínica — caixa dramática */}
      <ScrollReveal>
        <div className="border-2 border-[#111111] bg-white p-6 md:p-8 shadow-[5px_5px_0_#111111]">
          <p className="text-xs font-black uppercase tracking-widest text-[#B91C1C] mb-3">
            LA VERDAD MÉDICA QUE LA INDUSTRIA DE LAS DIETAS TE OCULTA
          </p>
          <p className="text-lg md:text-xl font-bold text-[#111111] leading-relaxed mb-4">
            Tu cansancio crónico y tu vientre inflamado son un problema de pura{' '}
            <span className="highlight-red font-bold">mecánica biológica.</span>
          </p>
          <p className="text-base text-[#333333] leading-relaxed font-light">
            Tu hígado funciona exactamente igual que el filtro de aceite de un auto. Cuando está limpio,
            la energía fluye y tu metabolismo quema calorías. Pero cuando ese filtro se empapa de grasa
            silenciosa, <strong>todo tu cuerpo se asfixia.</strong>
          </p>
          <p className="mt-4 text-lg font-black text-[#111111] border-t-2 border-[#111111] pt-4">
            Y te aseguro algo:{' '}
            <span className="highlight-sweep font-black">Pasar hambre no destapa un filtro. Solo lo empeora.</span>
          </p>
        </div>
      </ScrollReveal>

      {/* P8 · grid de dores — cada card staggerado */}
      <ScrollReveal>
        <p className="text-sm font-black uppercase tracking-widest text-[#525252] mb-4">
          ¿Te reconocés en alguno de estos síntomas?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {painItems.map((item, i) => (
            <div
              key={i}
              className="border border-[#D1D5DB] bg-white p-4 flex gap-3 items-start"
              style={{
                opacity: 0,
                transform: 'translateY(16px)',
                transition: `opacity 500ms ease, transform 500ms ease`,
                transitionDelay: `${i * 80}ms`,
              }}
              ref={(el) => {
                if (!el) return;
                const obs = new IntersectionObserver(([e]) => {
                  if (e.isIntersecting) {
                    el.style.opacity = '1';
                    el.style.transform = 'none';
                    obs.unobserve(el);
                  }
                }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
                obs.observe(el);
              }}
            >
              <span className="text-[#B91C1C] font-black text-lg leading-none mt-0.5 shrink-0">✕</span>
              <div>
                <p className="font-bold text-[#111111] text-sm mb-1">{item.label}</p>
                <p className="text-[#525252] text-sm font-light leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* P9 · fecho */}
      <ScrollReveal>
        <div className="bg-[#111111] text-white px-6 py-5 text-center">
          <p className="font-editorial text-xl md:text-2xl italic">
            Si te reconociste en más de uno,{' '}
            <span className="text-[#FBBF24]">esto es exactamente lo que necesitás leer.</span>
          </p>
        </div>
      </ScrollReveal>

    </div>
  </section>
);
