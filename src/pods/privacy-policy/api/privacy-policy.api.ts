import type { Language, Meta } from '#common/models';
import client from '#lib/client.ts';
import type { PrivacyPolicy } from './privacy-policy.api-model';

export const getPrivacyPolicy = async (lang: Language): Promise<PrivacyPolicy> =>
  await client.getContent<PrivacyPolicy>({
    contentType: 'PrivacyPolicy',
    language: lang,
  });

export const getPrivacyPolicyMeta = async (lang: Language): Promise<Meta> =>
  await client.getContent<Meta>({
    id: '6931a481a89fe07e8789dc44',
    language: lang,
  });
