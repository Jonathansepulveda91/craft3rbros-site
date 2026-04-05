import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'youtubeId',
      title: 'YouTube Video ID',
      type: 'string',
      description:
        'Paste the video ID from the YouTube URL. Example: for youtube.com/watch?v=dQw4w9WgXcQ the ID is "dQw4w9WgXcQ"',
      validation: (Rule) => Rule.required().min(5).max(20),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Hero Video',
      type: 'boolean',
      description: 'Only one video should be featured — it shows as the large embed on the homepage',
      initialValue: false,
    }),
    defineField({
      name: 'category',
      title: 'Category Tag',
      type: 'string',
      options: {
        list: [
          { title: 'Gaming', value: 'Gaming' },
          { title: 'Vlog', value: 'Vlog' },
          { title: 'Tutorial', value: 'Tutorial' },
          { title: 'Challenge', value: 'Challenge' },
          { title: 'Review', value: 'Review' },
          { title: 'Stream Highlights', value: 'Stream Highlights' },
          { title: 'Behind the Scenes', value: 'Behind the Scenes' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first. 0 = first position.',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      youtubeId: 'youtubeId',
      featured: 'featured',
      category: 'category',
    },
    prepare({ youtubeId, featured, category }: { youtubeId: string; featured: boolean; category?: string }) {
      return {
        title: `${featured ? '⭐ ' : ''}${youtubeId}`,
        subtitle: [featured && 'FEATURED HERO', category].filter(Boolean).join(' · '),
      };
    },
  },
});
