import type { Route } from "./+types/index";
import FeaturedProjects from "~/components/FeaturedProjects";
import type { Project } from "~/types";
import AboutPreview from "~/components/AboutPreview";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marianna Mirabile | Frontend Developer" },
    {
      name: "description",
      content:
        "Frontend Developer with recent hands-on experience building projects while learning React and modern web tools.!",
    },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await res.json();

  return { projects: data };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData;

  const techSections = [
    {
      title: "Core stack",
      description: "The technologies I use to bring interfaces to life.",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "React Router",
        "Tailwind CSS 4",
        "Bootstrap5",
        "Vite",
        "REST APIs",
      ],
    },
    {
      title: "Tooling",
      description: "Everyday tools that keep my workflow smooth.",
      items: [
        "VS Code",
        "Git & GitHub",
        "GitHub Codespaces",
        "Figma",
        "NPM Scripts",
        "Chrome DevTools",
      ],
    },
    {
      title: "Approach",
      description: "Principles I focus on while building.",
      items: [
        "Responsive Design",
        "Accessibility",
        "Clean Code",
        "Component Thinking",
        "Version Control",
        "Attention to Detail",
        "Working with APIs",
      ],
    },
    {
      title: "Next up",
      description: "Technologies I’m exploring to grow further.",
      items: [
        "TypeScript",
        "TanStack",
        "Testing",
        "Performance Optimization",
        "Advanced API Handling",
      ],
    },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-blue-dark via-[#0b1423] to-[#04070d]">
      <div className="pointer-events-none absolute -top-48 left-[-12rem] h-[30rem] w-[30rem] rounded-full bg-glass-green opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-20rem] right-[-14rem] h-[34rem] w-[34rem] rounded-full bg-glass-yellow opacity-55 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-glass-blue opacity-40 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-24 lg:px-10">
        <FeaturedProjects
          projects={projects}
          count={4}
          className="rounded-[32px] border border-(--border-glass) bg-glass-gray px-6 py-10 shadow-lg backdrop-blur md:px-10"
        />

        <section className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold text-pale-yellow md:text-4xl">
              Tech I work with
            </h2>
            <p className="text-medium-gray text-sm md:text-base">
              My go-to languages, tools, and what I’m learning next.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {techSections.map((section) => (
              <div
                key={section.title}
                className="rounded-3xl border border-(--border-glass) bg-glass-gray/80 px-6 py-7 shadow-sm backdrop-blur transition  hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-light-yellow">
                  {section.title}
                </h3>
                <p className="mt-1 text-sm text-medium-gray">
                  {section.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {section.items.map((item, index) => (
                    <span
                      key={item}
                      className={`rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <AboutPreview />

        <section className="rounded-3xl border border-(--border-glass) bg-glass-blue/70 px-6 py-10 text-center shadow-lg backdrop-blur md:px-10">
          <h2 className="text-3xl font-bold text-pale-yellow md:text-4xl">
            Get in touch
          </h2>
          <p className="mt-3 text-medium-gray text-base md:text-lg">
            I’m focused on growing as a frontend developer and open to
            opportunities where I can contribute, learn, and build meaningful
            web experiences.
          </p>
          <div className="mt-6 flex justify-center">
            <Link to="/contact" className="btn-primary">
              Contact me
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
