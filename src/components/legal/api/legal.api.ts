import client from '#lib/client.ts';
import type { Legal } from './legal.api-model';

export const getLegal = async (): Promise<Legal> =>
  await client.getContent<Legal>({
    contentType: 'Legal',
  });
