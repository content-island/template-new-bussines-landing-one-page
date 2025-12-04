import type { Language } from '#common/models';

export interface PrivacyPolicy {
  id: string;
  language: Language;
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  text: string;
  slug: string;
}
