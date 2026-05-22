import React from 'react';
import { ShieldCheck, RotateCcw, Lock, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

const TRUST_BADGES = [
  { icon: Lock,         label: 'Compra Segura',     sub: 'SSL 256-bit' },
  { icon: ShieldCheck,  label: 'Hotmart',            sub: 'Plataforma certificada' },
  { icon: RotateCcw,    label: '30 Días',            sub: 'Reembolso total' },
  { icon: CheckCircle2, label: 'Acceso Inmediato',   sub: 'Digital · 24h' },
];

export const GuaranteeSection = () => (
  <section className="py-16 md:py-20 bg-white border-b-4 border-[#111111]">
    <div className="container mx-auto px-5 max-w-2xl">
      <ScrollReveal>

        {/* Main guarantee card */}
        <div className="border-2 border-[#16A34A] shadow-[6px_6px_0_#166534] overflow-hidden">

          {/* Green header bar */}
          <div className="bg-[#16A34A] px-6 py-4 flex items-center justify-center gap-3">
            <ShieldCheck size={22} className="text-white shrink-0" strokeWidth={2.5} />
            <span className="text-white font-black text-sm uppercase tracking-[0.2em]">
              GARANTÍA INCONDICIONAL DE 30 DÍAS
            </span>
            <ShieldCheck size={22} className="text-white shrink-0" strokeWidth={2.5} />
          </div>

          {/* Body */}
          <div className="bg-white px-6 py-8 md:px-10 flex flex-col sm:flex-row items-center gap-8">

            {/* Seal visual */}
            <div className="shrink-0 flex flex-col items-center gap-2">
              <div className="relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-4 border-[#16A34A]"></div>
                {/* Inner ring */}
                <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#16A34A]/40"></div>
                {/* Center content */}
                <div className="flex flex-col items-center justify-center text-center z-10">
                  <span className="font-editorial text-4xl md:text-5xl font-bold text-[#16A34A] leading-none">30</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#16A34A] leading-tight">DÍAS</span>
                </div>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#166534] text-center leading-tight">
                RIESGO<br />CERO
              </p>
            </div>

            {/* Copy */}
            <div className="flex-1 text-center sm:text-left">
              <h2 className="font-editorial text-xl md:text-2xl font-bold text-[#111111] leading-tight mb-3">
                El Riesgo es{' '}
                <span className="text-[#16A34A]">100% Nuestro</span>
              </h2>
              <p className="text-sm md:text-base text-[#333333] font-light leading-relaxed mb-3">
                Probá el protocolo. Comé rico. Compartí la mesa con tu familia. Si en 30 días no te despertás con más energía, o si tus síntomas de pesadez no disminuyen drásticamente, te devolvemos cada centavo.
              </p>
              <p className="text-sm text-[#333333] font-light leading-relaxed mb-4">
                Sin formularios largos, sin preguntas, sin explicaciones. Conservás el material como agradecimiento por tu tiempo.
              </p>
              <div className="bg-[#F0FDF4] border border-[#BBF7D0] px-4 py-2.5 inline-block">
                <p className="text-xs font-bold text-[#166534] leading-snug">
                  El único riesgo real acá es que mañana sigas tan agotado y asustado como hoy.
                </p>
              </div>
            </div>
          </div>

          {/* Trust badges row */}
          <div className="border-t-2 border-[#E5E7EB] bg-[#F9FAFB] px-6 py-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {TRUST_BADGES.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center text-center gap-1.5">
                  <div className="w-9 h-9 rounded-full bg-[#DCFCE7] flex items-center justify-center">
                    <Icon size={17} className="text-[#16A34A]" strokeWidth={2} />
                  </div>
                  <span className="text-[11px] font-black text-[#111111] leading-tight">{label}</span>
                  <span className="text-[10px] text-[#6B7280] leading-tight">{sub}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Hotmart credibility line */}
        <p className="text-center text-[10px] text-[#9CA3AF] mt-3 tracking-wide">
          Reembolso procesado directamente por Hotmart · Plataforma n°1 de América Latina
        </p>

      </ScrollReveal>
    </div>
  </section>
);
