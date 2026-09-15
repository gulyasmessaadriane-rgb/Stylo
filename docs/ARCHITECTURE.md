# 🏗️ Stylo Architecture

## Core Logic & Connections

The beauty of Stylo is how each section **feeds into and influences the others**. This is the "brain" of the app.

### Data Flow

```
Closet (data source)
   ↓
Calendar (context: what's happening)
   ↓
Weather (context: external conditions)
   ↓
Mood (user input: how they feel)
   ↓
Stylist (AI engine: combines all above)
   ↓
Avatar (visual reflection: shows the result)
   ↓
Home (display: user sees everything at once)
   ↓
Tracker (record: logs outfit + mood for tomorrow's AI learning)
```

### Detailed Connections

#### 1. **Home ↔ Everything**
- Aggregates data from Closet, Stylist, Calendar, Mood
- Quick navigation to any section
- Shows today's outfit, mood, upcoming events
- Reflects current state of the app

#### 2. **Stylist ← (Closet + Weather + Calendar + Mood)**
The Stylist is the **AI engine**. It:
- Reads your closet inventory
- Checks weather forecast
- Reads calendar events (formal meeting? casual? workout?)
- Considers current mood (confident? gentle? energetic?)
- Suggests the perfect outfit with explanation

**Example logic:**
```
If: Weekend + Good mood + No plans
Then: Suggest comfort wear (loungewear, soft colors)

If: Work meeting + Neutral mood + Cool weather
Then: Suggest professional outfit + layering

If: Date night + Excited mood + Specific calendar event
Then: Suggest outfit that matches the vibe
```

#### 3. **Avatar ← (Outfit + Mood)**
The Avatar shows:
- The suggested/chosen outfit on a virtual figure
- Mood expression (happy, calm, energized)
- Visual confirmation before committing to the outfit

#### 4. **Chat ← (Calendar + Tracker)**
Talk to:
- **AI Stylist**: Questions about outfit choices
- **Family**: Share mood, plans, daily updates
- Calendar events can be mentioned in chat

#### 5. **Tracker ← (Avatar + Mood + Outfit)**
Daily logging:
- What outfit did you choose?
- How did you feel?
- What habits did you track?
- Over time: patterns, trends, preferences

**Tracker feeds back into Stylist AI** for better future recommendations.

#### 6. **Sketch** (Creative outlet)
Connected to:
- Mood (sketch when inspired)
- Calendar (create mood boards for upcoming events)
- Avatar (sketch new style ideas)

#### 7. **Deals & Store** (Smart suggestions)
Connected to:
- Closet (recommend items you don't have)
- Tracker (suggest items based on your style)
- Calendar (suggest for upcoming events)

---

## App State Management

### Global State (Redux / Context API)

```typescript
{
  // User Profile
  user: {
    id: string
    name: string
    preferredWakeTime: string
  }
  
  // Closet Inventory
  closet: {
    items: ClothingItem[]
    outfits: Outfit[]
    favoriteItems: string[]
    categories: string[]
  }
  
  // Today's Context
  today: {
    mood: 'calm' | 'energized' | 'neutral' | 'uncertain'
    moodIntensity: 1-10
    moodNote?: string
    weather: {
      temp: number
      condition: string
      forecast: string[]
    }
    calendar: CalendarEvent[]
  }
  
  // AI State
  ai: {
    suggestedOutfit: Outfit | null
    suggestionExplanation: string
    confidence: number
  }
  
  // Tracking
  tracker: {
    dailyLogs: DailyLog[]
    habits: Habit[]
    mood_trend: number[]
    outfit_preferences: string[]
  }
  
  // Chat
  chat: {
    messages: Message[]
    conversationHistory: Conversation[]
  }
  
  // Creative
  sketch: {
    sketches: Sketch[]
    moodBoards: MoodBoard[]
  }
}
```

---

## Screen Architecture

### 1. Home (Morning Hub)
**Purpose**: First impression, one-glance overview

**Components**:
- Greeting (time-based: "Good morning", "Rise and shine")
- Today's outfit card (clickable → goes to Avatar)
- Today's mood summary
- Today's events (next 3)
- Quick action buttons: [Closet] [Stylist] [Calendar] [Tracker]
- Bottom nav: Home | Closet | Avatar | Chat | Sketch | Calendar | Tracker | Deals | Store

**Layout**:
```
╔════════════════════════╗
║  Good Morning, Sarah   ║  ← Greeting + time
║                        ║
║  🎀 Today's Outfit    ║  ← Card with visual
║  Soft coral blazer +   ║
║  cream pants           ║
│                        │
║  💭 Mood: Calm ★★★☆   ║  ← Quick mood indicator
│                        │
║  📅 Today's Events:    ║  ← Next 3 events
║  9am - Team Standup    ║
║  2pm - Lunch with Ali  ║
│                        │
║ [Stylist] [Closet]     ║  ← Quick nav buttons
║ [Calendar] [Tracker]   ║
╚════════════════════════╝
```

### 2. Closet
**Purpose**: Browse, organize, and manage clothing inventory

**Components**:
- Search/filter bar (by color, category, occasion)
- View toggle (grid, list, by outfit)
- Add new item button
- Clothing grid with images
- Item detail modal (see, edit, delete)

**Data per item**:
- Image
- Name / Description
- Color(s)
- Category (tops, bottoms, dresses, outerwear, shoes, etc.)
- Occasion tags (casual, formal, workout, date night)
- Condition (new, good, worn, retiring)
- Last worn date

**Layout**: Clean grid, lots of whitespace

### 3. Stylist
**Purpose**: Get AI outfit suggestions based on context

**Components**:
- Input form:
  - Mood selector (buttons or emoji)
  - Weather check (auto-populated)
  - Calendar events (auto-populated)
  - Custom notes
- [Generate Outfit] button
- Suggestion card:
  - Visual preview of outfit
  - Why was this suggested (explanation)
  - [Accept] [Reject] [Show Alternatives]
- Accepted outfit gets locked into Avatar & Home

**AI Logic**:
```
Consider:
1. Calendar (what type of day?)
2. Weather (what to layer?)
3. Mood (what colors/styles?)
4. Closet (what do they have?)
5. Tracker history (what worked before?)

Output:
- Outfit combination (top + bottom + accessories)
- Explanation (one sentence: "Perfect for a calm Friday in mild weather")
- Confidence score (70-99%)
- Alternatives if user rejects
```

### 4. Avatar
**Purpose**: Visual mirror and identity expression

**Components**:
- Virtual figure (simplified illustration)
- Dressed in today's outfit
- Mood expression (face, posture)
- Mood selector (to change facial expression)
- Outfit preview (swappable from Closet)
- [Confirm Outfit] button
- [Share] button (optional)

**Feel**: Like looking in a mirror with good lighting.

### 5. Chat
**Purpose**: Warm conversation space with AI or family

**Components**:
- Conversation list (top nav tabs or sidebar)
- Message thread
- Input field with send button
- Optional: File/mood/calendar attachments

**AI Stylist can**:
- Answer questions about outfit choices
- Suggest tweaks ("too formal?" "need more color?")
- Discuss mood and how it affects style

**Family can**:
- Share daily plans
- Ask advice
- Send encouragement

**Tone**: Warm, supportive, never pushy.

### 6. Sketch
**Purpose**: Creative outlet for style ideas and mood boards

**Components**:
- Blank canvas (digital whiteboard or Pinterest-like board)
- Drawing tools (optional)
- Mood board templates
- Pin items from closet
- Save/organize sketches by event or mood
- Gallery view

**Use cases**:
- Design new outfit combinations
- Create mood board for upcoming event
- Sketch style ideas
- Plan seasonal wardrobe

### 7. Calendar
**Purpose**: Plan and see the week/month ahead

**Components**:
- Calendar grid (week or month view)
- Event cells show:
  - Event title
  - Occasion type (meeting, workout, social, etc.)
  - Color coding
- [+ Add Event] button
- Click event → see associated outfit suggestion
- Integration with Stylist (outfit based on calendar)

**Feeling**: Calm, organized, not overwhelming.

### 8. Tracker
**Purpose**: Gentle habit and mood tracking, patterns over time

**Components**:
- Daily log entry:
  - Date
  - Mood rating (1-5 or emoji)
  - Outfit worn (photo)
  - Habits (checkboxes: exercise, good sleep, journaling, etc.)
  - Notes
- Charts/graphs (mood trend, favorite outfits, habit streaks)
- Insights ("You're happiest on Mondays", "Prefer coral on Thursdays")

**Tone**: Encouraging, never judgmental. No "you failed" messages.

### 9. Deals
**Purpose**: Smart recommendations for items you might love

**Components**:
- Recommendation cards:
  - Product image
  - Brand, price
  - Why recommended ("Matches your style", "Perfect for workouts")
  - [Save] [View] buttons
- Filter by: category, price, brand
- Saved items list

**Connection**: Uses Closet data + Tracker preferences + Calendar.

### 10. Store / Sponsor
**Purpose**: Premium, boutique-like shopping

**Components**:
- Featured collections
- Product cards (image, details, price)
- Brand stories
- [Add to Cart] buttons
- Checkout flow

**Feel**: Elegant, curated, not overwhelming.

---

## Navigation Structure

### Bottom Navigation (Mobile)
```
[Home] [Closet] [Avatar] [Chat] [Sketch]
[Calendar] [Tracker] [Deals] [Store]
```

**Or split into two rows:**
```
Primary: [Home] [Closet] [Avatar] [Chat] [Sketch]
Menu icon (≡) → More options: [Calendar] [Tracker] [Deals] [Store] [Settings]
```

### Desktop/Tablet
- Left sidebar with sections
- Or: Top navigation + tabs
- Always show main content in center

---

## Key Integrations

### Weather API
- Daily forecast
- Used by Stylist for layering suggestions
- Display in Home & Calendar

### Calendar API (Google Calendar, Apple Calendar)
- Sync user's events
- Categorize events (meeting, workout, social, personal)
- Stylist uses to suggest appropriate outfits

### AI/ML Engine
- Outfit recommendation algorithm
- Mood → style mapping
- Pattern detection from Tracker
- Could use: OpenAI, custom model, or rule-based

### Photo/Image Recognition
- User uploads clothing photos
- Auto-tags items (color, type, style)
- Outfit preview with user's actual items

### Social (Optional)
- Share mood + outfit with friends/family
- Family group chat
- Outfit inspiration sharing

---

## Data Models

### ClothingItem
```typescript
{
  id: string
  userId: string
  name: string
  description?: string
  image: ImageFile
  colors: string[]
  category: string // tops, bottoms, dresses, etc.
  occasions: string[] // casual, formal, workout
  condition: 'new' | 'good' | 'worn' | 'retiring'
  lastWorn?: Date
  favorite?: boolean
  notes?: string
  createdAt: Date
}
```

### Outfit
```typescript
{
  id: string
  userId: string
  name: string
  items: ClothingItem[]
  occasion?: string
  weatherSuitable: string[]
  moodMatch: string[]
  visual?: ImageFile // combined outfit preview
  rating?: 1-5 // user rating
  createdAt: Date
}
```

### DailyLog
```typescript
{
  id: string
  userId: string
  date: Date
  mood: 1-10 or emoji
  moodNote?: string
  outfitWorn?: Outfit
  habits: { [habitName]: boolean }
  notes?: string
  createdAt: Date
}
```

### CalendarEvent
```typescript
{
  id: string
  title: string
  date: Date
  time: string
  type: string // meeting, workout, social, personal
  suggestedOutfitId?: string
  notes?: string
}
```

---

## Future Enhancements

1. **AR Fit Preview**: Try clothes virtually
2. **Social**: Share outfits, get feedback
3. **Trends**: See what's trending in your circles
4. **Laundry Reminders**: Track when items need washing
5. **Budget Tracking**: Know spending on fashion
6. **Sustainability**: Track eco-friendly choices
7. **Style Quiz**: AI learns your preferences over time
8. **Collaborations**: Style advice from family/friends
9. **Wardrobe Audit**: Suggestions on what to keep/donate
10. **Travel Mode**: Pack suggestions for trips
