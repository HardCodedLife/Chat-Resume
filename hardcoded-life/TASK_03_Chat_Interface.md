# Task: Implement Chat Interface & Logic

**Context:**
The core value of this app is the chat. We need a robust chat interface that handles messaging state, API communication, and auto-scrolling.

**Goals:**
1. Create the Chat Layout.
2. Implement Message State & API Hook.
3. Build the UI for Messages and Input.

## 1. Data Structures
Define these types in `src/types/chat.ts` (create if needed) or inside the component:
```typescript
type Message = {
  role: 'user' | 'model';
  content: string;
};
```

## 2. Page Component
**File:** `src/app/chat/page.tsx`

### A. State Management
- `messages`: `Message[]` (Initialize with an empty array or a welcome message if you prefer).
- `input`: `string` (For the text area).
- `isLoading`: `boolean` (To disable input while generating).

### B. Helper Function: `sendMessage`
- **Logic:**
  1. Add user message to `messages`.
  2. Set `isLoading` to true.
  3. POST to `/api/chat` with `body: { messages: updatedHistory }`.
  4. On success: Add `response.content` (model message) to `messages`.
  5. On error: Add a system error message or toast.
  6. Set `isLoading` to false.

### C. UI Structure
- **Header:** Simple "Back" button (ArrowLeft) linking to `/`. Title: "AI HardCodedLife".
- **Message List (Scrollable Area):**
  - Map through `messages`.
  - **User Bubble:** Align right, `bg-surface border border-slate-700`.
  - **AI Bubble:** Align left, `bg-primary/10 text-primary-foreground`.
  - **Markdown:** Use `react-markdown` (optional) or basic whitespace handling (`whitespace-pre-wrap`) for now.
- **Quick Chips (Suggested Questions):**
  - Position: Fixed above the input area.
  - Options:
    - "你最拿手的 3 件事？"
    - "關於 n8n，你實作過什麼？"
    - "給我 3 天，你能做出什麼 Demo？"
  - Action: Clicking a chip immediately calls `sendMessage` with that text.
- **Input Area (Fixed Bottom):**
  - Textarea (auto-resizing preferred, or simple fixed height).
  - Send Button (Icon: `Send`).

## 3. Auto-Scroll
- Use a `useRef` on a dummy `div` at the end of the message list.
- `useEffect` to scroll to this div whenever `messages` changes.

## Definition of Done
- User can type and send a message.
- AI responds using the Gemini API.
- Chips work.
- Layout handles long conversations (scrolls correctly).
