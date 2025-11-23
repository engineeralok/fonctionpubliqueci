"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useFloating, autoUpdate, offset, flip, shift, useClick, useDismiss, useInteractions, useRole, FloatingPortal } from "@floating-ui/react";

interface NavItem {
  label: string;
  href: string;
}

interface NavDropdown {
  label: string;
  items: NavItem[];
}

type NavLink = NavItem | NavDropdown;

const navigationItems: NavLink[] = [
  {
    label: "Le ministre",
    items: [
      { label: "Agenda", href: "https://www.transformation.gouv.fr/ministre/agenda" },
      { label: "Biographie", href: "https://www.transformation.gouv.fr/ministre/biographie#biographie" },
      { label: "Cabinet", href: "https://www.transformation.gouv.fr/ministre/cabinet/#cabinet-ministre" },
      { label: "Actualités", href: "https://www.transformation.gouv.fr/ministre/actualite" },
    ],
  },
  {
    label: "Le ministère",
    items: [
      { label: "Missions", href: "https://www.transformation.gouv.fr/le-ministere/missions" },
      { label: "Directions", href: "https://www.transformation.gouv.fr/le-ministere/directions" },
    ],
  },
  { label: "Espace presse", href: "https://www.transformation.gouv.fr/espace-presse" },
  {
    label: "Notre action",
    items: [
      {
        label: "Réforme de l'encadrement supérieur de l'État",
        href: "https://www.transformation.gouv.fr/reforme-de-l-encadrement-superieur-de-l-etat",
      },
      { label: "Talents du service public", href: "https://www.transformation.gouv.fr/cartographie-des-prepas-talents" },
      {
        label: "France Relance : découvrez les projets lauréats",
        href: "https://www.transformation.gouv.fr/decouvrez-les-projets-laureats",
      },
      { label: "France services", href: "https://www.transformation.gouv.fr/les-france-services" },
    ],
  },
  { label: "Rubrique ressources", href: "https://www.transformation.gouv.fr/rubrique-ressources" },
];

const isDropdown = (item: NavLink): item is NavDropdown => "items" in item;

const allowedLinks = navigationItems.flatMap((item) =>
  isDropdown(item) ? item.items.map((sub) => sub.href) : item.href,
);

const blockedLabels: string[] = [];

const isLinkAllowed = (href: string, label?: string): boolean => {
  if (label && blockedLabels.includes(label)) {
    return false;
  }
  if (typeof href === "string" && href.startsWith("https://")) {
    return true;
  }
  return allowedLinks.includes(href);
};

interface DropdownMenuProps {
  item: NavDropdown;
  onClose?: () => void;
}

function DropdownMenu({ item, onClose }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(8), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

  const menuId = `menu-${item.label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <>
      <button
        ref={(node) => {
          refs.setReference(node);
        }}
        className="fr-nav__btn"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-haspopup="true"
        title={`${item.label} - ${isOpen ? "Fermer" : "Ouvrir"} le menu`}
        {...getReferenceProps()}
      >
        {item.label}
        <svg
          className={`inline-block ml-1 w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <FloatingPortal>
          <div
            ref={(node) => {
              refs.setFloating(node);
            }}
            style={floatingStyles}
            className="fr-menu-dropdown"
            id={menuId}
            {...getFloatingProps()}
          >
            <ul className="fr-menu__list">
              {item.items.map((subItem) => {
                return (
                  <li key={subItem.href} className="fr-menu__item">
                    <span className="fr-nav__link">{subItem.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </FloatingPortal>
      )}
    </>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  return (
    <header className="fr-header" role="banner">
      <div className="fr-header__body">
        <div className="fr-container">
          <div className="fr-header__body-row">
            <div className="fr-header__brand fr-enlarge-link">
              <div className="fr-header__brand-top">
                <div className="fr-header__logo">
                  <Link href="/" className="block w-[400px] md:w-[520px] lg:w-[600px]">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={600}
                      height={98}
                      className="object-contain my-[5px] w-full h-auto"
                      priority
                    />
                  </Link>
                </div>
                <div className="fr-header__navbar">
                  <button
                    className="fr-btn--menu fr-btn"
                    data-fr-opened={isMenuOpen}
                    aria-controls="header-navigation"
                    aria-haspopup="dialog"
                    title="Menu principal - Ouvrir le menu"
                    id="fr-btn-menu-mobile-4"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-expanded={isMenuOpen}
                  >
                    Menu principal
                  </button>
                </div>
              </div>
            </div>
            <div className="fr-header__tools"></div>
          </div>
        </div>
      </div>

      <nav className="fr-nav" id="header-navigation-nav" role="navigation" aria-label="Menu principal">
        <div className="fr-container">
          <ul className="fr-nav__list">
            {navigationItems.map((item) => {
              if (isDropdown(item)) {
                return (
                  <li key={item.label} className="fr-nav__item">
                    <DropdownMenu item={item} />
                  </li>
                );
              }
              return (
                <li key={item.href} className="fr-nav__item">
                  <span className="fr-nav__link">{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fr-header__menu fr-modal" id="header-navigation">
          <div className="fr-container">
            <button
              className="fr-btn fr-btn--close"
              aria-controls="header-navigation"
              onClick={() => setIsMenuOpen(false)}
            >
              Fermer
            </button>
            <div className="fr-header__menu-links"></div>
            <nav className="fr-nav" id="header-navigation-nav-mobile" role="navigation" aria-label="Menu principal">
              <ul className="fr-nav__list">
                {navigationItems.map((item) => {
                  if (isDropdown(item)) {
                    const menuId = `menu-mobile-${item.label.replace(/\s+/g, "-").toLowerCase()}`;
                    const isOpen = openDropdowns.has(item.label);
                    return (
                      <li key={item.label} className="fr-nav__item">
                        <button
                          className="fr-nav__btn"
                          aria-expanded={isOpen}
                          aria-controls={menuId}
                          title={`${item.label} - ${isOpen ? "Fermer" : "Ouvrir"} le menu`}
                          onClick={() => toggleDropdown(item.label)}
                        >
                          {item.label}
                          <svg
                            className={`inline-block ml-1 w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div
                          className={`fr-menu fr-collapse ${isOpen ? "fr-collapse--expanded" : ""}`}
                          id={menuId}
                        >
                          <ul className="fr-menu__list">
                            {item.items.map((subItem) => {
                              return (
                                <li key={subItem.href} className="fr-menu__item">
                                  <span className="fr-nav__link">{subItem.label}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </li>
                    );
                  }
                  return (
                    <li key={item.href} className="fr-nav__item">
                      <span className="fr-nav__link">{item.label}</span>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
