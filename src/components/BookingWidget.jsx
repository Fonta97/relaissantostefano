import { useId, useMemo, useRef, useState } from 'react';

import { useI18n } from '../lib/i18n';
import { buildBookingUrl, getDefaultBookingDates, toDateInputValue } from '../lib/siteData';

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

function CounterField({ id, label, value, min, max, onChange, error, decreaseLabel, increaseLabel }) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="booking-label text-current">
        {label}
      </label>
      <div className="mt-3 grid h-12 grid-cols-[2.35rem_1fr_2.35rem] border border-current/18">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          aria-label={`${decreaseLabel} ${label.toLowerCase()}`}
          className="border-r border-current/18 text-lg transition-colors hover:bg-current/8 disabled:opacity-35"
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
          className="w-full appearance-none border-0 bg-transparent text-center font-ui text-sm font-semibold outline-none"
        />
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          aria-label={`${increaseLabel} ${label.toLowerCase()}`}
          className="border-l border-current/18 text-lg transition-colors hover:bg-current/8 disabled:opacity-35"
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

function DateField({ id, label, value, min, onChange, error }) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="booking-label text-current">
        {label}
      </label>
      <input
        id={id}
        type="date"
        min={min}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-3 h-12 w-full border border-current/18 bg-transparent px-3 font-ui text-sm font-semibold outline-none"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 font-body text-xs font-semibold text-bronze-light">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function BookingWidget({ id = 'booking', variant = 'strip', className = '' }) {
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
  const compact = variant === 'compact';

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

    const url = buildBookingUrl({ checkIn, checkOut, adults, rooms, language: bookingLanguage });
    const opened = window.open(url, '_blank', 'noopener,noreferrer');
    if (!opened) {
      window.location.href = url;
    }
  };

  return (
    <section
      id={id}
      className={`relative z-20 border-y border-current/14 ${compact ? 'bg-warm-white text-graphite' : 'bg-espresso text-white'} ${className}`}
      aria-labelledby={`${formId}-title`}
      tabIndex={-1}
    >
      <h2 id={`${formId}-title`} className="sr-only">
        {bookingCopy.title}
      </h2>
      {Object.keys(errors).length ? (
        <div
          ref={firstErrorRef}
          tabIndex={-1}
          role="alert"
          className="mx-auto max-w-[112rem] px-5 pt-5 font-body text-sm font-semibold text-bronze-light sm:px-8 lg:px-12"
        >
          {bookingCopy.alert}
        </div>
      ) : null}
      <form
        onSubmit={handleSubmit}
        className="mx-auto grid w-full max-w-[112rem] gap-px bg-current/10 p-px md:grid-cols-2 xl:grid-cols-[1fr_1fr_0.78fr_0.78fr_auto]"
      >
        <div className={`${compact ? 'bg-warm-white' : 'bg-espresso'} p-4 sm:p-5`}>
          <DateField
            id={`${formId}-check-in`}
            label={bookingCopy.labels.checkIn}
            min={today}
            value={checkIn}
            onChange={updateCheckIn}
            error={errors.checkIn}
          />
        </div>
        <div className={`${compact ? 'bg-warm-white' : 'bg-espresso'} p-4 sm:p-5`}>
          <DateField
            id={`${formId}-check-out`}
            label={bookingCopy.labels.checkOut}
            min={checkIn || today}
            value={checkOut}
            onChange={setCheckOut}
            error={errors.checkOut}
          />
        </div>
        <div className={`${compact ? 'bg-warm-white' : 'bg-espresso'} p-4 sm:p-5`}>
          <CounterField
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
        </div>
        <div className={`${compact ? 'bg-warm-white' : 'bg-espresso'} p-4 sm:p-5`}>
          <CounterField
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
        </div>
        <button
          type="submit"
          className="min-h-[5.75rem] bg-bronze px-7 font-ui text-xs font-bold uppercase tracking-[0.22em] text-espresso transition-colors hover:bg-bronze-light xl:min-w-[12rem]"
        >
          {content.shared.book}
        </button>
      </form>
    </section>
  );
}

export default BookingWidget;
