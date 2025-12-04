import type { Media, LanguageCode } from '@content-island/api-client';
import type { NavigationItem } from '#common/models';

export interface Header {
  id: string;
  language: LanguageCode;
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  brand: NavigationItem;
  home: NavigationItem;
  services: NavigationItem;
  contact: NavigationItem;
}

export interface SocialLink {
  id: string;
  language: LanguageCode;
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  title: string;
  image: Media;
  url: string;
}

export interface Footer {
  id: string;
  language: LanguageCode;
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  brand?: string;
  socialLinks?: SocialLink[];
  copyright: string;
  privacyPolicy: NavigationItem;
}
