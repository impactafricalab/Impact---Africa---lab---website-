export type ProjectStatus =
  | 'incubation'
  | 'concept'
  | 'en-developpement'
  | 'prototype'
  | 'recherche-partenaires'
  | 'recherche-sponsors'
  | 'pilote'
  | 'pret-lancement'
  | 'actif';

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string | null;
  sector: string;
  sectors: string[];
  short_description: string | null;
  description: string | null;
  problem: string | null;
  solution: string | null;
  how_it_works: string | null;
  beneficiaries: string | null;
  features: string[];
  business_model: string | null;
  impact_goal: string | null;
  status: ProjectStatus;
  partners_sought: string | null;
  logo_url: string | null;
  image_url: string | null;
  gallery: string[];
  documents: Array<{ name: string; url: string; public: boolean }>;
  contact_email: string | null;
  is_published: boolean;
  is_archived: boolean;
  sort_order: number;
  updated_at: string;
  created_at: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  image_url: string | null;
  category: string | null;
  is_published: boolean;
  published_at: string;
  created_at: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string | null;
  photo_url: string | null;
  sort_order: number;
  is_visible: boolean;
  created_at: string;
}

export interface ContactSubmission {
  id: string;
  nom: string;
  prenom: string;
  organisation: string | null;
  fonction: string | null;
  email: string;
  telephone: string | null;
  pays: string | null;
  projet_concerne: string | null;
  type_demande: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

export const STATUS_LABELS: Record<ProjectStatus, string> = {
  'incubation': 'En incubation',
  'concept': 'Concept',
  'en-developpement': 'En développement',
  'prototype': 'Prototype',
  'recherche-partenaires': 'Recherche de partenaires',
  'recherche-sponsors': 'Recherche de sponsors',
  'pilote': 'Pilote',
  'pret-lancement': 'Prêt au lancement',
  'actif': 'Actif',
};

export const SECTORS = [
  'Santé',
  'Éducation',
  'Agriculture',
  'Sport',
  'Inclusion',
  'Mobilité',
  'Technologie',
  'Logistique',
  'Industrie',
  'Impact social',
];

export const DEMAND_TYPES = [
  'Partenariat',
  'Investissement',
  'Sponsoring',
  'Presse',
  'Collaboration',
  'Recrutement',
  'Autre',
];
