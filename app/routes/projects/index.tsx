import { useState } from "react";
import ProjectCard from "~/components/ProjectCard";
import type { Route } from "./+types/index";
import type { Project, StrapiProject, StrapiResponse } from "~/types";
import Pagination from "~/components/Pagination";
import { AnimatePresence, motion } from "framer-motion";
import Loading from "~/components/Loading";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects?populate=*`
  );
  const json: StrapiResponse<StrapiProject> = await res.json();

  const projects = json.data.map((item) => ({
    id: item.id,
    title: item.title,
    documentId: item.documentId,
    description: item.description,
    image: item.image?.url ? `${item.image.url}` : "/images/no-image.png",
    url: item.url,
    repo: item.repo,
    date: item.date,
    category: item.category,
    tech: item.tech ? item.tech.map((t) => t.name) : [],
    featured: item.featured,
  }));

  return { projects };
}

export function HydrateFallback() {
  return <Loading />;
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;
  // Loader
  const { projects } = loaderData as { projects: Project[] };
  // Sort by date (newest first)
  projects.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  // Get unique Categories
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter projects based on the category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  // Get current pages projects
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

  return (
    <div className="md:relative md:isolate overflow-hidden md:bg-linear-to-b md:from-primary-blue-dark md:via-[#0b1423] md:to-[#04070d]">
      <div className="pointer-events-none absolute -top-40 -left-40 h-72 w-72 rounded-full bg-glass-green opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-glass-yellow opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 left-1/2 h-112 w-md -translate-x-1/2 rounded-full bg-glass-blue opacity-40 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-16 px-0 py-24 sm:px-6 lg:px-10">
        <section className="space-y-6 px-4 sm:px-0">
          <span className="inline-flex items-center gap-2 rounded-full bg-glass-green px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-light-gray">
            <span className="h-2 w-2 rounded-full bg-accent-green" />
            Projects
          </span>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h1 className="text-4xl font-bold leading-tight text-pale-yellow md:text-5xl">
              One project at a time
            </h1>
          </div>
        </section>

        <section className="space-y-10">
          <div className="py-8 md:rounded-3xl md:border md:border-(--border-glass) md:bg-glass-gray md:px-10 md:py-12 md:backdrop-blur">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-5 py-2.5 rounded-xl border transition ${
                    selectedCategory === category
                      ? "border-light-yellow bg-light-yellow/90 text-primary-blue-dark shadow-sm"
                      : "border-(--border-glass) bg-glass-blue/60 text-light-gray hover:border-light-yellow/60"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="mt-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory + currentPage}
                  layout
                  className="grid gap-6 sm:grid-cols-2"
                >
                  {currentProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mx-auto max-w-md">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;
