# 🎨 Stylo Design System

## Color Palette

### Primary Colors (The Morning Mood)

| Color | Hex | Usage | Psychology |
|-------|-----|-------|------------|
| **Peach** | `#FFD4B4` | Backgrounds, comfort zones | Safe, warm, calm |
| **Cream** | `#FFF8F0` | Cards, surfaces, light backgrounds | Gentle, clean |
| **Champagne** | `#F5E6D3` | Subtle accents, borders | Luxury, softness |

### Energy Colors (Call to Action)

| Color | Hex | Usage | Psychology |
|-------|-----|-------|------------|
| **Coral** | `#FF6B6B` | Buttons, actions, highlights | Energy, motivation, "tap me" |
| **Blush** | `#F4A9A8` | Secondary actions, cards | Softer energy |

### Freshness Colors (Clarity & Health)

| Color | Hex | Usage | Psychology |
|-------|-----|-------|------------|
| **Mint** | `#A8E6CF` | Success states, fresh elements | Clean, new, healthy |
| **Light Mint** | `#D4F1E8` | Subtle backgrounds | Very gentle freshness |

### Importance Colors (Highlights)

| Color | Hex | Usage | Psychology |
|-------|-----|-------|------------|
| **Soft Gold** | `#E6C542` | Important events, achievements, accents | Premium, highlight, importance |
| **Dark Gold** | `#D4AF37` | Hover states, emphasis | Richer emphasis |

### Text & Clarity Colors

| Color | Hex | Usage | Psychology |
|-------|-----|-------|------------|
| **Warm Charcoal** | `#5C5854` | Body text, readable content | Friendly, warm, readable |
| **Light Charcoal** | `#9A9590` | Secondary text, hints | Softer, less prominent |
| **White** | `#FFFFFF` | High contrast text, clean spaces | Clarity, cleanliness |

### Neutral & Contextual

| Color | Hex | Usage | Psychology |
|-------|-----|-------|------------|
| **Sand** | `#E8DCC4` | Chat bubbles (others), subtle backgrounds | Neutral, warm |
| **Beige** | `#EAE0D5` | Closet backgrounds, organized feel | Calming, organized |
| **Soft Grey** | `#E0DDD9` | Dividers, subtle borders | Gentle separation |

---

## Typography

### Font Family
- **Primary**: `Inter` or `Poppins` (modern, friendly)
- **Secondary**: `Georgia` or `Lora` (warm, elegant for headlines)

### Font Sizes & Weights

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| **H1 - Page Title** | 32px | 700 | 1.2 | Main screen titles |
| **H2 - Section Title** | 24px | 600 | 1.3 | Section headings |
| **H3 - Subsection** | 18px | 600 | 1.4 | Card titles, sub-headings |
| **Body - Large** | 16px | 400 | 1.6 | Main content, descriptions |
| **Body - Regular** | 14px | 400 | 1.6 | Standard text, chat |
| **Body - Small** | 12px | 400 | 1.5 | Hints, secondary info |
| **Button Text** | 14px | 600 | 1.4 | CTA buttons |
| **Label** | 12px | 500 | 1.4 | Input labels, tags |

### Text Colors
- **Primary text**: Warm Charcoal (`#5C5854`)
- **Secondary text**: Light Charcoal (`#9A9590`)
- **Accent text**: Coral (`#FF6B6B`) for CTAs
- **Success text**: Mint (`#A8E6CF`)

---

## Spacing System

### Base Unit: 8px

| Value | Pixels | Usage |
|-------|--------|-------|
| **xs** | 4px | Tight spacing, rarely used |
| **sm** | 8px | Padding in small elements |
| **md** | 16px | Standard padding, gaps |
| **lg** | 24px | Large gaps, section spacing |
| **xl** | 32px | Major section breaks |
| **2xl** | 48px | Page-level spacing |

### Common Patterns
- **Card padding**: 16px (md)
- **Button padding**: 12px vertical, 20px horizontal
- **Section margins**: 24px (lg) top & bottom
- **Element gaps**: 8px-16px (sm to md)

---

## Shadows

Stylo uses **soft, gentle shadows** to create depth without harshness.

| Name | CSS | Usage |
|------|-----|-------|
| **Light** | `0 1px 3px rgba(0, 0, 0, 0.08)` | Subtle elevation, cards |
| **Medium** | `0 4px 12px rgba(0, 0, 0, 0.12)` | Interactive elements |
| **Warm** | `0 4px 16px rgba(255, 107, 107, 0.15)` | Coral highlights |
| **Soft Gold** | `0 2px 8px rgba(230, 197, 66, 0.1)` | Gold accents |

---

## Border Radius

No sharp edges. Everything is warm and welcoming.

| Element | Border Radius | Usage |
|---------|---------------|-------|
| **Buttons** | 24px | Pill-shaped, rounded |
| **Cards** | 16px | Main content containers |
| **Inputs** | 12px | Form fields |
| **Small elements** | 8px | Chips, tags, badges |
| **Avatar** | 50% | Circular profile rings |

---

## Component Specifications

### Buttons

#### Primary Button (Coral)
```
Background: Coral (#FF6B6B)
Text: White
Padding: 12px 24px
Border-radius: 24px
Font-weight: 600
Font-size: 14px
Box-shadow: 0 4px 12px rgba(255, 107, 107, 0.2)

Hover: Darker coral (#FF5252)
Active: Even darker (#E85555)
Disabled: Light grey with opacity
```

#### Secondary Button (Cream/Peach)
```
Background: Cream (#FFF8F0) or Peach (#FFD4B4)
Text: Warm Charcoal (#5C5854)
Padding: 12px 24px
Border-radius: 24px
Font-weight: 600
Font-size: 14px
Border: 1px solid Champagne (#F5E6D3)

Hover: Champagne background
Active: Darker peach
```

#### Ghost Button (Text only)
```
Background: Transparent
Text: Coral (#FF6B6B)
Padding: 8px 16px
Font-weight: 500
Font-size: 14px

Hover: Light coral background
```

### Cards

```
Background: Cream (#FFF8F0) or Champagne (#F5E6D3)
Padding: 16px
Border-radius: 16px
Box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08)
Border: 1px solid rgba(245, 230, 211, 0.5)

Hover: Slight lift, enhanced shadow
Active: Peach tint
```

### Chat Bubbles

#### User Message
```
Background: Coral (#FF6B6B)
Text: White
Padding: 12px 16px
Border-radius: 16px (with corner at bottom-right)
Box-shadow: 0 2px 8px rgba(255, 107, 107, 0.15)
```

#### Other Message
```
Background: Sand (#E8DCC4)
Text: Warm Charcoal (#5C5854)
Padding: 12px 16px
Border-radius: 16px (with corner at bottom-left)
Box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08)
```

### Input Fields

```
Background: White (#FFFFFF)
Border: 1px solid Champagne (#F5E6D3)
Padding: 12px 16px
Border-radius: 12px
Font-size: 14px
Text color: Warm Charcoal (#5C5854)
Placeholder: Light Charcoal (#9A9590)

Focus: Border color changes to Coral, light coral background tint
Error: Border color changes to red
Success: Border color changes to Mint
```

### Chips / Tags

```
Background: Light Mint (#D4F1E8) or Champagne (#F5E6D3)
Text: Warm Charcoal (#5C5854)
Padding: 6px 12px
Border-radius: 8px
Font-size: 12px
Font-weight: 500

Active: Coral background, white text
```

### Avatar Ring

```
Background: Champagne (#F5E6D3)
Border: 3px solid Soft Gold (#E6C542)
Border-radius: 50%
Width/Height: 80px (adjustable)
Box-shadow: 0 4px 16px rgba(230, 197, 66, 0.2)
```

### Calendar Cells

```
Background (empty): Cream (#FFF8F0)
Background (with event): Peach (#FFD4B4)
Background (today): Soft Gold (#E6C542)
Text: Warm Charcoal (#5C5854)
Padding: 8px
Border-radius: 8px
Font-size: 14px

Event indicator: Small Coral dot or accent
```

---

## Animation & Motion

### Duration
- **Quick interactions**: 150ms (button taps)
- **Standard transitions**: 300ms (screen changes)
- **Gentle fades**: 400ms (loading states)

### Easing
- **Entrance**: `cubic-bezier(0.34, 1.56, 0.64, 1)` (bounce, welcoming)
- **Exit**: `cubic-bezier(0.6, 0, 0.4, 1)` (smooth)
- **Standard**: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (natural)

### Motion Examples
- Buttons: Scale 0.95 on press, 300ms
- Cards: Fade in 300ms from bottom
- Transitions: Coral underline slides on hover

---

## Accessibility

- **Contrast**: All text meets WCAG AA standards (4.5:1 minimum for body text)
- **Focus indicators**: Clear Coral outline on interactive elements
- **Motion**: Respect `prefers-reduced-motion`
- **Font sizes**: Minimum 12px for body text
- **Touch targets**: Minimum 44px × 44px

---

## Dark Mode (Future)

When dark mode is added:
- Reverse the brightness (dark backgrounds, light text)
- Keep warmth: dark peach/rust instead of light peach
- Maintain contrast ratios
- Use desaturated versions of core colors

---

## Usage Guidelines

1. **Peach/Cream/Champagne** → Use for 60% of screens (backgrounds, cards)
2. **Coral** → Use for 20% (CTAs, highlights, energy)
3. **Gold** → Use for 10% (important moments, achievements)
4. **Mint** → Use for 10% (success, health, freshness)

**Always ask**: "Would I want to see this when I first wake up?"
