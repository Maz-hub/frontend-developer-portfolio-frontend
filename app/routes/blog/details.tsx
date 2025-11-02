import ReactMarkdown from "react-markdown";
import type { Route } from "./+types/details";
import type { PostMeta } from "~/types";
import { Link } from "react-router";
import { FiBookOpen, FiArrowLeft } from "react-icons/fi";
import { BsJournalCode } from "react-icons/bs";

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params;

  const url = new URL("/posts-meta.json", request.url);
  const res = await fetch(url.href);

  if (!res.ok) throw new Error("Failed to fetch data");
  const index = await res.json();

  const postMeta = index.find((post: PostMeta) => post.slug === slug);

  if (!postMeta) throw (new Response("Not Found"), { status: 404 });

  // Dynamically import the raw markdown
  const markdown = await import(`../../posts/${slug}.md?raw`);

  return {
    postMeta,
    markdown: markdown.default,
  };
}

type BlogPostDetailsPageProps = {
  loaderData: {
    postMeta: PostMeta;
    markdown: string;
  };
};

const BlogPostDetailsPage = ({ loaderData }: BlogPostDetailsPageProps) => {
  const { postMeta, markdown } = loaderData;

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-blue-dark via-[#0b1423] to-[#04070d]">
      <div className="pointer-events-none absolute -top-40 left-[-10rem] h-[26rem] w-[26rem] rounded-full bg-glass-green opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-18rem] right-[-12rem] h-[32rem] w-[32rem] rounded-full bg-glass-yellow opacity-55 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-glass-blue opacity-40 blur-3xl" />

      <BsJournalCode className="pointer-events-none absolute right-10 bottom-10 text-[100px] text-light-gray/5" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-24 lg:px-10">
        <header className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-glass-green px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-light-gray">
            <span className="h-2 w-2 rounded-full bg-accent-green" />
            Blog
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight text-pale-yellow md:text-5xl">
              {postMeta.title}
            </h1>
            <span className="inline-flex rounded-full border border-(--border-glass) bg-primary-blue-dark/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-medium-gray">
              {new Date(postMeta.date).toLocaleDateString()}
            </span>
          </div>
        </header>

        <article className="relative rounded-[32px] border border-(--border-glass) bg-glass-gray px-6 py-10 shadow-xl backdrop-blur md:px-10">
          <div className="pointer-events-none absolute -top-24 right-[-8rem] h-52 w-52 rounded-full bg-glass-blue opacity-40 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-10rem] left-[-6rem] h-60 w-60 rounded-full bg-glass-green opacity-35 blur-3xl" />

          <div className="relative z-10 prose prose-invert max-w-none">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </article>

        <div className="flex flex-wrap items-center gap-4">
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
