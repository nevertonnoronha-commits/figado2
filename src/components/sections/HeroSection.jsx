import { ShieldCheck, Star } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const HeroSection = () => (
  <section className="bg-white border-b-4 border-[#111111] pt-10 pb-14 md:pt-14 md:pb-20">
    <div className="container mx-auto px-5 max-w-3xl">

      {/* Pre-headline chip */}
      <ScrollReveal delay={100}>
        <div className="mb-6">
          <span className="inline-block border-2 border-[#B91C1C] text-[#B91C1C] text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] px-3 py-1.5">
            PARA PERSONAS DE MÁS DE 40 AÑOS CON FATIGA CRÓNICA, INFLAMACIÓN ABDOMINAL O DIAGNÓSTICO DE ESTEATOSIS...
          </span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111] leading-[1.06] mb-6">
          ADVERTENCIA: Tu hígado está{' '}
          <span className="text-[#B91C1C] italic">mecánicamente asfixiado.</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={230}>
        <p className="text-lg md:text-xl font-light text-[#333333] leading-relaxed mb-5">
          Así es como podés destapar el "filtro" de tu cuerpo en{' '}
          <strong className="font-bold text-[#111111]"><span className="highlight-sweep">28 días</span></strong>, sin dietas de hambre,
          sin batidos intomables y sin pastillas inútiles.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <div className="border-l-4 border-[#B91C1C] bg-[#FEF2F2] px-4 py-3 mb-8">
          <p className="text-sm md:text-base text-[#111111] leading-relaxed italic">
            Descubrí el Protocolo Clínico de <strong>Inteligencia Metabólica</strong> que obliga
            a tu cuerpo a expulsar la grasa retenida usando combinaciones exactas de alimentos
            de tu supermercado local.
          </p>
        </div>
      </ScrollReveal>

      {/* Social proof strip — no CTA button here */}
      <ScrollReveal delay={370}>
        <div className="flex flex-wrap items-center gap-5">
          <div className="flex items-center gap-2.5">
            <div className="flex -space-x-2 overflow-hidden">
              {[1, 5, 9, 12, 32].map((n) => (
                <img
                  key={n}
                  className="inline-block w-7 h-7 rounded-full ring-2 ring-white object-cover"
                  src={`https://i.pravatar.cc/100?img=${n}`}
                  alt="Paciente verificada"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-0.5 text-[#B91C1C]">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                <span className="text-xs font-bold ml-1 text-[#111111]">4.9/5</span>
              </div>
              <span className="text-[10px] text-[#525252] block">+12.678 pacientes</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-[#16A34A] shrink-0" strokeWidth={2} />
            <span className="text-xs text-[#525252]">
              <strong className="text-[#111111]">Garantía 30 días</strong> · Riesgo Cero
            </span>
          </div>
        </div>
      </ScrollReveal>

    </div>
  </section>
);
