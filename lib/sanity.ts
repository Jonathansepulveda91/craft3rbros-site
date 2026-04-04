import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

const isConfigured =
  Boolean(projectId) && projectId !== 'your-project-id-here';

export const client = createClient({
  projectId: isConfigured ? projectId! : 'placeholder',
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export interface SanityVideo {
  _id: string;
  youtubeId: string;
  featured: boolean;
  category?: string;
  order: number;
}

export async function getFeaturedVideos(): Promise<SanityVideo[]> {
  if (!isConfigured) return [];

  try {
    const query = `*[_type == "featuredVideo"] | order(featured desc, coalesce(order, 999) asc, _createdAt desc)`;
    const videos = await client.fetch<SanityVideo[]>(query, {}, { next: { revalidate: 60 } });
    return videos ?? [];
  } catch (error) {
    console.error('Sanity fetch error:', error);
    return [];
  }
}
