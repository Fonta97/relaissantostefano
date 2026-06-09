import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="grid min-h-[64vh] place-items-center pt-10 text-center">
      <div className="max-w-2xl">
        <p className="font-ui text-xs uppercase tracking-[0.24em] text-bronze">Pagina non trovata</p>
        <h1 className="mt-5 font-serif text-[3.5rem] leading-[0.96] sm:text-[5.5rem]">
          Torniamo al relais.
        </h1>
        <p className="mt-6 font-ui text-base leading-8 text-graphite/72">
          Il percorso richiesto non è disponibile nel nuovo prototipo. La navigazione principale ti riporta alle sezioni attive.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex border border-bronze bg-bronze px-6 py-3 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-white"
        >
          Vai alla home
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
