import { useEffect } from 'react';

function useScrollReveal(routeKey) {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const elements = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!elements.length) {
      return undefined;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || typeof window.IntersectionObserver === 'undefined') {
      elements.forEach((element) => element.classList.add('reveal-visible'));
      return undefined;
    }

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const observerOptions = isMobile
      ? {
          threshold: 0.01,
          rootMargin: '0px 0px -24% 0px',
        }
      : {
          threshold: 0.01,
          rootMargin: '0px 0px -10% 0px',
        };

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      observerOptions
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [routeKey]);
}

export default useScrollReveal;
