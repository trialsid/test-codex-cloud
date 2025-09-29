import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Newsletter from './components/Newsletter.jsx';
import PostCard from './components/PostCard.jsx';
import TagPill from './components/TagPill.jsx';
import { featuredPost, posts, categories } from './data/posts.js';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-16 md:px-6">
        <section className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-dark">Featured</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl lg:text-6xl">
              Build smarter products with thoughtful workflows
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-600 md:text-lg">
              Codex Cloud is a weekly blog exploring product design, AI-powered tooling, and automation strategies that help
              teams learn faster and deliver impact.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#latest"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark"
              >
                Explore latest stories
              </a>
              <a
                href="#newsletter"
                className="inline-flex items-center justify-center rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:text-primary-dark"
              >
                Join newsletter
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
            <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-xl backdrop-blur">
              <PostCard post={featuredPost} variant="featured" />
            </div>
          </div>
        </section>

        <section id="latest" className="mt-24">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Latest Stories</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">Fresh perspectives for builders</h2>
            </div>
            <a href="#" className="hidden text-sm font-semibold text-primary hover:text-primary-dark md:inline-flex">
              View all posts
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        <section id="categories" className="mt-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Browse by Topic</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Deep dives across the product stack</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
              Whether you&apos;re prototyping a new feature or operationalizing AI, our categories help you find resources faster.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br p-6 shadow-sm ${category.color}`}
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="mt-3 text-sm text-slate-600/90">{category.description}</p>
                  <div className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                    Discover resources
                    <span aria-hidden="true" className="ml-2">
                      &rarr;
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-white/40 blur-2xl" aria-hidden="true" />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <Newsletter />
            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Why readers subscribe</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">1</span>
                    Actionable guidance to improve product delivery each week.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">2</span>
                    Curated design inspiration to keep your UI patterns fresh.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">3</span>
                    Behind-the-scenes looks at how teams build with AI responsibly.
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Top tags this month</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {['AI ethics', 'Developer experience', 'Product strategy', 'Workflow automation', 'Design tokens'].map((tag) => (
                    <TagPill key={tag} label={tag} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
