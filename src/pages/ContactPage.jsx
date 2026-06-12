import { Link } from 'react-router-dom';

import PageHero from '../components/PageHero';
import { useI18n } from '../lib/i18n';
import { contact, images } from '../lib/siteData';

function ContactCard({ label, children }) {
  return (
    <article className="border border-black/10 bg-warm-white p-6">
      <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-olive">{label}</p>
      <div className="mt-4 font-body text-base leading-8 text-body">{children}</div>
    </article>
  );
}

function ContactPage() {
  const { content, path } = useI18n();
  const copy = content.contactPage;

  return (
    <>
      <PageHero
        image={images.welcome}
        eyebrow={copy.heroEyebrow}
        title={copy.heroTitle}
        subtitle={copy.heroSubtitle}
        priority
        actions={
          <>
            <Link
              to={path('/#booking')}
              className="inline-flex justify-center bg-olive px-7 py-3.5 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-olive-dark"
            >
              {content.shared.bookStay}
            </Link>
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center border border-white/45 px-7 py-3.5 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-white hover:text-espresso"
            >
              {content.shared.openMap}
            </a>
          </>
        }
      />

      <section data-reveal className="reveal-scroll grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <ContactCard label={copy.address}>
          <p>{contact.address}</p>
          <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-olive hover:text-olive-dark">
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
        <ContactCard label={copy.company}>
          <p>Relais Santo Stefano</p>
          <p>P. IVA {contact.vat}</p>
        </ContactCard>
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-olive">{copy.requestsEyebrow}</p>
          <h2 className="mt-4 font-serif text-[3.1rem] font-medium leading-[0.9] text-graphite sm:text-[5.5rem]">
            {copy.requestsTitle}
          </h2>
          <p className="mt-6 font-body text-base leading-8 text-body">
            {copy.requestsText}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href={`mailto:${contact.email}?subject=${encodeURIComponent(copy.staySubject)}`}
            className="border border-black/10 bg-warm-white px-5 py-5 font-ui text-sm font-semibold uppercase tracking-[0.14em] text-graphite transition-colors hover:border-olive hover:text-olive"
          >
            {copy.stayRequest}
          </a>
          <a
            href={`mailto:${contact.spaEmail}?subject=${encodeURIComponent(copy.spaSubject)}`}
            className="border border-black/10 bg-warm-white px-5 py-5 font-ui text-sm font-semibold uppercase tracking-[0.14em] text-graphite transition-colors hover:border-olive hover:text-olive"
          >
            {copy.spaRequest}
          </a>
          <a
            href={`mailto:${contact.email}?subject=${encodeURIComponent(copy.restaurantSubject)}`}
            className="border border-black/10 bg-warm-white px-5 py-5 font-ui text-sm font-semibold uppercase tracking-[0.14em] text-graphite transition-colors hover:border-olive hover:text-olive"
          >
            {copy.restaurantRequest}
          </a>
          <a
            href={`mailto:${contact.email}?subject=${encodeURIComponent(copy.meetingSubject)}`}
            className="border border-black/10 bg-warm-white px-5 py-5 font-ui text-sm font-semibold uppercase tracking-[0.14em] text-graphite transition-colors hover:border-olive hover:text-olive"
          >
            {copy.meetingRequest}
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
