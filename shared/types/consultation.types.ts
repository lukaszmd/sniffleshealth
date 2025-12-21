/**
 * Consultation-related types
 */

import { SocialHistoryItem } from "./common.types";

export interface Symptom {
  id: string;
  name: string;
  category: string;
}

export interface MedicalData {
  age: string;
  sex: string;
  weight: string;
  height: string;
  allergies: string[];
  chronicConditions: string[];
  surgicalHistory: string[];
  socialHistory: SocialHistoryItem[];
  familyHistory: string[];
}

export interface ConsultationState {
  selectedSymptoms: string[];
  medicalData: MedicalData | null;
  aiAssessment: string | null;
  additionalInfo: string;
}

