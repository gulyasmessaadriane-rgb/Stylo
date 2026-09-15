import React from 'react';
import { theme } from '@styles/theme';
import Button from '@components/Button';
import Card from '@components/Card';

const Stylist: React.FC = () => {
  const [mood, setMood] = React.useState('calm');
  const [weather, setWeather] = React.useState('mild');
  const [showSuggestion, setShowSuggestion] = React.useState(false);

  const moods = ['calm', 'energized', 'neutral', 'uncertain'];
  const weathers = ['sunny', 'rainy', 'cold', 'mild', 'hot'];

  return (
    <div style={{ backgroundColor: theme.colors.cream, minHeight: '100vh', padding: theme.spacing.lg, fontFamily: theme.typography.fontFamily.primary }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: theme.typography.fontSize.h2, fontWeight: theme.typography.fontWeight.bold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.xl }}>✨ Stylist</h1>

        <Card style={{ marginBottom: theme.spacing.lg }}>
          <h2 style={{ fontSize: theme.typography.fontSize.h3, fontWeight: theme.typography.fontWeight.semibold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.md }}>How are you feeling?</h2>
          <div style={{ display: 'flex', gap: theme.spacing.md, flexWrap: 'wrap' }}>
            {moods.map((m) => (
              <button key={m} onClick={() => setMood(m)} style={{ padding: theme.spacing.md, borderRadius: theme.borderRadius.small, border: 'none', backgroundColor: mood === m ? theme.colors.coral : theme.colors.champagne, color: theme.colors.warmCharcoal, fontWeight: theme.typography.fontWeight.semibold, cursor: 'pointer' }}>{m}</button>
            ))}
          </div>
        </Card>

        <Card style={{ marginBottom: theme.spacing.lg }}>
          <h2 style={{ fontSize: theme.typography.fontSize.h3, fontWeight: theme.typography.fontWeight.semibold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.md }}>What's the weather?</h2>
          <div style={{ display: 'flex', gap: theme.spacing.md, flexWrap: 'wrap' }}>
            {weathers.map((w) => (
              <button key={w} onClick={() => setWeather(w)} style={{ padding: theme.spacing.md, borderRadius: theme.borderRadius.small, border: 'none', backgroundColor: weather === w ? theme.colors.coral : theme.colors.champagne, color: theme.colors.warmCharcoal, fontWeight: theme.typography.fontWeight.semibold, cursor: 'pointer' }}>{w}</button>
            ))}
          </div>
        </Card>

        <Button onClick={() => setShowSuggestion(true)} style={{ width: '100%', marginBottom: theme.spacing.lg }}>Generate Outfit</Button>

        {showSuggestion && (
          <Card style={{ backgroundColor: theme.colors.peach, marginBottom: theme.spacing.lg }}>
            <h2 style={{ fontSize: theme.typography.fontSize.h3, fontWeight: theme.typography.fontWeight.semibold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.md }}>✅ Your Outfit</h2>
            <div style={{ fontSize: '80px', textAlign: 'center', marginBottom: theme.spacing.md }}>👗</div>
            <p style={{ fontSize: theme.typography.fontSize.body, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.md }}>Soft coral blazer + cream pants</p>
            <p style={{ fontSize: theme.typography.fontSize.small, color: theme.colors.lightCharcoal, marginBottom: theme.spacing.md }}>Perfect for a {mood} {weather} day. This combination feels warm and inviting while keeping you comfortable.</p>
            <div style={{ display: 'flex', gap: theme.spacing.md }}>
              <Button variant="primary" style={{ flex: 1 }}>Accept</Button>
              <Button variant="secondary" style={{ flex: 1 }}>Reject</Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Stylist;