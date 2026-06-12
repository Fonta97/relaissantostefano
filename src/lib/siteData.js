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
  import.meta.env.VITE_BOOKING_URL?.trim() ||
  'https://www.simplebooking.it/ibe2/hotel/8176?lang=IT&cur=EUR';

export const bookingManageUrl = bookingUrl;

const clamp = (value, min, max) => Math.min(max, Math.max(min, Number(value) || min));

export function toDateInputValue(date) {
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 10);
}

export function addDays(date, days) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);
  return nextDate;
}

export function getDefaultBookingDates(referenceDate = new Date()) {
  const checkInDate = addDays(referenceDate, 1);
  return {
    checkIn: toDateInputValue(checkInDate),
    checkOut: toDateInputValue(addDays(checkInDate, 1)),
  };
}

function buildGuests(adults, rooms) {
  const safeRooms = clamp(rooms, 1, 4);
  const safeAdults = clamp(adults, safeRooms, 8);
  let remainingAdults = safeAdults;

  return Array.from({ length: safeRooms }, (_, index) => {
    const roomsLeft = safeRooms - index;
    const adultsInRoom = Math.ceil(remainingAdults / roomsLeft);
    remainingAdults -= adultsInRoom;
    return Array.from({ length: adultsInRoom }, () => 'A').join(',');
  }).join('|');
}

export function buildBookingUrl({
  checkIn,
  checkOut,
  adults = 2,
  rooms = 1,
  promoCode = '',
  language = 'IT',
} = {}) {
  const url = new URL(bookingUrl);
  url.searchParams.set('lang', language.toUpperCase());
  url.searchParams.set('cur', url.searchParams.get('cur') || 'EUR');

  if (checkIn) {
    url.searchParams.set('in', checkIn);
  }

  if (checkOut) {
    url.searchParams.set('out', checkOut);
  }

  url.searchParams.set('guests', buildGuests(adults, rooms));

  const coupon = promoCode.trim();
  if (coupon) {
    url.searchParams.set('coupon', coupon);
  } else {
    url.searchParams.delete('coupon');
  }

  return url.toString();
}

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

const relaisImage = (file) => `/images/relais/${file}`;

const image = (file, alt, width, height, objectPosition = 'center center', extra = {}) => ({
  src: relaisImage(file),
  alt,
  width,
  height,
  objectPosition,
  ...extra,
});

export const images = {
  logo: {
    light: image('logo-rss.png', brand.name, 269, 118),
    dark: image('logo-rss-black.png', brand.name, 269, 118),
    mark: image('logo-icon.png', '', 200, 265),
  },
  hero: image(
    'drive/foto-struttura-esterno/hero-facade.webp',
    'Facciata del Relais Santo Stefano a Sandigliano immersa nel verde.',
    2200,
    1467,
    'center 52%'
  ),
  pool: image(
    'drive/piscina/piscina-estiva.webp',
    'Piscina estiva del Relais Santo Stefano con lettini e giardino.',
    2200,
    1467,
    'center 52%'
  ),
  room: image(
    'drive/shooting-2024/servizio-camera.webp',
    'Servizio in camera al Relais Santo Stefano con ospiti in area lounge.',
    2200,
    1467,
    'center 45%'
  ),
  roomBalcony: image(
    'drive/camere-orbassano/balcone.webp',
    'Affaccio dai balconi delle camere del Relais Santo Stefano verso i giardini interni.',
    1600,
    1066,
    'center 45%'
  ),
  roomSingola: image(
    'drive/camere-orbassano/singola.webp',
    'Camera Singola del Relais Santo Stefano con arredi caldi e letto singolo.',
    1600,
    1037
  ),
  roomStandardQueen: image(
    'drive/camere-orbassano/standard-queen.webp',
    'Camera Standard Queen del Relais Santo Stefano con vista sui giardini.',
    1600,
    1066
  ),
  roomComfortTwin: image(
    'drive/camere-orbassano/comfort-twin.webp',
    'Camera Comfort Twin del Relais Santo Stefano con due letti separati.',
    1600,
    1066
  ),
  roomSuperiorQueen: image(
    'drive/camere-orbassano/superior-queen-balcone.webp',
    'Camera Superior Queen con balcone del Relais Santo Stefano.',
    1600,
    1066
  ),
  roomSuperiorKing: image(
    'drive/camere-orbassano/superior-king-balcone.webp',
    'Camera Superior King con balcone affacciata sul verde del Relais Santo Stefano.',
    1600,
    1066,
    'center 45%'
  ),
  roomDeluxe: image(
    'drive/camere-orbassano/deluxe.webp',
    'Camera Deluxe del Relais Santo Stefano con letto king size.',
    1600,
    1066
  ),
  roomDeluxeBalcony: image(
    'drive/camere-orbassano/deluxe-balcone.webp',
    'Camera Deluxe con balcone e vista piscina del Relais Santo Stefano.',
    1600,
    1066
  ),
  roomTripla: image(
    'drive/camere-orbassano/tripla.webp',
    'Camera Tripla del Relais Santo Stefano con spazi ampi e arredi accoglienti.',
    1600,
    1066
  ),
  roomJuniorSuite: image(
    'drive/camere-orbassano/junior-suite.webp',
    'Junior Suite del Relais Santo Stefano con camera spaziosa e luce naturale.',
    1600,
    1066
  ),
  roomJuniorSuiteSuperior: image(
    'drive/camere-orbassano/junior-suite-superior-new.webp',
    'Junior Suite Superior New del Relais Santo Stefano con arredi contemporanei.',
    1800,
    1496,
    'center 48%'
  ),
  suite: image(
    'drive/camere-orbassano/suite-classic.webp',
    'Suite Classic del Relais Santo Stefano con arredi caldi e atmosfera riservata.',
    1600,
    1066
  ),
  roomSuiteClassic: image(
    'drive/camere-orbassano/suite-classic.webp',
    'Suite Classic del Relais Santo Stefano con zona giorno e arredi in legno.',
    1600,
    1066
  ),
  roomTower: image(
    'drive/camere-orbassano/tower-room.webp',
    'Tower Room del Relais Santo Stefano con atmosfera panoramica nella torre.',
    1365,
    2048,
    'center 35%'
  ),
  roomSpaSuite: image(
    'drive/camere-orbassano/suite-spa-gessi.webp',
    'Spa Suite del Relais Santo Stefano con area benessere privata in camera.',
    1800,
    914,
    'center 48%'
  ),
  roomSuiteDeluxe: image(
    'drive/camere-orbassano/suite-deluxe-604.webp',
    'Suite Deluxe del Relais Santo Stefano con SPA privata in camera.',
    1800,
    859,
    'center 45%'
  ),
  spa: image(
    'drive/spa/spa-trattamenti.webp',
    'Area benessere del Relais Santo Stefano con idromassaggio e lettini relax.',
    1800,
    1200,
    'center 52%'
  ),
  spaThumb: image(
    'drive/spa/spa-relax.webp',
    'Sauna e area relax della SPA del Relais Santo Stefano.',
    2200,
    3300,
    'center 42%'
  ),
  spaMassage: image(
    'drive/spa/spa-area-umida.webp',
    'Area umida della SPA del Relais Santo Stefano con sauna e lettini.',
    1800,
    1200,
    'center 50%'
  ),
  restaurant: image(
    'drive/cena-e-cucina/ristorante-cena.webp',
    'Cena servita al ristorante del Relais Santo Stefano con vista sul verde.',
    2200,
    1467,
    'center 48%'
  ),
  breakfast: image(
    'drive/colazione/buffet-colazione.webp',
    'Colazione al Relais Santo Stefano con prodotti serviti al tavolo.',
    2200,
    1467,
    'center 48%'
  ),
  sport: image(
    'drive/padel-palestra/padel.webp',
    'Campi da padel del centro sportivo Santo Stefano.',
    2200,
    1467,
    'center 52%'
  ),
  bike: image(
    'drive/e-bike/e-bike.webp',
    'Dettaglio delle e-bike disponibili al Relais Santo Stefano.',
    1800,
    1200,
    'center 50%'
  ),
  meeting: image(
    'drive/sala-meeting-ristorante/meeting.webp',
    'Sala meeting e ristorante del Relais Santo Stefano allestita per eventi.',
    2200,
    1467,
    'center 50%'
  ),
  meetingOropa: image(
    'drive/sala-meeting-ristorante/sala-oropa.webp',
    'Sala Oropa del Relais Santo Stefano con sedute e schermi per convegni.',
    1800,
    1200,
    'center 48%'
  ),
  territory: image(
    'drive/foto-struttura-esterno/hero-facade.webp',
    'Vista esterna del Relais Santo Stefano immerso nel verde.',
    2200,
    1467,
    'center 50%'
  ),
  offers: image(
    'drive/shooting-2024/lifestyle-relax.webp',
    'Ospiti durante un momento relax nell area benessere del Relais Santo Stefano.',
    1800,
    1200,
    'center 48%'
  ),
  welcome: image(
    'drive/shooting-2024/servizio-camera.webp',
    'Accoglienza e servizio in camera al Relais Santo Stefano.',
    2200,
    1467,
    'center 45%'
  ),
  welcomePortrait: image(
    'drive/shooting-2024/dettaglio-ospitalita.webp',
    'Dettaglio di ospitalita e benessere al Relais Santo Stefano.',
    1800,
    1200,
    'center 45%'
  ),
  barAperitivo: image(
    'drive/bar-e-aperitivo/aperitivo.webp',
    'Aperitivo servito nelle sale del Relais Santo Stefano.',
    1800,
    1200,
    'center 50%'
  ),
};

images.gallery = [
  {
    ...images.hero,
    caption: 'Ingresso e torre',
  },
  {
    ...images.pool,
    caption: 'Piscina estiva',
  },
  {
    ...images.room,
    caption: 'Camere e SPA Lodge',
  },
  {
    ...images.suite,
    caption: 'Suite e ospitalità',
  },
  {
    ...images.spa,
    caption: 'SPA e relax',
  },
  {
    ...images.restaurant,
    caption: 'Cucina territoriale',
  },
  {
    ...images.sport,
    caption: 'Padel e activity',
  },
  {
    ...images.meeting,
    caption: 'Meeting ed eventi',
  },
  {
    ...images.barAperitivo,
    caption: 'Bar e aperitivo',
  },
  {
    ...images.breakfast,
    caption: 'Colazione',
  },
];

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

export const roomAmenities = [
  'Cassaforte',
  'Aria condizionata',
  'Telefono',
  'Set di cortesia',
  'TV-SAT',
  'Ciabattine',
  'Frigobar',
  'Scrivania da lavoro',
  'Asciugacapelli',
  'Accappatoio',
];

export const roomRequestAmenities = [
  'Servizio sveglia',
  'Accappatoio',
  'Bollitore con selezione di te e tisane',
];

export const rooms = [
  {
    name: 'Singola',
    eyebrow: 'Compatta e silenziosa',
    summary:
      'Completamente insonorizzata, pensata per garantire massimo comfort al miglior prezzo durante soggiorni business o passaggi brevi.',
    details: ['Letto singolo/alla francese', 'Vasca/doccia', '15 m2', 'Moquette', 'Finestra/porta finestra'],
    image: images.roomSingola,
  },
  {
    name: 'Standard Queen',
    eyebrow: 'Classica per lavoro o vacanza',
    summary:
      'Letto queen-size, ambienti insonorizzati e vista sulle montagne o sul giardino: una scelta equilibrata per riposare bene.',
    details: ['Letto queen size', 'Vasca', '20 m2', 'Moquette', 'Finestra/porta finestra'],
    image: images.roomStandardQueen,
  },
  {
    name: 'Comfort Twin',
    eyebrow: 'Due letti separati',
    summary:
      'Ideale per colleghi, amici e viaggiatori sportivi: due letti separati, comfort essenziali e affaccio su montagne o giardino.',
    details: ['Letti separati', 'Vasca', '20 m2', 'Moquette', 'Finestra/porta finestra'],
    image: images.roomComfortTwin,
  },
  {
    name: 'Superior Queen con balcone',
    eyebrow: 'Balcone e letto queen',
    summary:
      'Camera insonorizzata con letto queen-size e balcone, adatta a soggiorni leisure o business con piu luce e respiro.',
    details: ['Letto queen size', 'Vasca', '20 m2', 'Moquette', 'Balcone'],
    image: images.roomSuperiorQueen,
  },
  {
    name: 'Superior King con balcone',
    eyebrow: 'Balcone e letto king',
    summary:
      'Letto king-size, balcone e comfort curati per chi cerca una camera luminosa con vista sulle montagne o sui giardini.',
    details: ['Letto king size', 'Vasca', '20 m2', 'Moquette', 'Balcone'],
    image: images.roomSuperiorKing,
  },
  {
    name: 'Deluxe',
    eyebrow: 'Relax e doccia multigetto',
    summary:
      'Camera con letto king-size, affaccio sul giardino degli ulivi e sulla piscina, dotata di doccia walk-in con multigetto.',
    details: ['Letto king size', 'Doccia walk-in multigetto', '20 m2', 'Finestra'],
    image: images.roomDeluxe,
  },
  {
    name: 'Deluxe con balcone',
    eyebrow: 'Vista piscina',
    summary:
      'Versione con balcone della Deluxe: letto king-size, vista piscina e giardino degli ulivi, doccia walk-in multigetto.',
    details: ['Letto king size', 'Doccia walk-in multigetto', '20 m2', 'Moquette', 'Balcone con vista piscina'],
    image: images.roomDeluxeBalcony,
  },
  {
    name: 'Tripla',
    eyebrow: 'Per tre ospiti',
    summary:
      "Spaziosa e insonorizzata, con tre letti separati o configurazione matrimoniale piu letto: una soluzione comoda per soggiorni condivisi.",
    details: ['1 matrimoniale + letto / 3 letti', 'Vasca', '30 m2', 'Moquette', 'Finestra'],
    image: images.roomTripla,
  },
  {
    name: 'Junior Suite',
    eyebrow: 'Spaziosa per la coppia',
    summary:
      "Una camera ampia e insonorizzata, pensata per un soggiorno di coppia all'insegna dello charme e della comodita.",
    details: ['Letto king size', '30 m2', 'Finestra'],
    image: images.roomJuniorSuite,
  },
  {
    name: 'Suite Classic',
    eyebrow: 'Ingresso indipendente',
    summary:
      'Suite ampia e insonorizzata con arredi in legno, camera matrimoniale e soggiorno con divano letto per ospitare fino a 2 bambini.',
    details: ['Letto king size', 'Vasca', '40 m2', 'Moquette', 'Salottino e balcone'],
    image: images.roomSuiteClassic,
  },
  {
    name: 'Tower Room',
    eyebrow: 'Nella torre del Relais',
    summary:
      'Situata nella torre, offre vista panoramica a 360 gradi sulle montagne e sulla campagna, con letto a baldacchino al piano superiore.',
    details: ['Letto a baldacchino', '30 m2', 'Vista panoramica 360 gradi'],
    image: images.roomTower,
  },
];

export const spaSuites = [
  {
    name: 'Junior Suite Superior New',
    summary:
      'Adiacente alla SPA, moderna e confortevole, con doccia Gessi a effetti multipli: acqua a pioggia, vapore, cascata e getti idromassaggio orizzontali.',
    details: ['Letto king size', 'Doccia walk-in', '35 m2', 'Parquet', 'Balcone'],
    image: images.roomJuniorSuiteSuperior,
  },
  {
    name: 'Suite Superior Gessi New',
    summary:
      'Fino a 4 persone, con salotto di design, vasca rettangolare in camera e doccia Gessi a pioggia, vapore, cascata e getti idromassaggio.',
    details: ['Letto king size', 'Doccia e vasca rettangolare', '60 m2', 'Parquet', 'Balcone'],
    image: images.roomSpaSuite,
  },
  {
    name: 'Suite Deluxe New',
    summary:
      'La suite piu esclusiva: mini SPA privata in camera con vasca idromassaggio a 2 posti, sauna, bagno turco e cromoterapia.',
    details: ['Letto king size', 'SPA privata in camera', '70 m2', 'Parquet', 'Balcone'],
    image: images.roomSuiteDeluxe,
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
      'Sala Oropa da 245 m², Sala Bike da 155 m² e Saletta Les Oliviers da 30 m² per incontri, team building, light lunch, aperitivi e business dinner.',
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
    text: 'Una proposta per coppie con esperienza più completa e attenzione ai dettagli del soggiorno.',
  },
  {
    title: 'Notte da sogno',
    price: 'da 399 euro',
    text: 'Un momento speciale da regalare o vivere, con accento sul relax e sulla cura personale.',
  },
  {
    title: 'Gift Card benessere',
    price: 'su richiesta',
    text: 'Percorsi e trattamenti SPA acquistabili come regalo, con possibilità di integrare il soggiorno.',
  },
];

export const territoryPlaces = [
  'Santuario di Oropa, a circa 20 km',
  "Ricetto di Candelo, a pochi minuti d'auto",
  "Oasi Zegna, a meno di mezz'ora",
  'Lago di Viverone e Sacri Monti UNESCO',
  'Biella Città Creativa UNESCO',
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
      'Scopri tutte le tipologie del Relais Santo Stefano: Singola, Standard Queen, Comfort Twin, Superior, Deluxe, Tripla, Junior Suite, Suite Classic, Tower Room e Spa Suite.',
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
      'Padel, pickleball, e-bike, piscina estiva e palestra Technogym: attività per ospiti hotel e visitatori esterni.',
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
      'Pacchetti romantici, soggiorni benessere e gift card del Relais Santo Stefano. Prezzi e disponibilità da verificare con la struttura.',
  },
  '/contatti': {
    title: 'Contatti | Relais Santo Stefano Sandigliano',
    description:
      'Contatta Relais Santo Stefano: Via Garibaldi 5, Sandigliano BI. Hotel +39 015 2496154, SPA +39 015 691470.',
  },
};

export const cookieCopy = {
  title: 'Cookie essenziali',
  text: 'Usiamo solo cookie tecnici e la preferenza del banner. Per dettagli consulta la privacy policy.',
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
