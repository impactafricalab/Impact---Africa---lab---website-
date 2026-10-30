import { Link } from 'react-router-dom';
import { useReveal } from '@/lib/hooks';
import { ArrowRight, Linkedin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/config';

interface SectionHeadingProps { eyebrow?: string; title: string; subtitle?: string; center?: boolean; light?: boolean; }

export function SectionHeading({ eyebrow, title, subtitle, center = false, light = false }: SectionHeadingProps) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${center ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'} mb-12 md:mb-16`}>
      {eyebrow && <p className={`text-xs font-semibold uppercase tracking-[0.25em] mb-4 ${light ? 'text-gold-400' : 'text-gold-600'}`}>{eyebrow}</p>}
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight ${light ? 'text-white' : 'text-navy-900'}`}>{title}</h2>
      {subtitle && <p className={`mt-5 text-base md:text-lg leading-relaxed ${light ? 'text-navy-200' : 'text-navy-500'}`}>{subtitle}</p>}
    </div>
  );
}

interface ButtonLinkProps { to: string; children: React.ReactNode; variant?: 'gold' | 'outline' | 'ghost'; icon?: React.ReactNode; }

export function ButtonLink({ to, children, variant = 'gold', icon }: ButtonLinkProps) {
  const base = 'btn-shine inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-sm transition-all duration-300 group';
  if (variant === 'gold') return <Link to={to} className={`${base} bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 hover:shadow-lg hover:shadow-gold-500/20`}>{children}{icon}</Link>;
  if (variant === 'outline') return <Link to={to} className={`${base} border border-gold-500/40 text-gold-300 hover:bg-gold-500/10`}>{children}{icon}</Link>;
  return <Link to={to} className={`${base} text-navy-100 hover:text-gold-300`}>{children}{icon}</Link>;
}

const SOCIAL_LINKS: { icon: React.ComponentType<{ className?: string }>; label: string; href: string | null }[] = [
  { icon: Linkedin, label: 'LinkedIn', href: SITE_CONFIG.socialLinks.linkedin },
  { icon: Facebook, label: 'Facebook', href: SITE_CONFIG.socialLinks.facebook },
  { icon: Instagram, label: 'Instagram', href: SITE_CONFIG.socialLinks.instagram },
  { icon: Youtube, label: 'YouTube', href: SITE_CONFIG.socialLinks.youtube },
  { icon: Twitter, label: 'X', href: SITE_CONFIG.socialLinks.twitter },
];

export function SocialLinks({ light = false }: { light?: boolean }) {
  return <div className="flex items-center gap-3">
    {SOCIAL_LINKS.map((s) => {
      const iconEl = <s.icon className={`w-4 h-4 ${light ? 'text-navy-300 hover:text-gold-300' : 'text-navy-400 hover:text-gold-600'} transition-colors`} />;
      return s.href ? <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="inline-flex items-center justify-center w-9 h-9 border border-navy-700/50 rounded-sm hover:border-gold-500/30 transition-colors">{iconEl}</a> : <span key={s.label} aria-label={`${s.label} — bientôt disponible`} title={`${s.label} — bientôt disponible`} className="inline-flex items-center justify-center w-9 h-9 border border-navy-700/30 rounded-sm opacity-40 cursor-not-allowed">{iconEl}</span>;
    })}
  </div>;
}

export { SOCIAL_LINKS };
