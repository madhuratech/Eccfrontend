import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/navbar/Logo.png";

function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-slate-950 text-white"
      id="contact"
    >
      {/* Background accents */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-emerald-950 blur-[120px]" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-emerald-950 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="flex flex-col">
            <div className="mb-6">
              <Link to="/" className="inline-block">
                <img
                  src={logo}
                  alt="Solar Energy Logo"
                  className="h-14 w-auto object-contain"
                />
              </Link>

              <p className="mt-5 max-w-sm text-base leading-8 text-slate-300">
                We design, engineer, install, and maintain renewable energy
                systems for industrial, commercial, and public-sector clients
                across India.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61572151364594"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-emerald-400 hover:text-emerald-400"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/madhura_energy/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-emerald-400 hover:text-emerald-400"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/company/115153918/admin/dashboard/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-emerald-400 hover:text-emerald-400"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-6">
            <h4 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-4 text-base text-slate-300">
              <li>
                <Link to="/" className="transition hover:text-emerald-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-emerald-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="transition hover:text-emerald-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="transition hover:text-emerald-400"
                >
                  Projects
                </Link>
              </li>
              {/* <li>
                <Link to="/blog" className="transition hover:text-emerald-400">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link
                  to="/contact"
                  className="transition hover:text-emerald-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:pl-3">
            <h4 className="mb-6 text-xl font-semibold text-white">Services</h4>
            <ul className="space-y-4 text-base text-slate-300">
              <li>
                <Link
                  to="solar-epc-services"
                  className="transition hover:text-emerald-400"
                >
                  Solar EPC Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="solar-plant-management"
                  className="transition hover:text-emerald-400"
                >
                  Solar Plant Management
                </Link>
              </li>
              <li>
                <Link
                  to="solar-operation-and-maintenance-services"
                  className="transition hover:text-emerald-400"
                >
                  Operation &amp; Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="solar-battery-storage-services"
                  className="transition hover:text-emerald-400"
                >
                  Battery Energy storage system
                </Link>
              </li>

              <li>
                <Link
                  to="solar-pump-services"
                  className="transition hover:text-emerald-400">
                  Solar Pump
                </Link>
              </li>
              <li>
                <Link
                  to="solar-panel-cleaning-robot-services"
                  className="transition hover:text-emerald-400">
                  Solar Panel Cleaning robot
                </Link>
              </li>
              <li>
                <Link
                  to="third-party-solar-power-purchase-services"
                  className="transition hover:text-emerald-400">
                  Third Party Power Purchase
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:pl-2">
            <h4 className="mb-6 text-xl font-semibold text-white">Contact</h4>
            <div className="space-y-5 text-base text-slate-300">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-400" />
                <p className="leading-7">
                  2/315, Savaspuram, Aruppukottai, Virudhunagar (Dist) - 626101.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 flex-shrink-0 text-emerald-400" />
                <a
                  href="tel:+919003663660"
                  className="transition hover:text-emerald-400"
                >
                  +91 9003663660
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 flex-shrink-0 text-emerald-400" />
                <a
                  href="mailto:info@yourcompany.com"
                  className="transition hover:text-emerald-400"
                >
                  info@madhuraecc.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-base text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SolarEnergy. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-5">
            <Link to="/privacy-policy" className="transition hover:text-emerald-400">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="transition hover:text-emerald-400">
              Terms &amp; Conditions
            </Link>
            {/* <Link to="/sitemap" className="transition hover:text-emerald-400">
              Sitemap
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;