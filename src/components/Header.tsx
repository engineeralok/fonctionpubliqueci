"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [presidenceMenuOpen, setPresidenceMenuOpen] = useState(false);
  const [gouvernementMenuOpen, setGouvernementMenuOpen] = useState(false);

  return (
    <header className="fr-header" role="banner">
      {/* Logo Row - 95% width, logo 370px */}
      <div className="bg-white py-4">
        <div className="mx-auto" style={{ width: '95%' }}>
          <Link href="/">
            <Image
              alt="Logo"
              width={185}
              height={60}
              className="object-contain"
              src="/images/logo.png"
              priority
            />
          </Link>
        </div>
      </div>

      {/* Navigation Bar Row - 95% width, orange background */}
      <nav 
        className="bg-[#f78a00]" 
        id="header-navigation-desktop" 
        role="navigation" 
        aria-label="Menu principal"
      >
        <div className="mx-auto py-3" style={{ width: '95%' }}>
          <div className="flex items-center justify-between text-white">
            {/* Left: Menu Title */}
            <div className="text-[11px] font-semibold uppercase">
              Menu
            </div>

            {/* Right: Nav Elements + Search + Language */}
            <div className="flex items-center gap-8">
              {/* Navigation Elements */}
              <div className="flex items-center gap-6 text-[11px] font-semibold">
                {/* Présidence Dropdown */}
                <button
                  id="desktop-button-Présidence"
                  className="flex items-center gap-2 text-white hover:text-white/80 transition-all"
                  aria-expanded={presidenceMenuOpen}
                  aria-haspopup="true"
                  aria-controls="desktop-menu-Présidence"
                  aria-label="Présidence menu"
                  type="button"
                  onClick={() => setPresidenceMenuOpen(!presidenceMenuOpen)}
                >
                  Présidence
                  <svg
                    className={`h-3 w-3 transition-transform duration-200 ${
                      presidenceMenuOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Gouvernement Dropdown */}
                <button
                  id="desktop-button-Gouvernement"
                  className="flex items-center gap-2 text-white hover:text-white/80 transition-all"
                  aria-expanded={gouvernementMenuOpen}
                  aria-haspopup="true"
                  aria-controls="desktop-menu-Gouvernement"
                  aria-label="Gouvernement menu"
                  type="button"
                  onClick={() => setGouvernementMenuOpen(!gouvernementMenuOpen)}
                >
                  Gouvernement
                  <svg
                    className={`h-3 w-3 transition-transform duration-200 ${
                      gouvernementMenuOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <span className="text-white/50 cursor-not-allowed">
                  Actualités
                </span>
                <span className="text-white/50 cursor-not-allowed">
                  Nos réalisations
                </span>
                <Link
                  href="/contact"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  Écrire au Président
                </Link>
              </div>

              {/* Search Icon */}
              <button
                className="p-2 hover:bg-white/10 rounded transition-colors"
                aria-label="Rechercher"
                title="Rechercher"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Language Switcher: FR EN */}
              <div className="flex items-center gap-2 border-l border-white/50 pl-4 text-[11px] font-semibold uppercase">
                <button className="px-2 text-white hover:bg-white/10 rounded transition-colors" aria-label="Français">
                  FR
                </button>
                <button className="px-2 text-white hover:bg-white/10 rounded transition-colors" aria-label="English">
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
