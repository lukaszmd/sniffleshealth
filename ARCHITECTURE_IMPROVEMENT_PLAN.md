# Architecture Improvement Plan

## SnifflesHealth - Frontend Refactoring Strategy

**Prepared by:** Senior Frontend Engineer  
**Date:** 2024  
**Goal:** Improve maintainability, extensibility, and developer experience

---

## Executive Summary

This plan outlines a comprehensive refactoring strategy to transform the current codebase from a collection of monolithic page components into a well-structured, maintainable, and scalable application. The improvements focus on:

1. **Code Organization** - Feature-based architecture with reusable components
2. **State Management** - Centralized state for user data and application flow
3. **API Layer** - Standardized API communication with React Query
4. **Type Safety** - Enhanced TypeScript usage with shared types
5. **Developer Experience** - Better tooling, constants, and patterns

---

## Current State Analysis

### Strengths ✅

- Modern tech stack (React 18, TypeScript, Vite, TailwindCSS)
- React Query and React Hook Form available
- Good UI component library (Radix UI)
- Path aliases configured (`@/*`, `@shared/*`)
- Express server integration

### Pain Points ❌

1. **No Global State Management** - Each page manages its own state independently
2. **Code Duplication** - Headers, logos, chat components repeated across pages
3. **Monolithic Components** - Pages are 300-600 lines with mixed concerns
4. **No API Layer** - React Query configured but unused, no fetch utilities
5. **Inline Styles** - Font families and colors hardcoded throughout
6. **No Shared Types** - Interfaces defined inline in components
7. **No Feature Organization** - Flat structure in `pages/` directory
8. **Magic Strings/Values** - Hardcoded routes, colors, text throughout
9. **No Error Handling** - No centralized error boundaries or handling
10. **TypeScript Strict Mode Disabled** - Missing type safety benefits

---

## Improvement Plan

### Phase 1: Foundation & Infrastructure (High Priority)

**Goal:** Establish solid foundation for future improvements

#### 1.1 Shared Types & Constants

**Priority:** 🔴 Critical  
**Effort:** Medium  
**Impact:** High

**Actions:**

- Create `shared/types/` directory structure:
  - `user.types.ts` - User, patient, doctor types
  - `consultation.types.ts` - Consultation, symptoms, medical data
  - `api.types.ts` - API request/response types
  - `common.types.ts` - Shared utilities (Message, Status, etc.)
- Create `client/constants/` directory:
  - `routes.ts` - All route paths as constants
  - `colors.ts` - Design system colors (extract from inline styles)
  - `fonts.ts` - Font family constants
  - `config.ts` - App configuration (API base URL, etc.)
- Migrate inline interfaces to shared types

**Benefits:**

- Single source of truth for types
- Easier refactoring
- Better IDE autocomplete
- Type safety across client/server

#### 1.2 API Service Layer

**Priority:** 🔴 Critical  
**Effort:** Medium  
**Impact:** High

**Actions:**

- Create `client/services/api/` directory:
  - `api-client.ts` - Base fetch wrapper with error handling
  - `endpoints.ts` - API endpoint constants
  - `queries/` - React Query hooks for data fetching
  - `mutations/` - React Query mutations for data updates
- Implement:
  - Request/response interceptors
  - Error handling and transformation
  - Loading states management
  - Type-safe API calls
- Create service modules:
  - `user.service.ts` - User-related API calls
  - `consultation.service.ts` - Consultation API calls
  - `doctor.service.ts` - Doctor search/matching API calls

**Benefits:**

- Centralized API logic
- Consistent error handling
- Automatic caching and refetching (React Query)
- Type-safe API calls

#### 1.3 State Management Setup

**Priority:** 🔴 Critical  
**Effort:** Medium  
**Impact:** High

**Actions:**

- Choose state management solution (recommend Zustand for simplicity)
- Create `client/stores/` directory:
  - `user.store.ts` - User profile, authentication state
  - `consultation.store.ts` - Current consultation flow state
  - `ui.store.ts` - UI state (modals, sidebars, etc.)
- Implement:
  - User session management
  - Consultation flow state (symptoms → profile → doctor → chat)
  - Form data persistence across navigation

**Benefits:**

- Shared state across components
- Better user experience (data persistence)
- Easier debugging with devtools
- Predictable state updates

---

### Phase 2: Component Extraction & Reusability (High Priority)

**Goal:** Break down monolithic components into reusable pieces

#### 2.1 Layout Components

**Priority:** 🟠 High  
**Effort:** Medium  
**Impact:** High

**Actions:**

- Create `client/components/layout/`:
  - `AppHeader.tsx` - Reusable header with logo, navigation
  - `PageHeader.tsx` - Step indicator, back button, title
  - `AppFooter.tsx` - Footer with HIPAA badge, links
  - `PageLayout.tsx` - Wrapper component for consistent page structure
- Extract logo component:
  - `Logo.tsx` - Sniffles Health logo (used in 10+ places)
- Extract common patterns:
  - `StepIndicator.tsx` - "Step X of Y" component
  - `BackButton.tsx` - Consistent back navigation

**Benefits:**

- DRY principle (Don't Repeat Yourself)
- Consistent UI across pages
- Easier to update branding/design
- Reduced bundle size

#### 2.2 Feature Components

**Priority:** 🟠 High  
**Effort:** High  
**Impact:** High

**Actions:**

- Create `client/components/consultation/`:
  - `ChatInterface.tsx` - Reusable chat UI (used in DoctorChat, MedicalProfile)
  - `MessageBubble.tsx` - AI/User message components
  - `ChatInput.tsx` - Message input with send button
  - `SymptomSelector.tsx` - Symptom selection UI
  - `MedicalForm.tsx` - Medical profile form components
- Create `client/components/doctor/`:
  - `DoctorCard.tsx` - Doctor profile card
  - `DoctorList.tsx` - List of available doctors
  - `DoctorSearch.tsx` - Doctor search interface
- Create `client/components/common/`:
  - `FormField.tsx` - Standardized form input wrapper
  - `Button.tsx` - Enhanced button with variants (already exists, may need extension)
  - `LoadingSpinner.tsx` - Loading states
  - `ErrorDisplay.tsx` - Error message display

**Benefits:**

- Reusable components across features
- Easier testing
- Consistent UX patterns
- Faster development of new features

#### 2.3 Custom Hooks

**Priority:** 🟠 High  
**Effort:** Low-Medium  
**Impact:** Medium-High

**Actions:**

- Create `client/hooks/` extensions:
  - `useChat.ts` - Chat message management logic
  - `useFormNavigation.ts` - Multi-step form navigation
  - `useConsultationFlow.ts` - Consultation flow state management
  - `useApi.ts` - Wrapper for API calls with error handling
  - `useLocalStorage.ts` - LocalStorage with type safety
  - `useDebounce.ts` - Debounce utility for search/inputs

**Benefits:**

- Extract complex logic from components
- Reusable business logic
- Easier testing
- Better separation of concerns

---

### Phase 3: Code Organization & Structure (Medium Priority)

**Goal:** Organize code by features/domains

#### 3.1 Feature-Based Organization

**Priority:** 🟡 Medium  
**Effort:** High  
**Impact:** Medium-High

**Actions:**

- Reorganize `client/` structure:

```
client/
├── features/
│   ├── consultation/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── pages/
│   │       ├── Symptoms.tsx
│   │       ├── MedicalProfile.tsx
│   │       ├── Consultation.tsx
│   │       └── SummaryConsultation.tsx
│   ├── doctor/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── pages/
│   │       ├── FindingDoctor.tsx
│   │       └── DoctorChat.tsx
│   ├── user/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── pages/
│   │       ├── KYC.tsx
│   │       ├── AddressDetails.tsx
│   │       └── Dashboard.tsx
│   └── payment/
│       ├── components/
│       ├── services/
│       └── pages/
│           ├── SelectConsultationType.tsx
│           └── PaymentConfirmation.tsx
├── shared/
│   ├── components/  # Truly shared components
│   ├── hooks/
│   ├── utils/
│   └── constants/
└── pages/  # Keep for backward compatibility during migration
```

**Benefits:**

- Clear feature boundaries
- Easier to find related code
- Better code splitting opportunities
- Team collaboration (feature ownership)

#### 3.2 Route Configuration

**Priority:** 🟡 Medium  
**Effort:** Low  
**Impact:** Medium

**Actions:**

- Create `client/routes/` directory:
  - `routes.config.ts` - Centralized route configuration
  - `route-guards.ts` - Route protection logic
- Extract routes from `App.tsx`:
  - Use route configuration object
  - Add route metadata (title, requiresAuth, etc.)
  - Implement lazy loading for routes

**Benefits:**

- Single source of truth for routes
- Easier route management
- Better code splitting
- Route protection logic

---

### Phase 4: Developer Experience & Quality (Medium Priority)

**Goal:** Improve development workflow and code quality

#### 4.1 TypeScript Improvements

**Priority:** 🟡 Medium  
**Effort:** Medium  
**Impact:** Medium-High

**Actions:**

- Gradually enable TypeScript strict mode:
  - Fix `strictNullChecks` first
  - Enable `noImplicitAny`
  - Enable `strict` mode
- Add type utilities:
  - `client/lib/types.ts` - Utility types (Pick, Omit extensions)
  - Better type inference for API responses
- Add JSDoc comments for complex types

**Benefits:**

- Catch bugs at compile time
- Better IDE support
- Self-documenting code
- Easier refactoring

#### 4.2 Error Handling

**Priority:** 🟡 Medium  
**Effort:** Medium  
**Impact:** High

**Actions:**

- Create error handling infrastructure:
  - `client/lib/errors/` - Custom error classes
  - `ErrorBoundary.tsx` - React error boundary component
  - `error-handler.ts` - Centralized error handling utility
- Implement:
  - API error transformation
  - User-friendly error messages
  - Error logging (for production)
  - Retry logic for failed requests

**Benefits:**

- Better user experience
- Easier debugging
- Graceful error recovery
- Production error tracking

#### 4.3 Testing Infrastructure

**Priority:** 🟡 Medium  
**Effort:** High  
**Impact:** Medium (long-term high)

**Actions:**

- Set up testing utilities:
  - `client/__tests__/utils/` - Test helpers, mocks
  - Configure Vitest for component testing
  - Add React Testing Library setup
- Create example tests:
  - Component tests for extracted components
  - Hook tests for custom hooks
  - Service tests for API layer
- Add test coverage reporting

**Benefits:**

- Confidence in refactoring
- Prevent regressions
- Documentation through tests
- Better code quality

#### 4.4 Development Tools

**Priority:** 🟢 Low  
**Effort:** Low  
**Impact:** Low-Medium

**Actions:**

- Add development utilities:
  - `client/lib/dev/` - Dev-only utilities
  - React Query DevTools (already available)
  - State management DevTools
- Create development scripts:
  - Storybook for component documentation (optional)
  - Component playground

**Benefits:**

- Faster development
- Better debugging
- Component documentation
- Onboarding new developers

---

### Phase 5: Performance & Optimization (Low Priority)

**Goal:** Optimize bundle size and runtime performance

#### 5.1 Code Splitting

**Priority:** 🟢 Low  
**Effort:** Medium  
**Impact:** Medium

**Actions:**

- Implement route-based code splitting:
  - Lazy load page components
  - Dynamic imports for heavy components
- Component-level splitting:
  - Lazy load modals, charts, etc.
- Analyze bundle size:
  - Add bundle analyzer
  - Identify optimization opportunities

**Benefits:**

- Faster initial load
- Better user experience
- Reduced bundle size

#### 5.2 Performance Optimizations

**Priority:** 🟢 Low  
**Effort:** Medium  
**Impact:** Medium

**Actions:**

- React optimizations:
  - Memoization for expensive components
  - `useMemo`/`useCallback` where appropriate
  - Virtual scrolling for long lists
- Image optimization:
  - Lazy loading images
  - Image optimization pipeline
- Caching strategies:
  - Service worker for offline support (optional)
  - Better React Query cache configuration

**Benefits:**

- Faster page loads
- Smoother interactions
- Better mobile experience

---

## Implementation Strategy

### Recommended Order

1. **Week 1-2: Foundation**
   - Phase 1.1: Shared Types & Constants
   - Phase 1.2: API Service Layer
   - Phase 1.3: State Management Setup

2. **Week 3-4: Component Extraction**
   - Phase 2.1: Layout Components
   - Phase 2.2: Feature Components (start with most duplicated)
   - Phase 2.3: Custom Hooks

3. **Week 5-6: Refactoring Pages**
   - Migrate pages to use new components
   - Integrate state management
   - Connect API layer

4. **Week 7-8: Organization & Polish**
   - Phase 3: Feature-based organization
   - Phase 4: Error handling, TypeScript improvements
   - Testing infrastructure

### Migration Strategy

**Incremental Approach:**

- Keep existing code working during refactoring
- Migrate one page/feature at a time
- Use feature flags if needed
- Maintain backward compatibility during transition

**Risk Mitigation:**

- Test thoroughly after each phase
- Keep git history clean (separate commits per feature)
- Code review for each major change
- Rollback plan for each phase

---

## Success Metrics

### Code Quality

- ✅ Reduce code duplication by 60%+
- ✅ Average component size < 200 lines
- ✅ Type coverage > 90%
- ✅ Test coverage > 70% (long-term goal)

### Developer Experience

- ✅ Time to add new feature reduced by 40%
- ✅ Onboarding time for new developers < 2 days
- ✅ Build time < 30 seconds
- ✅ Hot reload time < 2 seconds

### Maintainability

- ✅ Single source of truth for types, routes, constants
- ✅ Clear component hierarchy
- ✅ Documented patterns and conventions
- ✅ Consistent code style

---

## Risks & Considerations

### Risks

1. **Breaking Changes** - Mitigate with incremental migration
2. **Time Investment** - Phased approach allows for value delivery
3. **Team Adoption** - Document patterns and provide examples
4. **Scope Creep** - Stick to plan, defer nice-to-haves

### Considerations

- Maintain design system consistency
- Ensure accessibility standards
- Keep performance in mind during refactoring
- Document architectural decisions

---

## Next Steps

1. **Review & Approve Plan** - Get stakeholder buy-in
2. **Create Detailed Tasks** - Break down into specific tickets
3. **Set Up Project Board** - Track progress (GitHub Projects, Jira, etc.)
4. **Start Phase 1** - Begin with foundation work
5. **Regular Reviews** - Weekly check-ins on progress

---

## Questions & Decisions Needed

1. **State Management Library** - Zustand vs Redux Toolkit vs Jotai?
2. **Feature Organization** - When to implement? (Can be deferred)
3. **Testing Strategy** - Unit tests vs Integration tests priority?
4. **TypeScript Strict Mode** - Gradual vs all-at-once?
5. **Component Library** - Document in Storybook or inline docs?

---

## Appendix: File Structure Preview

```
client/
├── components/
│   ├── layout/          # AppHeader, PageHeader, Footer, etc.
│   ├── consultation/    # ChatInterface, MessageBubble, etc.
│   ├── doctor/          # DoctorCard, DoctorList, etc.
│   ├── common/          # FormField, LoadingSpinner, etc.
│   └── ui/              # Existing shadcn components
├── features/            # Feature-based organization (Phase 3)
├── hooks/               # Custom hooks
├── services/
│   └── api/             # API client, queries, mutations
├── stores/              # State management (Zustand/Redux)
├── lib/
│   ├── utils.ts         # Existing utilities
│   ├── errors/          # Error handling
│   └── types.ts         # Type utilities
├── constants/
│   ├── routes.ts
│   ├── colors.ts
│   ├── fonts.ts
│   └── config.ts
└── pages/               # Page components (during migration)

shared/
├── types/
│   ├── user.types.ts
│   ├── consultation.types.ts
│   ├── api.types.ts
│   └── common.types.ts
└── api.ts               # Existing shared API types
```

---

**End of Plan**
