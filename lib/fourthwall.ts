export interface FourthwallProduct {
  id: number;
  title: string;
  price: string;
  image: string;
  url: string;
}

const SHOP_URL = 'https://craft3rbr0s-shop.fourthwall.com';

// Mock data to show when the shop is still private/loading
const MOCK_PRODUCTS: FourthwallProduct[] = [
  {
    id: 1,
    title: 'Craft3rBr0s Varsity Crewneck',
    price: '60.00',
    image: 'https://images.fourthwall.com/https://content.fourthwall.com/v1/shop/sh_01373a6a-299f-4b0c-99c9-5a5f1a6a299f/products/pr_01h6y6y6y6y6y6y6y6y6y6y6y6/variants/va_01h6y6y6y6y6y6y6y6y6y6y6y6/image.png?w=800&h=800&fit=crop',
    url: '/products/varsity-crewneck'
  },
  {
    id: 2,
    title: 'Official Gaming Hoodie',
    price: '45.00',
    image: 'https://images.fourthwall.com/https://content.fourthwall.com/v1/shop/sh_01373a6a-299f-4b0c-99c9-5a5f1a6a299f/products/pr_01h6y7y7y7y7y7y7y7y7y7y7y7/variants/va_01h6y7y7y7y7y7y7y7y7y7y7y7/image.png?w=800&h=800&fit=crop',
    url: '/products/gaming-hoodie'
  },
  {
    id: 3,
    title: 'Legendary Sticker Pack',
    price: '12.00',
    image: 'https://images.fourthwall.com/https://content.fourthwall.com/v1/shop/sh_01373a6a-299f-4b0c-99c9-5a5f1a6a299f/products/pr_01h6y8y8y8y8y8y8y8y8y8y8y8/variants/va_01h6y8y8y8y8y8y8y8y8y8y8y8/image.png?w=800&h=800&fit=crop',
    url: '/products/stickers'
  }
];

export async function getFourthwallProducts(): Promise<FourthwallProduct[]> {
  try {
    const res = await fetch(`${SHOP_URL}/collections/all.json`, { 
      next: { revalidate: 3600 } 
    });
    
    if (!res.ok) {
      console.warn('Fourthwall shop is private or unreachable. Using mock data for preview.');
      return MOCK_PRODUCTS;
    }

    const data = await res.json();
    if (!data.products) return MOCK_PRODUCTS;

    return data.products.slice(0, 4).map((p: any) => ({
      id: p.id,
      title: p.title,
      price: p.variants?.[0]?.price || '0.00',
      image: p.images?.[0]?.src || '',
      url: `${SHOP_URL}/products/${p.handle}`
    }));
  } catch (err) {
    console.error('Error fetching Fourthwall products:', err);
    return MOCK_PRODUCTS;
  }
}
