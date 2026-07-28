import { type FormEvent, useRef, useState } from 'react';
import { pricing } from '../data/pricing';

interface FieldErrors {
  name?: string;
  email?: string;
  deliveryLocation?: string;
  moveDate?: string;
  packageSize?: string;
}

const REQUIRED_FIELDS = [
  { key: 'name', id: 'name', label: 'Name' },
  { key: 'email', id: 'email', label: 'Email' },
  { key: 'deliveryLocation', id: 'delivery-location', label: 'Tote delivery location' },
  { key: 'moveDate', id: 'move-date', label: 'Move date' },
  { key: 'packageSize', id: 'package', label: 'Package size' },
] as const;

function Required() {
  return (
    <>
      <span aria-hidden="true" className="text-red-600"> *</span>
      <span className="sr-only"> (required)</span>
    </>
  );
}

function Optional() {
  return <span className="text-sm font-normal text-slate-500"> (optional)</span>;
}

function describedBy(...ids: (string | false | undefined)[]) {
  return ids.filter(Boolean).join(' ') || undefined;
}

export function QuoteForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function validate(form: HTMLFormElement): FieldErrors {
    const data = new FormData(form);
    const fieldErrors: FieldErrors = {};

    if (!data.get('name')?.toString().trim()) {
      fieldErrors.name = 'Name is required.';
    }

    const email = data.get('email')?.toString().trim() ?? '';
    if (!email) {
      fieldErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      fieldErrors.email = 'Please enter a valid email address.';
    }

    if (!data.get('delivery-location')?.toString().trim()) {
      fieldErrors.deliveryLocation = 'Delivery location is required.';
    }

    if (!data.get('move-date')?.toString().trim()) {
      fieldErrors.moveDate = 'Move date is required.';
    }

    if (!data.get('package')?.toString().trim()) {
      fieldErrors.packageSize = 'Please select a package size.';
    }

    return fieldErrors;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const fieldErrors = validate(form);

    if (Object.keys(fieldErrors).length > 0) {
      e.preventDefault();
      setErrors(fieldErrors);

      const first = REQUIRED_FIELDS.find((f) => fieldErrors[f.key]);
      if (first) formRef.current?.querySelector<HTMLElement>(`#${first.id}`)?.focus();
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  const inputBase =
    'mt-2 w-full rounded-lg border px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20';

  return (
    <section id="quote" className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-slate-950">Request a quote</h2>
        <p className="mt-3 text-slate-700">
          Tell us about your move and we'll follow up with availability, pricing,
          and next steps. City or ZIP code is enough for now.
        </p>

        <div
          role="status"
          className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 font-medium text-green-800 empty:hidden"
        >
          {submitted ? 'Submitting your request…' : ''}
        </div>

        <form
          ref={formRef}
          name="quote"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/thank-you.html"
          onSubmit={handleSubmit}
          noValidate
          className="mt-8 grid gap-5 rounded-2xl border border-slate-200 p-6"
        >
          <input type="hidden" name="form-name" value="quote" />

          <p className="hidden">
            <label>
              Do not fill this out:
              <input name="bot-field" />
            </label>
          </p>

          {/* Name */}
          <div>
            <label htmlFor="name" className="font-semibold">
              Name<Required />
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              aria-invalid={errors.name ? 'true' : undefined}
              aria-describedby={describedBy(errors.name && 'name-error')}
              className={`${inputBase} ${errors.name ? 'border-red-500' : 'border-slate-300'}`}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email + Phone */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="font-semibold">
                Email<Required />
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-invalid={errors.email ? 'true' : undefined}
                aria-describedby={describedBy(errors.email && 'email-error')}
                className={`${inputBase} ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="font-semibold">
                Phone<Optional />
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className={`${inputBase} border-slate-300`}
              />
            </div>
          </div>

          {/* Tote delivery location */}
          <div>
            <label htmlFor="delivery-location" className="font-semibold">
              Tote delivery location<Required />
            </label>
            <input
              id="delivery-location"
              name="delivery-location"
              required
              aria-invalid={errors.deliveryLocation ? 'true' : undefined}
              aria-describedby={describedBy(
                'delivery-location-hint',
                errors.deliveryLocation && 'delivery-location-error',
              )}
              className={`${inputBase} ${errors.deliveryLocation ? 'border-red-500' : 'border-slate-300'}`}
            />
            <p id="delivery-location-hint" className="mt-1 text-sm text-slate-500">
              City or ZIP code is enough for now.
            </p>
            {errors.deliveryLocation && (
              <p id="delivery-location-error" className="mt-1 text-sm text-red-600">
                {errors.deliveryLocation}
              </p>
            )}
          </div>

          {/* Tote pickup location */}
          <div>
            <label htmlFor="pickup-location" className="font-semibold">
              Tote pickup location<Optional />
            </label>
            <input
              id="pickup-location"
              name="pickup-location"
              aria-describedby="pickup-location-hint"
              className={`${inputBase} border-slate-300`}
            />
            <p id="pickup-location-hint" className="mt-1 text-sm text-slate-500">
              Where should we collect the totes after your move?
            </p>
          </div>

          {/* Move date + Package size */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="move-date" className="font-semibold">
                Move date<Required />
              </label>
              <input
                id="move-date"
                name="move-date"
                type="date"
                required
                aria-invalid={errors.moveDate ? 'true' : undefined}
                aria-describedby={describedBy(errors.moveDate && 'move-date-error')}
                className={`${inputBase} ${errors.moveDate ? 'border-red-500' : 'border-slate-300'}`}
              />
              {errors.moveDate && (
                <p id="move-date-error" className="mt-1 text-sm text-red-600">
                  {errors.moveDate}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="package" className="font-semibold">
                Package size<Required />
              </label>
              <select
                id="package"
                name="package"
                required
                aria-invalid={errors.packageSize ? 'true' : undefined}
                aria-describedby={describedBy(errors.packageSize && 'package-error')}
                className={`${inputBase} ${errors.packageSize ? 'border-red-500' : 'border-slate-300'}`}
              >
                <option value="">Select one</option>
                {pricing.map((item) => (
                  <option key={item.id} value={`${item.name} — ${item.totes}`}>
                    {item.name} — {item.totes}
                  </option>
                ))}
                <option value="Not sure yet">Not sure yet</option>
              </select>
              {errors.packageSize && (
                <p id="package-error" className="mt-1 text-sm text-red-600">
                  {errors.packageSize}
                </p>
              )}
            </div>
          </div>

          {/* Preferred tote dates */}
          <fieldset className="grid gap-5 rounded-xl border border-slate-200 p-4 md:grid-cols-2">
            <legend className="px-2 font-semibold">
              Preferred tote dates<Optional />
            </legend>

            <div>
              <label htmlFor="delivery-date" className="text-sm font-medium">
                Preferred tote delivery date
              </label>
              <input
                id="delivery-date"
                name="delivery-date"
                type="date"
                aria-describedby="tote-dates-hint"
                className={`${inputBase} border-slate-300`}
              />
            </div>

            <div>
              <label htmlFor="pickup-date" className="text-sm font-medium">
                Preferred tote pickup date
              </label>
              <input
                id="pickup-date"
                name="pickup-date"
                type="date"
                aria-describedby="tote-dates-hint"
                className={`${inputBase} border-slate-300`}
              />
            </div>

            <p id="tote-dates-hint" className="text-sm text-slate-500 md:col-span-2">
              Dates don't need to be exact — we'll confirm availability with you.
              Leave them blank and we'll suggest dates based on your move date.
            </p>
          </fieldset>

          {/* Message */}
          <div>
            <label htmlFor="message" className="font-semibold">
              Anything else we should know?<Optional />
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={`${inputBase} border-slate-300`}
            />
          </div>

          <button
            type="submit"
            className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Check Availability
          </button>

          <p className="text-center text-sm text-slate-600">
            We'll respond with availability, total pricing, and the next steps to
            reserve your totes.
          </p>
        </form>
      </div>
    </section>
  );
}
