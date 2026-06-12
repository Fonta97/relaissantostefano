import { Link, NavLink } from 'react-router-dom';

import { useI18n } from '../lib/i18n';
import { brand, contact, images, navigation, socialLinks } from '../lib/siteData';

function FooterBrand() {
  return (
    <span className="inline-flex items-center gap-4">
      <img
        src={images.logo.mark.src}
        alt=""
        width={images.logo.mark.width}
        height={images.logo.mark.height}
        aria-hidden="true"
        className="h-16 w-auto object-contain"
      />
      <span className="grid leading-none">
        <span className="font-serif text-[2rem] font-semibold leading-[0.9] text-white">Relais</span>
        <span className="font-ui text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-white/70">
          Santo Stefano
        </span>
      </span>
    </span>
  );
}

function SiteFooter() {
  const { content, path } = useI18n();
  const localizedNavigation = content.navigation || navigation;

  return (
    <footer className="relative z-10 bg-espresso px-5 py-16 text-ivory sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-[112rem] gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-bronze-light">
            {content.footer.eyebrow}
          </p>
          <Link to={path('/')} className="mt-6 inline-flex" aria-label={brand.name}>
            <FooterBrand />
          </Link>
          <p className="mt-7 max-w-2xl font-body text-base leading-8 text-ivory/78">
            {content.footer.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={path('/#booking')}
              className="border border-bronze bg-bronze px-5 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-espresso transition-colors hover:bg-bronze-light"
            >
              {content.shared.bookStay}
            </Link>
            <Link
              to={path('/contatti')}
              className="border border-white/28 px-5 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-espresso"
            >
              {content.shared.askInfo}
            </Link>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-bronze-light">
              Info
            </p>
            <div className="mt-4 space-y-3 font-body text-sm leading-7 text-ivory/78">
              <p>{contact.address}</p>
              <p>
                Hotel{' '}
                <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="text-white hover:text-bronze-light">
                  {contact.phone}
                </a>
              </p>
              <p>
                SPA{' '}
                <a href={`tel:${contact.spaPhone.replace(/\s+/g, '')}`} className="text-white hover:text-bronze-light">
                  {contact.spaPhone}
                </a>
              </p>
              <p>
                <a href={`mailto:${contact.email}`} className="text-white hover:text-bronze-light">
                  {contact.email}
                </a>
              </p>
              <p>
                <a href={`mailto:${contact.spaEmail}`} className="text-white hover:text-bronze-light">
                  {contact.spaEmail}
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-bronze-light">
              {content.footer.usefulLinks}
            </p>
            <div className="mt-4 grid gap-2">
              {localizedNavigation.slice(1).map((item) => (
                <NavLink
                  key={item.path}
                  to={path(item.path)}
                  className="font-body text-sm text-ivory/86 transition-colors hover:text-white"
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-ivory/86 transition-colors hover:text-white"
              >
                Google Maps
              </a>
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-ivory/86 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-[112rem] flex-col gap-3 border-t border-white/12 pt-5 font-ui text-xs uppercase tracking-[0.16em] text-ivory/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {brand.name}. P. IVA {contact.vat}</p>
        <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          {content.footer.privacy}
        </a>
      </div>
    </footer>
  );
}

export default SiteFooter;
