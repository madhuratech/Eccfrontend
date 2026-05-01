import React from "react";

function Header() {
  return (
    <header className="w-full bg-slate-900 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex flex-col text-sm font-medium sm:text-base">
          <span className="text-slate-100">
            Response within 24 hours{" "}
            <span className="mx-2 text-slate-400">•</span>
            {" "}Serving Tamil Nadu &amp; Pan-India
          </span>
        </div>

        <a
          href="tel:+91900366 3660"
          className="inline-flex text-white items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition "
        >
          Call: +91 900366 3660
        </a>
      </div>
    </header>
  );
}

export default Header;