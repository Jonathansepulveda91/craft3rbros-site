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

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px', position: 'relative' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>

          {/* Left: Copy */}
          <div style={{ flex: '1 1 420px' }}>
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
            flex: '1 1 360px',
            background: '#111122', borderRadius: '24px',
            border: '1px solid rgba(255,107,26,0.15)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 32px 64px rgba(0,0,0,0.4)',
            transition: 'all 0.3s ease',
          }}>
            {/* Shop Background Image */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
              backgroundImage: `linear-gradient(to bottom, rgba(8,8,16,0.2) 0%, rgba(8,8,16,0.9) 80%), url('https://imgproxy.fourthwall.com/R9J7me9Vkge4fLClLJshItJ1KNjlvv-g40Gw6satu-8/w:1920/sm:1/enc/W75q-onZw4zDC8Tl/ubRWgXbH5wivfeZM/S9eIUxffz_5WiiA-/DD4Ivf54YVhEL2hB/h1f_6kkKoNZqcXta/JPrU1CK--adkIwTB/jh2dnzCGSQbTtaTb/3qGn-eijhBmuJqXf/02yRP_WdA9sKfkYG/QCBRwsNqj3Np2Dim/3_LK1BUNh8fYlHgF/rIlUguokxhF8M6pt/XqabRPOP_KR5WUDh/Q2AWNnFmUFdJ6hf_/cAyHKfe0PlWQXIql/gMuMJ8kf4UfqUUN2')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.6,
              zIndex: 0,
            }} />

            <div style={{ position: 'relative', zIndex: 1, padding: '60px 32px' }}>
              <div style={{
                width: '64px', height: '64px', borderRadius: '16px',
                background: 'rgba(255,107,26,1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px',
                boxShadow: '0 8px 16px rgba(255,107,26,0.5)',
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              
              <h3 style={{ color: '#fff', fontSize: '26px', fontWeight: 900, marginBottom: '10px', letterSpacing: '-0.5px' }}>Craft3rBr0s Shop</h3>
              <p style={{ color: '#ffffffcc', fontSize: '15px', marginBottom: '28px', lineHeight: 1.6, fontWeight: 500 }}>
                Hoodies, tees, accessories<br />
                <span style={{ color: '#FF6B1A' }}>and exclusive gaming gear</span>
              </p>
              
              <div style={{ 
                display: 'flex', gap: '16px', justifyContent: 'center', 
                fontSize: '13px', color: '#fff', fontWeight: 600, 
                marginBottom: '32px' 
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="3" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Free shipping options
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="3" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Premium quality
                </span>
              </div>
              
              <a
                href={storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block', 
                  background: 'rgba(255,255,255,1)',
                  color: '#080810', 
                  padding: '14px 30px',
                  borderRadius: '12px', 
                  fontSize: '14px',
                  fontWeight: 800, 
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                }}
                onMouseEnter={(e) => { 
                  (e.currentTarget as HTMLElement).style.background = '#FF6B1A'; 
                  (e.currentTarget as HTMLElement).style.color = '#fff';
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => { 
                  (e.currentTarget as HTMLElement).style.background = '#fff'; 
                  (e.currentTarget as HTMLElement).style.color = '#080810';
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                }}
              >
                craft3rbr0s-shop.fourthwall.com ↗
              </a>
            </div>
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
