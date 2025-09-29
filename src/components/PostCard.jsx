import TagPill from './TagPill.jsx';

export default function PostCard({ post, variant = 'default' }) {
  const containerClasses =
    variant === 'featured'
      ? 'grid gap-8 overflow-hidden rounded-3xl bg-white p-6 shadow-lg md:grid-cols-2'
      : 'flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg';

  return (
    <article className={containerClasses}>
      <div className={variant === 'featured' ? 'order-2 md:order-1' : 'flex flex-1 flex-col p-6'}>
        <div className="flex flex-wrap gap-2 text-xs text-slate-500">
          <span>{post.date}</span>
          <span>&middot;</span>
          <span>{post.readTime}</span>
        </div>
        <h2 className={`mt-4 font-display font-semibold ${variant === 'featured' ? 'text-3xl md:text-4xl' : 'text-xl'}`}>
          {post.title}
        </h2>
        <p className="mt-3 text-sm text-slate-600 md:text-base">{post.excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags?.map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>
        <p className="mt-6 text-sm font-medium text-slate-700">By {post.author}</p>
        {variant === 'featured' && post.content && (
          <p className="mt-6 text-sm leading-relaxed text-slate-600 md:text-base">{post.content}</p>
        )}
        <a
          href={`#/posts/${post.id}`}
          className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark"
        >
          Continue reading
          <span aria-hidden="true" className="ml-2">
            &rarr;
          </span>
        </a>
      </div>

      <div className={variant === 'featured' ? 'order-1 md:order-2' : ''}>
        <img
          src={post.image}
          alt={post.title}
          className={`${variant === 'featured' ? 'h-full w-full object-cover md:rounded-3xl' : 'h-52 w-full object-cover'} `}
          loading="lazy"
        />
      </div>
    </article>
  );
}
