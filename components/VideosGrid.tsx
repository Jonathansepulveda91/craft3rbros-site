'use client';

import { type MergedVideo } from '@/lib/types';
import { formatCount } from '@/lib/youtube';

interface VideosGridProps {
  videos: MergedVideo[];
  shorts: MergedVideo[];
  streams: MergedVideo[];
}

export default function VideosGrid({ videos, shorts, streams }: VideosGridProps) {
  const renderGridSection = (title: string, subtitle: string, items: MergedVideo[], isShorts: boolean) => (
    <div style={{ marginBottom: '80px' }}>
      <div style={{ marginBottom: '32px' }}>
        <p style={{ color: isShorts ? '#FF6B1A' : title === 'Live Streams' ? '#ff3e3e' : '#1A6BFF', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
          {subtitle}
        </p>
        <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#fff', letterSpacing: '-1px' }}>
          {title}
        </h2>
        <div style={{ width: '40px', height: '4px', background: isShorts ? '#FF6B1A' : title === 'Live Streams' ? '#ff3e3e' : '#1A6BFF', marginTop: '12px', borderRadius: '2px' }} />
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: isShorts 
          ? 'repeat(auto-fill, minmax(130px, 1fr))' 
          : 'repeat(auto-fill, minmax(160px, 1fr))', 
        gap: '16px' 
      }}>
        {items.map((video) => (
          <a 
            key={video.id} 
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', display: 'block' }}
          >
            <div style={{
              background: '#111122',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'all 0.3s ease',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
              (e.currentTarget as HTMLElement).style.borderColor = isShorts ? 'rgba(255,107,26,0.3)' : title === 'Live Streams' ? 'rgba(255,62,62,0.3)' : 'rgba(26,107,255,0.3)';
              (e.currentTarget as HTMLElement).style.boxShadow = isShorts ? '0 10px 30px rgba(255,107,26,0.1)' : title === 'Live Streams' ? '0 10px 30px rgba(255,62,62,0.1)' : '0 10px 30px rgba(26,107,255,0.1)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
            >
              <div style={{ position: 'relative', aspectRatio: isShorts ? '9/16' : '16/9', overflow: 'hidden' }}>
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {!isShorts && (
                  <div style={{
                    position: 'absolute', bottom: '8px', right: '8px',
                    background: 'rgba(0,0,0,0.85)', color: '#fff',
                    padding: '3px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: 700
                  }}>
                    {video.duration}
                  </div>
                )}
                <div style={{
                  position: 'absolute', top: '8px', left: '8px',
                  background: isShorts ? 'rgba(255,107,26,0.9)' : title === 'Live Streams' ? 'rgba(255,62,62,0.9)' : 'rgba(26,107,255,0.9)',
                  color: '#fff', padding: '3px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: 700
                }}>
                  {isShorts ? 'Short' : title === 'Live Streams' ? 'Stream' : video.category || 'Video'}
                </div>
              </div>
              <div style={{ padding: '12px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <h3 style={{ color: '#fff', fontSize: '13px', fontWeight: 700, marginBottom: '8px', lineHeight: 1.4 }}>
                  {video.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8888aa', fontSize: '11px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    👁 {formatCount(video.viewCount)}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    👍 {formatCount(video.likeCount)}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <section id="videos" style={{ padding: '80px 0', background: '#080810' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {videos.length > 0 && renderGridSection('Latest Videos', 'High-Octane Action', videos, false)}
        {streams.length > 0 && renderGridSection('Live Streams', 'Epic Broadcasts', streams, false)}
        {shorts.length > 0 && renderGridSection('YouTube Shorts', 'Fast Bites', shorts, true)}
      </div>
    </section>
  );
}
