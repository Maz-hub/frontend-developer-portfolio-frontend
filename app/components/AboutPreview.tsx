import { Link } from "react-router";

const AboutPreview = () => {
  return (
    <section className="relative isolate overflow-hidden rounded-[32px] border border-(--border-glass) bg-gradient-to-br from-primary-blue-dark via-[#111d32] to-[#04070d] px-6 py-12 shadow-lg sm:px-10">
      <div className="pointer-events-none absolute -top-24 left-[-8rem] h-52 w-52 rounded-full bg-glass-green opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10rem] right-[-6rem] h-64 w-64 rounded-full bg-glass-yellow opacity-50 blur-3xl" />

      <div className="relative z-10 grid gap-10 md:grid-cols-[1.15fr_auto] md:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-glass-green px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-light-gray">
            <span className="h-2 w-2 rounded-full bg-accent-green" />
            About Me
          </span>
          <h2 className="text-3xl font-bold text-pale-yellow md:text-4xl">
            Turning ideas into clean, accessible, and user-friendly web
            interfaces.
          </h2>
          <p className="text-medium-gray text-base md:text-lg leading-relaxed">
            Hey, I&apos;m Marianna — or Maz, as most people know me. A
            self-taught frontend developer based in the Swiss Riviera. I enjoy
            building modern, scalable, efficient, and engaging web applications
            that balance design and usability.
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-medium-gray">
            <span className="rounded-full border border-(--border-glass) bg-glass-blue/60 px-4 py-2 backdrop-blur">
              React & TanStack explorer
            </span>
            <span className="rounded-full border border-(--border-glass) bg-glass-yellow/60 px-4 py-2 backdrop-blur">
              From WordPress roots
            </span>
            <span className="rounded-full border border-(--border-glass) bg-glass-green/50 px-4 py-2 backdrop-blur">
              Curiosity in action
            </span>
            <span className="rounded-full border border-(--border-glass) bg-glass-green/50 px-4 py-2 backdrop-blur">
              From hospitality to code
            </span>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-full border border-secondary-green bg-secondary-green px-6 py-3 text-sm font-semibold text-primary-blue-dark transition hover:bg-accent-green"
          >
            Learn More About Me
          </Link>
        </div>

        <div className="relative mx-auto w-48 overflow-hidden rounded-[28px] border border-(--border-glass) bg-glass-blue/80 p-2 backdrop-blur md:w-56">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[22px] border border-(--border-glass)">
            <img
              src="/images/maz_profile_photo_mountains_1.jpeg"
              alt="Marianna Mirabile portrait"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 w-[140%] -translate-x-1/2 rounded-full bg-glass-yellow/40 py-6 blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
