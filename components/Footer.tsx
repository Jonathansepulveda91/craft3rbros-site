'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: '#060610',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '48px 24px 32px',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px', flexWrap: 'wrap', gap: '32px' }}>

          {/* Logo & tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1px', marginBottom: '10px' }}>
              <span style={{ fontSize: '22px', fontWeight: 900, color: '#1A6BFF', letterSpacing: '-0.5px' }}>Craft3r</span>
              <span style={{ fontSize: '22px', fontWeight: 900, color: '#FF6B1A', letterSpacing: '-0.5px' }}>Br0s</span>
            </div>
            <p style={{ color: '#555570', fontSize: '14px', maxWidth: '220px', lineHeight: 1.6 }}>
              Epic gaming content, epic adventures.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ color: '#8888aa', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>Content</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="#videos" style={{ color: '#555570', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#555570'; }}>
                  Videos
                </a>
                <a href="https://www.youtube.com/@Craft3rBr0s" target="_blank" rel="noopener noreferrer"
                  style={{ color: '#555570', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#ff4444'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#555570'; }}>
                  YouTube ↗
                </a>
              </div>
            </div>
            <div>
              <p style={{ color: '#8888aa', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>Store</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="https://craft3rbr0s-shop.fourthwall.com" target="_blank" rel="noopener noreferrer"
                  style={{ color: '#555570', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FF6B1A'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#555570'; }}>
                  Shop ↗
                </a>
                <a href="https://craft3rbr0s-shop.fourthwall.com" target="_blank" rel="noopener noreferrer"
                  style={{ color: '#555570', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FF6B1A'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#555570'; }}>
                  Merch
                </a>
              </div>
            </div>
            <div>
              <p style={{ color: '#8888aa', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>Contact</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="mailto:Nathan@craft3rbr0s.com"
                  style={{ color: '#555570', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#1A6BFF'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#555570'; }}>
                  Nathan@craft3rbr0s.com
                </a>
                <a href="#about" style={{ color: '#555570', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#555570'; }}>
                  About
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ color: '#333350', fontSize: '13px' }}>
            © {year} Craft3rBr0s. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a
              href="https://www.youtube.com/@Craft3rBr0s"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#333350', transition: 'color 0.2s', display: 'flex' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#ff4444'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#333350'; }}
              aria-label="YouTube"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
