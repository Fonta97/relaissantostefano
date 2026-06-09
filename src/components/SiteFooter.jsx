import { Link, NavLink } from 'react-router-dom';

import { bookingUrl, brand, contact, navigation, socialLinks } from '../lib/siteData';

function SiteFooter() {
  return (
    <footer className="relative z-10 bg-graphite px-5 py-14 text-ivory sm:px-8 lg:px-14">
      <div className="mx-auto grid w-full max-w-[104rem] gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-ui text-xs uppercase tracking-[0.22em] text-ivory/55">
            Soggiorni, benessere, cucina e territorio
          </p>
          <Link
            to="/"
            className="mt-5 block max-w-4xl font-serif text-[3.2rem] leading-[0.96] sm:text-[5rem] lg:text-[6rem]"
          >
            {brand.name}
          </Link>
          <div className="mt-8 flex flex-wrap gap-3">
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
              className="border border-white/14 px-5 py-3 font-ui text-xs uppercase tracking-[0.16em] text-white transition-colors hover:border-bronze hover:text-bronze-light"
            >
              Richiedi informazioni
            </Link>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-ui text-xs uppercase tracking-[0.2em] text-ivory/50">Contatti</p>
            <div className="mt-4 space-y-3 font-ui text-sm leading-7 text-ivory/74">
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
            <p className="font-ui text-xs uppercase tracking-[0.2em] text-ivory/50">Naviga</p>
            <div className="mt-4 grid gap-2">
              {navigation.slice(1).map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="font-ui text-sm text-ivory/74 transition-colors hover:text-white"
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-ui text-sm text-ivory/74 transition-colors hover:text-white"
              >
                Google Maps
              </a>
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ui text-sm text-ivory/74 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-[104rem] flex-col gap-3 border-t border-white/10 pt-5 font-ui text-xs uppercase tracking-[0.14em] text-ivory/42 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {brand.name}. P. IVA {contact.vat}</p>
        <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          Privacy e cookie
        </a>
      </div>
    </footer>
  );
}

export default SiteFooter;
