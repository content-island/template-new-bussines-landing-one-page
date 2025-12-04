import type { LanguageCode } from '@content-island/api-client';
import type { Meta } from '#common/models';
import client from '#lib/client.ts';
import type { ContactSection, HeroSection, ServicesSection } from './home.api-model';

export const getHeroSection = async (lang: LanguageCode): Promise<HeroSection> =>
  await client.getContent<HeroSection>({
    contentType: 'HeroSection',
    language: lang,
    includeRelatedContent: true,
  });

export const getServicesSection = async (lang: LanguageCode): Promise<ServicesSection> =>
  await client.getContent<ServicesSection>({
    contentType: 'ServicesSection',
    language: lang,
    includeRelatedContent: true,
  });

export const getContactSection = async (lang: LanguageCode): Promise<ContactSection> =>
  await client.getContent<ContactSection>({
    contentType: 'ContactSection',
    language: lang,
    includeRelatedContent: true,
  });

export const getHomeMeta = async (lang: LanguageCode): Promise<Meta> =>
  await client.getContent<Meta>({
    id: '6931a3f6a89fe07e8789dc3f',
    language: lang,
  });
