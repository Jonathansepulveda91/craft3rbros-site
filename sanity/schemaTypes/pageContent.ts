import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pageContent',
  title: 'Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'Craft3rBr0s',
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'text',
      initialValue: 'Epic gaming adventures & content. Subscribe and join the community.',
    }),
    defineField({
      name: 'aboutTitle',
      title: 'About Title',
      type: 'string',
      initialValue: 'About Craft3rBr0s',
    }),
    defineField({
      name: 'aboutBioPrimary',
      title: 'Bio (Main Paragraph)',
      type: 'text',
      initialValue: 'Welcome to Craft3rBr0s — your ultimate destination for epic gaming content! We create entertaining gameplay, challenges, tutorials, and gaming experiences that keep you coming back for more.',
    }),
    defineField({
      name: 'aboutBioSecondary',
      title: 'Bio (Secondary Paragraph)',
      type: 'text',
      initialValue: 'Join our growing community of passionate gamers. New videos drop every week — subscribe so you never miss a moment.',
    }),
    defineField({
      name: 'footerTagline',
      title: 'Footer Tagline',
      type: 'string',
      initialValue: 'Epic gaming content, epic adventures.',
    }),
  ],
});
