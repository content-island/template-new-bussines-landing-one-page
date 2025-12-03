import type { NavigationItem } from '#common/models';
import type { Media } from '@content-island/api-client';

export interface HeroSection {
  id: string;
  language: 'en';
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  title: string;
  subtitle?: string;
  cta?: NavigationItem;
  galleryImages?: Media[];
}
