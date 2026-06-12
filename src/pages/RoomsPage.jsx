import { Link } from 'react-router-dom';

import BookingWidget from '../components/BookingWidget';
import PageHero from '../components/PageHero';
import { useI18n } from '../lib/i18n';
import { getPremiumRooms } from '../lib/roomData';
import { images } from '../lib/siteData';

function RoomsPage() {
  const { content, path } = useI18n();
  const copy = content.roomsPage;
  const rooms = getPremiumRooms(content);

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

      <section data-reveal className="reveal-scroll grid gap-8 lg:grid-cols-[0.36fr_0.64fr]">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.24em] text-olive">{copy.introEyebrow}</p>
          <h2 className="mt-4 font-serif text-[3.2rem] font-medium leading-[0.88] text-graphite sm:text-[5.8rem]">
            {copy.introTitle}
          </h2>
        </div>
        <div className="space-y-5 font-body text-base leading-8 text-body">
          {copy.introParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 42)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll">
        <div className="border-y border-black/12">
          {rooms.map((room) => (
            <Link
              key={room.slug}
              to={path(`/camere-suite/${room.slug}`)}
              className="group grid items-center gap-5 border-b border-black/12 py-5 last:border-b-0 lg:grid-cols-[0.1fr_0.24fr_1fr_0.2fr_0.2fr_0.18fr]"
            >
              <span className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-olive">{room.number}</span>
              <span className="hidden aspect-[4/3] overflow-hidden bg-espresso lg:block">
                <img
                  src={room.image.src}
                  alt={room.image.alt}
                  width={room.image.width}
                  height={room.image.height}
                  className="image-breathe h-full w-full object-cover"
                  style={{ objectPosition: room.image.objectPosition || 'center center' }}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span>
                <span className="block font-serif text-[3.1rem] font-medium leading-[0.88] text-graphite transition-colors group-hover:text-olive sm:text-[5.4rem]">
                  {room.name}
                </span>
                <span className="mt-4 block max-w-2xl font-body text-sm leading-7 text-body lg:hidden">{room.summary}</span>
              </span>
              <span className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-body">{room.size}</span>
              <span className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-body">{room.bed}</span>
              <span className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-olive">{copy.bookNow}</span>
            </Link>
          ))}
        </div>
      </section>

      <section data-reveal className="reveal-scroll grid gap-8 bg-espresso px-6 py-12 text-white sm:px-10 lg:grid-cols-[0.36fr_0.64fr] lg:px-14">
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-bronze-light">
            {copy.amenitiesEyebrow}
          </p>
          <h2 className="mt-4 font-serif text-[3.2rem] font-medium leading-[0.9] sm:text-[5.4rem]">
            {copy.amenitiesTitle}
          </h2>
          <p className="mt-5 max-w-xl font-body text-sm leading-7 text-white/78">{copy.amenitiesText}</p>
        </div>
        <div className="grid gap-px bg-white/12 p-px sm:grid-cols-2 lg:grid-cols-5">
          {[...content.roomAmenities, ...content.roomRequestAmenities].map((amenity, index) => (
            <div key={`${amenity}-${index}`} className="room-amenity-tile bg-white/[0.055] px-4 py-5">
              <span className="font-ui text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-bronze-light">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-5 font-body text-sm leading-6 text-white/86">{amenity}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default RoomsPage;
