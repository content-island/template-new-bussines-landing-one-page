import type { LanguageCode } from '@content-island/api-client';
import client from '#lib/client.ts';

const { languages } = await client.getProject();
export const LANGUAGES: LanguageCode[] = languages;
