import ReactMarkdown from "react-markdown";
import type { Route } from "./+types/details";
import type { Post, StrapiResponse, StrapiPost } from "~/types";
import { Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";
import { BsJournalCode } from "react-icons/bs";

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params;

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/posts?filters[slug][$eq]=${slug}&populate=image`
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  const json: StrapiResponse<StrapiPost> = await res.json();

  if (!json.data.length) throw (new Response("Not Found"), { status: 404 });

  const item = json.data[0];

  const post = {
    id: item.id,
    slug: item.slug,
    excerpt: item.excerpt,
    title: item.title,
    date: item.date,
    body: item.body,
    image: item.image?.url ? `${item.image.url}` : null,
  };

  return { post };
}

type BlogPostDetailsPageProps = {
  loaderData: {
    post: Post;
  };
};

const BlogPostDetailsPage = ({ loaderData }: BlogPostDetailsPageProps) => {
  const { post } = loaderData;

  return (
    <div className="relative isolate overflow-hidden bg-primary-blue-dark md:bg-linear-to-b md:from-primary-blue-dark md:via-[#0b1423] md:to-[#04070d]">
      <div className="pointer-events-none absolute -top-40 -left-40 h-104 w-104 rounded-full bg-glass-green opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-72 -right-48 h-128 w-lg rounded-full bg-glass-yellow opacity-55 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-glass-blue opacity-40 blur-3xl" />

      <BsJournalCode className="pointer-events-none absolute right-10 bottom-10 text-[100px] text-light-gray/5" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-14 px-0 py-24 sm:px-6 lg:px-10">
        <header className="space-y-6 px-4 sm:px-0">
          <span className="inline-flex items-center gap-2 rounded-full bg-glass-green px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-light-gray">
            <span className="h-2 w-2 rounded-full bg-accent-green" />
            Blog
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight text-pale-yellow md:text-5xl">
              {post.title}
            </h1>
            <span className="inline-flex rounded-full border border-(--border-glass) bg-primary-blue-dark/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-medium-gray">
              {new Date(post.date).toDateString()}
            </span>
          </div>
        </header>

        <article className="relative px-4 py-10 md:rounded-4xl md:border md:border-(--border-glass) md:bg-glass-gray md:px-10 md:shadow-xl md:backdrop-blur">
          <div className="pointer-events-none absolute -top-24 -right-32 h-52 w-52 rounded-full bg-glass-blue opacity-40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-24 h-60 w-60 rounded-full bg-glass-green opacity-35 blur-3xl" />

          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full object-cover mb-6 rounded-xl"
            />
          )}

          <div className="relative z-10 prose prose-invert max-w-none">
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </div>
        </article>

        <div className="flex flex-wrap items-center gap-4 px-4 sm:px-0">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-light-yellow/40 px-5 py-3 text-sm font-semibold text-light-yellow transition hover:border-light-yellow hover:text-pale-yellow"
          >
            <FiArrowLeft className="text-base" />
            Back To Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetailsPage;
