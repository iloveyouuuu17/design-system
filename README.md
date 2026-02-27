# Design System

A full-featured design system built with **React** and **Tailwind CSS v4**.

## Pages

### Foundation
- **Colors** — Brand, neutral & semantic palette with click-to-copy swatches
- **Typography** — Type scale, weights & font family reference
- **Spacing** — 4px base grid with visual scale table

### Components
| Component | Description |
|-----------|-------------|
| Button | Primary action trigger — 3 sizes, 5 states, icon slots |
| Input | Text entry field — sizes, states, leading/trailing icons |
| Badge | Status indicator — 6 variants, dot, removable |
| Card | Content container — header, body, footer |
| Avatar | User representation — initials, status, group |
| Checkbox | Multi-select — checked, indeterminate, group |

## Tech Stack

- React 18
- Tailwind CSS v4
- React Router v7 (Data mode)
- Radix UI primitives
- Lucide React icons
- Class Variance Authority (CVA)

## Getting Started

```bash
npm install
npm run build
```

## Structure

```
src/
  app/
    App.tsx                    # RouterProvider entry
    routes.ts                  # Route definitions
    components/
      PrimaryButton.tsx         # CVA-based button component
      layout/
        Layout.tsx              # App shell with sidebar
        Sidebar.tsx             # Navigation sidebar
      ds/
        PageShell.tsx           # Shared page components
    pages/
      OverviewPage.tsx
      ColorsPage.tsx
      TypographyPage.tsx
      SpacingPage.tsx
      ButtonPage.tsx
      InputPage.tsx
      BadgePage.tsx
      CardPage.tsx
      AvatarPage.tsx
      CheckboxPage.tsx
  styles/
    index.css
    theme.css
    tailwind.css
    fonts.css
```

## Accessibility

All components target **WCAG 2.1 AA** compliance:
- Keyboard navigable with visible focus rings
- 44×44px minimum touch targets
- Semantic HTML and ARIA attributes
- Sufficient colour contrast ratios
