const items = [
  'Durable totes',
  'Delivery',
  'Pickup',
  'Labels & instructions',
  'Flexible scheduling',
] as const;

export function WhatsIncluded() {
  return (
    <section className="bg-blue-50 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-slate-950">
          What's included
        </h2>
        <p className="mt-3 max-w-2xl text-slate-700">
          Every rental comes with everything you need for a smooth move.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-blue-100 bg-white px-5 py-4"
            >
              <svg
                className="h-5 w-5 shrink-0 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
