import React, { useState } from "react";
import logo from "../../assets/navbar/Logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/#home" },
    { name: "About", path: "/#about" },
    { name: "Services", path: "/#services" },
    { name: "Projects", path: "/#projects" },
    { name: "Blog", path: "/#blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Solar Energy Logo"
            className="h-12 w-auto object-contain sm:h-14 lg:h-16"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-base font-medium text-slate-600 transition hover:text-emerald-950"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* CTA */}
          <Link
            to="/contact"
            className="hidden sm:inline-block rounded-lg bg-emerald-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-900"
          >
            Get Quote
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-4 bg-white border-t">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-emerald-950"
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile CTA */}
          <Link
            to="/#consultation"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-lg bg-emerald-950 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-emerald-900"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;