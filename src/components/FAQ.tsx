import { faqs } from '../data/faqs';

export function FAQ() {
  return (
    <section className="bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-slate-950">
          Frequently asked questions
        </h2>

        <div className="mt-8 divide-y divide-slate-200 rounded-2xl bg-white px-6 shadow-sm">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-950">
                <span>{faq.question}</span>
                <svg
                  className="h-5 w-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-slate-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
