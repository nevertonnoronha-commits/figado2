import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { openCheckoutModal } from '../../utils/analytics';

export const FinalCTASection = () => (
    <section className="py-32 relative text-white text-center overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
            <img
                src="https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/generated-image%20(8).webp"
                alt="Familia reunida en la mesa celebrando con comida saludable"
                loading="lazy"
                className="w-full h-full object-cover object-center"
                onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 600' fill='%230a2517'%3E%3Crect width='1000' height='600'/%3E%3C/svg%3E"; }}
            />
            <div className="absolute inset-0 bg-[#04100b]/80 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <ScrollReveal>
                <h2 className="font-editorial text-4xl md:text-7xl mb-6 md:mb-8 leading-tight drop-shadow-xl text-white">
                    Tu hígado puede recuperarse.
                </h2>
                <p className="text-xl md:text-2xl font-light text-[#e2b764] mb-8 md:mb-10 italic drop-shadow-md">
                    Vos tenés el poder, y ahora tenés el plan.
                </p>
                <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                    No esperes que el médico te dé malas noticias para actuar. El momento de recuperar tu vida, tu energía y tu paz mental es ahora.
                </p>

                <button
                    onClick={openCheckoutModal}
                    className="btn-press btn-shine inline-flex items-center justify-center w-full md:w-3/4 mx-auto bg-[#e2b764] text-[#04100b] px-6 py-4 md:px-8 md:py-6 rounded-lg font-extrabold text-lg md:text-3xl tracking-wide shadow-[0_0_60px_rgba(226,183,100,0.5)] hover:bg-[#f3c97b] relative z-20"
                >
                    SÍ, QUIERO SANAR MI HÍGADO AHORA <ArrowRight size={24} className="ml-2 md:ml-3 md:w-7 md:h-7" />
                </button>

                <p className="mt-8 text-sm text-white/60 tracking-widest uppercase font-bold">
                    Oferta $17.99 (85% OFF) <span className="opacity-50 mx-2">|</span> Garantía de 30 Días
                </p>
            </ScrollReveal>
        </div>
    </section>
);
