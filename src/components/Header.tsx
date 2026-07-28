import { useState } from 'react';

const navLinks = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#service-area', label: 'Service Area' },
  { href: '#quote', label: 'Request a Quote' },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Two-tone logo */}
        <a href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-blue-600">Detroit</span>{' '}
          <span className="text-slate-950">Tote Rentals</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Email CTA — always visible */}
          <a
            href="mailto:dmomcilo@hotmail.com"
            aria-label="Email us"
            className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100 sm:px-4"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="hidden sm:inline">Contact</span>
          </a>

          {/* Desktop quote button */}
          <a
            href="#quote"
            className="hidden rounded-full bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700 sm:inline-block"
          >
            Request a Quote
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 md:hidden"
          >
            <svg
              className="h-6 w-6 text-slate-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-slate-200 bg-white px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 font-medium hover:bg-slate-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:dmomcilo@hotmail.com"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-3 font-semibold text-blue-700 hover:bg-blue-100"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact
              </a>
            </li>
            <li>
              <a
                href="#quote"
                onClick={() => setMenuOpen(false)}
                className="block rounded-full bg-blue-600 px-5 py-3 text-center font-semibold text-white hover:bg-blue-700"
              >
                Request a Quote
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
