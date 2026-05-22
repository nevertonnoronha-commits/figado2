import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const GuaranteeSection = () => (
  <section className="py-16 md:py-20 bg-white border-b-4 border-[#111111]">
    <div className="container mx-auto px-5 max-w-3xl">
      <ScrollReveal>
        <div className="border-2 border-[#111111] shadow-[6px_6px_0_#111111] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">

          {/* Stamp visual */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="w-24 h-24 md:w-28 md:h-28 border-4 border-[#16A34A] flex flex-col items-center justify-center text-center rotate-[-3deg]">
              <ShieldCheck size={32} className="text-[#16A34A] mb-1" strokeWidth={2} />
              <span className="text-[9px] font-black uppercase tracking-wider text-[#16A34A] leading-tight">
                RIESGO<br />CERO
              </span>
            </div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#525252] mt-3 text-center">
              GARANTÍA<br />INCONDICIONAL
            </p>
          </div>

          {/* Text */}
          <div>
            <h2 className="font-editorial text-2xl md:text-3xl font-bold text-[#111111] leading-tight mb-3">
              Garantía Total de 30 Días:{' '}
              <span className="italic text-[#16A34A]">El Riesgo es 100% Nuestro</span>
            </h2>
            <p className="text-base text-[#333333] font-light leading-relaxed mb-4">
              Probá el protocolo. Comé rico. Compartí la mesa con tu familia. Si en 30 días no te
              despertás con más energía, o si tus síntomas de pesadez no disminuyen drásticamente,
              te devolvemos cada centavo.
            </p>
            <p className="text-base text-[#333333] font-light leading-relaxed mb-4">
              Sin formularios largos, sin preguntas, sin explicaciones. Conservás el material como
              agradecimiento por tu tiempo.
            </p>
            <div className="bg-[#111111] text-white px-4 py-3 inline-block">
              <p className="text-sm font-bold leading-snug">
                El único riesgo real acá es que mañana sigas tan agotado y asustado como hoy.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
