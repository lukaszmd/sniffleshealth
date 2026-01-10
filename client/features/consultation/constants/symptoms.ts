/**
 * Category-specific symptom definitions
 * Based on PRD v1 requirements
 */

import type { Symptom, HealthCategory } from "@shared/types";

export const CATEGORY_SYMPTOMS: Record<HealthCategory, Symptom[]> = {
  FEVER_FLU: [
    { id: "fever_flu_1", name: "Fever", category: "FEVER_FLU" },
    { id: "fever_flu_2", name: "Chills", category: "FEVER_FLU" },
    { id: "fever_flu_3", name: "Body aches", category: "FEVER_FLU" },
    { id: "fever_flu_4", name: "Fatigue", category: "FEVER_FLU" },
    { id: "fever_flu_5", name: "Headache", category: "FEVER_FLU" },
    { id: "fever_flu_6", name: "Cough", category: "FEVER_FLU" },
    { id: "fever_flu_7", name: "Sore throat", category: "FEVER_FLU" },
    { id: "fever_flu_8", name: "Nasal congestion", category: "FEVER_FLU" },
    { id: "fever_flu_9", name: "Sinus pressure", category: "FEVER_FLU" },
    { id: "fever_flu_10", name: "Ear pain", category: "FEVER_FLU" },
  ],
  SKIN_ISSUES: [
    { id: "skin_1", name: "Redness", category: "SKIN_ISSUES" },
    { id: "skin_2", name: "Swelling", category: "SKIN_ISSUES" },
    { id: "skin_3", name: "Pain or tenderness", category: "SKIN_ISSUES" },
    { id: "skin_4", name: "Rash", category: "SKIN_ISSUES" },
    { id: "skin_5", name: "Itching", category: "SKIN_ISSUES" },
    { id: "skin_6", name: "Drainage or pus", category: "SKIN_ISSUES" },
    { id: "skin_7", name: "Fever", category: "SKIN_ISSUES" },
    { id: "skin_8", name: "Skin wound or sore", category: "SKIN_ISSUES" },
  ],
  INFECTIONS: [
    { id: "infection_1", name: "Burning with urination", category: "INFECTIONS" },
    { id: "infection_2", name: "Frequent urination", category: "INFECTIONS" },
    { id: "infection_3", name: "Lower abdominal pain", category: "INFECTIONS" },
    { id: "infection_4", name: "Blood in urine", category: "INFECTIONS" },
    { id: "infection_5", name: "Fever", category: "INFECTIONS" },
    { id: "infection_6", name: "Chills", category: "INFECTIONS" },
    { id: "infection_7", name: "Flank or back pain", category: "INFECTIONS" },
  ],
  SEXUAL_HEALTH: [
    { id: "sexual_1", name: "Vaginal discharge (female)", category: "SEXUAL_HEALTH" },
    { id: "sexual_2", name: "Penile discharge (male)", category: "SEXUAL_HEALTH" },
    { id: "sexual_3", name: "Burning with urination", category: "SEXUAL_HEALTH" },
    { id: "sexual_4", name: "Genital sores or rash", category: "SEXUAL_HEALTH" },
    { id: "sexual_5", name: "Genital itching", category: "SEXUAL_HEALTH" },
    { id: "sexual_6", name: "Testicular pain or swelling", category: "SEXUAL_HEALTH" },
    { id: "sexual_7", name: "Fever", category: "SEXUAL_HEALTH" },
  ],
};

