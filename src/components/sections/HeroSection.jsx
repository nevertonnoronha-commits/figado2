import { ShieldCheck, Star, ChevronDown } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { scrollToOffer } from '../../utils/smoothScroll';

export const HeroSection = () => (
  <section className="bg-white border-b-4 border-[#111111] pt-8 pb-16 md:pt-12 md:pb-24">
    <div className="container mx-auto px-5 max-w-4xl">

      {/* Pre-headline chip */}
      <ScrollReveal delay={100}>
        <div className="mb-6 md:mb-8">
          <span className="inline-block border-2 border-[#B91C1C] text-[#B91C1C] text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] px-3 py-1.5">
            PARA PERSONAS DE MÁS DE 40 AÑOS CON FATIGA CRÓNICA, INFLAMACIÓN ABDOMINAL O DIAGNÓSTICO DE ESTEATOSIS...
          </span>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Left: copy */}
        <div>
          <ScrollReveal delay={150}>
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-[#111111] leading-[1.08] mb-5">
              ADVERTENCIA: Tu hígado está{' '}
              <span className="text-[#B91C1C] italic">mecánicamente asfixiado.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <p className="text-lg md:text-xl font-light text-[#333333] leading-relaxed mb-5">
              Así es como podés destapar el "filtro" de tu cuerpo en{' '}
              <strong className="font-bold text-[#111111]">28 días</strong>, sin dietas de hambre,
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

          {/* Social proof strip */}
          <ScrollReveal delay={350}>
            <div className="flex flex-wrap items-center gap-4 mb-8">
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
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                    <span className="text-xs font-bold ml-1 text-[#111111]">4.9/5</span>
                  </div>
                  <span className="text-[10px] text-[#525252] block">+12.678 pacientes</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-[#16A34A] shrink-0" strokeWidth={2} />
                <span className="text-xs text-[#525252]">
                  <strong className="text-[#111111]">Garantía 30 días</strong> — Riesgo Cero
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Scroll CTA — no price here */}
          <ScrollReveal delay={400}>
            <button
              onClick={scrollToOffer}
              className="btn-press btn-shine w-full sm:w-auto bg-[#B91C1C] text-white px-8 py-4 font-black text-base uppercase tracking-widest flex items-center justify-center gap-2 border-2 border-[#7F1D1D] shadow-[4px_4px_0_#7F1D1D] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#7F1D1D] transition-all duration-100"
            >
              Leer el Protocolo Completo <ChevronDown size={18} />
            </button>
          </ScrollReveal>
        </div>

        {/* Right: product mockup */}
        <ScrollReveal delay={200} className="flex justify-center">
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-full h-full border-2 border-[#B91C1C] pointer-events-none z-0"></div>
            <img
              src="https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/image-15.webp"
              alt="Sistema NATURALE — Protocolo Clínico de Regeneración Hepática"
              loading="eager"
              fetchPriority="high"
              className="w-[260px] md:w-[340px] relative z-10 glow-pro cursor-pointer min-h-[200px]"
            />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#111111] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 whitespace-nowrap z-20">
              PROTOCOLO CLÍNICO — 28 DÍAS
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  </section>
);
