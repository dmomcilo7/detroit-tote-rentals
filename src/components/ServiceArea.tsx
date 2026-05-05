const cities = [
  'Rochester Hills',
  'Troy',
  'Sterling Heights',
  'Royal Oak',
  'Detroit',
  'Novi',
  'Dearborn',
  'Macomb',
  'Auburn Hills',
] as const;

export function ServiceArea() {
  return (
    <section id="service-area" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-slate-950">
          Serving Metro Detroit
        </h2>
        <p className="mt-3 max-w-2xl text-slate-700">
          Based near Rochester Hills and serving nearby Metro Detroit
          communities.
        </p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {cities.map((city) => (
            <li
              key={city}
              className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
              {city}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
