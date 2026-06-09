import PageHero from '../components/PageHero';
import { bookingUrl, contact, images } from '../lib/siteData';

function ContactCard({ label, children }) {
  return (
    <article className="border border-black/10 bg-white p-6 shadow-soft">
      <p className="font-ui text-xs uppercase tracking-[0.2em] text-bronze">{label}</p>
      <div className="mt-4 font-ui text-base leading-8 text-graphite/74">{children}</div>
    </article>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        image={images.hero}
        eyebrow="Contatti"
        title="Arrivare al Relais Santo Stefano."
        subtitle="Siamo in Via Garibaldi 5, a Sandigliano, alle porte di Biella. Scrivici o chiamaci per soggiorni, SPA, ristorante ed eventi."
        priority
        actions={
          <>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center border border-bronze bg-bronze px-6 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-white"
            >
              Prenota soggiorno
            </a>
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center border border-white/35 px-6 py-3 font-ui text-xs uppercase tracking-[0.16em] text-white hover:bg-white/14"
            >
              Apri mappa
            </a>
          </>
        }
      />

      <section data-reveal className="reveal-scroll grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <ContactCard label="Indirizzo">
          <p>{contact.address}</p>
          <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-bronze hover:text-graphite">
            Google Maps
          </a>
        </ContactCard>
        <ContactCard label="Hotel">
          <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="block text-graphite hover:text-bronze">
            {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="mt-2 block break-words text-graphite hover:text-bronze">
            {contact.email}
          </a>
        </ContactCard>
        <ContactCard label="SPA">
          <a href={`tel:${contact.spaPhone.replace(/\s+/g, '')}`} className="block text-graphite hover:text-bronze">
            {contact.spaPhone}
          </a>
          <a href={`mailto:${contact.spaEmail}`} className="mt-2 block break-words text-graphite hover:text-bronze">
            {contact.spaEmail}
          </a>
        </ContactCard>
        <ContactCard label="Dati societari">
          <p>Relais Santo Stefano</p>
          <p>P. IVA {contact.vat}</p>
        </ContactCard>
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-ui text-xs uppercase tracking-[0.24em] text-bronze">Richieste</p>
          <h2 className="mt-4 font-serif text-[2.8rem] leading-[0.96] sm:text-[4.3rem]">
            Scrivi una richiesta precisa, ricevi una risposta utile.
          </h2>
          <p className="mt-6 font-ui text-base leading-8 text-graphite/72">
            Per date, preventivi meeting, tavoli ristorante, trattamenti SPA o esigenze particolari, indica periodo, numero di ospiti e preferenze.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href={`mailto:${contact.email}?subject=${encodeURIComponent('Richiesta soggiorno Relais Santo Stefano')}`}
            className="border border-black/10 bg-white px-5 py-5 font-ui text-sm uppercase tracking-[0.14em] text-graphite transition-colors hover:border-bronze hover:text-bronze"
          >
            Richiesta soggiorno
          </a>
          <a
            href={`mailto:${contact.spaEmail}?subject=${encodeURIComponent('Richiesta SPA Relais Santo Stefano')}`}
            className="border border-black/10 bg-white px-5 py-5 font-ui text-sm uppercase tracking-[0.14em] text-graphite transition-colors hover:border-bronze hover:text-bronze"
          >
            Richiesta SPA
          </a>
          <a
            href={`mailto:${contact.email}?subject=${encodeURIComponent('Richiesta ristorante Relais Santo Stefano')}`}
            className="border border-black/10 bg-white px-5 py-5 font-ui text-sm uppercase tracking-[0.14em] text-graphite transition-colors hover:border-bronze hover:text-bronze"
          >
            Ristorante
          </a>
          <a
            href={`mailto:${contact.email}?subject=${encodeURIComponent('Richiesta meeting ed eventi Relais Santo Stefano')}`}
            className="border border-black/10 bg-white px-5 py-5 font-ui text-sm uppercase tracking-[0.14em] text-graphite transition-colors hover:border-bronze hover:text-bronze"
          >
            Meeting ed eventi
          </a>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2">
        <iframe
          title="Google Maps - Relais Santo Stefano"
          src={contact.mapEmbed}
          className="h-[72vh] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}

export default ContactPage;
