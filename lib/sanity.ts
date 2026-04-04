import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
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
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'your-project-id-here') {
    return [];
  }
  
  try {
    const query = `*[_type == "featuredVideo"] | order(featured desc, coalesce(order, 999) asc, _createdAt desc)`;
    const videos = await client.fetch<SanityVideo[]>(query, {}, { next: { revalidate: 60 } });
    return videos ?? [];
  } catch (error) {
    console.error('Sanity fetch error:', error);
    return [];
  }
}
