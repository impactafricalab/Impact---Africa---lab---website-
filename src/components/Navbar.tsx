import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { useScrollPosition } from '@/lib/hooks';
import { SITE_CONFIG } from '@/lib/config';

const NAV_LINKS = [
  { label: 'Accueil', path: '/' },
  { label: 'À propos', path: '/a-propos' },
  { label: 'Nos projets', path: '/projets' },
  { label: 'Secteurs', path: '/secteurs' },
  { label: 'Notre méthode', path: '/methode' },
  { label: 'Partenariats', path: '/partenariats' },
  { label: 'Actualités', path: '/actualites' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollPosition();
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy-950/95 backdrop-blur-md border-b border-gold-500/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link to="/" className="z-50">
            <Logo light logoUrl={SITE_CONFIG.logoUrl} />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 ${
                    isActive ? 'text-gold-300' : 'text-navy-100 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Link
              to="/partenariats"
              className="btn-shine group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 text-[13px] font-semibold rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
            >
              Devenir partenaire
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden z-50 p-2 text-white"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden mobile-menu-enter bg-navy-950 flex flex-col">
          {/* Top bar with X button */}
          <div className="flex items-center justify-end px-5 pt-5 pb-2">
            <button
              onClick={() => setOpen(false)}
              className="p-2.5 -mr-1 text-white hover:text-gold-300 transition-colors"
              aria-label="Fermer le menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Navigation links */}
          <div className="flex-1 flex flex-col justify-center px-8 overflow-y-auto">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${i * 0.06}s` }}
                  className={({ isActive }) =>
                    `animate-fade-in-up text-2xl font-display py-4 border-b border-navy-700/40 transition-colors ${
                      isActive ? 'text-gold-300' : 'text-white hover:text-gold-200'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Partner button pinned at bottom */}
          <div className="px-8 pb-10 pt-4">
            <Link
              to="/partenariats"
              onClick={() => setOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 text-base font-semibold rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
            >
              Devenir partenaire
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
