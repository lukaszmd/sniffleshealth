# Next Steps - Architecture Improvement Plan

## Current Status Summary

### ✅ Completed

1. **Phase 1.1: Shared Types & Constants** ✅
   - `shared/types/` - All type definitions created
   - `client/constants/` - Routes, colors, fonts, config extracted
   - Single source of truth established

2. **Phase 1.3: State Management** ✅
   - Zustand stores implemented (`consultation`, `chat`, `user`, `doctor`)
   - State persistence across navigation working
   - Stores are being used in pages

3. **Phase 2: Component Extraction** ✅
   - Layout components (`PageHeader`, `AppFooter`, `Logo`)
   - Chat components (`MessageBubble`, `ChatInput`)
   - Custom hooks (`useScrollToBottom`)
   - ~2,400 lines of duplicated code eliminated
   - Most pages already integrated

### ⏸️ Deferred

**Phase 1.2: API Service Layer** ⏸️ (DEFERRED)

- React Query is installed and configured in `App.tsx`
- **BUT**: No API service layer exists
- **BUT**: No pages are using React Query
- **BUT**: No API client, endpoints, queries, or mutations
- **Status**: Deferred until API endpoints are ready

---

## Recommended Next Steps

### 🎯 Priority 1: Error Handling Infrastructure (Phase 4.2)

**Why This First?**

- Improves user experience immediately
- Better error handling for current features
- Easier debugging
- Production readiness
- Can be done without API layer

**What to Build:**

```
client/lib/errors/
├── error-handler.ts      # Centralized error handling utility
├── error-boundary.tsx   # React error boundary component
└── error-types.ts       # Custom error classes
```

**Features:**

- User-friendly error messages
- Error logging (for production)
- Error boundary for React errors
- Toast notifications for errors (using Sonner)
- Inline error messages for forms

**Estimated Effort:** 1-2 days  
**Impact:** High - Production readiness

---

### 🎯 Priority 2: Custom Hooks (Phase 2.3)

**Why This?**

- Extract complex logic from components
- Reusable business logic
- Better separation of concerns
- Can be done without API layer

**Hooks to Create:**

```
client/hooks/
├── useChat.ts              # Chat message management
├── useFormNavigation.ts     # Multi-step form navigation
├── useConsultationFlow.ts   # Consultation flow state
├── useLocalStorage.ts       # LocalStorage with type safety
└── useDebounce.ts          # Debounce utility
```

**Note:** `useApi.ts` deferred until API layer is implemented

**Estimated Effort:** 2-3 days  
**Impact:** Medium-High - Developer experience

---

### 🎯 Priority 3: Feature Components (Phase 2.2)

**Extract More Reusable Components:**

```
client/components/
├── consultation/
│   ├── SymptomSelector.tsx    # Symptom selection UI
│   └── MedicalForm.tsx        # Medical profile form
├── doctor/
│   ├── DoctorCard.tsx         # Doctor profile card
│   ├── DoctorList.tsx         # List of doctors
│   └── DoctorSearch.tsx       # Doctor search interface
└── common/
    ├── FormField.tsx          # Standardized form input
    ├── LoadingSpinner.tsx     # Loading states
    └── ErrorDisplay.tsx       # Error message display
```

**Estimated Effort:** 3-4 days  
**Impact:** Medium - Code reusability

---

### 🎯 Priority 4: Migrate Remaining Pages (If Needed)

**Status Check:**

- Most pages already use `PageHeader`, `AppFooter`, `Logo`
- Verify all pages are using the new components consistently
- Check for any remaining duplicated code

**Actions:**

1. Audit each page for component usage
2. Replace any remaining inline implementations
3. Ensure consistent styling and behavior

**Estimated Effort:** 1-2 days  
**Impact:** Medium - Code consistency

---

## Implementation Order

### Week 1: Error Handling & Hooks

1. **Day 1-2**: Error handling infrastructure
   - Error handler utility
   - Error boundary component
   - Error types
   - Integrate with existing components

2. **Day 3-5**: Custom hooks
   - `useChat.ts`
   - `useFormNavigation.ts`
   - `useConsultationFlow.ts`
   - `useLocalStorage.ts`
   - `useDebounce.ts`

### Week 2: Component Extraction

1. **Day 1-3**: Feature components
   - `SymptomSelector.tsx`
   - `DoctorCard.tsx`
   - `DoctorList.tsx`

2. **Day 4-5**: Common components
   - `FormField.tsx`
   - `LoadingSpinner.tsx`
   - `ErrorDisplay.tsx`

---

## ⏸️ Deferred: API Service Layer (Phase 1.2)

**Status:** Deferred until API endpoints are ready

**What to Build (When Ready):**

#### 1. Create API Client Infrastructure

```
client/services/api/
├── api-client.ts          # Base fetch wrapper with error handling
├── endpoints.ts           # API endpoint constants
├── queries/              # React Query hooks for GET requests
│   ├── consultation.queries.ts
│   ├── doctor.queries.ts
│   └── user.queries.ts
├── mutations/            # React Query mutations for POST/PUT/DELETE
│   ├── consultation.mutations.ts
│   ├── doctor.mutations.ts
│   └── user.mutations.ts
└── index.ts             # Central exports
```

#### 2. Create Service Modules

```
client/services/
├── consultation.service.ts  # Consultation-related API calls
├── doctor.service.ts        # Doctor search/matching API calls
└── user.service.ts          # User-related API calls
```

#### 3. Update Constants

Add API configuration to `client/constants/config.ts`:

```typescript
export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  timeout: 30000,
  retries: 3,
} as const;
```

#### 4. Create API Types

Add `shared/types/api.types.ts` for API request/response types:

```typescript
// API response wrapper
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

// API error response
export interface ApiError {
  message: string;
  code?: string;
  details?: unknown;
}
```

**Estimated Effort:** 2-3 days  
**Impact:** High - Enables all future API work

**When to Implement:**

- When API endpoints are ready
- When you need to integrate with backend
- Before building features that require API calls

---

## Quick Wins (Can Do Anytime)

1. **Create `useLocalStorage` hook** - 1 hour
2. **Create `useDebounce` hook** - 30 min
3. **Add ErrorBoundary component** - 2 hours
4. **Extract `SymptomSelector` component** - 2-3 hours
5. **Create `FormField` wrapper component** - 1-2 hours

---

## Decision Points

### 1. Error Handling Strategy

- **Option A**: Toast notifications (using Sonner)
- **Option B**: Inline error messages
- **Option C**: Both (toast for global, inline for forms)
- **Recommendation**: Option C

### 2. Component Extraction Priority

- **Option A**: Extract most duplicated components first
- **Option B**: Extract by feature area (consultation, doctor, user)
- **Recommendation**: Option A for maximum impact

---

## Success Metrics

### Error Handling

- ✅ All errors caught and handled gracefully
- ✅ User-friendly error messages
- ✅ Error logging in production
- ✅ Error boundary catches React errors

### Custom Hooks

- ✅ Complex logic extracted from components
- ✅ Hooks are reusable across pages
- ✅ Better testability

### Component Extraction

- ✅ More reusable components created
- ✅ Reduced code duplication
- ✅ Consistent UI patterns

---

## Notes

- **API Service Layer is deferred** - Will implement when API endpoints are ready
- **React Query is installed** - Ready to use when needed
- **Zustand stores are working** - Can continue using for local state
- **Most components extracted** - Focus on error handling and hooks now
- **No breaking changes needed** - Can build incrementally

---

## Recommended Starting Point

**Start with Priority 1 (Error Handling Infrastructure)** because:

1. Improves user experience immediately
2. Can be done without API layer
3. Production readiness
4. Better debugging experience

**First Task**: Create `client/lib/errors/error-boundary.tsx` React error boundary component.

---

**Last Updated**: API Service Layer deferred  
**Next Review**: After Priority 1-3 completion
