import { getFeaturedVideos, type SanityVideo } from '@/lib/sanity';
import { getVideoDetails, getChannelStats, type ChannelStats } from '@/lib/youtube';
import { type MergedVideo } from '@/lib/types';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import VideosGrid from '@/components/VideosGrid';
import MerchStrip from '@/components/MerchStrip';
import About from '@/components/About';
import DiscordBar from '@/components/DiscordBar';
import Footer from '@/components/Footer';

// Revalidate page every 60 seconds for near-real-time YouTube stats
export const revalidate = 60;

export default async function Home() {
  // Fetch Sanity video list + channel stats in parallel
  const [sanityResult, statsResult] = await Promise.allSettled([
    getFeaturedVideos(),
    getChannelStats(),
  ]);

  const sanityVideos: SanityVideo[] =
    sanityResult.status === 'fulfilled' ? sanityResult.value : [];
  const channelStats: ChannelStats | null =
    statsResult.status === 'fulfilled' ? statsResult.value : null;

  // Fetch real-time YouTube data for all video IDs from Sanity
  let mergedVideos: MergedVideo[] = [];
  if (sanityVideos.length > 0) {
    const videoIds = sanityVideos.map((v) => v.youtubeId);
    const ytVideos = await getVideoDetails(videoIds);

    const mapped = sanityVideos
      .map((sv) => {
        const yt = ytVideos.find((y) => y.id === sv.youtubeId);
        if (!yt) return null;
        const merged: MergedVideo = {
          ...yt,
          featured: sv.featured ?? false,
          category: sv.category,
          order: sv.order ?? 0,
        };
        return merged;
      });
    mergedVideos = mapped.filter((v): v is MergedVideo => v !== null);
  }

  const featuredVideo = mergedVideos.find((v) => v.featured) ?? mergedVideos[0] ?? null;
  const gridVideos = mergedVideos.filter((v) => v !== featuredVideo);

  return (
    <main style={{ background: '#080810', minHeight: '100vh' }}>
      <Navigation />
      <Hero video={featuredVideo} />
      <VideosGrid videos={gridVideos} />
      <MerchStrip />
      <About channelStats={channelStats} />
      <DiscordBar />
      <Footer />
    </main>
  );
}
