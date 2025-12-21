import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Lock, Plus, Mic, ArrowUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface Message {
  type: "ai" | "user";
  text: string;
  sender?: string;
  linkText?: string;
  linkUrl?: string;
}

export default function DoctorChat() {
  const [messages, setMessages] = useState<Message[]>([
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
      text: "I’ve had a slight fever and a little cough.",
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
      text: "No chronic conditions and I’m not taking any medications.",
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
      linkUrl: "/prescription",
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        {
          type: "user",
          text: inputValue,
        },
      ]);
      setInputValue("");
    }
  };

  // Sample data - in a real app, this would come from state/API
  const symptoms = ["Fever", "Persistent Cough", "Headache", "Fatigue"];
  const aiAssessment =
    "The AI has identified a potential viral infection based on the symptoms provided. Common causes could include influenza or a common cold. This is not a final diagnosis.";

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col">
      {/* Header */}
      <div className="bg-[#FCFAF8] border-b border-[#D6D3D1]">
        <div className="max-w-[1464px] mx-auto flex items-center justify-between relative p-6">
          {/* Left Side - Back Button & Title */}
          <div className="flex items-center gap-3">
            <Link
              to="/finding-doctor"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-[#D6D3D1] bg-[#FCFAF8] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.03)] opacity-90 hover:opacity-100 transition-opacity"
            >
              <ArrowLeft className="w-6 h-6 text-[#1C1917]" />
            </Link>
            <div className="flex flex-col">
              <span
                className="text-[#4B5563] text-sm leading-5"
                style={{ fontFamily: "Inter, -apple-system, sans-serif" }}
              >
                Step 3 of 4
              </span>
              <span
                className="text-[#111827] text-base font-medium leading-6"
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
          <button className="flex items-center justify-center w-10 h-10 rounded-full border border-[#D1D5DB] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.03)] opacity-0 pointer-events-none">
            <ArrowLeft className="w-6 h-6 text-[#4B5563]" />
          </button>
        </div>
      </div>

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
                  <div className="bg-white border border-[#D1D5DB] rounded-[18px] flex items-center gap-2 h-[57px] w-[557px] pl-5 pr-2 py-5">
                    <div className="flex items-center justify-center p-1 rounded-lg opacity-75 flex-shrink-0">
                      <Plus className="w-5 h-5 text-[#4B5563]" />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter your message here"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleSend();
                        }
                      }}
                      className="flex-1 bg-transparent border-none outline-none text-[#374151] text-sm placeholder:text-[#374151] leading-5"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                      }}
                    />
                    <button className="flex items-center justify-center p-2 rounded-xl hover:bg-[#F3F4F6] transition-colors flex-shrink-0">
                      <Mic className="w-6 h-6 text-[#164E63]" />
                    </button>
                    <button
                      onClick={handleSend}
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
                    {aiAssessment}
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

function AIMessage({
  text,
  sender,
  linkText,
  linkUrl,
}: {
  text: string;
  sender: string;
  linkText?: string;
  linkUrl?: string;
}) {
  // Different styling for "AI Assistant" vs "Sniffles Health Assitant"
  const isAIAssistant = sender === "AI Assistant";
  const bgColor = isAIAssistant ? "#F3F4F6" : "#ECF3F4";
  const textColor = isAIAssistant ? "#1E2939" : "#1C1917";
  const borderRadius = isAIAssistant
    ? "rounded-bl-[16px] rounded-br-[16px] rounded-tl-[6px] rounded-tr-[16px]"
    : "rounded-bl-[30px] rounded-br-[30px] rounded-tl-[12px] rounded-tr-[30px]";
  const senderColor = isAIAssistant ? "#6A7282" : "#292524";

  return (
    <div className="flex items-start gap-3">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-2 ${
          isAIAssistant ? "border border-[#D1D5DC] bg-white" : "bg-[#DCE9EB]"
        }`}
      >
        {isAIAssistant ? (
          <div className="w-4 h-4 rounded-full bg-[#164E63]"></div>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5977 23.9219C11.5094 23.1193 11.5631 22.3528 11.5528 21.5873C11.5428 20.839 11.1955 20.4814 10.4482 20.467C9.71007 20.4528 8.97106 20.5217 8.23371 20.4224C6.98651 20.2546 6.03498 19.21 6.02244 17.9559C6.01012 16.724 6.06662 15.4895 6.00427 14.2606C5.93547 12.9046 6.53921 11.1118 8 11C8.43521 10.9667 6.56375 11.0055 7.00104 11C7.25404 10.9968 7.40309 11.1052 7.39706 11.375C7.39639 11.405 7.39938 11.4351 7.39931 11.4651C7.39612 12.7564 9.2619 13.9875 8.00104 14C7.8351 14.0016 8.16645 13.49 8.00104 13.5C7.45345 13.5332 7.61883 13.5343 7.60947 14.0837C7.58772 15.3602 7.5878 16.6376 7.61005 17.9141C7.62002 18.4858 8.02478 18.8442 8.61271 18.8558C9.23102 18.8681 9.85001 18.8449 10.4684 18.8552C12.0495 18.8815 13.1185 19.9654 13.1302 21.5443C13.1344 22.1152 13.1256 22.6863 13.1388 23.257C13.1559 23.9947 13.552 24.3988 14.2975 24.4074C15.444 24.4207 16.5909 24.4179 17.7374 24.402C18.4542 24.3921 18.8559 24.014 18.866 23.2683C18.8907 21.4507 18.8884 19.6324 18.868 17.8147C18.8605 17.1484 18.4686 16.8022 17.7942 16.7972C16.6023 16.7882 15.4103 16.7981 14.2184 16.795C12.6354 16.7909 11.5641 15.7443 11.5553 14.1733C11.5451 12.3404 11.55 10.5074 11.5557 8.67444C11.5601 7.2837 12.4824 6.17859 13.8671 6.07884C15.2637 5.97824 16.6759 5.9643 18.0715 6.09356C19.5555 6.23102 20.4381 7.28077 20.4585 8.77199C20.4657 9.29769 20.449 9.82368 20.4525 10.3495C20.4583 11.2155 20.7994 11.5528 21.6563 11.5505C22.1844 11.5491 22.7125 11.54 23.2405 11.5447C24.8428 11.5591 25.9792 12.6812 25.9925 14.2696C26.0024 15.4565 26.0031 16.6435 25.9977 17.8304C25.9915 19.1827 25.0567 20.2485 23.714 20.4354C23.2192 20.5043 23.485 21.1005 23.001 21C22.2603 20.8461 23.8358 19.8865 23.714 19.5C23.6215 19.2065 23.6982 18.4938 24.001 18.5C24.3479 18.5071 23.6543 19.0096 24.001 19C24.6551 18.982 24.3847 18.4682 24.3969 17.8174C24.4197 16.6008 24.4222 15.3832 24.3963 14.1668C24.3817 13.4849 23.9397 13.1026 23.2418 13.1215C22.5637 13.1399 21.8883 13.1905 21.2086 13.1188C19.9208 12.9831 18.9242 11.949 18.8826 10.6574C18.8638 10.072 18.8821 9.48558 18.8775 8.89966C18.8706 8.01886 18.4526 7.58808 17.5617 7.62665C16.4303 7.67564 15.2993 7.65443 14.1682 7.66926C13.4755 7.67834 13.139 8.00776 13.1353 8.69872C13.1256 10.5016 13.1237 12.3045 13.1307 14.1074C13.1336 14.8482 13.5045 15.2157 14.2496 15.2212C15.4264 15.23 16.6033 15.2182 17.7802 15.2191C19.3454 15.2204 20.4218 16.2259 20.4489 17.7843C20.4819 19.6768 20.4817 21.5706 20.4547 23.4632C20.4349 24.8468 19.2799 25.9422 17.828 25.9768C16.5764 26.0066 15.3232 26.0065 14.0714 25.9832C12.8757 25.9608 11.9413 25.1704 11.5977 23.9219Z"
              fill="#164E63"
            />
          </svg>
        )}
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <span
          className="text-xs leading-4"
          style={{
            fontFamily: "Inter, -apple-system, sans-serif",
            color: senderColor,
          }}
        >
          {sender}
        </span>
        <div
          className={`${bgColor} ${borderRadius}`}
          style={{
            paddingLeft: isAIAssistant ? "16px" : "12px",
            paddingRight: isAIAssistant ? "20px" : "20px",
            paddingTop: isAIAssistant ? "11.5px" : "20px",
            paddingBottom: isAIAssistant ? "11.5px" : "20px",
          }}
        >
          <div
            className="text-base leading-6"
            style={{
              fontFamily: "Inter, -apple-system, sans-serif",
              letterSpacing: "-0.312px",
              color: textColor,
            }}
          >
            <p className="mb-2">{text}</p>
            {linkText && linkUrl && (
              <Link
                to={linkUrl}
                className="inline-block mt-2 px-4 py-2 bg-[#164E63] text-white rounded-lg hover:bg-[#164E63]/90 transition-colors font-medium text-sm"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                }}
              >
                {linkText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function UserMessage({ text }: { text: string }) {
  // Determine message styling based on text length
  const isShort = text.length <= 10;
  const bgColor = isShort ? "#101828" : "#3E5E6A";
  const borderRadius = isShort
    ? "rounded-bl-[16px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[6px]"
    : "rounded-bl-[30px] rounded-br-[24px] rounded-tl-[30px] rounded-tr-[12px]";
  const paddingX = isShort ? "16px" : "12px";
  const paddingY = isShort ? "9.5px" : "20px";

  return (
    <div className="flex flex-col items-end gap-1">
      <span
        className="text-[#6A7282] text-xs leading-4"
        style={{
          fontFamily: "Inter, -apple-system, sans-serif",
        }}
      >
        You
      </span>
      <div
        className={`${borderRadius} min-h-[44px] flex items-center`}
        style={{
          backgroundColor: bgColor,
          paddingLeft: paddingX,
          paddingRight: paddingX,
          paddingTop: paddingY,
          paddingBottom: paddingY,
        }}
      >
        <p
          className="text-white text-base leading-6"
          style={{
            fontFamily: "Inter, -apple-system, sans-serif",
            letterSpacing: "-0.312px",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
