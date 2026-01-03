# Heritage Cafe & Resto — Website Improvement Plan

## Project Overview

**Project Name:** Heritage Cafe & Resto Website Redesign  
**Location:** Dago Highland, Bandung  
**Date Created:** January 3, 2026  
**Objective:** Create a refined company-profile website that embodies the restaurant's unique positioning as a panoramic dining destination with Classic + Modern Fusion aesthetics, offering Contemporary Indonesian & Archipelago Cuisine in a warm, multi-purpose venue.

---

## Brand Positioning & Experience Pillars

### 🏔️ Pillar 1: Panorama — Nature Meets City Views
> Located in the lush, green Dago highland area, offering refreshing cool mountain air and an elevated vantage point. Visitors enjoy calming city views during the day and breathtaking city lights at night.

**Key Messages:**
- Elevated Dago location with panoramic views
- Cool, fresh highland atmosphere
- Day experience: Green hills, blue skies, calming vista
- Night experience: Sparkling city lights, romantic ambiance
- Perfect for unwinding, gathering, and creating memories

---

### 🏛️ Pillar 2: Warm & Aesthetic Interior — Classic + Modern Fusion
> The interior combines elegant classical details with clean modern elements, creating a timeless, cozy, and photogenic space.

**Key Messages:**
- Elegant classical details meet modern design
- Soft lighting and gentle ambient illumination
- Spacious, well-planned floor layout
- Instagram-worthy, photogenic corners
- Approachable casual-premium atmosphere
- Supports both intimate dining and group interactions

---

### 🎉 Pillar 3: Friendly, Lively & Multi-Purpose Atmosphere
> More than a dining destination — a gathering place for live music, community events, cultural moments, celebrations, and special family memories.

**Key Messages:**
- Warm and inclusive for all ages
- Regular live music nights
- Community and cultural gatherings
- Family celebrations and milestones
- Commercial venue for weddings and corporate events
- Bandung lifestyle hub

---

## Current State Analysis

### Existing Components
| Component | Status | Improvement Needed |
|-----------|--------|-------------------|
| `Navbar.tsx` | ✅ Exists | Minor — add scroll-based styling polish |
| `Hero.tsx` | ✅ Exists | **Major** — needs panorama focus, day/night variants |
| `About.tsx` | ✅ Exists | **Major** — reframe around 3 pillars |
| `Menu.tsx` | ✅ Exists | Medium — add Archipelago storytelling |
| `Events.tsx` | ✅ Exists | Medium — restructure for clarity |
| `Gallery.tsx` | ✅ Exists | **Major** — needs panorama/nature focus |
| `Contact.tsx` | ✅ Exists | Minor — polish form styling |
| `Footer.tsx` | ✅ Exists | Minor — cleaner, event CTA |

### Current Gaps
1. ❌ No panorama/view emphasis — the biggest differentiator is missing
2. ❌ No day vs night experience storytelling
3. ❌ Missing "Dining Moments" section for use-cases
4. ❌ No community/cultural event messaging
5. ❌ Gallery doesn't showcase views or nature
6. ❌ No Bandung lifestyle connection
7. ❌ No AI-enhanced experience

---

## Design Direction

### Visual Identity

**Primary Color Palette:**
```css
--forest-deep: #1f2d26      /* Dark charcoal-green for elegance */
--heritage-gold: #b8860b    /* Warm gold accent for premium feel */
--highland-green: #3f7d54   /* Fresh green reflecting Dago nature */
--cream-warm: #f6f4ef       /* Warm cream for backgrounds */
--sunset-amber: #d4a574     /* Warm accent for evening mood */
--night-blue: #1a2332       /* Deep blue for night sections */
```

**Mood Variants:**
- **Day Mode:** Light, airy, fresh greens, blue sky accents
- **Night Mode:** Warm amber, soft glow, city light sparkles

### Typography
- **Display:** Playfair Display — elegant, timeless serif
- **Body:** Lato — clean, friendly, readable
- **Accent:** Consider Cormorant Garamond for special quotes

### Design Principles
1. **Panoramic Thinking:** Let the view be the star — generous imagery, breathing room
2. **Warmth Over Cold Luxury:** Cozy, inviting, not sterile
3. **Day-Night Duality:** Show transformation from serene day to magical night
4. **Photogenic Moments:** Design sections that feel Instagram-worthy
5. **Bandung Soul:** Local culture, lifestyle, highland identity

---

## Section-by-Section Improvement Plan

---

### 1. HERO SECTION — The Grand Entrance

**Current Issues:**
- Uses generic restaurant image
- No panorama or view emphasis
- Tagline doesn't capture the location magic

**New Concept:**
A full-screen hero that immediately communicates the panoramic experience, with day/night visual variants.

**Requirements:**
- [ ] Full-bleed hero image showcasing Dago panorama
- [ ] Day/night image toggle or time-based auto-switch
- [ ] Subtle parallax effect on scroll
- [ ] New headline and tagline structure:

```
Pre-headline: "Elevated Dining in the Heart of Dago"

Headline: Heritage Cafe & Resto

Tagline: "Where Panoramic Views Meet Timeless Indonesian Cuisine"

Sub-copy: "Experience cool highland air, breathtaking city vistas, 
and the warmth of Archipelago flavors — from sunrise to city lights."
```

- [ ] Dual CTAs: "Explore Menu" + "Book Your Moment"
- [ ] Floating badge: "Open Today: 10am - 10pm"
- [ ] Scroll indicator with gentle animation

**Visual Composition:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│    [Background: Panoramic Dago view - day/night toggle]     │
│                                                             │
│              ──── Elevated Dining ────                      │
│                                                             │
│              HERITAGE CAFE & RESTO                          │
│                                                             │
│     Where Panoramic Views Meet Timeless Indonesian Cuisine  │
│                                                             │
│         [Explore Menu]    [Book Your Moment]                │
│                                                             │
│                    ↓ Scroll                                 │
└─────────────────────────────────────────────────────────────┘
```

**Image Requirements:**
- [ ] High-res panoramic day view (green hills, blue sky, city below)
- [ ] High-res panoramic night view (city lights, warm interior glow)
- [ ] Images should include partial interior or terrace in foreground

---

### 2. ABOUT & CONCEPT — The Heritage Story

**Current Issues:**
- Focuses on generic "tradition meets elegance"
- Doesn't communicate the 3 pillars

**New Concept:**
A storytelling section that introduces all three experience pillars in an engaging, visual way.

**Structure:**

```
Section Title: "The Heritage Experience"
Subtitle: "More Than a Restaurant"

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [INTRO PARAGRAPH]                                          │
│  Nestled in the cool highlands of Dago, Heritage Cafe &     │
│  Resto offers more than exceptional dining — it's a         │
│  destination where panoramic views, timeless design, and    │
│  warm community spirit come together.                       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ 🏔️ PANORAMA │  │ 🏛️ AESTHETIC│  │ 🎉 ATMOSPHERE│         │
│  │             │  │             │  │             │         │
│  │ City views  │  │ Classic +   │  │ Live music, │         │
│  │ day & night │  │ Modern      │  │ community,  │         │
│  │ Dago cool   │  │ Photogenic  │  │ celebrations│         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [ARCHIPELAGO CUISINE BLOCK]                                │
│  Our kitchen celebrates Indonesia's 17,000 islands —        │
│  from authentic family recipes to modern creative plates.   │
│                                                             │
│  [Chef signature or kitchen image]                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Content Blocks:**

**Block 1: Panorama**
```
Title: "Elevated Views"
Copy: "Perched in Dago's green highlands, enjoy refreshing cool air 
and uninterrupted vistas. Watch the city awaken at breakfast, 
unwind at sunset, or fall in love with the sparkling lights below."
```

**Block 2: Aesthetic**
```
Title: "Timeless Design"
Copy: "Where classical elegance meets modern simplicity. Our 
thoughtfully designed space offers soft lighting, spacious layouts, 
and countless photogenic corners — effortlessly premium, never pretentious."
```

**Block 3: Atmosphere**
```
Title: "Gathering Place"
Copy: "More than meals — we host live music nights, cultural events, 
community gatherings, and celebrations that become cherished memories. 
A warm welcome awaits everyone, from families to friends to colleagues."
```

**Archipelago Cuisine Statement:**
```
Title: "Archipelago on a Plate"
Copy: "Our menu is a journey across Indonesia — from Padang's 
rich rendang to Bali's aromatic spices, reimagined with 
modern artistry while honoring ancestral wisdom."
```

**Implementation:**
- [ ] Create pillar cards with icons and hover effects
- [ ] Add high-quality image for each pillar
- [ ] Include chef's quote or kitchen glimpse
- [ ] Animate on scroll for engagement

---

### 3. SIGNATURE MENU HIGHLIGHTS — Archipelago Flavors

**Current State:**
Good category structure, but missing the regional storytelling.

**Improvements:**
- [ ] Add hero statement about Archipelago cuisine philosophy
- [ ] Include regional origin badges for each dish
- [ ] Redesign cards for better visual appeal
- [ ] Add "Chef's Current Favorite" or seasonal highlight
- [ ] Include dietary icons (V, GF, Spicy levels)
- [ ] Add "View Full Menu" PDF download

**Regional Badges:**
```
[JAVA] [SUMATRA] [BALI] [SULAWESI] [MODERN FUSION] [HERITAGE SIGNATURE]
```

**Section Copy:**
```
Section Title: "Taste the Archipelago"
Subtitle: "Signature Dishes from Across Indonesia"

Intro: "From the fiery heat of Padang to the gentle sweetness 
of Java, our menu celebrates the diverse flavors that make 
Indonesian cuisine extraordinary. Each dish honors tradition 
while embracing modern presentation."
```

**Menu Categories:**
1. Heritage Signatures — House specialties
2. Nusantara Journey — Regional authentic dishes
3. Modern Plates — Contemporary interpretations
4. Sweet Endings — Indonesian-inspired desserts

**Implementation:**
- [ ] Enhance `Menu.tsx` with regional badges
- [ ] Add origin tooltips on hover
- [ ] Include spice level indicators
- [ ] Create visual hierarchy for signatures

---

### 4. NEW: DINING MOMENTS & USE-CASES — Every Occasion

**Purpose:**
Show the venue's versatility for different dining occasions, making it easy for visitors to imagine themselves in each scenario.

**Moments to Feature:**

| Moment | Time | Description | Key Visual |
|--------|------|-------------|------------|
| **Highland Breakfast** | Morning | Start your day with fresh air and panoramic views | Sunlit terrace, coffee, plates |
| **Casual Lunch** | Afternoon | Business meetings or friendly catch-ups | Light, airy interior |
| **Romantic Dinner** | Evening | Candlelit tables with city lights backdrop | Couples, intimate setting |
| **Family Gathering** | All Day | Comfortable space for multi-generation meals | Large table, warmth |
| **Corporate Meeting** | All Day | Professional yet relaxed environment | Meeting setup, presentation |
| **Live Music Night** | Evening | Acoustic performances in intimate setting | Stage, audience, instruments |
| **Celebration** | All Day | Birthdays, anniversaries, milestones | Decoration, cake, joy |

**Design:**
```
┌─────────────────────────────────────────────────────────────┐
│           EVERY MOMENT, PERFECTLY HOSTED                    │
│     "From the first light of breakfast to the last note     │
│      of an evening performance — find your moment."         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   [Morning]     [Afternoon]     [Evening]     [Anytime]     │
│   ─────────     ───────────     ─────────     ─────────     │
│                                                             │
│   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐    │
│   │Breakfast│   │  Lunch  │   │ Dinner  │   │ Family  │    │
│   │ ☀️      │   │  ☕     │   │  🌙     │   │  👨‍👩‍👧‍👦    │    │
│   │ Sunrise │   │ Casual  │   │Romantic │   │Gathering│    │
│   │ views   │   │ meet-up │   │ lights  │   │ warmth  │    │
│   └─────────┘   └─────────┘   └─────────┘   └─────────┘    │
│                                                             │
│   ┌─────────┐   ┌─────────┐   ┌─────────┐                  │
│   │Meeting  │   │  Music  │   │Celebrate│                  │
│   │ 💼      │   │  🎸     │   │  🎉     │                  │
│   │Business │   │  Live   │   │Milestone│                  │
│   │ dining  │   │  night  │   │ moments │                  │
│   └─────────┘   └─────────┘   └─────────┘                  │
│                                                             │
│              [Plan Your Moment →]                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Implementation:**
- [ ] Create `DiningMoments.tsx` component
- [ ] Horizontal scroll on mobile, grid on desktop
- [ ] Each card links to reservation with pre-selected occasion
- [ ] Time-of-day filter tabs
- [ ] Hover reveals capacity and quick details
- [ ] Subtle entrance animations

**Card Structure:**
```tsx
{
  id: "romantic-dinner",
  title: "Romantic Dinner",
  timeOfDay: "evening",
  icon: "🌙",
  tagline: "City lights and candlelit tables",
  description: "An intimate evening with panoramic night views, 
               soft music, and flavors designed for two.",
  capacity: "2-4 guests",
  idealFor: ["Date night", "Anniversary", "Proposal"],
  image: "/images/moments/romantic-dinner.jpg"
}
```

---

### 5. EVENTS & VENUE BOOKINGS — Host Your Occasion

**Current Issues:**
- Basic event cards
- No clear booking pathway
- Missing community/cultural events

**New Concept:**
A comprehensive event section that showcases venue versatility and provides clear paths to inquiry.

**Event Categories:**

| Category | Events | Capacity Range |
|----------|--------|----------------|
| **Celebrations** | Weddings, Engagements, Anniversaries | 50-200 |
| **Corporate** | Meetings, Product Launches, Team Dinners | 20-100 |
| **Entertainment** | Live Music Nights, Acoustic Sessions | 80-150 |
| **Community** | Cultural Events, Art Exhibitions, Gatherings | 50-150 |
| **Private** | Birthdays, Family Reunions, Intimate Parties | 10-50 |

**Section Structure:**
```
┌─────────────────────────────────────────────────────────────┐
│              HOST YOUR OCCASION                             │
│     "From intimate celebrations to grand gatherings,        │
│      let Heritage be the backdrop to your story."           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   [Featured: Wedding / Large Event Card with Premium Image] │
│   "Say 'I Do' with panoramic views as your witness"         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌───────────┐  ┌───────────┐  ┌───────────┐              │
│   │ CORPORATE │  │LIVE MUSIC │  │ COMMUNITY │              │
│   │  EVENTS   │  │  NIGHTS   │  │  EVENTS   │              │
│   │ AV ready  │  │ Acoustic  │  │ Cultural  │              │
│   │ Catering  │  │ Intimate  │  │ Inclusive │              │
│   └───────────┘  └───────────┘  └───────────┘              │
│                                                             │
│   ┌───────────┐  ┌───────────┐                             │
│   │  PRIVATE  │  │BIRTHDAYS &│                             │
│   │  PARTIES  │  │MILESTONES │                             │
│   │ Flexible  │  │ Memorable │                             │
│   └───────────┘  └───────────┘                             │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   "Planning something special? Let's talk."                 │
│   [Inquire About Your Event]                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Content for Each Event Type:**

**Weddings:**
```
Title: "Your Dream Wedding, Elevated"
Copy: "Exchange vows with the Bandung skyline as your witness. 
Our panoramic venue offers an unforgettable setting for both 
intimate ceremonies and grand receptions."
Features: Garden ceremony option | Indoor reception | Custom catering | Event coordinator
Capacity: 50-200 guests
```

**Corporate:**
```
Title: "Impress with Views"
Copy: "Whether it's a crucial client dinner, product launch, or 
team celebration, our sophisticated venue combines professionalism 
with the relaxed Bandung highland atmosphere."
Features: AV equipment | Meeting layouts | Customized menus | Convenient access
Capacity: 20-100 guests
```

**Live Music:**
```
Title: "Intimate Performances"
Copy: "Every weekend, we transform into a stage for acoustic artists, 
jazz ensembles, and local talents. Good music, great food, 
unforgettable nights."
Features: Quality sound system | Intimate seating | Bar service | Artist partnerships
Capacity: 80-150 guests
```

**Community:**
```
Title: "Gathering the Community"
Copy: "We believe in bringing people together. From cultural 
exhibitions to charity events, Heritage is a space for 
Bandung's creative and caring community."
Features: Flexible layout | Cultural event support | Local partnerships
Capacity: 50-150 guests
```

**Implementation:**
- [ ] Create enhanced `EventsVenue.tsx` component
- [ ] Feature one hero event (Wedding) prominently
- [ ] Secondary events in grid format
- [ ] Include starting price hints where appropriate
- [ ] Add testimonial carousel from past events
- [ ] Clear inquiry CTA with link to form

---

### 6. AI-ASSISTED EXPERIENCE — Smart Dining Helper

**Purpose:**
Add a lightweight, engaging AI feature that enhances user experience without heavy backend complexity.

**Feature Options (Implement 1-2):**

#### Option A: AI Dining Moment Finder (Recommended)
```
"Not sure what you're looking for?"

A conversational widget that helps visitors find their perfect moment:

Step 1: "What brings you to Heritage today?"
   [ ] Planning a meal
   [ ] Looking for an event venue  
   [ ] Just browsing

Step 2 (if meal): "What's the occasion?"
   [ ] Casual catch-up
   [ ] Romantic date
   [ ] Family gathering
   [ ] Business meeting

Step 3: "When are you thinking?"
   [ ] Morning / Breakfast
   [ ] Afternoon / Lunch  
   [ ] Evening / Dinner
   [ ] Weekend special

→ Returns: Personalized suggestions with recommended dishes, 
   seating areas, and direct booking link
```

#### Option B: AI Menu Concierge
```
"Let us guide your palate"

Quick preference selector:
   Mood: [ Adventurous ] [ Comfort ] [ Light & Fresh ]
   Heat: [ Mild ] [ Medium ] [ Spicy ]
   Style: [ Traditional ] [ Modern ] [ Mix ]

→ Returns: 3-4 dish recommendations with pairing suggestions
```

#### Option C: Event Inspiration Generator
```
"Planning something special?"

Input: Event type, guest count, vibe preference
→ Returns: Suggested package, layout ideas, menu themes, 
   and example setups from past events
```

**Design Approach:**
- Floating chat-style button in corner
- Expands to elegant modal/drawer
- Typing animation for AI responses
- Matches the warm, premium aesthetic
- Non-intrusive — clearly optional
- Works with simple client-side logic or lightweight API

**Implementation:**
- [ ] Create `AIAssistant.tsx` component
- [ ] Design conversation flow
- [ ] Implement recommendation logic
- [ ] Style to match overall design
- [ ] Add fallback for direct navigation
- [ ] Test on mobile and desktop

---

### 7. GALLERY / ATMOSPHERE PREVIEW — Visual Journey

**Current Issues:**
- Generic restaurant images
- No panorama or nature emphasis
- Missing day/night showcase

**New Concept:**
A curated visual journey that showcases the three pillars through stunning imagery.

**Gallery Categories:**

| Category | Focus | Sample Images |
|----------|-------|---------------|
| **Panorama** | Views & nature | City skyline day, city lights night, green hills, terrace |
| **Interior** | Space & design | Classic details, modern elements, photogenic corners |
| **Atmosphere** | Moments & events | Live music, celebrations, gatherings, candlelit tables |
| **Cuisine** | Food & drinks | Signature dishes, plating, coffee, desserts |

**Section Design:**
```
┌─────────────────────────────────────────────────────────────┐
│              EXPERIENCE HERITAGE                            │
│     "A glimpse into our world — from sunrise to city lights"│
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   [Category Tabs: All | Panorama | Interior | Moments | Food]│
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌───────────────────────────┐  ┌─────────────┐           │
│   │                           │  │             │           │
│   │   [Hero: Panoramic view]  │  │  [Interior] │           │
│   │                           │  │             │           │
│   │                           │  ├─────────────┤           │
│   │                           │  │             │           │
│   └───────────────────────────┘  │  [Food]     │           │
│                                  │             │           │
│   ┌─────────────┐  ┌─────────────┤─────────────┘           │
│   │             │  │                                       │
│   │ [Night View]│  │ [Live Music Event]                    │
│   │             │  │                                       │
│   └─────────────┘  └─────────────────────────────────────────
│                                                             │
│   [ Instagram: @heritagecafebandung ]                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Image Requirements:**
- [ ] Panoramic day view (green, fresh, expansive)
- [ ] Panoramic night view (city lights, romantic)
- [ ] Sunset golden hour terrace
- [ ] Interior classical detail shot
- [ ] Interior modern design element
- [ ] Photogenic corner / Instagram spot
- [ ] Live music performance
- [ ] Wedding/celebration scene
- [ ] Family gathering moment
- [ ] 4-6 signature dish close-ups
- [ ] Coffee/beverage beauty shot

**Implementation:**
- [ ] Restructure `Gallery.tsx` with category filters
- [ ] Implement masonry grid with varied sizes
- [ ] Add lightbox with image descriptions
- [ ] Optional: Instagram feed integration
- [ ] Ensure responsive performance

---

### 8. FOOTER — Clean & Purposeful

**Current Issues:**
- Functional but generic

**Improvements:**
- [ ] Add prominent event inquiry CTA block
- [ ] Clear opening hours display
- [ ] Location with "Get Directions" link
- [ ] Social media with visual icons
- [ ] Newsletter signup (optional)
- [ ] Trust badges if applicable

**Footer Design:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   ┌─────────────────────────────────────────────────────┐   │
│   │  "Planning your next occasion? Let's make it special" │   │
│   │  [Inquire About Events]                               │   │
│   └─────────────────────────────────────────────────────┘   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   HERITAGE CAFE          EXPLORE           VISIT US         │
│   & RESTO                                                   │
│                          About              Address:        │
│   Elevated dining        Menu               Jl. Dago...     │
│   in the heart           Moments            Bandung         │
│   of Dago                Events                             │
│                          Gallery            Hours:          │
│   [FB] [IG] [WA]         Contact            Mon-Sun         │
│                                             10am - 10pm     │
│                                                             │
│                          [Get Directions →]                 │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│   © 2026 Heritage Cafe & Resto. All rights reserved.        │
│   Privacy Policy | Terms                                    │
└─────────────────────────────────────────────────────────────┘
```

**Implementation:**
- [ ] Add event inquiry banner above footer
- [ ] Reorganize footer columns
- [ ] Add Google Maps link
- [ ] Style social icons with hover effects

---

## Technical & UX Guidelines

### Performance
- [ ] All images optimized and lazy-loaded
- [ ] Next.js Image component with proper sizes
- [ ] Minimize JavaScript bundle
- [ ] Target Lighthouse Performance > 90

### Accessibility
- [ ] Semantic HTML structure
- [ ] Proper heading hierarchy
- [ ] Alt text for all images
- [ ] Keyboard navigation support
- [ ] Color contrast compliance
- [ ] Target Lighthouse Accessibility > 95

### SEO
- [ ] Descriptive title tags per section
- [ ] Meta descriptions for sharing
- [ ] Structured data for restaurant
- [ ] Search-friendly slugs
- [ ] Mobile-first indexing ready

### Responsive Design
- [ ] Mobile-first approach
- [ ] Comfortable panoramic image display on mobile
- [ ] Touch-friendly tap targets (min 44px)
- [ ] Horizontal scroll where appropriate
- [ ] Test on major breakpoints: 375px, 768px, 1024px, 1440px

### Interactive Elements
- [ ] Smooth scroll navigation
- [ ] Category tabs for menu and gallery
- [ ] Moment selector with filter
- [ ] AI assistant widget
- [ ] Image lightbox
- [ ] Form validation feedback
- [ ] Subtle hover animations

---

## File Structure (Proposed)

```
src/
├── app/
│   ├── page.tsx                  # Main page composition
│   ├── globals.css               # Design tokens & utilities
│   └── layout.tsx                # Root layout with metadata
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # Enhanced navigation
│   │   └── Footer.tsx           # Redesigned footer
│   │
│   ├── sections/
│   │   ├── Hero.tsx             # Panoramic hero with day/night
│   │   ├── About.tsx            # 3-pillar storytelling
│   │   ├── Menu.tsx             # Archipelago menu
│   │   ├── DiningMoments.tsx    # NEW: Use-case moments
│   │   ├── EventsVenue.tsx      # Enhanced events & bookings
│   │   ├── Gallery.tsx          # Category-based gallery
│   │   └── Contact.tsx          # Reservation form
│   │
│   ├── ui/
│   │   ├── AnimatedSection.tsx  # Scroll animation wrapper
│   │   ├── MomentCard.tsx       # Dining moment card
│   │   ├── EventCard.tsx        # Event type card
│   │   ├── MenuCard.tsx         # Menu item with badge
│   │   ├── GalleryImage.tsx     # Image with lightbox
│   │   └── CategoryTabs.tsx     # Reusable tab component
│   │
│   └── ai/
│       └── AIAssistant.tsx      # AI dining helper
│
├── lib/
│   ├── constants/
│   │   ├── moments.ts           # Dining moment data
│   │   ├── menu.ts              # Menu items with regions
│   │   ├── events.ts            # Event types data
│   │   └── gallery.ts           # Gallery images data
│   ├── utils.ts                 # Helper functions
│   └── ai.ts                    # AI recommendation logic
│
└── public/
    └── images/
        ├── hero/                 # Hero day/night images
        ├── moments/              # Dining moment images
        ├── events/               # Event type images
        ├── gallery/              # Gallery images
        ├── menu/                 # Dish images
        └── icons/                # Custom icons
```

---

## Implementation Roadmap

### Phase 1: Foundation (Week 1)
| Task | Priority | Estimate | Status |
|------|----------|----------|--------|
| Update design tokens in globals.css | High | 2h | ⬜ |
| Redesign Hero with panorama focus | High | 4h | ⬜ |
| Create day/night hero variant system | High | 3h | ⬜ |
| Build AnimatedSection wrapper | Medium | 2h | ⬜ |
| Restructure About with 3 pillars | High | 4h | ⬜ |

### Phase 2: Core Sections (Week 2)
| Task | Priority | Estimate | Status |
|------|----------|----------|--------|
| Build DiningMoments component | High | 5h | ⬜ |
| Enhance Menu with regional badges | Medium | 3h | ⬜ |
| Create EventsVenue section | High | 5h | ⬜ |
| Implement category-based Gallery | Medium | 4h | ⬜ |

### Phase 3: Interactivity (Week 3)
| Task | Priority | Estimate | Status |
|------|----------|----------|--------|
| Implement AI Assistant | Medium | 6h | ⬜ |
| Add scroll animations | Medium | 3h | ⬜ |
| Build image lightbox | Medium | 2h | ⬜ |
| Enhance reservation form | Medium | 3h | ⬜ |

### Phase 4: Polish & Launch (Week 4)
| Task | Priority | Estimate | Status |
|------|----------|----------|--------|
| Redesign Footer | Low | 2h | ⬜ |
| Mobile testing & fixes | High | 4h | ⬜ |
| SEO & metadata | High | 2h | ⬜ |
| Performance optimization | High | 3h | ⬜ |
| Content review & polish | High | 3h | ⬜ |
| Final QA | High | 2h | ⬜ |

---

## Content & Copy Guidelines

### Tone of Voice
- **Premium but Human:** Elevated language without being cold or corporate
- **Warm & Inviting:** Like talking to a friend who happens to own a beautiful restaurant
- **Specific & Sensory:** "Cool highland breeze" not just "nice atmosphere"
- **Bandung-Proud:** Embrace the local identity naturally
- **Confident but Humble:** State quality without exaggeration

### Keywords to Use
✅ Panoramic, elevated, highland, city views, city lights, timeless, warm, gathering, celebration, Archipelago, Indonesian heritage, Dago, Bandung, intimate, photogenic, community, live music, fusion

### Keywords to Avoid
❌ Exclusive, luxurious (overused), world-class, one-of-a-kind, best in class, unparalleled (hyperbolic)

### Sample Copy Blocks

**Hero Tagline Options:**
1. "Where Panoramic Views Meet Timeless Indonesian Cuisine"
2. "Elevated Dining. Archipelago Soul."
3. "From Dago's Heights to Your Table"
4. "Breathe. Dine. Celebrate."

**About Opening:**
> Nestled in the cool, green highlands of Dago, Heritage Cafe & Resto offers more than exceptional dining — it's a destination where panoramic city views, timeless design, and the warmth of Indonesian hospitality come together. From the first morning light to the sparkling city nights, every moment here is crafted for gathering, celebrating, and savoring life.

**Dining Moments Intro:**
> Every hour brings a new reason to visit. Whether you're seeking a peaceful breakfast with mountain views, a lively dinner under city lights, or a cozy gathering with loved ones — find your perfect moment at Heritage.

**Events CTA:**
> Planning your next celebration? From intimate proposals to grand weddings, corporate launches to community nights — let Heritage be the stage for your story. We'll handle the details, you create the memories.

---

## Success Metrics

### User Experience
- [ ] Average time on page > 3 minutes
- [ ] Bounce rate < 40%
- [ ] Reservation form completion rate increase
- [ ] Event inquiry submissions increase

### Technical
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 95
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s

### Business
- [ ] Clear communication of panoramic USP
- [ ] Venue versatility understood by visitors
- [ ] Increased event inquiries
- [ ] Brand perception aligned with "warm premium"

---

## Appendix

### Image Specifications

| Image Type | Dimensions | Format | Notes |
|------------|------------|--------|-------|
| Hero Day | 1920×1080+ | WebP/JPG | Panoramic, include partial interior |
| Hero Night | 1920×1080+ | WebP/JPG | City lights, warm glow |
| Pillar Cards | 600×800 | WebP | Vertical, focused |
| Moment Cards | 800×600 | WebP | Horizontal, lifestyle |
| Event Cards | 800×600 | WebP | Showcase setting |
| Gallery | Various | WebP | Mix of sizes for masonry |
| Menu Dishes | 600×600 | WebP | Clean plating, top-down or angle |

### Color Application

```
Background layers:
- Primary sections: cream-warm (#f6f4ef)
- Alternate sections: forest-deep (#1f2d26) with light text
- Night mood sections: night-blue (#1a2332)

Accent usage:
- Primary CTAs: heritage-gold (#b8860b)
- Secondary elements: highland-green (#3f7d54)
- Evening/warm accents: sunset-amber (#d4a574)

Text:
- Headlines on light: forest-deep
- Body on light: charcoal with warmth
- All text on dark: white/cream variants
```

---

*This comprehensive plan serves as the guiding document for the Heritage Cafe & Resto website redesign. Every section should communicate the unique positioning: Panoramic Views + Classic-Modern Fusion + Warm Multi-Purpose Atmosphere — delivered through Archipelago culinary excellence.*
