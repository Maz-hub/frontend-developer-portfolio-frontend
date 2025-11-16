import type { Post } from "~/types";
import { Link } from "react-router";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-(--border-glass) bg-glass-gray/80 px-6 py-8 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg sm:px-8 mb-6">
      <div className="pointer-events-none absolute -top-20 -right-24 h-40 w-40 rounded-full bg-glass-blue opacity-40 blur-2xl transition group-hover:opacity-60" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-32 w-32 rounded-full bg-glass-green opacity-40 blur-2xl transition group-hover:opacity-60" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-1 flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-medium-gray">
          <span className="rounded-full border border-(--border-glass) bg-primary-blue-dark/40 px-3 py-1">
            {new Date(post.date).toDateString()}
          </span>
        </div>

        <h3 className="text-2xl font-semibold leading-snug text-pale-yellow transition group-hover:text-light-yellow md:text-[26px]">
          {post.title}
        </h3>

        <p className="text-sm text-medium-gray leading-relaxed md:text-base">
          {post.excerpt}
        </p>

        {/* BUTTON — STICKS TO THE BOTTOM */}
        <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-light-yellow pt-4">
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-light-yellow/40 px-4 py-2 transition hover:border-light-yellow hover:text-pale-yellow"
          >
            Read More
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
