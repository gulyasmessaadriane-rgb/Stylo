import { colors } from './colors';

// Spacing system (8px base unit)
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
} as const;

// Shadows (soft, gentle)
export const shadows = {
  light: '0 1px 3px rgba(0, 0, 0, 0.08)',
  medium: '0 4px 12px rgba(0, 0, 0, 0.12)',
  warm: '0 4px 16px rgba(255, 107, 107, 0.15)',
  gold: '0 2px 8px rgba(230, 197, 66, 0.1)',
} as const;

// Border radius (no sharp edges)
export const borderRadius = {
  buttons: '24px',
  cards: '16px',
  inputs: '12px',
  small: '8px',
  full: '50%',
} as const;

// Typography
export const typography = {
  fontFamily: {
    primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    secondary: '"Georgia", "Lora", serif',
  },
  fontSize: {
    h1: '32px',
    h2: '24px',
    h3: '18px',
    bodyLarge: '16px',
    body: '14px',
    small: '12px',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.6,
    relaxed: 1.8,
  },
} as const;

// Animation
export const animation = {
  quick: '150ms',
  standard: '300ms',
  slow: '400ms',
  easing: {
    entrance: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    exit: 'cubic-bezier(0.6, 0, 0.4, 1)',
    standard: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
} as const;

export const theme = {
  colors,
  spacing,
  shadows,
  borderRadius,
  typography,
  animation,
} as const;
