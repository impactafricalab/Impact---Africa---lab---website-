import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return <div className="min-h-screen bg-navy-950 flex items-center justify-center px-4 relative overflow-hidden"><div className="absolute inset-0 grid-pattern opacity-20" /><div className="absolute inset-0 hero-gradient" /><div className="relative text-center"><p className="font-display text-8xl md:text-9xl font-bold text-gold-gradient mb-4">404</p><h1 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">Page introuvable</h1><p className="text-navy-300 mb-8 max-w-md mx-auto">La page que vous recherchez n'existe pas ou a été déplacée.</p><Link to="/" className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 text-sm font-semibold rounded-sm btn-shine"><ArrowLeft className="w-4 h-4" />Retour à l'accueil</Link></div></div>;
}
