import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { bookingUrl, brand, contact, navigation } from '../lib/siteData';

function MenuIcon() {
  return (
    <span className="flex flex-col gap-1.5" aria-hidden="true">
      <span className="h-px w-5 bg-current" />
      <span className="h-px w-5 bg-current" />
      <span className="h-px w-5 bg-current" />
    </span>
  );
}

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuId = 'site-menu';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-ivory/92 shadow-[0_18px_60px_rgba(45,40,33,0.12)] backdrop-blur-xl'
            : 'bg-gradient-to-b from-graphite/45 to-transparent text-white'
        }`}
      >
        <div className="mx-auto flex w-full max-w-[104rem] items-center justify-between px-5 py-3 sm:px-8 lg:px-14">
          <Link to="/" className="group inline-flex flex-col" aria-label={brand.name}>
            <span className="font-serif text-[1.35rem] leading-none sm:text-[1.65rem]">
              {brand.name}
            </span>
            <span className="mt-1 font-ui text-[0.56rem] uppercase tracking-[0.22em] opacity-70">
              Sandigliano · Biella
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigazione principale">
            {navigation.slice(1, 7).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-ui text-[0.72rem] uppercase tracking-[0.16em] transition-colors ${
                    isActive ? 'text-bronze' : 'hover:text-bronze'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`booking-pulse hidden border px-5 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] transition-colors sm:inline-flex ${
                isScrolled
                  ? 'border-bronze bg-bronze text-white hover:bg-[#8f704c]'
                  : 'border-white/35 bg-white/16 text-white hover:bg-white/24'
              }`}
            >
              Prenota
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s+/g, '')}`}
              className={`hidden border px-4 py-3 font-ui text-xs uppercase tracking-[0.16em] transition-colors xl:inline-flex ${
                isScrolled
                  ? 'border-black/10 hover:border-bronze hover:text-bronze'
                  : 'border-white/25 text-white hover:bg-white/12'
              }`}
            >
              Chiama
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Apri menu"
              aria-expanded={isMenuOpen}
              aria-controls={menuId}
              className={`inline-flex h-11 w-11 items-center justify-center border transition-colors ${
                isScrolled
                  ? 'border-black/10 bg-white/70 hover:bg-white'
                  : 'border-white/25 bg-white/12 text-white hover:bg-white/20'
              }`}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <div
          className="fixed inset-0 z-50 bg-graphite/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        >
          <aside
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Menu principale"
            className="absolute inset-y-0 right-0 flex w-full max-w-xl flex-col overflow-y-auto bg-ivory p-6 text-graphite shadow-[0_24px_90px_rgba(0,0,0,0.24)] sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-serif text-[2rem] leading-none">{brand.name}</p>
                <p className="mt-3 max-w-xs font-ui text-sm leading-6 text-graphite/68">
                  Resort 4 stelle con camere, SPA, ristorante, sport e sale meeting alle porte di Biella.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="border border-graphite bg-graphite px-4 py-2 font-ui text-xs uppercase tracking-[0.16em] text-white transition-colors hover:bg-black"
              >
                Chiudi
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-y border-black/10 py-6">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="booking-pulse border border-bronze bg-bronze px-5 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-white"
              >
                Prenota soggiorno
              </a>
              <Link
                to="/contatti"
                className="border border-black/10 px-5 py-3 font-ui text-xs uppercase tracking-[0.16em] transition-colors hover:border-bronze hover:text-bronze"
              >
                Contattaci
              </Link>
            </div>

            <nav className="mt-7 flex flex-col gap-1" aria-label="Menu">
              {navigation.map((item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `group flex items-center justify-between border-b border-black/10 py-4 font-serif text-[2.1rem] leading-none transition-colors sm:text-[2.7rem] ${
                      isActive ? 'text-bronze' : 'hover:text-bronze'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <span className="font-ui text-xs uppercase tracking-[0.2em] opacity-40">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </NavLink>
              ))}
            </nav>
          </aside>
        </div>
      ) : null}
    </>
  );
}

export default SiteHeader;
