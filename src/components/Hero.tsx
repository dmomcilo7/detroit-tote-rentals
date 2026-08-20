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

        <img
          src="/detroit-tote-rentals-hero-cropped.jpg"
          alt="Three moving totes on a residential lawn — one open, one collapsed stack, and one closed with lid attached"
          width={1200}
          height={900}
          fetchPriority="high"
          className="aspect-[4/3] w-full rounded-3xl object-cover shadow-sm"
        />
      </div>
    </section>
  );
}
