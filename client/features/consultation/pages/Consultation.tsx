import { useState } from "react";
import { MessageSquare, Video, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES, FONTS } from "@/constants";
import { PageHeader, AppFooter } from "@/components/layout";
import { DoctorCard } from "@/features/doctor/components";
import { useFormNavigation } from "../hooks";

export default function Consultation() {
  const navigate = useNavigate();
  const { getStepInfo } = useFormNavigation();
  const stepInfo = getStepInfo();
  // Pre-select the text chat doctor (Dr. Evelyn Reed)
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>("1");

  // Sample data - in a real app, this would come from state/API
  const symptoms = ["Fever", "Persistent Cough", "Headache", "Fatigue"];
  const aiAssessment =
    "The AI has identified a potential viral infection based on the symptoms provided. Common causes could include influenza or a common cold. This is not a final diagnosis.";

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col">
      <PageHeader
        backTo={ROUTES.SUMMARY}
        step={stepInfo?.step}
        title={stepInfo?.title}
      />

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
                      <span className="text-[#1F2937]">
                        Consult with a doctor now
                      </span>
                      <br />
                      <span className="text-[#1F2937]">starting at </span>
                      <span className="text-[#06B6D4]">$25</span>
                    </h1>

                    {/* Doctor Cards */}
                    <div className="flex gap-4 w-full">
                      {/* Doctor 1 - Text Chat (Pre-selected) */}
                      <DoctorCard
                        doctor={{
                          id: "1",
                          name: "Dr. Evelyn Reed, MD",
                          title: "MD",
                          specialty: "General Practice",
                          experience: "12 yrs experience",
                          location: "New York",
                          initials: "ER",
                        }}
                        waitTime="~ Text 2 min wait"
                        icon={
                          <MessageSquare className="w-4 h-4 text-[#4B5563]" />
                        }
                        selected={selectedDoctorId === "1"}
                        onClick={() => setSelectedDoctorId("1")}
                      />

                      {/* Doctor 2 */}
                      <DoctorCard
                        doctor={{
                          id: "2",
                          name: "Dr. Marcus Chen, DO",
                          title: "DO",
                          specialty: "Internal Medicine",
                          experience: "10 yrs experience",
                          location: "New York",
                          initials: "MC",
                        }}
                        waitTime="~ Video/Audio 15 min wait"
                        icon={<Video className="w-4 h-4 text-[#4B5563]" />}
                        selected={selectedDoctorId === "2"}
                        onClick={() => setSelectedDoctorId("2")}
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
                      onClick={() => navigate(ROUTES.SELECT_CONSULTATION_TYPE)}
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

      <AppFooter />
    </div>
  );
}
