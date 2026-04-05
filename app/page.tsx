import { getFeaturedVideos, type SanityVideo } from '@/lib/sanity';
import { getVideoDetails, getChannelStats, getMostPopularVideos, type ChannelStats, type YoutubeVideo } from '@/lib/youtube';
import { getFourthwallProducts, type FourthwallProduct } from '@/lib/fourthwall';
import { type MergedVideo } from '@/lib/types';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import VideosGrid from '@/components/VideosGrid';
import MerchStrip from '@/components/MerchStrip';
import MerchGrid from '@/components/MerchGrid';
import About from '@/components/About';
import DiscordBar from '@/components/DiscordBar';
import Footer from '@/components/Footer';

// Revalidate page every 60 seconds for near-real-time YouTube stats
export const revalidate = 60;

export default async function Home() {
  // Fetch Sanity video list + channel stats + popular videos + merch in parallel
  const [sanityResult, statsResult, popularResult, merchResult] = await Promise.allSettled([
    getFeaturedVideos(),
    getChannelStats(),
    getMostPopularVideos(9),
    getFourthwallProducts(),
  ]);

  const sanityVideos: SanityVideo[] =
    sanityResult.status === 'fulfilled' ? sanityResult.value : [];
  const channelStats: ChannelStats | null =
    statsResult.status === 'fulfilled' ? statsResult.value : null;
  const popularYtVideos: YoutubeVideo[] =
    popularResult.status === 'fulfilled' ? popularResult.value : [];
  const merchProducts: FourthwallProduct[] =
    merchResult.status === 'fulfilled' ? merchResult.value : [];

  // 1. Fetch real-time data for Sanity IDs
  const sanityIds = sanityVideos.map((v) => v.youtubeId);
  const ytDetailsForSanity = await getVideoDetails(sanityIds);

  // 2. Map Sanity videos to MergedVideo type
  const mappedSanity = sanityVideos.map((sv) => {
    const yt = ytDetailsForSanity.find((y) => y.id === sv.youtubeId);
    if (!yt) return null;
    const merged: MergedVideo = {
      ...yt,
      featured: sv.featured ?? false,
      category: sv.category,
      order: sv.order ?? 0,
    };
    return merged;
  });
  const mergedFromSanity: MergedVideo[] = (mappedSanity as (MergedVideo | null)[]).filter((v): v is MergedVideo => v !== null);

  // 3. Combine with Popular Videos (avoiding duplicates)
  const popularToMerge: MergedVideo[] = popularYtVideos
    .filter((pyt) => !mergedFromSanity.some((ms) => ms.id === pyt.id))
    .map((pyt) => ({
      ...pyt,
      featured: false,
      category: 'Popular',
      order: 999,
    }));

  const allMerged = [...mergedFromSanity, ...popularToMerge];

  // 4. Split into Featured (Sanity prioritized) and Grid
  const featuredVideo = allMerged.find((v) => v.featured) ?? allMerged[0] ?? null;
  const gridVideos = allMerged.filter((v) => v.id !== featuredVideo?.id).slice(0, 9);

  return (
    <main style={{ background: '#080810', minHeight: '100vh' }}>
      <Navigation />
      <Hero video={featuredVideo} />
      <VideosGrid videos={gridVideos} />
      <MerchStrip />
      <MerchGrid products={merchProducts} />
      <About channelStats={channelStats} />
      <DiscordBar />
      <Footer />
    </main>
  );
}

