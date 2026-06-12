import { Link } from 'react-router-dom';

import BookingWidget from '../components/BookingWidget';
import PageHero from '../components/PageHero';
import { useI18n } from '../lib/i18n';
import { images } from '../lib/siteData';

function roomAnchor(index) {
  return `room-${String(index + 1).padStart(2, '0')}`;
}

function buildPremiumRooms(content) {
  return [
    ...content.spaSuites.slice().reverse(),
    ...content.rooms.filter((room) =>
      /suite|tower|junior|deluxe|superior|standard|comfort|singola|single/i.test(room.name)
    ),
  ];
}

function RoomsPage() {
  const { content, path } = useI18n();
  const copy = content.roomsPage;
  const premiumRooms = buildPremiumRooms(content);

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
              className="inline-flex justify-center bg-olive px-7 py-3.5 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-olive-dark"
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

      <section data-reveal className="reveal-scroll grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-olive">{copy.introEyebrow}</p>
          <h2 className="mt-4 font-serif text-[3.1rem] font-medium leading-[0.9] text-graphite sm:text-[5.6rem]">
            {copy.introTitle}
          </h2>
        </div>
        <div className="space-y-5 font-body text-base leading-8 text-body">
          {copy.introParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 42)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 bg-espresso px-6 py-12 text-white shadow-editorial sm:px-10 lg:grid-cols-[0.72fr_1.28fr] lg:px-14">
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
        </div>
        <div className="grid gap-px bg-white/12 p-px sm:grid-cols-2 lg:grid-cols-5">
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

      <section data-reveal className="reveal-scroll grid gap-8 lg:grid-cols-[minmax(14rem,0.32fr)_1fr]">
        <aside className="hidden h-fit lg:sticky lg:top-32 lg:block">
          <div className="border-y border-black/12 py-6">
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-olive">
              {copy.typesEyebrow}
            </p>
            <h2 className="mt-4 font-serif text-[3.2rem] font-medium leading-[0.9] text-graphite">
              {copy.typesTitle}
            </h2>
            <p className="mt-5 font-body text-sm leading-7 text-body">
              {copy.typesText}
            </p>
            <nav className="mt-8 grid gap-1" aria-label={copy.typesEyebrow}>
              {premiumRooms.map((room, index) => (
                <a
                  key={`${room.name}-nav`}
                  href={`#${roomAnchor(index)}`}
                  className="group grid grid-cols-[2.4rem_1fr] items-center border-t border-black/10 py-3 font-ui text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-body transition-colors hover:text-olive"
                >
                  <span className="text-olive">{String(index + 1).padStart(2, '0')}</span>
                  <span>{room.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="space-y-8">
          <div className="lg:hidden">
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-olive">
              {copy.typesEyebrow}
            </p>
            <h2 className="mt-4 font-serif text-[3rem] font-medium leading-[0.95] text-graphite">
              {copy.typesTitle}
            </h2>
            <p className="mt-5 font-body text-base leading-8 text-body">
              {copy.typesText}
            </p>
          </div>

          {premiumRooms.map((room, index) => (
            <article
              id={roomAnchor(index)}
              key={`${room.name}-${index}`}
              className="room-editorial-card scroll-mt-32 overflow-hidden border border-black/10 bg-warm-white"
              style={{ '--room-index': `"${String(index + 1).padStart(2, '0')}"` }}
            >
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                <div className={`${index % 2 ? 'lg:order-2' : ''} room-media-frame relative min-h-[30rem] overflow-hidden bg-graphite`}>
                  <img
                    src={room.image.src}
                    alt={room.image.alt}
                    width={room.image.width}
                    height={room.image.height}
                    className="image-breathe h-full min-h-[30rem] w-full object-cover"
                    style={{ objectPosition: room.image.objectPosition || 'center center' }}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="glass-image-overlay absolute inset-0" />
                </div>
                <div className="flex min-h-full flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div>
                    <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-olive">
                      {String(index + 1).padStart(2, '0')} / {room.eyebrow || copy.typesEyebrow}
                    </p>
                    <h2 className="mt-4 font-serif text-[3.15rem] font-medium leading-[0.9] text-graphite sm:text-[5.2rem]">
                      {room.name}
                    </h2>
                    <p className="mt-6 max-w-xl font-body text-base leading-8 text-body">
                      {room.summary}
                    </p>
                  </div>

                  <div className="mt-8 grid gap-px bg-espresso/10 p-px sm:grid-cols-2">
                    {room.details.map((detail) => (
                      <span key={detail} className="bg-ivory px-4 py-3 font-ui text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-body">
                        {detail}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#booking-rooms"
                    className="mt-8 inline-flex w-fit bg-olive px-5 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-olive-dark"
                  >
                    {copy.bookNow}
                  </a>
                </div>
              </div>
              <div className="grid gap-px bg-black/10 p-px sm:grid-cols-3">
                {[room.image, images.roomBalcony, index < 3 ? images.spa : images.welcome].map((image, imageIndex) => (
                  <img
                    key={`${room.name}-${imageIndex}`}
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="aspect-[4/3] w-full object-cover"
                    style={{ objectPosition: image.objectPosition || 'center center' }}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
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
    </>
  );
}

export default RoomsPage;
