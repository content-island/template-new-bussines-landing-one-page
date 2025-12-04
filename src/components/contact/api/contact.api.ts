import client from '#lib/client.ts';
import type { ContactSection } from './contact.api-model';

export const getContactSection = async (): Promise<ContactSection> =>
  await client.getContent<ContactSection>({
    contentType: 'ContactSection',
    includeRelatedContent: true,
  });
