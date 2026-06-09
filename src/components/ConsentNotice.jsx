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
      className="fixed inset-x-4 bottom-4 z-[45] border border-black/10 bg-white p-5 text-graphite shadow-[0_24px_80px_rgba(0,0,0,0.16)] sm:left-auto sm:max-w-xl"
      aria-label={copy.title}
    >
      <p className="font-serif text-[1.8rem] leading-[1.04]">
        {copy.title}
      </p>
      <p className="mt-3 font-ui text-sm leading-7 text-graphite/72">
        {copy.text}
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleAccept}
          className="border border-bronze/40 bg-bronze px-5 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#8f704c]"
        >
          {copy.accept}
        </button>
        <a
          href="/privacy.html"
          target="_blank"
          rel="noreferrer"
          className="border border-black/10 px-5 py-3 font-ui text-xs uppercase tracking-[0.16em] transition-colors hover:border-bronze hover:text-bronze"
        >
          {copy.privacy}
        </a>
      </div>
    </aside>
  );
}

export default ConsentNotice;
