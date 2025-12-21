import { ROUTES } from "@/constants";
import { PageHeader, AppFooter } from "@/components/layout";
import { AIMessage, UserMessage } from "@/components/chat/MessageBubble";
import { ChatInput } from "@/components/chat/ChatInput";
import { useScrollToBottom, useChat, useConsultationFlow } from "@/hooks";

export default function DoctorChat() {
  const { selectedSymptoms, aiAssessment } = useConsultationFlow();
  const {
    messages,
    inputValue,
    setInputValue,
    sendMessage,
    initializeMessages,
  } = useChat({
    autoInitialize: true,
    initialMessages: [
      {
        type: "ai",
        text: "Hello, I'm Dr. Evelyn Reed. How can I assist you today?",
        sender: "Dr. Evelyn Reed, MD",
      },
      {
        type: "user",
        text: "Hi doctor, I've been having a bad headache and some fatigue for the past two days.",
      },
      {
        type: "ai",
        text: "I'm sorry to hear that. Can you describe your headache—where is it located and how severe is the pain?",
        sender: "Dr. Evelyn Reed, MD",
      },
      {
        type: "user",
        text: "It's mostly in my forehead, and the pain is moderate.",
      },
      {
        type: "ai",
        text: "Do you have any other symptoms, such as fever, cough, or congestion?",
        sender: "Dr. Evelyn Reed, MD",
      },
      {
        type: "user",
        text: "I've had a slight fever and a little cough.",
      },
      {
        type: "ai",
        text: "Understood. Have you experienced any nausea, vision changes, or sensitivity to light?",
        sender: "Dr. Evelyn Reed, MD",
      },
      {
        type: "user",
        text: "No, none of those.",
      },
      {
        type: "ai",
        text: "Do you have any chronic medical conditions or take any medications regularly?",
        sender: "Dr. Evelyn Reed, MD",
      },
      {
        type: "user",
        text: "No chronic conditions and I'm not taking any medications.",
      },
      {
        type: "ai",
        text: "Thank you for sharing this information. I recommend you review the summary on the right and let me know if anything is missing, or click 'Confirm & Continue' to proceed.",
        sender: "Dr. Evelyn Reed, MD",
      },
      {
        type: "ai",
        text: "Based on our consultation, I've prepared your prescription. You can view and download it here:",
        sender: "Dr. Evelyn Reed, MD",
        linkText: "View Your Prescription",
        linkUrl: ROUTES.PRESCRIPTION,
      },
    ],
  });
  const { messagesEndRef } = useScrollToBottom(messages);

  const handleSend = () => {
    sendMessage(inputValue);
  };

  // Get symptoms from store or use defaults
  const symptoms =
    selectedSymptoms.length > 0
      ? selectedSymptoms.map((id) => {
          // In a real app, you'd look up the symptom name by ID
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

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col">
      <PageHeader
        backTo={ROUTES.FINDING_DOCTOR}
        step="Step 3 of 4"
        title="Building your medical profile"
      />

      {/* Main Content */}
      <div className="flex-1 overflow-hidden bg-[#F3F4F6]">
        <div className="max-w-[1464px] mx-auto p-6 h-full">
          <div className="flex gap-3 h-full min-h-[750px]">
            {/* Left Panel - Chat */}
            <div className="flex-1 bg-white border border-[#D6D3D1] rounded-xl overflow-hidden flex flex-col max-w-[1110px] h-full">
              {/* Connected Header */}
              <div className="border-b border-[#D6D3D1] p-6 flex-shrink-0">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#00C950] rounded-full w-2 h-2"></div>
                    <span
                      className="text-[#4A5565] text-sm leading-5"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                        letterSpacing: "-0.1504px",
                      }}
                    >
                      Connected with
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#ECF3F4] flex items-center justify-center flex-shrink-0">
                      <span
                        className="text-[#4A5565] text-base font-normal leading-6"
                        style={{
                          fontFamily: "Inter, -apple-system, sans-serif",
                          letterSpacing: "-0.312px",
                        }}
                      >
                        ER
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <h3
                        className="text-[#1C1917] text-base font-medium leading-6"
                        style={{
                          fontFamily: "Inter, -apple-system, sans-serif",
                        }}
                      >
                        Dr. Evelyn Reed, MD
                      </h3>
                      <p
                        className="text-[#78716C] text-sm leading-5"
                        style={{
                          fontFamily: "Inter, -apple-system, sans-serif",
                          letterSpacing: "-0.1504px",
                        }}
                      >
                        General Practice | 12 yrs experience | NYC
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="overflow-y-auto pt-10 px-0 pb-0 h-[536px]">
                <div className="flex flex-col gap-[22px] items-end max-w-[672px] mx-auto pb-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={message.type === "ai" ? "w-full" : "w-auto"}
                    >
                      {message.type === "ai" ? (
                        <AIMessage
                          text={message.text}
                          sender={message.sender || "Sniffles Health Assitant"}
                          linkText={message.linkText}
                          linkUrl={message.linkUrl}
                        />
                      ) : (
                        <UserMessage text={message.text} />
                      )}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Input Area */}
              <div className="border-t border-[#E5E7EB] flex-shrink-0">
                <div className="flex items-center justify-center p-6">
                  <ChatInput
                    value={inputValue}
                    onChange={setInputValue}
                    onSend={handleSend}
                    className="w-[557px]"
                  />
                </div>
              </div>
            </div>

            {/* Right Panel - AI Summary */}
            <div
              className="w-[342px] border border-[#D6D3D1] rounded-[10px] overflow-hidden flex flex-col"
              style={{
                background:
                  "linear-gradient(179.813deg, rgb(217, 242, 247) 0%, rgb(255, 255, 255) 23.573%)",
              }}
            >
              {/* Icon */}
              <div className="flex justify-center p-6">
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
                    className="text-[#1F2937] text-2xl font-semibold leading-8"
                    style={{
                      fontFamily: "Inter, -apple-system, sans-serif",
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
                    className="text-[#1C1917] text-base font-normal leading-6"
                    style={{
                      fontFamily: "Inter, -apple-system, sans-serif",
                      letterSpacing: "-0.312px",
                    }}
                  >
                    Reported Symptoms
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {symptoms.map((symptom, index) => (
                      <span
                        key={index}
                        className="bg-[#F3F4F6] border border-transparent rounded-full px-[13px] py-[5px] text-[#364153] text-xs font-medium leading-4"
                        style={{
                          fontFamily: "Inter, -apple-system, sans-serif",
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
                  className="bg-[#F5F5F4] px-3 py-1 rounded-lg font-medium text-base text-[#1C1917] leading-6"
                  style={{
                    fontFamily: "Inter, -apple-system, sans-serif",
                  }}
                >
                  AI Summary
                </button>
                <button
                  className="px-3 py-1 rounded-lg font-medium text-base text-[#78716C] hover:text-[#1C1917] transition-colors leading-6"
                  style={{
                    fontFamily: "Inter, -apple-system, sans-serif",
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
