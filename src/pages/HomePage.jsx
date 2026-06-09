import { Link } from 'react-router-dom';

import MosaicGallery from '../components/MosaicGallery';
import PageHero from '../components/PageHero';
import {
  bookingUrl,
  contact,
  experiences,
  images,
  offers,
  quickFacts,
  rooms,
  services,
  territoryPlaces,
} from '../lib/siteData';

function PrimaryCta({ to, href, children, external = false }) {
  const className =
    'inline-flex justify-center border border-bronze bg-bronze px-6 py-3 font-ui text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-sage';

  if (href) {
    return (
      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

function SecondaryCta({ to, href, children, external = false }) {
  const className =
    'inline-flex justify-center border border-white/45 px-6 py-3 font-ui text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/14';

  if (href) {
    return (
      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={className}>
        {children}
      </a>
    );
  }

  return <Link to={to} className={className}>{children}</Link>;
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
      <div>
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-bronze">{eyebrow}</p>
        <h2 className="mt-4 max-w-3xl font-serif text-[2.45rem] leading-[1.05] text-graphite sm:text-[3.8rem]">
          {title}
        </h2>
      </div>
      {text ? <p className="max-w-2xl font-body text-base leading-8 text-body">{text}</p> : null}
    </div>
  );
}

function HomePage() {
  return (
    <>
      <PageHero
        image={images.hero}
        eyebrow="A place to live"
        title="Relais Santo Stefano"
        subtitle="Accoglienza piemontese, relax e sport in un resort 4 stelle con 75 camere, SPA, ristorante, piscina, padel e sale meeting alle porte di Biella."
        priority
        align="center"
        minHeight="min-h-[92svh]"
        actions={
          <>
            <PrimaryCta href={bookingUrl} external>Prenota</PrimaryCta>
            <SecondaryCta href={`tel:${contact.phone.replace(/\s+/g, '')}`}>Chiama</SecondaryCta>
            <SecondaryCta to="/offerte">Offerte</SecondaryCta>
          </>
        }
      />

      <section data-reveal className="reveal-scroll -mt-8 grid gap-3 bg-ivory p-3 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {quickFacts.map((fact) => (
          <div key={fact.label} className="border border-black/10 bg-white px-5 py-5">
            <p className="font-serif text-[2.2rem] leading-none text-bronze">{fact.value}</p>
            <p className="mt-2 font-ui text-xs font-semibold uppercase tracking-[0.14em] text-body">{fact.label}</p>
          </div>
        ))}
      </section>

      <section data-reveal className="reveal-scroll relative grid gap-10 overflow-hidden lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
        <img
          src={images.logo.mark}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-4 hidden w-56 opacity-[0.06] lg:block"
        />
        <div className="relative min-h-[28rem] overflow-hidden bg-graphite">
          <img src={images.welcome.src} alt={images.welcome.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
          <div className="glass-image-overlay absolute inset-0" />
        </div>
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Un resort, tante esperienze</p>
          <h2 className="mt-4 font-serif text-[2.55rem] leading-[1.05] text-graphite sm:text-[4rem]">
            Il tempo buono di un soggiorno completo.
          </h2>
          <div className="mt-7 space-y-5 font-body text-base leading-8 text-body">
            <p>
              Relais Santo Stefano è una struttura 4 stelle a Sandigliano, immersa nel verde e pensata per chi desidera un luogo da vivere: camera, SPA, ristorante, piscina, sport e territorio.
            </p>
            <p>
              L’esperienza resta concreta: 75 camere, Wi-Fi gratuito, parcheggio esterno, palestra Technogym, piscina estiva e spazi per soggiorni leisure, business ed eventi.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/camere-suite" className="border border-bronze bg-bronze px-6 py-3 font-ui text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-sage">
              Scopri le camere
            </Link>
            <a href={`mailto:${contact.email}`} className="border border-black/10 px-6 py-3 font-ui text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:border-bronze hover:text-bronze">
              Scrivici
            </a>
          </div>
        </div>
      </section>

      <section data-reveal className="reveal-scroll space-y-8">
        <SectionHeading
          eyebrow="Camere & Suite"
          title="Riposo, affacci sul verde e soluzioni per ogni soggiorno."
          text="Dalla singola alle Spa Suite, ogni tipologia risponde a un’esigenza diversa: business, coppia, famiglia, wellness o viaggio sportivo."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {rooms.slice(0, 6).map((room) => (
            <article key={room.name} className="group border border-black/10 bg-white p-6 transition-transform duration-500 hover:-translate-y-1">
              <h3 className="font-serif text-[1.9rem] leading-tight text-graphite">{room.name}</h3>
              <p className="mt-4 font-body text-sm leading-7 text-body">{room.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {room.details.map((detail) => (
                  <span key={detail} className="border border-black/10 px-3 py-2 font-ui text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-body">
                    {detail}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll space-y-8">
        <SectionHeading
          eyebrow="Esperienze"
          title="Benessere, cucina, sport e lavoro nello stesso luogo."
          text="Ogni area ha un’identità chiara: la SPA per ricaricarsi, il ristorante per gustare il territorio, lo sport per muoversi e le sale per incontrarsi."
        />
        <div className="grid gap-4 lg:grid-cols-4">
          {experiences.map((item) => (
            <Link key={item.title} to={item.path} className="group relative min-h-[31rem] overflow-hidden bg-graphite text-white">
              <img
                src={item.image.src}
                alt={item.image.alt}
                style={{ objectPosition: item.image.objectPosition || 'center center' }}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <div className="hero-readable-overlay absolute inset-0" />
              <div className="relative flex h-full min-h-[31rem] flex-col justify-end p-6">
                <h3 className="font-serif text-[2.05rem] leading-tight">{item.title}</h3>
                <p className="mt-4 font-body text-sm leading-7 text-white/82">{item.text}</p>
                <span className="mt-6 inline-flex self-start border border-white/40 px-4 py-2 font-ui text-xs font-semibold uppercase tracking-[0.12em] transition-colors group-hover:bg-white group-hover:text-sage">
                  Scopri
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 bg-sage px-6 py-10 text-white sm:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-14">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-white/64">Servizi inclusi e plus</p>
          <h2 className="mt-4 font-serif text-[2.45rem] leading-[1.05] sm:text-[3.8rem]">
            Tutto quello che serve, con discrezione.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service} className="border border-white/16 bg-white/8 px-4 py-4 font-body text-sm leading-6 text-white/84">
              {service}
            </div>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll space-y-8">
        <SectionHeading
          eyebrow="Offerte"
          title="Pacchetti per regalarsi tempo."
          text="Pacchetti romantici, soggiorni benessere e gift card diventano proposte chiare da verificare sempre con il relais per date, condizioni e disponibilità."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {offers.map((offer) => (
            <article key={offer.title} className="border border-black/10 bg-white p-6">
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-bronze">{offer.price}</p>
              <h3 className="mt-3 font-serif text-[1.9rem] leading-tight text-graphite">{offer.title}</h3>
              <p className="mt-4 font-body text-sm leading-7 text-body">{offer.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Territorio"
            title="Biella, Oropa e le colline intorno."
            text="Dal relais si raggiungono in poco tempo alcuni dei luoghi più riconoscibili del Biellese, tra natura, borghi e patrimoni UNESCO."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {territoryPlaces.map((place) => (
              <p key={place} className="border border-black/10 bg-white px-4 py-4 font-body text-sm leading-6 text-body">
                {place}
              </p>
            ))}
          </div>
        </div>
        <div className="relative min-h-[32rem] overflow-hidden bg-graphite">
          <img src={images.pool.src} alt={images.pool.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
          <div className="glass-image-overlay absolute inset-0" />
        </div>
      </section>

      <section data-reveal className="reveal-scroll space-y-8">
        <SectionHeading
          eyebrow="Galleria"
          title="Il relais, in immagini reali."
          text="Una selezione di fotografie ufficiali racconta struttura, camere, SPA, cucina, sport e spazi per eventi con un taglio più ordinato e contemporaneo."
        />
        <MosaicGallery
          images={images.gallery}
          title="Galleria Relais Santo Stefano"
          openLabel="Apri immagine"
          modalLabels={{ close: 'Chiudi', prev: 'Precedente', next: 'Successiva' }}
        />
      </section>
    </>
  );
}

export default HomePage;
