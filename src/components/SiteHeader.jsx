import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { bookingUrl, brand, contact, images, navigation } from '../lib/siteData';

function MenuIcon() {
  return (
    <span className="flex flex-col gap-1.5" aria-hidden="true">
      <span className="h-px w-5 bg-current" />
      <span className="h-px w-5 bg-current" />
      <span className="h-px w-5 bg-current" />
    </span>
  );
}

function HeaderCta({ href, to, children, isScrolled, primary = false }) {
  const className = `inline-flex items-center justify-center border px-4 py-3 font-ui text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
    primary
      ? isScrolled
        ? 'border-bronze bg-bronze text-white hover:bg-sage'
        : 'border-white bg-white text-sage hover:bg-ivory'
      : isScrolled
        ? 'border-black/10 text-graphite hover:border-bronze hover:text-bronze'
        : 'border-white/35 text-white hover:bg-white/12'
  }`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={className}
    >
      {children}
    </a>
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
            ? 'bg-ivory/94 shadow-[0_18px_60px_rgba(76,74,75,0.12)] backdrop-blur-xl'
            : 'bg-gradient-to-b from-black/46 to-transparent text-white'
        }`}
      >
        <div className="mx-auto grid w-full max-w-[104rem] grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-3 sm:px-8 lg:px-14">
          <div className="hidden items-center gap-2 md:flex">
            <HeaderCta href={bookingUrl} isScrolled={isScrolled} primary>
              Prenota
            </HeaderCta>
            <HeaderCta href={`tel:${contact.phone.replace(/\s+/g, '')}`} isScrolled={isScrolled}>
              Chiama
            </HeaderCta>
            <HeaderCta to="/offerte" isScrolled={isScrolled}>
              Offerte
            </HeaderCta>
          </div>

          <Link to="/" className="justify-self-start md:justify-self-center" aria-label={brand.name}>
            <img
              src={isScrolled ? images.logo.dark : images.logo.light}
              alt={brand.name}
              className="h-11 w-auto object-contain transition-opacity sm:h-14"
            />
          </Link>

          <div className="flex items-center justify-end gap-2">
            <nav className="hidden items-center gap-5 xl:flex" aria-label="Navigazione principale">
              {navigation.slice(1, 6).map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `font-ui text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                      isActive ? 'text-bronze' : 'hover:text-bronze'
                    }`
                  }
                >
                  {item.label.replace(' & Suite', '')}
                </NavLink>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Apri menu"
              aria-expanded={isMenuOpen}
              aria-controls={menuId}
              className={`inline-flex h-11 w-11 items-center justify-center border transition-colors ${
                isScrolled
                  ? 'border-black/10 bg-white/70 text-graphite hover:bg-white'
                  : 'border-white/35 bg-white/12 text-white hover:bg-white/20'
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
                <img src={images.logo.dark} alt={brand.name} className="h-16 w-auto" />
                <p className="mt-5 max-w-xs font-body text-sm leading-7 text-body">
                  Accoglienza piemontese, relax e sport in un resort 4 stelle alle porte di Biella.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="border border-sage bg-sage px-4 py-2 font-ui text-xs uppercase tracking-[0.14em] text-white transition-colors hover:bg-bronze"
              >
                Chiudi
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-y border-black/10 py-6">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-bronze bg-bronze px-5 py-3 font-ui text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-sage"
              >
                Prenota soggiorno
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="border border-black/10 px-5 py-3 font-ui text-xs uppercase tracking-[0.14em] transition-colors hover:border-bronze hover:text-bronze"
              >
                Chiama hotel
              </a>
            </div>

            <nav className="mt-7 flex flex-col gap-1" aria-label="Menu">
              {navigation.map((item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `group flex items-center justify-between border-b border-black/10 py-4 font-serif text-[2rem] leading-tight transition-colors sm:text-[2.55rem] ${
                      isActive ? 'text-bronze' : 'hover:text-bronze'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <span className="font-ui text-xs uppercase tracking-[0.18em] opacity-40">
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
