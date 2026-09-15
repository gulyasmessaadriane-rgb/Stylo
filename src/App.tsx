import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { theme } from '@styles/theme';
import Home from '@screens/Home';
import Closet from '@screens/Closet';
import Stylist from '@screens/Stylist';
import Avatar from '@screens/Avatar';
import Chat from '@screens/Chat';
import Sketch from '@screens/Sketch';
import Calendar from '@screens/Calendar';
import Tracker from '@screens/Tracker';
import Deals from '@screens/Deals';
import Store from '@screens/Store';

const App: React.FC = () => {
  const navItems = [
    { label: '🏠 Home', path: '/' },
    { label: '🧥 Closet', path: '/closet' },
    { label: '✨ Stylist', path: '/stylist' },
    { label: '🎭 Avatar', path: '/avatar' },
    { label: '💬 Chat', path: '/chat' },
    { label: '🎨 Sketch', path: '/sketch' },
    { label: '📅 Calendar', path: '/calendar' },
    { label: '📊 Tracker', path: '/tracker' },
    { label: '🛍️ Deals', path: '/deals' },
    { label: '⭐ Store', path: '/store' },
  ];

  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', fontFamily: theme.typography.fontFamily.primary }}>
        {/* Sidebar Navigation */}
        <nav
          style={{
            width: '250px',
            backgroundColor: theme.colors.peach,
            padding: theme.spacing.lg,
            overflowY: 'auto',
            borderRight: `1px solid ${theme.colors.champagne}`,
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing.md,
          }}
        >
          <h2
            style={{
              fontSize: theme.typography.fontSize.h3,
              fontWeight: theme.typography.fontWeight.bold,
              color: theme.colors.warmCharcoal,
              marginBottom: theme.spacing.lg,
            }}
          >
            ✨ Stylo
          </h2>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                padding: `${theme.spacing.md} ${theme.spacing.md}`,
                borderRadius: theme.borderRadius.cards,
                backgroundColor: theme.colors.cream,
                color: theme.colors.warmCharcoal,
                textDecoration: 'none',
                fontWeight: theme.typography.fontWeight.semibold,
                fontSize: theme.typography.fontSize.body,
                transition: `all ${theme.animation.standard}`,
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = theme.colors.coral;
                el.style.color = theme.colors.white;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = theme.colors.cream;
                el.style.color = theme.colors.warmCharcoal;
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            backgroundColor: theme.colors.cream,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/closet" element={<Closet />} />
            <Route path="/stylist" element={<Stylist />} />
            <Route path="/avatar" element={<Avatar />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/sketch" element={<Sketch />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;