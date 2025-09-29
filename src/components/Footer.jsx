const footerLinks = [
  {
    title: 'Resources',
    items: [
      { label: 'Documentation', href: '#' },
      { label: 'Component Library', href: '#' },
      { label: 'Tutorials', href: '#' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Connect',
    items: [
      { label: 'Twitter', href: '#' },
      { label: 'GitHub', href: '#' },
      { label: 'Community', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold">
                CC
              </span>
              <p className="text-lg font-semibold tracking-tight">Codex Cloud</p>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Sharing the latest ideas on product design, ethical AI, and automation workflows to help teams ship faster.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{group.title}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-primary-dark">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Codex Cloud. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-dark">
              Privacy
            </a>
            <a href="#" className="hover:text-primary-dark">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
