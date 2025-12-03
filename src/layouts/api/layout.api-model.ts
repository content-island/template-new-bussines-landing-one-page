import type { NavigationItem } from '#common/models';

export interface Header {
  id: string;
  language: 'en';
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  title: string;
  home: NavigationItem;
  services: NavigationItem;
  contact: NavigationItem;
}
