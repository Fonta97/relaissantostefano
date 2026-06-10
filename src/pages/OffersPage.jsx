import PageHero from '../components/PageHero';
import { contact, images, offers } from '../lib/siteData';

function OffersPage() {
  return (
    <>
      <PageHero
        image={images.offers}
        eyebrow="Offerte e Gift Card"
        title="Idee per regalare tempo, relax e soggiorno."
        subtitle="Pacchetti romantici, proposte benessere e gift card da confermare con la struttura per disponibilità, condizioni e personalizzazioni."
        priority
        actions={
          <>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex justify-center border border-bronze bg-bronze px-6 py-3 font-ui text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-sage"
            >
              Chiedi informazioni
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s+/g, '')}`}
              className="inline-flex justify-center border border-white/45 px-6 py-3 font-ui text-xs font-semibold uppercase tracking-[0.14em] text-white hover:bg-white/14"
            >
              Chiama
            </a>
          </>
        }
      />

      <section data-reveal className="reveal-scroll grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Pacchetti</p>
          <h2 className="mt-4 font-serif text-[2.45rem] leading-[1.05] text-graphite sm:text-[3.7rem]">
            Soggiorni romantici, benessere e gift card.
          </h2>
        </div>
        <p className="font-body text-base leading-8 text-body">
          Le offerte del Relais Santo Stefano sono pensate per coppie, momenti speciali e regali legati alla SPA. Prezzi e contenuti vanno sempre verificati con il relais perché possono variare in base a date e disponibilità.
        </p>
      </section>

      <section data-reveal className="reveal-scroll grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {offers.map((offer) => (
          <article key={offer.title} className="border border-black/10 bg-white p-6">
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-bronze">{offer.price}</p>
            <h3 className="mt-4 font-serif text-[2rem] leading-tight text-graphite">{offer.title}</h3>
            <p className="mt-5 font-body text-sm leading-7 text-body">{offer.text}</p>
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent(`Richiesta offerta ${offer.title}`)}`}
              className="mt-7 inline-flex border border-black/10 px-4 py-3 font-ui text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:border-bronze hover:text-bronze"
            >
              Richiedi offerta
            </a>
          </article>
        ))}
      </section>

      <section data-reveal className="reveal-scroll bg-sage px-6 py-10 text-white sm:px-10 lg:px-14">
        <p className="max-w-4xl font-serif text-[2.25rem] leading-[1.08] sm:text-[3.15rem]">
          Date flessibili o regalo personalizzato? Il relais può confermare condizioni, disponibilità e integrazioni del soggiorno.
        </p>
      </section>
    </>
  );
}

export default OffersPage;
