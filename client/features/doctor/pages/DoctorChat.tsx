import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import { ROUTES } from "@/constants";
import { PageHeader, AppFooter } from "@/components/layout";
import { AIMessage, UserMessage } from "@/components/chat/MessageBubble";
import { ChatInput } from "@/components/chat/ChatInput";
import { useScrollToBottom } from "@/hooks";
import { useConsultationStore } from "@/stores/consultation.store";
import { useDoctorStore } from "@/stores/doctor.store";
import { useDoctorChatConsultation } from "../hooks/useDoctorChatConsultation";
import type { DoctorChatQuestion } from "../constants/doctorChatQuestions";

export default function DoctorChat() {
  const navigate = useNavigate();
  const { selectedSymptoms, aiAssessment, medicalData } =
    useConsultationStore();
  const { selectedDoctor, setSelectedDoctor } = useDoctorStore();

  const {
    messages,
    inputValue,
    setInputValue,
    sendMessage,
    currentQuestion,
    isWaitingForAnswer,
    phase1Completed,
    phase2Completed,
    phase3Completed,
    phase4Completed,
    consultationComplete,
    prescriptionReady,
    safetyStopTriggered,
    safetyStopMessage,
  } = useDoctorChatConsultation();

  // Check if we're waiting for a follow-up (which requires text input)
  // This happens when the last message is a follow-up question
  const lastMessage =
    messages.length > 0 ? messages[messages.length - 1] : null;
  const isWaitingForFollowup =
    isWaitingForAnswer &&
    currentQuestion?.type === "yes_no_with_followup" &&
    currentQuestion.followup &&
    lastMessage?.type === "ai" &&
    lastMessage.text.includes(currentQuestion.followup);

  const { messagesEndRef } = useScrollToBottom(messages);

  // Track selected options for multiple selection questions
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"ai" | "medical" | "consultation">(
    "ai",
  );

  // Ref for chat input field
  const chatInputRef = useRef<HTMLInputElement>(null);

  // Track last message count to detect new messages
  const lastMessageCountRef = useRef(0);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  // Set default doctor if not set and ensure clean state on mount
  useEffect(() => {
    if (!selectedDoctor) {
      // Set a default doctor for demo purposes
      setSelectedDoctor({
        id: "1",
        name: "Evelyn Reed",
        title: "MD",
        specialty: "General Practice",
        experience: "12 yrs experience",
        location: "NYC",
        initials: "ER",
        isConnected: true,
      });
    }
  }, [selectedDoctor, setSelectedDoctor]);

  // Reset initialization state when component unmounts (for cleanup)
  useEffect(() => {
    return () => {
      // Cleanup: This ensures fresh state when navigating back
      // The hook will re-initialize on next mount
    };
  }, []);

  // Auto-scroll and focus on new messages
  useEffect(() => {
    const currentMessageCount = messages.length;

    if (currentMessageCount > lastMessageCountRef.current) {
      setTimeout(() => {
        if (lastMessageRef.current) {
          lastMessageRef.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          });
        } else {
          messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          });
        }
      }, 100);
    }

    lastMessageCountRef.current = currentMessageCount;
  }, [messages, messagesEndRef]);

  // Reset selected options when question changes
  useEffect(() => {
    if (currentQuestion) {
      setSelectedOptions([]);
    }
  }, [currentQuestion?.id]);

  const handleSend = () => {
    if (inputValue.trim()) {
      sendMessage(inputValue);
    }
  };

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

  // Get current phase name for display
  const getCurrentPhaseName = () => {
    if (
      phase1Completed &&
      phase2Completed &&
      phase3Completed &&
      phase4Completed
    ) {
      return "Complete";
    }
    if (phase1Completed && phase2Completed && phase3Completed) {
      return "Phase 4";
    }
    if (phase1Completed && phase2Completed) {
      return "Phase 3";
    }
    if (phase1Completed) {
      return "Phase 2";
    }
    return "Phase 1";
  };

  // Check if last message is from user
  const lastMessageIsFromUser =
    messages.length > 0 && messages[messages.length - 1]?.type === "user";

  const doctorName = selectedDoctor
    ? `${selectedDoctor.name}, ${selectedDoctor.title}`
    : "Dr. [Name], MD";
  const doctorInitials = selectedDoctor?.initials || "DR";
  const doctorSpecialty = selectedDoctor?.specialty || "General Practice";
  const doctorExperience = selectedDoctor?.experience || "12 yrs experience";
  const doctorLocation = selectedDoctor?.location || "NYC";

  return (
    <div className="h-screen bg-neutral-light-gray flex flex-col overflow-hidden">
      <PageHeader
        backTo={ROUTES.FINDING_DOCTOR}
        step="Step 3 of 4"
        title="Consultation with Doctor"
      />

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden bg-neutral-light-gray min-h-0">
        <div className="flex-1 max-w-[1464px] mx-auto w-full flex gap-3 p-6 h-full min-h-0">
          {/* Left Panel - Chat */}
          <div className="flex-1 bg-white border border-neutral-gray rounded-xl overflow-hidden flex flex-col max-w-[1110px] min-h-0">
            {/* Connected Header */}
            <div className="border-b border-neutral-gray p-6 flex-shrink-0">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="bg-semantic-success rounded-full w-2 h-2"></div>
                  <span className="text-text-secondary text-sm font-inter leading-5 tracking-tight">
                    Connected with
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-cyan-lighter flex items-center justify-center flex-shrink-0">
                    <span className="text-text-secondary text-base font-inter font-normal leading-6 tracking-body-tight">
                      {doctorInitials}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-text-primary text-base font-inter font-medium leading-6">
                      {doctorName}
                    </h3>
                    <p className="text-neutral-dark-gray text-sm font-inter leading-5 tracking-tight">
                      {doctorSpecialty} | {doctorExperience} | {doctorLocation}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto min-h-0">
              <div className="p-10">
                <div className="flex flex-col gap-[22px] max-w-[672px] mx-auto">
                  {messages.map((message, index) => {
                    const isLastMessage = index === messages.length - 1;
                    return (
                      <div
                        key={index}
                        ref={isLastMessage ? lastMessageRef : null}
                        className={
                          message.type === "ai"
                            ? "w-full"
                            : "w-auto max-w-[80%] self-end"
                        }
                      >
                        {message.type === "ai" ? (
                          <AIMessage
                            text={message.text}
                            sender={
                              message.sender || "Sniffles Health Assistant"
                            }
                            linkText={message.linkText}
                            linkUrl={message.linkUrl}
                          />
                        ) : (
                          <UserMessage text={message.text} />
                        )}
                      </div>
                    );
                  })}
                  <div ref={messagesEndRef} />
                </div>
              </div>
            </div>

            {/* Fixed Footer Area */}
            <div className="flex-shrink-0 bg-white border-t border-border-dark">
              {/* Safety Stop Banner */}
              {safetyStopTriggered && safetyStopMessage && (
                <div className="p-6 bg-yellow-100 border-l-4 border-l-yellow-500">
                  <div className="flex items-start gap-3 max-w-[672px] mx-auto">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="text-yellow-800 font-inter font-semibold text-sm mb-1">
                        Important Notice
                      </h3>
                      <p className="text-yellow-900 text-sm font-inter">
                        {safetyStopMessage}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Options Section */}
              {isWaitingForAnswer &&
                currentQuestion &&
                (() => {
                  let options: string[] | undefined;
                  const isMultipleSelect =
                    currentQuestion.type === "multiple_choice" &&
                    currentQuestion.allowMultiple === true;

                  if (currentQuestion.type === "yes_no") {
                    options = ["Yes", "No"];
                  } else if (
                    currentQuestion.type === "multiple_choice" &&
                    currentQuestion.options
                  ) {
                    options = currentQuestion.options;
                  }

                  if (!options || options.length === 0) return null;

                  return (
                    <div className="p-6">
                      <div className="max-w-[672px] mx-auto">
                        {isMultipleSelect ? (
                          <div className="flex flex-col gap-3">
                            <div className="flex gap-3 flex-wrap">
                              {options.map((option, index) => {
                                const isSelected =
                                  selectedOptions.includes(option);
                                return (
                                  <button
                                    key={index}
                                    onClick={() => {
                                      if (option === "None") {
                                        setSelectedOptions(["None"]);
                                      } else {
                                        setSelectedOptions((prev) => {
                                          const withoutNone = prev.filter(
                                            (o) => o !== "None",
                                          );
                                          if (withoutNone.includes(option)) {
                                            return withoutNone.filter(
                                              (o) => o !== option,
                                            );
                                          } else {
                                            return [...withoutNone, option];
                                          }
                                        });
                                      }
                                    }}
                                    className={`border rounded-2xl px-5 py-5 font-inter text-base font-medium leading-6 transition-colors ${
                                      isSelected
                                        ? "bg-brand-cyan-dark border-brand-cyan-dark text-white"
                                        : "bg-white border-border-medium text-text-secondary hover:bg-gray-50"
                                    }`}
                                  >
                                    {option}
                                  </button>
                                );
                              })}
                            </div>
                            {selectedOptions.length > 0 && (
                              <div className="flex justify-end">
                                <button
                                  onClick={() => {
                                    const answer =
                                      selectedOptions.length === 1 &&
                                      selectedOptions[0] === "None"
                                        ? "None"
                                        : selectedOptions
                                            .filter((o) => o !== "None")
                                            .join(", ");
                                    sendMessage(answer);
                                  }}
                                  className="bg-brand-cyan-dark text-white font-inter rounded-2xl px-6 py-3 font-semibold text-base leading-6 hover:bg-brand-cyan-dark/90 transition-colors"
                                >
                                  Continue
                                </button>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="flex gap-3 flex-wrap">
                            {options.map((option, index) => (
                              <button
                                key={index}
                                onClick={() => sendMessage(option)}
                                className="bg-white border border-border-medium text-text-secondary font-inter text-base font-medium leading-6 rounded-2xl px-5 py-5 hover:bg-gray-50 transition-colors"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })()}

              {/* Input Area - Always shown (except when consultation is complete or prescription is ready) */}
              {!consultationComplete && !prescriptionReady && (
                <div className="p-6">
                  <div className="max-w-[672px] mx-auto">
                    <ChatInput
                      ref={chatInputRef}
                      value={inputValue}
                      onChange={setInputValue}
                      onSend={handleSend}
                    />
                  </div>
                </div>
              )}

              {/* Completion State - View Prescription Button */}
              {prescriptionReady && (
                <div className="bg-white flex flex-col gap-5 items-center justify-center px-0 py-10 shadow-[0px_-100px_111px_0px_rgba(255,255,255,0.4)] animate-fade-in-slide-up">
                  <button
                    onClick={() => navigate(ROUTES.PRESCRIPTION)}
                    className="bg-brand-cyan-dark text-white font-inter px-6 py-3 rounded-2xl font-semibold text-base leading-6 hover:bg-brand-cyan-dark/90 active:bg-brand-cyan-dark/85 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-cyan-dark focus:ring-offset-2"
                    aria-label="View prescription"
                  >
                    View Prescription
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Summary */}
          <div className="w-[342px] flex-shrink-0 border border-neutral-gray rounded-xl overflow-hidden flex flex-col bg-gradient-to-b from-brand-cyan-lightest to-white h-full min-h-0">
            {/* Icon */}
            <div className="flex justify-center p-6 flex-shrink-0">
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

            {/* Content - Scrollable */}
            <div className="flex flex-col gap-6 flex-1 px-6 py-0 overflow-y-auto min-h-0">
              {activeTab === "ai" && (
                <>
                  {/* Consultation Progress */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-text-primary text-base font-inter font-medium">
                      Consultation Progress
                    </h3>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            phase1Completed
                              ? "bg-semantic-success"
                              : "bg-neutral-gray"
                          }`}
                        />
                        <span className="text-text-slate text-sm font-inter">
                          Phase 1: Initial Assessment
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            phase2Completed
                              ? "bg-semantic-success"
                              : "bg-neutral-gray"
                          }`}
                        />
                        <span className="text-text-slate text-sm font-inter">
                          Phase 2: Category-Specific
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            phase3Completed
                              ? "bg-semantic-success"
                              : "bg-neutral-gray"
                          }`}
                        />
                        <span className="text-text-slate text-sm font-inter">
                          Phase 3: Medical Review
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            phase4Completed
                              ? "bg-semantic-success"
                              : "bg-neutral-gray"
                          }`}
                        />
                        <span className="text-text-slate text-sm font-inter">
                          Phase 4: Final Assessment
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* AI Preliminary Assessment */}
                  <div className="flex flex-col gap-3">
                    <h2 className="text-neutral-charcoal text-2xl font-inter font-semibold leading-8">
                      AI Preliminary Assessment
                    </h2>
                    <p className="text-text-primary text-base font-inter font-normal leading-6 tracking-body-tight">
                      {currentAiAssessment}
                    </p>
                  </div>

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
                </>
              )}

              {activeTab === "medical" && medicalData && (
                <div className="flex flex-col gap-4">
                  <h2 className="text-neutral-charcoal text-2xl font-inter font-semibold leading-8">
                    Medical Summary
                  </h2>

                  {/* Personal Details */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-text-primary text-base font-inter font-medium">
                      Personal Details
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      <DataField label="Age" value={medicalData.age || "—"} />
                      <DataField
                        label="Weight"
                        value={medicalData.weight || "—"}
                      />
                      <DataField label="Sex" value={medicalData.sex || "—"} />
                      <DataField
                        label="Height"
                        value={medicalData.height || "—"}
                      />
                    </div>
                  </div>

                  {/* Allergies */}
                  {medicalData.allergies &&
                    medicalData.allergies.length > 0 && (
                      <div className="flex flex-col gap-2">
                        <h3 className="text-text-primary text-base font-inter font-medium">
                          Allergies
                        </h3>
                        <div className="flex flex-col gap-2">
                          {medicalData.allergies.map((allergy, idx) => (
                            <Tag key={idx} text={allergy} />
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Chronic Conditions */}
                  {medicalData.chronicConditions &&
                    medicalData.chronicConditions.length > 0 && (
                      <div className="flex flex-col gap-2">
                        <h3 className="text-text-primary text-base font-inter font-medium">
                          Chronic Conditions
                        </h3>
                        <div className="flex flex-col gap-2">
                          {medicalData.chronicConditions.map(
                            (condition, idx) => (
                              <Tag key={idx} text={condition} />
                            ),
                          )}
                        </div>
                      </div>
                    )}
                </div>
              )}

              {activeTab === "consultation" && (
                <div className="flex flex-col gap-4">
                  <h2 className="text-neutral-charcoal text-2xl font-inter font-semibold leading-8">
                    Consultation Summary
                  </h2>
                  <p className="text-text-primary text-base font-inter">
                    Consultation is in progress. Summary will be available upon
                    completion.
                  </p>
                </div>
              )}
            </div>

            {/* Tabs */}
            <div className="bg-white border-t border-neutral-gray p-3 flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => setActiveTab("ai")}
                className={`px-3 py-1 rounded-lg font-inter font-medium text-sm leading-6 transition-colors ${
                  activeTab === "ai"
                    ? "bg-warm-50 text-text-primary"
                    : "text-neutral-dark-gray hover:text-text-primary"
                }`}
              >
                AI Summary
              </button>
              <button
                onClick={() => setActiveTab("medical")}
                className={`px-3 py-1 rounded-lg font-inter font-medium text-sm leading-6 transition-colors ${
                  activeTab === "medical"
                    ? "bg-warm-50 text-text-primary"
                    : "text-neutral-dark-gray hover:text-text-primary"
                }`}
              >
                Medical Summary
              </button>
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
      <span className="text-text-secondary text-sm font-inter block mb-1">
        {label}
      </span>
      <div className="bg-warm-50 rounded-lg px-2 py-1">
        <span className="text-text-primary text-base font-inter">{value}</span>
      </div>
    </div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-between gap-1 bg-neutral-light-gray rounded-lg px-3 py-1">
      <span className="text-text-slate text-sm font-inter">{text}</span>
    </div>
  );
}
