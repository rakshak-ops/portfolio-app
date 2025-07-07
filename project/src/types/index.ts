export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  categories: string[];
  featured?: boolean;
}

export interface TechItem {
  name: string;
  category: 'language' | 'framework' | 'database' | 'cloud' | 'tool' | 'ml';
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  education: string;
  bio: string[];
  image?: string;
  resumeUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  award?: string;
  link?: string;
  technologies?: string[];
}