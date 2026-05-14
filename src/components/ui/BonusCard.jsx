import React, { useState, useEffect, useRef } from 'react';

export const BonusCard = ({ bono, idx }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const delay = idx * 200;
  const overlapStyle = idx > 0 ? { marginTop: '-1rem', position: 'relative', zIndex: idx } : { position: 'relative', zIndex: idx };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, ...overlapStyle }}
      className={`bonus-card-wrapper ${isVisible ? 'bonus-card-visible' : ''}`}
    >
      <div className="bg-[#04100b] border border-[#e2b764]/20 rounded-2xl overflow-hidden flex flex-col sm:flex-row group hover:border-[#e2b764]/80 transition-colors shadow-2xl relative bg-opacity-95 backdrop-blur-md">
        <div className="sm:w-2/5 aspect-square sm:aspect-auto overflow-hidden relative bg-black/50">
          <div className="absolute top-2 left-2 bg-[#ff4747] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-10">Bono Gratis</div>
          <img
            src={bono.img}
            alt={bono.alt}
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
            onError={(e) => { e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' fill='%231a5c36'%3E%3Crect width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='12' fill='%23C5A880'%3EImage%3C/text%3E%3C/svg%3E"; }}
          />
        </div>
        <div className="p-6 sm:w-3/5 flex flex-col justify-center">
          <h3 className="font-editorial text-xl font-bold text-[#e2b764] mb-1">{bono.title}</h3>
          <p className="text-sm italic text-white/80 mb-3">"{bono.subtitle}"</p>
          <p className="text-sm font-light text-white/60 mb-4 leading-relaxed">{bono.desc}</p>
          <p className="mt-auto text-xs font-bold uppercase tracking-wide">
            <span className="line-through text-white/40">Valor real: ${bono.val}</span> <span className="text-[#4CAF50] ml-1">Tuyo gratis</span>
          </p>
        </div>
      </div>
    </div>
  );
};
