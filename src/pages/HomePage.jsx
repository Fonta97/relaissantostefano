import { Link } from 'react-router-dom';

import BookingWidget from '../components/BookingWidget';
import { useI18n } from '../lib/i18n';
import { getPremiumRooms } from '../lib/roomData';
import { contact, images } from '../lib/siteData';

const extraCopy = {
  it: {
    roomsLink: 'Scopri',
    introKicker: 'A place to live',
    facilitiesEyebrow: 'Facilities',
    facilitiesTitle: 'Tutto in un solo relais.',
    allNeedEyebrow: 'All you need',
    allNeedTitle: 'Servizi essenziali, ritmo semplice.',
    restaurantEyebrow: 'Ristorante',
    restaurantTitle: 'Cucina piemontese, colazione e sale con vista sul verde.',
    restaurantText:
      'Il ristorante lavora su prenotazione con cucina territoriale, vini piemontesi e una colazione continentale organizzata in isole.',
    faqEyebrow: 'FAQ',
    faqTitle: 'Domande frequenti',
    groupEyebrow: 'Il gruppo',
    groupTitle: 'Altre strutture del gruppo',
    crossText: 'Tre indirizzi collegati al territorio, al lavoro e all ospitalita contemporanea.',
    proof: ['Tripadvisor 4,2/5', 'Travellers Choice 2026', 'Booking.com 8,0'],
    faqs: [
      ['La SPA e aperta anche agli esterni?', 'Si, su prenotazione. Percorso SPA e trattamenti sono servizi a pagamento.'],
      ['Il ristorante accoglie ospiti esterni?', 'Si, su prenotazione anche per ospiti non residenti.'],
      ['Ci sono servizi sportivi?', 'Padel, pickleball, piscina estiva, e-bike e palestra Technogym.'],
      ['La struttura e adatta a meeting?', 'Si, con tre sale, servizi tecnici e ristorazione interna.'],
    ],
  },
  en: {
    roomsLink: 'View room',
    introKicker: 'A place to live',
    facilitiesEyebrow: 'Facilities',
    facilitiesTitle: 'Everything in one relais.',
    allNeedEyebrow: 'All you need',
    allNeedTitle: 'Essential services, simple rhythm.',
    restaurantEyebrow: 'Restaurant',
    restaurantTitle: 'Piedmont cuisine, breakfast and rooms overlooking the garden.',
    restaurantText:
      'The restaurant works by reservation with local cuisine, Piedmont wines and continental breakfast arranged in islands.',
    faqEyebrow: 'FAQ',
    faqTitle: 'Frequently asked questions',
    groupEyebrow: 'The group',
    groupTitle: 'Other properties in the group',
    crossText: 'Three addresses connected to the area, work and contemporary hospitality.',
    proof: ['Tripadvisor 4.2/5', 'Travellers Choice 2026', 'Booking.com 8.0'],
    faqs: [
      ['Is the SPA open to outside guests?', 'Yes, by reservation. SPA path and treatments are paid services.'],
      ['Does the restaurant welcome outside guests?', 'Yes, by reservation also for non-resident guests.'],
      ['Are there sport services?', 'Padel, pickleball, summer pool, e-bikes and Technogym gym.'],
      ['Is the property suitable for meetings?', 'Yes, with three rooms, technical services and in-house catering.'],
    ],
  },
  de: {
    roomsLink: 'Zimmer ansehen',
    facilitiesEyebrow: 'Facilities',
    facilitiesTitle: 'Alles in einem Relais.',
    allNeedEyebrow: 'All you need',
    allNeedTitle: 'Wichtige Services, einfacher Rhythmus.',
    restaurantEyebrow: 'Restaurant',
    restaurantTitle: 'Piemontesische Kueche, Fruehstueck und Raeume mit Blick ins Gruene.',
    restaurantText:
      'Das Restaurant arbeitet nach Reservierung mit regionaler Kueche, piemontesischen Weinen und kontinentalem Fruehstueck.',
    faqEyebrow: 'FAQ',
    faqTitle: 'Haeufige Fragen',
    groupEyebrow: 'Die Gruppe',
    groupTitle: 'Weitere Haeuser der Gruppe',
    crossText: 'Drei Adressen verbunden mit Region, Arbeit und zeitgemaesser Gastlichkeit.',
    proof: ['Tripadvisor 4,2/5', 'Travellers Choice 2026', 'Booking.com 8,0'],
    faqs: [
      ['Ist die SPA auch fuer externe Gaeste offen?', 'Ja, nach Reservierung. SPA-Parcours und Behandlungen sind kostenpflichtig.'],
      ['Empfaengt das Restaurant externe Gaeste?', 'Ja, nach Reservierung auch fuer nicht residente Gaeste.'],
      ['Gibt es Sportservices?', 'Padel, Pickleball, Sommerpool, E-Bikes und Technogym-Fitnessraum.'],
      ['Eignet sich die Struktur fuer Meetings?', 'Ja, mit drei Raeumen, Technikservices und interner Gastronomie.'],
    ],
  },
  fr: {
    roomsLink: 'Voir chambre',
    facilitiesEyebrow: 'Facilities',
    facilitiesTitle: 'Tout dans un seul relais.',
    allNeedEyebrow: 'All you need',
    allNeedTitle: 'Services essentiels, rythme simple.',
    restaurantEyebrow: 'Restaurant',
    restaurantTitle: 'Cuisine piemontaise, petit-dejeuner et salles avec vue sur le vert.',
    restaurantText:
      'Le restaurant travaille sur reservation avec cuisine locale, vins piemontais et petit-dejeuner continental.',
    faqEyebrow: 'FAQ',
    faqTitle: 'Questions frequentes',
    groupEyebrow: 'Le groupe',
    groupTitle: 'Autres structures du groupe',
    crossText: 'Trois adresses liees au territoire, au travail et a l hospitalite contemporaine.',
    proof: ['Tripadvisor 4,2/5', 'Travellers Choice 2026', 'Booking.com 8,0'],
    faqs: [
      ['Le SPA est-il ouvert aux hotes exterieurs ?', 'Oui, sur reservation. Parcours SPA et soins sont payants.'],
      ['Le restaurant accueille-t-il des hotes exterieurs ?', 'Oui, sur reservation aussi pour les non-residents.'],
      ['Y a-t-il des services sportifs ?', 'Padel, pickleball, piscine estivale, e-bikes et salle Technogym.'],
      ['La structure convient-elle aux reunions ?', 'Oui, avec trois salles, services techniques et restauration interne.'],
    ],
  },
};

const groupCards = [
  ['Relais Cascina Era', 'https://www.relaiscascinaera.com/en/'],
  ['Hotel Astoria', 'https://www.hotelastoriabiella.com/en/'],
  ['Hotel Cittadellarte', 'https://hotelcittadellarte.com/'],
];

function useExtra(language) {
  return { ...extraCopy.it, ...(extraCopy[language] || {}) };
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="grid gap-6 border-t border-black/12 pt-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
      <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-olive">{eyebrow}</p>
      <div>
        <h2 className="font-serif text-[3.2rem] font-medium leading-[0.88] text-graphite sm:text-[5.8rem]">
          {title}
        </h2>
        {text ? <p className="mt-5 max-w-3xl font-body text-base leading-8 text-body">{text}</p> : null}
      </div>
    </div>
  );
}

function HomeHero({ copy, content }) {
  return (
    <section className="relative left-1/2 -mt-24 min-h-[100svh] w-screen -translate-x-1/2 overflow-hidden bg-espresso text-white sm:-mt-28 lg:-mt-32">
      <img
        src={images.hero.src}
        alt={images.hero.alt}
        width={images.hero.width}
        height={images.hero.height}
        className="hero-media-enter absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: images.hero.objectPosition || 'center center' }}
        loading="eager"
        decoding="async"
        sizes="100vw"
      />
      <div className="hero-readable-overlay absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ivory to-transparent" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-[112rem] flex-col justify-end px-5 pb-20 pt-36 sm:px-8 lg:px-12">
        <div className="max-w-6xl">
          <p className="reveal-fade font-ui text-xs font-semibold uppercase tracking-[0.34em] text-bronze-light">
            {copy.heroEyebrow}
          </p>
          <h1 className="reveal-fade mt-5 font-serif text-[4.8rem] font-medium leading-[0.82] text-white sm:text-[8.4rem] lg:text-[11.5rem]">
            Relais Santo Stefano
          </h1>
          <p
            className="reveal-fade mt-7 max-w-3xl font-body text-base leading-8 text-white/84 sm:text-xl sm:leading-9"
            style={{ '--reveal-delay': '220ms' }}
          >
            {copy.heroSubtitle}
          </p>
          <div className="reveal-fade mt-10 flex flex-wrap gap-3" style={{ '--reveal-delay': '320ms' }}>
            <a href="#booking" className="bg-olive px-7 py-3.5 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-white">
              {content.shared.book}
            </a>
            <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="border border-white/45 px-7 py-3.5 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-white">
              {content.shared.call}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoomRows({ rooms, content, path, extra }) {
  return (
    <section data-reveal className="reveal-scroll">
      <SectionTitle eyebrow={content.home.roomsEyebrow} title={content.home.roomsTitle} text={content.home.roomsText} />
      <div className="mt-8 border-y border-black/12">
        {rooms.slice(0, 9).map((room) => (
          <Link
            key={room.slug}
            to={path(`/camere-suite/${room.slug}`)}
            className="group grid items-center gap-5 border-b border-black/12 py-5 last:border-b-0 lg:grid-cols-[0.12fr_1fr_0.25fr_0.25fr_0.2fr]"
          >
            <span className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-olive">{room.number}</span>
            <span className="font-serif text-[3rem] font-medium leading-[0.9] text-graphite transition-colors group-hover:text-olive sm:text-[5.3rem]">
              {room.name}
            </span>
            <span className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-body">{room.size}</span>
            <span className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-body">{room.bed}</span>
            <span className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-olive">{extra.roomsLink}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ExperienceRows({ content, path }) {
  return (
    <section data-reveal className="reveal-scroll">
      <SectionTitle eyebrow={content.home.experiencesEyebrow} title={content.home.experiencesTitle} text={content.home.experiencesText} />
      <div className="mt-8 grid border-y border-black/12">
        {content.experiences.map((item, index) => (
          <Link
            key={item.title}
            to={path(item.path)}
            className="group grid gap-5 border-b border-black/12 py-6 last:border-b-0 lg:grid-cols-[0.12fr_0.42fr_1fr_0.28fr]"
          >
            <span className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-olive">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="relative hidden aspect-[4/3] overflow-hidden bg-espresso lg:block">
              <img
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
                className="image-breathe h-full w-full object-cover"
                style={{ objectPosition: item.image.objectPosition || 'center center' }}
                loading="lazy"
                decoding="async"
              />
            </span>
            <span>
              <span className="block font-serif text-[3rem] font-medium leading-[0.9] text-graphite transition-colors group-hover:text-olive sm:text-[5rem]">
                {item.title}
              </span>
              <span className="mt-4 block max-w-3xl font-body text-base leading-8 text-body">{item.text}</span>
            </span>
            <span className="self-center font-ui text-xs font-semibold uppercase tracking-[0.16em] text-olive">
              {content.shared.discover}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function HomePage() {
  const { content, language, path } = useI18n();
  const copy = content.home;
  const extra = useExtra(language);
  const rooms = getPremiumRooms(content);
  const facilityCards = [
    { title: 'SPA', text: content.experiencePages.spa.subtitle, image: images.spa, path: '/spa-benessere' },
    { title: 'Meeting', text: content.experiencePages.meeting.subtitle, image: images.meeting, path: '/meeting-eventi' },
    { title: 'Restaurant', text: content.experiencePages.restaurant.subtitle, image: images.restaurant, path: '/ristorante' },
  ];

  return (
    <>
      <HomeHero copy={copy} content={content} />
      <BookingWidget className="-mt-1" />

      <section data-reveal className="reveal-scroll grid gap-px bg-black/10 p-px md:grid-cols-3">
        {extra.proof.map((item) => (
          <div key={item} className="bg-warm-white px-5 py-5 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-olive">
            {item}
          </div>
        ))}
      </section>

      <RoomRows rooms={rooms} content={content} path={path} extra={extra} />

      <section data-reveal className="reveal-scroll grid gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
        <div className="relative min-h-[34rem] overflow-hidden bg-espresso">
          <img
            src={images.welcome.src}
            alt={images.welcome.alt}
            width={images.welcome.width}
            height={images.welcome.height}
            className="image-breathe h-full w-full object-cover"
            style={{ objectPosition: images.welcome.objectPosition || 'center center' }}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-olive">{extra.introKicker}</p>
          <h2 className="mt-5 font-serif text-[3.4rem] font-medium leading-[0.88] text-graphite sm:text-[6rem]">
            {copy.introTitle}
          </h2>
          <div className="mt-7 space-y-5 font-body text-base leading-8 text-body">
            {copy.introParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 36)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <ExperienceRows content={content} path={path} />

      <section data-reveal className="reveal-scroll">
        <SectionTitle eyebrow={extra.facilitiesEyebrow} title={extra.facilitiesTitle} />
        <div className="mt-8 grid gap-px bg-black/10 p-px lg:grid-cols-3">
          {facilityCards.map((card) => (
            <Link key={card.title} to={path(card.path)} className="group bg-warm-white">
              <span className="block aspect-[4/3] overflow-hidden bg-espresso">
                <img
                  src={card.image.src}
                  alt={card.image.alt}
                  width={card.image.width}
                  height={card.image.height}
                  className="image-breathe h-full w-full object-cover"
                  style={{ objectPosition: card.image.objectPosition || 'center center' }}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="block p-6">
                <span className="block font-serif text-[3rem] leading-[0.92] text-graphite">{card.title}</span>
                <span className="mt-4 block font-body text-sm leading-7 text-body">{card.text}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 bg-espresso px-6 py-12 text-white sm:px-10 lg:grid-cols-[0.42fr_0.58fr] lg:px-14">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.22em] text-bronze-light">{extra.allNeedEyebrow}</p>
          <h2 className="mt-5 font-serif text-[3.2rem] font-medium leading-[0.9] sm:text-[5.5rem]">
            {extra.allNeedTitle}
          </h2>
        </div>
        <div className="grid gap-px bg-white/12 p-px sm:grid-cols-2 lg:grid-cols-4">
          {content.services.map((service, index) => (
            <div key={service} className="bg-white/[0.055] px-4 py-5">
              <span className="font-ui text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-bronze-light">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-5 font-body text-sm leading-6 text-white/86">{service}</p>
            </div>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll grid gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
        <div className="relative min-h-[38rem] overflow-hidden bg-espresso">
          <img
            src={images.restaurant.src}
            alt={images.restaurant.alt}
            width={images.restaurant.width}
            height={images.restaurant.height}
            className="image-breathe h-full w-full object-cover"
            style={{ objectPosition: images.restaurant.objectPosition || 'center center' }}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-olive">{extra.restaurantEyebrow}</p>
          <h2 className="mt-5 font-serif text-[3.2rem] font-medium leading-[0.9] text-graphite sm:text-[5.4rem]">
            {extra.restaurantTitle}
          </h2>
          <p className="mt-6 font-body text-base leading-8 text-body">{extra.restaurantText}</p>
          <Link to={path('/ristorante')} className="mt-8 inline-flex bg-olive px-6 py-3 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-white">
            {content.shared.discover}
          </Link>
        </div>
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-olive">{extra.faqEyebrow}</p>
          <h2 className="mt-5 font-serif text-[3.2rem] font-medium leading-[0.9] text-graphite sm:text-[5.4rem]">
            {extra.faqTitle}
          </h2>
        </div>
        <div className="border-y border-black/12">
          {extra.faqs.map(([question, answer]) => (
            <details key={question} className="group border-b border-black/12 py-5 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-[1.9rem] leading-tight text-graphite">
                <span>{question}</span>
                <span className="font-ui text-base text-olive transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-4 max-w-3xl font-body text-base leading-8 text-body">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll">
        <SectionTitle eyebrow={extra.groupEyebrow} title={extra.groupTitle} text={extra.crossText} />
        <div className="mt-8 grid gap-px bg-black/10 p-px lg:grid-cols-3">
          {groupCards.map(([title, href], index) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[18rem] flex-col justify-between bg-warm-white p-6"
            >
              <span className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-olive">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-serif text-[3rem] font-medium leading-[0.9] text-graphite group-hover:text-olive">
                {title}
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
