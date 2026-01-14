import { useState } from "react";
import type { Route } from "./+types/index";
import type { Post, StrapiResponse, StrapiPost } from "~/types";
import PostCard from "~/components/PostCard";
import Pagination from "~/components/Pagination";
import PostFilter from "~/components/PostFilter";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: Post[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts?
    populate=image&sort=date:desc`);

  if (!res.ok) throw new Error("Failed to fetch data");

  const json: StrapiResponse<StrapiPost> = await res.json();

  const posts = json.data.map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt,
    date: item.date,
    body: item.body,
    image: item.image?.url ? `${item.image.url}` : "/images/no-image.png",
  }));

  return { posts };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const { posts } = loaderData;
  const filteredPosts = posts.filter((post) => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query)
    );
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexofLast = currentPage * postsPerPage;
  const indexOfFirst = indexofLast - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexofLast);

  return (
    <div className="md:relative md:isolate md:overflow-hidden md:bg-linear-to-b md:from-primary-blue-dark via-[#0b1423] md:to-[#04070d]">
      <div className="pointer-events-none absolute -top-40 -right-48 h-112 w-md rounded-full bg-glass-yellow opacity-55 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-72 -left-40 h-128 w-lg rounded-full bg-glass-green opacity-55 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-glass-blue opacity-40 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-0 py-24 sm:px-6 lg:px-10">
        <section className="space-y-6 px-4 sm:px-0">
          <span className="inline-flex items-center gap-2 rounded-full bg-glass-green px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-light-gray">
            <span className="h-2 w-2 rounded-full bg-accent-green" />
            Blog
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight text-pale-yellow md:text-5xl">
              Build · Learn · Reflect
            </h1>
            <p className="text-medium-gray text-lg leading-relaxed">
              My notes from my learning journey — experiments, takeaways, and
              resources that keep me growing as a self-taught developer.
            </p>
          </div>
        </section>

        <PostFilter
          searchQuery={searchQuery}
          onSearchChange={(query) => {
            setSearchQuery(query);
            setCurrentPage(1);
          }}
        />

        <section className="space-y-10">
          {currentPosts.length === 0 ? (
            <p className="mx-4 rounded-3xl border border-(--border-glass) bg-glass-gray/70 px-6 py-10 text-center text-light-gray backdrop-blur sm:mx-0">
              No Posts Found
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {currentPosts.map((post: Post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          {totalPages > 1 ? (
            <div className="mx-auto max-w-md">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          ) : null}
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
