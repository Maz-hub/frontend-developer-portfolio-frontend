import { Link } from "react-router";

const AboutPage = () => {
  const quickFacts = [
    {
      label: "Based in",
      value: "Switzerland",
      description:
        "Blending years of people-centered work with a passion for the web.",
    },
    {
      label: "Current focus",
      value: "React Frontend Engineering",
      description:
        "Advancing in React for clean, performant, and scalable UIs.",
    },
    {
      label: "Latest milestone",
      value: "Skyscanner · Forage",
      description:
        "Built a React date picker using Skyscanner’s Backpack library.",
    },
  ];

  const journeySections = [
    {
      title: "ctrl.z.my.life_",
      description: [
        "My path into tech hasn’t been a straight one — it’s been shaped by curiosity, creativity, and a lifelong desire to keep learning. The constant thread through all my professional experiences has been the drive to grow and adapt.",
        "Before discovering code, I studied Hospitality & Tourism and worked in diverse settings — from hotels and restaurants to administrative roles across different industries. Over the years, I’ve seen how patience, empathy, and small details can completely change how people experience something — a lesson that now guides how I think about building for the web.",
        "Each step, even the detours, has taught me that growth doesn’t always happen in a straight line — sometimes it’s the quiet shifts, the small learnings, that prepare you for the next big step.",
      ],
    },
    {
      title: "from.curiosity_to_code_",
      description: [
        "I first became curious about web development more than fifteen years ago while experimenting with WordPress, building small freelance websites for local clients - including a hotel-restaurant and a few small businesses. I loved seeing ideas come to life online, but I often reached the limits of what I could customize without understanding the code behind it.",
        "In 2021, I decided to go deeper and began learning through freeCodeCamp, where I earned my Responsive Web Design certification. That experience reignited my passion for creating and sparked a desire to understand how the web works from front to back.",
        "In 2024, I joined herHack, the largest female-led hackathon in Switzerland, where our team proudly won 2nd place. Working under pressure reminded me how creativity and collaboration can bring bold ideas to life.",
        "The following year, I completed Harvard’s CS50: Computer Science for Web Programming, a professional certification that challenged me to build full-stack projects and connect the dots between logic, design, and user experience.",
        "Each of these experiences has shaped not only my technical foundation but also the way I approach learning - with persistence, curiosity, and a genuine excitement for building.",
      ],
    },
    {
      title: "debugging.with.grace_or.not_",
      description: [
        "Debugging and I have a complicated relationship. There were times when the console screamed at me, and one missing semicolon nearly broke my spirit - but never my curiosity.",
        "Every bug has felt like an invitation to dig deeper and understand a little more. Frustrating? Absolutely. But walking away was never an option - there’s always that moment when the problem finally clicks, and it’s worth every bit of the struggle.",
      ],
    },
    {
      title: "growth.purpose_",
      description: [
        "For me, coding isn’t just a skill - it’s a way of thinking and expressing ideas with structure and care.",
        "Each project I take on is a chance to improve my process, keep learning, and grow through real challenges and collaboration.",
      ],
    },
  ];

  const guidingPrinciples = [
    {
      title: "Details that matter",
      description:
        "My background in people-focused work taught me that small choices - tone, timing, layout - can completely change how something feels to others.",
    },
    {
      title: "Curiosity-led problem solving",
      description:
        "From freeCodeCamp to CS50W, I like to understand the “why” behind things so I can build with clarity and purpose.",
    },
    {
      title: "Collective momentum, Hackathon",
      description:
        "Team projects and hackathons remind me how much creativity grows when people build together - it’s motivating and pushes me to learn faster.",
    },
  ];

  const credentials = [
    {
      title: "Responsive Web Design Certification",
      issuer: "freeCodeCamp",
      year: "2021",
      description:
        "Where the self-taught journey officially started and layouts became my sandbox.",
    },
    {
      title: "Microsoft Office Specialist: Excel Expert",
      issuer: "Microsoft",
      year: "2022",
      description:
        "Advanced Excel certification that sharpened my analytical thinking and pattern-spotting.",
    },
    {
      title: "herHack 2024 · 2nd place",
      issuer: "Bern, Switzerland",
      year: "2024",
      description:
        "Developed a sustainable tech concept for SBB with a diverse all-women team - collaboration, creativity, and impact in action.",
    },
    {
      title: "CS50: Computer Science for Web Programming",
      issuer: "Harvard University (HarvardX)",
      year: "2025",
      description:
        "Built full-stack projects and connected design thinking with backend logic through hands-on coursework.",
    },

    {
      title: "Aquatics Integrity Unit WordPress Refresh",
      issuer: "AQIU Integrity Unit",
      year: "2024 — present",
      description:
        "10% mandate to re-structure content and modernise UX for aquaticsintegrity.com.",
    },
    {
      title: "Front-End Software Engineering Job Simulation",
      issuer: "Skyscanner x Forage",
      year: "2025",
      description:
        "Built and tested a Backpack React date picker while working through real-world product briefs.",
    },
  ];

  const herHackImages = [
    {
      src: "/images/herhack-2024_1.jpeg",
      alt: "herHack 2024 photo 1",
    },
    {
      src: "/images/herhack-2024_2.jpeg",
      alt: "herHack 2024 photo 2",
    },
    {
      src: "/images/herhack-2024_3.jpeg",
      alt: "herHack 2024 photo 3",
    },
  ];

  return (
    <div className="relative isolate overflow-hidden md:bg-linear-to-b md:from-primary-blue-dark md:via-[#0b1423] md:to-[#04070d]">
      <div className="pointer-events-none absolute -top-36 -right-24 h-80 w-80 rounded-full bg-glass-yellow opacity-70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -left-24 h-112 w-md rounded-full bg-glass-green opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-glass-blue opacity-40 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-24 px-0 py-24 sm:px-6">
        <section className="grid gap-14 px-4 sm:px-0 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-glass-green px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-light-gray">
              <span className="h-2 w-2 rounded-full bg-accent-green" />
              About
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight text-pale-yellow md:text-5xl">
                Self-taught frontend developer passionate about turning ideas
                into clean, user-friendly web experiences.
              </h1>
              <p className="text-lg leading-relaxed text-light-gray">
                Hey, I&apos;m Marianna — friends call me Maz. I&apos;m a
                self-taught frontend developer based in Switzerland,
                continuously learning through practice, hands-on projects, and
                community challenges that help me grow.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-6 rounded-2xl border border-(--border-glass) bg-glass-blue opacity-70 blur-lg" />
            <div className="relative overflow-hidden rounded-4xl border border-(--border-glass) bg-glass-blue backdrop-blur-lg">
              <img
                src="/images/maz_bio.jpeg"
                alt="Marianna"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 rounded-2xl border border-(--border-glass) bg-glass-yellow px-6 py-4 shadow-lg backdrop-blur sm:-left-6">
              <p className="text-xs uppercase tracking-[0.25em] text-primary-blue-dark">
                15+ years curious
              </p>
              <p className="mt-1 text-sm font-semibold text-primary-blue-dark">
                From hospitality to code, still fueled by curiosity.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-3">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-(--border-glass) bg-glass-gray px-4 py-7 shadow-sm backdrop-blur sm:px-6"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-medium-gray">
                  {fact.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-light-yellow">
                  {fact.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-medium-gray">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-12 px-4 sm:px-0">
          <div className="mx-auto max-w-2xl text-center space-y-4">
            <h2 className="text-3xl font-semibold text-light-yellow md:text-4xl">
              The journey so far
            </h2>
            <p className="text-medium-gray">
              Every chapter adds a tool to my kit - how to organize, listen,
              adapt, and now, how to build. I’ve learned that growth often
              begins when curiosity meets persistence.
            </p>
          </div>

          <div className="space-y-10">
            {journeySections.map((section) => (
              <article
                key={section.title}
                className="relative border-l border-(--border-glass) pl-6 pr-4 sm:pl-8 sm:pr-0"
              >
                <span className="absolute -left-[0.6rem] top-0 h-3 w-3 rounded-full border border-(--border-glass) bg-light-yellow shadow-md" />
                <h3 className="text-2xl font-semibold text-light-yellow">
                  {section.title}
                </h3>
                <div className="mt-4 space-y-4 text-medium-gray leading-relaxed">
                  {section.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-2xl border border-(--border-glass) bg-glass-blue px-4 py-10 backdrop-blur md:grid-cols-3 md:px-8">
          {guidingPrinciples.map((principle) => (
            <div key={principle.title} className="space-y-3">
              <h3 className="text-lg font-semibold text-light-yellow">
                {principle.title}
              </h3>
              <p className="text-sm leading-relaxed text-medium-gray">
                {principle.description}
              </p>
            </div>
          ))}
        </section>

        <section className="space-y-10">
          <div className="mx-auto max-w-2xl text-center space-y-4">
            <h2 className="text-3xl font-semibold text-light-yellow md:text-4xl">
              Certifications & Highlights
            </h2>
            <p className="text-medium-gray">
              The moments, courses, and collaborations that keep widening my
              perspective and remind me to stay a learner first.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[...credentials]
              .sort((a, b) => parseInt(b.year) - parseInt(a.year))
              .map((item) => (
                <div
                  key={`${item.title}-${item.year}`}
                  className="flex flex-col gap-3 rounded-2xl border border-(--border-glass) bg-glass-gray px-4 py-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md sm:px-6"
                >
                  <div className="flex items-center justify-between text-medium-gray">
                    <span className="text-xs uppercase tracking-[0.3em]">
                      {item.issuer}
                    </span>
                    <span className="text-xs font-semibold text-light-yellow">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-light-yellow">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-medium-gray">
                    {item.description}
                  </p>
                </div>
              ))}
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-medium-gray">
              herHack gallery
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {herHackImages.map((image) => (
                <figure
                  key={image.src}
                  className="overflow-hidden rounded-2xl border border-(--border-glass) bg-glass-blue/70 backdrop-blur"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-2xl border border-(--border-glass) bg-glass-gray px-5 py-12 text-center backdrop-blur md:px-8">
          <div className="absolute inset-y-0 left-0 hidden w-2/5 skew-x-[-20deg] bg-glass-yellow opacity-20 md:block" />
          <div className="relative flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="max-w-xl text-left space-y-3">
              <h3 className="text-2xl font-semibold text-light-yellow">
                Open to frontend opportunities
              </h3>
              <p className="text-light-gray">
                I’m ready to bring my curiosity, persistence, and love for
                clean, thoughtful interfaces to a frontend developer role. If
                you think we’d be a good match, let’s talk.
              </p>
            </div>
            <Link to="/contact" className="btn-secondary whitespace-nowrap">
              Say hello
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
