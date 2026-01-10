import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES, FONTS } from "@/constants";
import { PageHeader, AppFooter } from "@/components/layout";
import { useFormNavigation } from "../hooks";
import { useConsultationStore } from "@/stores/consultation.store";
import { useConsultationFlow } from "../hooks";
import { CATEGORY_SYMPTOMS } from "../constants/symptoms";

export default function SummaryConsultation() {
  const navigate = useNavigate();
  const { getStepInfo, goToNext } = useFormNavigation();
  const stepInfo = getStepInfo();
  const { selectedCategory, selectedSymptoms } = useConsultationStore();
  const { medicalData } = useConsultationFlow();

  // Generate AI assessment
  const generateAIAssessment = () => {
    if (!selectedCategory) return "";
    
    return "Based on the information you provided, your symptoms may be consistent with a common medical condition within this category. This summary is for informational purposes only and does not constitute a medical diagnosis. A licensed healthcare professional will review your information during the consultation.";
  };

  // Get symptom names from IDs
  const getSymptomNames = () => {
    if (!selectedCategory) return [];
    const symptoms = CATEGORY_SYMPTOMS[selectedCategory];
    return symptoms
      .filter(s => selectedSymptoms.includes(s.id))
      .map(s => s.name);
  };

  // Auto-transition to consultation page after a brief moment
  useEffect(() => {
    const timer = setTimeout(() => {
      goToNext(); // Use hook's navigation helper
    }, 3000); // 3 second delay to allow user to read summary

    return () => clearTimeout(timer);
  }, [goToNext]);

  const symptomNames = getSymptomNames();
  const currentMedicalData = medicalData || {
    age: "",
    sex: "",
    weight: "",
    height: "",
    allergies: [],
    chronicConditions: [],
    surgicalHistory: [],
    socialHistory: [],
    familyHistory: [],
    phaseBAnswers: {},
  };

  return (
    <div className="min-h-screen bg-[#FCFAF8] flex flex-col">
      <PageHeader
        backTo={ROUTES.MEDICAL_PROFILE}
        step={stepInfo?.step}
        title={stepInfo?.title}
      />

      {/* Main Content - AI Summary */}
      <div className="flex-1 max-w-[1464px] mx-auto w-full p-6">
        <div className="bg-white rounded-xl border border-[#D6D3D1] p-8 md:p-12">
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            {/* Title */}
            <h1
              className="text-[#1F2937] text-3xl md:text-[32px] font-semibold"
              style={{
                fontFamily: "SF Pro, -apple-system, sans-serif",
                lineHeight: "36px",
              }}
            >
              AI Summary
            </h1>

            {/* Reported Symptoms */}
            <div className="flex flex-col gap-4">
              <h2
                className="text-[#111827] text-xl font-semibold"
                style={{ fontFamily: FONTS.inter }}
              >
                Reported Symptoms
              </h2>
              <div className="flex flex-wrap gap-3">
                {symptomNames.length > 0 ? (
                  symptomNames.map((name, idx) => (
                    <span
                      key={idx}
                      className="bg-[#F3F4F6] text-[#1E2939] text-sm px-3 py-1 rounded-lg"
                      style={{ fontFamily: FONTS.inter }}
                    >
                      {name}
                    </span>
                  ))
                ) : (
                  <p className="text-[#4B5563] text-sm" style={{ fontFamily: FONTS.inter }}>
                    No symptoms reported
                  </p>
                )}
              </div>
            </div>

            <div className="h-px bg-[#D1D5DB]" />

            {/* Medical History Summary */}
            <div className="flex flex-col gap-6">
              <h2
                className="text-[#111827] text-xl font-semibold"
                style={{ fontFamily: FONTS.inter }}
              >
                Medical History Summary
              </h2>

              {/* Allergies */}
              <div className="flex flex-col gap-2">
                <h3
                  className="text-[#101828] text-base font-medium"
                  style={{ fontFamily: FONTS.inter }}
                >
                  Allergies
                </h3>
                <p
                  className="text-[#1E2939] text-sm"
                  style={{ fontFamily: FONTS.inter }}
                >
                  {currentMedicalData.allergies.length > 0
                    ? currentMedicalData.allergies.join(", ")
                    : "None reported"}
                </p>
              </div>

              {/* Chronic Conditions */}
              <div className="flex flex-col gap-2">
                <h3
                  className="text-[#101828] text-base font-medium"
                  style={{ fontFamily: FONTS.inter }}
                >
                  Chronic Conditions
                </h3>
                <p
                  className="text-[#1E2939] text-sm"
                  style={{ fontFamily: FONTS.inter }}
                >
                  {currentMedicalData.chronicConditions.length > 0
                    ? currentMedicalData.chronicConditions.join(", ")
                    : "None reported"}
                </p>
              </div>

              {/* Past Surgeries */}
              <div className="flex flex-col gap-2">
                <h3
                  className="text-[#101828] text-base font-medium"
                  style={{ fontFamily: FONTS.inter }}
                >
                  Past Surgeries
                </h3>
                <p
                  className="text-[#1E2939] text-sm"
                  style={{ fontFamily: FONTS.inter }}
                >
                  {currentMedicalData.surgicalHistory.length > 0
                    ? currentMedicalData.surgicalHistory.join(", ")
                    : "None reported"}
                </p>
              </div>

              {/* Social History */}
              <div className="flex flex-col gap-2">
                <h3
                  className="text-[#101828] text-base font-medium"
                  style={{ fontFamily: FONTS.inter }}
                >
                  Social History
                </h3>
                <div className="flex flex-col gap-2">
                  {currentMedicalData.socialHistory.length > 0 ? (
                    currentMedicalData.socialHistory.map((item, idx) => (
                      <p
                        key={idx}
                        className="text-[#1E2939] text-sm"
                        style={{ fontFamily: FONTS.inter }}
                      >
                        {item.type}: {item.level}
                      </p>
                    ))
                  ) : (
                    <p
                      className="text-[#1E2939] text-sm"
                      style={{ fontFamily: FONTS.inter }}
                    >
                      None reported
                    </p>
                  )}
                </div>
              </div>

              {/* Family History */}
              <div className="flex flex-col gap-2">
                <h3
                  className="text-[#101828] text-base font-medium"
                  style={{ fontFamily: FONTS.inter }}
                >
                  Family History
                </h3>
                <p
                  className="text-[#1E2939] text-sm"
                  style={{ fontFamily: FONTS.inter }}
                >
                  {currentMedicalData.familyHistory.length > 0
                    ? currentMedicalData.familyHistory.join(", ")
                    : "None reported"}
                </p>
              </div>
            </div>

            <div className="h-px bg-[#D1D5DB]" />

            {/* AI Preliminary Assessment */}
            <div className="flex flex-col gap-4">
              <h2
                className="text-[#111827] text-xl font-semibold"
                style={{ fontFamily: FONTS.inter }}
              >
                AI Preliminary Assessment
              </h2>
              <div className="bg-[#ECF3F4] rounded-xl p-4">
                <p
                  className="text-[#1E2939] text-sm leading-relaxed"
                  style={{ fontFamily: FONTS.inter }}
                >
                  {generateAIAssessment()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
