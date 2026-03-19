# Hero Component Specification

## Overview

The Hero component serves as the primary landing section for HookHub, designed to immediately communicate the product's value proposition and drive user engagement. It combines compelling copy, animated visuals, and clear calls-to-action.

## Goals

1. **Capture Attention**: Use animations and visual hierarchy to immediately engage visitors
2. **Communicate Value**: Clearly explain what HookHub offers within seconds
3. **Drive Action**: Guide users toward primary actions (Browse Hooks, Submit a Hook)
4. **Build Credibility**: Display social proof through stats (hooks available, downloads, contributors)
5. **Reinforce Brand**: Maintain consistent visual identity with the HookHub color palette

## Component Structure

### 1. Background Layer
Decorative animated elements that add visual depth without distracting from content.

**Elements:**
- **Gradient Orbs**: 3 blurred circular gradients positioned at corners/edges
- **Grid Pattern**: Subtle grid overlay with radial mask fade
- **Floating Nodes**: Small animated dots representing connectivity
- **Connection Lines**: SVG paths with dashed lines connecting nodes

**Guidelines:**
- All background elements must have `pointer-events-none`
- Opacity should remain subtle (≤30% for orbs, ≤20% for lines)
- Animations should be slow and non-distracting

### 2. Content Area (Left Column)

#### Badge
- Pill-shaped indicator with pulsing dot
- Communicates key differentiator (e.g., "Community-Powered Automation")
- Should feel alive with subtle animation

#### Headline (H1)
- Multi-line headline with emphasized keyword
- Primary keyword uses gradient text effect with underline decoration
- Font sizes: `4xl` (mobile) → `5xl` (tablet) → `6xl` (desktop)
- Tight line-height (1.05) and letter-spacing

#### Description
- 1-2 sentences expanding on the headline
- Muted color (`--slate-light`)
- Font size: `lg` (mobile) → `xl` (desktop)

#### CTA Buttons
- **Primary**: Solid background, arrow icon, hover glow effect
- **Secondary**: Border only, plus icon, subtle hover state
- Both buttons should have generous padding and rounded corners (2xl)
- Hover states include scale transform and shadow

#### Stats Row
- 3 key metrics displayed horizontally
- Separated from CTAs by a top border
- Large bold numbers with small labels below

### 3. Visual Area (Right Column)

Animated illustration representing the "hooks" concept.

**Elements:**
- **Outer Ring**: Dashed border, slow rotation
- **Middle Ring**: Solid border, reverse rotation
- **Inner Glow**: Blurred gradient background
- **Center Icon**: Link/hook icon in branded gradient box
- **Orbiting Elements**: 3 floating icon cards representing features (notifications, validation, speed)

**Guidelines:**
- Only visible on `lg` screens and above
- All rotations should be smooth and continuous
- Orbiting elements rotate at different speeds/directions

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Primary | `#d97757` | CTAs, accents, gradients |
| Primary Dark | `#c4684a` | Hover states, gradient ends |
| Primary Light | `#e8956e` | Gradient midpoints |
| Secondary | `#6a9bcc` | Secondary accents, nodes |
| Tertiary | `#788c5d` | Tertiary accents, nodes |
| Foreground | `var(--foreground)` | Text, borders |
| Slate Light | `var(--slate-light)` | Muted text |
| Border | `var(--border)` | Borders, grid lines |
| Background | `var(--background)` | Backgrounds |

## Animation Guidelines

### Required Animations
- `animate-fade-in`: Opacity 0→1
- `animate-slide-up`: Translate Y with fade
- `animate-pulse-slow`: Slow opacity pulse
- `animate-float`: Gentle vertical movement
- `animate-float-delayed`: Float with delay
- `animate-ping-slow`: Slow ping effect
- `animate-bounce-slow`: Gentle bounce
- `animate-spin-slow`: Slow 360° rotation
- `animate-reverse-spin`: Counter-clockwise rotation
- `animate-gradient`: Background position animation
- `animate-draw`: SVG path drawing effect
- `animate-dash`: Dashed line animation

### Stagger Delays
Content should animate in sequence using `animation-delay-*` classes:
- Badge: 0ms
- Headline: 0ms (with slide-up)
- Description: 200ms
- CTAs: 400ms
- Stats: 600ms

## Responsive Behavior

| Breakpoint | Layout | Visual Area |
|------------|--------|-------------|
| Mobile (<768px) | Single column | Hidden |
| Tablet (768px-1023px) | Single column | Hidden |
| Desktop (≥1024px) | Two columns | Visible |

### Spacing
- Section padding: `py-24` (mobile) → `py-32` (desktop)
- Content gap: `gap-12` between columns
- Stats gap: `gap-8` between stat items

## Accessibility

- Headline must be `<h1>` element
- Buttons must have clear focus states
- Animations should respect `prefers-reduced-motion`
- Sufficient color contrast for all text

## Variation Guidelines

When creating new Hero variations:

1. **Maintain Structure**: Keep the same content hierarchy (badge → headline → description → CTAs → stats)
2. **Preserve Responsiveness**: Always hide complex visuals on mobile
3. **Keep Animation Subtle**: Background animations should never compete with content
4. **Use Color Palette**: Stick to the defined colors or create a complementary palette
5. **Ensure Accessibility**: Test with screen readers and keyboard navigation
6. **Performance**: Limit DOM elements, use CSS animations over JS where possible

## Props (Future Enhancement)

For configurable variations, consider these props:

```typescript
interface HeroProps {
  badge?: string;
  headline: {
    lines: string[];
    emphasis: string;
  };
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  stats?: Array<{
    value: string;
    label: string;
  }>;
  variant?: 'default' | 'minimal' | 'centered' | 'dark';
}
```

## File Location

All Hero component variations should be placed in:
```
src/components/heros/
├── Hero.tsx           # Default implementation
├── HeroMinimal.tsx    # Simplified version
├── HeroCentered.tsx   # Center-aligned variant
└── ...
```
