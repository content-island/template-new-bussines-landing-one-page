import type { Meta } from '#common/models';
import client from '#lib/client.ts';
import type { Legal } from './legal.api-model';

export const getLegal = async (): Promise<Legal> =>
  await client.getContent<Legal>({
    contentType: 'Legal',
  });

export const getPrivacyPolicyMeta = async (): Promise<Meta> =>
  await client.getContent<Meta>({
    id: '6931a481a89fe07e8789dc44',
  });
