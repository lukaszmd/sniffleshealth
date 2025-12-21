import { useState } from "react";
import { MessageSquare, Video, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { ConsultationType } from "@shared/types";
import { ROUTES, FONTS } from "@/constants";
import { PageHeader, AppFooter } from "@/components/layout";
import { useFormNavigation } from "@/hooks";

export default function SelectConsultationType() {
  const navigate = useNavigate();
  const { getStepInfo, goToNext } = useFormNavigation();
  const stepInfo = getStepInfo();
  const [selectedType, setSelectedType] = useState<ConsultationType>("video");

  const handleContinue = () => {
    // Navigate to payment confirmation page
    // In a real app, this would process payment first
    goToNext(); // Use hook's navigation helper
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col">
      <PageHeader
        backTo={ROUTES.CONSULTATION}
        step={stepInfo?.step}
        title={stepInfo?.title}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-[#F3F4F6]">
        <div className="max-w-[1464px] mx-auto p-6">
          <div className="bg-white border border-[#D6D3D1] rounded-xl overflow-hidden relative min-h-[750px]">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <svg
                className="absolute left-[210px] -top-[886px] w-[1057px] h-[1074px] opacity-10"
                viewBox="0 0 1057 1074"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0L1057 0L1057 1074L0 1074L0 0Z"
                  fill="url(#pattern0)"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full py-10 px-6">
              <div className="flex flex-col gap-6 items-center max-w-[650px]">
                {/* Header */}
                <div className="flex flex-col gap-6 items-center">
                  <h1
                    className="text-[44px] font-medium leading-[44px] tracking-[-2.2px] text-center text-[#1F2937]"
                    style={{
                      fontFamily: FONTS.interDisplay,
                    }}
                  >
                    Select your consultation type
                  </h1>

                  {/* Consultation Type Cards */}
                  <div className="flex gap-6 items-start">
                    {/* Text Based Consultation Card */}
                    <button
                      onClick={() => setSelectedType("text")}
                      className={`w-[302px] bg-white border rounded-[18px] p-[20px] flex flex-col gap-2 items-start transition-all ${
                        selectedType === "text"
                          ? "border-2 border-[#0891B2]"
                          : "border border-[#D1D5DB]"
                      }`}
                    >
                      <p
                        className={`text-base leading-6 w-[194px] ${
                          selectedType === "text"
                            ? "font-semibold text-[#1C1917] tracking-[-0.3125px]"
                            : "font-medium text-[#4B5563]"
                        }`}
                        style={{
                          fontFamily: "Inter, -apple-system, sans-serif",
                        }}
                      >
                        Single Text Based Consultation
                      </p>
                      <div className="flex items-center justify-between w-full">
                        <p
                          className={`text-[32px] font-medium leading-[32px] tracking-[-1.6px] ${
                            selectedType === "text"
                              ? "text-[#06B6D4]"
                              : "text-[#1F2937]"
                          }`}
                          style={{
                            fontFamily: FONTS.interDisplay,
                          }}
                        >
                          $25
                        </p>
                        <div
                          className={`flex items-center p-1 rounded-[2222px] ${
                            selectedType === "text"
                              ? "bg-[#C9E7EC]"
                              : "bg-[#F3F4F6]"
                          }`}
                        >
                          <MessageSquare
                            className={`w-6 h-6 ${
                              selectedType === "text"
                                ? "text-[#0891B2]"
                                : "text-[#6B7280]"
                            }`}
                          />
                        </div>
                      </div>
                    </button>

                    {/* Voice or Video call consultation Card */}
                    <button
                      onClick={() => setSelectedType("video")}
                      className={`w-[302px] bg-white border rounded-[18px] p-[20px] flex flex-col gap-2 items-start transition-all ${
                        selectedType === "video"
                          ? "border-2 border-[#0891B2]"
                          : "border border-[#D1D5DB]"
                      }`}
                    >
                      <p
                        className={`text-base leading-6 w-[194px] ${
                          selectedType === "video"
                            ? "font-semibold text-[#1C1917] tracking-[-0.3125px]"
                            : "font-medium text-[#4B5563]"
                        }`}
                        style={{
                          fontFamily: "Inter, -apple-system, sans-serif",
                        }}
                      >
                        Voice or Video call consultation
                      </p>
                      <div className="flex items-center justify-between w-full">
                        <p
                          className={`text-[32px] font-medium leading-[32px] tracking-[-1.6px] ${
                            selectedType === "video"
                              ? "text-[#06B6D4]"
                              : "text-[#1F2937]"
                          }`}
                          style={{
                            fontFamily: FONTS.interDisplay,
                          }}
                        >
                          $40
                        </p>
                        <div className="flex gap-[7px] items-center">
                          <div
                            className={`flex items-center justify-center p-1 rounded-[2222px] ${
                              selectedType === "video"
                                ? "bg-[#C9E7EC]"
                                : "bg-[#F3F4F6]"
                            }`}
                          >
                            <Video
                              className={`w-6 h-6 ${
                                selectedType === "video"
                                  ? "text-[#0891B2]"
                                  : "text-[#6B7280]"
                              }`}
                            />
                          </div>
                          <div
                            className={`flex items-center justify-center p-1 rounded-[2222px] ${
                              selectedType === "video"
                                ? "bg-[#C9E7EC]"
                                : "bg-[#F3F4F6]"
                            }`}
                          >
                            <Mic
                              className={`w-6 h-6 ${
                                selectedType === "video"
                                  ? "text-[#0891B2]"
                                  : "text-[#6B7280]"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Continue Button */}
                  <button
                    onClick={handleContinue}
                    className="bg-[#0E3240] text-white px-6 py-3 rounded-[18px] font-semibold text-base hover:bg-[#0E3240]/90 transition-colors h-[57px] flex items-center justify-center"
                    style={{
                      fontFamily: "Inter, -apple-system, sans-serif",
                      lineHeight: "24px",
                    }}
                  >
                    Continue with payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
