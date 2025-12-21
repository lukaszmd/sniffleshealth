import { ArrowLeft, Lock, MessageSquare, Video, Info } from "lucide-react";
import { Link } from "react-router-dom";

export default function Consultation() {
  // Sample data - in a real app, this would come from state/API
  const symptoms = ["Fever", "Persistent Cough", "Headache", "Fatigue"];
  const aiAssessment =
    "The AI has identified a potential viral infection based on the symptoms provided. Common causes could include influenza or a common cold. This is not a final diagnosis.";

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col">
      {/* Header */}
      <div className="bg-[#FCFAF8] border-b border-[#D6D3D1] px-6 py-4">
        <div className="max-w-[1464px] mx-auto flex items-center justify-between relative">
          {/* Left Side - Back Button & Title */}
          <div className="flex items-center gap-3">
            <Link
              to="/medical-profile"
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
            {/* Left Panel - Consultation Options */}
            <div className="flex-1 bg-white border border-[#D6D3D1] rounded-xl overflow-hidden relative">
              {/* Background decoration */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg
                  className="absolute -left-1 -top-[166px] w-[1057px] h-[1074px] opacity-10"
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
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-10">
                <div className="flex flex-col gap-6 items-center max-w-[614px]">
                  {/* Header */}
                  <div className="flex flex-col gap-6 items-center text-center">
                    <h1
                      className="text-[52px] font-medium leading-[52px] tracking-[-2.6px] text-center"
                      style={{
                        fontFamily: "Inter Display, -apple-system, sans-serif",
                      }}
                    >
                      <span className="text-[#1F2937]">Consult with a doctor now</span>
                      <br />
                      <span className="text-[#1F2937]">starting at </span>
                      <span className="text-[#06B6D4]">$25</span>
                    </h1>

                    {/* Doctor Cards */}
                    <div className="flex gap-4 w-full">
                      {/* Doctor 1 */}
                      <DoctorCard
                        initials="ER"
                        name="Dr. Evelyn Reed, MD"
                        specialty="General Practice"
                        waitTime="~ Text 2 min wait"
                        icon={<MessageSquare className="w-4 h-4 text-[#4B5563]" />}
                      />

                      {/* Doctor 2 */}
                      <DoctorCard
                        initials="MC"
                        name="Dr. Marcus Chen, DO"
                        specialty="Internal Medicine"
                        waitTime="~ Video/Audio 15 min wait"
                        icon={<Video className="w-4 h-4 text-[#4B5563]" />}
                      />
                    </div>

                    {/* Recommendation Text */}
                    <p
                      className="text-[#4B5563] text-base text-center max-w-[347px]"
                      style={{
                        fontFamily: "SF Pro, -apple-system, sans-serif",
                        lineHeight: "20px",
                      }}
                    >
                      You AI Summary is ready, we recommend you to connect to a
                      doctor for your query
                    </p>

                    {/* CTA Button */}
                    <button
                      className="bg-[#0E3240] text-white px-6 py-3 rounded-[18px] font-semibold text-base hover:bg-[#0E3240]/90 transition-colors"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                        lineHeight: "24px",
                      }}
                    >
                      Continue with consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - AI Summary */}
            <div
              className="w-[393px] border border-[#D6D3D1] rounded-[10px] p-6 flex flex-col gap-6"
              style={{
                background:
                  "linear-gradient(179.838deg, rgb(217, 242, 247) 0%, rgb(255, 255, 255) 23.573%)",
              }}
            >
              {/* Icon */}
              <div className="flex justify-center">
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

              {/* Title */}
              <h2
                className="text-[#1F2937] text-2xl font-semibold text-center"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                  lineHeight: "32px",
                }}
              >
                Your AI summary is here
              </h2>

              {/* Content */}
              <div className="flex flex-col gap-6 flex-1">
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

                {/* AI Preliminary Assessment */}
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-[#364153] text-lg font-medium"
                    style={{
                      fontFamily: "Inter, -apple-system, sans-serif",
                      lineHeight: "27px",
                      letterSpacing: "-0.4395px",
                    }}
                  >
                    AI Preliminary Assessment
                  </h3>
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
              </div>

              {/* Important Disclaimer */}
              <div className="flex gap-3">
                <Info className="w-5 h-5 text-[#4B5563] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2">
                  <h4
                    className="text-[#101828] text-base font-normal"
                    style={{
                      fontFamily: "Inter, -apple-system, sans-serif",
                      lineHeight: "24px",
                      letterSpacing: "-0.312px",
                    }}
                  >
                    Important Disclaimer
                  </h4>
                  <p
                    className="text-[#4A5565] text-sm font-normal leading-[22.75px]"
                    style={{
                      fontFamily: "Inter, -apple-system, sans-serif",
                      letterSpacing: "-0.1504px",
                    }}
                  >
                    The AI summary is for informational purposes only and does
                    not constitute a medical diagnosis. Please consult with a
                    licensed healthcare professional for any medical advice.
                  </p>
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

function DoctorCard({
  initials,
  name,
  specialty,
  waitTime,
  icon,
}: {
  initials: string;
  name: string;
  specialty: string;
  waitTime: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex-1 bg-white border border-[#E5E7EB] rounded-[10px] p-[17px] flex flex-col gap-3">
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-[#E5E7EB] flex items-center justify-center flex-shrink-0">
          <span
            className="text-[#4A5565] text-base font-normal"
            style={{
              fontFamily: "Inter, -apple-system, sans-serif",
              lineHeight: "24px",
              letterSpacing: "-0.312px",
            }}
          >
            {initials}
          </span>
        </div>

        {/* Doctor Info */}
        <div className="flex flex-col gap-0.5 flex-1 min-w-0">
          <h3
            className="text-[#101828] text-base font-normal truncate"
            style={{
              fontFamily: "Inter, -apple-system, sans-serif",
              lineHeight: "24px",
              letterSpacing: "-0.312px",
            }}
          >
            {name}
          </h3>
          <p
            className="text-[#6A7282] text-sm font-normal"
            style={{
              fontFamily: "Inter, -apple-system, sans-serif",
              lineHeight: "20px",
              letterSpacing: "-0.1504px",
            }}
          >
            {specialty}
          </p>
        </div>
      </div>

      {/* Wait Time */}
      <div className="flex items-center gap-2">
        {icon}
        <span
          className="text-[#4A5565] text-sm font-normal"
          style={{
            fontFamily: "Inter, -apple-system, sans-serif",
            lineHeight: "20px",
            letterSpacing: "-0.1504px",
          }}
        >
          {waitTime}
        </span>
      </div>
    </div>
  );
}
