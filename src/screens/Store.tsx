import React from 'react';
import { theme } from '@styles/theme';
import Card from '@components/Card';
import Button from '@components/Button';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  story: string;
  emoji: string;
}

const Store: React.FC = () => {
  const [products] = React.useState<Product[]>([
    { id: '1', name: 'Silk Slip Dress', brand: 'Luxe Essentials', price: '$180', story: 'Handcrafted elegance for your most special occasions', emoji: '👗' },
    { id: '2', name: 'Cashmere Wrap', brand: 'Pure Comfort', price: '$220', story: 'Envelop yourself in the finest materials', emoji: '🧣' },
    { id: '3', name: 'Leather Heels', brand: 'Timeless Steps', price: '$145', story: 'Walk with confidence in these Italian-made classics', emoji: '👠' },
    { id: '4', name: 'Linen Blazer', brand: 'Conscious Style', price: '$165', story: 'Sustainable luxury for the modern woman', emoji: '🧥' },
  ]);

  return (
    <div style={{ backgroundColor: theme.colors.softGold, minHeight: '100vh', padding: theme.spacing.lg, fontFamily: theme.typography.fontFamily.primary }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: theme.typography.fontSize.h2, fontWeight: theme.typography.fontWeight.bold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.xl }}>✨ Premium Boutique</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: theme.spacing.lg }}>
          {products.map((product) => (
            <Card key={product.id} hover style={{ backgroundColor: theme.colors.cream, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '100px', textAlign: 'center', marginBottom: theme.spacing.md }}>{product.emoji}</div>
              <h3 style={{ fontSize: theme.typography.fontSize.h3, fontWeight: theme.typography.fontWeight.semibold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.sm }}>{product.name}</h3>
              <p style={{ fontSize: theme.typography.fontSize.small, color: theme.colors.lightCharcoal, marginBottom: theme.spacing.md }}>{product.brand}</p>
              <p style={{ fontSize: theme.typography.fontSize.body, color: theme.colors.softGold, fontWeight: theme.typography.fontWeight.semibold, marginBottom: theme.spacing.md }}>{product.price}</p>
              <p style={{ fontSize: theme.typography.fontSize.small, color: theme.colors.lightCharcoal, lineHeight: theme.typography.lineHeight.normal, marginBottom: theme.spacing.md }}>{product.story}</p>
              <Button style={{ marginTop: 'auto', width: '100%' }}>Add to Cart</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;