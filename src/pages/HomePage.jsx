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
    'inline-flex justify-center border border-bronze bg-bronze px-6 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#8f704c]';

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

function SecondaryCta({ to, href, children }) {
  const className =
    'inline-flex justify-center border border-white/35 px-6 py-3 font-ui text-xs uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/14';

  if (href) {
    return <a href={href} className={className}>{children}</a>;
  }

  return <Link to={to} className={className}>{children}</Link>;
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
      <div>
        <p className="font-ui text-xs uppercase tracking-[0.24em] text-bronze">{eyebrow}</p>
        <h2 className="mt-4 max-w-3xl font-serif text-[2.6rem] leading-[0.96] text-graphite sm:text-[4rem]">
          {title}
        </h2>
      </div>
      {text ? <p className="max-w-2xl font-ui text-base leading-8 text-graphite/72">{text}</p> : null}
    </div>
  );
}

function HomePage() {
  return (
    <>
      <PageHero
        image={images.hero}
        eyebrow="Sandigliano · Biella"
        title="Relais Santo Stefano"
        subtitle="Un resort 4 stelle dove soggiorno, benessere, cucina, sport e spazi per eventi si incontrano in un grande parco alle porte di Biella."
        priority
        align="center"
        minHeight="min-h-[92svh]"
        actions={
          <>
            <PrimaryCta href={bookingUrl} external>Prenota soggiorno</PrimaryCta>
            <SecondaryCta to="/contatti">Contattaci</SecondaryCta>
          </>
        }
      />

      <section data-reveal className="reveal-scroll -mt-8 grid gap-3 bg-ivory p-3 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {quickFacts.map((fact) => (
          <div key={fact.label} className="border border-black/10 bg-white px-5 py-5">
            <p className="font-serif text-[2.4rem] leading-none text-bronze">{fact.value}</p>
            <p className="mt-2 font-ui text-xs uppercase tracking-[0.16em] text-graphite/62">{fact.label}</p>
          </div>
        ))}
      </section>

      <section data-reveal className="reveal-scroll grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
        <div className="relative min-h-[28rem] overflow-hidden bg-graphite">
          <img src={images.room.src} alt={images.room.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
          <div className="glass-image-overlay absolute inset-0" />
        </div>
        <div>
          <p className="font-ui text-xs uppercase tracking-[0.24em] text-bronze">Il relais</p>
          <h2 className="mt-4 font-serif text-[2.7rem] leading-[0.96] sm:text-[4.2rem]">
            Accoglienza piemontese, ritmo lento e servizi da resort.
          </h2>
          <div className="mt-7 space-y-5 font-ui text-base leading-8 text-graphite/72">
            <p>
              Relais Santo Stefano è una struttura 4 stelle a Sandigliano, immersa nel verde e pensata per chi cerca una pausa completa: camera, SPA, ristorante, piscina, sport e territorio.
            </p>
            <p>
              Le informazioni operative restano semplici: 75 camere, Wi-Fi gratuito, parcheggio esterno, palestra Technogym, piscina estiva e servizi per soggiorni leisure, business ed eventi.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/camere-suite" className="border border-bronze bg-bronze px-6 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Scopri le camere
            </Link>
            <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="border border-black/10 px-6 py-3 font-ui text-xs uppercase tracking-[0.16em] transition-colors hover:border-bronze hover:text-bronze">
              Chiama hotel
            </a>
          </div>
        </div>
      </section>

      <section data-reveal className="reveal-scroll space-y-8">
        <SectionHeading
          eyebrow="Camere & Suite"
          title="Sette modi di abitare il relais."
          text="Dalle singole alle Spa Suite, ogni tipologia racconta una diversa esigenza di soggiorno: business, coppia, famiglia, wellness o viaggio sportivo."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {rooms.slice(0, 6).map((room) => (
            <article key={room.name} className="group border border-black/10 bg-white p-6 shadow-soft transition-transform duration-500 hover:-translate-y-1">
              <h3 className="font-serif text-[2rem] leading-none">{room.name}</h3>
              <p className="mt-4 font-ui text-sm leading-7 text-graphite/72">{room.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {room.details.map((detail) => (
                  <span key={detail} className="border border-black/10 px-3 py-2 font-ui text-[0.68rem] uppercase tracking-[0.12em] text-graphite/62">
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
          title="Un resort, tante ragioni per restare."
          text="Benessere, cucina, sport e lavoro convivono senza sovraccaricare il soggiorno: ogni esperienza ha il suo spazio e il suo ritmo."
        />
        <div className="grid gap-4 lg:grid-cols-4">
          {experiences.map((item) => (
            <Link key={item.title} to={item.path} className="group relative min-h-[31rem] overflow-hidden bg-graphite text-white">
              <img src={item.image.src} alt={item.image.alt} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.035]" loading="lazy" decoding="async" />
              <div className="hero-readable-overlay absolute inset-0" />
              <div className="relative flex h-full min-h-[31rem] flex-col justify-end p-6">
                <h3 className="font-serif text-[2.2rem] leading-none">{item.title}</h3>
                <p className="mt-4 font-ui text-sm leading-7 text-white/78">{item.text}</p>
                <span className="mt-6 inline-flex self-start border border-white/30 px-4 py-2 font-ui text-xs uppercase tracking-[0.14em] transition-colors group-hover:bg-white group-hover:text-graphite">
                  Scopri
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 bg-sage px-6 py-10 text-white sm:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-14">
        <div>
          <p className="font-ui text-xs uppercase tracking-[0.24em] text-white/60">Servizi inclusi e plus</p>
          <h2 className="mt-4 font-serif text-[2.6rem] leading-[0.96] sm:text-[4rem]">
            Tutto quello che serve, senza rumore.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service} className="border border-white/14 bg-white/8 px-4 py-4 font-ui text-sm leading-6 text-white/82">
              {service}
            </div>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll space-y-8">
        <SectionHeading
          eyebrow="Offerte"
          title="Pacchetti per regalarsi tempo."
          text="Le offerte originali restano come struttura commerciale; prezzi e disponibilità vanno sempre verificati con il relais."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {offers.map((offer) => (
            <article key={offer.title} className="border border-black/10 bg-white p-6 shadow-soft">
              <p className="font-ui text-xs uppercase tracking-[0.18em] text-bronze">{offer.price}</p>
              <h3 className="mt-3 font-serif text-[2rem] leading-none">{offer.title}</h3>
              <p className="mt-4 font-ui text-sm leading-7 text-graphite/72">{offer.text}</p>
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
              <p key={place} className="border border-black/10 bg-white px-4 py-4 font-ui text-sm leading-6 text-graphite/72">
                {place}
              </p>
            ))}
          </div>
        </div>
        <div className="relative min-h-[32rem] overflow-hidden bg-graphite">
          <img src={images.territory.src} alt={images.territory.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
          <div className="glass-image-overlay absolute inset-0" />
        </div>
      </section>

      <section data-reveal className="reveal-scroll space-y-8">
        <SectionHeading
          eyebrow="Galleria"
          title="Atmosfere per orientare il nuovo racconto visivo."
          text="Le immagini sono placeholder coerenti per il prototipo locale: andranno sostituite con il set fotografico ufficiale quando disponibile senza blocco 403."
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
