import React from "react";
import about from "../../assets/Hero/about.png"
import { Link } from "react-router-dom";

function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-[#f5f6f8] py-16 md:py-24" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 max-w-3xl lg:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
            About Our Company
          </p>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Smart Energy Solutions Built for Performance and Long-Term Value
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Madhura Energy delivers end-to-end solar and energy management solutions designed to
            improve efficiency, reduce operational costs, and support sustainable growth for
            industrial and commercial clients. Our focus is on providing reliable, high-performance
            systems that ensure long-term energy savings and operational excellence.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Left Image */}
          <div className="lg:col-span-5">
            <div className="group relative h-full overflow-hidden rounded-[32px]">
              <img
                src={about}
                alt="Solar Plant Maintenance Services"
                className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[420px] lg:h-full lg:min-h-[640px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-900/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="max-w-xs rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/80">
                    Trusted Execution
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    12+ Years of Renewable Energy Experience
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            {/* Top Cards */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group flex h-full flex-col rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-lg font-bold text-emerald-700">
                  01
                </div>

                <h3 className="text-2xl font-semibold text-slate-900">
                  EPC Expertise
                </h3>

                <p className="mt-4 flex-1 text-base leading-7 text-slate-600">
                  We design and execute high-quality solar EPC projects with a strong focus on
                  precision engineering, safety standards, and long-term performance to deliver
                  maximum energy output.
                </p>

                <Link
                  to="/solar-epc-services"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
                >
                  Read More
                  <span className="text-base">→</span>
                </Link>
              </div>

              <div className="group flex h-full flex-col rounded-[32px] bg-[#e9eef8] p-8 shadow-sm ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-bold text-slate-900 shadow-sm">
                  02
                </div>

                <h3 className="text-2xl font-semibold text-slate-900">
                  O&amp;M Services
                </h3>

                <p className="mt-4 flex-1 text-base leading-7 text-slate-600">
                  Our operations and maintenance services ensure continuous monitoring,
                  reduced downtime, and optimized performance to keep your solar assets
                  running efficiently at all times.
                </p>

                <Link
                  to="/solar-operation-and-maintenance-services"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
                >
                  Read More
                  <span className="text-base">→</span>
                </Link>
              </div>
            </div>

            {/* Bottom Wide Card */}
            <div className="relative flex-1 overflow-hidden rounded-[32px] bg-slate-900 p-8 text-white shadow-sm transition duration-300 hover:shadow-xl sm:p-10">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-950/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-emerald-950/10 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-white">
                  03
                </div>

                <h3 className="text-2xl font-semibold sm:text-3xl">
                  Energy Storage Solutions
                </h3>

                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                  We provide smart energy optimization and management solutions that help businesses
                  improve efficiency, reduce energy costs, and achieve better control
                  over their power usage.
                </p>
                <Link
                  to="/solar-battery-storage-services"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-emerald-600  px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
                >
                  Read More
                  <span className="text-base">→</span>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;