import type { LanguageCode } from '@content-island/api-client';

export interface NavigationItem {
  id: string;
  language: LanguageCode;
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  label: string;
  url?: string;
}
