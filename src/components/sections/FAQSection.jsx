import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Accordion } from '../ui/Accordion';
import { ScrollReveal } from '../ui/ScrollReveal';

const faqs = [
  { q: "¿Por cuánto tiempo tengo acceso?", a: "De por vida. Una sola compra, el material es tuyo para siempre — incluyendo todas las actualizaciones sin costo adicional." },
  { q: "¿Cómo recibo el material?", a: "Apenas confirmás la compra, te llega el acceso por email en minutos. Sin instalaciones. Funciona directo desde el navegador." },
  { q: "¿Necesito saber cocinar?", a: "Para nada. Las recetas están explicadas paso a paso, con instrucciones simples y claras. Si podés hervir agua, podés hacer estas recetas." },
  { q: "¿Sirve si también tengo diabetes o colesterol alto?", a: "Sí. La guía fue pensada para personas con hígado graso que en muchos casos también tienen triglicéridos elevados, colesterol o diabetes tipo 2. La alimentación hepática beneficia todas estas condiciones." },
  { q: "¿Puedo acceder desde otro país?", a: "Sí, es 100% digital. Lo accedés desde cualquier país, en cualquier momento, sin restricciones." },
  { q: "¿Y si no me convence?", a: "Tenés 30 días para pedir el reembolso completo. Sin preguntas, sin formularios, sin drama." },
  { q: "¿Hay soporte si necesito ayuda?", a: "Sí. Tenemos soporte disponible para responder tus dudas. No te dejamos solo en el proceso." }
];

export const FAQSection = () => (
  <section className="py-24 md:py-32 bg-white text-[#04100b]">
    <div className="container mx-auto px-6 max-w-3xl">
      <ScrollReveal>
        <div className="text-center mb-16">
          <HelpCircle size={40} className="mx-auto text-[#e2b764] mb-6" strokeWidth={1.5} />
          <h2 className="font-editorial text-4xl md:text-5xl text-[#0a2517]">¿Tenés dudas?</h2>
          <p className="text-[#04100b]/60 mt-4 text-lg">Acá van las respuestas más frecuentes.</p>
        </div>

        <div className="border-t border-[#0a2517]/10">
          {faqs.map((faq, idx) => (
            <Accordion key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);
