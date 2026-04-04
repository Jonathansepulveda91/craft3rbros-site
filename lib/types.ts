import { type YoutubeVideo } from './youtube';

export interface MergedVideo extends YoutubeVideo {
  featured: boolean;
  category?: string;
  order: number;
}
