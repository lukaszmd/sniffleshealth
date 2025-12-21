# Phase 1 Migration Example

This document shows how to migrate existing pages to use the new shared types, constants, and state management.

## Example: Symptoms Page Migration

### Before (Old Code)
```typescript
// Inline interface definition
interface Symptom {
  id: string;
  name: string;
  category: string;
}

// Hardcoded route
navigate("/medical-profile");

// Hardcoded colors and fonts
style={{ fontFamily: "Inter, -apple-system, sans-serif" }}
className="text-[#4B5563]"
```

### After (New Code)
```typescript
// Import shared types
import type { Symptom } from "@shared/types";
import { ROUTES, COLORS, FONTS } from "@/constants";
import { useConsultationStore } from "@/stores";

// Use route constants
navigate(ROUTES.MEDICAL_PROFILE);

// Use color constants
style={{ fontFamily: FONTS.inter }}
className={`text-[${COLORS.text.secondary}]`}

// Use store for state management
const { selectedSymptoms, toggleSymptom, setSelectedSymptoms } = useConsultationStore();
```

## Migration Checklist

For each page, follow these steps:

1. **Replace inline interfaces** with imports from `@shared/types`
2. **Replace hardcoded routes** with `ROUTES` constants
3. **Replace hardcoded colors** with `COLORS` constants (optional, can be gradual)
4. **Replace hardcoded fonts** with `FONTS` constants (optional, can be gradual)
5. **Replace local state** with Zustand stores where appropriate
6. **Update imports** to use new paths

## Benefits

- ✅ Single source of truth for types
- ✅ Type safety across the application
- ✅ Easier refactoring (change route in one place)
- ✅ Consistent styling constants
- ✅ Shared state across pages

