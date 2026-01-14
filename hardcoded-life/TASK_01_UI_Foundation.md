# Task: Implement UI Foundation & Design System

**Context:**
We are building "HardCodedLife", an AI Resume. We need a consistent, dark-mode-first design system before building pages. This task establishes the global layout, font, and core UI "atoms".

**Goals:**
1. Configure Tailwind for a "Slate & Emerald" dark theme.
2. Create the root layout.
3. Build 3 reusable components: `Button`, `Card`, `Badge`.

## 1. Tailwind Configuration
**File:** `tailwind.config.ts`
- Extend the theme to include these semantic colors:
  - `background`: `slate-950` (Main dark bg)
  - `surface`: `slate-900` (Card/element bg)
  - `primary`: `emerald-500` (Actions/Highlights)
  - `text-primary`: `slate-50`
  - `text-secondary`: `slate-400`

## 2. Root Layout
**File:** `src/app/layout.tsx`
- **Font:** Use `Inter` (from `next/font/google`).
- **Structure:**
  - `<body>` must apply `bg-background text-text-primary antialiased min-h-screen flex flex-col`.
  - Content must be centered with a max-width (e.g., `max-w-screen-md` or `lg`) for a focused reading experience.

## 3. UI Components (Atoms)
Create these in `src/components/ui/`. Use `lucide-react` for icons if needed.

### A. Button (`button.tsx`)
- **Props:** `variant` ('primary', 'secondary', 'ghost'), `size` ('sm', 'md', 'lg'), `children`, `className`.
- **Styles:**
  - Base: `inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none disabled:opacity-50`
  - Primary: `bg-primary text-slate-950 hover:bg-emerald-400`
  - Secondary: `bg-surface text-text-primary hover:bg-slate-800 border border-slate-800`
  - Ghost: `bg-transparent hover:bg-slate-800/50 text-text-secondary hover:text-text-primary`

### B. Card (`card.tsx`)
- **Props:** `children`, `className`, `hoverEffect` (boolean).
- **Styles:**
  - Base: `bg-surface border border-slate-800 rounded-xl p-6`
  - HoverEffect: If true, add `transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10`.

### C. Badge (`badge.tsx`)
- **Use case:** For displaying skills/tech stack.
- **Props:** `children`, `variant` ('default', 'outline').
- **Styles:**
  - Base: `inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold`
  - Default: `bg-primary/10 text-primary`
  - Outline: `border border-slate-700 text-text-secondary`

## Definition of Done
1. `npm run build` passes.
2. No dummy pages needed, just the components and config ready for import.
3. **IMPORTANT:** Update `PLAN.md` by marking all items in **Phase 2** as `[x]`.