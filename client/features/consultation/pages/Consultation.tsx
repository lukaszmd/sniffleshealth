import { useState, useEffect } from "react";
import { MessageSquare, Video, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES, FONTS } from "@/constants";
import { PageHeader, AppFooter } from "@/components/layout";
import { DoctorCard } from "@/features/doctor/components";
import { useFormNavigation } from "../hooks";
import { useDoctorStore } from "@/stores/doctor.store";
import type { Doctor } from "@shared/types";

export default function Consultation() {
  const navigate = useNavigate();
  const { getStepInfo } = useFormNavigation();
  const stepInfo = getStepInfo();
  const { setSelectedDoctor, selectedDoctor } = useDoctorStore();
  
  // Pre-select the text chat doctor (Dr. Evelyn Reed)
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>("1");
  
  // Define available doctors
  const doctors: Record<string, Doctor> = {
    "1": {
      id: "1",
      name: "Evelyn Reed", // Store without "Dr." prefix for consistency
      title: "MD",
      specialty: "General Practice",
      experience: "12 yrs experience",
      location: "New York",
      initials: "ER",
      isConnected: true,
    },
    "2": {
      id: "2",
      name: "Marcus Chen",
      title: "DO",
      specialty: "Internal Medicine",
      experience: "10 yrs experience",
      location: "New York",
      initials: "MC",
      isConnected: true,
    },
  };
  
  // Initialize pre-selected doctor on mount
  useEffect(() => {
    if (!selectedDoctor || selectedDoctor.id !== "1") {
      setSelectedDoctor(doctors["1"]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run on mount
  
  // Handle doctor selection
  const handleDoctorSelect = (doctorId: string) => {
    setSelectedDoctorId(doctorId);
    const doctor = doctors[doctorId];
    if (doctor) {
      setSelectedDoctor(doctor);
    }
  };

  // Sample data - in a real app, this would come from state/API
  const symptoms = ["Fever", "Persistent Cough", "Headache", "Fatigue"];
  const aiAssessment =
    "The AI has identified a potential viral infection based on the symptoms provided. Common causes could include influenza or a common cold. This is not a final diagnosis.";

  return (
    <div className="min-h-screen bg-neutral-light-gray flex flex-col">
      <PageHeader
        backTo={ROUTES.SUMMARY}
        step={stepInfo?.step}
        title={stepInfo?.title}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-neutral-light-gray">
        <div className="max-w-[1464px] mx-auto p-6">
          <div className="flex gap-3 h-full min-h-[750px]">
            {/* Left Panel - Consultation Options */}
            <div className="flex-1 bg-white border border-neutral-gray rounded-xl overflow-hidden relative">
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
                    <h1 className="text-6xl font-inter-display font-medium leading-52 tracking-display-tight text-center">
                      <span className="text-neutral-charcoal">
                        Consult with a doctor now
                      </span>
                      <br />
                      <span className="text-neutral-charcoal">starting at </span>
                      <span className="text-cyan-500">$25</span>
                    </h1>

                    {/* Doctor Cards */}
                    <div className="flex gap-4 w-full">
                      {/* Doctor 1 - Text Chat (Pre-selected) */}
                      <DoctorCard
                        doctor={{
                          ...doctors["1"],
                          name: "Dr. Evelyn Reed, MD", // Display name with prefix
                        }}
                        waitTime="~ Text 2 min wait"
                        icon={
                          <MessageSquare className="w-4 h-4 text-text-secondary" />
                        }
                        selected={selectedDoctorId === "1"}
                        onClick={() => handleDoctorSelect("1")}
                      />

                      {/* Doctor 2 */}
                      <DoctorCard
                        doctor={{
                          ...doctors["2"],
                          name: "Dr. Marcus Chen, DO", // Display name with prefix
                        }}
                        waitTime="~ Video/Audio 15 min wait"
                        icon={<Video className="w-4 h-4 text-text-secondary" />}
                        selected={selectedDoctorId === "2"}
                        onClick={() => handleDoctorSelect("2")}
                      />
                    </div>

                    {/* Recommendation Text */}
                    <p className="text-text-secondary text-base font-inter text-center max-w-[347px] leading-5">
                      You AI Summary is ready, we recommend you to connect to a
                      doctor for your query
                    </p>

                    {/* CTA Button */}
                    <button
                      onClick={() => navigate(ROUTES.SELECT_CONSULTATION_TYPE)}
                      className="bg-brand-cyan-dark text-white font-inter px-6 py-3 rounded-2xl font-semibold text-base leading-6 hover:bg-brand-cyan-dark/90 transition-colors"
                    >
                      Continue with consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - AI Summary */}
            <div className="w-[393px] border border-neutral-gray rounded-xl p-6 flex flex-col gap-6 bg-gradient-to-b from-brand-cyan-lightest to-white">
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
              <h2 className="text-neutral-charcoal text-2xl font-inter font-semibold text-center leading-8">
                Your AI summary is here
              </h2>

              {/* Content */}
              <div className="flex flex-col gap-6 flex-1">
                {/* Reported Symptoms */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-text-primary text-base font-inter font-normal leading-6 tracking-body-tight">
                    Reported Symptoms
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {symptoms.map((symptom, index) => (
                      <span
                        key={index}
                        className="bg-neutral-light-gray border border-transparent rounded-full px-[13px] py-[5px] text-text-slate text-xs font-inter font-medium leading-4"
                      >
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>

                {/* AI Preliminary Assessment */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-text-slate text-lg font-inter font-medium leading-7 tracking-tight">
                    AI Preliminary Assessment
                  </h3>
                  <p className="text-text-primary text-base font-inter font-normal leading-6 tracking-body-tight">
                    {aiAssessment}
                  </p>
                </div>
              </div>

              {/* Important Disclaimer */}
              <div className="flex gap-3">
                <Info className="w-5 h-5 text-text-secondary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2">
                  <h4 className="text-text-primary text-base font-inter font-normal leading-6 tracking-body-tight">
                    Important Disclaimer
                  </h4>
                  <p className="text-text-secondary text-sm font-inter font-normal leading-[22.75px] tracking-tight">
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
