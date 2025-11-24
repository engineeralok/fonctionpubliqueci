'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

// Navigation data structure
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
    label: 'Présidence',
    items: [
      { label: 'Les présidents', href: '/les-presidents' },
      { label: 'Les vices présidents', href: '/administration/jd-vance' },
      { label: 'Les premières dames', href: '/administration/melania-trump' },
      { label: "L'agenda du président", href: '/administration/donald-j-trump' },
      { label: "L'organisation", href: '/administration/the-cabinet' },
      { label: 'Les palais de la présidence', href: '/visit' },
    ],
  },
  {
    label: 'Gouvernement',
    items: [
      { label: 'Le gouvernement', href: '/administration/the-cabinet' },
      { label: 'Communiqués du conseil des ministres', href: '/presidential-actions' },
    ],
  },
  { label: 'Actualités', href: '/news' },
  { label: 'Nos réalisations', href: '/issues' },
  { label: 'Écrire au Président', href: '/contact' },
];

// Helper function to check if nav item is a dropdown
const isDropdown = (item: NavLink): item is NavDropdown => {
  return 'items' in item;
};

// Allowed links that should work
const allowedLinks = [
  '/contact', // Écrire au Président
  '/administration/the-cabinet', // Le Gouvernement
  '/les-presidents', // Les Présidents
];

// Specific labels to block even if href is allowed
const blockedLabels = [
  "L'organisation", // Specific label to block even if href is allowed
];

// Helper function to check if a link is allowed
const isLinkAllowed = (href: string, label?: string): boolean => {
  // First check if label is specifically blocked
  if (label && blockedLabels.includes(label)) {
    return false;
  }
  // Then check if href is in allowed links
  return allowedLinks.includes(href);
};

// Helper function to handle link clicks - block if not allowed
const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label?: string) => {
  if (!isLinkAllowed(href, label)) {
    e.preventDefault();
    return false;
  }
  return true;
};

// Mobile dropdown component (separate from desktop)
interface MobileDropdownProps {
  item: NavDropdown;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onMobileMenuClose?: () => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

function MobileDropdown({ item, isOpen, onToggle, onClose, onMobileMenuClose, dropdownRef }: MobileDropdownProps) {
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="fr-nav__btn text-white w-full flex items-center bg-[#f78a00] hover:bg-[#d16a1f] pl-4 pr-4 py-3 rounded-none border-0 outline-none focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`menu-${item.label}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onToggle();
        }}
        type="button"
      >
        <span className="flex-1 text-left">{item.label}</span>
        <svg
          className={`h-4 w-4 transition-transform flex-shrink-0 ml-2 pointer-events-none ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="fr-menu fr-collapse bg-[#f78a00] mt-1 rounded-none" id={`menu-${item.label}`}>
          <ul className="fr-menu__list">
            {item.items.map((subItem) => {
              const isAllowed = isLinkAllowed(subItem.href, subItem.label);
              if (isAllowed) {
                return (
                  <li key={subItem.href} className="fr-menu__item">
                    <Link
                      className="fr-nav__link text-white hover:bg-[#d16a1f] px-4 py-3 block rounded-none border-0 outline-none focus:outline-none"
                      href={subItem.href}
                      onClick={(e) => {
                        handleLinkClick(e, subItem.href, subItem.label);
                        onClose();
                        if (onMobileMenuClose) {
                          onMobileMenuClose();
                        }
                      }}
                    >
                      {subItem.label}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={subItem.href} className="fr-menu__item">
                  <span className="fr-nav__link text-white/50 cursor-not-allowed px-4 py-3 block rounded-none border-0">
                    {subItem.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

// Desktop dropdown component - Industry standard implementation
interface DesktopDropdownProps {
  item: NavDropdown;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

function DesktopDropdown({ item, isOpen, onToggle, onClose, dropdownRef }: DesktopDropdownProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number } | null>(null);

  // Calculate menu position based on button position
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setMenuPosition({
        top: buttonRect.bottom + 4, // 4px gap below button
        left: buttonRect.left,
      });
    } else {
      setMenuPosition(null);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) {
      setFocusedIndex(-1);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          onClose();
          buttonRef.current?.focus();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex((prev) => {
            const next = prev < item.items.length - 1 ? prev + 1 : 0;
            const menuItem = menuRef.current?.querySelectorAll('a, button')[next] as HTMLElement;
            menuItem?.focus();
            return next;
          });
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex((prev) => {
            const next = prev > 0 ? prev - 1 : item.items.length - 1;
            const menuItem = menuRef.current?.querySelectorAll('a, button')[next] as HTMLElement;
            menuItem?.focus();
            return next;
          });
          break;
        case 'Home':
          e.preventDefault();
          setFocusedIndex(0);
          const firstItem = menuRef.current?.querySelectorAll('a, button')[0] as HTMLElement;
          firstItem?.focus();
          break;
        case 'End':
          e.preventDefault();
          const lastIndex = item.items.length - 1;
          setFocusedIndex(lastIndex);
          const lastItem = menuRef.current?.querySelectorAll('a, button')[lastIndex] as HTMLElement;
          lastItem?.focus();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, item.items.length, onClose]);

  // Focus first item when menu opens
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstItem = menuRef.current.querySelector('a, button') as HTMLElement;
      if (firstItem) {
        // Small delay to ensure menu is rendered
        setTimeout(() => firstItem.focus(), 0);
      }
    }
  }, [isOpen]);

  // Update position on scroll/resize
  useEffect(() => {
    if (!isOpen) return;

    const updatePosition = () => {
      if (buttonRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        setMenuPosition({
          top: buttonRect.bottom + 4,
          left: buttonRect.left,
        });
      }
    };

    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isOpen]);

  const handleButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    } else if (e.key === 'ArrowDown' && !isOpen) {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <>
      <div className="relative inline-block" ref={dropdownRef}>
        <button
          ref={buttonRef}
          id={`desktop-button-${item.label}`}
          className="fr-nav__btn flex items-center gap-2 text-white hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent transition-all"
          onClick={onToggle}
          onKeyDown={handleButtonKeyDown}
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-controls={`desktop-menu-${item.label}`}
          aria-label={`${item.label} menu`}
          type="button"
        >
          {item.label}
          <svg
            className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      {isOpen && menuPosition && (
        <>
          {/* Backdrop for click outside - completely invisible, no layout impact */}
          <div
            className="fixed inset-0 z-[9998]"
            onClick={onClose}
            aria-hidden="true"
            style={{ 
              pointerEvents: 'auto',
              backgroundColor: 'transparent',
              cursor: 'default'
            }}
          />
          {/* Dropdown menu - fixed positioning, floating widget */}
          <div
            ref={menuRef}
            id={`desktop-menu-${item.label}`}
            className="fixed z-[9999] min-w-[280px] rounded-md border border-white/20 bg-[#d16a1f] shadow-2xl transition-opacity duration-200 ease-out"
            style={{
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
              position: 'fixed',
            }}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby={`desktop-button-${item.label}`}
          >
            <div className="py-2">
              {item.items.map((subItem, index) => {
                const isAllowed = isLinkAllowed(subItem.href, subItem.label);
                if (isAllowed) {
                  return (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="block px-4 py-2.5 text-[11px] text-white transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-inset"
                      role="menuitem"
                      tabIndex={0}
                      onClick={(e) => {
                        handleLinkClick(e, subItem.href, subItem.label);
                        onClose();
                      }}
                      onFocus={() => setFocusedIndex(index)}
                    >
                      {subItem.label}
                    </Link>
                  );
                }
                return (
                  <span
                    key={subItem.href}
                    className="block px-4 py-2.5 text-[11px] text-white/50 cursor-not-allowed"
                    role="menuitem"
                    aria-disabled="true"
                  >
                    {subItem.label}
                  </span>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPosition, setSearchPosition] = useState<{ top: number; right: number } | null>(null);
  
  const pathname = usePathname();
  const router = useRouter();
  
  const searchRef = useRef<HTMLDivElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const searchPopupRef = useRef<HTMLDivElement>(null);
  const presidenceRef = useRef<HTMLDivElement>(null);
  const gouvernementRef = useRef<HTMLDivElement>(null);

  // Calculate search popup position based on button position
  useEffect(() => {
    if (isSearchOpen && searchButtonRef.current) {
      const buttonRect = searchButtonRef.current.getBoundingClientRect();
      setSearchPosition({
        top: buttonRect.bottom + 4, // 4px gap below button
        right: window.innerWidth - buttonRect.right, // Calculate right offset
      });
    } else {
      setSearchPosition(null);
    }
  }, [isSearchOpen]);

  // Update search position on scroll/resize and handle Escape key
  useEffect(() => {
    if (!isSearchOpen) return;

    const updatePosition = () => {
      if (searchButtonRef.current) {
        const buttonRect = searchButtonRef.current.getBoundingClientRect();
        setSearchPosition({
          top: buttonRect.bottom + 4,
          right: window.innerWidth - buttonRect.right,
        });
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        e.preventDefault();
        setIsSearchOpen(false);
        searchButtonRef.current?.focus();
      }
    };

    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSearchOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdowns(new Set());
  }, [pathname]);

  // Handle click outside for dropdowns and search (mobile only, desktop uses backdrop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close search if clicking outside (mobile menu only)
      if (isMenuOpen && searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }

      // Close Présidence dropdown if clicking outside (mobile menu only)
      if (isMenuOpen && presidenceRef.current && !presidenceRef.current.contains(event.target as Node)) {
        setOpenDropdowns((prev) => {
          const next = new Set(prev);
          next.delete('Présidence');
          return next;
        });
      }

      // Close Gouvernement dropdown if clicking outside (mobile menu only)
      if (isMenuOpen && gouvernementRef.current && !gouvernementRef.current.contains(event.target as Node)) {
        setOpenDropdowns((prev) => {
          const next = new Set(prev);
          next.delete('Gouvernement');
          return next;
        });
      }
    };

    if (isMenuOpen && (isSearchOpen || openDropdowns.size > 0)) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, isSearchOpen, openDropdowns]);

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => {
      const next = new Set(prev);
      // Close other dropdowns
      navigationItems.forEach((item) => {
        if (isDropdown(item) && item.label !== label) {
          next.delete(item.label);
        }
      });
      // Toggle current dropdown
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  const closeDropdown = (label: string) => {
    setOpenDropdowns((prev) => {
      const next = new Set(prev);
      next.delete(label);
      return next;
    });
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page using Next.js router
      const query = encodeURIComponent(searchQuery.trim());
      router.push(`/search?q=${query}`);
      // Close search popup
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const getDropdownRef = (label: string): React.RefObject<HTMLDivElement | null> => {
    if (label === 'Présidence') return presidenceRef;
    if (label === 'Gouvernement') return gouvernementRef;
    return { current: null };
  };

  return (
    <header className="fr-header overflow-hidden" role="banner">
      {/* Header Body */}
      <div className="fr-header__body w-full overflow-x-hidden">
        <div className="container pl-4 pr-4 lg:pl-8 lg:pr-8 w-full max-w-full">
          <div className="fr-header__body-row overflow-hidden">
            {/* Brand Section - Mobile/Tablet */}
            <div className="fr-header__brand fr-enlarge-link lg:hidden w-full min-w-0">
              <div className="fr-header__brand-top flex flex-col gap-0 w-full">
                {/* First row: Logo 1 + Menu button */}
                <div className="flex items-center justify-between w-full min-w-0">
                  <div className="fr-header__logo flex-shrink-0 min-w-0">
                    <Link href="/" className="block p-2 lg:p-[10px]">
                      <Image
                        src="/images/mobilelogo1.png"
                        alt="Logo"
                        width={120}
                        height={120}
                        className="object-contain max-w-full h-auto"
                        priority
                      />
                    </Link>
                  </div>
                  <div className="fr-header__navbar flex-shrink-0 self-start">
                    <button
                      className="fr-btn--menu fr-btn"
                      aria-controls="header-navigation"
                      aria-haspopup="dialog"
                      title="Menu - Ouvrir le menu"
                      onClick={() => setIsMenuOpen((prev) => !prev)}
                      aria-expanded={isMenuOpen}
                      data-fr-opened={isMenuOpen}
                    >
                    </button>
                  </div>
                </div>
                {/* Grey horizontal divider between rows */}
                <div className="h-px w-full bg-gray-300"></div>
                {/* Second row: Logo 2 */}
                <div className="flex items-center justify-start w-full min-w-0">
                  <div className="fr-header__logo min-w-0">
                    <Link href="/" className="block p-2 lg:p-[10px]">
                      <Image
                        src="/images/mobilelogo2.png"
                        alt="Logo"
                        width={160}
                        height={160}
                        className="object-contain max-w-full h-auto"
                        priority
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Section - Desktop */}
            <div className="fr-header__brand hidden lg:block">
              <div className="fr-header__brand-top">
                <Link href="/" className="block rounded transition-colors hover:bg-gray-200/30 p-[10px]">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={350}
                    height={57}
                    className="object-contain my-[5px]"
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Desktop Only */}
      <nav className="fr-nav hidden lg:block" id="header-navigation-desktop" role="navigation" aria-label="Menu principal">
        <div className="container px-8">
          <div className="fr-nav__list flex items-center justify-between gap-4 text-white">
            {/* Left side: Menu title + Nav items (desktop) */}
            <div className="flex items-center gap-3">
              {/* Menu title */}
              <div className="text-[11px] font-semibold uppercase whitespace-nowrap">
                Menu
              </div>
            </div>

            {/* Desktop nav items - hidden on mobile/tablet */}
            <div className="hidden flex-1 items-center justify-end gap-8 lg:flex">
              <div className="flex items-center gap-6 text-[11px] font-semibold whitespace-nowrap normal-case">
                {navigationItems.map((item) => {
                  if (isDropdown(item)) {
                    return (
                      <DesktopDropdown
                        key={item.label}
                        item={item}
                        isOpen={openDropdowns.has(item.label)}
                        onToggle={() => toggleDropdown(item.label)}
                        onClose={() => closeDropdown(item.label)}
                        dropdownRef={getDropdownRef(item.label)}
                      />
                    );
                  }
                  const isAllowed = isLinkAllowed(item.href, item.label);
                  if (isAllowed) {
                    return (
                      <Link
                        key={item.href}
                        className="fr-nav__btn text-white hover:text-white/80 normal-case"
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href, item.label)}
                      >
                        {item.label}
                      </Link>
                    );
                  }
                  return (
                    <span
                      key={item.href}
                      className="fr-nav__btn text-white/50 cursor-not-allowed normal-case"
                    >
                      {item.label}
                    </span>
                  );
                })}
              </div>

              <div className="flex items-center gap-4">
                {/* Search */}
                <div className="relative inline-block" ref={searchRef}>
                  <button
                    ref={searchButtonRef}
                    className="fr-nav__btn p-2"
                    aria-label="Rechercher"
                    title="Rechercher"
                    aria-expanded={isSearchOpen}
                    aria-haspopup="true"
                    aria-controls="desktop-search-popup"
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                  >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
                {/* Floating Search Popup - Desktop Only */}
                {isSearchOpen && searchPosition && (
                  <>
                    {/* Backdrop for click outside - completely invisible, no layout impact */}
                    <div
                      className="fixed inset-0 z-[9998]"
                      onClick={() => setIsSearchOpen(false)}
                      aria-hidden="true"
                      style={{ 
                        pointerEvents: 'auto',
                        backgroundColor: 'transparent',
                        cursor: 'default'
                      }}
                    />
                    {/* Search popup - fixed positioning, floating widget */}
                    <div
                      ref={searchPopupRef}
                      id="desktop-search-popup"
                      className="fixed z-[9999] w-72 rounded-md border border-[#d16a1f] bg-[#f78a00] p-4 text-white shadow-2xl transition-opacity duration-200 ease-out"
                      style={{
                        top: `${searchPosition.top}px`,
                        right: `${searchPosition.right}px`,
                        position: 'fixed',
                      }}
                      role="dialog"
                      aria-labelledby="search-button"
                      aria-modal="true"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <form onSubmit={handleSearch}>
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search for:"
                          className="w-full rounded border border-white/30 bg-white/90 px-3 py-2 text-sm text-gray-900 placeholder-gray-500 outline-none focus:border-white focus:bg-white"
                          autoFocus
                        />
                        <button
                          type="submit"
                          className="mt-3 w-full rounded bg-[#d16a1f] px-4 py-2 text-xs font-semibold uppercase text-white hover:bg-[#b85a1a] transition-colors"
                        >
                          Search
                        </button>
                      </form>
                    </div>
                  </>
                )}

                {/* Language switcher */}
                <div className="flex items-center gap-2 border-l border-white/50 pl-4 text-[11px] font-semibold uppercase">
                  <button className="fr-nav__btn px-2" aria-label="Français">
                    FR
                  </button>
                  <button className="fr-nav__btn px-2" aria-label="English">
                    EN
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Menu Modal */}
      {isMenuOpen && (
        <div
          className="fr-header__menu fr-modal lg:hidden fixed inset-0 z-50 bg-black/50"
          id="header-navigation"
          role="dialog"
          aria-labelledby="fr-btn-menu-mobile"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsMenuOpen(false);
            }
          }}
        >
          <div 
            className="container bg-[#f78a00] h-full overflow-y-auto mx-auto max-w-full w-full overflow-x-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 p-4 border-b border-white/20 w-full">
              <div className="flex items-center gap-3 text-white">
                <div className="relative" ref={searchRef}>
                  <button
                    className="fr-nav__btn p-2 text-white"
                    aria-label="Rechercher"
                    title="Rechercher"
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                  >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                  {isSearchOpen && (
                    <div className="absolute left-0 top-full mt-2 w-72 rounded-md border border-[#d16a1f] bg-[#f78a00] p-4 text-white shadow-xl z-50">
                      <form onSubmit={handleSearch}>
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search for:"
                          className="w-full rounded border border-white/30 bg-white/90 px-3 py-2 text-sm text-gray-900 placeholder-gray-500 outline-none focus:border-white focus:bg-white"
                          autoFocus
                        />
                        <button
                          type="submit"
                          className="mt-3 w-full rounded bg-[#d16a1f] px-4 py-2 text-xs font-semibold uppercase text-white hover:bg-[#b85a1a] transition-colors"
                        >
                          Search
                        </button>
                      </form>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 border-l border-white/60 pl-3 text-[11px] font-semibold uppercase">
                  <button className="fr-nav__btn px-2 text-white" aria-label="Français">
                    FR
                  </button>
                  <button className="fr-nav__btn px-2 text-white" aria-label="English">
                    EN
                  </button>
                </div>
              </div>
              <button
                className="fr-btn fr-btn--close text-white bg-[#f78a00] hover:bg-[#d16a1f] w-10 h-10 flex items-center justify-center rounded-none border-0 outline-none focus:outline-none"
                aria-controls="header-navigation"
                aria-label="Fermer"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="fr-header__menu-links px-4 pb-8 bg-[#f78a00] w-full overflow-x-hidden">
              <nav className="fr-nav w-full" role="navigation" aria-label="Menu principal">
                <ul className="fr-nav__list w-full">
                  {navigationItems.map((item) => {
                    if (isDropdown(item)) {
                      return (
                        <li key={item.label} className="fr-nav__item w-full">
                          <MobileDropdown
                            item={item}
                            isOpen={openDropdowns.has(item.label)}
                            onToggle={() => toggleDropdown(item.label)}
                            onClose={() => closeDropdown(item.label)}
                            onMobileMenuClose={() => setIsMenuOpen(false)}
                            dropdownRef={getDropdownRef(item.label)}
                          />
                        </li>
                      );
                    }
                    const isAllowed = isLinkAllowed(item.href, item.label);
                    if (isAllowed) {
                      return (
                        <li key={item.href} className="fr-nav__item w-full">
                          <Link
                            className="fr-nav__link text-white bg-[#f78a00] hover:bg-[#d16a1f] px-4 py-3 block rounded-none border-0 outline-none focus:outline-none"
                            href={item.href}
                            onClick={(e) => {
                              handleLinkClick(e, item.href, item.label);
                                setIsMenuOpen(false);
                            }}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    }
                    return (
                      <li key={item.href} className="fr-nav__item w-full">
                        <span className="fr-nav__link text-white/50 cursor-not-allowed bg-[#f78a00]/50 px-4 py-3 block rounded-none border-0">
                          {item.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
