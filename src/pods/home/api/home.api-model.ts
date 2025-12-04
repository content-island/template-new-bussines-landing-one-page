import type { Language, NavigationItem } from '#common/models';
import type { Media } from '@content-island/api-client';

export interface ContactFormField {
  id: string;
  language: Language;
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  label: string;
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
}

export interface ContactSection {
  id: string;
  language: Language;
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  title: string;
  description?: string;
  form: ContactFormField[];
  submitButtonText: string;
}

export interface HeroSection {
  id: string;
  language: Language;
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  title: string;
  subtitle?: string;
  cta: NavigationItem;
  galleryImages?: Media[];
}

export interface Service {
  id: string;
  language: Language;
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  title: string;
  description: string;
  image: Media;
  imageAlt: string;
  features?: string[];
  reverseLayout?: boolean;
}

export interface ServicesSection {
  id: string;
  language: Language;
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  title: string;
  description: string;
  services: Service[];
}
