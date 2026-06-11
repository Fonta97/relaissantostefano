import { useEffect, useState } from 'react';

const consentStorageKey = 'relais-santo-stefano-consent-notice';

function ConsentNotice({ copy }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    setIsVisible(window.localStorage.getItem(consentStorageKey) !== 'accepted');
  }, []);

  const handleAccept = () => {
    window.localStorage.setItem(consentStorageKey, 'accepted');
    setIsVisible(false);
  };

  if (!isVisible || !copy) {
    return null;
  }

  return (
    <aside
      className="fixed inset-x-3 bottom-3 z-[45] border border-bronze/30 bg-espresso p-4 text-white shadow-editorial sm:left-auto sm:max-w-lg sm:p-5"
      role="region"
      aria-labelledby="cookie-notice-title"
    >
      <p id="cookie-notice-title" className="font-serif text-[1.45rem] leading-[1.08] sm:text-[1.8rem]">
        {copy.title}
      </p>
      <p className="mt-2 font-body text-sm leading-6 text-white/88 sm:mt-3 sm:leading-7">
        {copy.text}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3 sm:mt-5">
        <button
          type="button"
          onClick={handleAccept}
          className="border border-bronze bg-bronze px-4 py-2.5 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-espresso transition-colors hover:bg-bronze-light sm:px-5 sm:py-3"
        >
          {copy.accept}
        </button>
        <a
          href="/privacy.html"
          target="_blank"
          rel="noreferrer"
          className="border border-white/24 px-4 py-2.5 font-ui text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-white hover:text-espresso sm:px-5 sm:py-3"
        >
          {copy.privacy}
        </a>
      </div>
    </aside>
  );
}

export default ConsentNotice;
