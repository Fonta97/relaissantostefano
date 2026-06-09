import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="grid min-h-[64vh] place-items-center pt-10 text-center">
      <div className="max-w-2xl">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Pagina non trovata</p>
        <h1 className="mt-5 font-serif text-[3.3rem] leading-[1.04] text-graphite sm:text-[5rem]">
          Torniamo al relais.
        </h1>
        <p className="mt-6 font-body text-base leading-8 text-body">
          Il percorso richiesto non è disponibile. La navigazione principale ti riporta alle sezioni del sito.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex border border-bronze bg-bronze px-6 py-3 font-ui text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-sage"
        >
          Vai alla home
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
