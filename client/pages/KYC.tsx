import { useState } from "react";
import { Lock, Smile, Car, FileText, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES, FONTS } from "@/constants";
import { useUserStore } from "@/stores";

export default function KYC() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<"license" | "other">(
    "license",
  );

  const handleContinue = () => {
    // Navigate to address details page after KYC
    // In a real app, this would handle file upload first, then redirect to third-party KYC
    // After third-party KYC completion, user would be redirected back to address details
    navigate(ROUTES.ADDRESS_DETAILS);
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col">
      {/* Header */}
      <div className="bg-[#FCFAF8] border-b border-[#D6D3D1] px-6 py-4">
        <div className="max-w-[1464px] mx-auto flex items-center justify-center relative">
          {/* Center - Logo */}
          <div className="flex items-center gap-[5px]">
            <svg
              width="40"
              height="52"
              viewBox="0 0 56 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55.5 36.5C55.5 16.3416 43.1584 0 27.5 0C11.8416 0 0 16.3416 0 36.5V36.5484C0 56.7068 12.3416 73.0484 28 73.0484H28.5C44.1584 73.0484 55.5 56.7068 55.5 36.5484V36.5Z"
                fill="#0891B2"
              />
            </svg>
            <div className="flex flex-col">
              <span
                className="text-[#0891B2] font-semibold text-xl leading-tight"
                style={{
                  fontFamily: "Inter Display, -apple-system, sans-serif",
                }}
              >
                Sniffles
              </span>
              <span
                className="text-[#1F2937] font-medium text-base leading-tight"
                style={{
                  fontFamily: "Inter Display, -apple-system, sans-serif",
                }}
              >
                health
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-[#F3F4F6] flex items-center justify-center">
        <div className="max-w-[1464px] mx-auto p-6 w-full flex items-center justify-center">
          <div
            className="w-[966px] border border-[#D6D3D1] rounded-[24px] overflow-hidden relative min-h-[745px] flex flex-col"
            style={{
              backgroundImage:
                "linear-gradient(179.934deg, rgb(249, 245, 242) 0%, rgb(255, 255, 255) 23.573%)",
            }}
          >
            {/* Content */}
            <div className="flex flex-col gap-6 items-center h-full p-6 pt-10 pb-6">
              <div className="flex flex-col gap-6 items-center justify-center w-full max-w-[651px] flex-1">
                {/* Smile Icon */}
                <div className="bg-[#ECE8E4] flex items-center justify-center p-1 rounded-[2222px]">
                  <Smile className="w-6 h-6 text-[#78716C]" />
                </div>

                {/* Main Heading */}
                <h1
                  className="text-[44px] font-medium leading-[44px] tracking-[-2.2px] text-center text-[#1F2937]"
                  style={{
                    fontFamily: FONTS.interDisplay,
                  }}
                >
                  Complete KYC
                </h1>

                {/* KYC Info Section */}
                <div className="flex flex-col gap-5 items-center w-full">
                  {/* Description Text */}
                  <p
                    className="text-[#4B5563] text-base font-normal leading-6 text-center w-[348px]"
                    style={{
                      fontFamily: "Inter, -apple-system, sans-serif",
                    }}
                  >
                    Legally we are required KYC before a consultation for proper
                    prescription
                  </p>

                  {/* Upload Options */}
                  <div className="flex flex-col gap-3 items-center w-full">
                    {/* Driver's License Option */}
                    <button
                      onClick={() => setSelectedOption("license")}
                      className={`w-[337px] bg-white border rounded-[18px] p-5 flex items-center justify-between transition-all ${
                        selectedOption === "license"
                          ? "border-2 border-[#0891B2]"
                          : "border border-[#D1D5DB]"
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div
                          className={`flex items-center justify-center p-1 rounded-[2222px] ${
                            selectedOption === "license"
                              ? "bg-[#C9E7EC]"
                              : "bg-[#F3F4F6]"
                          }`}
                        >
                          <Car
                            className={`w-6 h-6 ${
                              selectedOption === "license"
                                ? "text-[#0891B2]"
                                : "text-[#6B7280]"
                            }`}
                          />
                        </div>
                        <p
                          className={`text-base leading-6 w-[194px] ${
                            selectedOption === "license"
                              ? "font-semibold text-[#1C1917] tracking-[-0.3125px]"
                              : "font-medium text-[#4B5563]"
                          }`}
                          style={{
                            fontFamily: "Inter, -apple-system, sans-serif",
                          }}
                        >
                          Upload driver's license
                        </p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-[#6B7280]" />
                    </button>

                    {/* Other Documents Option */}
                    <button
                      onClick={() => setSelectedOption("other")}
                      className={`w-[337px] bg-white border rounded-[18px] p-5 flex items-center justify-between transition-all ${
                        selectedOption === "other"
                          ? "border-2 border-[#0891B2]"
                          : "border border-[#D1D5DB]"
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div
                          className={`flex items-center justify-center p-1 rounded-[2222px] ${
                            selectedOption === "other"
                              ? "bg-[#C9E7EC]"
                              : "bg-[#F3F4F6]"
                          }`}
                        >
                          <FileText
                            className={`w-6 h-6 ${
                              selectedOption === "other"
                                ? "text-[#0891B2]"
                                : "text-[#6B7280]"
                            }`}
                          />
                        </div>
                        <p
                          className={`text-base leading-6 w-[194px] ${
                            selectedOption === "other"
                              ? "font-semibold text-[#1C1917] tracking-[-0.3125px]"
                              : "font-medium text-[#4B5563]"
                          }`}
                          style={{
                            fontFamily: "Inter, -apple-system, sans-serif",
                          }}
                        >
                          Upload Other Documents
                        </p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-[#6B7280]" />
                    </button>
                  </div>

                  {/* Continue Button */}
                  <button
                    onClick={handleContinue}
                    className="bg-[#0E3240] text-white px-6 py-3 rounded-[18px] font-semibold text-base hover:bg-[#0E3240]/90 transition-colors h-[57px] flex items-center justify-center w-full"
                    style={{
                      fontFamily: "Inter, -apple-system, sans-serif",
                      lineHeight: "24px",
                    }}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#FCFAF8] border-t border-[#D6D3D1] px-6 py-4">
        <div className="max-w-[1464px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="px-3 py-2 text-[#78716C] font-semibold text-base hover:text-[#1C1917] transition-colors"
              style={{ fontFamily: FONTS.inter }}
            >
              About Us
            </button>
            <button
              className="px-3 py-2 text-[#78716C] font-semibold text-base hover:text-[#1C1917] transition-colors"
              style={{ fontFamily: FONTS.inter }}
            >
              Privacy Policy
            </button>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 border border-[#78716C] rounded-full">
            <Lock className="w-6 h-6 text-[#78716C]" />
            <span
              className="text-[#78716C] font-semibold text-base"
              style={{ fontFamily: FONTS.inter }}
            >
              HIPAA Compliant
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
