/**
 * Consultation flow state management
 * Manages symptoms, medical data, and consultation state
 */

import { create } from "zustand";
import type {
  ConsultationState,
  MedicalData,
  Symptom,
} from "@shared/types";

interface ConsultationStore extends ConsultationState {
  // Actions
  setSelectedSymptoms: (symptomIds: string[]) => void;
  toggleSymptom: (symptomId: string) => void;
  setMedicalData: (data: MedicalData) => void;
  updateMedicalData: (updates: Partial<MedicalData>) => void;
  setAiAssessment: (assessment: string) => void;
  setAdditionalInfo: (info: string) => void;
  reset: () => void;
}

const initialState: ConsultationState = {
  selectedSymptoms: [],
  medicalData: null,
  aiAssessment: null,
  additionalInfo: "",
};

export const useConsultationStore = create<ConsultationStore>((set) => ({
  ...initialState,

  setSelectedSymptoms: (symptomIds) =>
    set({ selectedSymptoms: symptomIds }),

  toggleSymptom: (symptomId) =>
    set((state) => ({
      selectedSymptoms: state.selectedSymptoms.includes(symptomId)
        ? state.selectedSymptoms.filter((id) => id !== symptomId)
        : [...state.selectedSymptoms, symptomId],
    })),

  setMedicalData: (data) => set({ medicalData: data }),

  updateMedicalData: (updates) =>
    set((state) => ({
      medicalData: state.medicalData
        ? { ...state.medicalData, ...updates }
        : null,
    })),

  setAiAssessment: (assessment) => set({ aiAssessment: assessment }),

  setAdditionalInfo: (info) => set({ additionalInfo: info }),

  reset: () => set(initialState),
}));

