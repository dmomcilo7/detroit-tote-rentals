const steps = [
  {
    number: 1,
    title: 'We deliver',
    description: 'Choose your rental package and we bring the totes to you.',
  },
  {
    number: 2,
    title: 'You pack and move',
    description: 'Use the totes for packing, stacking, and moving.',
  },
  {
    number: 3,
    title: 'We pick up',
    description:
      'When you are done unpacking, we come back and collect them.',
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-slate-950">How it works</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-700">
                {step.number}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-slate-700">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
