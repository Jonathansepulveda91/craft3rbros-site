'use client';

import Image from 'next/image';
import { type MergedVideo } from '@/lib/types';
import { formatCount } from '@/lib/youtube';

interface VideosGridProps {
  videos: MergedVideo[];
}

export default function VideosGrid({ videos }: VideosGridProps) {
  return (
    <section
      id="videos"
      style={{
        padding: '100px 24px',
        background: 'linear-gradient(180deg, #080810 0%, #0d0d1a 100%)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ color: '#1A6BFF', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              From Our Channel
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#fff', letterSpacing: '-1px', lineHeight: 1.1 }}>
              Latest Videos
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@Craft3rBr0s"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              color: '#8888aa', textDecoration: 'none', fontSize: '14px', fontWeight: 600,
              padding: '10px 18px', borderRadius: '9px',
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#8888aa'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
          >
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>

        {videos.length === 0 ? (
          /* Empty state */
          <div style={{
            border: '1px dashed rgba(255,255,255,0.12)', borderRadius: '16px',
            padding: '64px 32px', textAlign: 'center',
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎮</div>
            <p style={{ color: '#8888aa', fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>No videos yet</p>
            <p style={{ color: '#555570', fontSize: '14px', maxWidth: '360px', margin: '0 auto' }}>
              Head to <strong style={{ color: '#1A6BFF' }}>/studio</strong> and add your first video. Paste in the YouTube video ID and it will appear here automatically.
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {videos.map((video) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div
                  style={{
                    borderRadius: '14px', overflow: 'hidden',
                    background: '#111122', border: '1px solid rgba(255,255,255,0.07)',
                    transition: 'all 0.25s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(26,107,255,0.2)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,107,255,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                  }}
                >
                  {/* Thumbnail */}
                  <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.06)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
                    />

                    {/* Duration badge */}
                    <div style={{
                      position: 'absolute', bottom: '10px', right: '10px',
                      background: 'rgba(0,0,0,0.85)', color: '#fff',
                      padding: '3px 8px', borderRadius: '5px', fontSize: '12px', fontWeight: 600,
                      backdropFilter: 'blur(4px)',
                    }}>
                      {video.duration}
                    </div>

                    {/* Category badge */}
                    {video.category && (
                      <div style={{
                        position: 'absolute', top: '10px', left: '10px',
                        background: 'rgba(26,107,255,0.9)', color: '#fff',
                        padding: '3px 10px', borderRadius: '5px', fontSize: '12px', fontWeight: 600,
                        backdropFilter: 'blur(4px)',
                      }}>
                        {video.category}
                      </div>
                    )}

                    {/* Play overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'rgba(0,0,0,0)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'background 0.2s',
                      opacity: 0,
                    }}
                      className="play-overlay"
                    />
                  </div>

                  {/* Info */}
                  <div style={{ padding: '16px' }}>
                    <h3 style={{
                      color: '#fff', fontSize: '15px', fontWeight: 600,
                      lineHeight: 1.4, marginBottom: '10px',
                      display: '-webkit-box', WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical', overflow: 'hidden',
                    }}>
                      {video.title}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#8888aa', fontSize: '13px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        {formatCount(video.viewCount)}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
                          <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                        </svg>
                        {formatCount(video.likeCount)}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
