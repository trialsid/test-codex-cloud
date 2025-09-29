import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary-dark px-6 py-14 text-white shadow-xl">
      <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Newsletter</p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Stay ahead with curated insights</h2>
        <p className="mt-3 text-base text-white/80">
          Every Monday we send a digest of the most useful product, design, and AI resources to help you ship with confidence.
        </p>

        {submitted ? (
          <div className="mt-8 rounded-2xl bg-white/10 p-6 text-left text-sm sm:text-base">
            <p className="font-semibold">You're on the list!</p>
            <p className="mt-2 text-white/80">
              Thanks for subscribing. Keep an eye on your inbox for the next edition of the Codex Cloud dispatch.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-3 rounded-2xl bg-white/10 p-4 text-left sm:flex-row sm:items-center"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/70 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/70"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-primary transition hover:bg-slate-100"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
