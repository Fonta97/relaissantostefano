import { Link } from 'react-router-dom';

import PageHero from '../components/PageHero';
import { useI18n } from '../lib/i18n';
import { contact } from '../lib/siteData';

function ExperiencePage({ type }) {
  const { content, path } = useI18n();
  const page = content.experiencePages[type] || content.experiencePages.spa;

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
              className="inline-flex justify-center border border-bronze bg-bronze px-7 py-3.5 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-espresso transition-colors hover:bg-bronze-light"
            >
              {page.cta.label}
            </a>
            <Link
              to={path('/#booking')}
              className="inline-flex justify-center border border-white/45 px-7 py-3.5 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-white hover:text-espresso"
            >
              {content.shared.bookStay}
            </Link>
          </>
        }
      />

      <section data-reveal className="reveal-scroll grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-bronze">{page.eyebrow}</p>
          <h2 className="mt-4 font-serif text-[3rem] font-medium leading-[0.94] text-graphite sm:text-[5.1rem]">
            {page.introTitle}
          </h2>
        </div>
        <div className="space-y-5 font-body text-base leading-8 text-body">
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 42)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <img
          src={page.secondaryImage.src}
          alt={page.secondaryImage.alt}
          width={page.secondaryImage.width}
          height={page.secondaryImage.height}
          className="image-breathe min-h-[24rem] w-full object-cover"
          style={{ objectPosition: page.secondaryImage.objectPosition || 'center center' }}
          loading="lazy"
          decoding="async"
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {page.highlights.map((item) => (
            <div key={item} className="border border-black/10 bg-mist px-5 py-5">
              <p className="font-body text-sm leading-7 text-body">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 bg-espresso px-6 py-12 text-white shadow-editorial sm:px-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-14">
        <h2 className="font-serif text-[3rem] font-medium leading-[0.95] sm:text-[5rem]">
          {content.experiencePages.contactTitle}
        </h2>
        <div>
          <p className="font-body text-base leading-8 text-white/88">
            {content.experiencePages.contactText}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="border border-bronze bg-bronze px-5 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-espresso transition-colors hover:bg-bronze-light">
              {content.shared.hotelCall}
            </a>
            <Link to={path('/contatti')} className="border border-white/30 px-5 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-white hover:bg-white hover:text-espresso">
              {content.shared.goContacts}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ExperiencePage;
