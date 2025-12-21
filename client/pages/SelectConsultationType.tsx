import { useState } from "react";
import { ArrowLeft, Lock, MessageSquare, Video, Mic } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function SelectConsultationType() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<"text" | "video">("video");

  const handleContinue = () => {
    // Navigate to payment confirmation page
    // In a real app, this would process payment first
    navigate("/payment-confirmation");
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col">
      {/* Header */}
      <div className="bg-[#FCFAF8] border-b border-[#D6D3D1] px-6 py-4">
        <div className="max-w-[1464px] mx-auto flex items-center justify-between relative">
          {/* Left Side - Back Button & Title */}
          <div className="flex items-center gap-3">
            <Link
              to="/consultation"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-[#D6D3D1] bg-[#FCFAF8] shadow-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              <ArrowLeft className="w-6 h-6 text-[#1C1917]" />
            </Link>
            <div className="flex flex-col">
              <span
                className="text-[#4B5563] text-sm"
                style={{ fontFamily: "Inter, -apple-system, sans-serif" }}
              >
                Step 3 of 4
              </span>
              <span
                className="text-[#111827] text-base font-medium"
                style={{ fontFamily: "Inter, -apple-system, sans-serif" }}
              >
                Building your medical profile
              </span>
            </div>
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
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

          {/* Right Side - Placeholder for symmetry */}
          <button className="flex items-center justify-center w-10 h-10 rounded-full border border-[#D1D5DB] shadow-sm opacity-0 pointer-events-none">
            <ArrowLeft className="w-6 h-6 text-[#4B5563]" />
          </button>
        </div>
      </div>

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
                      fontFamily: "Inter Display, -apple-system, sans-serif",
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
                            fontFamily: "Inter Display, -apple-system, sans-serif",
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
                            fontFamily: "Inter Display, -apple-system, sans-serif",
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

      {/* Footer */}
      <div className="bg-[#FCFAF8] border-t border-[#D6D3D1] px-6 py-4">
        <div className="max-w-[1464px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="px-3 py-2 text-[#78716C] font-semibold text-base hover:text-[#1C1917] transition-colors"
              style={{ fontFamily: "Inter, -apple-system, sans-serif" }}
            >
              About Us
            </button>
            <button
              className="px-3 py-2 text-[#78716C] font-semibold text-base hover:text-[#1C1917] transition-colors"
              style={{ fontFamily: "Inter, -apple-system, sans-serif" }}
            >
              Privacy Policy
            </button>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 border border-[#78716C] rounded-full">
            <Lock className="w-6 h-6 text-[#78716C]" />
            <span
              className="text-[#78716C] font-semibold text-base"
              style={{ fontFamily: "Inter, -apple-system, sans-serif" }}
            >
              HIPAA Compliant
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

