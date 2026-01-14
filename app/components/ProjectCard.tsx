import type { Project } from "~/types";
import { FaGithub } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

const ProjectCard = ({ project }: { project: Project }) => {
  const formattedDate = new Date(project.date).toLocaleDateString();

  return (
    <article className="flex h-full flex-col overflow-hidden border border-(--border-glass) bg-primary-blue-dark/40 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
      {/* Image on top */}
      <div className="overflow-hidden border-b border-(--border-glass) bg-glass-gray">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 px-4 py-6 text-light-gray">
        {/* Title + date */}
        <header className="space-y-2">
          <h3 className="text-2xl font-semibold text-pale-yellow">
            {project.title}
          </h3>
          <p className="text-sm text-medium-gray">{formattedDate}</p>
        </header>

        {/* Description */}
        <p className="text-base leading-relaxed text-light-gray/90">
          {project.description}
        </p>

        {/* Tech stack chips */}
        {project.tech?.length ? (
          <div className="mt-1 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-(--border-glass) px-3 py-1 text-xs uppercase tracking-[0.3em] bg-glass-blue text-light-gray"
              >
                {item}
              </span>
            ))}
          </div>
        ) : null}

        {/* Buttons */}
        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3"
              aria-label={`${project.title} — Live Demo`}
            >
              <TfiWorld size={24} />
              Live project
            </a>
          )}

          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 px-6 py-3"
              aria-label={`${project.title} — GitHub Repository`}
            >
              <FaGithub size={24} />
              View code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
