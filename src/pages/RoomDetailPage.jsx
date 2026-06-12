import { Link, useParams } from 'react-router-dom';

import BookingWidget from '../components/BookingWidget';
import { useI18n } from '../lib/i18n';
import { getPremiumRooms, getRoomBySlug } from '../lib/roomData';
import { images } from '../lib/siteData';
import NotFoundPage from './NotFoundPage';

const copy = {
  it: {
    location: 'Relais Santo Stefano, Sandigliano',
    book: 'Prenota camera',
    details: 'Nei dettagli',
    amenities: 'Dotazioni',
    gallery: 'Gallery',
    related: 'Altre camere',
    back: 'Tutte le camere',
    detailText:
      'Ogni tipologia mantiene il carattere del relais: affaccio sul verde, comfort essenziali, servizi hotel e accesso alle esperienze della struttura.',
  },
  en: {
    location: 'Relais Santo Stefano, Sandigliano',
    book: 'Book room',
    details: 'In the details',
    amenities: 'Amenities',
    gallery: 'Gallery',
    related: 'Other rooms',
    back: 'All rooms',
    detailText:
      'Each room type keeps the character of the relais: garden outlook, essential comfort, hotel services and access to the property experiences.',
  },
  de: {
    location: 'Relais Santo Stefano, Sandigliano',
    book: 'Zimmer buchen',
    details: 'Im Detail',
    amenities: 'Ausstattung',
    gallery: 'Gallery',
    related: 'Weitere Zimmer',
    back: 'Alle Zimmer',
    detailText:
      'Jede Kategorie bewahrt den Charakter des Relais: Blick ins Gruene, wesentlicher Komfort, Hotelservices und Zugang zu den Erlebnissen der Struktur.',
  },
  fr: {
    location: 'Relais Santo Stefano, Sandigliano',
    book: 'Reserver chambre',
    details: 'Dans les details',
    amenities: 'Equipements',
    gallery: 'Gallery',
    related: 'Autres chambres',
    back: 'Toutes les chambres',
    detailText:
      'Chaque typologie garde le caractere du relais : vue sur le vert, confort essentiel, services hotel et acces aux experiences de la structure.',
  },
};

function getCopy(language) {
  return copy[language] || copy.it;
}

function RoomDetailPage() {
  const { roomSlug } = useParams();
  const { content, language, path } = useI18n();
  const room = getRoomBySlug(content, roomSlug);
  const rooms = getPremiumRooms(content);
  const labels = getCopy(language);

  if (!room) {
    return <NotFoundPage />;
  }

  const gallery = [
    room.image,
    images.roomBalcony,
    room.index < 3 ? images.spa : images.welcome,
    room.index < 3 ? images.pool : images.breakfast,
  ];
  const related = rooms.filter((item) => item.slug !== room.slug).slice(0, 3);

  return (
    <>
      <section className="relative left-1/2 -mt-24 w-screen -translate-x-1/2 bg-espresso text-white sm:-mt-28 lg:-mt-32">
        <div className="grid min-h-[96svh] lg:grid-cols-[0.58fr_0.42fr]">
          <div className="relative min-h-[50svh] overflow-hidden bg-graphite lg:min-h-[96svh]">
            <img
              src={room.image.src}
              alt={room.image.alt}
              width={room.image.width}
              height={room.image.height}
              className="hero-media-enter h-full w-full object-cover"
              style={{ objectPosition: room.image.objectPosition || 'center center' }}
              loading="eager"
              decoding="async"
            />
            <div className="hero-readable-overlay absolute inset-0" />
          </div>
          <div className="flex min-h-[46svh] flex-col justify-end px-5 pb-14 pt-32 sm:px-8 lg:min-h-[96svh] lg:px-12 lg:pb-20">
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-bronze-light">
              # {room.name}
            </p>
            <p className="mt-5 font-ui text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/55">
              {labels.location}
            </p>
            <h1 className="mt-6 font-serif text-[4rem] font-medium leading-[0.84] sm:text-[6.8rem] lg:text-[7.8rem]">
              {room.name}
            </h1>
            <p className="mt-7 max-w-2xl font-body text-base leading-8 text-white/82">{room.summary}</p>
            <dl className="mt-8 grid gap-px bg-white/14 p-px sm:grid-cols-3">
              {[room.size, room.bed, room.feature].filter(Boolean).map((item) => (
                <div key={item} className="bg-white/[0.06] px-4 py-4">
                  <dt className="sr-only">{item}</dt>
                  <dd className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-white/82">{item}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#room-booking" className="bg-bronze px-6 py-3 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-espresso">
                {labels.book}
              </a>
              <Link to={path('/camere-suite')} className="border border-white/30 px-6 py-3 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-white">
                {labels.back}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-olive">{labels.amenities}</p>
          <h2 className="mt-4 font-serif text-[3.2rem] font-medium leading-[0.9] text-graphite sm:text-[5.4rem]">
            {labels.details}
          </h2>
        </div>
        <div>
          <p className="max-w-3xl font-body text-base leading-8 text-body">{labels.detailText}</p>
          <div className="mt-8 grid gap-px bg-black/10 p-px sm:grid-cols-2 lg:grid-cols-3">
            {[...room.details, ...content.roomAmenities.slice(0, 6)].map((item, index) => (
              <div key={`${item}-${index}`} className="bg-warm-white px-4 py-4 font-ui text-xs font-semibold uppercase tracking-[0.14em] text-body">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="reveal-scroll">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-olive">{labels.gallery}</p>
        <div className="mt-6 grid gap-px bg-black/10 p-px lg:grid-cols-4">
          {gallery.map((image) => (
            <img
              key={`${room.slug}-${image.src}`}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="aspect-[4/5] w-full object-cover"
              style={{ objectPosition: image.objectPosition || 'center center' }}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </section>

      <BookingWidget id="room-booking" variant="compact" />

      <section data-reveal className="reveal-scroll">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-olive">{labels.related}</p>
        <div className="mt-6 border-y border-black/12">
          {related.map((item) => (
            <Link
              key={item.slug}
              to={path(`/camere-suite/${item.slug}`)}
              className="group grid items-center gap-5 border-b border-black/12 py-5 last:border-b-0 lg:grid-cols-[0.12fr_1fr_0.25fr_0.18fr]"
            >
              <span className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-olive">{item.number}</span>
              <span className="font-serif text-[3rem] font-medium leading-[0.9] text-graphite group-hover:text-olive sm:text-[5rem]">
                {item.name}
              </span>
              <span className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-body">{item.size}</span>
              <span className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-olive">{labels.book}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default RoomDetailPage;
