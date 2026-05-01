import React, { useEffect, useState } from "react";
import heroImg1 from "../../assets/Hero/1-land.avif";
import heroImg2 from "../../assets/Hero/2-land.png";
import heroImg3 from "../../assets/Hero/3-land.jpg";

function HeroSection() {
  const images = [heroImg1, heroImg2, heroImg3];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white" id="home">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              currentSlide === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/70 to-slate-950/30" />
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="z-10">
          <div className="mb-6 flex flex-wrap gap-3 animate-fadeInUp">
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur">
              Fast Turnaround
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur">
              Tier-1 Quality Components
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur">
              Dedicated O&amp;M Support
            </span>
          </div>

          <h1 className="animate-fadeInUp text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Energy Storage Solutions That Deliver Real
            Savings
          </h1>

          <p
            className="mt-6 max-w-2xl animate-fadeInUp text-lg leading-8 text-slate-200"
            style={{ animationDelay: "0.15s" }}
          >
            We design, engineer, install, and manage advanced solar and energy systems for industrial and 
            commercial clients—built for safety, efficiency, and long-term performance.
            At Madhura Energy, we focus on maximizing output, reducing costs, and ensuring reliable power for a sustainable future.
          </p>

          <div
            className="mt-8 flex flex-wrap gap-4 animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="/contact/#ContactFormSection"
              className="rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-105 hover:bg-amber-300"
            >
              Get a Free Consultation
            </a>
            <a
              href="#projects"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:scale-105 hover:bg-white/20"
            >
              View Projects
            </a>
          </div>

          <div
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 animate-fadeInUp"
            style={{ animationDelay: "0.45s" }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
              <p className="text-2xl font-bold text-amber-300">15,000+</p>
              <p className="mt-1 text-sm text-slate-200">kW Installed Capacity</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
              <p className="text-2xl font-bold text-amber-300">60+</p>
              <p className="mt-1 text-sm text-slate-200">MW Delivered / Commissioned</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
              <p className="text-2xl font-bold text-amber-300">12+</p>
              <p className="mt-1 text-sm text-slate-200">Years of Execution Experience</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 hidden lg:block">
          <div className="relative mx-auto h-[520px] w-full max-w-xl overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
            <img
              src={images[currentSlide]}
              alt="Solar Plant Installation Services"
              className="h-full w-full object-cover transition-all duration-1000"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.2em] text-amber-300">
                  Clean Energy
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Reliable Solar Infrastructure for Modern Businesses
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  End-to-end execution from design to maintenance with
                  performance-focused engineering.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-amber-400 w-8"
                    : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          .animate-fadeInUp {
            animation: fadeInUp 0.9s ease forwards;
            opacity: 0;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}

export default HeroSection;