'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.3s ease, border-color 0.3s ease',
        background: scrolled || mobileOpen ? 'rgba(8,8,16,0.98)' : 'rgba(8,8,16,0.6)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: `1px solid ${scrolled || mobileOpen ? 'rgba(255,255,255,0.08)' : 'transparent'}`,
      }}
    >
      <style>{`
        .desktop-nav-links { display: none !important; }
        .desktop-nav-youtube { display: none !important; }
        .mobile-hamburger { display: flex !important; }
        @media (min-width: 1024px) {
          .desktop-nav-links { display: flex !important; }
          .desktop-nav-youtube { display: flex !important; }
          .mobile-hamburger { display: none !important; }
        }
      `}</style>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '1px', flexShrink: 0 }}>
            <span style={{ fontSize: '22px', fontWeight: 900, color: '#1A6BFF', letterSpacing: '-0.5px', lineHeight: 1 }}>Craft3r</span>
            <span style={{ fontSize: '22px', fontWeight: 900, color: '#FF6B1A', letterSpacing: '-0.5px', lineHeight: 1 }}>Br0s</span>
          </Link>

          {/* Desktop links */}
          <div className="desktop-nav-links" style={{ alignItems: 'center', gap: '32px' }}>
            {(['#home', '#videos', '#shop', '#about'] as const).map((href, i) => {
              const label = ['Home', 'Videos', 'Shop', 'About'][i];
              return (
                <a
                  key={href}
                  href={href}
                  style={{ color: '#8888aa', textDecoration: 'none', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#ffffff'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#8888aa'; }}
                >
                  {label}
                </a>
              );
            })}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* YouTube link (desktop only) */}
            <a
              href="https://www.youtube.com/@Craft3rBr0s"
              target="_blank"
              rel="noopener noreferrer"
              className="desktop-nav-youtube"
              style={{
                color: '#8888aa', textDecoration: 'none', fontSize: '14px', fontWeight: 500,
                padding: '8px 14px', borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'all 0.2s',
                alignItems: 'center', gap: '8px'
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = '#ff0000';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = '#8888aa';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>Subscribe</span>
            </a>

            {/* Shop CTA */}
            <a
              href="https://craft3rbr0s-shop.fourthwall.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(135deg, #FF6B1A, #ff8c4a)',
                color: '#fff',
                padding: '9px 18px',
                borderRadius: '9px',
                fontSize: '13px',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.2s',
                boxShadow: '0 4px 14px rgba(255,107,26,0.25)',
                whiteSpace: 'nowrap',
              }}
            >
              Shop
            </a>

            {/* Mobile hamburger - strictly hidden on desktop */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-hamburger"
              style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: '8px', zIndex: 101, alignItems: 'center' }}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                {mobileOpen ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
              </svg>
            </button>
          </div>
        </div>

        {/* Fullscreen Mobile Menu Overlay */}
        {mobileOpen && (
          <div style={{ position: 'fixed', inset: 0, top: '70px', background: '#080810', zIndex: 99, padding: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {(['#home', '#videos', '#shop', '#about'] as const).map((href, i) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  style={{ display: 'block', color: '#fff', textDecoration: 'none', padding: '16px 0', fontSize: '24px', fontWeight: 800, borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  {['Home', 'Videos', 'Shop', 'About'][i]}
                </a>
              ))}
              <a
                href="https://www.youtube.com/@Craft3rBr0s"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', color: '#ff4444', textDecoration: 'none', padding: '24px 0', fontSize: '18px', fontWeight: 600 }}
                onClick={() => setMobileOpen(false)}
              >
                YouTube Channel ↗
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

