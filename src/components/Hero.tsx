export function Hero() {
  return (
    <section className="bg-blue-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="mb-3 font-semibold text-blue-700">
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
              className="rounded-full bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700"
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

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 shadow-sm">
          <div className="flex flex-col items-center justify-center py-6">
            <svg
              viewBox="0 0 200 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-40 w-40"
              aria-hidden="true"
            >
              {/* Bottom tote */}
              <rect x="30" y="110" width="140" height="50" rx="8" fill="#93c5fd" stroke="#bfdbfe" strokeWidth="2" />
              <rect x="70" y="120" width="60" height="8" rx="4" fill="#bfdbfe" />
              {/* Middle tote */}
              <rect x="38" y="65" width="124" height="50" rx="8" fill="#60a5fa" stroke="#93c5fd" strokeWidth="2" />
              <rect x="74" y="75" width="52" height="8" rx="4" fill="#93c5fd" />
              {/* Top tote */}
              <rect x="46" y="20" width="108" height="50" rx="8" fill="#3b82f6" stroke="#60a5fa" strokeWidth="2" />
              <rect x="78" y="30" width="44" height="8" rx="4" fill="#60a5fa" />
            </svg>
            <p className="mt-6 text-xl font-bold text-white">
              Clean. Stackable. Reusable.
            </p>
            <p className="mt-2 text-blue-200">
              One simple tote size for easier packing, delivery, and pickup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
