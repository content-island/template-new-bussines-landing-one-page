import type { Meta } from '#common/models';
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

export const getHomeMeta = async (): Promise<Meta> =>
  await client.getContent<Meta>({
    id: '6931a3f6a89fe07e8789dc3f',
  });
