import { useState, useEffect, useCallback } from 'react';
import { ShieldCheck, Lock, ArrowRight, CheckCircle2, X } from 'lucide-react';

const HOTMART_URL = 'https://pay.hotmart.com/W105836452N?src=RodYaOoMDvTso6sTyZfNSf4gyR7let1Fd1YZ';

const SECURITY_POINTS = [
  'Plataforma Hotmart — certificada y regulada',
  'Cifrado SSL de 256 bits en toda transacción',
  'Garantía incondicional de 30 días o te devolvemos el dinero',
  'Acceso inmediato tras confirmar tu pago',
];

export const CheckoutModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener('naturale:checkout', open);
    return () => window.removeEventListener('naturale:checkout', open);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const handleCheckout = useCallback(() => {
    window.open(HOTMART_URL, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/75"
      style={{ backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false); }}
    >
      <div className="modal-card bg-[#04100b] border border-[#e2b764]/25 rounded-2xl w-full max-w-md shadow-2xl relative overflow-hidden">

        {/* Top gold accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#e2b764] to-transparent" />

        <div className="p-6 sm:p-8">
          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="btn-press absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-white/40 hover:text-white hover:bg-white/10"
            aria-label="Cerrar"
          >
            <X size={16} />
          </button>

          {/* Shield icon */}
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 rounded-full bg-[#4CAF50]/10 border-2 border-[#4CAF50]/30 flex items-center justify-center">
              <ShieldCheck size={32} className="text-[#4CAF50]" strokeWidth={1.5} />
            </div>
          </div>

          {/* Title */}
          <h3 className="font-editorial text-2xl sm:text-3xl text-white text-center mb-1">
            Compra 100% Segura
          </h3>
          <p className="text-white/50 text-sm text-center mb-6 leading-relaxed">
            Estás a punto de ir al pago seguro de Hotmart,<br className="hidden sm:block" /> la plataforma más confiable de América Latina.
          </p>

          {/* Security points */}
          <ul className="space-y-2.5 mb-6">
            {SECURITY_POINTS.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/75">
                <CheckCircle2 size={15} className="text-[#4CAF50] shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          {/* Price box */}
          <div className="bg-[#e2b764]/8 border border-[#e2b764]/20 rounded-xl p-4 text-center mb-5">
            <p className="text-white/40 text-[11px] uppercase tracking-widest mb-0.5">Pagas solamente</p>
            <p className="font-editorial text-4xl text-[#e2b764] font-bold leading-none">$17.99</p>
            <p className="text-[#4CAF50] text-xs font-bold mt-1.5">85% de descuento — oferta por tiempo limitado</p>
          </div>

          {/* CTA */}
          <button
            onClick={handleCheckout}
            className="btn-press btn-shine w-full bg-[#e2b764] text-[#04100b] py-3 sm:py-4 rounded-xl font-extrabold text-base sm:text-lg flex items-center justify-center gap-2.5 hover:bg-[#f3c97b] shadow-[0_0_30px_rgba(226,183,100,0.3)]"
          >
            <Lock size={17} strokeWidth={2.5} />
            Ir al Pago Seguro
            <ArrowRight size={17} strokeWidth={2.5} />
          </button>

          <p className="text-center text-white/25 text-[11px] mt-4 tracking-wide">
            Procesado con seguridad por Hotmart · SSL 256-bit
          </p>
        </div>
      </div>
    </div>
  );
};
