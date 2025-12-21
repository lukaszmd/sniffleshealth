# Hooks Usage Assessment

## Overview

This document assesses all custom hooks created in Phase 2.3 and identifies opportunities for improvement.

---

## 1. ✅ `useChat` Hook

### Current Usage

- **DoctorChat.tsx** ✅ Used correctly
- **MedicalProfile.tsx** ✅ Used correctly

### Assessment

**Status:** ✅ **Well Implemented**

**Strengths:**

- Properly extracts chat logic from components
- Auto-initialization works correctly
- Clean API with `sendMessage`, `sendUserMessage`, `sendAIMessage`

**Issues Found:**

1. ⚠️ **Minor**: `initializeMessages` is returned but never used (auto-initialization handles it)
   - **Impact**: Low - unused export, not a bug
   - **Recommendation**: Keep it for manual initialization if needed

**Usage Quality:** 9/10

---

## 2. ✅ `useFormNavigation` Hook

### Current Usage

- **Symptoms.tsx** ✅ Used for step info
- **MedicalProfile.tsx** ✅ Used for step info
- **SummaryConsultation.tsx** ✅ Used for step info and navigation
- **Consultation.tsx** ✅ Used for step info
- **SelectConsultationType.tsx** ✅ Used for step info and navigation

### Assessment

**Status:** ✅ **Well Implemented**

**Strengths:**

- Centralized step configuration
- Dynamic step detection from route
- Navigation helpers available

**Issues Found:**

1. ⚠️ **Minor**: `goToPrevious` extracted in Symptoms.tsx but never used
   - **Impact**: Low - unused variable
   - **Recommendation**: Remove if not needed, or use for back button

2. ⚠️ **Minor**: `goToPrevious` extracted in Consultation.tsx but never used
   - **Impact**: Low - unused variable
   - **Recommendation**: Remove if not needed

3. ⚠️ **Enhancement Opportunity**: Back buttons still use hardcoded routes instead of `goToPrevious()`
   - **Impact**: Medium - inconsistent navigation pattern
   - **Recommendation**: Use `goToPrevious()` in PageHeader back buttons where appropriate

**Usage Quality:** 8/10

---

## 3. ✅ `useConsultationFlow` Hook

### Current Usage

- **Symptoms.tsx** ✅ Used correctly
- **MedicalProfile.tsx** ✅ Used correctly
- **FindingDoctor.tsx** ✅ Used correctly
- **DoctorChat.tsx** ✅ Used correctly

### Assessment

**Status:** ✅ **Well Implemented**

**Strengths:**

- All consultation-related pages use it
- Provides validation helpers
- Navigation helpers integrated

**Issues Found:**

1. ✅ **No issues** - Hook is being used optimally

**Usage Quality:** 10/10

---

## 4. ❌ `useLocalStorage` Hook

### Current Usage

- **NOT USED ANYWHERE** ❌

### Assessment

**Status:** ❌ **Not Leveraged**

**Potential Use Cases:**

1. **User Preferences**
   - Save user's location preference (Index.tsx has location selector)
   - Save theme preferences
   - Save consultation type preference

2. **Form Data Persistence**
   - Save form data temporarily (AddressDetails, KYC forms)
   - Auto-save draft messages in chat
   - Persist custom symptoms input

3. **State Persistence**
   - Persist consultation state across page refreshes
   - Save selected doctor preference
   - Remember last visited page

**Recommendations:**

1. **High Priority**: Use in `AddressDetails.tsx` to persist form data
2. **Medium Priority**: Use in `Symptoms.tsx` for custom symptom input
3. **Low Priority**: Use for user preferences (location, theme)

**Usage Quality:** 0/10 (Not used)

---

## 5. ⚠️ `useDebounce` Hook

### Current Usage

- **DoctorSearch.tsx** ✅ Used correctly

### Assessment

**Status:** ⚠️ **Partially Leveraged**

**Issues Found:**

1. ❌ **Missing**: `Index.tsx` has a search input (line 135-140) that should use debounce
   - **Impact**: High - Search could trigger too many operations
   - **Recommendation**: Add debounce to search input

2. ⚠️ **Enhancement**: `Symptoms.tsx` has custom symptom input that could benefit from debounce
   - **Impact**: Low - Currently just local state
   - **Recommendation**: Consider if auto-save or validation needed

3. ✅ **Correct**: `DoctorSearch.tsx` uses it properly

**Usage Quality:** 5/10 (Only 1 of 2+ potential uses)

---

## Summary

### Overall Hook Usage Score: 6.4/10

| Hook                  | Usage Score | Status            |
| --------------------- | ----------- | ----------------- |
| `useChat`             | 9/10        | ✅ Well Used      |
| `useFormNavigation`   | 8/10        | ✅ Well Used      |
| `useConsultationFlow` | 10/10       | ✅ Well Used      |
| `useLocalStorage`     | 0/10        | ❌ Not Used       |
| `useDebounce`         | 5/10        | ⚠️ Partially Used |

---

## Recommendations

### High Priority

1. **Use `useLocalStorage` in AddressDetails.tsx**
   - Persist form data across page refreshes
   - Better user experience

2. **Add `useDebounce` to Index.tsx search**
   - Prevent excessive search operations
   - Better performance

### Medium Priority

3. **Use `goToPrevious()` in PageHeader back buttons**
   - Consistent navigation pattern
   - Leverage hook's navigation helpers

4. **Remove unused variables**
   - Clean up `goToPrevious` in Symptoms.tsx and Consultation.tsx if not needed

### Low Priority

5. **Consider `useLocalStorage` for custom symptom input**
   - Auto-save user's custom symptoms
   - Persist across sessions

---

## Code Quality Issues

### 1. Unused Variables

- `goToPrevious` in Symptoms.tsx (line 32)
- `goToPrevious` in Consultation.tsx (line 11)

### 2. Missing Hook Usage

- `useLocalStorage` - Not used anywhere
- `useDebounce` - Only used in one place, missing in Index.tsx

### 3. Inconsistent Patterns

- Back buttons use hardcoded routes instead of `goToPrevious()`
- Some pages use hook navigation, others use direct `navigate()`

---

## Next Steps

1. ✅ **Immediate**: Add `useDebounce` to Index.tsx search
2. ✅ **Immediate**: Add `useLocalStorage` to AddressDetails.tsx
3. ⚠️ **Optional**: Clean up unused variables
4. ⚠️ **Optional**: Standardize navigation patterns
