import React from 'react';
import { theme } from '@styles/theme';
import Card from '@components/Card';
import Button from '@components/Button';

const Avatar: React.FC = () => {
  const [mood, setMood] = React.useState('calm');
  const moods = ['happy', 'calm', 'energized', 'neutral'];

  const moodEmojis = {
    happy: '😊',
    calm: '😌',
    energized: '😄',
    neutral: '😐',
  } as const;

  return (
    <div style={{ backgroundColor: theme.colors.champagne, minHeight: '100vh', padding: theme.spacing.lg, fontFamily: theme.typography.fontFamily.primary }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: theme.typography.fontSize.h2, fontWeight: theme.typography.fontWeight.bold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.xl }}>🪞 Your Morning Identity</h1>

        <Card style={{ backgroundColor: theme.colors.cream, marginBottom: theme.spacing.lg, textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: theme.spacing.lg }}>
            <div style={{ fontSize: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '150px', height: '150px', borderRadius: '50%', backgroundColor: theme.colors.softGold, border: `3px solid ${theme.colors.darkGold}` }}>
              {moodEmojis[mood as keyof typeof moodEmojis]}
            </div>
          </div>

          <h2 style={{ fontSize: theme.typography.fontSize.h3, fontWeight: theme.typography.fontWeight.semibold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.md }}>Today's Outfit</h2>
          <div style={{ fontSize: '80px', textAlign: 'center', marginBottom: theme.spacing.md }}>👗</div>

          <h3 style={{ fontSize: theme.typography.fontSize.body, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.md }}>Soft Coral Blazer + Cream Pants</h3>
        </Card>

        <Card style={{ backgroundColor: theme.colors.cream, marginBottom: theme.spacing.lg }}>
          <h2 style={{ fontSize: theme.typography.fontSize.h3, fontWeight: theme.typography.fontWeight.semibold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.md }}>How are you feeling?</h2>
          <div style={{ display: 'flex', gap: theme.spacing.md, flexWrap: 'wrap' }}>
            {moods.map((m) => (
              <button key={m} onClick={() => setMood(m)} style={{ padding: theme.spacing.md, borderRadius: theme.borderRadius.small, border: 'none', backgroundColor: mood === m ? theme.colors.coral : theme.colors.lightMint, color: theme.colors.warmCharcoal, fontWeight: theme.typography.fontWeight.semibold, cursor: 'pointer' }}>{m}</button>
            ))}
          </div>
        </Card>

        <Button style={{ width: '100%' }}>Confirm Outfit</Button>
      </div>
    </div>
  );
};

export default Avatar;