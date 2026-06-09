export const brand = {
  name: 'Relais Santo Stefano',
  claim: 'Resort 4 stelle alle porte di Biella',
  baseUrl: 'https://www.relaissantostefano.com',
};

export const contact = {
  address: 'Via Garibaldi 5, 13876 Sandigliano BI',
  phone: '+39 015 2496154',
  spaPhone: '+39 015 691470',
  email: 'info@relaissantostefano.com',
  spaEmail: 'spa@relaissantostefano.com',
  vat: '03534110048',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Via%20Garibaldi%205%2013876%20Sandigliano%20BI',
  mapEmbed:
    'https://www.google.com/maps?q=Via%20Garibaldi%205%2013876%20Sandigliano%20BI&output=embed',
};

export const bookingUrl =
  import.meta.env.VITE_BOOKING_URL?.trim() || 'https://www.relaissantostefano.com/booking/';

export const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/relaissantostefano/',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/relaissantostefano/',
  },
];

const unsplash = (id, width = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

export const images = {
  hero: {
    src: '/images/relais-hero-generated.png',
    alt: 'Visual prototipo di relais piemontese con piscina, giardino e luce serale.',
  },
  room: {
    src: unsplash('photo-1611892440504-42a792e24d32', 1600),
    alt: 'Camera elegante con letto matrimoniale e luce naturale.',
  },
  spa: {
    src: unsplash('photo-1540555700478-4be289fbecef', 1600),
    alt: 'Ambiente wellness con dettagli di spa e relax.',
  },
  restaurant: {
    src: unsplash('photo-1414235077428-338989a2e8c0', 1600),
    alt: 'Tavola apparecchiata in un ristorante elegante.',
  },
  breakfast: {
    src: unsplash('photo-1533089860892-a7c6f0a88666', 1600),
    alt: 'Colazione continentale con prodotti dolci e salati.',
  },
  sport: {
    src: unsplash('photo-1626224583764-f87db24ac4ea', 1600),
    alt: 'Campo sportivo outdoor per racchette.',
  },
  meeting: {
    src: unsplash('photo-1517457373958-b7bdd4587205', 1600),
    alt: 'Sala meeting luminosa allestita per lavoro di gruppo.',
  },
  territory: {
    src: unsplash('photo-1500530855697-b586d89ba3ee', 1600),
    alt: 'Paesaggio verde con rilievi e luce naturale.',
  },
  offers: {
    src: unsplash('photo-1506126613408-eca07ce68773', 1600),
    alt: 'Dettaglio benessere con asciugamani e atmosfera rilassante.',
  },
  gallery: [
    {
      src: '/images/relais-hero-generated.png',
      alt: 'Visual prototipo di resort con piscina e giardino in luce serale.',
      caption: 'Resort e piscina',
    },
    {
      src: unsplash('photo-1611892440504-42a792e24d32', 1400),
      alt: 'Camera matrimoniale elegante.',
      caption: 'Camere luminose',
    },
    {
      src: unsplash('photo-1540555700478-4be289fbecef', 1400),
      alt: 'Dettagli wellness.',
      caption: 'SPA e relax',
    },
    {
      src: unsplash('photo-1414235077428-338989a2e8c0', 1400),
      alt: 'Ristorante con mise en place.',
      caption: 'Cucina territoriale',
    },
    {
      src: unsplash('photo-1517457373958-b7bdd4587205', 1400),
      alt: 'Tavolo meeting con persone al lavoro.',
      caption: 'Meeting ed eventi',
    },
    {
      src: unsplash('photo-1500530855697-b586d89ba3ee', 1400),
      alt: 'Paesaggio verde del territorio.',
      caption: 'Biellese da scoprire',
    },
  ],
};

export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Camere & Suite', path: '/camere-suite' },
  { label: 'SPA', path: '/spa-benessere' },
  { label: 'Ristorante', path: '/ristorante' },
  { label: 'Sport', path: '/sport-activity' },
  { label: 'Meeting', path: '/meeting-eventi' },
  { label: 'Territorio', path: '/territorio' },
  { label: 'Offerte', path: '/offerte' },
  { label: 'Contatti', path: '/contatti' },
];

export const aliasRedirects = {
  '/home': '/',
  '/camere': '/camere-suite',
  '/camere-e-spa-lodge-relais-santo-stefano': '/camere-suite',
  '/suite': '/camere-suite',
  '/spa-resort-piemonte': '/spa-benessere',
  '/sale-meeting': '/meeting-eventi',
  '/sport': '/sport-activity',
  '/colazione': '/ristorante',
  '/offerte-speciali': '/offerte',
};

export const quickFacts = [
  { value: '75', label: 'camere e suite' },
  { value: '2h', label: 'percorso SPA su prenotazione' },
  { value: '10', label: 'campi padel e pickleball' },
  { value: '3', label: 'sale meeting modulari' },
];

export const rooms = [
  {
    name: 'Singola',
    summary: 'Una soluzione raccolta e funzionale per soggiorni business o passaggi brevi nel Biellese.',
    details: ['1 ospite', 'Wi-Fi gratuito', 'Vista giardino su disponibilita'],
  },
  {
    name: 'Standard Queen',
    summary: 'Comfort essenziale, letto queen e servizi curati per una permanenza semplice e riposante.',
    details: ['Letto queen', 'Bagno privato', 'Aria condizionata'],
  },
  {
    name: 'Comfort Twin',
    summary: 'Doppia con letti separati, pratica per colleghi, amici e viaggiatori sportivi.',
    details: ['Letti twin', 'Scrivania', 'Parcheggio esterno gratuito'],
  },
  {
    name: 'Superior Queen e King',
    summary: 'Camere piu ampie, anche con balcone, pensate per chi desidera piu luce e respiro.',
    details: ['Queen o king', 'Balcone in alcune camere', 'Affacci sui giardini'],
  },
  {
    name: 'Deluxe',
    summary: 'Spazi eleganti e maggiore comfort, disponibili anche con balcone per un soggiorno piu lento.',
    details: ['Versione con balcone', 'Minibar', 'Sconto SPA trattamenti'],
  },
  {
    name: 'Tripla, Junior Suite e Suite',
    summary: 'Soluzioni flessibili per famiglie, coppie e soggiorni speciali, inclusa la scenografica Tower Room.',
    details: ['Fino a 4 ospiti', 'Suite Classic', 'Tower Room'],
  },
  {
    name: 'Spa Suite',
    summary:
      'Junior Suite Superior da 35 m2, Suite Superior Gessi da 60 m2 e Suite Deluxe da 70 m2 con mini SPA privata.',
    details: ['Vasca idromassaggio', 'Sauna e bagno turco', 'Cromoterapia'],
  },
];

export const services = [
  'Wi-Fi gratuito',
  'Piscina estiva',
  'Palestra Technogym',
  'Parcheggio esterno gratuito',
  'Deposito bagagli',
  'Animali ammessi con supplemento di 10 euro al giorno',
  'Porsche Destination Charging',
  'Sconto 10% sui trattamenti SPA per gli ospiti',
];

export const experiences = [
  {
    title: 'SPA & Wellness',
    text:
      'Due piani dedicati al benessere, cabine design e percorso umido di due ore con sauna, bagno turco, doccia emozionale, cromoterapia, idromassaggio e area relax.',
    path: '/spa-benessere',
    image: images.spa,
  },
  {
    title: 'Ristorante e colazione',
    text:
      'La cucina dello Chef Piergiorgio Frodi valorizza Biella e il Piemonte: pasta fresca fatta a mano, risotti a km zero, vini biellesi e un buffet colazione in tre isole.',
    path: '/ristorante',
    image: images.restaurant,
  },
  {
    title: 'Sport & Activity',
    text:
      'Sei campi da padel, quattro campi da pickleball, e-bike, piscina estiva e palestra Technogym: un resort pensato anche per muoversi.',
    path: '/sport-activity',
    image: images.sport,
  },
  {
    title: 'Meeting ed eventi',
    text:
      'Sala Oropa da 245 m2, Sala Bike da 155 m2 e Saletta Les Oliviers da 30 m2 per incontri, team building, light lunch, aperitivi e business dinner.',
    path: '/meeting-eventi',
    image: images.meeting,
  },
];

export const offers = [
  {
    title: 'Fuga Romantica',
    price: 'da 289 euro',
    text: 'Un pacchetto pensato per rallentare insieme, tra soggiorno, benessere e atmosfera riservata.',
  },
  {
    title: 'Noi due',
    price: 'da 429 euro',
    text: 'Una proposta per coppie con esperienza piu completa e attenzione ai dettagli del soggiorno.',
  },
  {
    title: 'Notte da sogno',
    price: 'da 399 euro',
    text: 'Un momento speciale da regalare o vivere, con accento sul relax e sulla cura personale.',
  },
  {
    title: 'Gift Card benessere',
    price: 'su richiesta',
    text: 'Percorsi e trattamenti SPA acquistabili come regalo, con possibilita di integrare il soggiorno.',
  },
];

export const territoryPlaces = [
  'Santuario di Oropa, a circa 20 km',
  "Ricetto di Candelo, a pochi minuti d'auto",
  "Oasi Zegna, a meno di mezz'ora",
  'Lago di Viverone e Sacri Monti UNESCO',
  'Biella Citta Creativa UNESCO',
];

export const seo = {
  '/': {
    title: 'Relais Santo Stefano | Resort 4 stelle a Sandigliano, Biella',
    description:
      'Relais Santo Stefano: resort 4 stelle alle porte di Biella con 75 camere, SPA, ristorante, sport, piscina e sale meeting.',
  },
  '/camere-suite': {
    title: 'Camere e Suite | Relais Santo Stefano',
    description:
      'Scopri camere, suite e Spa Suite del Relais Santo Stefano: 75 soluzioni con Wi-Fi, piscina, palestra e servizi per soggiorni business e leisure.',
  },
  '/spa-benessere': {
    title: 'SPA e Benessere | Relais Santo Stefano',
    description:
      'Percorso SPA di due ore con sauna, bagno turco, doccia emozionale, cromoterapia, idromassaggio e trattamenti su prenotazione.',
  },
  '/ristorante': {
    title: 'Ristorante e Colazione | Relais Santo Stefano',
    description:
      'Ristorante aperto su prenotazione, cucina biellese dello Chef Piergiorgio Frodi, vini piemontesi e colazione continentale.',
  },
  '/sport-activity': {
    title: 'Sport e Activity | Relais Santo Stefano',
    description:
      'Padel, pickleball, e-bike, piscina estiva e palestra Technogym: attivita per ospiti hotel e visitatori esterni.',
  },
  '/meeting-eventi': {
    title: 'Meeting ed Eventi | Relais Santo Stefano',
    description:
      'Sale meeting a Sandigliano: Sala Oropa, Sala Bike e Les Oliviers con servizi per eventi aziendali, light lunch e business dinner.',
  },
  '/territorio': {
    title: 'Territorio Biellese | Relais Santo Stefano',
    description:
      'Dal Relais Santo Stefano scopri Oropa, Ricetto di Candelo, Oasi Zegna, Lago di Viverone e i luoghi UNESCO del Biellese.',
  },
  '/offerte': {
    title: 'Offerte e Gift Card | Relais Santo Stefano',
    description:
      'Pacchetti romantici, soggiorni benessere e gift card del Relais Santo Stefano. Prezzi e disponibilita da verificare con la struttura.',
  },
  '/contatti': {
    title: 'Contatti | Relais Santo Stefano Sandigliano',
    description:
      'Contatta Relais Santo Stefano: Via Garibaldi 5, Sandigliano BI. Hotel +39 015 2496154, SPA +39 015 691470.',
  },
};

export const cookieCopy = {
  title: 'Cookie essenziali',
  text:
    'Questo prototipo usa solo funzionalita tecniche necessarie alla navigazione. Per dettagli consulta la privacy policy.',
  accept: 'Accetta',
  privacy: 'Privacy',
};

export function getSeo(pathname) {
  return seo[pathname] || seo[aliasRedirects[pathname]] || seo['/'];
}

export function createHotelSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: brand.name,
    url: brand.baseUrl,
    telephone: contact.phone,
    email: contact.email,
    starRating: {
      '@type': 'Rating',
      ratingValue: '4',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Garibaldi 5',
      postalCode: '13876',
      addressLocality: 'Sandigliano',
      addressRegion: 'BI',
      addressCountry: 'IT',
    },
    amenityFeature: services.map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true,
    })),
    image: images.hero.src,
  };
}
