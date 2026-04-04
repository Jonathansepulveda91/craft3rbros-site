import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Craft3rBr0s — Epic Gaming Content',
  description:
    'Join Craft3rBr0s for epic gaming videos, challenges, and highlights. Subscribe on YouTube and shop our official merch.',
  keywords: ['Craft3rBr0s', 'gaming', 'YouTube', 'gaming content', 'merch', 'gaming highlights'],
  openGraph: {
    title: 'Craft3rBr0s — Epic Gaming Content',
    description: 'Epic gaming content, epic adventures.',
    url: 'https://craft3rbr0s.com',
    siteName: 'Craft3rBr0s',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Craft3rBr0s',
    description: 'Epic gaming content, epic adventures.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
