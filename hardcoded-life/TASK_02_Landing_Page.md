# Task: Implement Landing Page (Home)

**Context:**
The UI foundation is ready. Now we need the "Hook" - the landing page that convinces recruiters to click "Start Chatting". It reads data from `src/data/profile.ts` and uses the components from Task 1.

**Goals:**
1. Create a compelling Hero Section.
2. Display a "Feature Grid" (why use this AI?).
3. Display a "Featured Projects" list using real data.

## 1. Page Structure
**File:** `src/app/page.tsx`
**Imports:** `PROFILE_DATA` from `@/data/profile`, Components from `@/components/ui`.

### Section A: Hero
- **Headline:** "跟我本人 AI 分身聊 2 分鐘，比看履歷更快知道我能不能把點子做出來。" (Use a large, bold font, e.g., `text-4xl`).
- **Subtext:** "Project: HardCodedLife | Status: `PROFILE_DATA.basics.status`"
- **CTA Button:**
  - Text: "Start Chatting" (with an ArrowRight icon).
  - Action: Link to `/chat`.
  - Style: `variant="primary"`, size `lg`.

### Section B: Features (3-Column Grid)
- Hardcoded cards to sell the "Vibe":
  1. **Prototype Speed:** "2 小時內完成邏輯梳理，1 天內產出 Demo。" (Icon: `Zap`)
  2. **Automation:** "不只是寫 Code，我用 n8n 與 Webhooks 串接真實業務邏輯。" (Icon: `Workflow`)
  3. **AI Native:** "熟練使用 MCP, Ollama 與 Claude Code，我是 AI 時代的 Shipping Machine。" (Icon: `Bot`)

### Section C: Featured Projects
- **Title:** "Selected Projects"
- **Layout:** Vertical stack of cards.
- **Data Source:** Map through `PROFILE_DATA.projects`.
- **Card Content:**
  - Title: `project.name`
  - Description: `project.one_liner`
  - Badges: Map `project.stack` to `Badge` components.
  - Link: External link to `project.link` (Icon: `ExternalLink`).

## 2. Refinement
- Ensure responsive spacing (use `gap-4 md:gap-8`).
- Use `text-text-secondary` for body text to keep high contrast for headings.

## Definition of Done
1. The page renders without errors.
2. Clicking "Start Chatting" navigates to `/chat`.
3. All data is dynamic from `profile.ts` where specified.
4. **IMPORTANT:** Update `PLAN.md` by marking all items in **Phase 3** as `[x]`.