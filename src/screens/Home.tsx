import React from 'react';
import Button from '@components/Button';
import Card from '@components/Card';
import { theme } from '@styles/theme';

const Home: React.FC = () => {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? '🌅 Good morning' : hour < 18 ? '🌤 Good afternoon' : '🌙 Good evening';

  return (
    <div
      style={{
        backgroundColor: theme.colors.cream,
        minHeight: '100vh',
        padding: theme.spacing.lg,
        fontFamily: theme.typography.fontFamily.primary,
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Greeting */}
        <h1
          style={{
            fontSize: theme.typography.fontSize.h2,
            fontWeight: theme.typography.fontWeight.bold,
            color: theme.colors.warmCharcoal,
            marginBottom: theme.spacing.md,
          }}
        >
          {greeting}, Sarah
        </h1>

        {/* Today's Outfit Card */}
        <Card>
          <h2
            style={{
              fontSize: theme.typography.fontSize.h3,
              fontWeight: theme.typography.fontWeight.semibold,
              color: theme.colors.warmCharcoal,
              marginBottom: theme.spacing.sm,
            }}
          >
            🎀 Today's Outfit
          </h2>
          <p
            style={{
              color: theme.colors.lightCharcoal,
              fontSize: theme.typography.fontSize.body,
              lineHeight: theme.typography.lineHeight.normal,
            }}
          >
            Soft coral blazer + cream pants
          </p>
        </Card>

        <div style={{ marginTop: theme.spacing.lg }}>
          {/* Mood Card */}
          <Card>
            <h2
              style={{
                fontSize: theme.typography.fontSize.h3,
                fontWeight: theme.typography.fontWeight.semibold,
                color: theme.colors.warmCharcoal,
                marginBottom: theme.spacing.sm,
              }}
            >
              💭 Mood
            </h2>
            <p
              style={{
                fontSize: theme.typography.fontSize.bodyLarge,
                color: theme.colors.coral,
                fontWeight: theme.typography.fontWeight.semibold,
              }}
            >
              Calm ★★★☆
            </p>
          </Card>
        </div>

        {/* Today's Events Card */}
        <div style={{ marginTop: theme.spacing.lg }}>
          <Card>
            <h2
              style={{
                fontSize: theme.typography.fontSize.h3,
                fontWeight: theme.typography.fontWeight.semibold,
                color: theme.colors.warmCharcoal,
                marginBottom: theme.spacing.md,
              }}
            >
              📅 Today's Events
            </h2>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}
            >
              <li
                style={{
                  paddingBottom: theme.spacing.sm,
                  color: theme.colors.warmCharcoal,
                  fontSize: theme.typography.fontSize.body,
                }}
              >
                9am - Team Standup
              </li>
              <li
                style={{
                  paddingBottom: theme.spacing.sm,
                  color: theme.colors.warmCharcoal,
                  fontSize: theme.typography.fontSize.body,
                }}
              >
                2pm - Lunch with Ali
              </li>
              <li
                style={{
                  color: theme.colors.warmCharcoal,
                  fontSize: theme.typography.fontSize.body,
                }}
              >
                5pm - Creative Workshop
              </li>
            </ul>
          </Card>
        </div>

        {/* Quick Action Buttons */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: theme.spacing.md,
            marginTop: theme.spacing.xl,
          }}
        >
          <Button variant="primary">👗 Stylist</Button>
          <Button variant="primary">🗂️ Closet</Button>
          <Button variant="secondary">📅 Calendar</Button>
          <Button variant="secondary">📊 Tracker</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
