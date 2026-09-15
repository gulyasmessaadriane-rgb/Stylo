// 🎨 Stylo Color Palette

export const colors = {
  // Comfort Colors
  peach: '#FFD4B4',
  cream: '#FFF8F0',
  champagne: '#F5E6D3',

  // Energy Colors
  coral: '#FF6B6B',
  blush: '#F4A9A8',

  // Freshness Colors
  mint: '#A8E6CF',
  lightMint: '#D4F1E8',

  // Importance Colors
  softGold: '#E6C542',
  darkGold: '#D4AF37',

  // Text & Clarity Colors
  warmCharcoal: '#5C5854',
  lightCharcoal: '#9A9590',
  white: '#FFFFFF',

  // Neutral & Contextual
  sand: '#E8DCC4',
  beige: '#EAE0D5',
  softGrey: '#E0DDD9',
} as const;

export type ColorKey = keyof typeof colors;
