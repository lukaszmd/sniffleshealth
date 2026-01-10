import { Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { HealthCategory } from "@shared/types";
import { ROUTES, FONTS } from "@/constants";
import { PageHeader, AppFooter } from "@/components/layout";
import { SymptomSelector } from "../components";
import { useConsultationFlow, useFormNavigation } from "../hooks";
import { useLocalStorage } from "@/hooks";
import { useConsultationStore } from "@/stores/consultation.store";
import { CATEGORY_SYMPTOMS } from "../constants/symptoms";

export default function Symptoms() {
  const navigate = useNavigate();
  const { selectedCategory } = useConsultationStore();
  const {
    selectedSymptoms,
    toggleSymptom,
    goToMedicalProfile,
    canProceedToMedicalProfile,
  } = useConsultationFlow();
  const { getStepInfo } = useFormNavigation();
  const stepInfo = getStepInfo();

  // Persist custom symptom input across page refreshes
  const { value: customSymptom, setValue: setCustomSymptom } =
    useLocalStorage<string>("custom-symptom-input", { defaultValue: "" });

  // Redirect to home if no category selected
  if (!selectedCategory) {
    navigate(ROUTES.HOME);
    return null;
  }

  const symptoms = CATEGORY_SYMPTOMS[selectedCategory];

  const handleContinue = () => {
    if (canProceedToMedicalProfile) {
      goToMedicalProfile();
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFAF8] flex flex-col">
      <PageHeader
        backTo={ROUTES.HOME}
        step={stepInfo?.step}
        title={stepInfo?.title}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 max-w-[1464px] mx-auto w-full p-6">
          <div className="bg-white rounded-xl border border-[#D6D3D1] h-full flex flex-col">
            {/* Content Area */}
            <div className="flex-1 overflow-y-auto pt-10 px-6 md:px-12">
              <div className="max-w-[963px] mx-auto flex flex-col gap-[60px]">
                {/* Header */}
                <div className="flex flex-col items-center gap-2 pt-5">
                  <h1
                    className="text-[#1F2937] text-3xl md:text-[32px] font-semibold text-center"
                    style={{
                      fontFamily: "SF Pro, -apple-system, sans-serif",
                      lineHeight: "36px",
                    }}
                  >
                    What are your symptoms
                  </h1>
                  <p
                    className="text-[#4B5563] text-base"
                    style={{ fontFamily: "SF Pro, -apple-system, sans-serif" }}
                  >
                    Select from the list below or type your own
                  </p>
                </div>

                {/* Symptoms Sections */}
                <div className="flex flex-col gap-[19px]">
                  <SymptomSelector
                    symptoms={symptoms}
                    selectedSymptomIds={selectedSymptoms}
                    onToggleSymptom={toggleSymptom}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Input Section */}
            <div className="border-t border-[#E5E7EB] p-6">
              <div className="max-w-[963px] mx-auto flex flex-col md:flex-row items-stretch gap-3">
                <div className="flex-1 flex items-center gap-2 bg-white border border-[#D1D5DB] rounded-[18px] px-5 py-4">
                  <input
                    type="text"
                    placeholder="You can also add any other symptoms directly here"
                    value={customSymptom}
                    onChange={(e) => setCustomSymptom(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-[#374151] text-sm"
                    style={{ fontFamily: FONTS.inter }}
                  />
                  <button className="p-2 bg-[#F5F5F4] rounded-xl">
                    <Mic className="w-4 h-4 text-[#164E63]" />
                  </button>
                </div>
                <button
                  onClick={handleContinue}
                  className="w-full md:w-auto px-12 py-4 bg-[#164E63] text-white font-semibold text-base rounded-[18px] hover:bg-[#164E63]/90 transition-colors"
                  style={{ fontFamily: FONTS.inter }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
