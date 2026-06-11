import { Link } from 'react-router-dom';

import { useI18n } from '../lib/i18n';

function NotFoundPage() {
  const { content, path } = useI18n();
  const copy = content.notFound;

  return (
    <section className="grid min-h-[64vh] place-items-center pt-10 text-center">
      <div className="max-w-2xl">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-bronze">{copy.eyebrow}</p>
        <h1 className="mt-5 font-serif text-[3.3rem] leading-[1.04] text-graphite sm:text-[5rem]">
          {copy.title}
        </h1>
        <p className="mt-6 font-body text-base leading-8 text-body">
          {copy.text}
        </p>
        <Link
          to={path('/')}
          className="mt-8 inline-flex border border-bronze bg-bronze px-6 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-espresso transition-colors hover:bg-bronze-light"
        >
          {copy.cta}
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
