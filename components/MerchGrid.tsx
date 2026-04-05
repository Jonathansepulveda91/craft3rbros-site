'use client';

import { type FourthwallProduct } from '@/lib/fourthwall';

interface MerchGridProps {
  products: FourthwallProduct[];
}

export default function MerchGrid({ products }: MerchGridProps) {
  const shopUrl = 'https://craft3rbr0s-shop.fourthwall.com';

  return (
    <section id="merch-feed" style={{ padding: '60px 0', background: '#080810' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
        <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginBottom: '32px', textAlign: 'center' }}>
          Trending <span style={{ color: '#FF6B1A' }}>Official Merch</span> 🛒
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', 
          gap: '24px',
          paddingBottom: '40px' 
        }}>
          {products.map((product) => (
            <a 
              key={product.id}
              href={product.url.startsWith('http') ? product.url : `${shopUrl}${product.url}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,107,26,0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-10px)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,107,26,0.4)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(255,107,26,0.1)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,107,26,0.1)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden', background: '#111122' }}>
                <img 
                  src={product.image} 
                  alt={product.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>
                  {product.title}
                </h4>
                <p style={{ color: '#FF6B1A', fontSize: '20px', fontWeight: 800 }}>
                  ${product.price}
                </p>
                <div style={{ 
                  marginTop: '16px', 
                  padding: '10px', 
                  borderRadius: '10px', 
                  background: 'rgba(255,107,26,0.1)', 
                  border: '1px solid rgba(255,107,26,0.2)',
                  color: '#FF6B1A',
                  fontSize: '14px',
                  fontWeight: 700
                }}>
                  View on Shop ↗
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
