import PageHero from '../components/PageHero';
import { useI18n } from '../lib/i18n';
import { contact, images } from '../lib/siteData';

function OffersPage() {
  const { content } = useI18n();
  const copy = content.offersPage;

  return (
    <>
      <PageHero
        image={images.offers}
        eyebrow={copy.heroEyebrow}
        title={copy.heroTitle}
        subtitle={copy.heroSubtitle}
        priority
        actions={
          <>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex justify-center border border-bronze bg-bronze px-7 py-3.5 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-espresso transition-colors hover:bg-bronze-light"
            >
              {content.shared.askInfo}
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s+/g, '')}`}
              className="inline-flex justify-center border border-white/45 px-7 py-3.5 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-white hover:text-espresso"
            >
              {content.shared.call}
            </a>
          </>
        }
      />

      <section data-reveal className="reveal-scroll grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-bronze">{copy.packagesEyebrow}</p>
          <h2 className="mt-4 font-serif text-[3rem] font-medium leading-[0.94] text-graphite sm:text-[5.1rem]">
            {copy.packagesTitle}
          </h2>
        </div>
        <p className="font-body text-base leading-8 text-body">
          {copy.packagesText}
        </p>
      </section>

      <section data-reveal className="reveal-scroll grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {content.offers.map((offer) => (
          <article key={offer.title} className="border border-black/10 bg-mist p-6 transition-colors hover:border-bronze/60">
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-bronze">{offer.price}</p>
            <h3 className="mt-4 font-serif text-[2.25rem] font-medium leading-tight text-graphite">{offer.title}</h3>
            <p className="mt-5 font-body text-sm leading-7 text-body">{offer.text}</p>
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent(`${copy.subjectPrefix} ${offer.title}`)}`}
              className="mt-7 inline-flex border border-black/10 px-4 py-3 font-ui text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:border-bronze hover:text-bronze"
            >
              {content.shared.requestOffer}
            </a>
          </article>
        ))}
      </section>

      <section data-reveal className="reveal-scroll bg-espresso px-6 py-12 text-white shadow-editorial sm:px-10 lg:px-14">
        <p className="max-w-5xl font-serif text-[3rem] font-medium leading-[0.98] sm:text-[5rem]">
          {copy.finalText}
        </p>
      </section>
    </>
  );
}

export default OffersPage;
