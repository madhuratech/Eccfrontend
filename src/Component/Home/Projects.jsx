import React, { useState } from "react";
import {
  ArrowRight,
  Building2,
  Factory,
  Landmark,
  BatteryCharging,
  Sun,
  CheckCircle2,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import ground from "../../assets/Projects/Ground.png";
import Industry from "../../assets/Projects/Industry.png";
import commercial from "../../assets/Projects/Solar.png";
import battery from "../../assets/Projects/Battery.png";
import publicinfrastructure from "../../assets/Projects/Public.png";

const projects = [
  {
    id: "01",
    title: "Rooftop Solar Project – Textile Mill, Tirupur",
    subtitle: "Textile Manufacturing",
    description:
      "Designed and executed a high-performance rooftop solar solution to reduce energy costs for continuous textile operations while ensuring long-term efficiency and reliability.",
    image: ground,
    icon: Sun,
    points: [
      "Rooftop EPC with net metering",
      "40% reduction in electricity bills",
      "Optimized for continuous operations",
      "500 kW installed capacity",
    ],
    imageAlt:"Solar Plant Installation Services 9"
  },
  {
    id: "02",
    title: "Rooftop Solar Project – Pharma Warehouse, Chennai",
    subtitle: "Pharmaceutical",
    description:
      "Implemented an advanced rooftop solar system with battery backup to support high energy demands of cold storage and ensure uninterrupted operations.",
    image: Industry,
    icon: Factory,
    points: [
      "High-efficiency panels with storage",
      "₹18L annual cost savings",
      "3.5-year payback period",
      "2 MW installed capacity",
    ],
    imageAlt:"Solar Plant Installation Services 10"
  },
  {
    id: "03",
    title: "Rooftop Solar Project – Smart City Initiative",
    subtitle: "Government",
    description:
      "Delivered a multi-location rooftop solar project across multiple buildings with a phased execution approach, ensuring timely completion and sustainability goals.",
    image: commercial,
    icon: Building2,
    points: [
      "Phased EPC across 12 buildings",
      "On-time project delivery",
      "Supports net-zero targets",
      "Scalable and efficient design",
    ],
    imageAlt:"Solar Plant Installation Services 11"
  },
  {
    id: "04",
    title: "Ground Mount Solar Project – NLC",
    subtitle: "Utility",
    description:
      "Executed a large-scale ground-mounted solar installation designed for high efficiency and optimized energy generation on challenging terrain.",
    image: battery,
    icon: BatteryCharging,
    points: [
      "Ground-mount EPC with tracker system",
      "15% higher yield compared to fixed-tilt systems",
      "Optimized for large-scale deployment",
      "800 kW installed capacity",
    ],
    imageAlt:"Solar Plant Installation Services 12"
  },
  {
    id: "05",
    title: "O&M Project – Auto Parts, Coimbatore",
    subtitle: "Automotive",
    description:
      "Revitalized an underperforming solar plant through expert O&M takeover and system refurbishment, restoring efficiency and output",
    image: publicinfrastructure,
    icon: Landmark,
    points: [
      "Third-party O&M management",
      "Complete system refurbishment",
      "22% performance recovery in 3 months",
      "2 MW plant capacity",
    ],
    imageAlt:"Solar Plant Installation Services 13"
  },
  {
    id: "06",
    title: "Rooftop Solar Project – Smart City Initiative",
    subtitle: "Government",
    description:
      "Delivered a multi-location rooftop solar project with phased execution across multiple buildings, supporting sustainability goals.",
    image: publicinfrastructure,
    icon: Landmark,
    points: [
      "Phased EPC across 12 buildings",
      "On-time project completion",
      "Supports net-zero targets",
      "Scalable rooftop deployment",
    ],
    imageAlt:"Solar Plant Installation Services 14"
  },
];

function ProjectCard({ project }) {
  const Icon = project.icon;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:rounded-[28px]">
      <div className="relative h-[220px] overflow-hidden sm:h-[280px]">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-transparent" />

        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-white backdrop-blur sm:left-6 sm:top-6 sm:px-4 sm:py-2 sm:text-xs">
          {project.id} / PROJECT
        </div>

        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-950/90 text-white sm:h-12 sm:w-12 sm:rounded-2xl">
              <Icon size={20} />
            </div>
          </div>

          <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-5 text-white/80 sm:text-base sm:leading-6">
            {project.subtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 p-4 sm:p-6">
        <div>
          <p className="text-sm leading-7 text-slate-300 sm:text-base">
            {project.description}
          </p>

          <button
            type="button"
            className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            <a href="/contact/#ContactFormSection" className="text-white no-underline">
              Connect with Us
            </a>
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid gap-3">
          {project.points.map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-emerald-400"
                />
                <p className="text-sm leading-6 text-slate-200">{point}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturedProjects() {
  const [active, setActive] = useState(projects[0]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-14 text-white sm:py-16 lg:py-24"
    >
      <div className="absolute inset-0">
        <div className="absolute left-[-80px] top-16 h-40 w-40 rounded-full bg-emerald-950/20 blur-3xl sm:h-64 sm:w-64" />
        <div className="absolute bottom-0 right-[-60px] h-44 w-44 rounded-full bg-emerald-950/20 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:22px_22px] opacity-20 sm:bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl sm:mb-10 lg:mb-14">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-400 sm:text-sm">
            Featured Projects
          </p>

          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-5xl">
            Showcasing Our Excellence in Solar and Energy Solutions
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7 lg:text-lg">
            Explore some of our successfully executed projects that reflect our commitment to quality, performance, and innovation. From commercial and industrial installations to large-scale solar solutions, each project is delivered with precision, safety, and long-term efficiency in mind.
          </p>
        </div>

        {/* Mobile / Tablet: show all projects one by one */}
        <div className="grid grid-cols-1 gap-6 lg:hidden">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Desktop: interactive layout */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:items-start lg:gap-8">
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCard project={active} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-3">
              {projects.map((project, index) => {
                const Icon = project.icon;
                const isActive = active.id === project.id;

                return (
                  <motion.button
                    key={project.id}
                    type="button"
                    onClick={() => setActive(project)}
                    onFocus={() => setActive(project)}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className={`w-full rounded-[22px] border p-5 text-left transition-all duration-300 backdrop-blur-sm ${
                      isActive
                        ? "border-emerald-700/60 bg-emerald-950/10"
                        : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                          isActive
                            ? "bg-emerald-950 text-white"
                            : "bg-white/10 text-slate-200"
                        }`}
                      >
                        <Icon size={22} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span className="text-xs font-semibold tracking-[0.18em] text-slate-400">
                            {project.id}
                          </span>

                          <ArrowRight
                            size={18}
                            className={`shrink-0 transition-transform duration-300 ${
                              isActive
                                ? "translate-x-0 text-emerald-400"
                                : "-translate-x-1 text-slate-500"
                            }`}
                          />
                        </div>

                        <h3 className="text-lg font-semibold text-white">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;