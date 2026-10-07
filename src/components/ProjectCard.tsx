import { Link } from 'react-router-dom';
import type { Project } from '@/lib/types';
import { STATUS_LABELS } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const sectorIconColors: Record<string, string> = {
  'Santé': 'from-rose-500/20 to-rose-600/10 text-rose-300',
  'Éducation': 'from-blue-500/20 to-blue-600/10 text-blue-300',
  'Agriculture': 'from-green-500/20 to-green-600/10 text-green-300',
  'Sport': 'from-orange-500/20 to-orange-600/10 text-orange-300',
  'Inclusion': 'from-purple-500/20 to-purple-600/10 text-purple-300',
  'Mobilité': 'from-cyan-500/20 to-cyan-600/10 text-cyan-300',
  'Technologie': 'from-indigo-500/20 to-indigo-600/10 text-indigo-300',
  'Logistique': 'from-amber-500/20 to-amber-600/10 text-amber-300',
  'Industrie': 'from-slate-500/20 to-slate-600/10 text-slate-300',
  'Impact social': 'from-teal-500/20 to-teal-600/10 text-teal-300',
};

const statusDotColor: Record<string, string> = {
  'incubation': 'bg-navy-300',
  'concept': 'bg-navy-400',
  'en-developpement': 'bg-gold-400',
  'prototype': 'bg-gold-500',
  'recherche-partenaires': 'bg-navy-500',
  'recherche-sponsors': 'bg-gold-600',
  'pilote': 'bg-gold-300',
  'pret-lancement': 'bg-gold-400',
  'actif': 'bg-gold-500',
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const colorClass = sectorIconColors[project.sector] || 'from-gold-500/20 to-gold-600/10 text-gold-300';
  const dotClass = statusDotColor[project.status] || 'bg-navy-400';

  return (
    <Link
      to={`/projets/${project.slug}`}
      className="card-hover group relative flex flex-col bg-white rounded-sm border border-navy-100 overflow-hidden h-full"
    >
      <div className={`relative h-1.5 bg-gradient-to-r ${colorClass.split(' ').slice(0, 2).join(' ')}`} />

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className={`inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-sm bg-gradient-to-br ${colorClass} flex-shrink-0`}>
            <span className="font-display text-base sm:text-lg font-semibold">
              {project.name.charAt(0)}
            </span>
          </div>
          <span className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-sm status-${project.status} flex-shrink-0`}>
            <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />
            {STATUS_LABELS[project.status]}
          </span>
        </div>

        <h3 className="font-display text-lg sm:text-xl font-semibold text-navy-900 mb-1 leading-snug">
          {project.name}
        </h3>
        {project.tagline && (
          <p className="text-gold-600 text-xs font-medium italic mb-2 line-clamp-1">{project.tagline}</p>
        )}
        <p className="text-navy-400 text-[11px] font-medium uppercase tracking-wider mb-3">
          {project.sector}
        </p>
        <p className="text-navy-500 text-sm leading-relaxed line-clamp-3 flex-1">
          {project.short_description}
        </p>

        <div className="mt-5 pt-4 border-t border-navy-50">
          <span className="inline-flex items-center gap-1.5 text-navy-700 text-sm font-medium group-hover:text-gold-600 transition-colors">
            Découvrir le projet
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
