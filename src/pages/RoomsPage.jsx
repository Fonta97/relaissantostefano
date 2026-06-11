import { Link } from 'react-router-dom';

import BookingWidget from '../components/BookingWidget';
import PageHero from '../components/PageHero';
import { useI18n } from '../lib/i18n';
import { images } from '../lib/siteData';

function roomAnchor(index) {
  return `room-${String(index + 1).padStart(2, '0')}`;
}

function RoomsPage() {
  const { content, path } = useI18n();
  const copy = content.roomsPage;

  return (
    <>
      <PageHero
        image={images.room}
        eyebrow={copy.heroEyebrow}
        title={copy.heroTitle}
        subtitle={copy.heroSubtitle}
        priority
        actions={
          <>
            <a
              href="#booking-rooms"
              className="inline-flex justify-center border border-bronze bg-bronze px-7 py-3.5 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-espresso transition-colors hover:bg-bronze-light"
            >
              {copy.checkAvailability}
            </a>
            <Link
              to={path('/contatti')}
              className="inline-flex justify-center border border-white/45 px-7 py-3.5 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-white hover:text-espresso"
            >
              {content.shared.askInfo}
            </Link>
          </>
        }
      />

      <BookingWidget id="booking-rooms" variant="compact" className="-mt-8" />

      <section data-reveal className="reveal-scroll grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-bronze">{copy.introEyebrow}</p>
          <h2 className="mt-4 font-serif text-[3rem] font-medium leading-[0.94] text-graphite sm:text-[5.1rem]">
            {copy.introTitle}
          </h2>
        </div>
        <div className="space-y-5 font-body text-base leading-8 text-body">
          {copy.introParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 42)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 bg-espresso px-6 py-10 text-white shadow-editorial sm:px-10 lg:grid-cols-[0.72fr_1.28fr] lg:px-14">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-bronze-light">
            {copy.amenitiesEyebrow}
          </p>
          <h2 className="mt-4 font-serif text-[3rem] font-medium leading-[0.95] sm:text-[4.8rem]">
            {copy.amenitiesTitle}
          </h2>
          <p className="mt-5 max-w-xl font-body text-sm leading-7 text-white/78">
            {copy.amenitiesText}
          </p>
          <div className="mt-7 border-t border-white/12 pt-5">
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-bronze-light">
              {copy.onRequest}
            </p>
            <ul className="mt-4 space-y-3 font-body text-sm leading-6 text-white/78">
              {content.roomRequestAmenities.map((amenity) => (
                <li key={amenity} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid gap-px bg-white/12 p-px sm:grid-cols-2 lg:grid-cols-4">
          {content.roomAmenities.map((amenity, index) => (
            <div
              key={amenity}
              className="room-amenity-tile bg-white/[0.055] px-4 py-5"
              style={{ '--reveal-delay': `${index * 44}ms` }}
            >
              <span className="font-ui text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-bronze-light">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-5 font-body text-sm leading-6 text-white/86">{amenity}</p>
            </div>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 lg:grid-cols-[minmax(13rem,0.34fr)_1fr]">
        <aside className="hidden h-fit lg:sticky lg:top-32 lg:block">
          <div className="border-y border-black/12 py-6">
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-bronze">
              {copy.typesEyebrow}
            </p>
            <h2 className="mt-4 font-serif text-[3.2rem] font-medium leading-[0.92] text-graphite">
              {copy.typesTitle}
            </h2>
            <p className="mt-5 font-body text-sm leading-7 text-body">
              {copy.typesText}
            </p>
            <nav className="mt-8 grid gap-2" aria-label={copy.typesEyebrow}>
              {content.rooms.map((room, index) => (
                <a
                  key={room.name}
                  href={`#${roomAnchor(index)}`}
                  className="group grid grid-cols-[2.4rem_1fr] items-center border-t border-black/10 py-3 font-ui text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-body transition-colors hover:text-bronze"
                >
                  <span className="text-bronze">{String(index + 1).padStart(2, '0')}</span>
                  <span>{room.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="space-y-6">
          <div className="lg:hidden">
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-bronze">
              {copy.typesEyebrow}
            </p>
            <h2 className="mt-4 font-serif text-[3rem] font-medium leading-[0.95] text-graphite">
              {copy.typesTitle}
            </h2>
            <p className="mt-5 font-body text-base leading-8 text-body">
              {copy.typesText}
            </p>
          </div>

          {content.rooms.map((room, index) => (
            <article
              id={roomAnchor(index)}
              key={room.name}
              className="room-editorial-card group grid scroll-mt-32 overflow-hidden border border-black/10 bg-mist lg:min-h-[34rem] lg:grid-cols-[1.03fr_0.97fr]"
              style={{ '--reveal-delay': `${index * 70}ms`, '--room-index': `"${String(index + 1).padStart(2, '0')}"` }}
            >
              <div className={`${index % 2 ? 'lg:order-2' : ''} room-media-frame relative min-h-[24rem] overflow-hidden bg-graphite`}>
                <img
                  src={room.image.src}
                  alt={room.image.alt}
                  width={room.image.width}
                  height={room.image.height}
                  className="image-breathe h-full min-h-[24rem] w-full object-cover"
                  style={{ objectPosition: room.image.objectPosition || 'center center' }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="glass-image-overlay absolute inset-0" />
              </div>
              <div className="relative flex min-h-full flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div>
                  <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-bronze">
                    {String(index + 1).padStart(2, '0')} / {room.eyebrow}
                  </p>
                  <h3 className="mt-4 font-serif text-[2.9rem] font-medium leading-[0.92] text-graphite sm:text-[4.4rem]">
                    {room.name}
                  </h3>
                  <p className="mt-6 max-w-xl font-body text-base leading-8 text-body">
                    {room.summary}
                  </p>
                </div>

                <div className="mt-8 grid gap-px bg-espresso/10 p-px">
                  {room.details.map((detail) => (
                    <span key={detail} className="bg-ivory px-4 py-3 font-ui text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-body">
                      {detail}
                    </span>
                  ))}
                </div>
                <a
                  href="#booking-rooms"
                  className="mt-8 inline-flex w-fit border border-bronze bg-bronze px-5 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-espresso transition-colors hover:bg-bronze-light"
                >
                  {copy.bookNow}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 bg-espresso px-6 py-12 text-white shadow-editorial sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-14">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-white/82">{copy.spaEyebrow}</p>
          <h2 className="mt-4 font-serif text-[3rem] font-medium leading-[0.95] sm:text-[5rem]">
            {copy.spaTitle}
          </h2>
          <p className="mt-5 max-w-2xl font-body text-sm leading-7 text-white/82">
            {copy.spaText}
          </p>
          <img
            src={images.roomSpaSuite.src}
            alt={images.roomSpaSuite.alt}
            width={images.roomSpaSuite.width}
            height={images.roomSpaSuite.height}
            className="mt-8 aspect-[4/3] w-full object-cover"
            style={{ objectPosition: images.roomSpaSuite.objectPosition || 'center center' }}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="grid gap-4">
          {content.spaSuites.map((suite) => (
            <article key={suite.name} className="border border-white/16 bg-white/8 p-5">
              <h3 className="font-serif text-[1.8rem] leading-tight">{suite.name}</h3>
              <p className="mt-4 font-body text-sm leading-7 text-white/88">{suite.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {suite.details.map((detail) => (
                  <span key={detail} className="border border-white/18 px-3 py-2 font-ui text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-white/82">
                    {detail}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll space-y-8">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-bronze">{copy.servicesEyebrow}</p>
          <h2 className="mt-4 font-serif text-[3rem] font-medium leading-[0.95] text-graphite sm:text-[5rem]">
            {copy.servicesTitle}
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {content.services.map((service) => (
            <div key={service} className="border border-black/10 bg-mist px-4 py-4 font-body text-sm leading-6 text-body">
              {service}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default RoomsPage;
