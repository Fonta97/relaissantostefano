import { Link } from 'react-router-dom';

import PageHero from '../components/PageHero';
import { bookingUrl, images, rooms, services } from '../lib/siteData';

function RoomsPage() {
  return (
    <>
      <PageHero
        image={images.room}
        eyebrow="Camere & Suite"
        title="75 camere, più modi di vivere il soggiorno."
        subtitle="Soluzioni per chi arriva da solo, in coppia, in famiglia, per lavoro o per un'esperienza wellness più privata."
        priority
        actions={
          <>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center border border-bronze bg-bronze px-6 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-white"
            >
              Verifica disponibilità
            </a>
            <Link
              to="/contatti"
              className="inline-flex justify-center border border-white/35 px-6 py-3 font-ui text-xs uppercase tracking-[0.16em] text-white hover:bg-white/14"
            >
              Richiedi informazioni
            </Link>
          </>
        }
      />

      <section data-reveal className="reveal-scroll grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="font-ui text-xs uppercase tracking-[0.24em] text-bronze">Soggiornare</p>
          <h2 className="mt-4 font-serif text-[2.8rem] leading-[0.96] sm:text-[4.3rem]">
            Camere luminose, servizi chiari, accesso al resort.
          </h2>
        </div>
        <div className="space-y-5 font-ui text-base leading-8 text-graphite/72">
          <p>
            Le camere del Relais Santo Stefano includono Wi-Fi gratuito, aria condizionata, vista sui giardini secondo disponibilità e accesso ai servizi principali del resort.
          </p>
          <p>
            Per gli ospiti sono previsti parcheggio esterno gratuito, piscina estiva, palestra Technogym, deposito bagagli e sconto del 10% sui trattamenti SPA.
          </p>
        </div>
      </section>

      <section data-reveal className="reveal-scroll grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {rooms.map((room, index) => (
          <article
            key={room.name}
            className="group border border-black/10 bg-white p-6 shadow-soft transition-transform duration-500 hover:-translate-y-1"
            style={{ '--reveal-delay': `${index * 70}ms` }}
          >
            <p className="font-ui text-xs uppercase tracking-[0.18em] text-bronze">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mt-3 font-serif text-[2.2rem] leading-none">{room.name}</h3>
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
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 bg-graphite px-6 py-10 text-white sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-14">
        <div>
          <p className="font-ui text-xs uppercase tracking-[0.24em] text-white/55">Spa Suite</p>
          <h2 className="mt-4 font-serif text-[2.7rem] leading-[0.96] sm:text-[4rem]">
            Mini SPA privata per soggiorni più intimi.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Junior Suite Superior New', '35 m2, ideale per un soggiorno wellness compatto.'],
            ['Suite Superior Gessi New', '60 m2, fino a 4 persone, con esperienza bagno più scenografica.'],
            ['Suite Deluxe New', '70 m2 con vasca idromassaggio due posti, sauna, bagno turco e cromoterapia.'],
          ].map(([title, text]) => (
            <article key={title} className="border border-white/12 bg-white/8 p-5">
              <h3 className="font-serif text-[1.7rem] leading-none">{title}</h3>
              <p className="mt-4 font-ui text-sm leading-7 text-white/74">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll space-y-8">
        <div>
          <p className="font-ui text-xs uppercase tracking-[0.24em] text-bronze">Servizi camera e resort</p>
          <h2 className="mt-4 font-serif text-[2.7rem] leading-[0.96] sm:text-[4rem]">
            Comfort essenziale, plus concreti.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service} className="border border-black/10 bg-white px-4 py-4 font-ui text-sm leading-6 text-graphite/72">
              {service}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default RoomsPage;
