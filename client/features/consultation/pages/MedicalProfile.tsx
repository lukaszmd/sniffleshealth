import { useEffect } from "react";
import { X, Info, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { MedicalData } from "@shared/types";
import { ROUTES, FONTS } from "@/constants";
import { PageHeader, AppFooter } from "@/components/layout";
import { AIMessage, UserMessage } from "@/components/chat/MessageBubble";
import { ChatInput } from "@/components/chat/ChatInput";
import {
  useConsultationFlow,
  useFormNavigation,
  useAIChatIntake,
} from "../hooks";
import { useScrollToBottom } from "@/hooks";
import { useConsultationStore } from "@/stores/consultation.store";

export default function MedicalProfile() {
  const navigate = useNavigate();
  const { selectedCategory } = useConsultationStore();
  const { medicalData, setMedicalData, goToSummary } = useConsultationFlow();
  const { getStepInfo } = useFormNavigation();
  const stepInfo = getStepInfo();

  const {
    messages,
    inputValue,
    setInputValue,
    sendMessage,
    safetyStopTriggered,
    safetyStopMessage,
    phaseBCompleted,
  } = useAIChatIntake();

  const { messagesEndRef } = useScrollToBottom(messages);

  // Initialize medical data structure if empty
  useEffect(() => {
    if (!medicalData) {
      setMedicalData({
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
      });
    }
  }, [medicalData, setMedicalData]);

  const handleSend = () => {
    sendMessage(inputValue);
  };

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
        backTo={ROUTES.SYMPTOMS}
        step={stepInfo?.step}
        title={stepInfo?.title}
      />

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden bg-[#FCFAF8]">
        <div className="flex-1 max-w-[1464px] mx-auto w-full flex gap-3 p-6">
          {/* Chat Section */}
          <div className="flex-1 bg-white rounded-xl border border-[#D6D3D1] flex flex-col overflow-hidden max-w-[1110px]">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-10">
              <div className="flex flex-col gap-[22px] items-end max-w-[672px]">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={message.type === "ai" ? "w-full" : "w-auto"}
                  >
                    {message.type === "ai" ? (
                      <AIMessage text={message.text} />
                    ) : (
                      <UserMessage text={message.text} />
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-[#E5E7EB] p-6">
              <div className="max-w-[672px]">
                <ChatInput
                  value={inputValue}
                  onChange={setInputValue}
                  onSend={handleSend}
                />
              </div>
            </div>

            {/* Safety Stop Banner */}
            {safetyStopTriggered && safetyStopMessage && (
              <div className="border-t border-[#E5E7EB] p-6 bg-[#FEF3C7] border-l-4 border-l-[#F59E0B]">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="text-[#92400E] font-semibold text-sm mb-1">
                      Important Notice
                    </h3>
                    <p className="text-[#78350F] text-sm">
                      {safetyStopMessage}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Continue Button Section */}
            <div className="bg-white flex flex-col gap-5 items-center justify-center px-0 py-10 shadow-[0px_-100px_111px_0px_rgba(255,255,255,0.4)]">
              <button
                onClick={goToSummary}
                disabled={!phaseBCompleted && !safetyStopTriggered}
                className="bg-[#0E3240] text-white px-6 py-3 rounded-[18px] font-semibold text-base hover:bg-[#0E3240]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  fontFamily: FONTS.inter,
                  lineHeight: "24px",
                }}
              >
                Continue with consultation
              </button>
              {!phaseBCompleted && (
                <button
                  onClick={() => {
                    // Focus on input to allow user to continue sharing information
                    const input = document.querySelector(
                      'input[type="text"]',
                    ) as HTMLInputElement;
                    input?.focus();
                  }}
                  className="text-[#164E63] text-lg font-medium hover:text-[#164E63]/80 transition-colors"
                  style={{
                    fontFamily: FONTS.inter,
                    lineHeight: "24px",
                    letterSpacing: "-0.3125px",
                  }}
                >
                  I have to share more information
                </button>
              )}
            </div>
          </div>

          {/* Medical Profile Summary */}
          <div className="flex-1 bg-white rounded-xl border border-[#D6D3D1] p-5 flex flex-col gap-6 overflow-y-auto min-w-[342px]">
            {/* User Info */}
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d70e756501509614b665deb946de13d9f2aab9da"
                alt="User avatar"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex flex-col">
                <span
                  className="text-[#6A7282] text-xs font-medium"
                  style={{ fontFamily: FONTS.inter }}
                >
                  Consultation For
                </span>
                <span
                  className="text-[#101828] text-base font-medium"
                  style={{ fontFamily: FONTS.inter }}
                >
                  John Doe
                </span>
              </div>
            </div>

            {/* Info Block */}
            <div className="bg-[#ECF3F4] rounded-xl p-3 flex flex-col items-center gap-1 text-center">
              <Info className="w-6 h-6 text-[#4B5563]" />
              <h3
                className="text-[#101828] text-base font-medium"
                style={{ fontFamily: FONTS.inter }}
              >
                Building your medical profile
              </h3>
              <p
                className="text-[#1E2939] text-sm"
                style={{ fontFamily: FONTS.inter }}
              >
                This information will be saved and reviewed by a healthcare
                professional during consultation
              </p>
            </div>

            {/* Personal Details */}
            <div className="flex flex-col gap-3">
              <h3
                className="text-[#101828] text-base font-medium"
                style={{ fontFamily: FONTS.inter }}
              >
                Personal Details
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <DataField label="Age" value={currentMedicalData.age} />
                <DataField label="Weight" value={currentMedicalData.weight} />
                <DataField label="Sex" value={currentMedicalData.sex} />
                <DataField label="Height" value={currentMedicalData.height} />
              </div>
            </div>

            <div className="h-px bg-[#D1D5DB]" />

            {/* Allergies */}
            <div className="flex flex-col gap-2">
              <h3
                className="text-[#101828] text-base font-medium"
                style={{ fontFamily: FONTS.inter }}
              >
                Allergies
              </h3>
              {currentMedicalData.allergies.length > 0 ? (
                <div className="flex flex-col gap-2">
                  {currentMedicalData.allergies.map((allergy, idx) => (
                    <Tag key={idx} text={allergy} />
                  ))}
                </div>
              ) : (
                <p
                  className="text-[#1E2939] text-sm"
                  style={{ fontFamily: FONTS.inter }}
                >
                  None
                </p>
              )}
            </div>

            <div className="h-px bg-[#D1D5DB]" />

            {/* Chronic Conditions */}
            <div className="flex flex-col gap-2">
              <h3
                className="text-[#101828] text-base font-medium"
                style={{ fontFamily: FONTS.inter }}
              >
                Chronic Conditions
              </h3>
              <div className="flex flex-col gap-2">
                {currentMedicalData.chronicConditions.map((condition, idx) => (
                  <Tag key={idx} text={condition} />
                ))}
              </div>
            </div>

            <div className="h-px bg-[#D1D5DB]" />

            {/* Past Surgical History */}
            <div className="flex flex-col gap-2">
              <h3
                className="text-[#101828] text-base font-medium"
                style={{ fontFamily: FONTS.inter }}
              >
                Past Surgical History
              </h3>
              <div className="flex flex-col gap-2">
                {currentMedicalData.surgicalHistory.map((surgery, idx) => (
                  <Tag key={idx} text={surgery} />
                ))}
              </div>
            </div>

            <div className="h-px bg-[#D1D5DB]" />

            {/* Social History */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <h3
                  className="text-[#101828] text-base font-medium"
                  style={{ fontFamily: FONTS.inter }}
                >
                  Social History
                </h3>
                <p
                  className="text-[#78716C] text-sm"
                  style={{ fontFamily: FONTS.inter }}
                >
                  Including smoking, alcohol and illicit drug use (like cocaine,
                  PCP, methamphetamine, marijuana)
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {currentMedicalData.socialHistory.map((item, idx) => (
                  <DoubleTag key={idx} label={item.type} value={item.level} />
                ))}
              </div>
            </div>

            <div className="h-px bg-[#D1D5DB]" />

            {/* Family History */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <h3
                  className="text-[#101828] text-base font-medium"
                  style={{ fontFamily: FONTS.inter }}
                >
                  Family History
                </h3>
                <p
                  className="text-[#78716C] text-sm"
                  style={{ fontFamily: FONTS.inter }}
                >
                  Problems that run in a family like heart disease or other
                  genetic issues
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {currentMedicalData.familyHistory.map((item, idx) => (
                  <Tag key={idx} text={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}

function DataField({ label, value }: { label: string; value: string }) {
  return (
    <div className="col-span-1">
      <span
        className="text-[#4A5565] text-sm block mb-1"
        style={{ fontFamily: FONTS.inter }}
      >
        {label}
      </span>
      <div className="bg-[#FAFAF9] rounded-lg px-2 py-1">
        <span
          className="text-[#101828] text-base"
          style={{ fontFamily: FONTS.inter }}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-between gap-1 bg-[#F3F4F6] rounded-lg px-3 py-1">
      <span
        className="text-[#1E2939] text-sm"
        style={{ fontFamily: FONTS.inter }}
      >
        {text}
      </span>
      <X className="w-4 h-4 text-[#4B5563] cursor-pointer hover:text-[#1C1917]" />
    </div>
  );
}

function DoubleTag({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-1 bg-[#F3F4F6] rounded-lg px-3 py-1">
      <div className="flex items-center gap-2">
        <span
          className="text-[#1E2939] text-sm font-medium"
          style={{ fontFamily: FONTS.inter }}
        >
          {label}
        </span>
        <span
          className="text-[#1E2939] text-sm"
          style={{ fontFamily: FONTS.inter }}
        >
          {value}
        </span>
      </div>
      <X className="w-4 h-4 text-[#4B5563] cursor-pointer hover:text-[#1C1917]" />
    </div>
  );
}
