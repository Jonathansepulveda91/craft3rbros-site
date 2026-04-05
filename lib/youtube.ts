const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = 'UC5h6vKjymrYGmGIOqhGkoCA';

export interface YoutubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  viewCount: string;
  likeCount: string;
  commentCount: string;
  duration: string;
  publishedAt: string;
  channelTitle: string;
  isShort: boolean;
  category?: string;
}

export interface ChannelStats {
  subscriberCount: string;
  viewCount: string;
  videoCount: string;
}

export async function getVideoDetails(ids: string[]): Promise<YoutubeVideo[]> {
  if (!API_KEY || ids.length === 0) return [];
  const url = `${BASE_URL}/videos?part=snippet,statistics,contentDetails&id=${ids.join(',')}&key=${API_KEY}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    if (!data.items) return [];

    return data.items.map((item: any): YoutubeVideo => {
      const durationRaw = item.contentDetails?.duration ?? 'PT0S';
      const isShort = !durationRaw.includes('M') && !durationRaw.includes('H');
      return {
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description ?? '',
        thumbnail: item.snippet.thumbnails?.maxres?.url ?? item.snippet.thumbnails?.high?.url ?? `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`,
        viewCount: item.statistics?.viewCount ?? '0',
        likeCount: item.statistics?.likeCount ?? '0',
        commentCount: item.statistics?.commentCount ?? '0',
        duration: parseDuration(durationRaw),
        publishedAt: item.snippet.publishedAt,
        channelTitle: item.snippet.channelTitle,
        isShort,
      };
    });
  } catch (error) {
    console.error('Error fetching YouTube details:', error);
    return [];
  }
}

export async function getPopularContent(limit = 12): Promise<{ videos: YoutubeVideo[], shorts: YoutubeVideo[] }> {
  if (!API_KEY) return { videos: [], shorts: [] };
  const url = `${BASE_URL}/search?part=id&channelId=${CHANNEL_ID}&maxResults=50&order=viewCount&type=video&key=${API_KEY}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return { videos: [], shorts: [] };
    const data = await res.json();
    const ids = data.items?.map((i: any) => i.id.videoId).filter(Boolean) || [];
    const all = await getVideoDetails(ids);
    return {
      videos: all.filter(v => !v.isShort).slice(0, limit),
      shorts: all.filter(v => v.isShort).slice(0, limit),
    };
  } catch (error) {
    return { videos: [], shorts: [] };
  }
}

export async function getLiveStreams(limit = 8): Promise<YoutubeVideo[]> {
  if (!API_KEY) return [];
  const url = `${BASE_URL}/search?part=id&channelId=${CHANNEL_ID}&maxResults=50&order=viewCount&type=video&eventType=completed&key=${API_KEY}`;
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    const ids = data.items?.map((i: any) => i.id.videoId).filter(Boolean) || [];
    const details = await getVideoDetails(ids);
    return details.map(v => ({ ...v, category: 'Stream' }));
  } catch (error) { return []; }
}


export async function getChannelStats(): Promise<ChannelStats | null> {
  if (!API_KEY) return null;
  const url = `${BASE_URL}/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`;
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();
    const s = data.items?.[0]?.statistics;
    if (!s) return null;
    return { subscriberCount: s.subscriberCount, viewCount: s.viewCount, videoCount: s.videoCount };
  } catch (error) { return null; }
}

function parseDuration(d: string): string {
  const m = d.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return '0:00';
  const h = m[1], min = m[2] || '0', s = m[3] || '0';
  if (h) return `${h}:${min.padStart(2, '0')}:${s.padStart(2, '0')}`;
  return `${min}:${s.padStart(2, '0')}`;
}

export function formatCount(c: string): string {
  const n = parseInt(c, 10);
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return c;
}
