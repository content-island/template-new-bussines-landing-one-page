import client from '#lib/client.ts';
import type { HeroSection } from './hero.api-model';

export const getHeroSection = async (): Promise<HeroSection> =>
  await client.getContent<HeroSection>({
    contentType: 'HeroSection',
    includeRelatedContent: true,
  });
