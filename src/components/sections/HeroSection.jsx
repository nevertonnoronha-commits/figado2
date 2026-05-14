import React from 'react';
import { ShieldCheck, Star, ArrowRight, Sparkles } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const HeroSection = () => (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f3b23] via-[#061a11] to-[#04100b] pt-10 pb-20">
        <div className="noise-bg"></div>

        <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-[#1a5c36] rounded-full mix-blend-screen filter blur-[100px] orb-1 opacity-60"></div>
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-[#0c2e1b] rounded-full mix-blend-screen filter blur-[120px] orb-2 opacity-80"></div>
        <div className="absolute top-[40%] left-[40%] w-[200px] h-[200px] bg-[#e2b764] rounded-full mix-blend-overlay filter blur-[150px] orb-3 opacity-30"></div>

        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
            <ScrollReveal delay={100}>
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#e2b764]/40 bg-black/30 backdrop-blur-sm mb-8 transform transition-transform hover:scale-105">
                    <Sparkles size={16} className="text-[#e2b764]" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e2b764]">Método nutricional validado</span>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
                <h1 className="font-editorial text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-white mb-6 drop-shadow-2xl">
                    Recetas Deliciosas <br />
                    <span className="italic text-[#e2b764]">para Sanar el</span> <br />
                    Hígado Graso
                </h1>
            </ScrollReveal>

            <ScrollReveal delay={300}>
                <p className="text-lg md:text-2xl font-light text-white/80 max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-md">
                    Comé rico, recuperá tu energía y cuidá tu hígado de verdad.
                    Sin dietas insípidas, sin sacrificios imposibles, sin que el resto de la familia se queje.
                </p>
            </ScrollReveal>

            <ScrollReveal delay={400} className="w-full flex justify-center mb-10">
                <div className="relative group perspective-1000">
                    <div className="absolute inset-0 bg-[#e2b764]/10 blur-3xl rounded-full"></div>
                    <img
                        src="https://raw.githubusercontent.com/nevertonnoronha-commits/naturale-images/main/image-15.webp"
                        alt="Mockup Naturale Recetas para Sanar el Hígado Graso"
                        loading="lazy"
                        className="w-[280px] md:w-[400px] mx-auto rounded-xl relative z-10 bg-black/10 min-h-[200px] glow-pro cursor-pointer"
                    />
                </div>
            </ScrollReveal>

            <ScrollReveal delay={500} className="w-full flex flex-col items-center">
                <a href="#offer" className="btn-shine bg-[#e2b764] text-[#04100b] px-8 py-5 md:px-12 md:py-6 rounded-none font-bold text-xl md:text-2xl tracking-wide flex items-center justify-center gap-3 w-full md:w-auto shadow-[0_0_30px_rgba(226,183,100,0.3)] transition-all hover:bg-[#f3c97b] cursor-pointer">
                    Quiero mis Recetas Ahora <ArrowRight size={24} className="animate-bounce" style={{ animationDirection: 'alternate', animationDuration: '0.8s' }} />
                </a>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-white/80 font-medium max-w-xl mx-auto bg-black/20 backdrop-blur-md px-6 py-3.5 rounded-full border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2.5 overflow-hidden">
                            <img className="inline-block w-7 h-7 rounded-full ring-2 ring-[#061a11] object-cover" src="https://i.pravatar.cc/100?img=1" alt="Paciente verificada" />
                            <img className="inline-block w-7 h-7 rounded-full ring-2 ring-[#061a11] object-cover" src="https://i.pravatar.cc/100?img=5" alt="Paciente verificada" />
                            <img className="inline-block w-7 h-7 rounded-full ring-2 ring-[#061a11] object-cover" src="https://i.pravatar.cc/100?img=9" alt="Paciente verificada" />
                            <img className="inline-block w-7 h-7 rounded-full ring-2 ring-[#061a11] object-cover" src="https://i.pravatar.cc/100?img=12" alt="Paciente verificada" />
                            <img className="inline-block w-7 h-7 rounded-full ring-2 ring-[#061a11] object-cover" src="https://i.pravatar.cc/100?img=32" alt="Paciente verificada" />
                        </div>
                        <div className="text-left leading-tight">
                            <div className="flex items-center gap-0.5 text-[#e2b764]">
                                {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
                                <span className="text-xs font-bold ml-1.5 text-white">4.9/5</span>
                            </div>
                            <span className="text-[11px] text-white/60 block mt-0.5">Opiniones verificadas</span>
                        </div>
                    </div>

                    <div className="hidden sm:block w-px h-6 bg-white/10"></div>

                    <div className="flex items-center gap-2 text-left">
                        <ShieldCheck size={20} className="text-[#e2b764] shrink-0" strokeWidth={1.5} />
                        <div className="leading-tight">
                            <span className="text-xs text-white block"><strong>12.678 pacientes</strong> comprueban</span>
                            <span className="text-[11px] text-[#e2b764] block mt-0.5">Garantía de 30 días</span>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    </section>
);
