import { Link } from "react-router";

const AboutPreview = () => {
  return (
    <section className="relative isolate py-12 md:px-10 md:overflow-hidden md:rounded-4xl md:border md:border-(--border-glass) md:bg-linear-to-br md:from-primary-blue-dark md:via-[#111d32] md:to-[#04070d] md:shadow-lg">
      <div className="pointer-events-none absolute -top-24 -left-32 hidden h-52 w-52 rounded-full bg-glass-green opacity-60 blur-3xl md:block" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 hidden h-64 w-64 rounded-full bg-glass-yellow opacity-50 blur-3xl md:block" />

      <div className="relative z-10 grid gap-10 md:grid-cols-[1.2fr_auto] md:items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-pale-yellow text-center md:text-left md:text-4xl">
            About Me
          </h2>
          <p className="text-medium-gray text-lg leading-relaxed">
            Developer and builder based in the Swiss Riviera. I take the time
            to understand how an organisation works before I build. That is why
            what I build gets used.
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-medium-gray">
            <span className="rounded-full border border-(--border-glass) bg-glass-green/50 px-4 py-2 backdrop-blur">
              Product Thinker
            </span>
            <span className="rounded-full border border-(--border-glass) bg-glass-blue/60 px-4 py-2 backdrop-blur">
              Real Projects, Real Users
            </span>
            <span className="rounded-full border border-(--border-glass) bg-glass-yellow/60 px-4 py-2 backdrop-blur">
              From WordPress Roots
            </span>
            <span className="rounded-full border border-(--border-glass) bg-glass-green/50 px-4 py-2 backdrop-blur">
              Curiosity in Action
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              to="/about"
              className="btn-primary w-full text-center md:w-auto"
            >
              About me
            </Link>
          </div>
        </div>

        <div className="group relative mx-auto w-full max-w-sm overflow-hidden sm:w-52 md:w-56 md:overflow-hidden md:rounded-[28px] md:border md:border-(--border-glass) md:bg-glass-blue/80 md:p-2 md:shadow-lg md:backdrop-blur md:transition md:duration-500 md:hover:-translate-y-1">
          <div className="absolute -inset-2 hidden rounded-[26px] border border-(--border-glass) bg-glass-yellow/30 opacity-0 blur-lg transition duration-500 group-hover:opacity-100 md:block" />
          <div className="relative aspect-3/4 overflow-hidden rounded-[22px] md:border md:border-(--border-glass)">
            <img
              src="/images/maz_profile_photo_mountains_1.webp"
              alt="Marianna Mirabile portrait"
              className="h-full w-full object-cover transition duration-500"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-6 left-1/2 hidden w-[140%] -translate-x-1/2 rounded-full bg-glass-yellow/40 py-6 blur-2xl transition duration-500 group-hover:blur-3xl md:block" />
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
