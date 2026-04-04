'use client';

import { type MergedVideo } from '@/lib/types';
import { formatCount } from '@/lib/youtube';

interface HeroProps {
  video: MergedVideo | null;
}

export default function Hero({ video }: HeroProps) {
  const youtubeChannelUrl = 'https://www.youtube.com/@Craft3rBr0s';

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '70px',
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(26,107,255,0.15) 0%, transparent 70%), #080810',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 24px', width: '100%', position: 'relative' }}>
        {/* Headline */}
        <div className="animate-fade-in-up" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(26,107,255,0.12)', border: '1px solid rgba(26,107,255,0.25)',
            borderRadius: '100px', padding: '6px 16px', marginBottom: '24px',
            fontSize: '13px', fontWeight: 600, color: '#1A6BFF', letterSpacing: '0.05em',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1A6BFF', display: 'inline-block', animation: 'pulse-glow 2s infinite' }} />
            LIVE ON YOUTUBE
          </div>

          <h1 style={{ fontSize: 'clamp(52px, 8vw, 96px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-3px', marginBottom: '20px' }}>
            <span style={{ color: '#1A6BFF' }}>Craft3r</span>
            <span style={{ color: '#FF6B1A' }}>Br0s</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', color: '#8888aa', maxWidth: '520px', margin: '0 auto', lineHeight: 1.6, fontWeight: 400 }}>
            Epic gaming content, epic adventures. New videos every week — subscribe and never miss a drop.
          </p>
        </div>

        {/* Video embed or placeholder */}
        <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
          {video ? (
            <div style={{ position: 'relative' }}>
              {/* Glow effect */}
              <div style={{
                position: 'absolute', inset: '-2px', borderRadius: '18px',
                background: 'linear-gradient(135deg, #1A6BFF40, #FF6B1A40)',
                filter: 'blur(16px)', zIndex: 0,
              }} />
              <div style={{
                position: 'relative', zIndex: 1,
                borderRadius: '16px', overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
                aspectRatio: '16/9',
              }}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&color=white`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                />
              </div>

              {/* Video meta below embed */}
              <div style={{ marginTop: '20px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                <div>
                  <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '6px', lineHeight: 1.3 }}>
                    {video.title}
                  </h2>
                  <div style={{ display: 'flex', gap: '20px', color: '#8888aa', fontSize: '14px' }}>
                    <span>👁 {formatCount(video.viewCount)} views</span>
                    <span>👍 {formatCount(video.likeCount)}</span>
                    <span>⏱ {video.duration}</span>
                  </div>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    background: '#FF0000', color: '#fff',
                    padding: '10px 20px', borderRadius: '10px',
                    fontSize: '14px', fontWeight: 700, textDecoration: 'none',
                    whiteSpace: 'nowrap', transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#cc0000'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#FF0000'; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Watch on YouTube
                </a>
              </div>
            </div>
          ) : (
            /* Placeholder when no videos added yet */
            <div style={{
              borderRadius: '16px', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              background: '#111122',
              aspectRatio: '16/9',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '20px',
            }}>
              <div style={{
                width: '72px', height: '72px', borderRadius: '50%',
                background: 'rgba(255,107,26,0.15)', border: '2px solid rgba(255,107,26,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#FF6B1A">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: '#8888aa', fontSize: '16px', marginBottom: '8px' }}>No featured video yet</p>
                <p style={{ color: '#555570', fontSize: '13px' }}>Add a video in Sanity Studio → set it as Featured</p>
              </div>
              <a
                href={youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#FF0000', color: '#fff',
                  padding: '12px 28px', borderRadius: '10px',
                  fontSize: '15px', fontWeight: 700, textDecoration: 'none',
                }}
              >
                Visit Our Channel
              </a>
            </div>
          )}
        </div>

        {/* Bottom CTA row */}
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
          <a
            href="#videos"
            style={{
              background: 'rgba(26,107,255,0.12)', border: '1px solid rgba(26,107,255,0.3)',
              color: '#1A6BFF', padding: '12px 28px', borderRadius: '10px',
              fontSize: '15px', fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(26,107,255,0.2)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(26,107,255,0.12)'; }}
          >
            Latest Videos ↓
          </a>
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'rgba(255,0,0,0.1)', border: '1px solid rgba(255,0,0,0.25)',
              color: '#ff4444', padding: '12px 28px', borderRadius: '10px',
              fontSize: '15px', fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,0,0,0.18)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,0,0,0.1)'; }}
          >
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
