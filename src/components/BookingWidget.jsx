import { useId, useMemo, useRef, useState } from 'react';

import { useI18n } from '../lib/i18n';
import {
  buildBookingUrl,
  getDefaultBookingDates,
  toDateInputValue,
} from '../lib/siteData';

function validateBooking({ checkIn, checkOut, adults, rooms, messages }) {
  const today = toDateInputValue(new Date());
  const errors = {};

  if (!checkIn) {
    errors.checkIn = messages.checkInRequired;
  } else if (checkIn < today) {
    errors.checkIn = messages.checkInPast;
  }

  if (!checkOut) {
    errors.checkOut = messages.checkOutRequired;
  } else if (checkIn && checkOut <= checkIn) {
    errors.checkOut = messages.checkOutAfter;
  }

  if (adults < 1 || adults > 8) {
    errors.adults = messages.adultsRange;
  }

  if (rooms < 1 || rooms > 4) {
    errors.rooms = messages.roomsRange;
  }

  if (adults < rooms) {
    errors.rooms = messages.adultPerRoom;
  }

  return errors;
}

function Stepper({ id, label, value, min, max, onChange, error, decreaseLabel, increaseLabel }) {
  const decrease = () => onChange(Math.max(min, value - 1));
  const increase = () => onChange(Math.min(max, value + 1));

  return (
    <div className="booking-control min-w-0">
      <label htmlFor={id} className="booking-label">
        {label}
      </label>
      <div className="mt-3 grid h-14 grid-cols-[2.6rem_1fr_2.6rem] border border-[color:var(--booking-border)] bg-[var(--booking-field)]">
        <button
          type="button"
          onClick={decrease}
          disabled={value <= min}
          aria-label={`${decreaseLabel} ${label.toLowerCase()}`}
          className="border-r border-[color:var(--booking-border)] text-xl transition-colors hover:bg-[var(--booking-hover)] disabled:cursor-not-allowed disabled:opacity-35"
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
          aria-describedby={error ? `${id}-error` : undefined}
          className="w-full appearance-none border-0 bg-transparent text-center font-ui text-sm font-semibold text-[var(--booking-text)] outline-none"
        />
        <button
          type="button"
          onClick={increase}
          disabled={value >= max}
          aria-label={`${increaseLabel} ${label.toLowerCase()}`}
          className="border-l border-[color:var(--booking-border)] text-xl transition-colors hover:bg-[var(--booking-hover)] disabled:cursor-not-allowed disabled:opacity-35"
        >
          +
        </button>
      </div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 font-body text-xs font-semibold text-bronze-light">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function BookingWidget({ id = 'booking', variant = 'full', className = '' }) {
  const { bookingLanguage, content } = useI18n();
  const bookingCopy = content.booking;
  const defaults = useMemo(() => getDefaultBookingDates(), []);
  const [checkIn, setCheckIn] = useState(defaults.checkIn);
  const [checkOut, setCheckOut] = useState(defaults.checkOut);
  const [adults, setAdults] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [errors, setErrors] = useState({});
  const firstErrorRef = useRef(null);
  const formId = useId();
  const today = toDateInputValue(new Date());
  const isCompact = variant === 'compact';
  const localizedBookingUrl = buildBookingUrl({ language: bookingLanguage });

  const updateCheckIn = (value) => {
    setCheckIn(value);
    if (value && checkOut <= value) {
      const nextDate = new Date(`${value}T12:00:00`);
      nextDate.setDate(nextDate.getDate() + 1);
      setCheckOut(toDateInputValue(nextDate));
    }
  };

  const openBookingEngine = (url) => {
    const opened = window.open(url, '_blank', 'noopener,noreferrer');
    if (!opened) {
      window.location.href = url;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateBooking({
      checkIn,
      checkOut,
      adults,
      rooms,
      messages: bookingCopy.errors,
    });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      window.requestAnimationFrame(() => firstErrorRef.current?.focus());
      return;
    }

    openBookingEngine(
      buildBookingUrl({
        checkIn,
        checkOut,
        adults,
        rooms,
        language: bookingLanguage,
      })
    );
  };

  return (
    <section
      id={id}
      className={`relative z-20 border border-black/10 bg-warm-white/96 text-graphite shadow-soft [--booking-border:rgba(17,20,15,0.14)] [--booking-field:rgba(255,255,255,0.62)] [--booking-hover:rgba(49,71,51,0.08)] [--booking-muted:#4E504A] [--booking-text:#11140F] ${isCompact ? 'p-5 sm:p-6' : 'p-4 sm:p-5 lg:p-6'} ${className}`}
      aria-labelledby={`${formId}-title`}
      tabIndex={-1}
    >
      <div className={`${isCompact ? 'grid gap-3' : 'grid gap-5 lg:grid-cols-[0.32fr_1fr] lg:items-end'}`}>
        <div>
          <p className="font-ui text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-olive">
            {bookingCopy.title}
          </p>
          <h2
            id={`${formId}-title`}
            className={`${isCompact ? 'mt-2 text-[2rem]' : 'mt-2 text-[2.2rem] sm:text-[3rem]'} font-serif font-medium leading-[0.92] text-graphite`}
          >
            {bookingCopy.heading}
          </h2>
        </div>
        {!isCompact ? (
          <p className="max-w-3xl font-body text-sm leading-7 text-body lg:justify-self-end">
            {bookingCopy.intro}
          </p>
        ) : null}
      </div>

      {Object.keys(errors).length ? (
        <div
          ref={firstErrorRef}
          tabIndex={-1}
          className="mt-5 border border-olive/30 bg-white px-4 py-3 font-body text-sm leading-6 text-olive-dark"
          role="alert"
        >
          {bookingCopy.alert}
        </div>
      ) : null}

      <form
        onSubmit={handleSubmit}
        className={`${isCompact ? 'mt-5 grid gap-4' : 'mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-[1fr_1fr_0.86fr_0.86fr_auto] xl:items-start'}`}
      >
        <div className="booking-control min-w-0">
          <label htmlFor={`${formId}-check-in`} className="booking-label">
            {bookingCopy.labels.checkIn}
          </label>
          <input
            id={`${formId}-check-in`}
            type="date"
            min={today}
            value={checkIn}
            onChange={(event) => updateCheckIn(event.target.value)}
            aria-invalid={Boolean(errors.checkIn)}
            aria-describedby={errors.checkIn ? `${formId}-check-in-error` : undefined}
            className="mt-3 h-14 w-full border border-[color:var(--booking-border)] bg-[var(--booking-field)] px-3 font-ui text-sm font-semibold text-[var(--booking-text)]"
          />
          {errors.checkIn ? (
            <p id={`${formId}-check-in-error`} className="mt-2 font-body text-xs font-semibold text-olive">
              {errors.checkIn}
            </p>
          ) : null}
        </div>

        <div className="booking-control min-w-0">
          <label htmlFor={`${formId}-check-out`} className="booking-label">
            {bookingCopy.labels.checkOut}
          </label>
          <input
            id={`${formId}-check-out`}
            type="date"
            min={checkIn || today}
            value={checkOut}
            onChange={(event) => setCheckOut(event.target.value)}
            aria-invalid={Boolean(errors.checkOut)}
            aria-describedby={errors.checkOut ? `${formId}-check-out-error` : undefined}
            className="mt-3 h-14 w-full border border-[color:var(--booking-border)] bg-[var(--booking-field)] px-3 font-ui text-sm font-semibold text-[var(--booking-text)]"
          />
          {errors.checkOut ? (
            <p id={`${formId}-check-out-error`} className="mt-2 font-body text-xs font-semibold text-olive">
              {errors.checkOut}
            </p>
          ) : null}
        </div>

        <Stepper
          id={`${formId}-adults`}
          label={bookingCopy.labels.adults}
          value={adults}
          min={1}
          max={8}
          onChange={setAdults}
          error={errors.adults}
          decreaseLabel={bookingCopy.decrease}
          increaseLabel={bookingCopy.increase}
        />

        <Stepper
          id={`${formId}-rooms`}
          label={bookingCopy.labels.rooms}
          value={rooms}
          min={1}
          max={4}
          onChange={setRooms}
          error={errors.rooms}
          decreaseLabel={bookingCopy.decrease}
          increaseLabel={bookingCopy.increase}
        />

        <div className={`${isCompact ? 'grid gap-3 sm:grid-cols-2' : 'grid gap-3 xl:min-w-[11rem] xl:pt-[1.95rem]'}`}>
          <button
            type="submit"
            className="inline-flex h-14 w-full items-center justify-center bg-olive px-5 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-olive-dark"
          >
            {content.shared.book}
          </button>
          {isCompact ? (
            <a
              href={localizedBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center border border-black/12 px-4 font-ui text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-graphite transition-colors hover:border-olive hover:text-olive"
            >
              {bookingCopy.manage}
            </a>
          ) : null}
        </div>
      </form>

      {!isCompact ? (
        <div className="mt-5 flex flex-wrap items-center gap-3 font-ui text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-body">
          <a href={localizedBookingUrl} target="_blank" rel="noopener noreferrer" className="editorial-link hover:text-olive">
            {bookingCopy.openEngine}
          </a>
          <span aria-hidden="true">/</span>
          <a href={localizedBookingUrl} target="_blank" rel="noopener noreferrer" className="editorial-link hover:text-olive">
            {bookingCopy.manage}
          </a>
        </div>
      ) : null}
    </section>
  );
}

export default BookingWidget;
