import type { Project } from "~/types";
import { FaGithub } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

type FeaturedProjectsProps = {
  projects: Project[];
  count?: number;
  className?: string;
};

const FeaturedProjects = ({
  projects,
  count = 4,
  className,
}: FeaturedProjectsProps) => {
  if (projects.length === 0) return null;

  return (
    <section className={`space-y-10 px-0 ${className ?? ""}`}>
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-pale-yellow md:text-4xl">
          Featured Projects
        </h2>
        <p className="text-medium-gray md:text-base">
          A quick look at recent work across frontend builds and full-stack
          applications.
        </p>
      </div>

      <div className="space-y-10">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col gap-6 py-6 transition md:flex-row md:items-stretch md:gap-6 md:rounded-3xl md:border md:border-(--border-glass) md:bg-primary-blue-dark/40 md:p-6 md:shadow-lg md:backdrop-blur"
          >
            <div className="w-full md:overflow-hidden md:rounded-2xl md:border md:border-(--border-glass) md:bg-glass-gray md:w-1/3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover transition sm:h-64 md:h-full md:hover:scale-[1.03]"
              />
            </div>

            <div className="flex-1 space-y-4 text-light-gray">
              <header className="space-y-4">
                <h3 className="text-2xl font-semibold text-pale-yellow">
                  {project.title}
                </h3>
                <p className="text-sm text-medium-gray">
                  {new Date(project.date).toLocaleDateString()}
                </p>
              </header>

              <p className="text-lg leading-relaxed text-light-gray/90 md:text-base">
                {project.description}
              </p>

              {project.tech?.length ? (
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={tech}
                      className="rounded-full border border-(--border-glass) px-3 py-1 text-xs  uppercase tracking-[0.3em] bg-glass-blue text-light-gray"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="flex flex-col gap-3 pt-2 mt-5 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary inline-flex w-full items-center justify-center gap-2 px-6 py-3 md:w-auto md:justify-start"
                  >
                    <TfiWorld size={24} />
                    Live project
                  </a>
                ) : null}

                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary inline-flex w-full items-center justify-center gap-2 px-6 py-3 md:w-auto md:justify-start"
                  >
                    <FaGithub size={24} />
                    View code
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
