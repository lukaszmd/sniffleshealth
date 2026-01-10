# Chat Screen Scrollable Areas - Design Specification

## Overview

The chat screen design requires **two independent scrollable containers** that operate independently of each other. This document outlines the UX design intent and technical requirements for an experienced frontend engineer.

---

## Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│                    Page Header (Fixed)                    │
├──────────────────────────┬────────────────────────────────┤
│                         │                                │
│   Chat Container        │   Medical Profile Panel        │
│   (Left, ~1110px)       │   (Right, 342px)              │
│                         │                                │
│   ┌──────────────────┐  │   ┌────────────────────────┐  │
│   │                  │  │   │                        │  │
│   │  SCROLLABLE      │  │   │  SCROLLABLE            │  │
│   │  MESSAGE AREA    │  │   │  PROFILE CONTENT       │  │
│   │  (flex-1)        │  │   │  (h-full)             │  │
│   │                  │  │   │                        │  │
│   │  [Messages...]   │  │   │  [Profile Sections...] │  │
│   │                  │  │   │                        │  │
│   └──────────────────┘  │   └────────────────────────┘  │
│                         │                                │
│   ┌──────────────────┐  │                                │
│   │  FIXED FOOTER    │  │                                │
│   │  (Options/Input) │  │                                │
│   └──────────────────┘  │                                │
│                         │                                │
└─────────────────────────┴────────────────────────────────┘
│                    App Footer (Fixed)                     │
└─────────────────────────────────────────────────────────┘
```

---

## Key Design Requirements

### 1. **Independent Scroll Containers**

Both panels must have **completely independent scroll behavior**:

- **Chat Message Area**: Scrolls independently to view conversation history
- **Medical Profile Panel**: Scrolls independently to view all profile sections

**Why this matters:**

- Users can scroll through chat history while keeping the medical profile visible at a specific section
- Users can review their medical profile while the chat continues below the viewport
- No scroll interference between the two panels

### 2. **Height Constraints**

Both scrollable areas need **constrained heights** (not just `min-height`):

**Chat Message Area:**

- Must use `flex-1` to take available vertical space
- Parent container must have `overflow-hidden` to prevent page-level scrolling
- Requires `min-h-0` to allow flexbox to properly constrain height
- Formula: `Available Height = Viewport Height - Header - Footer - Fixed Chat Footer`

**Medical Profile Panel:**

- Must use `h-full` to match parent container height
- Parent container must have a defined height (from flexbox or explicit height)
- Formula: `Height = Parent Container Height (matches chat container)`

### 3. **Scroll Behavior Specifications**

**Chat Message Area:**

- **Auto-scroll to bottom** when new messages arrive (user is at bottom)
- **Preserve scroll position** when user has scrolled up to read history
- **Smooth scrolling** for better UX
- **Scrollbar visibility**: Show scrollbar only when content overflows (use `overflow-y-auto`)

**Medical Profile Panel:**

- **Maintain scroll position** when medical data updates
- **No auto-scrolling** - user controls their position
- **Scrollbar visibility**: Show scrollbar only when content overflows (use `overflow-y-auto`)

### 4. **Fixed Elements**

**Chat Container Fixed Footer:**

- Options/buttons section (when question requires selection)
- Chat input field
- Continue button section
- These elements must **never scroll** - they stay pinned to bottom of chat container

**Medical Profile Panel:**

- No fixed elements - entire panel scrolls as one unit

---

## Technical Implementation Requirements

### CSS/Layout Requirements

```css
/* Parent Container */
.main-container {
  display: flex;
  height: calc(100vh - header-height - footer-height);
  overflow: hidden; /* Critical: prevents page-level scroll */
}

/* Chat Container */
.chat-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1110px;
  overflow: hidden; /* Critical: contains scroll to child */
}

/* Scrollable Message Area */
.message-area {
  flex: 1; /* Takes available space */
  min-height: 0; /* Critical: allows flexbox to constrain */
  overflow-y: auto; /* Independent scrolling */
  /* Optional: Custom scrollbar styling */
}

/* Fixed Chat Footer */
.chat-footer {
  flex-shrink: 0; /* Never shrinks */
  /* Contains: options, input, continue button */
}

/* Medical Profile Panel */
.profile-panel {
  width: 342px;
  flex-shrink: 0;
  height: 100%; /* Matches parent height */
  overflow-y: auto; /* Independent scrolling */
  display: flex;
  flex-direction: column;
}
```

### React/Component Structure

```typescript
<div className="main-container">
  {/* Chat Section */}
  <div className="chat-container">
    {/* Scrollable Messages */}
    <div className="message-area">
      {messages.map(msg => <Message key={msg.id} {...msg} />)}
      <div ref={messagesEndRef} /> {/* For auto-scroll */}
    </div>

    {/* Fixed Footer */}
    <div className="chat-footer">
      {/* Options, Input, Continue Button */}
    </div>
  </div>

  {/* Medical Profile Panel */}
  <div className="profile-panel">
    {/* All profile sections - scrolls as one */}
    <UserInfo />
    <InfoBlock />
    <PersonalDetails />
    <Allergies />
    {/* ... more sections ... */}
  </div>
</div>
```

---

## Critical Implementation Details

### 1. **Flexbox Height Constraint Pattern**

The `min-h-0` on the scrollable message area is **critical**. Without it:

- Flexbox won't properly constrain the child height
- The scrollable area will expand beyond viewport
- Scrolling won't work as expected

**Correct:**

```tsx
<div className="flex-1 overflow-y-auto min-h-0">
```

**Incorrect:**

```tsx
<div className="flex-1 overflow-y-auto"> {/* Missing min-h-0 */}
```

### 2. **Overflow Chain**

Ensure overflow is properly contained:

- Page level: `overflow-hidden` on main container
- Chat container: `overflow-hidden` to contain scroll
- Message area: `overflow-y-auto` for scrolling
- Profile panel: `overflow-y-auto` for scrolling

### 3. **Auto-Scroll Logic**

For chat message area:

- Use `useEffect` to scroll when messages array changes
- Check if user is at bottom before auto-scrolling
- Use `scrollIntoView({ behavior: 'smooth' })` for better UX

```typescript
const { messagesEndRef } = useScrollToBottom(messages);

// In JSX:
<div className="message-area">
  {messages.map(...)}
  <div ref={messagesEndRef} />
</div>
```

### 4. **Responsive Considerations**

- On smaller screens, consider stacking panels vertically
- Ensure both scrollable areas work on mobile
- Test with varying content lengths

---

## UX Considerations

### Scrollbar Styling

- Consider custom scrollbar styling for better aesthetics
- Ensure scrollbars are visible enough to indicate scrollability
- Use subtle colors that don't distract from content

### Scroll Performance

- Use `will-change: scroll` if needed for smooth scrolling
- Consider virtual scrolling for very long message lists
- Debounce scroll events if implementing custom scroll behavior

### Accessibility

- Ensure keyboard navigation works (arrow keys, page up/down)
- Provide focus indicators for scrollable areas
- Announce scrollable content to screen readers

---

## Testing Checklist

- [ ] Chat messages area scrolls independently
- [ ] Medical profile panel scrolls independently
- [ ] No scroll interference between panels
- [ ] Chat auto-scrolls to bottom on new messages
- [ ] Chat preserves scroll position when user scrolls up
- [ ] Medical profile maintains scroll position on data updates
- [ ] Fixed footer elements stay pinned in chat container
- [ ] Both scrollbars appear only when content overflows
- [ ] Layout works at different viewport heights
- [ ] No page-level scrolling occurs
- [ ] Smooth scrolling works correctly
- [ ] Keyboard navigation works in both panels

---

## Current Implementation Status

Based on `MedicalProfile.tsx`:

✅ **Correctly Implemented:**

- Chat message area uses `flex-1 overflow-y-auto min-h-0` (line 99)
- Medical profile panel uses `overflow-y-auto h-full` (line 307)
- Fixed footer uses `flex-shrink-0` (line 124)
- Auto-scroll hook is implemented

⚠️ **Potential Issues to Verify:**

- Ensure parent containers have proper height constraints
- Verify `overflow-hidden` is set on parent containers
- Test with very long content in both panels
- Confirm scrollbars appear/disappear correctly

---

## Summary

The design requires **two independent scrollable containers** that:

1. Operate completely independently
2. Have constrained heights (not just min-height)
3. Use proper flexbox patterns (`min-h-0` is critical)
4. Contain overflow at the right level
5. Provide appropriate scroll behavior (auto-scroll for chat, manual for profile)

This creates a professional, desktop-app-like experience where users can interact with both panels simultaneously without scroll interference.

