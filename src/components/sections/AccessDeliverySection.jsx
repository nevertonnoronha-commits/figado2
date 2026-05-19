import React from 'react';
import { Smartphone, Zap, Activity } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { scrollToOffer } from '../../utils/smoothScroll';

export const AccessDeliverySection = () => (
  <section className="py-24 bg-[#04100b] text-white border-t border-white/5">
    <div className="container mx-auto px-6 max-w-5xl text-center">
      <ScrollReveal>
        <h2 className="font-editorial text-4xl mb-16 text-[#e2b764]">Acceso inmediato. Desde cualquier dispositivo. Para siempre.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <Smartphone size={32} strokeWidth={1.5} className="text-[#e2b764]" />
            </div>
            <h3 className="font-editorial text-xl mb-2">Multidispositivo</h3>
            <p className="text-white/60 font-light text-sm leading-relaxed">Funciona en celular, tablet y computadora. Lo leés donde estés y lo tenés a mano cuando cocinás.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <Zap size={32} strokeWidth={1.5} className="text-[#e2b764]" />
            </div>
            <h3 className="font-editorial text-xl mb-2">Entrega Inmediata</h3>
            <p className="text-white/60 font-light text-sm leading-relaxed">Te llega el acceso por email en minutos, no en días.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <Activity size={32} strokeWidth={1.5} className="text-[#e2b764]" />
            </div>
            <h3 className="font-editorial text-xl mb-2">Para Siempre</h3>
            <p className="text-white/60 font-light text-sm leading-relaxed">Acceso de por vida + actualizaciones gratis. Comprás una vez y es tuyo.</p>
          </div>
        </div>

        <button onClick={scrollToOffer} className="inline-block border border-[#e2b764] text-[#e2b764] px-10 py-4 font-bold tracking-widest uppercase text-sm hover:bg-[#e2b764] hover:text-[#04100b] transition-colors duration-300 rounded cursor-pointer">
          Acceder Ahora con 85% OFF
        </button>
      </ScrollReveal>
    </div>
  </section>
);
