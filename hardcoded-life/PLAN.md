# HardCodedLife (AI Resume) Implementation Plan

This plan outlines the steps to build the "HardCodedLife" AI Resume application, focusing on a fast, functional MVP that demonstrates "Vibe Coding" and "Shipping Mindset".

## Phase 1: Setup & Core Logic (Completed)
- [x] Initialize Next.js project with TypeScript and Tailwind CSS.
- [x] Install dependencies: `lucide-react`, `@google/generative-ai`, `clsx`, `tailwind-merge`.
- [x] Define `src/data/profile.ts` with hardcoded profile data and System Prompt.
- [x] Implement `/api/chat` route for Gemini integration.
- [x] Verify build stability.

## Phase 2: UI Foundation & Components
- [x] **Global Layout:** Configure `src/app/layout.tsx` for consistent font (Inter/Geist) and basic metadata.
- [x] **Utility Components:** Create reusable UI components (Button, Card, Input) in `src/components/ui` or use inline Tailwind for speed if simpler.
    - `ChatBubble`: For displaying user and AI messages with distinct styling.
    - `SuggestionChip`: For quick reply options.
    - `ProjectCard`: For displaying highlighted projects on the landing page.

## Phase 3: Landing Page (The "Hook")
- [x] **Hero Section:** Implement the "2-minute chat" value proposition.
- [x] **Feature Cards:** Display "Prototype Speed", "Automation", and "AI Native" cards.
- [x] **Call to Action:** Add a clear "Start Chatting" button that links to `/chat`.
- [x] **File:** `src/app/page.tsx`

## Phase 4: Chat Interface (The "Vibe Check")
- [ ] **Chat Page Layout:** Create a clean, chat-focused layout in `src/app/chat/page.tsx`.
- [ ] **State Management:** Manage `messages` (array of role/content), `isLoading`, and `input` state.
- [ ] **Auto-Scroll:** Ensure the chat window scrolls to the newest message.
- [ ] **Chips/Quick Actions:** Implement the suggested chips ("你最拿手的 3 件事？", etc.) to trigger API calls.
- [ ] **API Integration:** Connect the frontend to `/api/chat`. Handle streaming or loading states gracefully.

## Phase 5: Polish & Deployment
- [ ] **Styling Refinement:** Ensure responsive design (mobile-friendly). Add subtle animations (e.g., typing indicator).
- [ ] **Error Handling:** Add basic error messages for failed API calls.
- [ ] **Environment Check:** Verify `GOOGLE_AI_API_KEY` handling.
- [ ] **Final Build & Test:** Run `npm run build` and test the full flow locally.

## Future / Bonus
- [ ] **Dynamic Theming:** Change colors based on chat sentiment (reference "Mood-Chat").
- [ ] **Tool Calling:** Allow the AI to "fetch" specific project details via function calling (optional for MVP).
