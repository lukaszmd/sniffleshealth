import { useState, useEffect } from "react";
import { Loader2, Plus, Mic, ArrowUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES, FONTS } from "@/constants";
import { PageHeader, AppFooter } from "@/components/layout";
import { ChatInput } from "@/components/chat/ChatInput";
import { useConsultationFlow } from "@/hooks";

export default function FindingDoctor() {
  const navigate = useNavigate();
  const { selectedSymptoms, aiAssessment, additionalInfo, setAdditionalInfo } =
    useConsultationFlow();
  const [localAdditionalInfo, setLocalAdditionalInfo] =
    useState(additionalInfo);
  const [activeTab, setActiveTab] = useState<"ai" | "medical">("ai");

  // Get symptoms from store or use defaults
  const symptoms =
    selectedSymptoms.length > 0
      ? selectedSymptoms.map((id) => {
          const symptomNames: Record<string, string> = {
            "4": "Headache",
            "5": "Fatigue",
            "9": "Heartburn",
            "10": "Fatigue",
          };
          return symptomNames[id] || `Symptom ${id}`;
        })
      : ["Fever", "Persistent Cough", "Headache", "Fatigue"];

  const currentAiAssessment =
    aiAssessment ||
    "The AI has identified a potential viral infection based on the symptoms provided. Common causes could include influenza or a common cold. This is not a final diagnosis.";

  // Simulate finding doctor after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(ROUTES.DOCTOR_CHAT);
    }, 3000); // Navigate after 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleSubmit = () => {
    // Save additional info to store
    setAdditionalInfo(localAdditionalInfo);
    setLocalAdditionalInfo("");
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col">
      <PageHeader
        backTo={ROUTES.ADDRESS_DETAILS}
        step="Step 3 of 4"
        title="Building your medical profile"
      />

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-[#F3F4F6]">
        <div className="max-w-[1464px] mx-auto p-6">
          <div className="flex gap-3 h-full min-h-[750px]">
            {/* Left Panel - Finding Doctor */}
            <div className="flex-1 bg-white border border-[#D6D3D1] rounded-xl overflow-hidden relative">
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-10">
                <div className="flex flex-col gap-5 items-center max-w-[620px]">
                  {/* Loading Spinner */}
                  <div className="bg-[#C9E7EC] flex items-center justify-center p-3 rounded-[2222px]">
                    <div className="flex items-center justify-center">
                      <div className="flex-none rotate-[270deg]">
                        <Loader2 className="w-6 h-6 text-[#0891B2] animate-spin" />
                      </div>
                    </div>
                  </div>

                  {/* Heading */}
                  <h1
                    className="text-[44px] font-medium leading-[44px] tracking-[-2.2px] text-center text-[#1F2937]"
                    style={{
                      fontFamily: FONTS.interDisplay,
                    }}
                  >
                    Finding your doctor
                  </h1>

                  {/* Message */}
                  <p
                    className="text-[#4B5563] text-base font-normal leading-6 text-center w-[428px]"
                    style={{
                      fontFamily: "Inter, -apple-system, sans-serif",
                    }}
                  >
                    Connecting you to a doctor for you query. Please hang tight
                    it might take a few minutes
                  </p>

                  {/* Additional Info Input */}
                  <ChatInput
                    value={localAdditionalInfo}
                    onChange={setLocalAdditionalInfo}
                    onSend={handleSubmit}
                    placeholder="Add more information, questions while we find you a doctor"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Right Panel - AI Summary */}
            <div
              className="w-[393px] border border-[#D6D3D1] rounded-[10px] overflow-hidden flex flex-col"
              style={{
                background:
                  "linear-gradient(179.838deg, rgb(217, 242, 247) 0%, rgb(255, 255, 255) 23.573%)",
              }}
            >
              {/* Icon */}
              <div className="flex justify-center pt-6">
                <div className="w-[57px] h-[57px] flex items-center justify-center">
                  <svg
                    width="57"
                    height="57"
                    viewBox="0 0 57 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="28.5" cy="28.5" r="28.5" fill="#D9F2F7" />
                    <path
                      d="M28.5 18V28.5H18V38.5H28.5V49H38.5V38.5H49V28.5H38.5V18H28.5Z"
                      fill="#0891B2"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-11 flex-1 px-6 py-0">
                {/* AI Preliminary Assessment */}
                <div className="flex flex-col gap-3">
                  <h2
                    className="text-[#1F2937] text-2xl font-semibold"
                    style={{
                      fontFamily: "Inter, -apple-system, sans-serif",
                      lineHeight: "32px",
                    }}
                  >
                    AI Preliminary Assessment
                  </h2>
                  <p
                    className="text-[#1C1917] text-base font-normal leading-6"
                    style={{
                      fontFamily: "Inter, -apple-system, sans-serif",
                      letterSpacing: "-0.312px",
                    }}
                  >
                    {currentAiAssessment}
                  </p>
                </div>

                {/* Reported Symptoms */}
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-[#1C1917] text-base font-normal"
                    style={{
                      fontFamily: "Inter, -apple-system, sans-serif",
                      lineHeight: "24px",
                      letterSpacing: "-0.312px",
                    }}
                  >
                    Reported Symptoms
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {symptoms.map((symptom, index) => (
                      <span
                        key={index}
                        className="bg-[#F3F4F6] border border-transparent rounded-full px-[13px] py-[5px] text-[#364153] text-xs font-medium"
                        style={{
                          fontFamily: "Inter, -apple-system, sans-serif",
                          lineHeight: "16px",
                        }}
                      >
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="bg-white border-t border-[#D6D3D1] p-3 flex items-center gap-6">
                <button
                  onClick={() => setActiveTab("ai")}
                  className={`px-3 py-1 rounded-lg font-medium text-base transition-colors ${
                    activeTab === "ai"
                      ? "bg-[#F5F5F4] text-[#1C1917]"
                      : "text-[#78716C] hover:text-[#1C1917]"
                  }`}
                  style={{
                    fontFamily: "Inter, -apple-system, sans-serif",
                    lineHeight: "24px",
                  }}
                >
                  AI Summary
                </button>
                <button
                  onClick={() => setActiveTab("medical")}
                  className={`px-3 py-1 rounded-lg font-medium text-base transition-colors ${
                    activeTab === "medical"
                      ? "bg-[#F5F5F4] text-[#1C1917]"
                      : "text-[#78716C] hover:text-[#1C1917]"
                  }`}
                  style={{
                    fontFamily: "Inter, -apple-system, sans-serif",
                    lineHeight: "24px",
                  }}
                >
                  Medical Summary
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
