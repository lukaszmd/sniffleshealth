# Phase 2 Component Usage Guide

Quick reference for using the extracted components.

## Layout Components

### Logo
```typescript
import { Logo } from "@/components/layout";

// Default (medium size)
<Logo />

// Large for hero sections
<Logo size="lg" />

// Small for compact spaces
<Logo size="sm" />
```

### PageHeader
```typescript
import { PageHeader } from "@/components/layout";
import { ROUTES } from "@/constants";

// Full header with back button, step, title, and logo
<PageHeader
  backTo={ROUTES.HOME}
  step="Step 2 of 4"
  title="Select symptoms"
/>

// Just logo (centered)
<PageHeader showLogo={true} />

// Header without logo
<PageHeader
  backTo={ROUTES.HOME}
  title="Page Title"
  showLogo={false}
/>
```

### AppFooter
```typescript
import { AppFooter } from "@/components/layout";

// Simple footer with About Us, Privacy Policy, and HIPAA badge
<AppFooter />
```

## Chat Components

### MessageBubble
```typescript
import { AIMessage, UserMessage } from "@/components/chat/MessageBubble";
import { ROUTES } from "@/constants";

// AI/Doctor message
<AIMessage
  text="Hello, how can I help you?"
  sender="Dr. Smith, MD"
/>

// AI message with link
<AIMessage
  text="Here's your prescription:"
  sender="Dr. Smith, MD"
  linkText="View Prescription"
  linkUrl={ROUTES.PRESCRIPTION}
/>

// User message
<UserMessage text="I have a headache" />
```

### ChatInput
```typescript
import { ChatInput } from "@/components/chat/ChatInput";

const [inputValue, setInputValue] = useState("");

<ChatInput
  value={inputValue}
  onChange={setInputValue}
  onSend={handleSend}
  placeholder="Enter your message here"  // Optional
  className="w-[557px]"  // Optional
/>
```

## Custom Hooks

### useScrollToBottom
```typescript
import { useScrollToBottom } from "@/hooks/useScrollToBottom";

const { messagesEndRef } = useScrollToBottom(messages);

// In JSX, place ref at end of scrollable container
<div className="overflow-y-auto">
  {messages.map((msg) => <Message key={msg.id} {...msg} />)}
  <div ref={messagesEndRef} />
</div>
```

## Migration Pattern

### Before
```typescript
// 80+ lines of header code
<div className="bg-[#FCFAF8] border-b...">
  {/* Logo, back button, step indicator */}
</div>
```

### After
```typescript
import { PageHeader } from "@/components/layout";

<PageHeader
  backTo={ROUTES.HOME}
  step="Step 2 of 4"
  title="Select symptoms"
/>
```

## Benefits

- ✅ **Less Code**: 80+ lines → 4 lines
- ✅ **Consistency**: All pages look the same
- ✅ **Maintainability**: Update once, applies everywhere
- ✅ **Type Safety**: TypeScript ensures correct usage

