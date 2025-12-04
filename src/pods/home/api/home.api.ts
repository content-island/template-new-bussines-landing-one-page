import client from '#lib/client.ts';
import type { ContactSection, HeroSection, ServicesSection } from './home.api-model';

export const getContactSection = async (): Promise<ContactSection> =>
  await client.getContent<ContactSection>({
    contentType: 'ContactSection',
    includeRelatedContent: true,
  });

export const getHeroSection = async (): Promise<HeroSection> =>
  await client.getContent<HeroSection>({
    contentType: 'HeroSection',
    includeRelatedContent: true,
  });

export const getServicesSection = async (): Promise<ServicesSection> =>
  await client.getContent<ServicesSection>({
    contentType: 'ServicesSection',
    includeRelatedContent: true,
  });
