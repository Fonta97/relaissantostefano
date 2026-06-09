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
  const textAlign = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <section className="relative left-1/2 -mt-24 w-screen -translate-x-1/2 overflow-hidden bg-graphite text-white sm:-mt-28 lg:-mt-32">
      <img
        src={image.src}
        alt={image.alt}
        className="hero-media-enter absolute inset-0 h-full w-full object-cover"
        fetchpriority={priority ? 'high' : 'auto'}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        sizes="100vw"
      />
      <div className="hero-readable-overlay absolute inset-0" />

      <div
        className={`relative mx-auto flex ${minHeight} w-full max-w-[104rem] flex-col justify-end ${textAlign} px-5 pb-14 pt-32 sm:px-8 sm:pb-16 lg:px-14 lg:pb-20 lg:pt-40`}
      >
        <p className="reveal-fade font-ui text-xs uppercase tracking-[0.24em] text-white/72">
          {eyebrow}
        </p>
        <h1
          className="reveal-fade mt-5 max-w-5xl break-words font-serif text-[3.15rem] leading-[0.92] text-white sm:text-[5.8rem] lg:text-[7.4rem]"
          style={{ '--reveal-delay': '160ms' }}
        >
          {title}
        </h1>
        <p
          className="reveal-fade mt-6 max-w-2xl break-words font-ui text-base leading-8 text-white/82 sm:text-lg"
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
      </div>
    </section>
  );
}

export default PageHero;
