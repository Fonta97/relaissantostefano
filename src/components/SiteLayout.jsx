import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import ConsentNotice from './ConsentNotice';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import useScrollReveal from '../hooks/useScrollReveal';
import { cookieCopy } from '../lib/siteData';

function SiteLayout() {
  const location = useLocation();
  useScrollReveal(location.pathname);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#fbf8f1] text-graphite">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[300] -translate-y-24 bg-graphite px-4 py-3 font-ui text-xs uppercase tracking-[0.16em] text-white transition-transform focus:translate-y-0"
      >
        Salta al contenuto
      </a>

      <SiteHeader />

      <main
        id="main-content"
        className="relative z-10 mx-auto flex w-full max-w-[104rem] flex-col gap-20 px-5 pb-20 pt-24 sm:gap-24 sm:px-8 sm:pt-28 lg:gap-28 lg:px-14 lg:pt-32"
      >
        <Outlet />
      </main>

      <SiteFooter />
      <ConsentNotice copy={cookieCopy} />
    </div>
  );
}

export default SiteLayout;
