import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import ConsentNotice from './ConsentNotice';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import useScrollReveal from '../hooks/useScrollReveal';
import { cookieCopy } from '../lib/siteData';

function SiteLayout() {
  const location = useLocation();
  const mainRef = useRef(null);
  useScrollReveal(location.pathname);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const behavior = reduceMotion ? 'auto' : 'smooth';

    let retryTimeout;
    let animationFrame;

    const focusTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior });
      mainRef.current?.focus({ preventScroll: true });
    };

    const focusHashTarget = () => {
      if (location.hash) {
        const target = document.getElementById(location.hash.slice(1));
        if (target) {
          target.scrollIntoView({ behavior, block: 'start' });
          target.focus?.({ preventScroll: true });
          return true;
        }
      }

      return false;
    };

    if (location.hash) {
      let attempts = 0;
      const retryHashTarget = () => {
        if (focusHashTarget()) {
          return;
        }

        attempts += 1;
        if (attempts < 10) {
          retryTimeout = window.setTimeout(retryHashTarget, 80);
          return;
        }

        focusTop();
      };

      animationFrame = window.requestAnimationFrame(retryHashTarget);
    } else {
      animationFrame = window.requestAnimationFrame(focusTop);
    }

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(retryTimeout);
    };
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen overflow-hidden bg-ivory text-graphite">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[300] -translate-y-24 bg-graphite px-4 py-3 font-ui text-xs uppercase tracking-[0.16em] text-white transition-transform focus:translate-y-0"
      >
        Salta al contenuto
      </a>

      <SiteHeader />

      <main
        ref={mainRef}
        id="main-content"
        tabIndex={-1}
        className="relative z-10 mx-auto flex w-full max-w-[112rem] flex-col gap-24 px-5 pb-24 pt-24 sm:gap-28 sm:px-8 sm:pt-28 lg:gap-32 lg:px-12 lg:pt-32"
      >
        <Outlet />
      </main>

      <SiteFooter />
      <ConsentNotice copy={cookieCopy} />
    </div>
  );
}

export default SiteLayout;
