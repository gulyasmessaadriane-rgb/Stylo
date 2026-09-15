import React from 'react';
import { theme } from '@styles/theme';
import Card from '@components/Card';
import Button from '@components/Button';

const Sketch: React.FC = () => {
  const [sketches, setSketches] = React.useState([
    { id: '1', title: 'Weekend Casual', emoji: '🎨', date: 'Today' },
    { id: '2', title: 'Date Night Vibes', emoji: '💕', date: 'Yesterday' },
    { id: '3', title: 'Work Week Looks', emoji: '💼', date: '2 days ago' },
  ]);

  return (
    <div style={{ backgroundColor: theme.colors.white, minHeight: '100vh', padding: theme.spacing.lg, fontFamily: theme.typography.fontFamily.primary }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: theme.typography.fontSize.h2, fontWeight: theme.typography.fontWeight.bold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.lg }}>🎨 Sketch & Mood Boards</h1>

        <Button style={{ marginBottom: theme.spacing.xl }}> + Create New Sketch</Button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: theme.spacing.lg }}>
          {sketches.map((sketch) => (
            <Card key={sketch.id} hover style={{ backgroundColor: theme.colors.cream, textAlign: 'center', cursor: 'pointer' }}>
              <div style={{ fontSize: '80px', marginBottom: theme.spacing.md }}>{sketch.emoji}</div>
              <h3 style={{ fontSize: theme.typography.fontSize.h3, fontWeight: theme.typography.fontWeight.semibold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.sm }}>{sketch.title}</h3>
              <p style={{ fontSize: theme.typography.fontSize.small, color: theme.colors.lightCharcoal }}>{sketch.date}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sketch;