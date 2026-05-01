import React from "react";
import LT from "../../assets/Logos/L&T.png";
import CGE from "../../assets/Logos/continuum.png";
import Harsha from "../../assets/Logos/harsha-abakus_logo.png";
import NHPC from "../../assets/Logos/nhpc.png";
import RRECL from "../../assets/Logos/rrecl.png";
import Everrenew from "../../assets/Logos/Everrenew.png";
import Tirupati from "../../assets/Logos/tirupati.png";
import TSECL from "../../assets/Logos/TSECL.png";
import Abakus from "../../assets/Logos/harsha-abakus_logo.png";
import NLC from "../../assets/Logos/NLC.webp";


const partners = [
  {
    id: 1,
    name: "L&T",
    logo: LT,
    imageAlt:"Solar Plant Setup Maintenance"
  },
  {
    id: 2,
    name: "Continuum Green Energy",
    logo: CGE,
    imageAlt:"Solar Plant Installation Work"
  },
  {
    id: 3,
    name: "Harsha Engineers",
    logo: Harsha,
    imageAlt:"Solar Plant Installation Services 1"
  },
  {
    id: 4,
    name: "NHPC Limited",
    logo: NHPC,
    imageAlt:"Solar Plant Installation Services 2"
  },
  {
    id: 5,
    name: "RRECL",
    logo: RRECL,
    imageAlt:"Solar Plant Installation Services 3"
  },
  {
    id: 6,
    name: "Everrenew",
    logo: Everrenew,
    imageAlt:"Solar Plant Installation Services 4" 
  },
  {
    id: 7,
    name: "Tirupati Energy",
    logo: Tirupati,
    imageAlt:"Solar Plant Installation Services 5"
  },
  {
    id: 8,
    name: "TSECL",
    logo: TSECL,
    imageAlt:"Solar Plant Installation Services 6"
  },
  {
    id: 9,
    name: "Harsha Abakus",
    logo: Abakus,
    imageAlt:"Solar Plant Installation Services 7"
  },
  {
    id: 10,
    name: "NLC India Limited",
    logo: NLC,
    imageAlt:"Solar Plant Installation Services 8"
  }


];

function ChannelPartners() {
  const staticPartners = partners.slice(0, 5);
  const carouselPartners = partners.slice(5);
  const duplicatedCarousel = [...carouselPartners, ...carouselPartners];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
      <div className="absolute inset-0">
        <div className="absolute left-[-100px] top-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute right-[-120px] bottom-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-emerald-950/30 bg-emerald-950/10 px-4 py-1 text-sm font-medium text-emerald-300">
            Our Channel Partners
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Empowering Growth through Strong and Trusted Partnerships
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
          At Madhura Energy, we collaborate with reliable and experienced channel 
          partners to deliver high-quality, efficient, and future-ready solar energy solutions. 
          Our partnerships enable us to combine expertise, technology, and innovation to ensure 
          seamless project execution and long-term performance. 
          </p>
        </div>

        {/* First Row - Static */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {staticPartners.map((partner, index) => (
            <div
              key={partner.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-950/40 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]"
              style={{
                animation: `fadeUp 0.7s ease forwards`,
                animationDelay: `${index * 0.08}s`,
                opacity: 0,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/0 via-transparent to-emerald-950/0 opacity-0 transition duration-500 group-hover:from-emerald-950/10 group-hover:to-emerald-950/10 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                <div className="flex h-24 w-full items-center justify-center rounded-2xl bg-white/95 p-4 shadow-inner transition duration-500 group-hover:scale-105">
                  <img
                    src={partner.logo}
                    alt={partner.imageAlt}
                    className="max-h-14 w-auto object-contain transition duration-500"
                  />
                </div>

                <h3 className="mt-4 text-sm font-semibold text-white sm:text-base">
                  {partner.name}
                </h3>
              </div>

              <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-emerald-950/10 blur-2xl transition duration-500 group-hover:bg-emerald-950/20" />
            </div>
          ))}
        </div>

        {/* Second Row - Carousel */}
        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-slate-950 to-transparent" />

          <div className="flex w-max animate-marquee gap-4">
            {duplicatedCarousel.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="relative w-[220px] flex-shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                  <div className="flex h-24 w-full items-center justify-center rounded-2xl bg-white/95 p-4 shadow-inner">
                    <img
                      src={partner.logo}
                      alt="Solar Plant Setup Maintenance"
                      className="max-h-14 w-auto object-contain"
                    />
                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-white sm:text-base">
                    {partner.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default ChannelPartners;