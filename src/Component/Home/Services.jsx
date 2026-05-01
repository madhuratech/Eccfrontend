import React from "react";
import { Link } from "react-router-dom";
import {
  Sun,
  BatteryCharging,
  Wrench,
  ArrowUpRight,
  Eclipse,
  Syringe,
  Bot,
  Barcode,

} from "lucide-react";
// import AnimatedEnergyBackground from "./Flowanimate";

const services = [
  {
    id: "01",
    title: "Solar EPC Solutions",
    path: "/services/solar-epc-solutions",
    slug:"solar-epc-services",
    description:
      "End-to-end engineering, procurement, and construction services for commercial, industrial, and utility-scale solar projects with a focus on quality, safety, and performance.",
    icon: Eclipse,
  },
  {
    id: "02",
    title: "Solar Plant Management",
    path: "/services/solar-plant-management",
    slug:"solar-plant-management",
    description:
      "Advanced monitoring, performance optimization, and management services to ensure maximum energy generation and long-term system efficiency.",
    icon: Sun,
  },
  {
    id: "03",
    title: "Operation & Maintenance",
    path: "/services/operation-maintenance",
    slug:"solar-operation-and-maintenance-services",
    description:
      "Comprehensive preventive and corrective maintenance services to reduce downtime, improve safety, and extend the lifespan of your solar assets.",
    icon: Wrench,
  },
  {
    id: "04",
    title: "Battery Energy Storage",
    path: "/services/battery-storage",
    slug:"solar-battery-storage-services",
    description:
      "Smart energy storage solutions that help manage peak demand, store excess power, and ensure uninterrupted energy supply.",
    icon: BatteryCharging,
  },
  {
    id: "05",
    title: "Solar Pump",
    path: "/services/solar-pump",
    slug:"solar-pump-services", 
    description:
      "Efficient solar-powered pumping systems designed for agriculture and industrial applications, ensuring reliable and cost-effective water management.",
    icon: Syringe,
  },
  {
    id: "06",
    title: "Solar Plant Cleaning Robots",
    path: "/services/solar-plant-cleaning-robots",
    slug:"solar-panel-cleaning-robot-services",
    description:
      "Automated cleaning solutions that improve panel efficiency, reduce manual effort, and maintain optimal energy generation.",
    icon: Bot,
  },
  {
    id: "07",
    title: "Third party power purchase",
    path: "/services/third-party-power-purchase",
    slug:"third-party-solar-power-purchase-services",
    description:
      "Flexible power purchase solutions that allow businesses to use solar energy without upfront investment, reducing energy costs and risks.",
    icon: Barcode,
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <Link
      to={`/${service.slug}`}
      className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-950/30 hover:bg-white/[0.07] hover:shadow-[0_25px_70px_-30px_rgba(16,185,129,0.25)] sm:p-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/10 via-white/[0.02] to-emerald-950/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-950/20 bg-emerald-950/10 text-emerald-300 transition-all duration-300 group-hover:scale-105 group-hover:border-emerald-300/40 group-hover:bg-emerald-950/15">
          <Icon size={26} />
        </div>

        <span className="text-sm font-bold tracking-[0.2em] text-white/25 transition-colors duration-300 group-hover:text-emerald-300/80">
          {service.id}
        </span>
      </div>

      <div className="relative z-10 mt-8 flex-1">
        <h3 className="text-2xl font-semibold leading-snug text-white">
          {service.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          {service.description}
        </p>
      </div>

      <div className="relative z-10 mt-8 flex items-center justify-between border-t border-white/10 pt-5">
        <span className="text-sm font-semibold text-slate-200 transition-colors duration-300 group-hover:text-emerald-300">
          Learn More
        </span>

        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-slate-200 transition-all duration-300 group-hover:border-emerald-300/50 group-hover:bg-emerald-950/10 group-hover:text-emerald-300">
          <ArrowUpRight size={18} />
        </div>
      </div>
    </Link>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-950 py-12 text-white md:py-20"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_30%)]" />
      </div>

      {/* <AnimatedEnergyBackground /> */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
            Our Services
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Complete Energy Solutions with a Clean Modern Approach
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            We deliver reliable renewable and electrical services designed for
            performance, efficiency, and long-term value.
          </p>
        </div>


        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <React.Fragment key={service.id}>

              {/* Service Card */}
              <ServiceCard service={service} />

              {/* Insert CTA after 7th item (index 6) */}
              {index === 6 && (
                <div className="lg:col-span-2 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 transition duration-300 hover:scale-[1.01]">

                  {/* Glow Effect */}
                  <div className="absolute -top-10 -right-10 h-40 w-40 bg-emerald-500/20 blur-3xl rounded-full" />
                  <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-blue-500/20 blur-3xl rounded-full" />

                  {/* LEFT CONTENT */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug">
                      Ready to Switch to Solar?
                    </h3>

                    <p className="text-slate-300 text-sm md:text-base leading-6 max-w-md">
                      Get a customized solar solution designed for your home or business.
                      Reduce electricity costs and move toward sustainable energy today.
                    </p>

                    {/* CTA BUTTON */}
                    <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                      <button className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/20" >
                        <a href="/contact/#ContactFormSection" className="text-white no-underline">
                          Get Free Consultation
                        </a>
                      </button>

                      <button className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition">
                       <a href="#projects"> View Projects</a> 
                      </button>
                    </div>
                  </div>

                  {/* RIGHT VISUAL */}
                  <div className="lg:col-span-2 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 transition duration-300 hover:scale-[1.01]">

                    {/* Glow Effects */}
                    <div className="absolute -top-10 -right-10 h-40 w-40 bg-emerald-500/20 blur-3xl rounded-full" />
                    <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-blue-500/20 blur-3xl rounded-full" />

                    {/* LEFT CONTENT */}


                    {/* RIGHT IMAGE */}
                    <div className="flex-1 w-full h-48 md:h-56 relative rounded-xl overflow-hidden">

                      <img
                        src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
                        alt="Solar Installation Maintenance Services"
                        className="w-full h-full object-cover"
                      />

                      {/* Dark overlay for readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Glow border effect */}
                      <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" />

                    </div>

                  </div>

                </div>
              )}

            </React.Fragment>
          ))}
        </div>


      </div>
    </section>
  );
}

export default ServicesSection;