const API_KEY = process.env.YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const CHANNEL_HANDLE = '@Craft3rBr0s';

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
}

export interface ChannelStats {
  subscriberCount: string;
  viewCount: string;
  videoCount: string;
  channelTitle: string;
}

export async function getVideoDetails(videoIds: string[]): Promise<YoutubeVideo[]> {
  if (!API_KEY || videoIds.length === 0) return [];

  const ids = videoIds.join(',');
  const url = `${BASE_URL}/videos?part=snippet,statistics,contentDetails&id=${ids}&key=${API_KEY}`;

  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) {
      console.error(`YouTube API error: ${res.status} ${res.statusText}`);
      return [];
    }
    const data = await res.json();
    if (!data.items) return [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.items.map((item: any): YoutubeVideo => ({
      id: item.id,
      title: item.snippet.title,
      description: item.snippet.description ?? '',
      thumbnail:
        item.snippet.thumbnails?.maxres?.url ??
        item.snippet.thumbnails?.high?.url ??
        item.snippet.thumbnails?.medium?.url ??
        `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`,
      viewCount: item.statistics?.viewCount ?? '0',
      likeCount: item.statistics?.likeCount ?? '0',
      commentCount: item.statistics?.commentCount ?? '0',
      duration: parseDuration(item.contentDetails?.duration ?? 'PT0S'),
      publishedAt: item.snippet.publishedAt,
      channelTitle: item.snippet.channelTitle,
    }));
  } catch (error) {
    console.error('Error fetching YouTube video details:', error);
    return [];
  }
}

export async function getChannelStats(): Promise<ChannelStats | null> {
  if (!API_KEY) return null;

  const url = `${BASE_URL}/channels?part=statistics,snippet&forHandle=${CHANNEL_HANDLE}&key=${API_KEY}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } }); // cache 1 hr
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.items?.length) return null;

    const ch = data.items[0];
    return {
      subscriberCount: ch.statistics?.subscriberCount ?? '0',
      viewCount: ch.statistics?.viewCount ?? '0',
      videoCount: ch.statistics?.videoCount ?? '0',
      channelTitle: ch.snippet?.title ?? 'Craft3rBr0s',
    };
  } catch (error) {
    console.error('Error fetching YouTube channel stats:', error);
    return null;
  }
}

const CHANNEL_ID = 'UC5h6vKjymrYGmGIOqhGkoCA'; // Your real channel ID from the earlier debug check

export async function getMostPopularVideos(limit: number = 6): Promise<YoutubeVideo[]> {
  if (!API_KEY) return [];

  // 1. Search for most popular videos in the channel
  const url = `${BASE_URL}/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${limit}&order=viewCount&type=video&key=${API_KEY}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    if (!data.items?.length) return [];

    const videoIds = data.items.map((item: any) => item.id.videoId);
    return getVideoDetails(videoIds);
  } catch (error) {
    console.error('Error fetching popular videos:', error);
    return [];
  }
}

export function formatCount(count: string): string {
  const num = parseInt(count, 10);
  if (isNaN(num)) return '0';
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  return num.toLocaleString();
}

function parseDuration(duration: string): string {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return '0:00';
  const h = parseInt(match[1] ?? '0');
  const m = parseInt(match[2] ?? '0');
  const s = parseInt(match[3] ?? '0');
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  return `${m}:${String(s).padStart(2, '0')}`;
}

