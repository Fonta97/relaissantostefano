import { Link } from 'react-router-dom';

import BookingWidget from '../components/BookingWidget';
import PageHero from '../components/PageHero';
import { images, roomAmenities, roomRequestAmenities, rooms, services, spaSuites } from '../lib/siteData';

function RoomsPage() {
  return (
    <>
      <PageHero
        image={images.room}
        eyebrow="Camere & Suite"
        title="La stanza giusta, senza approssimazioni."
        subtitle="Singole, queen, twin, camere con balcone, Deluxe, Junior Suite, Suite Classic, Tower Room e Spa Suite: ogni scelta ha misure, servizi e carattere propri."
        priority
        actions={
          <>
            <a
              href="#booking-rooms"
              className="inline-flex justify-center border border-bronze bg-bronze px-7 py-3.5 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-espresso transition-colors hover:bg-bronze-light"
            >
              Verifica disponibilità
            </a>
            <Link
              to="/contatti"
              className="inline-flex justify-center border border-white/45 px-7 py-3.5 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-white hover:text-espresso"
            >
              Richiedi informazioni
            </Link>
          </>
        }
      />

      <BookingWidget id="booking-rooms" variant="compact" className="-mt-8" />

      <section data-reveal className="reveal-scroll grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-bronze">Soggiornare</p>
          <h2 className="mt-4 font-serif text-[3rem] font-medium leading-[0.94] text-graphite sm:text-[5.1rem]">
            75 camere, tante tipologie per ogni esigenza.
          </h2>
        </div>
        <div className="space-y-5 font-body text-base leading-8 text-body">
          <p>
            Ogni mattina, in qualunque camera alloggerai, ti affaccerai sul verde dei giardini che circondano il Relais Santo Stefano. Un bel modo di iniziare la giornata.
          </p>
          <p>
            Puoi scegliere tra camere essenziali, soluzioni con balcone, suite spaziose e camere della SPA Lodge con zona bagno accessoriata Gessi per un percorso benessere più privato.
          </p>
        </div>
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 bg-mist px-5 py-8 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-10">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-bronze">
            Dotazioni
          </p>
          <h2 className="mt-4 font-serif text-[2.7rem] font-medium leading-[0.95] text-graphite sm:text-[4.2rem]">
            Comfort di base, richieste extra chiare.
          </h2>
          <p className="mt-5 max-w-xl font-body text-sm leading-7 text-body">
            Le dotazioni riprendono il dettaglio del sito originale: servizi presenti in camera e
            alcune attenzioni disponibili su richiesta.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1fr_0.78fr]">
          <div className="grid gap-px bg-espresso/12 p-px sm:grid-cols-2">
            {roomAmenities.map((amenity) => (
              <div key={amenity} className="bg-ivory px-4 py-4 font-ui text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-body">
                {amenity}
              </div>
            ))}
          </div>
          <div className="border border-black/10 bg-ivory p-5">
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-bronze">
              Su richiesta
            </p>
            <ul className="mt-4 space-y-3 font-body text-sm leading-6 text-body">
              {roomRequestAmenities.map((amenity) => (
                <li key={amenity} className="border-b border-black/10 pb-3 last:border-0 last:pb-0">
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section data-reveal className="reveal-scroll space-y-8">
        <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-bronze">
              Tipologie camere
            </p>
            <h2 className="mt-4 font-serif text-[3rem] font-medium leading-[0.95] text-graphite sm:text-[5rem]">
              Dal riposo essenziale alla Tower Room.
            </h2>
          </div>
          <p className="max-w-3xl font-body text-base leading-8 text-body lg:justify-self-end">
            Ogni card mantiene descrizione, metratura e dotazioni distintive, così l'ospite capisce
            subito quale camera è più adatta a viaggio di lavoro, coppia, famiglia o soggiorno speciale.
          </p>
        </div>

        <div className="grid gap-px bg-espresso/12 p-px md:grid-cols-2 xl:grid-cols-3">
        {rooms.map((room, index) => (
          <article
            key={room.name}
            className="group flex min-h-full flex-col overflow-hidden bg-mist transition-transform duration-700 hover:-translate-y-1"
            style={{ '--reveal-delay': `${index * 70}ms` }}
          >
            <img
              src={room.image.src}
              alt={room.image.alt}
              width={room.image.width}
              height={room.image.height}
              className="image-breathe aspect-[4/3] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="flex flex-1 flex-col p-6">
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-bronze">
                {String(index + 1).padStart(2, '0')} / {room.eyebrow}
              </p>
              <h3 className="mt-3 font-serif text-[2.3rem] font-medium leading-tight text-graphite">{room.name}</h3>
              <p className="mt-4 font-body text-sm leading-7 text-body">{room.summary}</p>
              <div className="mt-5 grid gap-px bg-espresso/10 p-px">
                {room.details.map((detail) => (
                  <span key={detail} className="bg-ivory px-3 py-2 font-ui text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-body">
                    {detail}
                  </span>
                ))}
              </div>
              <a
                href="#booking-rooms"
                className="mt-auto inline-flex w-fit border border-bronze bg-bronze px-4 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-espresso transition-colors hover:bg-bronze-light"
              >
                Prenota ora
              </a>
            </div>
          </article>
        ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 bg-espresso px-6 py-12 text-white shadow-editorial sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-14">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-white/82">Spa Suite</p>
          <h2 className="mt-4 font-serif text-[3rem] font-medium leading-[0.95] sm:text-[5rem]">
            SPA Lodge: tre livelli di benessere in camera.
          </h2>
          <p className="mt-5 max-w-2xl font-body text-sm leading-7 text-white/82">
            Le Spa Suite sono adiacenti alla SPA e aggiungono docce Gessi, vasche scenografiche o
            una vera mini SPA privata, senza fingere disponibilità o tariffe nel sito.
          </p>
          <img
            src={images.roomSpaSuite.src}
            alt={images.roomSpaSuite.alt}
            width={images.roomSpaSuite.width}
            height={images.roomSpaSuite.height}
            className="mt-8 aspect-[4/3] w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="grid gap-4">
          {spaSuites.map((suite) => (
            <article key={suite.name} className="border border-white/16 bg-white/8 p-5">
              <h3 className="font-serif text-[1.8rem] leading-tight">{suite.name}</h3>
              <p className="mt-4 font-body text-sm leading-7 text-white/88">{suite.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {suite.details.map((detail) => (
                  <span key={detail} className="border border-white/18 px-3 py-2 font-ui text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-white/82">
                    {detail}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll space-y-8">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Servizi camera e resort</p>
          <h2 className="mt-4 font-serif text-[3rem] font-medium leading-[0.95] text-graphite sm:text-[5rem]">
            Comfort essenziale, plus concreti.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service} className="border border-black/10 bg-mist px-4 py-4 font-body text-sm leading-6 text-body">
              {service}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default RoomsPage;
