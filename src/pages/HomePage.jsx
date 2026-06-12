import { Link } from 'react-router-dom';

import BookingWidget from '../components/BookingWidget';
import MosaicGallery from '../components/MosaicGallery';
import PageHero from '../components/PageHero';
import { useI18n } from '../lib/i18n';
import { contact, images } from '../lib/siteData';

const homeExtra = {
  it: {
    proofEyebrow: 'Ospiti reali',
    proofTitle: 'Recensioni, premi e fiducia verificata.',
    socialProof: [
      { value: '4,2/5', label: 'Tripadvisor', text: '349 recensioni' },
      { value: '2026', label: 'Travellers Choice', text: 'Riconoscimento Tripadvisor' },
      { value: '8,0', label: 'Booking.com', text: '673 recensioni' },
    ],
    roomsCta: 'Scopri tutte le camere',
    experiencesCta: 'Scopri esperienza',
    meetingEyebrow: 'Meeting & aziende',
    meetingTitle: 'Sale, coffee break e ospitalita per il lavoro.',
    meetingText:
      'Tre sale modulari, luce naturale, setup tecnici, welcome coffee, coffee break, light lunch, aperitivi e business dinner: una struttura completa per incontri aziendali, team building e presentazioni.',
    meetingStats: ['Sala Oropa 245 m2', 'Sala Bike 155 m2', 'Les Oliviers 30 m2', 'Wi-Fi e AV', 'Coffee break', 'Business dinner'],
    logoNote: 'Loghi clienti disponibili dopo verifica e autorizzazione.',
    faqEyebrow: 'FAQ',
    faqTitle: 'Risposte rapide prima di prenotare.',
    faqs: [
      ['La SPA e aperta anche agli esterni?', 'Si, su prenotazione. Il percorso SPA e i trattamenti sono servizi a pagamento.'],
      ['Il ristorante accoglie ospiti esterni?', 'Si, il ristorante e aperto su prenotazione anche per ospiti non residenti.'],
      ['Ci sono servizi sportivi?', 'Sono disponibili campi da padel e pickleball, piscina estiva, e-bike e palestra Technogym.'],
      ['La struttura e adatta a meeting?', 'Si, sono presenti tre sale meeting con servizi tecnici e ristorazione interna.'],
    ],
    groupEyebrow: 'Il gruppo',
    groupTitle: 'Altre strutture da scoprire nel Biellese.',
    groupCards: [
      {
        title: 'Relais Cascina Era',
        text: 'Resort wellness a Sandigliano con camere, suite, ristorante ed eventi.',
        href: 'https://www.relaiscascinaera.com/en/',
      },
      {
        title: 'Hotel Astoria',
        text: 'Storico hotel 4 stelle a Biella, vicino alla stazione e al centro.',
        href: 'https://www.hotelastoriabiella.com/en/',
      },
      {
        title: 'Hotel Cittadellarte',
        text: 'Ospitalita dentro il complesso artistico della Fondazione Pistoletto.',
        href: 'https://hotelcittadellarte.com/',
      },
    ],
  },
  en: {
    proofEyebrow: 'Real guests',
    proofTitle: 'Reviews, awards and verified trust.',
    socialProof: [
      { value: '4.2/5', label: 'Tripadvisor', text: '349 reviews' },
      { value: '2026', label: 'Travellers Choice', text: 'Tripadvisor award' },
      { value: '8.0', label: 'Booking.com', text: '673 reviews' },
    ],
    roomsCta: 'Explore all rooms',
    experiencesCta: 'Explore experience',
    poolTitle: 'Pool',
    poolText: 'Summer relaxation in the resort garden, with loungers, greenery and in-house services.',
    fitnessTitle: 'Gym',
    fitnessText: 'Technogym fitness area to keep your rhythm during the stay.',
    meetingEyebrow: 'Meetings & companies',
    meetingTitle: 'Rooms, coffee breaks and hospitality for work.',
    meetingText:
      'Three modular rooms, natural light, technical setups, welcome coffee, coffee breaks, light lunches, aperitifs and business dinners for meetings, team building and presentations.',
    logoNote: 'Client logos can be added after verification and approval.',
    faqEyebrow: 'FAQ',
    faqTitle: 'Quick answers before booking.',
    faqs: [
      ['Is the SPA open to outside guests?', 'Yes, by reservation. The SPA path and treatments are paid services.'],
      ['Does the restaurant welcome outside guests?', 'Yes, the restaurant is open by reservation also for non-resident guests.'],
      ['Are there sport services?', 'Padel and pickleball courts, summer pool, e-bikes and Technogym gym are available.'],
      ['Is the property suitable for meetings?', 'Yes, there are three meeting rooms with technical services and in-house catering.'],
    ],
    groupEyebrow: 'The group',
    groupTitle: 'Other places to discover around Biella.',
    groupCards: [
      {
        title: 'Relais Cascina Era',
        text: 'Wellness resort in Sandigliano with rooms, suites, restaurant and events.',
        href: 'https://www.relaiscascinaera.com/en/',
      },
      {
        title: 'Hotel Astoria',
        text: 'Historic 4-star hotel in Biella, close to the station and city centre.',
        href: 'https://www.hotelastoriabiella.com/en/',
      },
      {
        title: 'Hotel Cittadellarte',
        text: 'Hospitality inside the artistic complex of Fondazione Pistoletto.',
        href: 'https://hotelcittadellarte.com/',
      },
    ],
  },
  de: {
    proofEyebrow: 'Echte Gaeste',
    proofTitle: 'Bewertungen, Auszeichnungen und verifiziertes Vertrauen.',
    socialProof: [
      { value: '4,2/5', label: 'Tripadvisor', text: '349 Bewertungen' },
      { value: '2026', label: 'Travellers Choice', text: 'Tripadvisor Auszeichnung' },
      { value: '8,0', label: 'Booking.com', text: '673 Bewertungen' },
    ],
    roomsCta: 'Alle Zimmer entdecken',
    experiencesCta: 'Erlebnis entdecken',
    poolTitle: 'Pool',
    poolText: 'Sommerliche Entspannung im Gruenen des Resorts, mit Liegen, Garten und Services.',
    fitnessTitle: 'Fitness',
    fitnessText: 'Technogym-Fitnessbereich, um den eigenen Rhythmus auch im Aufenthalt zu halten.',
    meetingEyebrow: 'Meetings & Firmen',
    meetingTitle: 'Raeume, Coffee Breaks und Gastlichkeit fuer Arbeit.',
    meetingText:
      'Drei modulare Raeume, Tageslicht, technische Setups, Welcome Coffee, Coffee Breaks, Light Lunch, Aperitifs und Business Dinner.',
    logoNote: 'Kundenlogos koennen nach Pruefung und Freigabe ergaenzt werden.',
    faqEyebrow: 'FAQ',
    faqTitle: 'Schnelle Antworten vor der Buchung.',
    faqs: [
      ['Ist die SPA auch fuer externe Gaeste geoeffnet?', 'Ja, nach Reservierung. SPA-Parcours und Behandlungen sind kostenpflichtige Services.'],
      ['Empfaengt das Restaurant externe Gaeste?', 'Ja, das Restaurant ist nach Reservierung auch fuer externe Gaeste geoeffnet.'],
      ['Gibt es Sportservices?', 'Padel- und Pickleballplaetze, Sommerpool, E-Bikes und Technogym-Fitnessraum sind verfuegbar.'],
      ['Eignet sich die Struktur fuer Meetings?', 'Ja, es gibt drei Meetingraeume mit Technikservices und interner Gastronomie.'],
    ],
    groupEyebrow: 'Die Gruppe',
    groupTitle: 'Weitere Orte rund um Biella.',
    groupCards: [
      {
        title: 'Relais Cascina Era',
        text: 'Wellness-Resort in Sandigliano mit Zimmern, Suiten, Restaurant und Events.',
        href: 'https://www.relaiscascinaera.com/en/',
      },
      {
        title: 'Hotel Astoria',
        text: 'Historisches 4-Sterne-Hotel in Biella, nahe Bahnhof und Zentrum.',
        href: 'https://www.hotelastoriabiella.com/en/',
      },
      {
        title: 'Hotel Cittadellarte',
        text: 'Gastlichkeit im kuenstlerischen Komplex der Fondazione Pistoletto.',
        href: 'https://hotelcittadellarte.com/',
      },
    ],
  },
  fr: {
    proofEyebrow: 'Vrais hotes',
    proofTitle: 'Avis, prix et confiance verifiee.',
    socialProof: [
      { value: '4,2/5', label: 'Tripadvisor', text: '349 avis' },
      { value: '2026', label: 'Travellers Choice', text: 'Prix Tripadvisor' },
      { value: '8,0', label: 'Booking.com', text: '673 avis' },
    ],
    roomsCta: 'Voir toutes les chambres',
    experiencesCta: 'Voir experience',
    poolTitle: 'Piscine',
    poolText: 'Relax estival dans le jardin du resort, avec transats, verdure et services internes.',
    fitnessTitle: 'Salle de sport',
    fitnessText: 'Espace fitness Technogym pour garder le rythme pendant le sejour.',
    meetingEyebrow: 'Reunions & entreprises',
    meetingTitle: 'Salles, pauses cafe et hospitalite pour le travail.',
    meetingText:
      'Trois salles modulaires, lumiere naturelle, setups techniques, welcome coffee, coffee breaks, light lunch, aperitifs et business dinner.',
    logoNote: 'Les logos clients peuvent etre ajoutes apres verification et accord.',
    faqEyebrow: 'FAQ',
    faqTitle: 'Reponses rapides avant de reserver.',
    faqs: [
      ['Le SPA accueille-t-il des hotes exterieurs ?', 'Oui, sur reservation. Le parcours SPA et les soins sont des services payants.'],
      ['Le restaurant accueille-t-il des hotes exterieurs ?', 'Oui, le restaurant est ouvert sur reservation aussi aux non-residents.'],
      ['Y a-t-il des services sportifs ?', 'Terrains de padel et pickleball, piscine estivale, e-bikes et salle Technogym sont disponibles.'],
      ['La structure convient-elle aux reunions ?', 'Oui, trois salles de reunion avec services techniques et restauration interne sont disponibles.'],
    ],
    groupEyebrow: 'Le groupe',
    groupTitle: 'Autres adresses a decouvrir autour de Biella.',
    groupCards: [
      {
        title: 'Relais Cascina Era',
        text: 'Resort wellness a Sandigliano avec chambres, suites, restaurant et evenements.',
        href: 'https://www.relaiscascinaera.com/en/',
      },
      {
        title: 'Hotel Astoria',
        text: 'Hotel 4 etoiles historique a Biella, pres de la gare et du centre.',
        href: 'https://www.hotelastoriabiella.com/en/',
      },
      {
        title: 'Hotel Cittadellarte',
        text: 'Hospitalite dans le complexe artistique de la Fondazione Pistoletto.',
        href: 'https://hotelcittadellarte.com/',
      },
    ],
  },
};

function getExtra(language) {
  const base = homeExtra.it;
  const localized = homeExtra[language] || {};

  return {
    ...base,
    ...localized,
    socialProof: localized.socialProof || base.socialProof,
    meetingStats: localized.meetingStats || base.meetingStats,
    faqs: localized.faqs || base.faqs,
    groupCards: localized.groupCards || base.groupCards,
  };
}

function PrimaryCta({ to, href, children, external = false }) {
  const className =
    'inline-flex justify-center bg-olive px-7 py-3.5 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-olive-dark';

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
    'inline-flex justify-center border border-white/48 px-7 py-3.5 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-espresso';

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
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
      <div>
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-olive">{eyebrow}</p>
        <h2 className="mt-4 max-w-5xl font-serif text-[3.1rem] font-medium leading-[0.9] text-graphite sm:text-[5.6rem]">
          {title}
        </h2>
      </div>
      {text ? <p className="max-w-2xl font-body text-base leading-8 text-body">{text}</p> : null}
    </div>
  );
}

function HorizontalScroller({ children, label }) {
  return (
    <div className="-mx-5 overflow-x-auto px-5 pb-5 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12" aria-label={label}>
      <div className="flex min-w-max gap-4">{children}</div>
    </div>
  );
}

function HomePage() {
  const { content, language, path } = useI18n();
  const copy = content.home;
  const extra = getExtra(language);
  const premiumRooms = [
    ...content.spaSuites.slice().reverse(),
    ...content.rooms.filter((room) =>
      /suite|tower|junior|deluxe|superior|standard|comfort|singola|single/i.test(room.name)
    ),
  ];
  const extraExperiences = [
    ...content.experiences,
    {
      title: extra.poolTitle || 'Piscina',
      text: extra.poolText || 'Relax estivo nel verde del resort, tra lettini, giardino e servizi interni.',
      path: '/sport-activity',
      image: images.pool,
    },
    {
      title: extra.fitnessTitle || 'Palestra',
      text: extra.fitnessText || 'Area fitness Technogym per mantenere il ritmo anche durante il soggiorno.',
      path: '/sport-activity',
      image: images.sport,
    },
  ];

  return (
    <>
      <PageHero
        image={images.hero}
        eyebrow={copy.heroEyebrow}
        title={copy.heroTitle}
        subtitle={copy.heroSubtitle}
        priority
        align="center"
        minHeight="min-h-[96svh]"
        actions={
          <>
            <PrimaryCta to={path('/#booking')}>{content.shared.book}</PrimaryCta>
            <SecondaryCta href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{content.shared.call}</SecondaryCta>
            <SecondaryCta to={path('/camere-suite')}>{copy.roomsEyebrow}</SecondaryCta>
          </>
        }
      />

      <BookingWidget className="-mt-24 sm:-mt-28" />

      <section data-reveal className="reveal-scroll grid gap-px bg-espresso/10 p-px sm:grid-cols-3 lg:grid-cols-6">
        {content.quickFacts.map((fact) => (
          <div key={fact.label} className="bg-warm-white px-5 py-6">
            <p className="font-serif text-[3rem] font-medium leading-none text-olive">{fact.value}</p>
            <p className="mt-3 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-body">{fact.label}</p>
          </div>
        ))}
        {extra.socialProof.map((item) => (
          <div key={item.label} className="bg-espresso px-5 py-6 text-white">
            <p className="font-serif text-[3rem] font-medium leading-none text-bronze-light">{item.value}</p>
            <p className="mt-3 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-white/82">{item.label}</p>
            <p className="mt-2 font-body text-xs leading-5 text-white/62">{item.text}</p>
          </div>
        ))}
      </section>

      <section data-reveal className="reveal-scroll relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="group relative min-h-[36rem] overflow-hidden bg-graphite shadow-editorial">
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
          <div className="glass-image-overlay absolute inset-0" />
        </div>
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-olive">{copy.introEyebrow}</p>
          <h2 className="mt-4 font-serif text-[3.2rem] font-medium leading-[0.9] text-graphite sm:text-[6rem]">
            {copy.introTitle}
          </h2>
          <div className="mt-7 space-y-5 font-body text-base leading-8 text-body">
            {copy.introParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 36)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryCta to={path('/camere-suite')}>{content.shared.discover}</PrimaryCta>
            <a href={`mailto:${contact.email}`} className="border border-black/14 px-6 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:border-olive hover:text-olive">
              {content.shared.writeUs}
            </a>
          </div>
        </div>
      </section>

      <section data-reveal className="reveal-scroll space-y-8">
        <SectionHeading eyebrow={copy.roomsEyebrow} title={copy.roomsTitle} text={copy.roomsText} />
        <HorizontalScroller label={copy.roomsEyebrow}>
          {premiumRooms.map((room, index) => (
            <article key={`${room.name}-${index}`} className="group w-[82vw] max-w-[31rem] shrink-0 overflow-hidden bg-warm-white shadow-soft sm:w-[30rem]">
              <div className="relative aspect-[4/5] overflow-hidden bg-graphite">
                <img
                  src={room.image.src}
                  alt={room.image.alt}
                  width={room.image.width}
                  height={room.image.height}
                  className="image-breathe h-full w-full object-cover"
                  style={{ objectPosition: room.image.objectPosition || 'center center' }}
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute left-5 top-5 bg-espresso/86 px-3 py-2 font-ui text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="p-6">
                <p className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-olive">{room.eyebrow || copy.roomsEyebrow}</p>
                <h3 className="mt-3 font-serif text-[2.45rem] font-medium leading-[0.95] text-graphite">{room.name}</h3>
                <p className="mt-4 font-body text-sm leading-7 text-body">{room.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {room.details.slice(0, 3).map((detail) => (
                    <span key={detail} className="border border-black/10 px-3 py-2 font-ui text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-body">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </HorizontalScroller>
        <PrimaryCta to={path('/camere-suite')}>{extra.roomsCta}</PrimaryCta>
      </section>

      <section data-reveal className="reveal-scroll space-y-8">
        <SectionHeading eyebrow={copy.experiencesEyebrow} title={copy.experiencesTitle} text={copy.experiencesText} />
        <HorizontalScroller label={copy.experiencesEyebrow}>
          {extraExperiences.map((item, index) => (
            <Link key={`${item.title}-${index}`} to={path(item.path)} className="group relative h-[34rem] w-[78vw] max-w-[26rem] shrink-0 overflow-hidden bg-graphite text-white sm:w-[25rem]">
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
              <div className="relative flex h-full flex-col justify-end p-6">
                <span className="font-ui text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-bronze-light">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-serif text-[2.7rem] font-medium leading-[0.95]">{item.title}</h3>
                <p className="mt-4 font-body text-sm leading-7 text-white/88">{item.text}</p>
                <span className="mt-6 inline-flex self-start border border-white/45 px-4 py-2 font-ui text-xs font-semibold uppercase tracking-[0.16em] transition-colors group-hover:bg-white group-hover:text-espresso">
                  {extra.experiencesCta}
                </span>
              </div>
            </Link>
          ))}
        </HorizontalScroller>
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 bg-espresso px-6 py-12 text-white shadow-editorial sm:px-10 lg:grid-cols-[0.86fr_1.14fr] lg:px-14">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-bronze-light">
            {extra.meetingEyebrow}
          </p>
          <h2 className="mt-4 font-serif text-[3.1rem] font-medium leading-[0.92] sm:text-[5.4rem]">
            {extra.meetingTitle}
          </h2>
          <p className="mt-6 font-body text-base leading-8 text-white/78">{extra.meetingText}</p>
          <p className="mt-6 border-t border-white/12 pt-5 font-ui text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/48">
            {extra.logoNote}
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src={images.meeting.src}
              alt={images.meeting.alt}
              width={images.meeting.width}
              height={images.meeting.height}
              className="min-h-[20rem] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <img
              src={images.meetingOropa.src}
              alt={images.meetingOropa.alt}
              width={images.meetingOropa.width}
              height={images.meetingOropa.height}
              className="min-h-[20rem] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="grid gap-px bg-white/12 p-px sm:grid-cols-3">
            {extra.meetingStats.map((stat) => (
              <p key={stat} className="bg-white/[0.06] px-4 py-4 font-ui text-xs font-semibold uppercase tracking-[0.14em] text-white/82">
                {stat}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="reveal-scroll space-y-8">
        <SectionHeading eyebrow={copy.galleryEyebrow} title={copy.galleryTitle} text={copy.galleryText} />
        <MosaicGallery
          images={images.gallery}
          title={copy.galleryModalTitle}
          openLabel={copy.openImage}
          modalLabels={copy.modalLabels}
        />
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-olive">{extra.faqEyebrow}</p>
          <h2 className="mt-4 font-serif text-[3.1rem] font-medium leading-[0.92] text-graphite sm:text-[5.3rem]">
            {extra.faqTitle}
          </h2>
        </div>
        <div className="border-y border-black/12">
          {extra.faqs.map(([question, answer]) => (
            <details key={question} className="group border-b border-black/12 py-5 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-[1.85rem] leading-tight text-graphite">
                <span>{question}</span>
                <span className="font-ui text-base text-olive transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-4 max-w-3xl font-body text-base leading-8 text-body">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll space-y-8">
        <SectionHeading eyebrow={extra.groupEyebrow} title={extra.groupTitle} />
        <div className="grid gap-4 lg:grid-cols-3">
          {extra.groupCards.map((card, index) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[20rem] flex-col justify-between border border-black/10 bg-warm-white p-6 transition-colors hover:border-olive"
            >
              <span className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-olive">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>
                <span className="block font-serif text-[2.8rem] font-medium leading-[0.9] text-graphite">{card.title}</span>
                <span className="mt-5 block font-body text-sm leading-7 text-body">{card.text}</span>
              </span>
              <span className="mt-8 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-olive group-hover:text-olive-dark">
                {content.shared.discover}
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
