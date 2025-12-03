import client from '#lib/client.ts';
import type { Footer, Header } from './layout.api-model';

export const getHeader = async () =>
  await client.getContent<Header>({
    contentType: 'Header',
    includeRelatedContent: true,
  });

export const getFooter = async () =>
  await client.getContent<Footer>({
    contentType: 'Footer',
    includeRelatedContent: true,
  });
