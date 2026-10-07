import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { SocialLinks } from './ui';
import { SITE_CONFIG } from '@/lib/config';

const FOOTER_LINKS = [
  { label: 'Accueil', path: '/' },
  { label: 'À propos', path: '/a-propos' },
  { label: 'Projets', path: '/projets' },
  { label: 'Partenariats', path: '/partenariats' },
  { label: 'Actualités', path: '/actualites' },
  { label: 'Contact', path: '/contact' },
  { label: 'Mentions légales', path: '/mentions-legales' },
  { label: 'Politique de confidentialité', path: '/confidentialite' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Logo light logoUrl={SITE_CONFIG.logoUrl} />
            <p className="mt-6 text-navy-200 text-sm leading-relaxed max-w-xs">
              Laboratoire africain d'innovation et d'entrepreneuriat.
              Des solutions africaines pour les défis africains.
            </p>
            <p className="mt-4 text-gold-300 text-xs tracking-[0.2em] uppercase font-medium">
              Innover • Inclure • Transformer
            </p>
            <div className="mt-6">
              <SocialLinks light />
            </div>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center text-navy-200 hover:text-gold-300 text-sm transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 mr-1.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-navy-200 text-sm">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span>Yoff, Dakar — Sénégal</span>
              </div>
              <a
                href="tel:+221788354588"
                className="flex items-center gap-3 text-navy-200 hover:text-gold-300 text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>+221 78 835 45 88</span>
              </a>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 border border-gold-500/30 text-gold-300 text-sm font-medium rounded-sm hover:bg-gold-500/10 transition-colors"
            >
              Nous contacter
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-700/40">
          <p className="text-navy-300 text-xs text-center">
            © Impact Africa Lab — Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
