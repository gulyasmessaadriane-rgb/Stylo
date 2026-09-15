import React from 'react';
import { theme } from '@styles/theme';
import Card from '@components/Card';

interface DailyLog {
  date: string;
  mood: number;
  outfit: string;
  habits: string[];
}

const Tracker: React.FC = () => {
  const [logs] = React.useState<DailyLog[]>([
    { date: 'Today', mood: 8, outfit: 'Soft coral blazer', habits: ['exercise', 'journaled'] },
    { date: 'Yesterday', mood: 7, outfit: 'Cream pants', habits: ['exercise', 'good sleep'] },
    { date: '2 days ago', mood: 9, outfit: 'Gold dress', habits: ['exercise', 'journaled', 'good sleep'] },
  ]);

  return (
    <div style={{ backgroundColor: theme.colors.cream, minHeight: '100vh', padding: theme.spacing.lg, fontFamily: theme.typography.fontFamily.primary }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: theme.typography.fontSize.h2, fontWeight: theme.typography.fontWeight.bold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.lg }}>📊 Tracker</h1>

        <Card style={{ marginBottom: theme.spacing.xl, backgroundColor: theme.colors.peach }}>
          <h2 style={{ fontSize: theme.typography.fontSize.h3, fontWeight: theme.typography.fontWeight.semibold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.md }}>✨ Your Mood This Week</h2>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '150px', gap: theme.spacing.md, padding: `${theme.spacing.md} 0` }}>
            {[7, 6, 8, 9, 7].map((mood, i) => (
              <div key={i} style={{ flex: 1, backgroundColor: theme.colors.coral, height: `${(mood / 10) * 100}%`, borderRadius: theme.borderRadius.small }} />
            ))}
          </div>
        </Card>

        <h2 style={{ fontSize: theme.typography.fontSize.h3, fontWeight: theme.typography.fontWeight.semibold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.lg }}>Daily Logs</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
          {logs.map((log, i) => (
            <Card key={i} style={{ backgroundColor: theme.colors.champagne }}>
              <h3 style={{ fontSize: theme.typography.fontSize.body, fontWeight: theme.typography.fontWeight.semibold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.sm }}>{log.date}</h3>
              <p style={{ fontSize: theme.typography.fontSize.small, color: theme.colors.lightCharcoal, marginBottom: theme.spacing.sm }}>Mood: {'😊'.repeat(log.mood / 2)}</p>
              <p style={{ fontSize: theme.typography.fontSize.small, color: theme.colors.lightCharcoal, marginBottom: theme.spacing.sm }}>Outfit: {log.outfit}</p>
              <div style={{ display: 'flex', gap: theme.spacing.sm, flexWrap: 'wrap' }}>
                {log.habits.map((habit) => (
                  <div key={habit} style={{ padding: `4px ${theme.spacing.sm}`, backgroundColor: theme.colors.lightMint, borderRadius: theme.borderRadius.small, fontSize: theme.typography.fontSize.small, color: theme.colors.warmCharcoal }}>✓ {habit}</div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracker;