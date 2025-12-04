import type { Media } from '@content-island/api-client';

export interface Service {
  id: string;
  language: 'en';
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
  language: 'en';
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  title: string;
  description: string;
  services: Service[];
}
