import client from '#lib/client.ts';
import type { Header } from './layout.api-model';

export const getHeader = async () =>
  await client.getContent<Header>({
    contentType: 'Header',
    includeRelatedContent: true,
  });
