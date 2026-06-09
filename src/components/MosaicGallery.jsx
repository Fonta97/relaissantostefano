import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

function MosaicGallery({
  images,
  title,
  openLabel,
  modalLabels = { close: 'Chiudi', prev: 'Precedente', next: 'Successiva' },
  showCaptions = true,
}) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [portalRoot, setPortalRoot] = useState(null);
  const hasModalOpen = activeIndex >= 0;

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setPortalRoot(document.body);
    }
  }, []);

  useEffect(() => {
    if (!hasModalOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveIndex(-1);
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current + 1) % images.length);
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current - 1 + images.length) % images.length);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hasModalOpen, images.length]);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            className="group relative aspect-[4/3] overflow-hidden border border-black/10 bg-black/5 text-left shadow-soft transition-transform duration-500 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
            onClick={() => setActiveIndex(index)}
            aria-label={`${openLabel}: ${image.caption || image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.025]"
            />
            {showCaptions ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-ui text-xs uppercase tracking-[0.18em] text-white/70">
                    {title}
                  </p>
                  <p className="mt-2 font-serif text-2xl leading-none text-white">{image.caption}</p>
                </div>
              </>
            ) : null}
          </button>
        ))}
      </div>

      {hasModalOpen && portalRoot
        ? createPortal(
            <div
              className="fixed inset-0 z-[200] h-[100dvh] w-screen overflow-hidden bg-black/92 backdrop-blur-md"
              role="dialog"
              aria-modal="true"
              aria-label={title}
              onClick={() => setActiveIndex(-1)}
            >
              <div
                className="mx-auto flex h-full w-full max-w-7xl flex-col px-4 py-4 sm:px-8 sm:py-6"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="mb-4 flex items-center justify-between text-white">
                  <p className="font-ui text-xs uppercase tracking-[0.18em] text-white/70">
                    {title}
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(-1)}
                    aria-label={modalLabels.close}
                    className="border border-white bg-white px-5 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-black transition-colors hover:bg-ivory"
                  >
                    {modalLabels.close}
                  </button>
                </div>

                <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden border border-white/10 bg-black">
                  <img
                    src={images[activeIndex].src}
                    alt={images[activeIndex].alt}
                    className="h-full w-full object-contain p-3 sm:p-4"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((current) => (current - 1 + images.length) % images.length)
                    }
                    aria-label={modalLabels.prev}
                    className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/70 bg-black/78 font-ui text-xl font-semibold text-white transition-colors hover:bg-black sm:left-4 sm:h-12 sm:w-12"
                  >
                    <span aria-hidden="true">←</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((current) => (current + 1) % images.length)}
                    aria-label={modalLabels.next}
                    className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/70 bg-black/78 font-ui text-xl font-semibold text-white transition-colors hover:bg-black sm:right-4 sm:h-12 sm:w-12"
                  >
                    <span aria-hidden="true">→</span>
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4 text-white">
                  <p className="font-serif text-[1.7rem] leading-none sm:text-2xl">
                    {images[activeIndex].caption}
                  </p>
                  <p className="font-ui text-xs uppercase tracking-[0.16em] text-white/65">
                    {activeIndex + 1} / {images.length}
                  </p>
                </div>
              </div>
            </div>,
            portalRoot
          )
        : null}
    </>
  );
}

export default MosaicGallery;
