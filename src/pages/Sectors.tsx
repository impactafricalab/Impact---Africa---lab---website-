import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

const SECTORS_DATA = [
  { name: 'Santé', desc: 'Solutions de e-santé communautaire, téléconsultation et suivi mobile.', projects: ['E-Santé Communautaire'] },
  { name: 'Éducation', desc: 'Plateformes éducatives, détection de talents et engagement jeunesse.', projects: ['Talent Éduqué Compétition'] },
  { name: 'Agriculture', desc: 'Écosystèmes numériques pour agriculteurs, marchés et services agricoles.', projects: ['AgriTech Hub'] },
  { name: 'Sport', desc: 'Valorisation de la lutte sénégalaise et engagement communautaire.', projects: ['IAL Wrestling'] },
  { name: 'Inclusion', desc: 'Inclusion des personnes en situation de handicap, formation et emploi.', projects: ['Africa Inclusive'] },
  { name: 'Mobilité', desc: 'Solutions automobiles et de mobilité numérique.', projects: ['AutoHub Sénégal'] },
  { name: 'Technologie', desc: 'Sécurité, assistance et solutions technologiques innovantes.', projects: ['SecureTrack'] },
  { name: 'Logistique', desc: 'Livraison, mise en relation et services de proximité.', projects: ['Jeff Delivery'] },
  { name: 'Industrie', desc: 'BTP, agro-industrie et transformation locale.', projects: ['Industrie locale d’outillage BTP'] },
  { name: 'Impact social', desc: 'Projets à impact social pour les enfants et jeunes africains.', projects: ['Africa Child Future Greed'] },
];

export default function Sectors() {
  return <><section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-navy-950 overflow-hidden"><div className="absolute inset-0 grid-pattern opacity-20" /><div className="absolute inset-0 hero-gradient" /><div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center"><p className="animate-fade-in-up text-gold-400 text-xs font-semibold uppercase tracking-[0.25em] mb-5">Secteurs d'intervention</p><h1 className="animate-fade-in-up delay-100 font-display text-4xl md:text-6xl font-bold text-white mb-6">Une approche multi-sectorielle</h1><p className="animate-fade-in-up delay-200 text-navy-200 text-lg leading-relaxed max-w-2xl mx-auto">Impact Africa Lab intervient dans des secteurs stratégiques pour répondre aux défis économiques, sociaux et technologiques du continent africain.</p></div></section><section className="section-padding bg-gray-50"><div className="max-w-7xl mx-auto px-4 md:px-8"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{SECTORS_DATA.map((s, i) => <Reveal key={s.name} delay={i * 0.06}><div className="group p-8 bg-white rounded-sm border border-navy-100 hover:border-gold-300 transition-all duration-500 h-full"><div className="w-10 h-px bg-gold-400 mb-5 group-hover:w-16 transition-all duration-500" /><h3 className="font-display text-2xl font-semibold text-navy-900 mb-3">{s.name}</h3><p className="text-navy-500 text-sm leading-relaxed mb-5">{s.desc}</p><div className="space-y-1.5">{s.projects.map((p) => <Link key={p} to="/projets" className="inline-flex items-center gap-1.5 text-navy-600 hover:text-gold-600 text-sm font-medium transition-colors"><ArrowRight className="w-3 h-3" />{p}</Link>)}</div></div></Reveal>)}</div></div></section></>;
}
