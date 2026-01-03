---
description: Step-by-step implementation of Heritage Cafe website improvements
---

# Heritage Cafe & Resto — Website Implementation Workflow

This workflow guides the implementation of the website improvements as outlined in `IMPROVEMENT_PLAN.md`. Follow phases in order for best results.

## Prerequisites
- Read the full `IMPROVEMENT_PLAN.md` before starting
- Have high-quality images ready (especially panorama day/night shots)
- Development server running (`npm run dev`)

---

## Phase 1: Foundation & Design System

### Step 1.1: Update Design Tokens
1. Open `src/app/globals.css`
2. Update/add color variables:
   - `--forest-deep: #1f2d26`
   - `--heritage-gold: #b8860b`
   - `--highland-green: #3f7d54`
   - `--cream-warm: #f6f4ef`
   - `--sunset-amber: #d4a574`
   - `--night-blue: #1a2332`
3. Update TailwindCSS theme tokens to match
4. Test colors in browser

### Step 1.2: Create Animation Utilities
1. Create `src/components/ui/AnimatedSection.tsx`
2. Implement scroll-triggered fade-in animation
3. Add intersection observer logic
4. Export component for use in sections

### Step 1.3: Redesign Hero Section
1. Open `src/components/Hero.tsx`
2. Update tagline: "Where Panoramic Views Meet Timeless Indonesian Cuisine"
3. Add pre-headline: "Elevated Dining in the Heart of Dago"
4. Update sub-copy with panorama + Archipelago messaging
5. Replace hero image with panoramic Dago view
6. Consider implementing day/night image toggle
7. Add floating "Open Today" badge
8. Update CTAs: "Explore Menu" + "Book Your Moment"
9. Test on mobile and desktop

### Step 1.4: Restructure About Section
1. Open `src/components/About.tsx`
2. Create 3-pillar structure:
   - Pillar 1: Panorama (views, nature, highland)
   - Pillar 2: Aesthetic (classic-modern fusion)
   - Pillar 3: Atmosphere (community, events, gatherings)
3. Add Archipelago cuisine statement
4. Include chef's quote or kitchen imagery
5. Apply entrance animations
6. Test responsive layout

---

## Phase 2: New Sections & Core Components

### Step 2.1: Create Dining Moments Section
1. Create `src/components/sections/DiningMoments.tsx`
2. Define moment data with these categories:
   - Highland Breakfast (morning)
   - Casual Lunch (afternoon)
   - Romantic Dinner (evening)
   - Family Gathering (anytime)
   - Corporate Meeting (anytime)
   - Live Music Night (evening)
   - Celebration (anytime)
3. Create `src/components/ui/MomentCard.tsx` component
4. Implement time-of-day filter tabs
5. Add horizontal scroll on mobile
6. Link cards to reservation form with context
7. Apply hover effects and animations
8. Add section to `src/app/page.tsx`

### Step 2.2: Enhance Menu Section
1. Open `src/components/Menu.tsx`
2. Add section intro about Archipelago cuisine
3. Create regional badge component
4. Add badges to each dish: [JAVA], [BALI], [SUMATRA], [MODERN FUSION], etc.
5. Add dietary icons where applicable
6. Consider adding "Chef's Current Favorite" feature
7. Add "View Full Menu" PDF download button

### Step 2.3: Rebuild Events Section
1. Create enhanced `src/components/sections/EventsVenue.tsx`
2. Structure with featured event (Wedding) as hero
3. Add secondary events in grid:
   - Corporate Events
   - Live Music Nights
   - Community Events
   - Private Celebrations
4. Include capacity and features for each
5. Add strong inquiry CTA
6. Consider adding testimonial/social proof

### Step 2.4: Restructure Gallery Section
1. Open `src/components/Gallery.tsx`
2. Add category filter tabs:
   - All | Panorama | Interior | Moments | Food
3. Update gallery images to include:
   - Panoramic day/night views
   - Interior classical + modern details
   - Live music and celebration moments
   - Signature dishes
4. Implement masonry grid with varied sizes
5. Enhance lightbox with captions
6. Optional: Add Instagram feed link

---

## Phase 3: Interactive & AI Features

### Step 3.1: Implement AI Assistant
1. Create `src/components/ai/AIAssistant.tsx`
2. Design conversation flow:
   - "What brings you today?" (meal/event/browse)
   - "What's the occasion?" (casual/romantic/family/business)
   - "When are you thinking?" (morning/afternoon/evening)
3. Implement recommendation logic in `src/lib/ai.ts`
4. Style as floating button + expandable drawer
5. Match warm, premium aesthetic
6. Add fallback for manual navigation
7. Test on mobile and desktop

### Step 3.2: Add Scroll Animations
1. Apply `AnimatedSection` wrapper to all major sections
2. Configure stagger delays for visual interest
3. Add subtle parallax to hero image
4. Test performance impact
5. Disable/reduce on mobile if needed

### Step 3.3: Enhance Reservation Form
1. Open `src/components/Contact.tsx`
2. Add occasion dropdown (connected to Moments)
3. Improve form validation feedback
4. Style to match updated design
5. Test WhatsApp integration

---

## Phase 4: Polish & Launch Prep

### Step 4.1: Redesign Footer
1. Open `src/components/Footer.tsx`
2. Add event inquiry banner above footer
3. Reorganize into clear columns:
   - Brand + tagline + social
   - Explore links
   - Visit info (address + hours)
4. Add "Get Directions" Google Maps link
5. Style social icons with gold hover

### Step 4.2: Mobile Testing
// turbo
1. Run `npm run dev`
2. Test at 375px (mobile), 768px (tablet), 1024px (laptop), 1440px (desktop)
3. Check panoramic images display well
4. Verify touch targets are 44px minimum
5. Test horizontal scroll on Moments section
6. Ensure all CTAs are accessible
7. Fix any responsive issues

### Step 4.3: Performance Optimization
// turbo
1. Run `npm run build` to check for errors
2. Ensure all images use Next.js Image with proper sizes
3. Verify lazy loading is working
4. Check JavaScript bundle size
5. Run Lighthouse audit
6. Target: Performance > 90, Accessibility > 95

### Step 4.4: SEO & Metadata
1. Open `src/app/layout.tsx`
2. Add comprehensive meta tags:
   - Title: "Heritage Cafe & Resto | Panoramic Dining in Dago, Bandung"
   - Description: "Experience elevated Indonesian dining with breathtaking city views..."
3. Add Open Graph tags for social sharing
4. Add structured data for restaurant
5. Verify all images have descriptive alt text

### Step 4.5: Content Review
1. Review all copy for tone consistency
2. Check for typos and grammar
3. Verify all placeholder content is replaced
4. Confirm all links work correctly
5. Test reservation flow end-to-end

### Step 4.6: Final QA
// turbo
1. Run `npm run build && npm run start`
2. Test in production mode
3. Check all sections load correctly
4. Test on real mobile device if possible
5. Verify analytics/tracking if any
6. Document any remaining issues

---

## Quick Reference

### Key Files to Edit
| Section | File |
|---------|------|
| Design Tokens | `src/app/globals.css` |
| Hero | `src/components/Hero.tsx` |
| About | `src/components/About.tsx` |
| Dining Moments | `src/components/sections/DiningMoments.tsx` (NEW) |
| Menu | `src/components/Menu.tsx` |
| Events | `src/components/sections/EventsVenue.tsx` (NEW) |
| Gallery | `src/components/Gallery.tsx` |
| Contact | `src/components/Contact.tsx` |
| Footer | `src/components/Footer.tsx` |
| AI Assistant | `src/components/ai/AIAssistant.tsx` (NEW) |
| Page Layout | `src/app/page.tsx` |

### Key Brand Messages
1. **Panorama:** "Elevated views, cool highland air, day & night magic"
2. **Aesthetic:** "Classic-modern fusion, photogenic, warm premium"
3. **Atmosphere:** "Live music, community, celebrations, all ages welcome"
4. **Cuisine:** "Archipelago flavors, traditional + modern"

### Tagline
> "Where Panoramic Views Meet Timeless Indonesian Cuisine"
