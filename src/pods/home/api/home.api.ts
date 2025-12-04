import type { Language, Meta } from '#common/models';
import client from '#lib/client.ts';
import type { ContactSection, HeroSection, ServicesSection } from './home.api-model';

export const getHeroSection = async (lang: Language): Promise<HeroSection> =>
  await client.getContent<HeroSection>({
    contentType: 'HeroSection',
    language: lang,
    includeRelatedContent: true,
  });

export const getServicesSection = async (lang: Language): Promise<ServicesSection> =>
  await client.getContent<ServicesSection>({
    contentType: 'ServicesSection',
    language: lang,
    includeRelatedContent: true,
  });

export const getContactSection = async (lang: Language): Promise<ContactSection> =>
  await client.getContent<ContactSection>({
    contentType: 'ContactSection',
    language: lang,
    includeRelatedContent: true,
  });

export const getHomeMeta = async (lang: Language): Promise<Meta> =>
  await client.getContent<Meta>({
    id: '6931a3f6a89fe07e8789dc3f',
    language: lang,
  });
