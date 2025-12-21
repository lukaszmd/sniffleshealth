# Quick Reference Guide

## Import Paths

### Types

```typescript
import type { Symptom, Message, MedicalData, Doctor } from "@shared/types";
```

### Constants

```typescript
import { ROUTES, COLORS, FONTS, APP_CONFIG } from "@/constants";
```

### Stores

```typescript
import {
  useConsultationStore,
  useChatStore,
  useUserStore,
  useDoctorStore,
} from "@/stores";
```

## Common Patterns

### Navigation

```typescript
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants";

const navigate = useNavigate();
navigate(ROUTES.MEDICAL_PROFILE);
```

### Using Consultation Store

```typescript
const { selectedSymptoms, toggleSymptom, setMedicalData, aiAssessment } =
  useConsultationStore();

// Toggle a symptom
toggleSymptom("symptom-id");

// Set medical data
setMedicalData({
  age: "23",
  sex: "M",
  // ... rest of data
});
```

### Using Chat Store

```typescript
const { messages, addMessage, setMessages } = useChatStore();

// Add a message
addMessage({
  type: "user",
  text: "Hello",
  timestamp: new Date(),
});
```

### Using Fonts

```typescript
import { FONTS } from "@/constants";

// In JSX
<span style={{ fontFamily: FONTS.inter }}>Text</span>
<span style={{ fontFamily: FONTS.interDisplay }}>Heading</span>
```

### Using Routes

```typescript
import { ROUTES } from "@/constants";
import { Link } from "react-router-dom";

<Link to={ROUTES.HOME}>Home</Link>
```

## Available Routes

- `ROUTES.HOME` - "/"
- `ROUTES.SYMPTOMS` - "/symptoms"
- `ROUTES.MEDICAL_PROFILE` - "/medical-profile"
- `ROUTES.DOCTOR_CHAT` - "/doctor-chat"
- `ROUTES.FINDING_DOCTOR` - "/finding-doctor"
- ... (see `client/constants/routes.ts` for full list)

## Available Fonts

- `FONTS.inter` - "Inter, -apple-system, sans-serif"
- `FONTS.interDisplay` - "Inter Display, -apple-system, sans-serif"
- `FONTS.quincy` - "Quincy CF, -apple-system, sans-serif"
