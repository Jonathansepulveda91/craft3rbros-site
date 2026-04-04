export default function DiscordBar() {
  return (
    <section
      style={{
        padding: '80px 24px',
        background: 'linear-gradient(135deg, rgba(88,101,242,0.08) 0%, rgba(26,107,255,0.05) 100%), #080810',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px', height: '200px',
        background: 'radial-gradient(ellipse, rgba(88,101,242,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        {/* Coming soon badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(88,101,242,0.15)', border: '1px solid rgba(88,101,242,0.3)',
          borderRadius: '100px', padding: '6px 16px', marginBottom: '24px',
          fontSize: '12px', fontWeight: 700, color: '#818cf8', letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
          Discord — Coming Soon
        </div>

        {/* Heading */}
        <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, color: '#fff', letterSpacing: '-1px', marginBottom: '16px', lineHeight: 1.15 }}>
          Join the<br />
          <span style={{ color: '#818cf8' }}>Community</span>
        </h2>

        <p style={{ color: '#8888aa', fontSize: '16px', lineHeight: 1.7, marginBottom: '36px', maxWidth: '460px', margin: '0 auto 36px' }}>
          Our Discord server is coming soon. Follow the channel on YouTube to get notified the moment it drops — exclusive roles and perks for early members.
        </p>

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* Disabled Discord button */}
          <button
            disabled
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'rgba(88,101,242,0.15)', border: '1px solid rgba(88,101,242,0.2)',
              color: '#555570', padding: '14px 28px', borderRadius: '12px',
              fontSize: '15px', fontWeight: 700, cursor: 'not-allowed',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.4 }}>
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            Discord Server
            <span style={{
              background: 'rgba(255,255,255,0.08)', color: '#555570',
              fontSize: '11px', padding: '2px 8px', borderRadius: '100px', fontWeight: 700,
              letterSpacing: '0.05em',
            }}>
              SOON
            </span>
          </button>

          {/* YouTube notify */}
          <a
            href="https://www.youtube.com/@Craft3rBr0s"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: '#ff4444', padding: '14px 28px', borderRadius: '12px',
              fontSize: '15px', fontWeight: 700, textDecoration: 'none',
              border: '1px solid rgba(255,68,68,0.25)', transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,68,68,0.08)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            Get Notified on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
