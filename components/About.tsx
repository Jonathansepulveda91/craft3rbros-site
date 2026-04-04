'use client';

import { type ChannelStats, formatCount } from '@/lib/youtube';

interface AboutProps {
  channelStats: ChannelStats | null;
}

const FALLBACK_STATS = [
  { label: 'Subscribers', value: '—', icon: '👥' },
  { label: 'Total Views', value: '—', icon: '👁' },
  { label: 'Videos', value: '—', icon: '🎬' },
];

export default function About({ channelStats }: AboutProps) {
  const stats = channelStats
    ? [
        { label: 'Subscribers', value: formatCount(channelStats.subscriberCount), icon: '👥' },
        { label: 'Total Views', value: formatCount(channelStats.viewCount), icon: '👁' },
        { label: 'Videos Published', value: formatCount(channelStats.videoCount), icon: '🎬' },
      ]
    : FALLBACK_STATS;

  return (
    <section
      id="about"
      style={{
        padding: '100px 24px',
        background: 'linear-gradient(180deg, #080810 0%, #0d0d1a 100%)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="md:grid">

          {/* Left: Bio */}
          <div>
            <p style={{ color: '#1A6BFF', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
              About the Channel
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '24px' }}>
              About<br />
              <span style={{ color: '#1A6BFF' }}>Craft3r</span>
              <span style={{ color: '#FF6B1A' }}>Br0s</span>
            </h2>

            <p style={{ color: '#8888aa', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
              Welcome to Craft3rBr0s — your ultimate destination for epic gaming content! We create entertaining gameplay, challenges, tutorials, and gaming experiences that keep you coming back for more.
            </p>
            <p style={{ color: '#8888aa', fontSize: '16px', lineHeight: 1.8, marginBottom: '32px' }}>
              Join our growing community of passionate gamers. New videos drop every week — subscribe so you never miss a moment.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://www.youtube.com/@Craft3rBr0s"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#FF0000', color: '#fff',
                  padding: '12px 24px', borderRadius: '10px',
                  fontSize: '14px', fontWeight: 700, textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#cc0000'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#FF0000'; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Subscribe on YouTube
              </a>
              <a
                href="mailto:Nathan@craft3rbr0s.com"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  color: '#8888aa', padding: '12px 24px', borderRadius: '10px',
                  fontSize: '14px', fontWeight: 600, textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#8888aa'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
              >
                ✉ Nathan@craft3rbr0s.com
              </a>
            </div>
          </div>

          {/* Right: Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: '#111122', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '16px', padding: '24px 28px',
                  display: 'flex', alignItems: 'center', gap: '20px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,107,255,0.25)';
                  (e.currentTarget as HTMLElement).style.background = '#131325';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLElement).style.background = '#111122';
                }}
              >
                <div style={{
                  width: '52px', height: '52px', borderRadius: '12px',
                  background: 'rgba(26,107,255,0.1)', border: '1px solid rgba(26,107,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '22px', flexShrink: 0,
                }}>
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: 900, color: '#1A6BFF', lineHeight: 1, letterSpacing: '-1px', marginBottom: '4px' }}>
                    {stat.value}
                  </div>
                  <div style={{ color: '#8888aa', fontSize: '14px', fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </div>
                {channelStats && (
                  <div style={{ marginLeft: 'auto', color: '#2a4a2a', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                    <span style={{ color: '#22c55e', fontSize: '11px', fontWeight: 600 }}>LIVE</span>
                  </div>
                )}
              </div>
            ))}

            {channelStats && (
              <p style={{ color: '#555570', fontSize: '12px', textAlign: 'center', marginTop: '4px' }}>
                Stats pulled live from YouTube API · updates hourly
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
