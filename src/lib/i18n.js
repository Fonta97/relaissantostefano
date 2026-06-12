import { useLocation } from 'react-router-dom';

import {
  aliasRedirects,
  brand,
  contact,
  cookieCopy as itCookieCopy,
  experiences as itExperiences,
  images,
  offers as itOffers,
  quickFacts as itQuickFacts,
  roomAmenities as itRoomAmenities,
  roomRequestAmenities as itRoomRequestAmenities,
  rooms as itRooms,
  seo as itSeo,
  services as itServices,
  spaSuites as itSpaSuites,
  territoryPlaces as itTerritoryPlaces,
} from './siteData';

export const defaultLanguage = 'it';

export const languageOptions = [
  { code: 'it', label: 'IT', name: 'Italiano', locale: 'it-IT', booking: 'IT' },
  { code: 'en', label: 'EN', name: 'English', locale: 'en-GB', booking: 'EN' },
  { code: 'de', label: 'DE', name: 'Deutsch', locale: 'de-DE', booking: 'DE' },
  { code: 'fr', label: 'FR', name: 'Français', locale: 'fr-FR', booking: 'FR' },
];

export const supportedLanguageCodes = languageOptions.map((language) => language.code);

function withPaths(items) {
  return items.map((item) => ({ ...item }));
}

const baseNavigation = [
  ['/', 'Home'],
  ['/camere-suite', 'Camere & Suite'],
  ['/spa-benessere', 'SPA'],
  ['/ristorante', 'Ristorante'],
  ['/sport-activity', 'Sport'],
  ['/meeting-eventi', 'Meeting'],
  ['/territorio', 'Territorio'],
  ['/offerte', 'Offerte'],
  ['/contatti', 'Contatti'],
];

function navigation(labels, shortLabels = {}) {
  return baseNavigation.map(([path, fallback], index) => ({
    path,
    label: labels[index] || fallback,
    shortLabel: shortLabels[index] || labels[index] || fallback,
  }));
}

const englishRooms = [
  {
    name: 'Single room',
    eyebrow: 'Compact and quiet',
    summary:
      'Fully soundproofed and designed for maximum comfort at the best value during business stays or short stopovers.',
    details: ['Single/French bed', 'Bathtub/shower', '15 m2', 'Carpet', 'Window/French window'],
    image: images.roomSingola,
  },
  {
    name: 'Standard Queen',
    eyebrow: 'Classic for work or leisure',
    summary:
      'Queen-size bed, soundproofed spaces and views of the mountains or garden: a balanced choice for proper rest.',
    details: ['Queen-size bed', 'Bathtub', '20 m2', 'Carpet', 'Window/French window'],
    image: images.roomStandardQueen,
  },
  {
    name: 'Comfort Twin',
    eyebrow: 'Two separate beds',
    summary:
      'Ideal for colleagues, friends and sports travellers: twin beds, essential comfort and views of the mountains or garden.',
    details: ['Twin beds', 'Bathtub', '20 m2', 'Carpet', 'Window/French window'],
    image: images.roomComfortTwin,
  },
  {
    name: 'Superior Queen with balcony',
    eyebrow: 'Balcony and queen bed',
    summary:
      'Soundproofed room with queen-size bed and balcony, suited to leisure or business stays with more light and breathing room.',
    details: ['Queen-size bed', 'Bathtub', '20 m2', 'Carpet', 'Balcony'],
    image: images.roomSuperiorQueen,
  },
  {
    name: 'Superior King with balcony',
    eyebrow: 'Balcony and king bed',
    summary:
      'King-size bed, balcony and thoughtful comfort for guests looking for a bright room overlooking the mountains or gardens.',
    details: ['King-size bed', 'Bathtub', '20 m2', 'Carpet', 'Balcony'],
    image: images.roomSuperiorKing,
  },
  {
    name: 'Deluxe',
    eyebrow: 'Relax and multi-jet shower',
    summary:
      'Room with king-size bed, views of the olive garden and pool, and walk-in shower with multi-jet system.',
    details: ['King-size bed', 'Multi-jet walk-in shower', '20 m2', 'Window'],
    image: images.roomDeluxe,
  },
  {
    name: 'Deluxe with balcony',
    eyebrow: 'Pool view',
    summary:
      'The balcony version of the Deluxe: king-size bed, pool and olive garden view, and multi-jet walk-in shower.',
    details: ['King-size bed', 'Multi-jet walk-in shower', '20 m2', 'Carpet', 'Balcony with pool view'],
    image: images.roomDeluxeBalcony,
  },
  {
    name: 'Triple room',
    eyebrow: 'For three guests',
    summary:
      'Spacious and soundproofed, with three separate beds or double-plus-bed setup: a comfortable room for shared stays.',
    details: ['Double + bed / 3 beds', 'Bathtub', '30 m2', 'Carpet', 'Window'],
    image: images.roomTripla,
  },
  {
    name: 'Junior Suite',
    eyebrow: 'Spacious for couples',
    summary:
      'A generous, soundproofed room for couples looking for charm, space and comfort.',
    details: ['King-size bed', '30 m2', 'Window'],
    image: images.roomJuniorSuite,
  },
  {
    name: 'Suite Classic',
    eyebrow: 'Independent entrance',
    summary:
      'Large soundproofed suite with wood furnishings, double bedroom and living room with sofa bed for up to 2 children.',
    details: ['King-size bed', 'Bathtub', '40 m2', 'Carpet', 'Sitting area and balcony'],
    image: images.roomSuiteClassic,
  },
  {
    name: 'Tower Room',
    eyebrow: 'Inside the relais tower',
    summary:
      'Located in the tower, with 360-degree views over the mountains and countryside and a canopy bed on the upper floor.',
    details: ['Canopy bed', '30 m2', '360-degree panoramic view'],
    image: images.roomTower,
  },
];

const germanRooms = [
  {
    name: 'Einzelzimmer',
    eyebrow: 'Kompakt und ruhig',
    summary:
      'Vollständig schallisoliert und auf maximalen Komfort zu einem fairen Preis ausgelegt, ideal für Geschäftsreisen oder kurze Aufenthalte.',
    details: ['Einzelbett/französisches Bett', 'Wanne/Dusche', '15 m2', 'Teppichboden', 'Fenster/Fenstertür'],
    image: images.roomSingola,
  },
  {
    name: 'Standard Queen',
    eyebrow: 'Klassisch für Arbeit oder Urlaub',
    summary:
      'Queen-Size-Bett, schallisolierte Räume und Blick auf Berge oder Garten: eine ausgewogene Wahl für erholsame Nächte.',
    details: ['Queen-Size-Bett', 'Badewanne', '20 m2', 'Teppichboden', 'Fenster/Fenstertür'],
    image: images.roomStandardQueen,
  },
  {
    name: 'Comfort Twin',
    eyebrow: 'Zwei getrennte Betten',
    summary:
      'Ideal für Kollegen, Freunde und Sportreisende: getrennte Betten, grundlegender Komfort und Blick auf Berge oder Garten.',
    details: ['Getrennte Betten', 'Badewanne', '20 m2', 'Teppichboden', 'Fenster/Fenstertür'],
    image: images.roomComfortTwin,
  },
  {
    name: 'Superior Queen mit Balkon',
    eyebrow: 'Balkon und Queen-Bett',
    summary:
      'Schallisoliertes Zimmer mit Queen-Size-Bett und Balkon, geeignet für Freizeit- oder Geschäftsaufenthalte mit mehr Licht.',
    details: ['Queen-Size-Bett', 'Badewanne', '20 m2', 'Teppichboden', 'Balkon'],
    image: images.roomSuperiorQueen,
  },
  {
    name: 'Superior King mit Balkon',
    eyebrow: 'Balkon und King-Bett',
    summary:
      'King-Size-Bett, Balkon und sorgfältiger Komfort für Gäste, die ein helles Zimmer mit Blick auf Berge oder Gärten suchen.',
    details: ['King-Size-Bett', 'Badewanne', '20 m2', 'Teppichboden', 'Balkon'],
    image: images.roomSuperiorKing,
  },
  {
    name: 'Deluxe',
    eyebrow: 'Relax und Multijet-Dusche',
    summary:
      'Zimmer mit King-Size-Bett, Blick auf Olivengarten und Pool sowie Walk-in-Dusche mit Multijet-System.',
    details: ['King-Size-Bett', 'Multijet-Walk-in-Dusche', '20 m2', 'Fenster'],
    image: images.roomDeluxe,
  },
  {
    name: 'Deluxe mit Balkon',
    eyebrow: 'Poolblick',
    summary:
      'Die Deluxe-Version mit Balkon: King-Size-Bett, Blick auf Pool und Olivengarten sowie Multijet-Walk-in-Dusche.',
    details: ['King-Size-Bett', 'Multijet-Walk-in-Dusche', '20 m2', 'Teppichboden', 'Balkon mit Poolblick'],
    image: images.roomDeluxeBalcony,
  },
  {
    name: 'Dreibettzimmer',
    eyebrow: 'Für drei Gäste',
    summary:
      'Geräumig und schallisoliert, mit drei getrennten Betten oder Doppelbett plus Zusatzbett: bequem für gemeinsame Aufenthalte.',
    details: ['Doppelbett + Bett / 3 Betten', 'Badewanne', '30 m2', 'Teppichboden', 'Fenster'],
    image: images.roomTripla,
  },
  {
    name: 'Junior Suite',
    eyebrow: 'Geräumig für Paare',
    summary:
      'Ein großzügiges, schallisoliertes Zimmer für Paare, die Charme, Platz und Komfort suchen.',
    details: ['King-Size-Bett', '30 m2', 'Fenster'],
    image: images.roomJuniorSuite,
  },
  {
    name: 'Suite Classic',
    eyebrow: 'Eigener Eingang',
    summary:
      'Große schallisolierte Suite mit Holzmöbeln, Doppelzimmer und Wohnbereich mit Schlafsofa für bis zu 2 Kinder.',
    details: ['King-Size-Bett', 'Badewanne', '40 m2', 'Teppichboden', 'Sitzecke und Balkon'],
    image: images.roomSuiteClassic,
  },
  {
    name: 'Tower Room',
    eyebrow: 'Im Turm des Relais',
    summary:
      'Im Turm gelegen, mit 360-Grad-Blick auf Berge und Landschaft und einem Himmelbett im oberen Bereich.',
    details: ['Himmelbett', '30 m2', '360-Grad-Panoramablick'],
    image: images.roomTower,
  },
];

const frenchRooms = [
  {
    name: 'Chambre Single',
    eyebrow: 'Compacte et silencieuse',
    summary:
      'Entièrement insonorisée, conçue pour offrir un confort maximal au meilleur prix lors de séjours business ou de courtes étapes.',
    details: ['Lit simple/à la française', 'Baignoire/douche', '15 m2', 'Moquette', 'Fenêtre/porte-fenêtre'],
    image: images.roomSingola,
  },
  {
    name: 'Standard Queen',
    eyebrow: 'Classique pour travail ou vacances',
    summary:
      'Lit queen-size, espaces insonorisés et vue sur les montagnes ou le jardin : un choix équilibré pour bien se reposer.',
    details: ['Lit queen size', 'Baignoire', '20 m2', 'Moquette', 'Fenêtre/porte-fenêtre'],
    image: images.roomStandardQueen,
  },
  {
    name: 'Comfort Twin',
    eyebrow: 'Deux lits séparés',
    summary:
      'Idéale pour collègues, amis et voyageurs sportifs : lits séparés, confort essentiel et vue sur les montagnes ou le jardin.',
    details: ['Lits séparés', 'Baignoire', '20 m2', 'Moquette', 'Fenêtre/porte-fenêtre'],
    image: images.roomComfortTwin,
  },
  {
    name: 'Superior Queen avec balcon',
    eyebrow: 'Balcon et lit queen',
    summary:
      'Chambre insonorisée avec lit queen-size et balcon, adaptée aux séjours loisirs ou business avec plus de lumière.',
    details: ['Lit queen size', 'Baignoire', '20 m2', 'Moquette', 'Balcon'],
    image: images.roomSuperiorQueen,
  },
  {
    name: 'Superior King avec balcon',
    eyebrow: 'Balcon et lit king',
    summary:
      'Lit king-size, balcon et confort soigné pour ceux qui souhaitent une chambre lumineuse avec vue sur les montagnes ou les jardins.',
    details: ['Lit king size', 'Baignoire', '20 m2', 'Moquette', 'Balcon'],
    image: images.roomSuperiorKing,
  },
  {
    name: 'Deluxe',
    eyebrow: 'Relax et douche multijets',
    summary:
      "Chambre avec lit king-size, vue sur le jardin d'oliviers et la piscine, et douche walk-in multijets.",
    details: ['Lit king size', 'Douche walk-in multijets', '20 m2', 'Fenêtre'],
    image: images.roomDeluxe,
  },
  {
    name: 'Deluxe avec balcon',
    eyebrow: 'Vue piscine',
    summary:
      "La version avec balcon de la Deluxe : lit king-size, vue piscine et jardin d'oliviers, douche walk-in multijets.",
    details: ['Lit king size', 'Douche walk-in multijets', '20 m2', 'Moquette', 'Balcon avec vue piscine'],
    image: images.roomDeluxeBalcony,
  },
  {
    name: 'Chambre Triple',
    eyebrow: 'Pour trois hôtes',
    summary:
      'Spacieuse et insonorisée, avec trois lits séparés ou configuration double plus lit : une solution confortable pour les séjours partagés.',
    details: ['1 double + lit / 3 lits', 'Baignoire', '30 m2', 'Moquette', 'Fenêtre'],
    image: images.roomTripla,
  },
  {
    name: 'Junior Suite',
    eyebrow: 'Spacieuse pour le couple',
    summary:
      'Une chambre ample et insonorisée pour un séjour en couple placé sous le signe du charme et du confort.',
    details: ['Lit king size', '30 m2', 'Fenêtre'],
    image: images.roomJuniorSuite,
  },
  {
    name: 'Suite Classic',
    eyebrow: 'Entrée indépendante',
    summary:
      "Grande suite insonorisée avec mobilier en bois, chambre double et salon avec canapé-lit pouvant accueillir jusqu'à 2 enfants.",
    details: ['Lit king size', 'Baignoire', '40 m2', 'Moquette', 'Salon et balcon'],
    image: images.roomSuiteClassic,
  },
  {
    name: 'Tower Room',
    eyebrow: 'Dans la tour du Relais',
    summary:
      'Située dans la tour, avec vue panoramique à 360 degrés sur les montagnes et la campagne, et lit à baldaquin à l’étage.',
    details: ['Lit à baldaquin', '30 m2', 'Vue panoramique 360 degrés'],
    image: images.roomTower,
  },
];

const translatedContent = {
  it: {
    locale: 'it-IT',
    bookingLanguage: 'IT',
    navigation: navigation(['Home', 'Camere & Suite', 'SPA', 'Ristorante', 'Sport', 'Meeting', 'Territorio', 'Offerte', 'Contatti'], { 1: 'Camere' }),
    seo: itSeo,
    cookie: itCookieCopy,
    shared: {
      explore: 'Explore',
      book: 'Prenota',
      call: 'Chiama',
      offers: 'Offerte',
      discover: 'Scopri',
      writeUs: 'Scrivici',
      bookStay: 'Prenota soggiorno',
      askInfo: 'Chiedi informazioni',
      requestOffer: 'Richiedi offerta',
      openMap: 'Apri mappa',
      contacts: 'Contatti',
      hotelCall: 'Chiama hotel',
      goContacts: 'Vai ai contatti',
      skipContent: 'Salta al contenuto',
      language: 'Lingua',
      mainNavigation: 'Navigazione principale',
      menuNavigation: 'Menu',
    },
    header: {
      menu: 'Menu',
      openMenu: 'Apri menu',
      close: 'Chiudi',
      drawerLabel: 'Menu principale',
      drawerText: 'Accoglienza piemontese, relax, cucina e sport in un resort 4 stelle alle porte di Biella.',
    },
    footer: {
      eyebrow: 'Soggiorni, benessere, cucina e territorio',
      intro:
        'Relais Santo Stefano è in Via Garibaldi 5, a Sandigliano, alle porte di Biella: un resort 4 stelle con camere, SPA, ristorante, sport e sale meeting.',
      usefulLinks: 'Link utili',
      privacy: 'Privacy e cookie',
    },
    booking: {
      title: 'Prenota il soggiorno',
      heading: 'Date, ospiti e disponibilità.',
      intro:
        'Compila i dati: la verifica di disponibilità e tariffe avviene direttamente sul motore SimpleBooking del Relais Santo Stefano.',
      alert: 'Controlla i campi evidenziati prima di verificare la disponibilità.',
      labels: {
        checkIn: 'Data arrivo',
        checkOut: 'Data partenza',
        adults: 'Adulti',
        rooms: 'Camere',
        promo: 'Codice promo',
      },
      optional: 'Opzionale',
      roomHint: 'Almeno un adulto per camera.',
      openEngine: 'Apri booking engine',
      manage: 'Modifica/cancella prenotazione',
      dialogEyebrow: 'SimpleBooking',
      dialogTitle: 'Richiesta pronta',
      dialogText:
        'Abbiamo preparato i dati del soggiorno. La disponibilità reale e le tariffe vengono verificate sul motore ufficiale SimpleBooking, senza simulazioni nel sito.',
      nextStep: 'Il passaggio successivo apre SimpleBooking in una nuova scheda con date, adulti e camere già compilati.',
      openAvailability: 'Apri disponibilità',
      modifyCancel: 'Modifica/cancella',
      close: 'Chiudi',
      none: 'Nessuno',
      errors: {
        checkInRequired: 'Inserisci la data di arrivo.',
        checkInPast: 'La data di arrivo non può essere nel passato.',
        checkOutRequired: 'Inserisci la data di partenza.',
        checkOutAfter: "La partenza deve essere successiva all'arrivo.",
        adultsRange: 'Seleziona da 1 a 8 adulti.',
        roomsRange: 'Seleziona da 1 a 4 camere.',
        adultPerRoom: 'Serve almeno un adulto per camera.',
      },
      decrease: 'Diminuisci',
      increase: 'Aumenta',
    },
    quickFacts: itQuickFacts,
    rooms: itRooms,
    roomAmenities: itRoomAmenities,
    roomRequestAmenities: itRoomRequestAmenities,
    spaSuites: itSpaSuites,
    services: itServices,
    experiences: itExperiences,
    offers: itOffers,
    territoryPlaces: itTerritoryPlaces,
    home: {
      heroEyebrow: 'Accoglienza piemontese, relax e sport',
      heroTitle: 'A place to live',
      heroSubtitle:
        'Un resort 4 stelle ai piedi delle Alpi Biellesi, circondato da ampi spazi verdi, con piscina, campi da padel, SPA, cucina ricercata e vini del territorio.',
      introEyebrow: 'Un resort, tante esperienze',
      introTitle: 'Benvenuto al tempo buono.',
      introParagraphs: [
        'Un posto da vivere con tutto quello di cui hai bisogno: camere affacciate sul verde, una SPA curata, una cucina ricercata, piscina, padel e spazi per incontrarsi.',
        'La location resta concreta e riservata: alle porte di Biella, ai piedi delle Alpi Biellesi, con servizi per soggiorni leisure, business, sport ed eventi.',
      ],
      roomsEyebrow: 'Camere & Suite',
      roomsTitle: 'Un dolce riposo, sempre affacciato sul verde.',
      roomsText:
        'Con 75 camere di diverse tipologie, ogni soggiorno trova la sua misura: business, coppia, famiglia, wellness o viaggio sportivo. Wi-Fi gratuito e comfort essenziali accompagnano ogni scelta.',
      experiencesEyebrow: 'Esperienze',
      experiencesTitle: 'SPA, cucina, sport e lavoro: un solo indirizzo.',
      experiencesText:
        "Ogni area ha un'identità chiara: ricaricarsi, gustare il territorio, muoversi e incontrarsi senza uscire dal ritmo del relais.",
      servicesEyebrow: 'Servizi inclusi e plus',
      servicesTitle: 'Tutto quello che serve, con discrezione.',
      offersEyebrow: 'Offerte',
      offersTitle: 'Pacchetti per regalarsi tempo.',
      offersText:
        'Pacchetti romantici, soggiorni benessere e gift card diventano proposte chiare da verificare sempre con il relais per date, condizioni e disponibilità.',
      territoryEyebrow: 'Territorio',
      territoryTitle: 'Biella, Oropa e le colline intorno.',
      territoryText:
        'Dal relais si raggiungono in poco tempo alcuni dei luoghi più riconoscibili del Biellese, tra natura, borghi e patrimoni UNESCO.',
      galleryEyebrow: 'Galleria',
      galleryTitle: 'Il relais, in immagini reali.',
      galleryText:
        'Una selezione di fotografie ufficiali racconta struttura, camere, SPA, cucina, sport e spazi per eventi con un taglio ordinato e contemporaneo.',
      galleryModalTitle: 'Galleria Relais Santo Stefano',
      openImage: 'Apri immagine',
      modalLabels: { close: 'Chiudi', prev: 'Precedente', next: 'Successiva' },
    },
    roomsPage: {
      heroEyebrow: 'Camere & Suite',
      heroTitle: 'La stanza giusta, senza approssimazioni.',
      heroSubtitle:
        'Singole, queen, twin, camere con balcone, Deluxe, Junior Suite, Suite Classic, Tower Room e Spa Suite: ogni scelta ha misure, servizi e carattere propri.',
      checkAvailability: 'Verifica disponibilità',
      introEyebrow: 'Soggiornare',
      introTitle: '75 camere, tante tipologie per ogni esigenza.',
      introParagraphs: [
        'Ogni mattina, in qualunque camera alloggerai, ti affaccerai sul verde dei giardini che circondano il Relais Santo Stefano. Un bel modo di iniziare la giornata.',
        'Puoi scegliere tra camere essenziali, soluzioni con balcone, suite spaziose e camere della SPA Lodge con zona bagno accessoriata Gessi per un percorso benessere più privato.',
      ],
      amenitiesEyebrow: 'Dotazioni',
      amenitiesTitle: 'Comfort di base, richieste extra chiare.',
      amenitiesText:
        'Le dotazioni riprendono il dettaglio del sito originale: servizi presenti in camera e alcune attenzioni disponibili su richiesta.',
      onRequest: 'Su richiesta',
      typesEyebrow: 'Tipologie camere',
      typesTitle: 'Dal riposo essenziale alla Tower Room.',
      typesText:
        "Ogni card mantiene descrizione, metratura e dotazioni distintive, così l'ospite capisce subito quale camera è più adatta a viaggio di lavoro, coppia, famiglia o soggiorno speciale.",
      bookNow: 'Prenota ora',
      spaEyebrow: 'Spa Suite',
      spaTitle: 'SPA Lodge: tre livelli di benessere in camera.',
      spaText:
        'Le Spa Suite sono adiacenti alla SPA e aggiungono docce Gessi, vasche scenografiche o una vera mini SPA privata, senza fingere disponibilità o tariffe nel sito.',
      servicesEyebrow: 'Servizi camera e resort',
      servicesTitle: 'Comfort essenziale, plus concreti.',
    },
    experiencePages: null,
    offersPage: {
      heroEyebrow: 'Offerte e Gift Card',
      heroTitle: 'Idee per regalare tempo, relax e soggiorno.',
      heroSubtitle:
        'Pacchetti romantici, proposte benessere e gift card da confermare con la struttura per disponibilità, condizioni e personalizzazioni.',
      packagesEyebrow: 'Pacchetti',
      packagesTitle: 'Soggiorni romantici, benessere e gift card.',
      packagesText:
        'Le offerte del Relais Santo Stefano sono pensate per coppie, momenti speciali e regali legati alla SPA. Prezzi e contenuti vanno sempre verificati con il relais perché possono variare in base a date e disponibilità.',
      subjectPrefix: 'Richiesta offerta',
      finalText:
        'Date flessibili o regalo personalizzato? Il relais può confermare condizioni, disponibilità e integrazioni del soggiorno.',
    },
    contactPage: {
      heroEyebrow: 'Contatti',
      heroTitle: 'Arrivare al Relais Santo Stefano.',
      heroSubtitle:
        'Siamo in Via Garibaldi 5, a Sandigliano, alle porte di Biella. Scrivici o chiamaci per soggiorni, SPA, ristorante ed eventi.',
      address: 'Indirizzo',
      company: 'Dati societari',
      requestsEyebrow: 'Richieste',
      requestsTitle: 'Scrivi una richiesta precisa, ricevi una risposta utile.',
      requestsText:
        'Per date, preventivi meeting, tavoli ristorante, trattamenti SPA o esigenze particolari, indica periodo, numero di ospiti e preferenze.',
      stayRequest: 'Richiesta soggiorno',
      spaRequest: 'Richiesta SPA',
      restaurantRequest: 'Ristorante',
      meetingRequest: 'Meeting ed eventi',
      staySubject: 'Richiesta soggiorno Relais Santo Stefano',
      spaSubject: 'Richiesta SPA Relais Santo Stefano',
      restaurantSubject: 'Richiesta ristorante Relais Santo Stefano',
      meetingSubject: 'Richiesta meeting ed eventi Relais Santo Stefano',
    },
    notFound: {
      eyebrow: 'Pagina non trovata',
      title: 'Torniamo al relais.',
      text: 'Il percorso richiesto non è disponibile. La navigazione principale ti riporta alle sezioni del sito.',
      cta: 'Vai alla home',
    },
  },
  en: {
    locale: 'en-GB',
    bookingLanguage: 'EN',
    navigation: navigation(['Home', 'Rooms & Suites', 'SPA', 'Restaurant', 'Sport', 'Meetings', 'Area', 'Offers', 'Contact'], { 1: 'Rooms', 5: 'Meetings' }),
    seo: {
      '/': {
        title: 'Relais Santo Stefano | 4-star resort near Biella',
        description: 'Relais Santo Stefano is a 4-star resort near Biella with 75 rooms, SPA, restaurant, sport facilities, pool and meeting rooms.',
      },
      '/camere-suite': {
        title: 'Rooms and Suites | Relais Santo Stefano',
        description: 'Explore all room types at Relais Santo Stefano: Single, Standard Queen, Comfort Twin, Superior, Deluxe, Triple, Junior Suite, Suite Classic, Tower Room and Spa Suite.',
      },
      '/spa-benessere': {
        title: 'SPA and Wellness | Relais Santo Stefano',
        description: 'Two-hour SPA path with sauna, steam bath, emotional shower, chromotherapy, whirlpool and treatments by reservation.',
      },
      '/ristorante': {
        title: 'Restaurant and Breakfast | Relais Santo Stefano',
        description: 'Restaurant by reservation, Piedmont cuisine by Chef Piergiorgio Frodi, local wines and continental breakfast.',
      },
      '/sport-activity': {
        title: 'Sport and Activity | Relais Santo Stefano',
        description: 'Padel, pickleball, e-bikes, summer pool and Technogym gym for hotel guests and outside visitors.',
      },
      '/meeting-eventi': {
        title: 'Meetings and Events | Relais Santo Stefano',
        description: 'Meeting rooms near Biella with Sala Oropa, Sala Bike and Les Oliviers for corporate events and private occasions.',
      },
      '/territorio': {
        title: 'Biella Area | Relais Santo Stefano',
        description: 'From Relais Santo Stefano discover Oropa, Ricetto di Candelo, Oasi Zegna, Lake Viverone and UNESCO places in Biella.',
      },
      '/offerte': {
        title: 'Offers and Gift Cards | Relais Santo Stefano',
        description: 'Romantic packages, wellness stays and gift cards at Relais Santo Stefano. Prices and availability to be confirmed with the hotel.',
      },
      '/contatti': {
        title: 'Contact | Relais Santo Stefano Sandigliano',
        description: 'Contact Relais Santo Stefano: Via Garibaldi 5, Sandigliano BI. Hotel +39 015 2496154, SPA +39 015 691470.',
      },
    },
    cookie: {
      title: 'Essential cookies',
      text: 'We only use technical cookies and the banner preference. See the privacy policy for details.',
      accept: 'Accept',
      privacy: 'Privacy',
    },
    shared: {
      explore: 'Explore',
      book: 'Book',
      call: 'Call',
      offers: 'Offers',
      discover: 'Discover',
      writeUs: 'Write to us',
      bookStay: 'Book your stay',
      askInfo: 'Ask for information',
      requestOffer: 'Request offer',
      openMap: 'Open map',
      contacts: 'Contact',
      hotelCall: 'Call hotel',
      goContacts: 'Go to contacts',
      skipContent: 'Skip to content',
      language: 'Language',
      mainNavigation: 'Main navigation',
      menuNavigation: 'Menu',
    },
    header: {
      menu: 'Menu',
      openMenu: 'Open menu',
      close: 'Close',
      drawerLabel: 'Main menu',
      drawerText: 'Piedmont hospitality, relaxation, cuisine and sport in a 4-star resort near Biella.',
    },
    footer: {
      eyebrow: 'Stays, wellness, cuisine and local area',
      intro:
        'Relais Santo Stefano is in Via Garibaldi 5, Sandigliano, near Biella: a 4-star resort with rooms, SPA, restaurant, sport facilities and meeting rooms.',
      usefulLinks: 'Useful links',
      privacy: 'Privacy and cookies',
    },
    booking: {
      title: 'Book your stay',
      heading: 'Dates, guests and availability.',
      intro: 'Enter your details: availability and rates are checked directly on the official SimpleBooking engine.',
      alert: 'Please check the highlighted fields before verifying availability.',
      labels: { checkIn: 'Arrival date', checkOut: 'Departure date', adults: 'Adults', rooms: 'Rooms', promo: 'Promo code' },
      optional: 'Optional',
      roomHint: 'At least one adult per room.',
      openEngine: 'Open booking engine',
      manage: 'Modify/cancel booking',
      dialogEyebrow: 'SimpleBooking',
      dialogTitle: 'Request ready',
      dialogText: 'Your stay details are ready. Real availability and rates are checked on the official SimpleBooking engine, without simulated availability on this site.',
      nextStep: 'The next step opens SimpleBooking in a new tab with dates, adults and rooms already filled in.',
      openAvailability: 'Open availability',
      modifyCancel: 'Modify/cancel',
      close: 'Close',
      none: 'None',
      errors: {
        checkInRequired: 'Enter the arrival date.',
        checkInPast: 'Arrival date cannot be in the past.',
        checkOutRequired: 'Enter the departure date.',
        checkOutAfter: 'Departure must be after arrival.',
        adultsRange: 'Select 1 to 8 adults.',
        roomsRange: 'Select 1 to 4 rooms.',
        adultPerRoom: 'At least one adult is required per room.',
      },
      decrease: 'Decrease',
      increase: 'Increase',
    },
    quickFacts: [
      { value: '75', label: 'rooms and suites' },
      { value: '2h', label: 'SPA path by reservation' },
      { value: '10', label: 'padel and pickleball courts' },
      { value: '3', label: 'modular meeting rooms' },
    ],
    rooms: englishRooms,
    roomAmenities: ['Safe', 'Air conditioning', 'Telephone', 'Courtesy set', 'SAT TV', 'Slippers', 'Minibar', 'Work desk', 'Hairdryer', 'Bathrobe'],
    roomRequestAmenities: ['Wake-up service', 'Bathrobe', 'Kettle with tea and herbal tea selection'],
    spaSuites: [
      {
        name: 'Junior Suite Superior New',
        summary:
          'Adjacent to the SPA, modern and comfortable, with Gessi multi-effect shower: rain, steam, waterfall and horizontal hydro-massage jets.',
        details: ['King-size bed', 'Walk-in shower', '35 m2', 'Parquet', 'Balcony'],
        image: images.roomJuniorSuiteSuperior,
      },
      {
        name: 'Suite Superior Gessi New',
        summary:
          'For up to 4 guests, with designer sitting room, rectangular bathtub in the room and Gessi shower with rain, steam, waterfall and hydro-massage jets.',
        details: ['King-size bed', 'Shower and rectangular bathtub', '60 m2', 'Parquet', 'Balcony'],
        image: images.roomSpaSuite,
      },
      {
        name: 'Suite Deluxe New',
        summary:
          'The most exclusive suite: private mini SPA in the room with two-seat whirlpool, sauna, steam bath and chromotherapy.',
        details: ['King-size bed', 'Private SPA in room', '70 m2', 'Parquet', 'Balcony'],
        image: images.roomSuiteDeluxe,
      },
    ],
    services: [
      'Free Wi-Fi',
      'Summer pool',
      'Technogym gym',
      'Free outdoor parking',
      'Luggage storage',
      'Pets allowed with 10 euro per day supplement',
      'Porsche Destination Charging',
      '10% discount on SPA treatments for hotel guests',
    ],
    experiences: [
      {
        title: 'SPA & Wellness',
        text: 'Two floors for wellbeing, design cabins and a two-hour wet path with sauna, steam bath, emotional shower, chromotherapy, whirlpool and relaxation area.',
        path: '/spa-benessere',
        image: images.spa,
      },
      {
        title: 'Restaurant and breakfast',
        text: 'Chef Piergiorgio Frodi celebrates Biella and Piedmont with handmade pasta, local risotto, Piedmont wines and a three-island breakfast buffet.',
        path: '/ristorante',
        image: images.restaurant,
      },
      {
        title: 'Sport & Activity',
        text: 'Six padel courts, four pickleball courts, e-bikes, summer pool and Technogym gym: a resort also designed for movement.',
        path: '/sport-activity',
        image: images.sport,
      },
      {
        title: 'Meetings and events',
        text: 'Sala Oropa 245 m2, Sala Bike 155 m2 and Les Oliviers 30 m2 for meetings, team building, light lunches, aperitifs and business dinners.',
        path: '/meeting-eventi',
        image: images.meeting,
      },
    ],
    offers: [
      { title: 'Romantic Escape', price: 'from 289 euro', text: 'A package designed to slow down together, with stay, wellness and a reserved atmosphere.' },
      { title: 'The two of us', price: 'from 429 euro', text: 'A couples proposal with a more complete experience and careful attention to stay details.' },
      { title: 'Dream night', price: 'from 399 euro', text: 'A special moment to give or enjoy, focused on relaxation and personal care.' },
      { title: 'Wellness Gift Card', price: 'on request', text: 'SPA paths and treatments available as a gift, with the option to add a stay.' },
    ],
    territoryPlaces: [
      'Sanctuary of Oropa, about 20 km away',
      'Ricetto di Candelo, a few minutes by car',
      'Oasi Zegna, less than half an hour away',
      'Lake Viverone and UNESCO Sacred Mountains',
      'Biella UNESCO Creative City',
    ],
  },
  de: {
    locale: 'de-DE',
    bookingLanguage: 'DE',
    navigation: navigation(['Home', 'Zimmer & Suiten', 'SPA', 'Restaurant', 'Sport', 'Meetings', 'Region', 'Angebote', 'Kontakt'], { 1: 'Zimmer', 5: 'Meetings' }),
    seo: {
      '/': { title: 'Relais Santo Stefano | 4-Sterne-Resort bei Biella', description: 'Relais Santo Stefano ist ein 4-Sterne-Resort bei Biella mit 75 Zimmern, SPA, Restaurant, Sportangebot, Pool und Meetingräumen.' },
      '/camere-suite': { title: 'Zimmer und Suiten | Relais Santo Stefano', description: 'Entdecken Sie alle Zimmerkategorien des Relais Santo Stefano: Einzelzimmer, Standard Queen, Comfort Twin, Superior, Deluxe, Dreibettzimmer, Junior Suite, Suite Classic, Tower Room und Spa Suite.' },
      '/spa-benessere': { title: 'SPA und Wellness | Relais Santo Stefano', description: 'Zweistündiger SPA-Parcours mit Sauna, Dampfbad, Erlebnisdusche, Chromotherapie, Whirlpool und Behandlungen auf Reservierung.' },
      '/ristorante': { title: 'Restaurant und Frühstück | Relais Santo Stefano', description: 'Restaurant auf Reservierung, piemontesische Küche von Chef Piergiorgio Frodi, lokale Weine und kontinentales Frühstück.' },
      '/sport-activity': { title: 'Sport und Aktivitäten | Relais Santo Stefano', description: 'Padel, Pickleball, E-Bikes, Sommerpool und Technogym-Fitnessraum für Hotelgäste und externe Besucher.' },
      '/meeting-eventi': { title: 'Meetings und Events | Relais Santo Stefano', description: 'Meetingräume bei Biella: Sala Oropa, Sala Bike und Les Oliviers für Firmenveranstaltungen und private Anlässe.' },
      '/territorio': { title: 'Region Biella | Relais Santo Stefano', description: 'Vom Relais Santo Stefano entdecken Sie Oropa, Ricetto di Candelo, Oasi Zegna, den Viverone-See und UNESCO-Orte im Biellese.' },
      '/offerte': { title: 'Angebote und Gutscheine | Relais Santo Stefano', description: 'Romantische Pakete, Wellnessaufenthalte und Gutscheine im Relais Santo Stefano. Preise und Verfügbarkeit bitte direkt bestätigen.' },
      '/contatti': { title: 'Kontakt | Relais Santo Stefano Sandigliano', description: 'Kontakt Relais Santo Stefano: Via Garibaldi 5, Sandigliano BI. Hotel +39 015 2496154, SPA +39 015 691470.' },
    },
    cookie: { title: 'Essenzielle Cookies', text: 'Wir verwenden nur technische Cookies und die Banner-Präferenz. Details finden Sie in der Datenschutzerklärung.', accept: 'Akzeptieren', privacy: 'Privacy' },
    shared: {
      explore: 'Entdecken',
      book: 'Buchen',
      call: 'Anrufen',
      offers: 'Angebote',
      discover: 'Entdecken',
      writeUs: 'Schreiben Sie uns',
      bookStay: 'Aufenthalt buchen',
      askInfo: 'Informationen anfragen',
      requestOffer: 'Angebot anfragen',
      openMap: 'Karte öffnen',
      contacts: 'Kontakt',
      hotelCall: 'Hotel anrufen',
      goContacts: 'Zu den Kontakten',
      skipContent: 'Zum Inhalt springen',
      language: 'Sprache',
      mainNavigation: 'Hauptnavigation',
      menuNavigation: 'Menü',
    },
    header: { menu: 'Menü', openMenu: 'Menü öffnen', close: 'Schließen', drawerLabel: 'Hauptmenü', drawerText: 'Piemontesische Gastfreundschaft, Entspannung, Küche und Sport in einem 4-Sterne-Resort bei Biella.' },
    footer: {
      eyebrow: 'Aufenthalte, Wellness, Küche und Region',
      intro: 'Relais Santo Stefano liegt in der Via Garibaldi 5 in Sandigliano bei Biella: ein 4-Sterne-Resort mit Zimmern, SPA, Restaurant, Sportangebot und Meetingräumen.',
      usefulLinks: 'Nützliche Links',
      privacy: 'Privacy und Cookies',
    },
    booking: {
      title: 'Aufenthalt buchen',
      heading: 'Daten, Gäste und Verfügbarkeit.',
      intro: 'Geben Sie die Daten ein: Verfügbarkeit und Preise werden direkt über die offizielle SimpleBooking-Engine geprüft.',
      alert: 'Bitte prüfen Sie die markierten Felder, bevor Sie die Verfügbarkeit prüfen.',
      labels: { checkIn: 'Anreisedatum', checkOut: 'Abreisedatum', adults: 'Erwachsene', rooms: 'Zimmer', promo: 'Promo-Code' },
      optional: 'Optional',
      roomHint: 'Mindestens ein Erwachsener pro Zimmer.',
      openEngine: 'Booking Engine öffnen',
      manage: 'Buchung ändern/stornieren',
      dialogEyebrow: 'SimpleBooking',
      dialogTitle: 'Anfrage bereit',
      dialogText: 'Ihre Aufenthaltsdaten sind vorbereitet. Reale Verfügbarkeit und Preise werden über die offizielle SimpleBooking-Engine geprüft.',
      nextStep: 'Der nächste Schritt öffnet SimpleBooking in einem neuen Tab mit bereits ausgefüllten Daten, Erwachsenen und Zimmern.',
      openAvailability: 'Verfügbarkeit öffnen',
      modifyCancel: 'Ändern/stornieren',
      close: 'Schließen',
      none: 'Keine',
      errors: {
        checkInRequired: 'Geben Sie das Anreisedatum ein.',
        checkInPast: 'Das Anreisedatum darf nicht in der Vergangenheit liegen.',
        checkOutRequired: 'Geben Sie das Abreisedatum ein.',
        checkOutAfter: 'Die Abreise muss nach der Anreise liegen.',
        adultsRange: 'Wählen Sie 1 bis 8 Erwachsene.',
        roomsRange: 'Wählen Sie 1 bis 4 Zimmer.',
        adultPerRoom: 'Mindestens ein Erwachsener pro Zimmer ist erforderlich.',
      },
      decrease: 'Verringern',
      increase: 'Erhöhen',
    },
    quickFacts: [
      { value: '75', label: 'Zimmer und Suiten' },
      { value: '2h', label: 'SPA-Parcours auf Reservierung' },
      { value: '10', label: 'Padel- und Pickleball-Plätze' },
      { value: '3', label: 'modulare Meetingräume' },
    ],
    rooms: germanRooms,
    roomAmenities: ['Safe', 'Klimaanlage', 'Telefon', 'Pflegeset', 'SAT-TV', 'Hausschuhe', 'Minibar', 'Schreibtisch', 'Haartrockner', 'Bademantel'],
    roomRequestAmenities: ['Weckservice', 'Bademantel', 'Wasserkocher mit Tee- und Kräuterteauswahl'],
    spaSuites: [
      { name: 'Junior Suite Superior New', summary: 'An die SPA angrenzend, modern und komfortabel, mit Gessi-Dusche: Regen, Dampf, Wasserfall und horizontale Hydromassage-Düsen.', details: ['King-Size-Bett', 'Walk-in-Dusche', '35 m2', 'Parkett', 'Balkon'], image: images.roomJuniorSuiteSuperior },
      { name: 'Suite Superior Gessi New', summary: 'Für bis zu 4 Gäste, mit Design-Salon, rechteckiger Badewanne im Zimmer und Gessi-Dusche mit Regen, Dampf, Wasserfall und Hydromassage.', details: ['King-Size-Bett', 'Dusche und rechteckige Badewanne', '60 m2', 'Parkett', 'Balkon'], image: images.roomSpaSuite },
      { name: 'Suite Deluxe New', summary: 'Die exklusivste Suite: private Mini-SPA im Zimmer mit Whirlpool für zwei Personen, Sauna, Dampfbad und Chromotherapie.', details: ['King-Size-Bett', 'Private SPA im Zimmer', '70 m2', 'Parkett', 'Balkon'], image: images.roomSuiteDeluxe },
    ],
    services: ['Kostenloses WLAN', 'Sommerpool', 'Technogym-Fitnessraum', 'Kostenloser Außenparkplatz', 'Gepäckaufbewahrung', 'Haustiere gegen 10 Euro pro Tag erlaubt', 'Porsche Destination Charging', '10% Rabatt auf SPA-Behandlungen für Hotelgäste'],
    experiences: [
      { title: 'SPA & Wellness', text: 'Zwei Etagen für Wohlbefinden, Designkabinen und ein zweistündiger Nassbereich mit Sauna, Dampfbad, Erlebnisdusche, Chromotherapie, Whirlpool und Relaxbereich.', path: '/spa-benessere', image: images.spa },
      { title: 'Restaurant und Frühstück', text: 'Chef Piergiorgio Frodi interpretiert Biella und Piemont mit hausgemachter Pasta, lokalem Risotto, piemontesischen Weinen und Frühstücksbuffet in drei Inseln.', path: '/ristorante', image: images.restaurant },
      { title: 'Sport & Activity', text: 'Sechs Padelplätze, vier Pickleball-Plätze, E-Bikes, Sommerpool und Technogym-Fitnessraum: ein Resort auch für Bewegung.', path: '/sport-activity', image: images.sport },
      { title: 'Meetings und Events', text: 'Sala Oropa 245 m2, Sala Bike 155 m2 und Les Oliviers 30 m2 für Meetings, Team Building, Light Lunch, Aperitifs und Business Dinner.', path: '/meeting-eventi', image: images.meeting },
    ],
    offers: [
      { title: 'Romantische Auszeit', price: 'ab 289 Euro', text: 'Ein Paket, um gemeinsam langsamer zu werden, mit Aufenthalt, Wellness und diskreter Atmosphäre.' },
      { title: 'Wir zwei', price: 'ab 429 Euro', text: 'Ein Angebot für Paare mit umfassenderem Erlebnis und Aufmerksamkeit für die Details des Aufenthalts.' },
      { title: 'Traumnacht', price: 'ab 399 Euro', text: 'Ein besonderer Moment zum Verschenken oder Erleben, mit Fokus auf Entspannung und persönliche Pflege.' },
      { title: 'Wellness-Gutschein', price: 'auf Anfrage', text: 'SPA-Parcours und Behandlungen als Geschenk, mit Möglichkeit zur Ergänzung durch einen Aufenthalt.' },
    ],
    territoryPlaces: ['Wallfahrtskirche Oropa, ca. 20 km entfernt', 'Ricetto di Candelo, wenige Autominuten entfernt', 'Oasi Zegna, weniger als eine halbe Stunde entfernt', 'Viverone-See und UNESCO-Sacri-Monti', 'Biella UNESCO Creative City'],
  },
  fr: {
    locale: 'fr-FR',
    bookingLanguage: 'FR',
    navigation: navigation(['Home', 'Chambres & Suites', 'SPA', 'Restaurant', 'Sport', 'Réunions', 'Territoire', 'Offres', 'Contact'], { 1: 'Chambres', 5: 'Réunions' }),
    seo: {
      '/': { title: 'Relais Santo Stefano | Resort 4 étoiles près de Biella', description: 'Relais Santo Stefano est un resort 4 étoiles près de Biella avec 75 chambres, SPA, restaurant, sport, piscine et salles de réunion.' },
      '/camere-suite': { title: 'Chambres et Suites | Relais Santo Stefano', description: 'Découvrez toutes les typologies du Relais Santo Stefano : Single, Standard Queen, Comfort Twin, Superior, Deluxe, Triple, Junior Suite, Suite Classic, Tower Room et Spa Suite.' },
      '/spa-benessere': { title: 'SPA et Bien-être | Relais Santo Stefano', description: 'Parcours SPA de deux heures avec sauna, hammam, douche émotionnelle, chromothérapie, bain à remous et soins sur réservation.' },
      '/ristorante': { title: 'Restaurant et Petit-déjeuner | Relais Santo Stefano', description: 'Restaurant sur réservation, cuisine piémontaise du Chef Piergiorgio Frodi, vins locaux et petit-déjeuner continental.' },
      '/sport-activity': { title: 'Sport et Activités | Relais Santo Stefano', description: 'Padel, pickleball, e-bikes, piscine d’été et salle Technogym pour hôtes de l’hôtel et visiteurs extérieurs.' },
      '/meeting-eventi': { title: 'Réunions et Événements | Relais Santo Stefano', description: 'Salles de réunion près de Biella : Sala Oropa, Sala Bike et Les Oliviers pour événements professionnels et privés.' },
      '/territorio': { title: 'Territoire de Biella | Relais Santo Stefano', description: 'Depuis le Relais Santo Stefano, découvrez Oropa, le Ricetto di Candelo, l’Oasi Zegna, le lac de Viverone et les lieux UNESCO.' },
      '/offerte': { title: 'Offres et Gift Cards | Relais Santo Stefano', description: 'Forfaits romantiques, séjours bien-être et gift cards du Relais Santo Stefano. Prix et disponibilités à confirmer avec l’établissement.' },
      '/contatti': { title: 'Contact | Relais Santo Stefano Sandigliano', description: 'Contactez Relais Santo Stefano : Via Garibaldi 5, Sandigliano BI. Hôtel +39 015 2496154, SPA +39 015 691470.' },
    },
    cookie: { title: 'Cookies essentiels', text: 'Nous utilisons uniquement des cookies techniques et la préférence du bandeau. Consultez la politique de confidentialité pour plus de détails.', accept: 'Accepter', privacy: 'Privacy' },
    shared: {
      explore: 'Explorer',
      book: 'Réserver',
      call: 'Appeler',
      offers: 'Offres',
      discover: 'Découvrir',
      writeUs: 'Nous écrire',
      bookStay: 'Réserver le séjour',
      askInfo: 'Demander des informations',
      requestOffer: 'Demander l’offre',
      openMap: 'Ouvrir la carte',
      contacts: 'Contact',
      hotelCall: 'Appeler l’hôtel',
      goContacts: 'Voir les contacts',
      skipContent: 'Aller au contenu',
      language: 'Langue',
      mainNavigation: 'Navigation principale',
      menuNavigation: 'Menu',
    },
    header: { menu: 'Menu', openMenu: 'Ouvrir le menu', close: 'Fermer', drawerLabel: 'Menu principal', drawerText: 'Accueil piémontais, détente, cuisine et sport dans un resort 4 étoiles aux portes de Biella.' },
    footer: {
      eyebrow: 'Séjours, bien-être, cuisine et territoire',
      intro: 'Relais Santo Stefano se trouve Via Garibaldi 5, à Sandigliano, près de Biella : un resort 4 étoiles avec chambres, SPA, restaurant, sport et salles de réunion.',
      usefulLinks: 'Liens utiles',
      privacy: 'Privacy et cookies',
    },
    booking: {
      title: 'Réserver le séjour',
      heading: 'Dates, hôtes et disponibilité.',
      intro: 'Saisissez les données : disponibilités et tarifs sont vérifiés directement sur le moteur officiel SimpleBooking.',
      alert: 'Veuillez vérifier les champs signalés avant de contrôler la disponibilité.',
      labels: { checkIn: "Date d'arrivée", checkOut: 'Date de départ', adults: 'Adultes', rooms: 'Chambres', promo: 'Code promo' },
      optional: 'Optionnel',
      roomHint: 'Au moins un adulte par chambre.',
      openEngine: 'Ouvrir le booking engine',
      manage: 'Modifier/annuler la réservation',
      dialogEyebrow: 'SimpleBooking',
      dialogTitle: 'Demande prête',
      dialogText: 'Les données du séjour sont prêtes. La disponibilité réelle et les tarifs sont vérifiés sur le moteur officiel SimpleBooking.',
      nextStep: 'L’étape suivante ouvre SimpleBooking dans un nouvel onglet avec dates, adultes et chambres déjà renseignés.',
      openAvailability: 'Ouvrir la disponibilité',
      modifyCancel: 'Modifier/annuler',
      close: 'Fermer',
      none: 'Aucun',
      errors: {
        checkInRequired: "Saisissez la date d'arrivée.",
        checkInPast: "La date d'arrivée ne peut pas être passée.",
        checkOutRequired: 'Saisissez la date de départ.',
        checkOutAfter: "Le départ doit être postérieur à l'arrivée.",
        adultsRange: 'Sélectionnez de 1 à 8 adultes.',
        roomsRange: 'Sélectionnez de 1 à 4 chambres.',
        adultPerRoom: 'Il faut au moins un adulte par chambre.',
      },
      decrease: 'Diminuer',
      increase: 'Augmenter',
    },
    quickFacts: [
      { value: '75', label: 'chambres et suites' },
      { value: '2h', label: 'parcours SPA sur réservation' },
      { value: '10', label: 'terrains padel et pickleball' },
      { value: '3', label: 'salles de réunion modulaires' },
    ],
    rooms: frenchRooms,
    roomAmenities: ['Coffre-fort', 'Climatisation', 'Téléphone', 'Set de courtoisie', 'TV-SAT', 'Chaussons', 'Minibar', 'Bureau de travail', 'Sèche-cheveux', 'Peignoir'],
    roomRequestAmenities: ['Service réveil', 'Peignoir', 'Bouilloire avec sélection de thés et tisanes'],
    spaSuites: [
      { name: 'Junior Suite Superior New', summary: 'Adjacente au SPA, moderne et confortable, avec douche Gessi multi-effets : pluie, vapeur, cascade et jets hydromassants horizontaux.', details: ['Lit king size', 'Douche walk-in', '35 m2', 'Parquet', 'Balcon'], image: images.roomJuniorSuiteSuperior },
      { name: 'Suite Superior Gessi New', summary: 'Jusqu’à 4 personnes, avec salon design, baignoire rectangulaire dans la chambre et douche Gessi pluie, vapeur, cascade et hydromassage.', details: ['Lit king size', 'Douche et baignoire rectangulaire', '60 m2', 'Parquet', 'Balcon'], image: images.roomSpaSuite },
      { name: 'Suite Deluxe New', summary: 'La suite la plus exclusive : mini SPA privée en chambre avec bain hydromassant deux places, sauna, hammam et chromothérapie.', details: ['Lit king size', 'SPA privée en chambre', '70 m2', 'Parquet', 'Balcon'], image: images.roomSuiteDeluxe },
    ],
    services: ['Wi-Fi gratuit', 'Piscine d’été', 'Salle Technogym', 'Parking extérieur gratuit', 'Consigne bagages', 'Animaux acceptés avec supplément de 10 euros par jour', 'Porsche Destination Charging', '10% de réduction sur les soins SPA pour les hôtes'],
    experiences: [
      { title: 'SPA & Wellness', text: 'Deux étages dédiés au bien-être, cabines design et parcours humide de deux heures avec sauna, hammam, douche émotionnelle, chromothérapie, bain à remous et espace relax.', path: '/spa-benessere', image: images.spa },
      { title: 'Restaurant et petit-déjeuner', text: 'Le Chef Piergiorgio Frodi valorise Biella et le Piémont avec pâtes fraîches maison, risottos locaux, vins piémontais et buffet petit-déjeuner en trois îlots.', path: '/ristorante', image: images.restaurant },
      { title: 'Sport & Activity', text: 'Six terrains de padel, quatre terrains de pickleball, e-bikes, piscine d’été et salle Technogym : un resort pensé aussi pour bouger.', path: '/sport-activity', image: images.sport },
      { title: 'Réunions et événements', text: 'Sala Oropa 245 m2, Sala Bike 155 m2 et Les Oliviers 30 m2 pour réunions, team building, light lunch, apéritifs et business dinner.', path: '/meeting-eventi', image: images.meeting },
    ],
    offers: [
      { title: 'Escapade romantique', price: 'à partir de 289 euros', text: 'Un forfait pour ralentir à deux, entre séjour, bien-être et atmosphère réservée.' },
      { title: 'Nous deux', price: 'à partir de 429 euros', text: 'Une proposition pour couples avec une expérience plus complète et une attention aux détails du séjour.' },
      { title: 'Nuit de rêve', price: 'à partir de 399 euros', text: 'Un moment spécial à offrir ou à vivre, centré sur la détente et le soin personnel.' },
      { title: 'Gift Card bien-être', price: 'sur demande', text: 'Parcours et soins SPA à offrir, avec possibilité d’intégrer le séjour.' },
    ],
    territoryPlaces: ['Sanctuaire d’Oropa, à environ 20 km', 'Ricetto di Candelo, à quelques minutes en voiture', 'Oasi Zegna, à moins d’une demi-heure', 'Lac de Viverone et Sacri Monti UNESCO', 'Biella Ville créative UNESCO'],
  },
};

const sharedPageTranslations = {
  en: {
    home: {
      heroEyebrow: 'Piedmont hospitality, relaxation and sport',
      heroTitle: 'A place to live',
      heroSubtitle:
        'A 4-star resort at the foot of the Biella Alps, surrounded by green spaces, with pool, padel courts, SPA, refined cuisine and local wines.',
      introEyebrow: 'One resort, many experiences',
      introTitle: 'Welcome to good time.',
      introParagraphs: [
        'A place to live with everything you need: rooms overlooking the green, a curated SPA, refined cuisine, pool, padel and spaces to meet.',
        'The location stays concrete and discreet: near Biella, at the foot of the Biella Alps, with services for leisure, business, sport and events.',
      ],
      roomsEyebrow: 'Rooms & Suites',
      roomsTitle: 'Sweet rest, always facing the green.',
      roomsText:
        'With 75 rooms in different categories, every stay finds the right measure: business, couple, family, wellness or sport travel. Free Wi-Fi and essential comfort come with every choice.',
      experiencesEyebrow: 'Experiences',
      experiencesTitle: 'SPA, cuisine, sport and work: one address.',
      experiencesText:
        'Each area has a clear identity: recharge, taste the territory, move and meet without leaving the rhythm of the relais.',
      servicesEyebrow: 'Included services and extras',
      servicesTitle: 'Everything you need, discreetly.',
      offersEyebrow: 'Offers',
      offersTitle: 'Packages to give yourself time.',
      offersText:
        'Romantic packages, wellness stays and gift cards become clear proposals to verify with the relais for dates, conditions and availability.',
      territoryEyebrow: 'Area',
      territoryTitle: 'Biella, Oropa and the surrounding hills.',
      territoryText:
        'From the relais you can quickly reach some of the most recognisable places in the Biella area, among nature, villages and UNESCO heritage.',
      galleryEyebrow: 'Gallery',
      galleryTitle: 'The relais, in real images.',
      galleryText:
        'A selection of official photographs shows the property, rooms, SPA, cuisine, sport and event spaces with an orderly contemporary eye.',
      galleryModalTitle: 'Relais Santo Stefano Gallery',
      openImage: 'Open image',
      modalLabels: { close: 'Close', prev: 'Previous', next: 'Next' },
    },
    roomsPage: {
      heroEyebrow: 'Rooms & Suites',
      heroTitle: 'The right room, no approximation.',
      heroSubtitle:
        'Single, queen, twin, balcony rooms, Deluxe, Junior Suite, Suite Classic, Tower Room and Spa Suite: each choice has its own size, services and character.',
      checkAvailability: 'Check availability',
      introEyebrow: 'Stay',
      introTitle: '75 rooms, many categories for every need.',
      introParagraphs: [
        'Every morning, whatever room you choose, you look out over the green gardens around Relais Santo Stefano. A good way to start the day.',
        'Choose essential rooms, balcony options, spacious suites and SPA Lodge rooms with a Gessi-equipped bathroom area for a more private wellness path.',
      ],
      amenitiesEyebrow: 'Amenities',
      amenitiesTitle: 'Base comfort, clear extras.',
      amenitiesText:
        'The amenities follow the detail of the original site: services available in the room and some extras on request.',
      onRequest: 'On request',
      typesEyebrow: 'Room types',
      typesTitle: 'From essential rest to the Tower Room.',
      typesText:
        'Each card keeps description, size and distinctive amenities, so guests can quickly understand which room fits work travel, couples, families or special stays.',
      bookNow: 'Book now',
      spaEyebrow: 'Spa Suite',
      spaTitle: 'SPA Lodge: three levels of wellness in the room.',
      spaText:
        'Spa Suites are adjacent to the SPA and add Gessi showers, scenic bathtubs or a true private mini SPA, without simulating availability or rates on the site.',
      servicesEyebrow: 'Room and resort services',
      servicesTitle: 'Essential comfort, concrete extras.',
    },
    offersPage: {
      heroEyebrow: 'Offers and Gift Cards',
      heroTitle: 'Ideas to give time, relaxation and stays.',
      heroSubtitle:
        'Romantic packages, wellness proposals and gift cards to be confirmed with the property for availability, conditions and customisation.',
      packagesEyebrow: 'Packages',
      packagesTitle: 'Romantic stays, wellness and gift cards.',
      packagesText:
        'Relais Santo Stefano offers are designed for couples, special moments and SPA-related gifts. Prices and contents must always be checked with the relais as they may vary by date and availability.',
      subjectPrefix: 'Offer request',
      finalText:
        'Flexible dates or a customised gift? The relais can confirm conditions, availability and stay additions.',
    },
    contactPage: {
      heroEyebrow: 'Contact',
      heroTitle: 'Reaching Relais Santo Stefano.',
      heroSubtitle:
        'We are in Via Garibaldi 5, Sandigliano, near Biella. Write or call us for stays, SPA, restaurant and events.',
      address: 'Address',
      company: 'Company details',
      requestsEyebrow: 'Requests',
      requestsTitle: 'Write a precise request, receive a useful reply.',
      requestsText:
        'For dates, meeting quotes, restaurant tables, SPA treatments or special needs, include period, number of guests and preferences.',
      stayRequest: 'Stay request',
      spaRequest: 'SPA request',
      restaurantRequest: 'Restaurant',
      meetingRequest: 'Meetings and events',
      staySubject: 'Stay request Relais Santo Stefano',
      spaSubject: 'SPA request Relais Santo Stefano',
      restaurantSubject: 'Restaurant request Relais Santo Stefano',
      meetingSubject: 'Meeting and event request Relais Santo Stefano',
    },
    notFound: {
      eyebrow: 'Page not found',
      title: 'Back to the relais.',
      text: 'The requested path is not available. The main navigation takes you back to the site sections.',
      cta: 'Go to home',
    },
  },
  de: {
    home: {
      heroEyebrow: 'Piemontesische Gastfreundschaft, Relax und Sport',
      heroTitle: 'A place to live',
      heroSubtitle:
        'Ein 4-Sterne-Resort am Fuß der Bielleser Alpen, umgeben von viel Grün, mit Pool, Padelplätzen, SPA, feiner Küche und Weinen aus der Region.',
      introEyebrow: 'Ein Resort, viele Erlebnisse',
      introTitle: 'Willkommen zur guten Zeit.',
      introParagraphs: [
        'Ein Ort mit allem, was Sie brauchen: Zimmer mit Blick ins Grüne, eine gepflegte SPA, feine Küche, Pool, Padel und Räume zum Begegnen.',
        'Die Lage bleibt konkret und diskret: bei Biella, am Fuß der Bielleser Alpen, mit Services für Leisure, Business, Sport und Events.',
      ],
      roomsEyebrow: 'Zimmer & Suiten',
      roomsTitle: 'Süße Ruhe, immer mit Blick ins Grüne.',
      roomsText:
        'Mit 75 Zimmern verschiedener Kategorien findet jeder Aufenthalt das richtige Maß: Business, Paar, Familie, Wellness oder Sportreise. Kostenloses WLAN und wesentlicher Komfort begleiten jede Wahl.',
      experiencesEyebrow: 'Erlebnisse',
      experiencesTitle: 'SPA, Küche, Sport und Arbeit: eine Adresse.',
      experiencesText:
        'Jeder Bereich hat eine klare Identität: auftanken, die Region genießen, sich bewegen und treffen, ohne den Rhythmus des Relais zu verlassen.',
      servicesEyebrow: 'Inklusive Services und Extras',
      servicesTitle: 'Alles, was Sie brauchen, diskret.',
      offersEyebrow: 'Angebote',
      offersTitle: 'Pakete, um sich Zeit zu schenken.',
      offersText:
        'Romantische Pakete, Wellnessaufenthalte und Gutscheine sind klare Vorschläge, die mit dem Relais hinsichtlich Daten, Bedingungen und Verfügbarkeit geprüft werden.',
      territoryEyebrow: 'Region',
      territoryTitle: 'Biella, Oropa und die Hügel ringsum.',
      territoryText:
        'Vom Relais erreichen Sie schnell einige der bekanntesten Orte des Biellese, zwischen Natur, Dörfern und UNESCO-Erbe.',
      galleryEyebrow: 'Galerie',
      galleryTitle: 'Das Relais in echten Bildern.',
      galleryText:
        'Eine Auswahl offizieller Fotografien zeigt Anlage, Zimmer, SPA, Küche, Sport- und Eventbereiche mit ruhigem, zeitgemäßem Blick.',
      galleryModalTitle: 'Galerie Relais Santo Stefano',
      openImage: 'Bild öffnen',
      modalLabels: { close: 'Schließen', prev: 'Zurück', next: 'Weiter' },
    },
    roomsPage: {
      heroEyebrow: 'Zimmer & Suiten',
      heroTitle: 'Das richtige Zimmer, ohne Annäherung.',
      heroSubtitle:
        'Einzelzimmer, Queen, Twin, Zimmer mit Balkon, Deluxe, Junior Suite, Suite Classic, Tower Room und Spa Suite: jede Wahl hat eigene Größe, Services und Charakter.',
      checkAvailability: 'Verfügbarkeit prüfen',
      introEyebrow: 'Aufenthalt',
      introTitle: '75 Zimmer, viele Kategorien für jeden Bedarf.',
      introParagraphs: [
        'Jeden Morgen blicken Sie, egal in welchem Zimmer, auf die grünen Gärten rund um das Relais Santo Stefano. Ein guter Start in den Tag.',
        'Wählen Sie zwischen essenziellen Zimmern, Balkonlösungen, geräumigen Suiten und SPA-Lodge-Zimmern mit Gessi-Badbereich für einen privateren Wellness-Parcours.',
      ],
      amenitiesEyebrow: 'Ausstattung',
      amenitiesTitle: 'Basiskomfort, klare Extras.',
      amenitiesText:
        'Die Ausstattung folgt dem Detail der Originalseite: Services im Zimmer und einige Aufmerksamkeiten auf Anfrage.',
      onRequest: 'Auf Anfrage',
      typesEyebrow: 'Zimmerkategorien',
      typesTitle: 'Von essenzieller Ruhe bis zur Tower Room.',
      typesText:
        'Jede Karte behält Beschreibung, Größe und besondere Ausstattung, damit Gäste schnell verstehen, welches Zimmer zu Geschäftsreise, Paar, Familie oder besonderem Aufenthalt passt.',
      bookNow: 'Jetzt buchen',
      spaEyebrow: 'Spa Suite',
      spaTitle: 'SPA Lodge: drei Wellnessstufen im Zimmer.',
      spaText:
        'Die Spa Suites liegen neben der SPA und bieten Gessi-Duschen, besondere Badewannen oder eine echte private Mini-SPA, ohne Verfügbarkeit oder Preise im Site zu simulieren.',
      servicesEyebrow: 'Zimmer- und Resortservices',
      servicesTitle: 'Wesentlicher Komfort, konkrete Extras.',
    },
    offersPage: {
      heroEyebrow: 'Angebote und Gutscheine',
      heroTitle: 'Ideen, um Zeit, Relax und Aufenthalt zu schenken.',
      heroSubtitle:
        'Romantische Pakete, Wellnessangebote und Gutscheine, die mit der Struktur bezüglich Verfügbarkeit, Bedingungen und Personalisierung bestätigt werden.',
      packagesEyebrow: 'Pakete',
      packagesTitle: 'Romantische Aufenthalte, Wellness und Gutscheine.',
      packagesText:
        'Die Angebote des Relais Santo Stefano sind für Paare, besondere Momente und SPA-Geschenke gedacht. Preise und Inhalte müssen immer mit dem Relais geprüft werden.',
      subjectPrefix: 'Anfrage Angebot',
      finalText:
        'Flexible Daten oder ein personalisiertes Geschenk? Das Relais kann Bedingungen, Verfügbarkeit und Ergänzungen bestätigen.',
    },
    contactPage: {
      heroEyebrow: 'Kontakt',
      heroTitle: 'Anreise zum Relais Santo Stefano.',
      heroSubtitle:
        'Wir sind in Via Garibaldi 5, Sandigliano, bei Biella. Schreiben oder rufen Sie uns für Aufenthalt, SPA, Restaurant und Events an.',
      address: 'Adresse',
      company: 'Firmendaten',
      requestsEyebrow: 'Anfragen',
      requestsTitle: 'Schreiben Sie eine präzise Anfrage und erhalten Sie eine nützliche Antwort.',
      requestsText:
        'Für Daten, Meeting-Angebote, Restauranttische, SPA-Behandlungen oder besondere Bedürfnisse geben Sie Zeitraum, Gästezahl und Präferenzen an.',
      stayRequest: 'Aufenthaltsanfrage',
      spaRequest: 'SPA-Anfrage',
      restaurantRequest: 'Restaurant',
      meetingRequest: 'Meetings und Events',
      staySubject: 'Aufenthaltsanfrage Relais Santo Stefano',
      spaSubject: 'SPA-Anfrage Relais Santo Stefano',
      restaurantSubject: 'Restaurantanfrage Relais Santo Stefano',
      meetingSubject: 'Meeting- und Eventanfrage Relais Santo Stefano',
    },
    notFound: {
      eyebrow: 'Seite nicht gefunden',
      title: 'Zurück zum Relais.',
      text: 'Der angeforderte Pfad ist nicht verfügbar. Die Hauptnavigation führt Sie zurück zu den Bereichen der Website.',
      cta: 'Zur Home',
    },
  },
  fr: {
    home: {
      heroEyebrow: 'Accueil piémontais, détente et sport',
      heroTitle: 'A place to live',
      heroSubtitle:
        'Un resort 4 étoiles au pied des Alpes biellaises, entouré de grands espaces verts, avec piscine, terrains de padel, SPA, cuisine soignée et vins du territoire.',
      introEyebrow: 'Un resort, de nombreuses expériences',
      introTitle: 'Bienvenue au bon temps.',
      introParagraphs: [
        'Un lieu à vivre avec tout ce dont vous avez besoin : chambres donnant sur le vert, SPA soigné, cuisine raffinée, piscine, padel et espaces de rencontre.',
        'La location reste concrète et réservée : aux portes de Biella, au pied des Alpes biellaises, avec services pour loisirs, business, sport et événements.',
      ],
      roomsEyebrow: 'Chambres & Suites',
      roomsTitle: 'Un doux repos, toujours face au vert.',
      roomsText:
        'Avec 75 chambres de différentes typologies, chaque séjour trouve sa mesure : business, couple, famille, bien-être ou voyage sportif. Wi-Fi gratuit et confort essentiel accompagnent chaque choix.',
      experiencesEyebrow: 'Expériences',
      experiencesTitle: 'SPA, cuisine, sport et travail : une seule adresse.',
      experiencesText:
        'Chaque espace a une identité claire : se ressourcer, goûter le territoire, bouger et se rencontrer sans quitter le rythme du relais.',
      servicesEyebrow: 'Services inclus et plus',
      servicesTitle: 'Tout ce qu’il faut, avec discrétion.',
      offersEyebrow: 'Offres',
      offersTitle: 'Forfaits pour s’offrir du temps.',
      offersText:
        'Forfaits romantiques, séjours bien-être et gift cards deviennent des propositions claires à vérifier avec le relais pour dates, conditions et disponibilités.',
      territoryEyebrow: 'Territoire',
      territoryTitle: 'Biella, Oropa et les collines alentour.',
      territoryText:
        'Depuis le relais, on rejoint rapidement certains lieux emblématiques du Biellese, entre nature, villages et patrimoine UNESCO.',
      galleryEyebrow: 'Galerie',
      galleryTitle: 'Le relais, en images réelles.',
      galleryText:
        'Une sélection de photographies officielles raconte la structure, les chambres, le SPA, la cuisine, le sport et les espaces événementiels avec un regard contemporain.',
      galleryModalTitle: 'Galerie Relais Santo Stefano',
      openImage: 'Ouvrir l’image',
      modalLabels: { close: 'Fermer', prev: 'Précédente', next: 'Suivante' },
    },
    roomsPage: {
      heroEyebrow: 'Chambres & Suites',
      heroTitle: 'La bonne chambre, sans approximation.',
      heroSubtitle:
        'Single, queen, twin, chambres avec balcon, Deluxe, Junior Suite, Suite Classic, Tower Room et Spa Suite : chaque choix a ses mesures, services et caractère.',
      checkAvailability: 'Vérifier disponibilité',
      introEyebrow: 'Séjourner',
      introTitle: '75 chambres, de nombreuses typologies pour chaque besoin.',
      introParagraphs: [
        'Chaque matin, quelle que soit la chambre choisie, vous regardez le vert des jardins qui entourent le Relais Santo Stefano. Une belle façon de commencer la journée.',
        'Vous pouvez choisir entre chambres essentielles, solutions avec balcon, suites spacieuses et chambres SPA Lodge avec salle de bain équipée Gessi pour un parcours bien-être plus privé.',
      ],
      amenitiesEyebrow: 'Équipements',
      amenitiesTitle: 'Confort de base, demandes extra claires.',
      amenitiesText:
        'Les équipements reprennent le détail du site original : services présents en chambre et attentions disponibles sur demande.',
      onRequest: 'Sur demande',
      typesEyebrow: 'Typologies chambres',
      typesTitle: 'Du repos essentiel à la Tower Room.',
      typesText:
        'Chaque carte conserve description, surface et équipements distinctifs, afin que l’hôte comprenne vite quelle chambre convient au voyage de travail, au couple, à la famille ou au séjour spécial.',
      bookNow: 'Réserver',
      spaEyebrow: 'Spa Suite',
      spaTitle: 'SPA Lodge : trois niveaux de bien-être en chambre.',
      spaText:
        'Les Spa Suites sont adjacentes au SPA et ajoutent douches Gessi, baignoires scénographiques ou une vraie mini SPA privée, sans simuler disponibilité ni tarifs dans le site.',
      servicesEyebrow: 'Services chambre et resort',
      servicesTitle: 'Confort essentiel, plus concrets.',
    },
    offersPage: {
      heroEyebrow: 'Offres et Gift Card',
      heroTitle: 'Des idées pour offrir temps, détente et séjour.',
      heroSubtitle:
        'Forfaits romantiques, propositions bien-être et gift cards à confirmer avec la structure pour disponibilité, conditions et personnalisation.',
      packagesEyebrow: 'Forfaits',
      packagesTitle: 'Séjours romantiques, bien-être et gift cards.',
      packagesText:
        'Les offres du Relais Santo Stefano sont pensées pour couples, moments spéciaux et cadeaux liés au SPA. Prix et contenus doivent toujours être vérifiés avec le relais.',
      subjectPrefix: 'Demande offre',
      finalText:
        'Dates flexibles ou cadeau personnalisé ? Le relais peut confirmer conditions, disponibilités et intégrations du séjour.',
    },
    contactPage: {
      heroEyebrow: 'Contact',
      heroTitle: 'Arriver au Relais Santo Stefano.',
      heroSubtitle:
        'Nous sommes Via Garibaldi 5, à Sandigliano, aux portes de Biella. Écrivez-nous ou appelez-nous pour séjours, SPA, restaurant et événements.',
      address: 'Adresse',
      company: 'Données société',
      requestsEyebrow: 'Demandes',
      requestsTitle: 'Écrivez une demande précise, recevez une réponse utile.',
      requestsText:
        'Pour dates, devis meeting, tables restaurant, soins SPA ou besoins particuliers, indiquez période, nombre d’hôtes et préférences.',
      stayRequest: 'Demande séjour',
      spaRequest: 'Demande SPA',
      restaurantRequest: 'Restaurant',
      meetingRequest: 'Réunions et événements',
      staySubject: 'Demande séjour Relais Santo Stefano',
      spaSubject: 'Demande SPA Relais Santo Stefano',
      restaurantSubject: 'Demande restaurant Relais Santo Stefano',
      meetingSubject: 'Demande réunions et événements Relais Santo Stefano',
    },
    notFound: {
      eyebrow: 'Page introuvable',
      title: 'Retour au relais.',
      text: 'Le parcours demandé n’est pas disponible. La navigation principale vous ramène aux sections du site.',
      cta: 'Aller à la home',
    },
  },
};

function buildExperiencePages(language) {
  const shared = {
    contactTitle: {
      it: 'Preferisci parlarne con il relais?',
      en: 'Prefer to talk it through with the relais?',
      de: 'Möchten Sie es lieber mit dem Relais besprechen?',
      fr: 'Vous préférez en parler avec le relais ?',
    },
    contactText: {
      it: 'Per date, disponibilità, esigenze alimentari, trattamenti o richieste tecniche evento, il contatto diretto è la via più precisa.',
      en: 'For dates, availability, dietary needs, treatments or technical event requests, direct contact is the most precise route.',
      de: 'Für Daten, Verfügbarkeit, Ernährungsbedürfnisse, Behandlungen oder technische Eventanfragen ist der direkte Kontakt der präziseste Weg.',
      fr: 'Pour dates, disponibilités, besoins alimentaires, soins ou demandes techniques événementielles, le contact direct reste le plus précis.',
    },
  };

  const pages = {
    it: {
      spa: {
        image: images.spa,
        eyebrow: 'SPA & Wellness',
        title: 'Una SPA per ricaricarti, su prenotazione.',
        subtitle: 'Due piani dedicati al benessere, con percorso di due ore tra sauna, bagno turco, doccia emozionale, cromoterapia, idromassaggio e area relax.',
        introTitle: 'Tempo buono per staccare la mente.',
        paragraphs: [
          'La SPA del Relais Santo Stefano è aperta da martedì a domenica e accoglie ospiti hotel e visitatori esterni su prenotazione.',
          'Gli orari ufficiali sono martedì-sabato 10:00-20:00 e domenica 10:00-18:00; il lunedì la SPA è chiusa. Accesso e trattamenti sono a pagamento.',
        ],
        highlights: ['Sauna', 'Bagno turco', 'Doccia emozionale', 'Cromoterapia', 'Idromassaggio', 'Area relax'],
        cta: { label: 'Chiama la SPA', href: `tel:${contact.spaPhone.replace(/\s+/g, '')}` },
        secondaryImage: images.spaMassage,
      },
      restaurant: {
        image: images.restaurant,
        eyebrow: 'Ristorante e colazione',
        title: 'Cucina biellese, vini piemontesi e colazione curata.',
        subtitle: 'Il ristorante è aperto tutti i giorni su prenotazione, anche per ospiti esterni, con cucina dello Chef Piergiorgio Frodi.',
        introTitle: 'Sapori del territorio, vista sugli ulivi e servizio rilassato.',
        paragraphs: [
          'Dal 2016 lo Chef Piergiorgio Frodi firma una cucina legata a Biella e al Piemonte: pasta fresca fatta a mano, risotti a km zero, vini piemontesi e una carta dedicata anche ai vini biellesi.',
          'La sala principale accoglie fino a 120 persone, la Sala Garden fino a 50 persone; nella bella stagione il dehors estivo amplia il racconto all’aperto.',
          'La colazione è un buffet continentale in tre isole, con dolci fatti in casa, prodotti locali, salato piemontese, yogurt, frutta, semi, centrifughe, spremute, uova e bacon.',
        ],
        highlights: ['Sala principale 120 persone', 'Sala Garden 50 persone', 'Dehors estivo', 'Colazione in tre isole'],
        cta: { label: 'Prenota un tavolo', href: `mailto:${contact.email}` },
        secondaryImage: images.breakfast,
      },
      sport: {
        image: images.sport,
        eyebrow: 'Sport & Activity',
        title: 'Padel, pickleball, bike e piscina.',
        subtitle: 'Il resort integra sport e movimento con 6 campi da padel, 4 campi da pickleball, e-bike, piscina estiva e palestra Technogym.',
        introTitle: 'Per ospiti hotel e visitatori esterni.',
        paragraphs: [
          'Il centro sportivo è pensato per chi soggiorna al relais e per chi arriva da fuori: padel coperto e riscaldato, pickleball, e-bike e spazi fitness.',
          'Piscina estiva e palestra Technogym completano l’esperienza per alternare relax, allenamento e giornate nel verde.',
        ],
        highlights: ['6 campi da padel', '4 campi da pickleball', 'E-bike', 'Piscina estiva', 'Palestra Technogym'],
        cta: { label: 'Chiedi informazioni', href: `mailto:${contact.email}` },
        secondaryImage: images.bike,
      },
      meeting: {
        image: images.meeting,
        eyebrow: 'Meeting ed eventi',
        title: 'Sale modulari per lavoro, incontri e occasioni private.',
        subtitle: 'Tre sale, servizi tecnici e ristorazione interna per meeting aziendali, team building, aperitivi e business dinner.',
        introTitle: 'Spazi chiari, servizi pronti.',
        paragraphs: [
          'La Sala Oropa misura 245 m2, la Sala Bike 155 m2 e la Saletta Les Oliviers 30 m2: tre dimensioni diverse per format aziendali e privati.',
          'Sono disponibili Wi-Fi, diversi setup sala, videoproiettore o schermi, audio/video, HDMI, welcome coffee, coffee break, light lunch, aperitivi e business dinner.',
        ],
        highlights: ['Sala Oropa 245 m2', 'Sala Bike 155 m2', 'Les Oliviers 30 m2', 'Coffee break', 'Light lunch', 'Business dinner'],
        cta: { label: 'Chiedi preventivo', href: `mailto:${contact.email}` },
        secondaryImage: images.meetingOropa,
      },
      territory: {
        image: images.pool,
        eyebrow: 'Territorio',
        title: 'Il Biellese a portata di soggiorno.',
        subtitle: 'Dal relais si raggiungono Oropa, Ricetto di Candelo, Oasi Zegna, Lago di Viverone e luoghi UNESCO del territorio.',
        introTitle: 'Natura, borghi e cultura intorno a Sandigliano.',
        paragraphs: [
          'La posizione del Relais Santo Stefano permette di alternare giornate di relax in struttura a uscite brevi nel Biellese.',
          'Oropa dista circa 20 km, il Ricetto di Candelo è a pochi minuti d’auto e l’Oasi Zegna si raggiunge in meno di mezz’ora.',
        ],
        highlights: itTerritoryPlaces,
        cta: { label: 'Come arrivare', href: contact.mapsUrl, external: true },
        secondaryImage: images.hero,
      },
    },
    en: {
      spa: {
        image: images.spa,
        eyebrow: 'SPA & Wellness',
        title: 'A SPA to recharge, by reservation.',
        subtitle: 'Two floors devoted to wellbeing, with a two-hour path through sauna, steam bath, emotional shower, chromotherapy, whirlpool and relaxation area.',
        introTitle: 'Good time to switch off.',
        paragraphs: [
          'The SPA at Relais Santo Stefano is open from Tuesday to Sunday and welcomes hotel guests and outside visitors by reservation.',
          'Official hours are Tuesday-Saturday 10:00-20:00 and Sunday 10:00-18:00; the SPA is closed on Monday. Access and treatments are paid services.',
        ],
        highlights: ['Sauna', 'Steam bath', 'Emotional shower', 'Chromotherapy', 'Whirlpool', 'Relaxation area'],
        cta: { label: 'Call the SPA', href: `tel:${contact.spaPhone.replace(/\s+/g, '')}` },
        secondaryImage: images.spaMassage,
      },
      restaurant: {
        image: images.restaurant,
        eyebrow: 'Restaurant and breakfast',
        title: 'Biella cuisine, Piedmont wines and curated breakfast.',
        subtitle: 'The restaurant is open every day by reservation, also for outside guests, with cuisine by Chef Piergiorgio Frodi.',
        introTitle: 'Local flavours, olive-tree views and relaxed service.',
        paragraphs: [
          'Since 2016 Chef Piergiorgio Frodi has shaped a cuisine tied to Biella and Piedmont: handmade pasta, local risottos, Piedmont wines and a wine list also dedicated to Biella labels.',
          'The main dining room welcomes up to 120 people and Sala Garden up to 50; in the warm season, the summer dehors expands the experience outdoors.',
          'Breakfast is a continental buffet in three islands, with homemade sweets, local products, Piedmont savoury options, yogurt, fruit, seeds, juices, fresh orange juice, eggs and bacon.',
        ],
        highlights: ['Main room 120 people', 'Sala Garden 50 people', 'Summer dehors', 'Three-island breakfast'],
        cta: { label: 'Book a table', href: `mailto:${contact.email}` },
        secondaryImage: images.breakfast,
      },
      sport: {
        image: images.sport,
        eyebrow: 'Sport & Activity',
        title: 'Padel, pickleball, bikes and pool.',
        subtitle: 'The resort combines sport and movement with 6 padel courts, 4 pickleball courts, e-bikes, summer pool and Technogym gym.',
        introTitle: 'For hotel guests and outside visitors.',
        paragraphs: [
          'The sport centre is designed for relais guests and outside visitors: covered heated padel, pickleball, e-bikes and fitness spaces.',
          'The summer pool and Technogym gym complete the experience, alternating relaxation, training and green days.',
        ],
        highlights: ['6 padel courts', '4 pickleball courts', 'E-bikes', 'Summer pool', 'Technogym gym'],
        cta: { label: 'Ask for information', href: `mailto:${contact.email}` },
        secondaryImage: images.bike,
      },
      meeting: {
        image: images.meeting,
        eyebrow: 'Meetings and events',
        title: 'Modular rooms for work, meetings and private occasions.',
        subtitle: 'Three rooms, technical services and in-house catering for corporate meetings, team building, aperitifs and business dinners.',
        introTitle: 'Clear spaces, ready services.',
        paragraphs: [
          'Sala Oropa measures 245 m2, Sala Bike 155 m2 and Les Oliviers 30 m2: three different sizes for corporate and private formats.',
          'Wi-Fi, different room setups, projector or screens, audio/video, HDMI, welcome coffee, coffee breaks, light lunches, aperitifs and business dinners are available.',
        ],
        highlights: ['Sala Oropa 245 m2', 'Sala Bike 155 m2', 'Les Oliviers 30 m2', 'Coffee break', 'Light lunch', 'Business dinner'],
        cta: { label: 'Request a quote', href: `mailto:${contact.email}` },
        secondaryImage: images.meetingOropa,
      },
      territory: {
        image: images.pool,
        eyebrow: 'Area',
        title: 'The Biella area within easy reach.',
        subtitle: 'From the relais you can reach Oropa, Ricetto di Candelo, Oasi Zegna, Lake Viverone and local UNESCO places.',
        introTitle: 'Nature, villages and culture around Sandigliano.',
        paragraphs: [
          'The location of Relais Santo Stefano lets you alternate days of relaxation at the property with short outings in the Biella area.',
          'Oropa is about 20 km away, Ricetto di Candelo is a few minutes by car and Oasi Zegna is less than half an hour away.',
        ],
        highlights: translatedContent.en.territoryPlaces,
        cta: { label: 'How to arrive', href: contact.mapsUrl, external: true },
        secondaryImage: images.hero,
      },
    },
  };

  pages.de = {
    spa: {
      ...pages.en.spa,
      eyebrow: 'SPA & Wellness',
      title: 'Eine SPA zum Auftanken, auf Reservierung.',
      subtitle: 'Zwei Etagen für Wohlbefinden, mit zweistündigem Parcours durch Sauna, Dampfbad, Erlebnisdusche, Chromotherapie, Whirlpool und Relaxbereich.',
      introTitle: 'Gute Zeit, um den Kopf freizubekommen.',
      paragraphs: ['Die SPA des Relais Santo Stefano ist von Dienstag bis Sonntag geöffnet und empfängt Hotelgäste sowie externe Besucher nach Reservierung.', 'Offizielle Öffnungszeiten: Dienstag-Samstag 10:00-20:00 und Sonntag 10:00-18:00; montags ist die SPA geschlossen. Zugang und Behandlungen sind kostenpflichtig.'],
      highlights: ['Sauna', 'Dampfbad', 'Erlebnisdusche', 'Chromotherapie', 'Whirlpool', 'Relaxbereich'],
      cta: { label: 'SPA anrufen', href: `tel:${contact.spaPhone.replace(/\s+/g, '')}` },
    },
    restaurant: {
      ...pages.en.restaurant,
      eyebrow: 'Restaurant und Frühstück',
      title: 'Küche aus Biella, piemontesische Weine und gepflegtes Frühstück.',
      subtitle: 'Das Restaurant ist täglich auf Reservierung geöffnet, auch für externe Gäste, mit Küche von Chef Piergiorgio Frodi.',
      introTitle: 'Aromen der Region, Blick auf Olivenbäume und entspannter Service.',
      paragraphs: ['Seit 2016 prägt Chef Piergiorgio Frodi eine Küche, die mit Biella und Piemont verbunden ist: hausgemachte Pasta, lokale Risotti, piemontesische Weine und eine Karte mit Biella-Etiketten.', 'Der Hauptsaal empfängt bis zu 120 Personen, die Sala Garden bis zu 50; in der warmen Jahreszeit erweitert der Sommerdehors das Erlebnis im Freien.', 'Das Frühstück ist ein kontinentales Buffet in drei Inseln, mit hausgemachten Süßspeisen, lokalen Produkten, piemontesischem Herzhaftem, Joghurt, Obst, Samen, Säften, frisch gepresstem Saft, Eiern und Bacon.'],
      highlights: ['Hauptsaal 120 Personen', 'Sala Garden 50 Personen', 'Sommerdehors', 'Frühstück in drei Inseln'],
      cta: { label: 'Tisch reservieren', href: `mailto:${contact.email}` },
    },
    sport: {
      ...pages.en.sport,
      eyebrow: 'Sport & Activity',
      title: 'Padel, Pickleball, Bike und Pool.',
      subtitle: 'Das Resort verbindet Sport und Bewegung mit 6 Padelplätzen, 4 Pickleball-Plätzen, E-Bikes, Sommerpool und Technogym-Fitnessraum.',
      introTitle: 'Für Hotelgäste und externe Besucher.',
      paragraphs: ['Das Sportzentrum ist für Gäste des Relais und externe Besucher gedacht: überdachtes beheiztes Padel, Pickleball, E-Bikes und Fitnessbereiche.', 'Sommerpool und Technogym-Fitnessraum ergänzen das Erlebnis zwischen Relax, Training und Tagen im Grünen.'],
      highlights: ['6 Padelplätze', '4 Pickleball-Plätze', 'E-Bikes', 'Sommerpool', 'Technogym-Fitnessraum'],
      cta: { label: 'Informationen anfragen', href: `mailto:${contact.email}` },
    },
    meeting: {
      ...pages.en.meeting,
      eyebrow: 'Meetings und Events',
      title: 'Modulare Räume für Arbeit, Treffen und private Anlässe.',
      subtitle: 'Drei Räume, technische Services und interne Gastronomie für Firmenmeetings, Team Building, Aperitifs und Business Dinner.',
      introTitle: 'Klare Räume, bereite Services.',
      paragraphs: ['Die Sala Oropa misst 245 m2, die Sala Bike 155 m2 und Les Oliviers 30 m2: drei verschiedene Größen für Firmen- und Privatformate.', 'Verfügbar sind WLAN, verschiedene Raum-Setups, Projektor oder Bildschirme, Audio/Video, HDMI, Welcome Coffee, Coffee Break, Light Lunch, Aperitifs und Business Dinner.'],
      highlights: ['Sala Oropa 245 m2', 'Sala Bike 155 m2', 'Les Oliviers 30 m2', 'Coffee break', 'Light lunch', 'Business dinner'],
      cta: { label: 'Angebot anfragen', href: `mailto:${contact.email}` },
    },
    territory: {
      ...pages.en.territory,
      eyebrow: 'Region',
      title: 'Das Biellese in Reichweite.',
      subtitle: 'Vom Relais erreichen Sie Oropa, Ricetto di Candelo, Oasi Zegna, den Viverone-See und UNESCO-Orte der Region.',
      introTitle: 'Natur, Dörfer und Kultur rund um Sandigliano.',
      paragraphs: ['Die Lage des Relais Santo Stefano erlaubt es, entspannte Tage in der Anlage mit kurzen Ausflügen im Biellese zu verbinden.', 'Oropa liegt etwa 20 km entfernt, der Ricetto di Candelo ist wenige Autominuten entfernt und die Oasi Zegna erreicht man in weniger als einer halben Stunde.'],
      highlights: translatedContent.de.territoryPlaces,
      cta: { label: 'Anreise', href: contact.mapsUrl, external: true },
    },
  };

  pages.fr = {
    spa: {
      ...pages.en.spa,
      eyebrow: 'SPA & Wellness',
      title: 'Un SPA pour se ressourcer, sur réservation.',
      subtitle: 'Deux étages dédiés au bien-être, avec parcours de deux heures entre sauna, hammam, douche émotionnelle, chromothérapie, bain à remous et espace relax.',
      introTitle: 'Du bon temps pour décrocher.',
      paragraphs: ['Le SPA du Relais Santo Stefano est ouvert du mardi au dimanche et accueille les hôtes de l’hôtel comme les visiteurs extérieurs sur réservation.', 'Les horaires officiels sont mardi-samedi 10:00-20:00 et dimanche 10:00-18:00 ; le lundi le SPA est fermé. Accès et soins sont payants.'],
      highlights: ['Sauna', 'Hammam', 'Douche émotionnelle', 'Chromothérapie', 'Bain à remous', 'Espace relax'],
      cta: { label: 'Appeler le SPA', href: `tel:${contact.spaPhone.replace(/\s+/g, '')}` },
    },
    restaurant: {
      ...pages.en.restaurant,
      eyebrow: 'Restaurant et petit-déjeuner',
      title: 'Cuisine biellaise, vins piémontais et petit-déjeuner soigné.',
      subtitle: 'Le restaurant est ouvert tous les jours sur réservation, également pour les hôtes extérieurs, avec la cuisine du Chef Piergiorgio Frodi.',
      introTitle: 'Saveurs du territoire, vue sur les oliviers et service détendu.',
      paragraphs: ['Depuis 2016, le Chef Piergiorgio Frodi signe une cuisine liée à Biella et au Piémont : pâtes fraîches maison, risottos locaux, vins piémontais et carte dédiée aussi aux vins biellais.', 'La salle principale accueille jusqu’à 120 personnes, la Sala Garden jusqu’à 50 ; en belle saison, le dehors d’été prolonge l’expérience en extérieur.', 'Le petit-déjeuner est un buffet continental en trois îlots, avec douceurs maison, produits locaux, salé piémontais, yaourts, fruits, graines, centrifugés, jus, œufs et bacon.'],
      highlights: ['Salle principale 120 personnes', 'Sala Garden 50 personnes', 'Dehors d’été', 'Petit-déjeuner en trois îlots'],
      cta: { label: 'Réserver une table', href: `mailto:${contact.email}` },
    },
    sport: {
      ...pages.en.sport,
      eyebrow: 'Sport & Activity',
      title: 'Padel, pickleball, bike et piscine.',
      subtitle: 'Le resort intègre sport et mouvement avec 6 terrains de padel, 4 terrains de pickleball, e-bikes, piscine d’été et salle Technogym.',
      introTitle: 'Pour hôtes de l’hôtel et visiteurs extérieurs.',
      paragraphs: ['Le centre sportif est pensé pour ceux qui séjournent au relais et pour les visiteurs extérieurs : padel couvert et chauffé, pickleball, e-bikes et espaces fitness.', 'Piscine d’été et salle Technogym complètent l’expérience pour alterner détente, entraînement et journées au vert.'],
      highlights: ['6 terrains de padel', '4 terrains de pickleball', 'E-bikes', 'Piscine d’été', 'Salle Technogym'],
      cta: { label: 'Demander des informations', href: `mailto:${contact.email}` },
    },
    meeting: {
      ...pages.en.meeting,
      eyebrow: 'Réunions et événements',
      title: 'Salles modulaires pour travail, rencontres et occasions privées.',
      subtitle: 'Trois salles, services techniques et restauration interne pour réunions d’entreprise, team building, apéritifs et business dinner.',
      introTitle: 'Espaces clairs, services prêts.',
      paragraphs: ['La Sala Oropa mesure 245 m2, la Sala Bike 155 m2 et Les Oliviers 30 m2 : trois dimensions différentes pour formats professionnels et privés.', 'Wi-Fi, différents setups de salle, vidéoprojecteur ou écrans, audio/vidéo, HDMI, welcome coffee, coffee break, light lunch, apéritifs et business dinner sont disponibles.'],
      highlights: ['Sala Oropa 245 m2', 'Sala Bike 155 m2', 'Les Oliviers 30 m2', 'Coffee break', 'Light lunch', 'Business dinner'],
      cta: { label: 'Demander un devis', href: `mailto:${contact.email}` },
    },
    territory: {
      ...pages.en.territory,
      eyebrow: 'Territoire',
      title: 'Le Biellese à portée de séjour.',
      subtitle: 'Depuis le relais, on rejoint Oropa, le Ricetto di Candelo, l’Oasi Zegna, le lac de Viverone et les lieux UNESCO du territoire.',
      introTitle: 'Nature, villages et culture autour de Sandigliano.',
      paragraphs: ['La position du Relais Santo Stefano permet d’alterner journées de détente dans la structure et courtes sorties dans le Biellese.', 'Oropa se trouve à environ 20 km, le Ricetto di Candelo à quelques minutes en voiture et l’Oasi Zegna à moins d’une demi-heure.'],
      highlights: translatedContent.fr.territoryPlaces,
      cta: { label: 'Comment arriver', href: contact.mapsUrl, external: true },
    },
  };

  return {
    ...pages[language],
    contactTitle: shared.contactTitle[language],
    contactText: shared.contactText[language],
  };
}

for (const language of ['en', 'de', 'fr']) {
  translatedContent[language] = {
    ...translatedContent[language],
    ...sharedPageTranslations[language],
  };
}

for (const language of supportedLanguageCodes) {
  translatedContent[language].experiencePages = buildExperiencePages(language);
}

export function getLanguageFromPath(pathname) {
  const firstSegment = pathname.split('/').filter(Boolean)[0];
  return supportedLanguageCodes.includes(firstSegment) ? firstSegment : defaultLanguage;
}

export function stripLanguageFromPath(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length && supportedLanguageCodes.includes(segments[0])) {
    segments.shift();
  }
  return segments.length ? `/${segments.join('/')}` : '/';
}

export function localizePath(target, language = defaultLanguage) {
  if (!target || /^(https?:|mailto:|tel:)/i.test(target)) {
    return target;
  }

  const url = new URL(target, 'https://local.test');
  const normalizedPath = url.pathname.replace(/\/+$/, '') || '/';
  const localizedPath =
    language === defaultLanguage
      ? normalizedPath
      : `/${language}${normalizedPath === '/' ? '' : normalizedPath}`;

  return `${localizedPath}${url.search}${url.hash}`;
}

export function switchLanguagePath(pathname, search, hash, language) {
  const cleanPath = stripLanguageFromPath(pathname).replace(/\/+$/, '') || '/';
  const canonicalPath = aliasRedirects[cleanPath] || cleanPath;
  return localizePath(`${canonicalPath}${search || ''}${hash || ''}`, language);
}

export function getContent(language) {
  return translatedContent[language] || translatedContent[defaultLanguage];
}

export function getLocalizedSeo(language, pathname) {
  const content = getContent(language);
  if (pathname.startsWith('/camere-suite/')) {
    return content.seo['/camere-suite'];
  }
  return content.seo[pathname] || content.seo[aliasRedirects[pathname]] || content.seo['/'];
}

export function createLocalizedHotelSchema(language) {
  const content = getContent(language);
  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: brand.name,
    url: brand.baseUrl,
    telephone: contact.phone,
    email: contact.email,
    inLanguage: language,
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
    amenityFeature: content.services.map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true,
    })),
    image: images.hero.src,
  };
}

export function useI18n() {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);
  const content = getContent(language);
  const languageOption = languageOptions.find((item) => item.code === language) || languageOptions[0];

  return {
    language,
    locale: content.locale || languageOption.locale,
    bookingLanguage: content.bookingLanguage || languageOption.booking,
    content,
    path: (target) => localizePath(target, language),
    switchPath: (nextLanguage) =>
      switchLanguagePath(location.pathname, location.search, location.hash, nextLanguage),
  };
}
