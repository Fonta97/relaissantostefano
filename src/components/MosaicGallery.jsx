import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import useDialogFocus from '../hooks/useDialogFocus';

function MosaicGallery({
  images,
  title,
  openLabel,
  modalLabels = { close: 'Chiudi', prev: 'Precedente', next: 'Successiva' },
  showCaptions = true,
}) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [portalRoot, setPortalRoot] = useState(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const hasModalOpen = activeIndex >= 0;

  useDialogFocus(hasModalOpen, dialogRef, closeButtonRef);

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
      <div className="grid gap-px bg-espresso/12 p-px md:grid-cols-2 xl:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            className="group relative aspect-[4/3] overflow-hidden bg-black/5 text-left transition-transform duration-700 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
            onClick={() => setActiveIndex(index)}
            aria-label={`${openLabel}: ${image.caption || image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
              className="image-breathe h-full w-full object-cover"
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            />
            {showCaptions ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/14 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-white/88">
                    {title}
                  </p>
                  <p className="mt-2 font-serif text-2xl leading-tight text-white">{image.caption}</p>
                </div>
              </>
            ) : null}
          </button>
        ))}
      </div>

      {hasModalOpen && portalRoot
        ? createPortal(
            <div
              ref={dialogRef}
              className="fixed inset-0 z-[200] h-[100dvh] w-screen overflow-hidden bg-espresso/96 backdrop-blur-md"
              role="dialog"
              aria-modal="true"
              aria-label={title}
              onClick={() => setActiveIndex(-1)}
              tabIndex={-1}
            >
              <div
                className="mx-auto flex h-full w-full max-w-7xl flex-col px-4 py-4 sm:px-8 sm:py-6"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="mb-4 flex items-center justify-between text-white">
                  <p className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                    {title}
                  </p>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={() => setActiveIndex(-1)}
                    aria-label={modalLabels.close}
                    className="border border-bronze bg-bronze px-5 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-espresso transition-colors hover:bg-bronze-light"
                  >
                    {modalLabels.close}
                  </button>
                </div>

                <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden border border-white/10 bg-black">
                  <img
                    src={images[activeIndex].fullSrc || images[activeIndex].src}
                    alt={images[activeIndex].alt}
                    width={images[activeIndex].width}
                    height={images[activeIndex].height}
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
                    <span aria-hidden="true">&larr;</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((current) => (current + 1) % images.length)}
                    aria-label={modalLabels.next}
                    className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/70 bg-black/78 font-ui text-xl font-semibold text-white transition-colors hover:bg-black sm:right-4 sm:h-12 sm:w-12"
                  >
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4 text-white">
                  <p className="font-serif text-[1.7rem] leading-tight sm:text-2xl">
                    {images[activeIndex].caption}
                  </p>
                  <p className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-white/82">
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
