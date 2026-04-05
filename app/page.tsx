import { getFeaturedVideos, getPageContent, type SanityVideo, type PageContent } from '@/lib/sanity';
import { getVideoDetails, getChannelStats, getPopularContent, getLiveStreams, type ChannelStats, type YoutubeVideo } from '@/lib/youtube';
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

// Revalidate page every 60 seconds
export const revalidate = 60;

export default async function Home() {
  const [sanityResult, statsResult, popularResult, merchResult, pageResult, streamsResult] = await Promise.allSettled([
    getFeaturedVideos(),
    getChannelStats(),
    getPopularContent(12),
    getFourthwallProducts(),
    getPageContent(),
    getLiveStreams(6),
  ]);

  const sanityVideos: SanityVideo[] = sanityResult.status === 'fulfilled' ? sanityResult.value : [];
  const channelStats: ChannelStats | null = statsResult.status === 'fulfilled' ? statsResult.value : null;
  const popularData = popularResult.status === 'fulfilled' ? popularResult.value : { videos: [], shorts: [] };
  const merchProducts: FourthwallProduct[] = merchResult.status === 'fulfilled' ? merchResult.value : [];
  const pageContent: PageContent | null = pageResult.status === 'fulfilled' ? pageResult.value : null;
  const rawStreams: YoutubeVideo[] = streamsResult.status === 'fulfilled' ? streamsResult.value : [];

  const sanityIds = sanityVideos.map((v) => v.youtubeId);
  const ytDetailsForSanity = await getVideoDetails(sanityIds);

  const mergedFromSanity = sanityVideos.map((sv) => {
    const yt = ytDetailsForSanity.find((y) => y.id === sv.youtubeId);
    if (!yt) return null;
    return {
      ...yt,
      featured: sv.featured ?? false,
      category: sv.category,
      order: sv.order ?? 0,
    } as MergedVideo;
  }).filter((v): v is MergedVideo => v !== null);

  const mapToMerged = (v: YoutubeVideo): MergedVideo => ({
    ...v,
    featured: false,
    order: 999,
  });

  const allLongVideos = [...mergedFromSanity.filter(v => !v.isShort), ...popularData.videos.map(mapToMerged)]
    .filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);

  const allShorts = [...mergedFromSanity.filter(v => v.isShort), ...popularData.shorts.map(mapToMerged)]
    .filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);

  const allStreams = rawStreams.map(mapToMerged);

  const featuredVideo = allLongVideos.find((v) => v.featured) ?? allLongVideos[0] ?? null;
  const gridVideos = allLongVideos.filter((v) => v.id !== featuredVideo?.id).slice(0, 6);
  const gridShorts = allShorts.slice(0, 6);
  const gridStreams = allStreams.slice(0, 6);

  return (
    <main style={{ background: '#080810', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navigation />
      <Hero 
        video={featuredVideo} 
        headline={pageContent?.heroHeadline} 
        subtext={pageContent?.heroSubtext} 
      />
      <VideosGrid 
        videos={gridVideos} 
        shorts={gridShorts} 
        streams={gridStreams} 
      />
      <MerchStrip />
      <MerchGrid products={merchProducts} />
      <About 
        channelStats={channelStats} 
        title={pageContent?.aboutTitle}
        bio1={pageContent?.aboutBioPrimary}
        bio2={pageContent?.aboutBioSecondary}
      />
      <DiscordBar />
      <Footer tagline={pageContent?.footerTagline} />
    </main>
  );
}
