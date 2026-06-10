import { useEffect, useId, useMemo, useRef, useState } from 'react';

import useDialogFocus from '../hooks/useDialogFocus';
import {
  bookingManageUrl,
  bookingUrl,
  buildBookingUrl,
  getDefaultBookingDates,
  toDateInputValue,
} from '../lib/siteData';

function validateBooking({ checkIn, checkOut, adults, rooms }) {
  const today = toDateInputValue(new Date());
  const errors = {};

  if (!checkIn) {
    errors.checkIn = 'Inserisci la data di arrivo.';
  } else if (checkIn < today) {
    errors.checkIn = 'La data di arrivo non può essere nel passato.';
  }

  if (!checkOut) {
    errors.checkOut = 'Inserisci la data di partenza.';
  } else if (checkIn && checkOut <= checkIn) {
    errors.checkOut = "La partenza deve essere successiva all'arrivo.";
  }

  if (adults < 1 || adults > 8) {
    errors.adults = 'Seleziona da 1 a 8 adulti.';
  }

  if (rooms < 1 || rooms > 4) {
    errors.rooms = 'Seleziona da 1 a 4 camere.';
  }

  if (adults < rooms) {
    errors.rooms = 'Serve almeno un adulto per camera.';
  }

  return errors;
}

function NumberStepper({ id, label, value, min, max, onChange, error, description }) {
  const decrement = () => onChange(Math.max(min, value - 1));
  const increment = () => onChange(Math.min(max, value + 1));

  return (
    <div className="booking-control">
      <label htmlFor={id} className="booking-label">
        {label}
      </label>
      <div className="mt-2 grid grid-cols-[2.75rem_1fr_2.75rem] overflow-hidden border border-black/10 bg-white">
        <button
          type="button"
          onClick={decrement}
          disabled={value <= min}
          aria-label={`Diminuisci ${label.toLowerCase()}`}
          className="h-12 border-r border-black/10 font-ui text-xl text-graphite transition-colors hover:bg-mist disabled:cursor-not-allowed disabled:opacity-35"
        >
          -
        </button>
        <input
          id={id}
          type="number"
          min={min}
          max={max}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : description ? `${id}-description` : undefined}
          className="h-12 w-full appearance-none border-0 bg-white text-center font-ui text-sm font-semibold text-graphite outline-none"
        />
        <button
          type="button"
          onClick={increment}
          disabled={value >= max}
          aria-label={`Aumenta ${label.toLowerCase()}`}
          className="h-12 border-l border-black/10 font-ui text-xl text-graphite transition-colors hover:bg-mist disabled:cursor-not-allowed disabled:opacity-35"
        >
          +
        </button>
      </div>
      {description && !error ? (
        <p id={`${id}-description`} className="mt-2 font-body text-xs leading-5 text-body">
          {description}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="mt-2 font-body text-xs font-semibold text-bronze">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function formatDisplayDate(value) {
  if (!value) {
    return '-';
  }

  return new Intl.DateTimeFormat('it-IT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${value}T12:00:00`));
}

function BookingWidget({ id = 'booking', variant = 'full', className = '' }) {
  const defaults = useMemo(() => getDefaultBookingDates(), []);
  const [checkIn, setCheckIn] = useState(defaults.checkIn);
  const [checkOut, setCheckOut] = useState(defaults.checkOut);
  const [adults, setAdults] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [promoCode, setPromoCode] = useState('');
  const [errors, setErrors] = useState({});
  const [bookingResultUrl, setBookingResultUrl] = useState('');
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const firstErrorRef = useRef(null);
  const formId = useId();
  const isModalOpen = Boolean(bookingResultUrl);
  const isCompact = variant === 'compact';
  const today = toDateInputValue(new Date());

  const closeModal = () => {
    setBookingResultUrl('');
  };

  useDialogFocus(isModalOpen, dialogRef, closeButtonRef);

  useEffect(() => {
    if (!isModalOpen || typeof document === 'undefined') {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  }, [isModalOpen]);

  const generatedBookingUrl = buildBookingUrl({
    checkIn,
    checkOut,
    adults,
    rooms,
    promoCode,
  });

  const updateCheckIn = (value) => {
    setCheckIn(value);
    if (value && checkOut <= value) {
      const nextDate = new Date(`${value}T12:00:00`);
      nextDate.setDate(nextDate.getDate() + 1);
      setCheckOut(toDateInputValue(nextDate));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateBooking({ checkIn, checkOut, adults, rooms });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      window.requestAnimationFrame(() => {
        firstErrorRef.current?.focus();
      });
      return;
    }

    setBookingResultUrl(generatedBookingUrl);
  };

  const shellClasses = isCompact
    ? 'border border-black/10 bg-white p-5 shadow-soft sm:p-6'
    : 'relative z-20 border border-black/10 bg-ivory p-4 shadow-soft sm:p-6 lg:p-7';

  return (
    <section
      id={id}
      data-reveal={!isCompact ? 'true' : undefined}
      className={`${!isCompact ? 'reveal-scroll' : ''} ${shellClasses} ${className}`}
      aria-labelledby={`${formId}-title`}
      tabIndex={-1}
    >
      <div className={isCompact ? 'mb-5' : 'grid gap-5 lg:grid-cols-[0.62fr_1.38fr] lg:items-end'}>
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-bronze">
            Prenota il soggiorno
          </p>
          <h2
            id={`${formId}-title`}
            className={`${isCompact ? 'mt-2 text-[2rem]' : 'mt-3 text-[2.45rem] sm:text-[3.25rem]'} font-serif leading-[1.05] text-graphite`}
          >
            Date, ospiti e disponibilità.
          </h2>
        </div>
        {!isCompact ? (
          <p className="max-w-3xl font-body text-sm leading-7 text-body lg:justify-self-end">
            Compila i dati: la verifica di disponibilità e tariffe avviene direttamente sul motore
            SimpleBooking del Relais Santo Stefano.
          </p>
        ) : null}
      </div>

      {Object.keys(errors).length ? (
        <div
          ref={firstErrorRef}
          tabIndex={-1}
          className="mt-5 border border-bronze/40 bg-white px-4 py-3 font-body text-sm leading-6 text-bronze"
          role="alert"
        >
          Controlla i campi evidenziati prima di verificare la disponibilità.
        </div>
      ) : null}

      <form
        onSubmit={handleSubmit}
        className={`${isCompact ? 'grid gap-4' : 'mt-6 grid gap-4 xl:grid-cols-[1fr_1fr_0.84fr_0.84fr_1fr_auto] xl:items-start'}`}
      >
        <div className="booking-control">
          <label htmlFor={`${formId}-check-in`} className="booking-label">
            Data arrivo
          </label>
          <input
            id={`${formId}-check-in`}
            type="date"
            min={today}
            value={checkIn}
            onChange={(event) => updateCheckIn(event.target.value)}
            aria-invalid={Boolean(errors.checkIn)}
            aria-describedby={errors.checkIn ? `${formId}-check-in-error` : undefined}
            className="mt-2 h-12 w-full border border-black/10 bg-white px-3 font-ui text-sm font-semibold text-graphite"
          />
          {errors.checkIn ? (
            <p id={`${formId}-check-in-error`} className="mt-2 font-body text-xs font-semibold text-bronze">
              {errors.checkIn}
            </p>
          ) : null}
        </div>

        <div className="booking-control">
          <label htmlFor={`${formId}-check-out`} className="booking-label">
            Data partenza
          </label>
          <input
            id={`${formId}-check-out`}
            type="date"
            min={checkIn || today}
            value={checkOut}
            onChange={(event) => setCheckOut(event.target.value)}
            aria-invalid={Boolean(errors.checkOut)}
            aria-describedby={errors.checkOut ? `${formId}-check-out-error` : undefined}
            className="mt-2 h-12 w-full border border-black/10 bg-white px-3 font-ui text-sm font-semibold text-graphite"
          />
          {errors.checkOut ? (
            <p id={`${formId}-check-out-error`} className="mt-2 font-body text-xs font-semibold text-bronze">
              {errors.checkOut}
            </p>
          ) : null}
        </div>

        <NumberStepper
          id={`${formId}-adults`}
          label="Adulti"
          value={adults}
          min={1}
          max={8}
          onChange={setAdults}
          error={errors.adults}
        />

        <NumberStepper
          id={`${formId}-rooms`}
          label="Camere"
          value={rooms}
          min={1}
          max={4}
          onChange={setRooms}
          error={errors.rooms}
          description="Almeno un adulto per camera."
        />

        <div className="booking-control">
          <label htmlFor={`${formId}-promo`} className="booking-label">
            Codice promo
          </label>
          <input
            id={`${formId}-promo`}
            type="text"
            value={promoCode}
            onChange={(event) => setPromoCode(event.target.value)}
            placeholder="Opzionale"
            className="mt-2 h-12 w-full border border-black/10 bg-white px-3 font-ui text-sm font-semibold uppercase text-graphite placeholder:normal-case placeholder:text-body/60"
          />
        </div>

        <div className={`${isCompact ? 'flex flex-col gap-3 sm:flex-row' : 'xl:pt-7'} min-w-0`}>
          <button
            type="submit"
            className="inline-flex h-12 w-full items-center justify-center border border-bronze bg-bronze px-5 font-ui text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-sage xl:w-auto"
          >
            Prenota
          </button>
        </div>
      </form>

      <div className="mt-5 flex flex-wrap items-center gap-3 font-ui text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-body">
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="hover:text-bronze">
          Apri booking engine
        </a>
        <span aria-hidden="true">/</span>
        <a href={bookingManageUrl} target="_blank" rel="noopener noreferrer" className="hover:text-bronze">
          Modifica/cancella prenotazione
        </a>
      </div>

      {isModalOpen ? (
        <div
          className="fixed inset-0 z-[210] bg-graphite/70 px-3 py-3 backdrop-blur-sm sm:px-6 sm:py-6"
          role="presentation"
          onKeyDownCapture={(event) => {
            if (event.key === 'Escape') {
              closeModal();
            }
          }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${formId}-dialog-title`}
            aria-describedby={`${formId}-dialog-description`}
            className="mx-auto flex h-full max-h-[calc(100dvh-1.5rem)] w-full max-w-3xl flex-col overflow-y-auto bg-ivory text-graphite shadow-[0_28px_100px_rgba(0,0,0,0.3)] sm:max-h-[calc(100dvh-3rem)]"
            tabIndex={-1}
          >
            <div className="border-b border-black/10 px-4 py-5 sm:px-6">
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-bronze">
                SimpleBooking
              </p>
              <h2 id={`${formId}-dialog-title`} className="mt-2 font-serif text-[2rem] leading-tight">
                Richiesta pronta
              </h2>
              <p id={`${formId}-dialog-description`} className="mt-3 max-w-2xl font-body text-sm leading-7 text-body">
                Abbiamo preparato i dati del soggiorno. La disponibilita reale e le tariffe vengono
                verificate sul motore ufficiale SimpleBooking, senza simulazioni nel sito.
              </p>
            </div>

            <div className="flex-1 px-4 py-5 sm:px-6">
              <dl className="grid gap-3 sm:grid-cols-2">
                {[
                  ['Arrivo', formatDisplayDate(checkIn)],
                  ['Partenza', formatDisplayDate(checkOut)],
                  ['Adulti', String(adults)],
                  ['Camere', String(rooms)],
                  ['Codice promo', promoCode.trim() || 'Nessuno'],
                ].map(([label, value]) => (
                  <div key={label} className="border border-black/10 bg-white px-4 py-3">
                    <dt className="font-ui text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-body">
                      {label}
                    </dt>
                    <dd className="mt-2 font-serif text-2xl leading-tight text-graphite">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 border border-bronze/20 bg-sand/55 px-4 py-4 font-body text-sm leading-7 text-body">
                Il passaggio successivo apre SimpleBooking in una nuova scheda con date, adulti e
                camere gia compilati.
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-black/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <a
                href={bookingResultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-bronze bg-bronze px-5 py-3 font-ui text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-sage"
              >
                Apri disponibilita
              </a>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={bookingManageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-black/10 bg-white px-4 py-3 font-ui text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:border-bronze hover:text-bronze"
                >
                  Modifica/cancella
                </a>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeModal}
                  className="inline-flex items-center justify-center border border-sage bg-sage px-4 py-3 font-ui text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-bronze"
                >
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default BookingWidget;
