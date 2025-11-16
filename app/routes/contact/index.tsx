import type { Route } from "./+types";
import { FiMail, FiCode } from "react-icons/fi";
import { LiaMountainSolid } from "react-icons/lia";

// export async function action({ request }: Route.ActionArgs) {
//   const formData = await request.formData();
//   const name = formData.get("name") as string;
//   const email = formData.get("email") as string;
//   const subject = formData.get("subject") as string;
//   const message = formData.get("message") as string;

//   const errors: Record<string, string> = {};

//   if (!name) errors.name = "Name is required";
//   if (!email) {
//     errors.email = "Email is required";
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//     errors.email = "Please enter a valid email address";
//   }

//   if (!subject) errors.subject = "Subject is required";
//   if (!message) errors.message = "Message is required";

//   if (Object.keys(errors).length > 0) {
//     return { errors };
//   }

//   const data = {
//     name,
//     email,
//     subject,
//     message,
//   };

//   return { message: "Form submitted successfully", data };
// }

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  return (
    <div className="relative isolate overflow-hidden bg-linear-to-b from-primary-blue-dark via-[#0b1423] to-[#04070d]">
      <div className="pointer-events-none absolute -top-40 -right-48 h-96 w-96 rounded-full bg-glass-yellow opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-64 -left-40 h-112 w-md rounded-full bg-glass-green opacity-55 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-glass-blue opacity-40 blur-3xl" />

      <FiCode className="pointer-events-none absolute right-10 bottom-24 text-[150px] text-light-gray/5" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-24 lg:px-10">
        <section className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-glass-green px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-light-gray">
              <span className="h-2 w-2 rounded-full bg-accent-green" />
              Contact
            </span>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold leading-tight text-pale-yellow md:text-5xl">
                Contact Me
              </h2>
              <p className="text-medium-gray text-lg leading-relaxed">
                Open to new opportunities and conversations around web
                development.
              </p>
            </div>

            <div className="space-y-4 rounded-3xl border border-(--border-glass) bg-glass-blue/70 px-6 py-6 text-light-gray backdrop-blur">
              <div className="flex items-center gap-3 text-sm md:text-base">
                <FiMail className="text-light-yellow text-xl" />
                <a
                  href="mailto:hi@mariannamirabile.dev"
                  className="hover:text-light-yellow transition"
                >
                  mazoolander@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-medium-gray">
                <LiaMountainSolid className="text-light-yellow text-xl" />
                <span>Based in the Swiss Riviera region of Switzerland</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-medium-gray">
                <FiCode className="text-light-yellow text-xl" />
                <span>Think · Build · Improve · Repeat</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-4xl border border-(--border-glass) bg-glass-blue/70 opacity-80 blur-xl" />
            <div className="relative rounded-[28px] border border-(--border-glass) bg-glass-gray px-6 py-8 shadow-xl backdrop-blur">
              <form
                action="https://formspree.io/f/mblqjpnr"
                method="post"
                className="space-y-6"
                onSubmit={(e) => {
                  const form = e.currentTarget;
                  setTimeout(() => {
                    form.reset();
                  }, 50);
                }}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold uppercase tracking-[0.3em] text-medium-gray"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-2 w-full rounded-2xl border border-(--border-glass) bg-primary-blue-dark/50 px-4 py-3 text-light-gray shadow-sm transition focus:border-light-yellow focus:outline-none focus:ring-2 focus:ring-light-yellow/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold uppercase tracking-[0.3em] text-medium-gray"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-2 w-full rounded-2xl border border-(--border-glass) bg-primary-blue-dark/50 px-4 py-3 text-light-gray shadow-sm transition focus:border-light-yellow focus:outline-none focus:ring-2 focus:ring-light-yellow/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold uppercase tracking-[0.3em] text-medium-gray"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="mt-2 w-full rounded-2xl border border-(--border-glass) bg-primary-blue-dark/50 px-4 py-3 text-light-gray shadow-sm transition focus:border-light-yellow focus:outline-none focus:ring-2 focus:ring-light-yellow/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold uppercase tracking-[0.3em] text-medium-gray"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-2 w-full rounded-2xl border border-(--border-glass) bg-primary-blue-dark/50 px-4 py-3 text-light-gray shadow-sm transition focus:border-light-yellow focus:outline-none focus:ring-2 focus:ring-light-yellow/40"
                  />
                </div>

                <button className="btn-primary w-full rounded-2xl py-3 text-base font-semibold shadow-lg hover:shadow-xl">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
