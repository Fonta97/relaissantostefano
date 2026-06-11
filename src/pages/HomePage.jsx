import { Link } from 'react-router-dom';

import BookingWidget from '../components/BookingWidget';
import MosaicGallery from '../components/MosaicGallery';
import PageHero from '../components/PageHero';
import {
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
    'inline-flex justify-center border border-bronze bg-bronze px-7 py-3.5 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-espresso transition-colors hover:bg-bronze-light';

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
    'inline-flex justify-center border border-white/42 px-7 py-3.5 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-espresso';

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
    <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
      <div>
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-bronze">{eyebrow}</p>
        <h2 className="mt-4 max-w-4xl font-serif text-[3rem] font-medium leading-[0.92] text-graphite sm:text-[5.2rem]">
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
        eyebrow="Accoglienza piemontese, relax e sport"
        title="A place to live"
        subtitle="Un resort 4 stelle ai piedi delle Alpi Biellesi, circondato da ampi spazi verdi, con piscina, campi da padel, SPA, cucina ricercata e vini del territorio."
        priority
        align="center"
        minHeight="min-h-[92svh]"
        actions={
          <>
            <PrimaryCta to="/#booking">Prenota</PrimaryCta>
            <SecondaryCta href={`tel:${contact.phone.replace(/\s+/g, '')}`}>Chiama</SecondaryCta>
            <SecondaryCta to="/offerte">Offerte</SecondaryCta>
          </>
        }
      />

      <BookingWidget className="-mt-24 sm:-mt-28" />

      <section data-reveal className="reveal-scroll editorial-rule grid gap-px bg-espresso/10 p-px sm:grid-cols-2 lg:grid-cols-4">
        {quickFacts.map((fact) => (
          <div key={fact.label} className="bg-mist px-5 py-6 sm:px-7">
            <p className="font-serif text-[3rem] font-medium leading-none text-bronze">{fact.value}</p>
            <p className="mt-3 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-body">{fact.label}</p>
          </div>
        ))}
      </section>

      <section data-reveal className="reveal-scroll relative grid gap-10 overflow-hidden lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <img
          src={images.logo.mark.src}
          alt=""
          width={images.logo.mark.width}
          height={images.logo.mark.height}
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-4 hidden w-56 opacity-[0.06] lg:block"
        />
        <div className="group relative min-h-[34rem] overflow-hidden bg-graphite shadow-editorial">
          <img
            src={images.welcome.src}
            alt={images.welcome.alt}
            width={images.welcome.width}
            height={images.welcome.height}
            className="image-breathe h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="glass-image-overlay absolute inset-0" />
        </div>
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-bronze">Un resort, tante esperienze</p>
          <h2 className="mt-4 font-serif text-[3.1rem] font-medium leading-[0.94] text-graphite sm:text-[5.4rem]">
            Benvenuto al tempo buono.
          </h2>
          <div className="mt-7 space-y-5 font-body text-base leading-8 text-body">
            <p>
              Un posto da vivere con tutto quello di cui hai bisogno: camere affacciate sul verde, una SPA curata, una cucina ricercata, piscina, padel e spazi per incontrarsi.
            </p>
            <p>
              La location resta concreta e riservata: alle porte di Biella, ai piedi delle Alpi Biellesi, con servizi per soggiorni leisure, business, sport ed eventi.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/camere-suite" className="border border-bronze bg-bronze px-6 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-espresso transition-colors hover:bg-bronze-light">
              Scopri le camere
            </Link>
            <a href={`mailto:${contact.email}`} className="border border-black/14 px-6 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:border-bronze hover:text-bronze">
              Scrivici
            </a>
          </div>
        </div>
      </section>

      <section data-reveal className="reveal-scroll space-y-8">
        <SectionHeading
          eyebrow="Camere & Suite"
          title="Un dolce riposo, sempre affacciato sul verde."
          text="Con 75 camere di diverse tipologie, ogni soggiorno trova la sua misura: business, coppia, famiglia, wellness o viaggio sportivo. Wi-Fi gratuito e comfort essenziali accompagnano ogni scelta."
        />
        <div className="grid gap-px bg-espresso/12 p-px md:grid-cols-2 xl:grid-cols-3">
          {rooms.slice(0, 6).map((room) => (
            <article key={room.name} className="group overflow-hidden bg-mist transition-transform duration-700 hover:-translate-y-1">
              <img
                src={room.image.src}
                alt={room.image.alt}
                width={room.image.width}
                height={room.image.height}
                className="image-breathe aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6 sm:p-7">
                <h3 className="font-serif text-[2.25rem] font-medium leading-tight text-graphite">{room.name}</h3>
                <p className="mt-4 font-body text-sm leading-7 text-body">{room.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {room.details.map((detail) => (
                    <span key={detail} className="border border-black/10 px-3 py-2 font-ui text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-body">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll space-y-8">
        <SectionHeading
          eyebrow="Esperienze"
          title="SPA, cucina, sport e lavoro: un solo indirizzo."
          text="Ogni area ha un'identita chiara: ricaricarsi, gustare il territorio, muoversi e incontrarsi senza uscire dal ritmo del relais."
        />
        <div className="grid gap-4 lg:grid-cols-4">
          {experiences.map((item) => (
            <Link key={item.title} to={item.path} className="group relative min-h-[31rem] overflow-hidden bg-graphite text-white">
              <img
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
                style={{ objectPosition: item.image.objectPosition || 'center center' }}
                className="image-breathe absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="hero-readable-overlay absolute inset-0" />
              <div className="relative flex h-full min-h-[31rem] flex-col justify-end p-6">
                <h3 className="font-serif text-[2.45rem] font-medium leading-tight">{item.title}</h3>
                <p className="mt-4 font-body text-sm leading-7 text-white/88">{item.text}</p>
                <span className="mt-6 inline-flex self-start border border-white/45 px-4 py-2 font-ui text-xs font-semibold uppercase tracking-[0.16em] transition-colors group-hover:bg-white group-hover:text-espresso">
                  Scopri
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 bg-espresso px-6 py-12 text-white shadow-editorial sm:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-14">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-white/82">Servizi inclusi e plus</p>
          <h2 className="mt-4 font-serif text-[3rem] font-medium leading-[0.95] sm:text-[5rem]">
            Tutto quello che serve, con discrezione.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service} className="border border-white/14 bg-white/6 px-4 py-4 font-body text-sm leading-6 text-white/86">
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
            <article key={offer.title} className="border border-black/10 bg-mist p-6 transition-colors hover:border-bronze/60">
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-bronze">{offer.price}</p>
              <h3 className="mt-3 font-serif text-[2.2rem] font-medium leading-tight text-graphite">{offer.title}</h3>
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
              <p key={place} className="border border-black/10 bg-mist px-4 py-4 font-body text-sm leading-6 text-body">
                {place}
              </p>
            ))}
          </div>
        </div>
        <div className="group relative min-h-[32rem] overflow-hidden bg-graphite shadow-editorial">
          <img
            src={images.pool.src}
            alt={images.pool.alt}
            width={images.pool.width}
            height={images.pool.height}
            className="image-breathe h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="glass-image-overlay absolute inset-0" />
        </div>
      </section>

      <section data-reveal className="reveal-scroll space-y-8">
        <SectionHeading
          eyebrow="Galleria"
          title="Il relais, in immagini reali."
          text="Una selezione di fotografie ufficiali racconta struttura, camere, SPA, cucina, sport e spazi per eventi con un taglio ordinato e contemporaneo."
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
