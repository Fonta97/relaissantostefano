import { Link, NavLink } from 'react-router-dom';

import { brand, contact, images, navigation, socialLinks } from '../lib/siteData';

function SiteFooter() {
  return (
    <footer className="relative z-10 bg-sage px-5 py-14 text-ivory sm:px-8 lg:px-14">
      <div className="mx-auto grid w-full max-w-[104rem] gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-ivory/82">
            Soggiorni, benessere, cucina e territorio
          </p>
          <Link to="/" className="mt-6 inline-flex" aria-label={brand.name}>
            <img
              src={images.logo.light.src}
              alt={brand.name}
              width={images.logo.light.width}
              height={images.logo.light.height}
              className="h-20 w-auto object-contain sm:h-24"
            />
          </Link>
          <p className="mt-7 max-w-2xl font-body text-base leading-8 text-ivory/86">
            Relais Santo Stefano è in Via Garibaldi 5, a Sandigliano, alle porte di Biella:
            un resort 4 stelle con camere, SPA, ristorante, sport e sale meeting.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/#booking"
              className="border border-white bg-white px-5 py-3 font-ui text-xs font-semibold uppercase tracking-[0.14em] text-sage transition-colors hover:bg-ivory"
            >
              Prenota soggiorno
            </Link>
            <Link
              to="/contatti"
              className="border border-white/30 px-5 py-3 font-ui text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10"
            >
              Chiedi informazioni
            </Link>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-ivory/82">
              Info
            </p>
            <div className="mt-4 space-y-3 font-body text-sm leading-7 text-ivory/86">
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
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-ivory/82">
              Link utili
            </p>
            <div className="mt-4 grid gap-2">
              {navigation.slice(1).map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
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

      <div className="mx-auto mt-12 flex w-full max-w-[104rem] flex-col gap-3 border-t border-white/12 pt-5 font-ui text-xs uppercase tracking-[0.12em] text-ivory/82 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {brand.name}. P. IVA {contact.vat}</p>
        <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          Privacy e cookie
        </a>
      </div>
    </footer>
  );
}

export default SiteFooter;
