import { useI18n } from '../lib/i18n';

function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  actions,
  align = 'start',
  priority = false,
  minHeight = 'min-h-[82svh]',
}) {
  const { content } = useI18n();
  const textAlign = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  const titleSize =
    title.length > 34
      ? 'text-[2.65rem] sm:text-[4.7rem] lg:text-[6rem]'
      : 'text-[3.05rem] sm:text-[6rem] lg:text-[8.2rem]';

  return (
    <section className="relative left-1/2 -mt-24 w-screen -translate-x-1/2 overflow-hidden bg-espresso text-white sm:-mt-28 lg:-mt-32">
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="hero-media-enter absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: image.objectPosition || 'center center' }}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        sizes="100vw"
      />
      <div className="hero-readable-overlay absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ivory to-transparent" />

      <div
        className={`relative mx-auto flex ${minHeight} w-full max-w-[104rem] flex-col justify-end ${textAlign} px-5 pb-20 pt-32 sm:px-8 sm:pb-24 lg:px-14 lg:pb-28 lg:pt-40`}
      >
        <p className="reveal-fade font-ui text-xs font-semibold uppercase tracking-[0.32em] text-bronze-light">
          {eyebrow}
        </p>
        <h1
          className={`reveal-fade mt-5 max-w-6xl break-words font-serif ${titleSize} font-medium leading-[0.92] text-white`}
          style={{ '--reveal-delay': '160ms' }}
        >
          {title}
        </h1>
        <p
          className="reveal-fade mt-7 max-w-3xl break-words font-body text-base leading-8 text-white/88 sm:text-xl sm:leading-9"
          style={{ '--reveal-delay': '260ms' }}
        >
          {subtitle}
        </p>
        {actions ? (
          <div
            className="reveal-fade mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
            style={{ '--reveal-delay': '340ms' }}
          >
            {actions}
          </div>
        ) : null}
        <div
          className="reveal-fade mt-12 hidden items-center gap-4 self-center font-ui text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/68 sm:flex"
          style={{ '--reveal-delay': '440ms' }}
          aria-hidden="true"
        >
          <span className="h-px w-16 bg-white/42" />
          <span>{content.shared.explore}</span>
          <span className="h-px w-16 bg-white/42" />
        </div>
      </div>
    </section>
  );
}

export default PageHero;
