import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#top' },
  { name: 'Latest', href: '#latest' },
  { name: 'Categories', href: '#categories' },
  { name: 'Newsletter', href: '#newsletter' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold">
            CC
          </span>
          <div>
            <p className="text-lg font-semibold tracking-tight">Codex Cloud</p>
            <p className="text-sm text-slate-500">Build, learn, iterate</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-primary-dark">
              {item.name}
            </a>
          ))}
          <a
            href="#newsletter"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark"
          >
            Subscribe
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white md:hidden">
          <nav className="space-y-1 px-4 py-4 text-base font-medium text-slate-700">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 hover:bg-slate-100"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#newsletter"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark"
              onClick={() => setMobileOpen(false)}
            >
              Subscribe
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
