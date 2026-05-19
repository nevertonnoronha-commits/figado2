import { useState, useEffect, useRef } from 'react';

const EASING = 'cubic-bezier(0.25, 1, 0.5, 1)';

const hiddenTransform = {
  up:    'translateY(3rem) scale(0.95)',
  left:  'translateX(-3rem)',
  right: 'translateX(3rem)',
};

const buildStyle = (isVisible, direction, delay) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'none' : (hiddenTransform[direction] ?? hiddenTransform.up),
  transition: `opacity 900ms ${EASING}, transform 900ms ${EASING}`,
  transitionDelay: `${delay}ms`,
});

export const ScrollReveal = ({
  children,
  delay = 0,
  threshold = 0.1,
  className = '',
  direction = 'up',
  critical = false,
}) => {
  const [isVisible, setIsVisible] = useState(critical);
  const ref = useRef();

  useEffect(() => {
    if (critical) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, critical]);

  return (
    <div
      ref={critical ? null : ref}
      style={critical ? undefined : buildStyle(isVisible, direction, delay)}
      className={className}
    >
      {children}
    </div>
  );
};
