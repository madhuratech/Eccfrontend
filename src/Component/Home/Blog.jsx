import React from "react";
import { ArrowRight } from "lucide-react";
import CoEmission from "../../assets/Blog/CoEmission.jpg"
import EnergyUnits from "../../assets/Blog/EnergyUnits.jpg"
import Renewable from "../../assets/Blog/Renewable.jpg"

const blogs = [
  {
    id: 1,
    category: "Solar Energy",
    title: "How Green Energy Helps Reduce CO₂ Emissions & Environmental Pollution",
    description:
      "Explore how adopting solar and renewable energy solutions significantly reduces carbon emissions, minimizes environmental pollution, and supports a cleaner, healthier planet.",
    image: CoEmission,
    date: "12 Mar 2026",
    readTime: "5 min read",
    imageAlt:"Solar Plant Installation Services 19"
  },
  {
    id: 2,
    category: "O&M Services",
    title: "Reducing Global Warming Through Smart Renewable Energy Solutions",
    description:
      "Learn how solar energy and sustainable practices play a key role in reducing global warming by lowering greenhouse gas emissions and promoting eco-friendly energy usage.",
    image: EnergyUnits,
    date: "08 Mar 2026",
    readTime: "4 min read",
    imageAlt:"Solar Plant Installation Services 20"
  },
  {
    id: 3,
    category: "Energy Storage",
    title: "Generating 56 Crore Units of Clean Energy Annually Since 2021",
    description:
      "Discover how large-scale solar implementations have contributed to generating over 56 crore units of clean energy per year, driving sustainability and reducing dependence on conventional power sources.",
    image: Renewable,
    date: "02 Mar 2026",
    readTime: "6 min read",
    imageAlt:"Solar Plant Installation Services 21"
  },
];

function BlogSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-24" id="blog">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-80px] top-16 h-64 w-64 rounded-full bg-emerald-950/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-60px] h-72 w-72 rounded-full bg-emerald-950/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Content */}
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Latest Insights
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Read Our Latest Blog & Energy Insights
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
              Stay updated with industry trends, renewable innovations, and
              practical insights on solar EPC, O&amp;M, and energy storage
              solutions.
            </p>
          </div>

          <div>
            {/* <a
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-500 ease-out hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-300"
            >
              View All Articles
              <ArrowRight
                size={18}
                className="transition-transform duration-500 ease-out group-hover:translate-x-1"
              />
            </a> */}
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:-translate-y-1.5 hover:border-emerald-500/30 hover:bg-white/[0.07] hover:shadow-[0_18px_50px_rgba(16,185,129,0.10)]"
            >
              {/* soft glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-400/5" />
              </div>

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.imageAlt}
                  className="h-64 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/25 to-transparent transition-opacity duration-500 group-hover:from-slate-950/65" />

                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-300 shadow-sm backdrop-blur-md transition-all duration-500 ease-out group-hover:border-emerald-400/30 group-hover:bg-emerald-500/10">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 sm:p-7">
                <div className="mb-4 flex items-center gap-3 text-sm text-slate-400 transition-colors duration-500 group-hover:text-slate-300">
                  <span>{blog.date}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-500 transition-colors duration-500 group-hover:bg-emerald-400/70"></span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="text-xl font-bold leading-snug text-white transition-colors duration-500 ease-out group-hover:text-emerald-300">
                  <a href="/blog">{blog.title}</a>
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300 transition-colors duration-500 ease-out group-hover:text-slate-200 sm:text-base">
                  {blog.description}
                </p>

                <div className="mt-6">
                  {/* <a
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-500 ease-out hover:text-emerald-300"
                  >
                    Read More
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-500 ease-out group-hover:translate-x-1.5"
                    />
                  </a> */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;