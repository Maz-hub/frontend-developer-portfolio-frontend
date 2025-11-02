import { Link } from "react-router";
import { FiHome, FiCompass } from "react-icons/fi";
import { LiaMountainSolid } from "react-icons/lia";

const NotFound = () => {
  return (
    <div className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-primary-blue-dark via-[#0b1423] to-[#04070d] px-6 py-24">
      <div className="pointer-events-none absolute -top-48 left-[-12rem] h-[28rem] w-[28rem] rounded-full bg-glass-green opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-18rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-glass-yellow opacity-55 blur-3xl" />
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-glass-blue opacity-40 blur-3xl" />

      <LiaMountainSolid className="pointer-events-none absolute left-6 top-16 text-[220px] text-light-gray/5" />
      <FiCompass className="pointer-events-none absolute right-12 bottom-24 text-[160px] text-light-gray/5" />

      <div className="relative z-10 w-full max-w-3xl">
        <div className="rounded-[32px] border border-(--border-glass) bg-glass-blue/70 px-8 py-12 text-center shadow-xl backdrop-blur-md sm:px-12">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-light-yellow/50 bg-light-yellow/10 text-light-yellow">
            <span className="text-4xl font-semibold">404</span>
          </div>

          <h1 className="mt-8 text-4xl font-bold text-pale-yellow md:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-medium-gray md:text-lg">
            Looks like this page took a wrong trail. Let&apos;s guide you back
            to something more familiar.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-secondary-green bg-secondary-green px-6 py-3 text-sm font-semibold text-primary-blue-dark transition hover:bg-accent-green"
            >
              <FiHome className="text-lg" />
              Head back home
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-(--border-glass) bg-primary-blue-dark/40 px-6 py-3 text-sm font-semibold text-light-gray transition hover:border-light-yellow/60 hover:text-light-yellow"
            >
              <FiCompass className="text-lg" />
              Explore projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
