import { type FormEvent, useState } from 'react';

interface FieldErrors {
  name?: string;
  email?: string;
  city?: string;
}

export function QuoteForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

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

    if (!data.get('city')?.toString().trim()) {
      fieldErrors.city = 'City is required.';
    }

    return fieldErrors;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const fieldErrors = validate(form);

    if (Object.keys(fieldErrors).length > 0) {
      e.preventDefault();
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  const inputBase = 'mt-2 w-full rounded-lg border px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none';

  return (
    <section id="quote" className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-slate-950">Request a quote</h2>
        <p className="mt-3 text-slate-700">
          Tell us about your move and we'll follow up with availability and
          pricing.
        </p>

        {submitted && (
          <div
            role="status"
            className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 font-medium text-green-800"
          >
            Submitting your request…
          </div>
        )}

        <form
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
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              aria-invalid={errors.name ? 'true' : undefined}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={`${inputBase} ${
                errors.name ? 'border-red-500' : 'border-slate-300'
              }`}
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
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                aria-invalid={errors.email ? 'true' : undefined}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`${inputBase} ${
                  errors.email ? 'border-red-500' : 'border-slate-300'
                }`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="font-semibold">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className={`${inputBase} border-slate-300`}
              />
            </div>
          </div>

          {/* City + Move date */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="city" className="font-semibold">
                City
              </label>
              <input
                id="city"
                name="city"
                required
                aria-invalid={errors.city ? 'true' : undefined}
                aria-describedby={errors.city ? 'city-error' : undefined}
                className={`${inputBase} ${
                  errors.city ? 'border-red-500' : 'border-slate-300'
                }`}
              />
              {errors.city && (
                <p id="city-error" className="mt-1 text-sm text-red-600">
                  {errors.city}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="move-date" className="font-semibold">
                Move date
              </label>
              <input
                id="move-date"
                name="move-date"
                type="date"
                className={`${inputBase} border-slate-300`}
              />
            </div>
          </div>

          {/* Package size */}
          <div>
            <label htmlFor="package" className="font-semibold">
              Package size
            </label>
            <select
              id="package"
              name="package"
              className={`${inputBase} border-slate-300`}
            >
              <option value="">Select one</option>
              <option>20 totes</option>
              <option>40 totes</option>
              <option>60 totes</option>
              <option>Not sure yet</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className={`${inputBase} border-slate-300`}
            />
          </div>

          <button
            type="submit"
            className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Send Quote Request
          </button>
        </form>
      </div>
    </section>
  );
}
