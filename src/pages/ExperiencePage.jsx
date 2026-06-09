import { Link } from 'react-router-dom';

import PageHero from '../components/PageHero';
import {
  bookingUrl,
  contact,
  images,
  territoryPlaces,
} from '../lib/siteData';

const pageContent = {
  spa: {
    image: images.spa,
    eyebrow: 'SPA & Wellness',
    title: 'Benessere su prenotazione, con tempi chiari.',
    subtitle:
      'Un percorso di due ore tra sauna, bagno turco, doccia emozionale, cromoterapia, idromassaggio e area relax.',
    introTitle: 'Due piani dedicati alla cura del corpo.',
    paragraphs: [
      'La SPA del Relais Santo Stefano è aperta da martedì a domenica e accoglie ospiti hotel e visitatori esterni su prenotazione.',
      'Gli orari ufficiali sono martedì-sabato 10-20 e domenica 10-18; il lunedì la SPA è chiusa. Accesso e trattamenti sono a pagamento.',
    ],
    highlights: ['Sauna', 'Bagno turco', 'Doccia emozionale', 'Cromoterapia', 'Idromassaggio', 'Area relax'],
    cta: { label: 'Chiama la SPA', href: `tel:${contact.spaPhone.replace(/\s+/g, '')}` },
  },
  restaurant: {
    image: images.restaurant,
    eyebrow: 'Ristorante e colazione',
    title: 'Cucina biellese, vini piemontesi e colazione curata.',
    subtitle:
      'Il ristorante è aperto tutti i giorni su prenotazione, anche per ospiti esterni, con cucina dello Chef Piergiorgio Frodi.',
    introTitle: 'Territorio, pasta fresca e sale per momenti diversi.',
    paragraphs: [
      'Dal 2016 lo Chef Piergiorgio Frodi firma una cucina legata a Biella e al Piemonte: pasta fresca fatta a mano, risotti a km zero, vini piemontesi e una carta dedicata anche ai vini biellesi.',
      'La sala principale accoglie fino a 120 persone, la Sala Garden fino a 50 persone; nella bella stagione il dehors estivo amplia il racconto all’aperto.',
      'La colazione è un buffet continentale in tre isole, con dolci fatti in casa, prodotti locali, salato piemontese, yogurt, frutta, semi, centrifughe, spremute, uova e bacon.',
    ],
    highlights: ['Sala principale 120 persone', 'Sala Garden 50 persone', 'Dehors estivo', 'Colazione in tre isole'],
    cta: { label: 'Prenota un tavolo', href: `mailto:${contact.email}` },
  },
  sport: {
    image: images.sport,
    eyebrow: 'Sport & Activity',
    title: 'Padel, pickleball, bike e piscina.',
    subtitle:
      'Il resort integra sport e movimento con 6 campi da padel, 4 campi da pickleball, e-bike, piscina estiva e palestra Technogym.',
    introTitle: 'Per ospiti hotel e visitatori esterni.',
    paragraphs: [
      'Il centro sportivo è pensato per chi soggiorna al relais e per chi arriva da fuori: padel coperto e riscaldato, pickleball, e-bike e spazi fitness.',
      'Piscina estiva e palestra Technogym completano l’esperienza per alternare relax, allenamento e giornate nel verde.',
    ],
    highlights: ['6 campi da padel', '4 campi da pickleball', 'E-bike', 'Piscina estiva', 'Palestra Technogym'],
    cta: { label: 'Chiedi informazioni', href: `mailto:${contact.email}` },
  },
  meeting: {
    image: images.meeting,
    eyebrow: 'Meeting ed eventi',
    title: 'Sale modulari per lavoro, incontri e occasioni private.',
    subtitle:
      'Tre sale, servizi tecnici e ristorazione interna per meeting aziendali, team building, aperitivi e business dinner.',
    introTitle: 'Spazi chiari, servizi pronti.',
    paragraphs: [
      'La Sala Oropa misura 245 m2, la Sala Bike 155 m2 e la Saletta Les Oliviers 30 m2: tre dimensioni diverse per format aziendali e privati.',
      'Sono disponibili Wi-Fi, diversi setup sala, videoproiettore o schermi, audio/video, HDMI, welcome coffee, coffee break, light lunch, aperitivi e business dinner.',
    ],
    highlights: ['Sala Oropa 245 m2', 'Sala Bike 155 m2', 'Les Oliviers 30 m2', 'Coffee break', 'Light lunch', 'Business dinner'],
    cta: { label: 'Richiedi preventivo', href: `mailto:${contact.email}` },
  },
  territory: {
    image: images.territory,
    eyebrow: 'Territorio',
    title: 'Il Biellese a portata di soggiorno.',
    subtitle:
      'Dal relais si raggiungono Oropa, Ricetto di Candelo, Oasi Zegna, Lago di Viverone e luoghi UNESCO del territorio.',
    introTitle: 'Natura, borghi e cultura intorno a Sandigliano.',
    paragraphs: [
      'La posizione del Relais Santo Stefano permette di alternare giornate di relax in struttura a uscite brevi nel Biellese.',
      'Oropa dista circa 20 km, il Ricetto di Candelo è a pochi minuti d’auto e l’Oasi Zegna si raggiunge in meno di mezz’ora.',
    ],
    highlights: territoryPlaces,
    cta: { label: 'Come arrivare', href: contact.mapsUrl, external: true },
  },
};

function ExperiencePage({ type }) {
  const page = pageContent[type] || pageContent.spa;

  return (
    <>
      <PageHero
        image={page.image}
        eyebrow={page.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
        priority
        actions={
          <>
            <a
              href={page.cta.href}
              target={page.cta.external ? '_blank' : undefined}
              rel={page.cta.external ? 'noopener noreferrer' : undefined}
              className="inline-flex justify-center border border-bronze bg-bronze px-6 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-white"
            >
              {page.cta.label}
            </a>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center border border-white/35 px-6 py-3 font-ui text-xs uppercase tracking-[0.16em] text-white hover:bg-white/14"
            >
              Prenota soggiorno
            </a>
          </>
        }
      />

      <section data-reveal className="reveal-scroll grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="font-ui text-xs uppercase tracking-[0.24em] text-bronze">{page.eyebrow}</p>
          <h2 className="mt-4 font-serif text-[2.8rem] leading-[0.96] sm:text-[4.3rem]">
            {page.introTitle}
          </h2>
        </div>
        <div className="space-y-5 font-ui text-base leading-8 text-graphite/72">
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 42)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {page.highlights.map((item) => (
          <div key={item} className="border border-black/10 bg-white px-5 py-5 shadow-soft">
            <p className="font-ui text-sm leading-7 text-graphite/72">{item}</p>
          </div>
        ))}
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 bg-sage px-6 py-10 text-white sm:px-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-14">
        <h2 className="font-serif text-[2.7rem] leading-[0.96] sm:text-[4rem]">
          Preferisci parlarne con il relais?
        </h2>
        <div>
          <p className="font-ui text-base leading-8 text-white/76">
            Per date, disponibilità, esigenze alimentari, trattamenti o richieste tecniche evento, il contatto diretto è la via più precisa.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="border border-white bg-white px-5 py-3 font-ui text-xs uppercase tracking-[0.16em] text-sage">
              Chiama hotel
            </a>
            <Link to="/contatti" className="border border-white/22 px-5 py-3 font-ui text-xs uppercase tracking-[0.16em] text-white hover:bg-white/10">
              Vai ai contatti
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ExperiencePage;
