import { pricing } from '../data/pricing';

export function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-slate-950">
          Simple rental packages
        </h2>
        <p className="mt-3 max-w-2xl text-slate-700">
          Early pricing shown as examples. Final pricing can vary by delivery
          location, rental length, and availability.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pricing.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="mt-2 text-4xl font-bold text-orange-700">
                {item.price}
              </p>
              <p className="mt-2 font-semibold">{item.totes}</p>
              <p className="mt-3 text-slate-700">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
