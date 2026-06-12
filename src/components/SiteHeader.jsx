import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import useDialogFocus from '../hooks/useDialogFocus';
import { languageOptions, useI18n } from '../lib/i18n';
import { brand, contact, images, navigation } from '../lib/siteData';

function MenuIcon() {
  return (
    <span className="flex flex-col gap-1.5" aria-hidden="true">
      <span className="h-px w-5 bg-current" />
      <span className="h-px w-5 bg-current" />
      <span className="h-px w-5 bg-current" />
    </span>
  );
}

function BrandIdentity({ inverted = false, compact = false }) {
  return (
    <span className="inline-flex items-center gap-3">
      <img
        src={images.logo.mark.src}
        alt=""
        width={images.logo.mark.width}
        height={images.logo.mark.height}
        aria-hidden="true"
        className={`${compact ? 'h-10' : 'h-12 sm:h-14'} w-auto object-contain`}
      />
      <span className="grid leading-none">
        <span className={`${compact ? 'text-[1.25rem]' : 'text-[1.45rem] sm:text-[1.7rem]'} font-serif font-semibold leading-[0.9] ${inverted ? 'text-white' : 'text-graphite'}`}>
          Relais
        </span>
        <span className={`font-ui text-[0.55rem] font-semibold uppercase tracking-[0.28em] ${inverted ? 'text-white/72' : 'text-body'}`}>
          Santo Stefano
        </span>
      </span>
    </span>
  );
}

function HeaderCta({ href, to, children, isScrolled, primary = false }) {
  const className = `editorial-link inline-flex items-center justify-center px-1 py-3 font-ui text-[0.68rem] font-semibold uppercase tracking-[0.2em] transition-colors ${
    primary
      ? isScrolled
        ? 'text-olive hover:text-graphite'
        : 'text-bronze-light hover:text-white'
      : isScrolled
        ? 'text-graphite hover:text-olive'
        : 'text-white/86 hover:text-white'
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
  const menuPanelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const location = useLocation();
  const menuId = 'site-menu';
  const { content, language, path, switchPath } = useI18n();
  const localizedNavigation = content.navigation || navigation;

  useDialogFocus(isMenuOpen, menuPanelRef, closeButtonRef);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.hash, location.pathname]);

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
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-700 ${
          isScrolled
            ? 'bg-warm-white/92 shadow-[0_18px_60px_rgba(17,20,15,0.10)] backdrop-blur-xl'
            : 'bg-gradient-to-b from-black/42 to-transparent text-white'
        }`}
      >
        <div className="mx-auto grid w-full max-w-[112rem] grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label={content.header.openMenu}
              aria-expanded={isMenuOpen}
              aria-controls={menuId}
              className={`inline-flex h-11 items-center gap-4 transition-colors ${
                isScrolled ? 'text-graphite hover:text-olive' : 'text-white hover:text-bronze-light'
              }`}
            >
              <MenuIcon />
              <span className="hidden font-ui text-xs font-semibold uppercase tracking-[0.22em] sm:inline">
                {content.header.menu}
              </span>
            </button>
            <nav
              aria-label={content.shared.language}
              className={`hidden items-center gap-2 font-ui text-[0.66rem] font-semibold uppercase tracking-[0.14em] md:flex ${isScrolled ? 'text-body' : 'text-white/72'}`}
            >
              {languageOptions.map((option) => (
                <Link
                  key={option.code}
                  to={switchPath(option.code)}
                  aria-current={language === option.code ? 'true' : undefined}
                  className={language === option.code ? 'text-olive' : 'hover:text-bronze-light'}
                >
                  {option.label}
                </Link>
              ))}
            </nav>
          </div>

          <Link to={path('/')} className="justify-self-start md:justify-self-center" aria-label={brand.name}>
            <BrandIdentity inverted={!isScrolled} />
          </Link>

          <div className="flex items-center justify-end gap-2">
            <nav className="hidden items-center gap-5 xl:flex" aria-label={content.shared.mainNavigation}>
              {localizedNavigation.slice(1, 6).map((item) => (
                <NavLink
                  key={item.path}
                  to={path(item.path)}
                  className={({ isActive }) =>
                    `editorial-link font-ui text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
                      isActive
                        ? isScrolled
                          ? 'text-olive'
                          : 'text-white underline decoration-white/70 underline-offset-8'
                        : 'hover:text-olive'
                    }`
                  }
                >
                  {item.shortLabel || item.label}
                </NavLink>
              ))}
            </nav>
            <div className="hidden items-center gap-5 md:flex">
              <HeaderCta href={`tel:${contact.phone.replace(/\s+/g, '')}`} isScrolled={isScrolled}>
                {content.shared.call}
              </HeaderCta>
              <HeaderCta to={path('/offerte')} isScrolled={isScrolled}>
                {content.shared.offers}
              </HeaderCta>
              <HeaderCta to={path('/#booking')} isScrolled={isScrolled} primary>
                {content.shared.book}
              </HeaderCta>
            </div>
            <Link
              to={path('/#booking')}
              className={`inline-flex h-11 items-center justify-center border px-3 font-ui text-[0.62rem] font-semibold uppercase tracking-[0.14em] transition-colors md:hidden ${
                isScrolled
                  ? 'border-olive bg-olive text-white hover:bg-olive-dark'
                  : 'border-white bg-white text-graphite hover:bg-bronze-light'
              }`}
            >
              {content.shared.book}
            </Link>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <div
          className="menu-backdrop-enter fixed inset-0 z-50 bg-espresso/72 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        >
          <aside
            ref={menuPanelRef}
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label={content.header.drawerLabel}
            className="menu-panel-enter absolute inset-y-0 left-0 grid h-[100dvh] w-full overflow-hidden bg-espresso text-ivory shadow-[0_24px_90px_rgba(0,0,0,0.34)] lg:grid-cols-[0.82fr_1.18fr]"
            onClick={(event) => event.stopPropagation()}
            tabIndex={-1}
          >
            <div className="menu-media-enter relative hidden h-[100dvh] min-h-0 overflow-hidden lg:block">
              <img
                src={images.hero.src}
                alt={images.hero.alt}
                width={images.hero.width}
                height={images.hero.height}
                className="h-full w-full object-cover opacity-78"
                style={{ objectPosition: images.hero.objectPosition || 'center center' }}
              />
              <div className="hero-readable-overlay absolute inset-0" />
            </div>

            <div className="menu-content-enter flex h-[100dvh] min-h-0 flex-col overflow-hidden p-6 sm:p-10 lg:p-12">
              <div className="flex items-start justify-between gap-6">
                <Link to={path('/')} aria-label={brand.name}>
                  <BrandIdentity inverted compact />
                </Link>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="border border-white/28 px-4 py-2 font-ui text-xs uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-espresso"
                >
                  {content.header.close}
                </button>
              </div>

              <p className="mt-10 max-w-md font-body text-base leading-8 text-white/76">
                {content.header.drawerText}
              </p>

              <div className="mt-10 flex flex-wrap gap-3 border-y border-white/12 py-6">
                <Link
                  to={path('/#booking')}
                  className="border border-bronze bg-bronze px-5 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-espresso transition-colors hover:bg-bronze-light"
                >
                  {content.shared.bookStay}
                </Link>
                <a
                  href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                  className="border border-white/24 px-5 py-3 font-ui text-xs uppercase tracking-[0.16em] transition-colors hover:bg-white hover:text-espresso"
                >
                  {content.shared.hotelCall}
                </a>
              </div>

              <nav
                aria-label={content.shared.language}
                className="mt-6 flex flex-wrap gap-2 font-ui text-[0.68rem] font-semibold uppercase tracking-[0.16em]"
              >
                {languageOptions.map((option) => (
                  <Link
                    key={option.code}
                    to={switchPath(option.code)}
                    aria-current={language === option.code ? 'true' : undefined}
                    className={`border px-3 py-2 transition-colors ${
                      language === option.code
                        ? 'border-bronze bg-bronze text-espresso'
                        : 'border-white/18 text-white/78 hover:border-bronze hover:text-bronze-light'
                    }`}
                  >
                    {option.label}
                  </Link>
                ))}
              </nav>

              <nav className="menu-scroll-pane mt-8 flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto pr-2" aria-label={content.shared.menuNavigation}>
                {localizedNavigation.map((item, index) => (
                  <NavLink
                    key={item.path}
                    to={path(item.path)}
                    style={{ '--menu-link-delay': `${160 + index * 52}ms` }}
                    className={({ isActive }) =>
                      `menu-link-enter group flex items-center justify-between border-b border-white/10 py-4 font-serif text-[2.8rem] font-medium leading-[0.95] transition-colors sm:text-[4.4rem] ${
                        isActive ? 'text-bronze-light' : 'text-white hover:text-bronze-light'
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    <span className="font-ui text-xs uppercase tracking-[0.2em] text-white/40">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </NavLink>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}

export default SiteHeader;
