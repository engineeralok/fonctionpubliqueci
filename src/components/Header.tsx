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
        className="flex items-center gap-0.5 sm:gap-1 text-white hover:text-white px-1 sm:px-2 md:px-3 rounded transition-all h-full"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={`desktop-menu-${menu.id}`}
        aria-label={`${menu.label} menu`}
        type="button"
        onClick={() => onToggle()}
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
                      className="px-4 py-2 flex items-center justify-between header-action-btn text-white whitespace-nowrap cursor-pointer"
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
                    className="px-4 py-2 header-action-btn text-white whitespace-nowrap"
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpenId, setMobileDropdownOpenId] = useState<string | null>(null);

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

  type MobileNavItem =
    | {
        id: string;
        label: string;
        type: "dropdown";
        items: DropdownItem[];
      }
    | {
        id: string;
        label: string;
        type: "link";
        href: string;
        highlight?: boolean;
        disabled?: boolean;
      };

  const mobileNavItems: MobileNavItem[] = [
    { id: "mobile-le-ministere", label: "Le Ministère", type: "dropdown", items: dropdownMenus[0].items },
    { id: "mobile-nos-services", label: "Nos services", type: "dropdown", items: dropdownMenus[1].items },
    { id: "mobile-recrutement", label: "Recrutement", type: "dropdown", items: dropdownMenus[2].items },
    { id: "mobile-sigfae", label: "SIGFAE", type: "link", href: "#" },
    { id: "mobile-rubrique", label: "Rubrique ressources", type: "link", href: "#" },
    { id: "mobile-espace", label: "Espace fonctionnaire", type: "link", href: "#" },
    { id: "mobile-ecrire", label: "Écrire au Ministre", type: "link", href: "/contact" },
  ];

  const toggleMobileDropdown = (id: string) => {
    setMobileDropdownOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <header className="fr-header relative" role="banner">
      {/* Mobile & Tablet Header - Hidden on desktop */}
      <div className="block lg:hidden bg-white border-b border-gray-200">
        <div className="mx-auto px-4 py-2 flex items-center" style={{ width: "100%", position: "relative" }}>
          <Link href="/" className="block">
            <Image
              alt="Mobile Logo 1"
              src="/images/mobilelogo1.png"
              width={260}
              height={95}
              className="object-contain"
              style={{ width: "260px", height: "auto" }}
            />
          </Link>
          <button
            className="absolute top-2 right-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF914D] bg-white"
            aria-label="Ouvrir le menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="block w-5 h-0.5 bg-black mb-1 rounded"></span>
            <span className="block w-5 h-0.5 bg-black mb-1 rounded"></span>
            <span className="block w-5 h-0.5 bg-black rounded"></span>
          </button>
        </div>
        <div className="h-px w-full bg-gray-300" />
        <div className="mx-auto px-4 py-2 flex items-center" style={{ width: "100%" }}>
          <Link href="/" className="block">
            <Image
              alt="Mobile Logo 2"
              src="/images/mobilelogo2.png"
              width={170}
              height={47}
              className="object-contain w-[170px] h-auto"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="block lg:hidden fixed inset-0 z-50 bg-[#f78a00] text-white">
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/30">
            <div className="flex items-center gap-4">
              <button
                aria-label="Rechercher"
                className="p-2 rounded-full header-action-btn"
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
              <span className="h-6 w-px bg-white/40" aria-hidden="true" />
              <div className="flex items-center gap-2 text-[11px] uppercase font-semibold">
                <button className="px-2 py-1 rounded header-action-btn">
                  FR
                </button>
                <button className="px-2 py-1 rounded header-action-btn">
                  EN
                </button>
              </div>
            </div>
            <button
              aria-label="Fermer le menu"
              className="p-2 rounded-full header-action-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="border-t border-white/30 mx-4" />
          <div className="px-4 py-6 space-y-3 text-sm font-medium">
            {mobileNavItems.map((item, index) => (
              <div key={item.id}>
                {item.type === "dropdown" ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between rounded-md px-4 py-3 text-left uppercase text-white header-action-btn"
                      onClick={() => toggleMobileDropdown(item.id)}
                    >
                      <span>{item.label}</span>
                      <ArrowIcon
                        className={`h-4 w-4 transition-transform ${
                          mobileDropdownOpenId === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileDropdownOpenId === item.id && (
                      <div className="mt-2 ml-6 border-l border-white/30 pl-4 space-y-2 text-[12px] uppercase text-white/90">
                        {item.items.map((subItem) =>
                          subItem.hasArrow ? (
                            <div
                              key={subItem.label}
                              className="flex items-center justify-between py-1 text-white/90"
                            >
                              <span>{subItem.label}</span>
                              <ArrowIcon className="h-3 w-3" />
                            </div>
                          ) : (
                            <Link
                              key={subItem.label}
                              href={subItem.href || "#"}
                              className="block py-1 px-2 rounded header-action-btn text-white/90 hover:text-white"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {item.disabled ? (
                      <span className="block w-full rounded-md px-4 py-3 text-left uppercase text-white/50">
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block w-full rounded-md px-4 py-3 text-left uppercase ${
                          item.highlight ? "bg-[#cf7025]" : "header-action-btn"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                    {item.id === "mobile-ecrire" && <div className="h-px bg-white/30 mt-3" />}
                  </>
                )}
                {index === mobileNavItems.length - 1 && (
                  <div className="h-px bg-white/30 mt-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Header - Visible on desktop only */}
      <div className="desktop-header hidden lg:block w-full">
        {/* Logo Row - 90% width, logo 650px */}
        <div className="bg-white py-2 px-2 lg:px-2">
          <div className="w-full max-w-[1250px]">
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
          className="bg-[#FF914D] flex items-center h-[44px] overflow-hidden px-2 lg:px-2" 
          id="header-navigation-desktop" 
          role="navigation" 
          aria-label="Menu principal"
        >
          <div className="w-full max-w-[1250px]">
            <div className="flex items-stretch justify-between text-white h-full">
              {/* Left: Menu Title */}
              <div className="flex items-center text-[11px] font-semibold uppercase flex-shrink-0 pr-2 sm:pr-4">
                Menu
              </div>

              {/* Right: Nav Elements + Search + Language */}
              <div className="flex items-stretch gap-0.5 sm:gap-1 md:gap-2 lg:gap-3">
                {/* Navigation Elements */}
                <div className="flex items-stretch gap-0.5 sm:gap-1 md:gap-2 lg:gap-3 xl:gap-4 text-[11px] font-semibold h-full">
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
                  className="flex items-center p-2 header-action-btn rounded transition-colors h-full"
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
                <div className="flex items-stretch gap-0.5 sm:gap-1 border-l border-white/50 pl-1 sm:pl-2 md:pl-3 text-[11px] font-semibold uppercase h-full">
                  <button className="flex items-center px-1 sm:px-2 header-action-btn rounded transition-colors h-full" aria-label="Français">
                    FR
                  </button>
                  <button className="flex items-center px-1 sm:px-2 header-action-btn rounded transition-colors h-full" aria-label="English">
                    EN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

    </header>
  );
}
