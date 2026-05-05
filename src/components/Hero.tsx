export function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 font-semibold text-orange-700">
            Serving Metro Detroit
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Moving tote rentals delivered to your door.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Skip the cardboard mess. Rent durable, stackable moving totes for
            your next move in Rochester Hills, Troy, Detroit, and surrounding
            areas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="rounded-full bg-orange-600 px-6 py-3 text-center font-semibold text-white hover:bg-orange-700"
            >
              Request a Quote
            </a>

            <a
              href="#how-it-works"
              className="rounded-full border border-slate-300 px-6 py-3 text-center font-semibold hover:bg-white"
            >
              How It Works
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="rounded-2xl bg-slate-100 p-8 text-center">
            <p className="text-7xl" aria-hidden="true">
              📦
            </p>
            <p className="mt-4 text-xl font-bold">
              Clean. Stackable. Reusable.
            </p>
            <p className="mt-2 text-slate-700">
              One simple tote size for easier packing, delivery, and pickup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
