import type { Language } from '#common/models';
import client from '#lib/client.ts';
import type { Footer, Header } from './layout.api-model';

export const getHeader = async (lang: Language): Promise<Header> =>
  await client.getContent<Header>({
    contentType: 'Header',
    language: lang,
    includeRelatedContent: true,
  });

export const getFooter = async (lang: Language): Promise<Footer> =>
  await client.getContent<Footer>({
    contentType: 'Footer',
    language: lang,
    includeRelatedContent: true,
  });
