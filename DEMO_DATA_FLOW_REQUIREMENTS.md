# Demo Data Flow Requirements

**Prepared by:** Product Manager  
**Date:** 2024  
**Priority:** 🔴 **CRITICAL** - Demo Blocking  
**Status:** Ready for Implementation

---

## Executive Summary

For a successful stakeholder demo, we need to ensure that user data flows seamlessly through the entire consultation journey. Currently, there are data propagation gaps that break the demo narrative and reduce the professional appearance of the application.

**Critical Issues:**

1. Doctor name not persisting from selection to chat screen
2. Symptoms not properly displayed (showing IDs or defaults instead of actual selected symptoms)
3. Medical profile data (allergies, conditions, etc.) not visible in doctor chat sidebar

**Impact:** These issues make the demo look broken and unprofessional, potentially undermining stakeholder confidence.

---

## User Journey Context

### Complete Flow

```
1. Landing Page → User selects health category
2. Symptoms Page → User selects symptoms (e.g., "Fever", "Headache", "Fatigue")
3. Medical Profile → User provides medical data (age, allergies, conditions, etc.)
4. Consultation Page → User sees doctor options
5. Finding Doctor → System matches doctor
6. Doctor Chat → User chats with selected doctor
```

### Demo Narrative

_"The user has selected symptoms and provided their medical history. Now they're connected with Dr. Evelyn Reed, who can see all their information and is ready to help."_

---

## Requirements

### REQ-1: Doctor Selection & Persistence

**Priority:** 🔴 **CRITICAL**  
**User Story:** As a stakeholder viewing the demo, I want to see the selected doctor's name displayed correctly in the chat screen, so the demo looks professional and complete.

#### Current Behavior

- Doctor selection happens in `Consultation.tsx` but is NOT saved to store
- `FindingDoctor.tsx` navigates to chat without setting doctor
- `DoctorChat.tsx` falls back to default doctor, but name format is inconsistent
- Result: Shows "Dr. [Name], MD" instead of actual doctor name

#### Expected Behavior

- When user selects a doctor in `Consultation.tsx`, save to `useDoctorStore`
- When navigating from `FindingDoctor.tsx`, ensure selected doctor is in store
- Doctor name should display as: "Dr. Evelyn Reed, MD" (consistent format)
- Doctor info should persist across navigation

#### Acceptance Criteria

- [ ] Doctor selected in Consultation page is saved to `useDoctorStore`
- [ ] Doctor name displays correctly in `DoctorChatHeader` component
- [ ] Format: "Dr. [FirstName] [LastName], [Title]" (e.g., "Dr. Evelyn Reed, MD")
- [ ] Doctor specialty, experience, and location display correctly
- [ ] Doctor initials display correctly in avatar
- [ ] Works for both doctor options (Dr. Evelyn Reed and Dr. Marcus Chen)

#### Technical Notes

- Doctor data structure in `Consultation.tsx` includes "Dr." prefix in name
- Need to normalize doctor name format OR update store to handle both formats
- Ensure `FindingDoctor.tsx` preserves doctor selection from previous step

---

### REQ-2: Symptoms Display & Mapping

**Priority:** 🔴 **CRITICAL**  
**User Story:** As a stakeholder viewing the demo, I want to see the actual symptoms the user selected (not IDs or defaults), so the demo shows a complete user journey.

#### Current Behavior

- Symptoms are stored as IDs in `selectedSymptoms` array (e.g., `["4", "5", "9"]`)
- `DoctorChat.tsx` has hardcoded mapping for only 4 symptom IDs
- Falls back to default symptoms if mapping not found
- Result: Shows generic symptoms or "Symptom 4" instead of actual names

#### Expected Behavior

- Map symptom IDs to actual symptom names using `CATEGORY_SYMPTOMS` constant
- Display all selected symptoms correctly in sidebar
- Show symptoms consistently across all pages (Symptoms → Medical Profile → Doctor Chat)

#### Acceptance Criteria

- [x] Create utility function to map symptom IDs to names ✅
- [x] Function should search across all categories in `CATEGORY_SYMPTOMS` ✅
- [x] Display actual symptom names (e.g., "Fever", "Headache", "Fatigue") ✅
- [x] Handle custom symptoms if any ✅
- [x] Symptoms display in Doctor Chat sidebar "Reported Symptoms" section ✅
- [x] Symptoms display in Finding Doctor page ✅
- [x] Symptoms display in Consultation page ✅
- [x] **CRITICAL FIX:** Doctor chat questions show symptom names, not IDs (e.g., "Frequent urination" not "infection_2") ✅

#### Technical Notes

- Symptom IDs are category-prefixed (e.g., `"fever_flu_1"`, `"skin_2"`, `"infection_2"`)
- Need to search across all categories: `FEVER_FLU`, `SKIN_ISSUES`, `INFECTIONS`, `SEXUAL_HEALTH`
- ✅ Created `getSymptomName(id: string): string` utility function
- ✅ Created `getSymptomsFromIds(ids: string[]): Symptom[]` for batch lookup
- ✅ **FIXED:** Updated `getPrimarySymptom` in `doctorChatQuestions.ts` to use symptom mapping
- ✅ **FIXED:** Updated conditional symptom matching to use symptom names instead of IDs

---

### REQ-3: Medical Profile Data Display

**Priority:** 🔴 **CRITICAL**  
**User Story:** As a stakeholder viewing the demo, I want to see the user's complete medical profile (allergies, conditions, etc.) in the doctor chat sidebar, so it demonstrates the full consultation context.

#### Current Behavior

- Medical data is collected in `MedicalProfile.tsx` and stored in `useConsultationStore`
- Data is passed to `DoctorChatSidebar` component
- `MedicalSummaryDisplay` component exists but may not be showing all data
- Result: Medical data may not be visible or incomplete in sidebar

#### Expected Behavior

- All medical profile data should be visible in "Medical Summary" tab of sidebar
- Data should include:
  - Personal Details (Age, Sex, Weight, Height)
  - Allergies (if any)
  - Chronic Conditions (if any)
  - Past Surgical History (if any)
  - Social History (if any)
  - Family History (if any)

#### Acceptance Criteria

- [ ] Medical data from `MedicalProfile.tsx` flows to `DoctorChat.tsx`
- [ ] "Medical Summary" tab in sidebar displays all collected data
- [ ] Empty fields show "—" or "None" appropriately
- [ ] Data sections only show if data exists (conditional rendering)
- [ ] All data types display correctly (strings, arrays, objects)
- [ ] Social History displays as label-value pairs (e.g., "Smoking: Moderate")

#### Technical Notes

- Medical data structure: `MedicalData` interface
- `MedicalSummaryDisplay` component already exists - verify it shows all fields
- Ensure data flows from `useConsultationStore` → `DoctorChat` → `DoctorChatSidebar` → `MedicalSummaryDisplay`

---

### REQ-4: Data Consistency Across Pages

**Priority:** 🟠 **HIGH**  
**User Story:** As a stakeholder viewing the demo, I want to see consistent data across all pages, so the demo tells a cohesive story.

#### Expected Behavior

- Same symptoms shown in: Symptoms page → Medical Profile → Finding Doctor → Doctor Chat
- Same medical data shown in: Medical Profile sidebar → Doctor Chat sidebar
- Same doctor info shown in: Consultation page → Doctor Chat header
- AI assessment consistent across pages

#### Acceptance Criteria

- [ ] Symptoms are identical across all pages
- [ ] Medical data is identical in both sidebars
- [ ] Doctor information is consistent
- [ ] No data loss during navigation
- [ ] No default/fallback data shown when real data exists

---

## Implementation Plan

### Phase 1: Doctor Selection Fix (Priority 1)

**Tasks:**

1. Update `Consultation.tsx` to save selected doctor to `useDoctorStore`
2. Update `FindingDoctor.tsx` to preserve doctor selection
3. Normalize doctor name format (handle "Dr." prefix consistently)
4. Update `DoctorChat.tsx` to use doctor from store (remove hardcoded default)
5. Test doctor selection flow end-to-end

**Estimated Effort:** 2-3 hours

### Phase 2: Symptoms Mapping (Priority 1)

**Tasks:**

1. Create utility function `getSymptomName(id: string): string`
2. Create utility function `getSymptomsFromIds(ids: string[]): Symptom[]`
3. Update `DoctorChat.tsx` to use utility instead of hardcoded mapping
4. Update `FindingDoctor.tsx` to use utility
5. Update any other pages showing symptoms
6. Test with different symptom combinations

**Estimated Effort:** 2-3 hours

### Phase 3: Medical Data Display (Priority 1)

**Tasks:**

1. Verify `MedicalSummaryDisplay` shows all medical data fields
2. Add missing fields if needed (Surgical History, Social History, Family History)
3. Ensure proper formatting for all data types
4. Test with various medical data combinations
5. Verify empty state handling

**Estimated Effort:** 2-3 hours

### Phase 4: End-to-End Testing (Priority 2)

**Tasks:**

1. Test complete user flow with real data
2. Verify data persistence across navigation
3. Test with different symptom selections
4. Test with different medical profiles
5. Test with both doctor options
6. Document demo script with expected data

**Estimated Effort:** 2-3 hours

---

## Demo Script Updates

### Updated Demo Flow with Data

1. **Landing Page**
   - Select "Fever and Flu" category

2. **Symptoms Page**
   - Select: "Fever", "Headache", "Fatigue", "Cough"
   - **Note:** These will be shown throughout demo

3. **Medical Profile**
   - Enter: Age 35, Male, 180 lbs, 6'0"
   - Allergies: "Penicillin"
   - Chronic Conditions: "Hypertension"
   - **Note:** This data will appear in doctor chat sidebar

4. **Consultation Page**
   - Select "Dr. Evelyn Reed, MD" (text consultation)
   - **Note:** This doctor will appear in chat

5. **Finding Doctor**
   - Shows loading, then navigates
   - **Note:** Symptoms should be visible in sidebar

6. **Doctor Chat**
   - **Verify:** Doctor name shows "Dr. Evelyn Reed, MD"
   - **Verify:** Symptoms show in sidebar: "Fever", "Headache", "Fatigue", "Cough"
   - **Verify:** Medical Summary tab shows: Age 35, Male, Allergies: Penicillin, Conditions: Hypertension
   - **Verify:** Chat proceeds with doctor consultation

---

## Success Criteria

### Must-Have (Demo Success)

- ✅ Doctor name displays correctly (not "Dr. [Name]")
- ✅ Actual selected symptoms display (not IDs or defaults)
- ✅ Medical profile data visible in sidebar
- ✅ Data consistent across all pages

### Should-Have (Demo Excellence)

- ✅ All medical data fields display correctly
- ✅ Empty states handled gracefully
- ✅ Data persists across page refreshes (if using localStorage)
- ✅ Smooth data flow with no glitches

---

## Technical Specifications

### Doctor Data Flow

```
Consultation.tsx (user selects doctor)
  ↓
useDoctorStore.setSelectedDoctor(doctor)
  ↓
FindingDoctor.tsx (preserves selection)
  ↓
DoctorChat.tsx (reads from store)
  ↓
DoctorChatHeader (displays doctor)
```

### Symptoms Data Flow

```
Symptoms.tsx (user selects symptoms)
  ↓
useConsultationStore.setSelectedSymptoms(ids)
  ↓
[All pages read from store]
  ↓
Utility function maps IDs → Names
  ↓
Display in UI
```

### Medical Data Flow

```
MedicalProfile.tsx (user enters data)
  ↓
useConsultationStore.setMedicalData(data)
  ↓
DoctorChat.tsx (reads from store)
  ↓
DoctorChatSidebar (passes to component)
  ↓
MedicalSummaryDisplay (renders data)
```

---

## Risk Mitigation

### Risks

1. **Data Loss:** If store is reset between pages
   - **Mitigation:** Verify store persistence, add localStorage if needed

2. **Symptom Mapping Failure:** If IDs don't match
   - **Mitigation:** Comprehensive mapping function with fallback

3. **Medical Data Not Showing:** If component not receiving props
   - **Mitigation:** Verify prop drilling, add console logs for debugging

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] End-to-end flow tested
- [ ] Demo script updated
- [ ] No console errors
- [ ] Data displays correctly in all scenarios
- [ ] Code reviewed
- [ ] Documentation updated

---

## Next Steps

1. **Review Requirements** - Get stakeholder/team approval
2. **Create Implementation Tickets** - Break down into tasks
3. **Start Phase 1** - Doctor selection fix (highest priority)
4. **Test After Each Phase** - Ensure no regressions
5. **Update Demo Script** - Document expected behavior

---

**Remember:** The goal is a **flawless demo** that tells a complete, professional story. Every piece of data should flow seamlessly from collection to display.
