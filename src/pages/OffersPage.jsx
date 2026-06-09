import PageHero from '../components/PageHero';
import { contact, images, offers } from '../lib/siteData';

function OffersPage() {
  return (
    <>
      <PageHero
        image={images.offers}
        eyebrow="Offerte e Gift Card"
        title="Idee per regalare tempo, relax e soggiorno."
        subtitle="Pacchetti romantici, proposte benessere e gift card: i prezzi derivano dal sito originale e vanno confermati con la struttura."
        priority
        actions={
          <>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex justify-center border border-bronze bg-bronze px-6 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-white"
            >
              Richiedi disponibilità
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s+/g, '')}`}
              className="inline-flex justify-center border border-white/35 px-6 py-3 font-ui text-xs uppercase tracking-[0.16em] text-white hover:bg-white/14"
            >
              Chiama
            </a>
          </>
        }
      />

      <section data-reveal className="reveal-scroll grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="font-ui text-xs uppercase tracking-[0.24em] text-bronze">Pacchetti</p>
          <h2 className="mt-4 font-serif text-[2.8rem] leading-[0.96] sm:text-[4.3rem]">
            Una base chiara per vendere meglio.
          </h2>
        </div>
        <p className="font-ui text-base leading-8 text-graphite/72">
          Le offerte sono state riorganizzate in card comparabili: nome, prezzo di partenza e promessa sintetica. Nella versione finale andranno collegate al booking o allo shop ufficiale aggiornato.
        </p>
      </section>

      <section data-reveal className="reveal-scroll grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {offers.map((offer) => (
          <article key={offer.title} className="border border-black/10 bg-white p-6 shadow-soft">
            <p className="font-ui text-xs uppercase tracking-[0.18em] text-bronze">{offer.price}</p>
            <h3 className="mt-4 font-serif text-[2.25rem] leading-none">{offer.title}</h3>
            <p className="mt-5 font-ui text-sm leading-7 text-graphite/72">{offer.text}</p>
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent(`Richiesta offerta ${offer.title}`)}`}
              className="mt-7 inline-flex border border-black/10 px-4 py-3 font-ui text-xs uppercase tracking-[0.16em] transition-colors hover:border-bronze hover:text-bronze"
            >
              Richiedi offerta
            </a>
          </article>
        ))}
      </section>

      <section data-reveal className="reveal-scroll bg-graphite px-6 py-10 text-white sm:px-10 lg:px-14">
        <p className="max-w-4xl font-serif text-[2.4rem] leading-[1.04] sm:text-[3.5rem]">
          Date flessibili o regalo personalizzato? Il relais può confermare disponibilità, condizioni e integrazioni del soggiorno.
        </p>
      </section>
    </>
  );
}

export default OffersPage;
