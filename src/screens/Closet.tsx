import React from 'react';
import { theme } from '@styles/theme';
import Card from '@components/Card';

interface ClothingItem {
  id: string;
  name: string;
  image: string;
  colors: string[];
  category: string;
  occasions: string[];
  lastWorn?: Date;
  favorite?: boolean;
}

const Closet: React.FC = () => {
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [searchQuery, setSearchQuery] = React.useState('');

  const mockItems: ClothingItem[] = [
    {
      id: '1',
      name: 'Soft Coral Blazer',
      image: '🧥',
      colors: ['coral'],
      category: 'outerwear',
      occasions: ['work', 'formal'],
      favorite: true,
    },
    {
      id: '2',
      name: 'Cream Pants',
      image: '👖',
      colors: ['cream'],
      category: 'bottoms',
      occasions: ['work', 'casual'],
    },
    {
      id: '3',
      name: 'Mint Cardigan',
      image: '🧶',
      colors: ['mint'],
      category: 'tops',
      occasions: ['casual', 'cozy'],
    },
    {
      id: '4',
      name: 'Gold Accent Dress',
      image: '👗',
      colors: ['gold', 'cream'],
      category: 'dresses',
      occasions: ['formal', 'date'],
      favorite: true,
    },
  ];

  const categories = ['all', 'tops', 'bottoms', 'dresses', 'outerwear', 'shoes'];
  const filteredItems = mockItems.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: theme.colors.beige, minHeight: '100vh', padding: theme.spacing.lg, fontFamily: theme.typography.fontFamily.primary }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: theme.typography.fontSize.h2, fontWeight: theme.typography.fontWeight.bold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.xl }}>🧥 My Closet</h1>
        
        <Card style={{ marginBottom: theme.spacing.lg, backgroundColor: theme.colors.cream }}>
          <input type="text" placeholder="🔍 Search by name or color..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ width: '100%', padding: theme.spacing.md, border: `1px solid ${theme.colors.champagne}`, borderRadius: theme.borderRadius.inputs, fontSize: theme.typography.fontSize.body, fontFamily: theme.typography.fontFamily.primary, boxSizing: 'border-box' }} />
        </Card>

        <div style={{ display: 'flex', gap: theme.spacing.md, marginBottom: theme.spacing.lg, flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setSelectedCategory(cat)} style={{ padding: `${theme.spacing.sm} ${theme.spacing.md}`, borderRadius: theme.borderRadius.small, border: 'none', backgroundColor: selectedCategory === cat ? theme.colors.coral : theme.colors.cream, color: selectedCategory === cat ? theme.colors.white : theme.colors.warmCharcoal, fontWeight: theme.typography.fontWeight.semibold, cursor: 'pointer', transition: `all ${theme.animation.standard}` }}>{
              cat.charAt(0).toUpperCase() + cat.slice(1)
            }</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: theme.spacing.lg }}>
          {filteredItems.map((item) => (
            <Card key={item.id} hover style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer', backgroundColor: theme.colors.cream }}>
              <div style={{ fontSize: '60px', textAlign: 'center', marginBottom: theme.spacing.md }}>{item.image}</div>
              <h3 style={{ fontSize: theme.typography.fontSize.h3, fontWeight: theme.typography.fontWeight.semibold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.sm }}>{item.name} {item.favorite && '⭐'}</h3>
              <p style={{ fontSize: theme.typography.fontSize.small, color: theme.colors.lightCharcoal }}>{item.occasions.join(', ')}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Closet;