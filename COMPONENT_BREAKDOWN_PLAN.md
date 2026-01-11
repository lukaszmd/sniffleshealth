# Component Breakdown Plan

**Status:** 🟡 In Progress  
**Started:** 2024  
**Goal:** Break down large monolithic components into smaller, maintainable, reusable components

---

## Overview

This document tracks the breakdown of large components (>300 lines) into smaller, focused components. The goal is to improve maintainability, testability, and code reusability.

---

## Component Analysis

### Large Components Identified

| Component                 | Lines | Priority    | Status         | Location                              |
| ------------------------- | ----- | ----------- | -------------- | ------------------------------------- |
| **DoctorChat.tsx**        | 635   | 🔴 Critical | 🟡 In Progress | `client/features/doctor/pages/`       |
| **MedicalProfile.tsx**    | 535   | 🔴 Critical | ⏳ Pending     | `client/features/consultation/pages/` |
| **Index.tsx**             | 453   | 🟠 High     | ⏳ Pending     | `client/pages/`                       |
| **Dashboard.tsx**         | 291   | 🟡 Medium   | ⏳ Pending     | `client/features/user/pages/`         |
| **PharmacySelection.tsx** | 262   | 🟡 Medium   | ⏳ Pending     | `client/features/pharmacy/pages/`     |

**Note:** `sidebar.tsx` (769 lines) is a UI library component and will not be refactored.

---

## Breakdown Strategy

### Target Component Size

- **Ideal:** < 200 lines per component
- **Acceptable:** < 300 lines per component
- **Maximum:** 400 lines (with strong justification)

### Extraction Principles

1. **Single Responsibility** - Each component has one clear purpose
2. **Reusability** - Extract components that can be reused
3. **Testability** - Smaller components are easier to test
4. **Readability** - Clear component hierarchy and naming

---

## Component Breakdown Details

### 1. DoctorChat.tsx (635 lines) 🔴 CRITICAL

**Current Structure:**

- Main component with all logic
- Inline helper components: `DataField`, `Tag`
- Mixed concerns: layout, chat, sidebar, options, footer

**Target Breakdown:**

#### Components to Extract:

1. **DoctorChatLayout.tsx** (~30 lines)
   - Wraps entire page with PageHeader and AppFooter
   - Handles page-level layout structure
   - **Status:** ⏳ Pending

2. **DoctorChatHeader.tsx** (~40 lines)
   - Doctor connection status indicator
   - Doctor info display (name, specialty, location)
   - **Status:** ⏳ Pending

3. **DoctorChatMessages.tsx** (~60 lines)
   - Messages list rendering
   - Auto-scroll logic
   - Message type handling (AI vs User)
   - **Status:** ⏳ Pending

4. **DoctorChatOptions.tsx** (~120 lines)
   - Question options rendering
   - Single vs multiple selection handling
   - Option selection logic
   - **Status:** ⏳ Pending

5. **DoctorChatFooter.tsx** (~80 lines)
   - Safety stop banner
   - Chat input area
   - Prescription ready button
   - **Status:** ⏳ Pending

6. **DoctorChatSidebar.tsx** (~200 lines)
   - Sidebar layout and tabs
   - AI Summary tab content
   - Medical Summary tab content
   - Consultation Summary tab content
   - **Status:** ⏳ Pending

7. **ConsultationProgress.tsx** (~50 lines)
   - Phase completion indicators
   - Progress visualization
   - **Status:** ⏳ Pending

8. **MedicalSummaryDisplay.tsx** (~60 lines)
   - Medical data display
   - Personal details, allergies, conditions
   - **Status:** ⏳ Pending

#### Shared Components:

9. **DataField.tsx** (~15 lines)
   - Reusable data field display
   - Used in sidebar and other places
   - **Status:** ⏳ Pending

10. **Tag.tsx** (~15 lines)
    - Reusable tag component
    - Used for symptoms, allergies, conditions
    - **Status:** ⏳ Pending

#### Refactored Main Component:

**DoctorChat.tsx** (Target: ~150 lines)

- Orchestrates all sub-components
- Manages state and hooks
- Handles navigation logic
- **Status:** 🟡 In Progress

**Progress:**

- [x] Plan created
- [x] DoctorChatLayout extracted ✅
- [x] DoctorChatHeader extracted ✅
- [x] DoctorChatMessages extracted ✅
- [x] DoctorChatOptions extracted ✅
- [x] DoctorChatFooter extracted ✅
- [x] DoctorChatSidebar extracted ✅
- [x] ConsultationProgress extracted ✅
- [x] MedicalSummaryDisplay extracted ✅
- [x] DataField extracted (shared) ✅
- [x] Tag extracted (shared) ✅
- [x] SafetyStopBanner extracted ✅
- [x] Main component refactored ✅
- [ ] Testing completed (pending manual testing)

---

### 2. MedicalProfile.tsx (535 lines) 🔴 CRITICAL

**Current Structure:**

- Main component with chat and sidebar
- Inline helper components: `DataField`, `Tag`, `DoubleTag`
- Mixed concerns: chat interface, medical profile display, form handling

**Target Breakdown:**

#### Components to Extract:

1. **MedicalProfileLayout.tsx** (~30 lines)
   - Page layout wrapper
   - **Status:** ⏳ Pending

2. **MedicalProfileChat.tsx** (~150 lines)
   - Chat interface
   - Messages display
   - Options handling
   - Input area
   - **Status:** ⏳ Pending

3. **MedicalProfileSidebar.tsx** (~200 lines)
   - Sidebar with medical data display
   - User info section
   - Info block
   - All medical data sections
   - **Status:** ⏳ Pending

4. **SafetyStopBanner.tsx** (~30 lines)
   - Safety stop warning display
   - Reusable across chat components
   - **Status:** ⏳ Pending

5. **ChatOptions.tsx** (~100 lines)
   - Generic options component
   - Single/multiple selection
   - Can be shared with DoctorChat
   - **Status:** ⏳ Pending

6. **MedicalDataSection.tsx** (~80 lines)
   - Personal details display
   - Allergies section
   - Chronic conditions section
   - Surgical history section
   - Social history section
   - Family history section
   - **Status:** ⏳ Pending

#### Shared Components:

7. **DataField.tsx** (Reuse from DoctorChat)
   - **Status:** ⏳ Pending

8. **Tag.tsx** (Reuse from DoctorChat)
   - **Status:** ⏳ Pending

9. **DoubleTag.tsx** (~20 lines)
   - Tag with label and value
   - Used for social history
   - **Status:** ⏳ Pending

#### Refactored Main Component:

**MedicalProfile.tsx** (Target: ~120 lines)

- Orchestrates chat and sidebar
- Manages state
- **Status:** ⏳ Pending

**Progress:**

- [ ] Plan created
- [ ] MedicalProfileLayout extracted
- [ ] MedicalProfileChat extracted
- [ ] MedicalProfileSidebar extracted
- [ ] SafetyStopBanner extracted
- [ ] ChatOptions extracted (shared)
- [ ] MedicalDataSection extracted
- [ ] DoubleTag extracted
- [ ] Main component refactored
- [ ] Testing completed

---

### 3. Index.tsx (453 lines) 🟠 HIGH

**Current Structure:**

- Landing page with multiple sections
- Inline helper components: `HealthCard`, `FeatureCard`, `ConditionItem`, `DontTreatItem`

**Target Breakdown:**

#### Components to Extract:

1. **HeroSection.tsx** (~80 lines)
   - Hero banner
   - Search bar
   - Location selector
   - **Status:** ⏳ Pending

2. **HealthCategoryCards.tsx** (~100 lines)
   - Category cards grid
   - HealthCard component
   - **Status:** ⏳ Pending

3. **FeaturesSection.tsx** (~80 lines)
   - Features display
   - FeatureCard component
   - **Status:** ⏳ Pending

4. **ConditionsSection.tsx** (~100 lines)
   - What we treat section
   - What we don't treat section
   - ConditionItem, DontTreatItem components
   - **Status:** ⏳ Pending

5. **HIPAABadge.tsx** (~30 lines)
   - HIPAA compliance badge
   - Reusable across pages
   - **Status:** ⏳ Pending

#### Refactored Main Component:

**Index.tsx** (Target: ~80 lines)

- Composes all sections
- **Status:** ⏳ Pending

**Progress:**

- [ ] Plan created
- [ ] HeroSection extracted
- [ ] HealthCategoryCards extracted
- [ ] FeaturesSection extracted
- [ ] ConditionsSection extracted
- [ ] HIPAABadge extracted
- [ ] Main component refactored
- [ ] Testing completed

---

### 4. Dashboard.tsx (291 lines) 🟡 MEDIUM

**Target Breakdown:**

- Feature cards
- Dashboard sections
- **Status:** ⏳ Pending (Lower priority)

---

### 5. PharmacySelection.tsx (262 lines) 🟡 MEDIUM

**Target Breakdown:**

- Pharmacy list
- Search functionality
- Selection logic
- **Status:** ⏳ Pending (Lower priority)

---

## Shared Components to Create

### Common Components (Used Across Multiple Features)

1. **DataField.tsx**
   - Label + value display
   - Used in: DoctorChat, MedicalProfile
   - **Status:** ⏳ Pending

2. **Tag.tsx**
   - Tag/badge component
   - Used in: DoctorChat, MedicalProfile, Index
   - **Status:** ⏳ Pending

3. **SafetyStopBanner.tsx**
   - Safety warning banner
   - Used in: DoctorChat, MedicalProfile
   - **Status:** ⏳ Pending

4. **ChatOptions.tsx**
   - Question options component
   - Single/multiple selection
   - Used in: DoctorChat, MedicalProfile
   - **Status:** ⏳ Pending

---

## File Structure After Refactoring

```
client/features/doctor/
├── components/
│   ├── DoctorChatLayout.tsx
│   ├── DoctorChatHeader.tsx
│   ├── DoctorChatMessages.tsx
│   ├── DoctorChatOptions.tsx
│   ├── DoctorChatFooter.tsx
│   ├── DoctorChatSidebar.tsx
│   ├── ConsultationProgress.tsx
│   ├── MedicalSummaryDisplay.tsx
│   └── index.ts
└── pages/
    └── DoctorChat.tsx (refactored)

client/features/consultation/
├── components/
│   ├── MedicalProfileLayout.tsx
│   ├── MedicalProfileChat.tsx
│   ├── MedicalProfileSidebar.tsx
│   ├── MedicalDataSection.tsx
│   ├── DoubleTag.tsx
│   └── index.ts
└── pages/
    └── MedicalProfile.tsx (refactored)

client/components/common/
├── DataField.tsx
├── Tag.tsx
├── SafetyStopBanner.tsx
├── ChatOptions.tsx
└── index.ts

client/pages/
├── components/
│   ├── HeroSection.tsx
│   ├── HealthCategoryCards.tsx
│   ├── FeaturesSection.tsx
│   ├── ConditionsSection.tsx
│   └── index.ts
└── Index.tsx (refactored)
```

---

## Implementation Order

### Phase 1: Critical Path Components (Week 1)

1. ✅ **DoctorChat.tsx** - Start here (main demo screen)
2. ⏳ **MedicalProfile.tsx** - Second priority

### Phase 2: High Priority (Week 2)

3. ⏳ **Index.tsx** - Landing page

### Phase 3: Medium Priority (Week 3)

4. ⏳ **Dashboard.tsx**
5. ⏳ **PharmacySelection.tsx**

---

## Progress Tracking

### Overall Progress

- **Total Components:** 5 large components identified
- **In Progress:** 0
- **Completed:** 1 (DoctorChat) ✅
- **Pending:** 4

### Component Breakdown Progress

- **DoctorChat:** ✅ 100% (COMPLETED - Reduced from 635 to ~180 lines)
- **MedicalProfile:** ⏳ 0% (Planned - Next)
- **Index:** ⏳ 0% (Planned)
- **Dashboard:** ⏳ 0% (Planned)
- **PharmacySelection:** ⏳ 0% (Planned)

---

## Notes & Decisions

### Key Decisions

1. **Shared Components First:** Extract common components (DataField, Tag) first to reuse across features
2. **Incremental Refactoring:** Extract one component at a time, test, then move to next
3. **Preserve Functionality:** Ensure no behavior changes during refactoring
4. **Type Safety:** Maintain full TypeScript type safety throughout

### Challenges & Solutions

- **State Management:** Keep state in main component, pass down as props
- **Event Handlers:** Pass callbacks as props to child components
- **Styling:** Maintain existing Tailwind classes, no style changes
- **Testing:** Test each extracted component individually

---

## Next Steps

1. ✅ Create breakdown plan
2. 🟡 Start with DoctorChat.tsx
   - Extract shared components first (DataField, Tag)
   - Extract layout components
   - Extract feature components
   - Refactor main component
3. Test DoctorChat functionality
4. Move to MedicalProfile.tsx
5. Continue with remaining components

---

**Last Updated:** 2024  
**Current Focus:** DoctorChat.tsx ✅ COMPLETED - Moving to MedicalProfile.tsx

## ✅ DoctorChat.tsx Refactoring Complete!

### Results:

- **Original Size:** 635 lines
- **Refactored Size:** ~180 lines (72% reduction!)
- **Components Extracted:** 10 components
- **Shared Components Created:** 2 (DataField, Tag)

### Files Created:

1. `client/components/common/DataField.tsx` - Reusable data field
2. `client/components/common/Tag.tsx` - Reusable tag component
3. `client/features/doctor/components/DoctorChatLayout.tsx` - Page layout
4. `client/features/doctor/components/DoctorChatHeader.tsx` - Doctor header
5. `client/features/doctor/components/DoctorChatMessages.tsx` - Messages display
6. `client/features/doctor/components/DoctorChatOptions.tsx` - Question options
7. `client/features/doctor/components/DoctorChatFooter.tsx` - Footer section
8. `client/features/doctor/components/DoctorChatSidebar.tsx` - Sidebar panel
9. `client/features/doctor/components/ConsultationProgress.tsx` - Progress indicator
10. `client/features/doctor/components/MedicalSummaryDisplay.tsx` - Medical data display
11. `client/features/doctor/components/SafetyStopBanner.tsx` - Safety warning banner

### Benefits Achieved:

- ✅ Much easier to maintain and test
- ✅ Components are reusable
- ✅ Clear separation of concerns
- ✅ Better code organization
- ✅ Easier to debug and modify individual sections
