"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
} from "@floating-ui/react";

interface DropdownItem {
  label: string;
  href?: string;
  hasArrow?: boolean;
}

interface DropdownMenu {
  id: string;
  label: string;
  items: DropdownItem[];
  minWidth?: string;
}

const ArrowIcon = ({ className = "h-3 w-3" }: { className?: string }) => (
  <svg
    className={className}
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
);

function DropdownButton({ 
  menu, 
  isOpen, 
  onToggle,
  onOpenChange 
}: { 
  menu: DropdownMenu; 
  isOpen: boolean; 
  onToggle: () => void;
  onOpenChange: (open: boolean) => void;
}) {
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: onOpenChange,
    middleware: [offset(5), flip(), shift()],
    whileElementsMounted: autoUpdate,
    placement: "bottom-start",
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  return (
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        id={`desktop-button-${menu.id}`}
        className="flex items-center gap-1 sm:gap-2 text-white hover:text-white px-1 sm:px-2 md:px-3 rounded transition-all h-full"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={`desktop-menu-${menu.id}`}
        aria-label={`${menu.label} menu`}
        type="button"
      >
        {menu.label}
        <ArrowIcon
          className={`h-3 w-3 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div
          ref={refs.setFloating}
          {...getFloatingProps()}
          id={`desktop-menu-${menu.id}`}
          className="bg-[#FF914D] shadow-lg z-50"
          style={{
            ...floatingStyles,
            minWidth: menu.minWidth || "200px",
          }}
        >
          <div className="py-2">
            <div className="flex flex-col gap-1">
              {menu.items.map((item, index) => {
                if (item.hasArrow) {
                  return (
                    <div
                      key={index}
                      className="px-4 py-2 flex items-center justify-between hover:bg-[#E67A3D] text-white whitespace-nowrap cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <ArrowIcon />
                    </div>
                  );
                }
                return (
                  <Link
                    key={index}
                    href={item.href || "#"}
                    className="px-4 py-2 hover:bg-[#E67A3D] text-white whitespace-nowrap"
                    onClick={() => onOpenChange(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Header() {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const dropdownMenus: DropdownMenu[] = [
    {
      id: "le-ministère",
      label: "Le Ministère",
      minWidth: "350px",
      items: [
        { label: "Le Ministre", href: "#" },
        { label: "Organisation du Ministère", href: "#" },
        { label: "Direction Générale de la Fonction Publique", href: "#" },
        { label: "Direction Générale de la Transformation de Service Publique", href: "#" },
        { label: "Organigramme du MEMFPMA", href: "#" },
      ],
    },
    {
      id: "nos-services",
      label: "Nos services",
      minWidth: "350px",
      items: [
        { label: "Demande d'acte de non engagement", href: "#" },
        { label: "Actes signés", href: "#" },
        { label: "Retraite / Radiation", href: "#" },
      ],
    },
    {
      id: "recrutement",
      label: "Recrutement",
      minWidth: "200px",
      items: [
        { label: "Concours", hasArrow: true },
        { label: "Affectation", hasArrow: true },
      ],
    },
  ];

  const handleMenuToggle = (menuId: string) => {
    setOpenMenuId(openMenuId === menuId ? null : menuId);
  };

  return (
    <header className="fr-header relative" role="banner">
      {/* Logo Row - 90% width, logo 650px */}
      <div className="bg-white py-4">
        <div className="mx-auto" style={{ width: '90%' }}>
          <Link href="/">
            <Image
              alt="Logo"
              width={650}
              height={212}
              className="object-contain"
              style={{ width: '650px', height: 'auto' }}
              src="/images/logo.png"
              priority
            />
          </Link>
        </div>
      </div>

      {/* Navigation Bar Row - 90% width, orange background */}
      <nav 
        className="bg-[#FF914D] flex items-center h-[44px] overflow-hidden" 
        id="header-navigation-desktop" 
        role="navigation" 
        aria-label="Menu principal"
      >
        <div className="mx-auto w-full" style={{ width: '90%' }}>
          <div className="flex items-stretch justify-between text-white h-full">
            {/* Left: Menu Title */}
            <div className="flex items-center text-[11px] font-semibold uppercase flex-shrink-0 pr-2 sm:pr-4">
              Menu
            </div>

            {/* Right: Nav Elements + Search + Language */}
            <div className="flex items-stretch gap-2 sm:gap-4 md:gap-6 lg:gap-8">
              {/* Navigation Elements */}
              <div className="flex items-stretch gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 text-[11px] font-semibold h-full">
                {/* Dropdown Buttons */}
                {dropdownMenus.map((menu) => {
                  const isOpen = openMenuId === menu.id;
                  return (
                    <DropdownButton
                      key={menu.id}
                      menu={menu}
                      isOpen={isOpen}
                      onToggle={() => handleMenuToggle(menu.id)}
                      onOpenChange={(open) => {
                        if (open) {
                          handleMenuToggle(menu.id);
                        } else {
                          setOpenMenuId(null);
                        }
                      }}
                    />
                  );
                })}

                {/* SIGFAE - No arrow */}
                <Link
                  href="#"
                  className="nav-link flex items-center text-white hover:text-white px-1 sm:px-2 md:px-3 rounded transition-colors h-full"
                >
                  SIGFAE
                </Link>

                {/* Rubrique ressources - No arrow */}
                <Link
                  href="#"
                  className="nav-link flex items-center text-white hover:text-white px-1 sm:px-2 md:px-3 rounded transition-colors h-full whitespace-nowrap"
                >
                  Rubrique ressources
                </Link>

                {/* Espace fonctionnaire - No arrow */}
                <Link
                  href="#"
                  className="nav-link flex items-center text-white hover:text-white px-1 sm:px-2 md:px-3 rounded transition-colors h-full whitespace-nowrap"
                >
                  Espace fonctionnaire
                </Link>

                {/* Écrire au Ministre - No arrow */}
                <Link
                  href="/contact"
                  className="nav-link flex items-center text-white hover:text-white px-1 sm:px-2 md:px-3 rounded transition-colors h-full whitespace-nowrap"
                >
                  Écrire au Ministre
                </Link>
              </div>

              {/* Search Icon */}
              <button
                className="flex items-center p-2 hover:bg-white/10 rounded transition-colors h-full"
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
              <div className="flex items-stretch gap-1 sm:gap-2 border-l border-white/50 pl-2 sm:pl-3 md:pl-4 text-[11px] font-semibold uppercase h-full">
                <button className="flex items-center px-1 sm:px-2 text-white hover:bg-white/10 rounded transition-colors h-full" aria-label="Français">
                  FR
                </button>
                <button className="flex items-center px-1 sm:px-2 text-white hover:bg-white/10 rounded transition-colors h-full" aria-label="English">
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
