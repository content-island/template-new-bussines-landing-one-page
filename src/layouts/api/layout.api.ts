import type { LanguageCode } from '@content-island/api-client';
import client from '#lib/client.ts';
import type { Footer, Header } from './layout.api-model';

export const getHeader = async (lang: LanguageCode): Promise<Header> =>
  await client.getContent<Header>({
    contentType: 'Header',
    language: lang,
    includeRelatedContent: true,
  });

export const getFooter = async (lang: LanguageCode): Promise<Footer> =>
  await client.getContent<Footer>({
    contentType: 'Footer',
    language: lang,
    includeRelatedContent: true,
  });
