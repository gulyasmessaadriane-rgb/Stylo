import React from 'react';
import { theme } from '@styles/theme';
import Card from '@components/Card';

interface Event {
  id: string;
  title: string;
  date: number;
  type: 'meeting' | 'workout' | 'social' | 'personal';
  suggestedOutfit?: string;
}

const Calendar: React.FC = () => {
  const [events] = React.useState<Event[]>([
    { id: '1', title: 'Team Standup', date: 15, type: 'meeting', suggestedOutfit: 'Professional blazer' },
    { id: '2', title: 'Lunch with Ali', date: 15, type: 'social' },
    { id: '3', title: 'Yoga Class', date: 16, type: 'workout' },
    { id: '4', title: 'Date Night', date: 17, type: 'social', suggestedOutfit: 'Gold dress' },
  ]);

  const typeColors = {
    meeting: theme.colors.coral,
    workout: theme.colors.lightMint,
    social: theme.colors.softGold,
    personal: theme.colors.peach,
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div style={{ backgroundColor: theme.colors.cream, minHeight: '100vh', padding: theme.spacing.lg, fontFamily: theme.typography.fontFamily.primary }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: theme.typography.fontSize.h2, fontWeight: theme.typography.fontWeight.bold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.xl }}>📅 September 2026</h1>

        <Card style={{ marginBottom: theme.spacing.xl }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: theme.spacing.md }}>
            {dayNames.map((day) => (
              <div key={day} style={{ textAlign: 'center', fontWeight: theme.typography.fontWeight.semibold, color: theme.colors.lightCharcoal, marginBottom: theme.spacing.md }}>{day}</div>
            ))}
            {days.map((day) => {
              const dayEvents = events.filter((e) => e.date === day);
              return (
                <div key={day} style={{
                  padding: theme.spacing.md,
                  backgroundColor: dayEvents.length > 0 ? theme.colors.peach : theme.colors.cream,
                  borderRadius: theme.borderRadius.cards,
                  textAlign: 'center',
                  border: day === 15 ? `2px solid ${theme.colors.softGold}` : 'none',
                }}>
                  <p style={{ fontWeight: theme.typography.fontWeight.semibold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.sm }}>{day}</p>
                  {dayEvents.map((e) => (
                    <div key={e.id} style={{ fontSize: '8px', backgroundColor: typeColors[e.type], padding: '2px 4px', borderRadius: '2px', color: theme.colors.white, marginBottom: '2px' }}>{e.title}</div>
                  ))}
                </div>
              );
            })}
          </div>
        </Card>

        <h2 style={{ fontSize: theme.typography.fontSize.h3, fontWeight: theme.typography.fontWeight.semibold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.lg }}>Upcoming Events</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
          {events.map((event) => (
            <Card key={event.id} style={{ backgroundColor: theme.colors.champagne }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <h3 style={{ fontSize: theme.typography.fontSize.body, fontWeight: theme.typography.fontWeight.semibold, color: theme.colors.warmCharcoal, marginBottom: theme.spacing.sm }}>{event.title}</h3>
                  <p style={{ fontSize: theme.typography.fontSize.small, color: theme.colors.lightCharcoal }}>Sept {event.date} • {event.type}</p>
                  {event.suggestedOutfit && <p style={{ fontSize: theme.typography.fontSize.small, color: theme.colors.coral, marginTop: theme.spacing.sm }}>Suggested: {event.suggestedOutfit}</p>}
                </div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: typeColors[event.type] }}></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;