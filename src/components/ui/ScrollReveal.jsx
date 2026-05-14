import React, { useState, useEffect, useRef } from 'react';

export const ScrollReveal = ({ children, delay = 0, threshold = 0.1, className = "", direction = "up", critical = false }) => {
  const [isVisible, setIsVisible] = useState(critical);
  const ref = useRef();

  useEffect(() => {
    if (critical) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, critical]);

  let baseTransform = "translate-y-16 scale-95";
  if (direction === "left") baseTransform = "-translate-x-16";
  if (direction === "right") baseTransform = "translate-x-16";

  return (
    <div
      ref={critical ? null : ref}
      style={critical ? {} : { transitionDelay: `${delay}ms` }}
      className={critical ? className : `transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        isVisible ? "opacity-100 translate-y-0 translate-x-0 scale-100" : `opacity-0 ${baseTransform}`
      } ${className}`}
    >
      {children}
    </div>
  );
};
