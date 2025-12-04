import type { LanguageCode } from '@content-island/api-client';
import type { Meta } from '#common/models';
import client from '#lib/client.ts';
import type { PrivacyPolicy } from './privacy-policy.api-model';

export const getPrivacyPolicy = async (lang: LanguageCode): Promise<PrivacyPolicy> =>
  await client.getContent<PrivacyPolicy>({
    contentType: 'PrivacyPolicy',
    language: lang,
  });

export const getPrivacyPolicyMeta = async (lang: LanguageCode): Promise<Meta> =>
  await client.getContent<Meta>({
    id: '6931a481a89fe07e8789dc44',
    language: lang,
  });
