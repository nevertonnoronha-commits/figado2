import React from 'react';
import { Leaf } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-[#020805] text-white/40 py-16 text-center text-sm font-light border-t border-white/5 relative z-20">
    <div className="container mx-auto px-6">
      <Leaf size={32} className="mx-auto text-white/20 mb-6" />
      <p className="mb-6 font-editorial text-2xl text-white/50">Naturale</p>
      <p className="mb-4">© 2026 Naturale — Todos los derechos reservados.</p>
      <p className="max-w-2xl mx-auto mb-8 text-xs leading-relaxed opacity-60">
        El contenido de esta página es informativo y educativo. No reemplaza el consejo médico profesional. Consultá con tu médico antes de realizar cambios en tu alimentación.
      </p>
      <div className="flex justify-center gap-6 text-xs uppercase tracking-widest">
        <a href="#" className="hover:text-[#e2b764] transition-colors">Términos</a>
        <a href="#" className="hover:text-[#e2b764] transition-colors">Privacidad</a>
        <a href="#" className="hover:text-[#e2b764] transition-colors">Contacto</a>
      </div>
    </div>
  </footer>
);
