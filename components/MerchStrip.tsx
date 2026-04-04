'use client';

export default function MerchStrip() {
  const storeUrl = 'https://craft3rbr0s-shop.fourthwall.com';

  const marqueeItems = [
    'OFFICIAL MERCH', 'GAMING HOODIES', 'CRAFT3RBR0S GEAR',
    'SHOP NOW', 'LIMITED DROPS', 'REPRESENT THE BRAND',
    'OFFICIAL MERCH', 'GAMING HOODIES', 'CRAFT3RBR0S GEAR',
    'SHOP NOW', 'LIMITED DROPS', 'REPRESENT THE BRAND',
  ];

  return (
    <section
      id="shop"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(180deg, #0d0d1a 0%, #080810 100%)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Subtle orange glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(255,107,26,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="md:grid">

          {/* Left: Copy */}
          <div>
            <p style={{ color: '#FF6B1A', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Official Store
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '20px' }}>
              Rep the<br />
              <span style={{ color: '#FF6B1A' }}>Craft3rBr0s</span><br />
              Brand
            </h2>
            <p style={{ color: '#8888aa', fontSize: '16px', lineHeight: 1.7, marginBottom: '32px', maxWidth: '420px' }}>
              Premium gaming apparel and accessories. Every purchase supports the channel directly. Built on Fourthwall — fast shipping, quality guaranteed.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href={storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: 'linear-gradient(135deg, #FF6B1A, #ff8c4a)',
                  color: '#fff', padding: '14px 28px', borderRadius: '12px',
                  fontSize: '15px', fontWeight: 700, textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(255,107,26,0.4)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(255,107,26,0.55)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(255,107,26,0.4)';
                }}
              >
                Shop Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
              <a
                href={storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  color: '#8888aa', padding: '14px 24px', borderRadius: '12px',
                  fontSize: '15px', fontWeight: 600, textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#fff';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#8888aa';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                View All Products
              </a>
            </div>
          </div>

          {/* Right: Store card */}
          <div style={{
            background: '#111122', borderRadius: '20px',
            border: '1px solid rgba(255,107,26,0.15)',
            padding: '40px 32px', textAlign: 'center',
            boxShadow: '0 0 60px rgba(255,107,26,0.06)',
          }}>
            <div style={{
              width: '80px', height: '80px', borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(255,107,26,0.2), rgba(255,107,26,0.05))',
              border: '1px solid rgba(255,107,26,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <h3 style={{ color: '#fff', fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>Craft3rBr0s Shop</h3>
            <p style={{ color: '#8888aa', fontSize: '14px', marginBottom: '24px', lineHeight: 1.6 }}>
              Hoodies, tees, accessories<br />and exclusive gaming gear
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', fontSize: '13px', color: '#555570', marginBottom: '24px' }}>
              <span>✓ Free shipping options</span>
              <span>✓ Premium quality</span>
            </div>
            <a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block', background: 'rgba(255,107,26,0.1)',
                border: '1px solid rgba(255,107,26,0.3)',
                color: '#FF6B1A', padding: '12px',
                borderRadius: '10px', fontSize: '14px',
                fontWeight: 700, textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,107,26,0.2)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,107,26,0.1)'; }}
            >
              craft3rbr0s-shop.fourthwall.com ↗
            </a>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div style={{ marginTop: '80px', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '14px 0' }}>
        <div
          className="animate-marquee"
          style={{ display: 'flex', gap: '0', whiteSpace: 'nowrap', width: 'max-content' }}
        >
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: i % 3 === 1 ? '#FF6B1A' : '#333350',
                padding: '0 28px',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
