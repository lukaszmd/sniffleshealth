import { useState, useEffect } from "react";
import { ArrowLeft, Lock, Loader2, Plus, Mic, ArrowUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function FindingDoctor() {
  const navigate = useNavigate();
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [activeTab, setActiveTab] = useState<"ai" | "medical">("ai");

  // Sample data - in a real app, this would come from state/API
  const symptoms = ["Fever", "Persistent Cough", "Headache", "Fatigue"];
  const aiAssessment =
    "The AI has identified a potential viral infection based on the symptoms provided. Common causes could include influenza or a common cold. This is not a final diagnosis.";

  // Simulate finding doctor after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/doctor-chat");
    }, 3000); // Navigate after 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleSubmit = () => {
    // Handle submission of additional information
    console.log("Additional info:", additionalInfo);
    setAdditionalInfo("");
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col">
      {/* Header */}
      <div className="bg-[#FCFAF8] border-b border-[#D6D3D1] px-6 py-4">
        <div className="max-w-[1464px] mx-auto flex items-center justify-between relative">
          {/* Left Side - Back Button & Title */}
          <div className="flex items-center gap-3">
            <Link
              to="/address-details"
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
                      fontFamily: "Inter Display, -apple-system, sans-serif",
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
                  <div className="bg-white border border-[#D1D5DB] rounded-[18px] p-5 flex items-center gap-2 w-full h-[57px]">
                    <div className="flex items-center justify-center p-1 rounded-lg opacity-75 flex-shrink-0">
                      <Plus className="w-5 h-5 text-[#4B5563]" />
                    </div>
                    <input
                      type="text"
                      placeholder="Add more information, questions while we find you a doctor"
                      value={additionalInfo}
                      onChange={(e) => setAdditionalInfo(e.target.value)}
                      className="flex-1 bg-transparent border-none outline-none text-[#374151] text-sm placeholder:text-[#374151]"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                      }}
                    />
                    <button className="flex items-center justify-center p-2 rounded-xl hover:bg-[#F3F4F6] transition-colors flex-shrink-0">
                      <Mic className="w-6 h-6 text-[#164E63]" />
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="bg-[#164E63] flex items-center justify-center p-2 rounded-xl hover:bg-[#164E63]/90 transition-colors flex-shrink-0 h-10 w-10"
                    >
                      <ArrowUp className="w-5 h-5 text-white" />
                    </button>
                  </div>
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
                    {aiAssessment}
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
