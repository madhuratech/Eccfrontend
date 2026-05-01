import React from "react";
import { ArrowRight, Phone, Zap } from "lucide-react";

function CallToActionCard() {
  return (
    <section className="bg-[#f8fafc] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-slate-950 px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute -top-16 -left-10 h-52 w-52 rounded-full bg-emerald-950/20 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-emerald-950/10 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />
          </div>

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12">
            {/* Left Content */}
            <div className="lg:col-span-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-sm">
                <Zap className="h-4 w-4" />
                Power Your Next Project
              </div>

              <h2 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Build a Smarter, More Efficient Energy Solution?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                From solar EPC and O&amp;M to energy storage solutions, we help
                businesses reduce costs, improve uptime, and achieve long-term
                performance with reliable execution.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contact/#ContactFormSection"
                  className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 "
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="tel:+919003663660"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </a>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-4">
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-300">
                  Why Work With Us
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <h3 className="text-lg font-semibold text-white">
                      Fast & Reliable Execution
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Efficient planning and structured delivery ensure your projects are completed on time without compromising quality.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <h3 className="text-lg font-semibold text-white">
                      Proven Quality Standards
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      We use high-performance components and follow strict quality  to deliver dependable and long-lasting solutions.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <h3 className="text-lg font-semibold text-white">
                      Optimized for Long-Term Savings
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Our solutions are designed to maximize efficiency, reduce operational costs, and deliver strong returns over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Border Glow */}
          <div className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-950/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default CallToActionCard;