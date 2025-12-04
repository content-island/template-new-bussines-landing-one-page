import client from '#lib/client.ts';
import type { ServicesSection } from './services.api-model';

export const getServicesSection = async (): Promise<ServicesSection> =>
  await client.getContent<ServicesSection>({
    contentType: 'ServicesSection',
    includeRelatedContent: true,
  });
