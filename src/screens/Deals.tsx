import React from 'react';
import { theme } from '@styles/theme';
import Card from '@components/Card';
import Button from '@components/Button';

interface Deal {
  id: string;
  name: string;
  brand: string;
  price: string;
  reason: string;
  emoji: string;
}

const Deals: React.FC = () => {
  const [deals] = React.useState<Deal[]>([
    { id: '1', name: 'Silk Coral Blouse', brand: 'Ethique Basics', price: '$65', reason: 'Matches your style perfectly', emoji: '👗' },
    { id: '2', name: 'Mint Linen Shorts', brand: 'Summer Vibes', price: '$48', reason: 'You love this color', emoji: '🩳' },
    { id: '3', name: 'Gold Jewelry Set', brand: 'Luxe Accents', price: '$120', reason: 'Perfect for your upcoming date', emoji: '✨' },
    { id: '4', name: 'Cream Wool Sweater', brand: 'Cozy Knits', price: '$89', reason: 'Your favorite material', emoji: '🧶' },
  ]);

  return (
    <div style={{ backgroundColor: theme.colors.champagne, minHeight: '100vh', padding: theme.spacing.lg, fontFamily: theme.typography.fontFamily.primary }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: theme.typography.fontSize.h2, fontWeight: theme.typography.fontWeight.bold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.xl }}>🛍️ Smart Recommendations</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: theme.spacing.lg }}>
          {deals.map((deal) => (
            <Card key={deal.id} hover style={{ backgroundColor: theme.colors.cream, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '80px', textAlign: 'center', marginBottom: theme.spacing.md }}>{deal.emoji}</div>
              <h3 style={{ fontSize: theme.typography.fontSize.h3, fontWeight: theme.typography.fontWeight.semibold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.sm }}>{deal.name}</h3>
              <p style={{ fontSize: theme.typography.fontSize.small, color: theme.colors.lightCharcoal, marginBottom: theme.spacing.md }}>{deal.brand}</p>
              <p style={{ fontSize: theme.typography.fontSize.body, color: theme.colors.coral, fontWeight: theme.typography.fontWeight.semibold, marginBottom: theme.spacing.md }}>{deal.price}</p>
              <p style={{ fontSize: theme.typography.fontSize.small, color: theme.colors.lightCharcoal, marginBottom: theme.spacing.md }}>💡 {deal.reason}</p>
              <div style={{ display: 'flex', gap: theme.spacing.md, marginTop: 'auto' }}>
                <Button variant="primary" style={{ flex: 1 }}>View</Button>
                <Button variant="secondary" style={{ flex: 1 }}>Save</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;