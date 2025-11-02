import { Link } from "react-router";

const AboutPreview = () => {
  return (
    <section className="relative isolate overflow-hidden rounded-[32px] border border-(--border-glass) bg-gradient-to-br from-primary-blue-dark via-[#111d32] to-[#04070d] px-6 py-12 shadow-lg sm:px-10">
      <div className="pointer-events-none absolute -top-24 left-[-8rem] h-52 w-52 rounded-full bg-glass-green opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10rem] right-[-6rem] h-64 w-64 rounded-full bg-glass-yellow opacity-50 blur-3xl" />

      <div className="relative z-10 grid gap-10 md:grid-cols-[1.2fr_auto] md:items-center">
        <div className="space-y-6">
          
          <h2 className="text-3xl font-bold text-pale-yellow md:text-4xl">
            About Me
          </h2>
          <p className="text-medium-gray text-base md:text-lg leading-relaxed">
            A self-taught frontend developer based in the Swiss Riviera. I enjoy
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

          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <Link to="/about" className="btn-primary">
              About me
            </Link>
            <Link to="/blog" className="btn-secondary">
              Visit the blog
            </Link>
          </div>
        </div>

        <div className="group relative mx-auto w-48 overflow-hidden rounded-[28px] border border-(--border-glass) bg-glass-blue/80 p-2 shadow-lg backdrop-blur transition duration-500 hover:-translate-y-1 sm:w-52 md:w-56">
          <div className="absolute -inset-2 rounded-[26px] border border-(--border-glass) bg-glass-yellow/30 opacity-0 blur-lg transition duration-500 group-hover:opacity-100" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-[22px] border border-(--border-glass)">
            <img
              src="/images/maz_profile_photo_mountains_1.jpeg"
              alt="Marianna Mirabile portrait"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-6 left-1/2 w-[140%] -translate-x-1/2 rounded-full bg-glass-yellow/40 py-6 blur-2xl transition duration-500 group-hover:blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
