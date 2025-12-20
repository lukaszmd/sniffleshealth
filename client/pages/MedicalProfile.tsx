import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Lock, Mic, ArrowUp, Plus, X, Info } from "lucide-react";
import { Link } from "react-router-dom";

interface Message {
  type: 'ai' | 'user';
  text: string;
  timestamp: Date;
}

interface MedicalData {
  age: string;
  sex: string;
  weight: string;
  height: string;
  allergies: string[];
  chronicConditions: string[];
  surgicalHistory: string[];
  socialHistory: { type: string; level: string }[];
  familyHistory: string[];
}

export default function MedicalProfile() {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'ai',
      text: "Hello! I'm your AI assistant. To get started, I need to gather some basic medical information. All your data is kept private and secure. First, what is your age and sex assigned at birth?",
      timestamp: new Date()
    },
    {
      type: 'user',
      text: '23 years old',
      timestamp: new Date()
    },
    {
      type: 'ai',
      text: 'Thank you. What is your approximate height and weight?',
      timestamp: new Date()
    },
    {
      type: 'user',
      text: "180, 6'3",
      timestamp: new Date()
    },
    {
      type: 'ai',
      text: 'Do you have any known allergies to medications?',
      timestamp: new Date()
    },
    {
      type: 'user',
      text: 'Not that I am aware of',
      timestamp: new Date()
    }
  ]);

  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, {
        type: 'user',
        text: inputValue,
        timestamp: new Date()
      }]);
      setInputValue('');
    }
  };

  const medicalData: MedicalData = {
    age: '23',
    sex: 'M',
    weight: '190 lbs',
    height: '6\'1"',
    allergies: ['None'],
    chronicConditions: ['Type II Diabetes, 4 Years', 'Blood Pressure'],
    surgicalHistory: ['Type II Diabetes, 4 Years', 'Blood Pressure'],
    socialHistory: [
      { type: 'Smoking', level: 'Mild Use' },
      { type: 'Alcohol', level: 'Heavy Use' }
    ],
    familyHistory: ['Heart Disease']
  };

  return (
    <div className="min-h-screen bg-[#FCFAF8] flex flex-col">
      {/* Header */}
      <div className="bg-[#FCFAF8] border-b border-[#D6D3D1] px-6 py-4">
        <div className="max-w-[1464px] mx-auto flex items-center justify-between">
          {/* Left Side - Back Button & Title */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center justify-center w-10 h-10 rounded-full border border-[#D6D3D1] bg-[#FCFAF8] shadow-sm opacity-90 hover:opacity-100 transition-opacity">
              <ArrowLeft className="w-6 h-6 text-[#1C1917]" />
            </Link>
            <div className="flex flex-col">
              <span className="text-[#4B5563] text-sm" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
                Step 3 of 4
              </span>
              <span className="text-[#111827] text-base font-medium" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
                Building your medical profile
              </span>
            </div>
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-[5px]">
              <svg width="40" height="52" viewBox="0 0 56 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M55.5 36.5C55.5 16.3416 43.1584 0 27.5 0C11.8416 0 0 16.3416 0 36.5V36.5484C0 56.7068 12.3416 73.0484 28 73.0484H28.5C44.1584 73.0484 55.5 56.7068 55.5 36.5484V36.5Z" fill="#0891B2"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-[#0891B2] font-semibold text-xl leading-tight" style={{ fontFamily: 'Inter Display, -apple-system, sans-serif' }}>Sniffles</span>
                <span className="text-[#1F2937] font-medium text-base leading-tight" style={{ fontFamily: 'Inter Display, -apple-system, sans-serif' }}>health</span>
              </div>
            </div>
          </div>

          {/* Right Side - Back Button (for symmetry) */}
          <button className="flex items-center justify-center w-10 h-10 rounded-full border border-[#D1D5DB] shadow-sm opacity-0 pointer-events-none">
            <ArrowLeft className="w-6 h-6 text-[#4B5563]" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 max-w-[1464px] mx-auto w-full flex gap-3 p-6">
          {/* Chat Section */}
          <div className="flex-1 bg-white rounded-xl border border-[#D6D3D1] flex flex-col overflow-hidden">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-10">
              <div className="flex flex-col gap-6 max-w-[672px]">
                {messages.map((message, index) => (
                  <div key={index}>
                    {message.type === 'ai' ? (
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
                <div className="flex items-center gap-3 bg-white border border-[#D1D5DB] rounded-[18px] px-5 py-3">
                  <Plus className="w-5 h-5 text-[#4B5563] opacity-75" />
                  <input
                    type="text"
                    placeholder="Enter your message here"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    className="flex-1 bg-transparent border-none outline-none text-[#374151] text-sm"
                    style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}
                  />
                  <button className="p-2">
                    <Mic className="w-5 h-5 text-[#164E63]" />
                  </button>
                  <button
                    onClick={handleSend}
                    className="w-10 h-10 bg-[#164E63] rounded-xl flex items-center justify-center hover:bg-[#164E63]/90 transition-colors"
                  >
                    <ArrowUp className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Medical Profile Summary */}
          <div className="w-[342px] bg-white rounded-xl border border-[#D6D3D1] p-5 flex flex-col gap-6 overflow-y-auto">
            {/* User Info */}
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d70e756501509614b665deb946de13d9f2aab9da"
                alt="User avatar"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-[#6A7282] text-xs font-medium" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
                  Consultation For
                </span>
                <span className="text-[#101828] text-base font-medium" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
                  John Doe
                </span>
              </div>
            </div>

            {/* Info Block */}
            <div className="bg-[#ECF3F4] rounded-xl p-3 flex flex-col items-center gap-1 text-center">
              <Info className="w-6 h-6 text-[#4B5563]" />
              <h3 className="text-[#101828] text-base font-medium" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
                Building your medical profile
              </h3>
              <p className="text-[#1E2939] text-sm" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
                This information will be saved and reviewed by a healthcare professional during consultation
              </p>
            </div>

            {/* Personal Details */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[#101828] text-base font-medium" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
                Personal Details
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <DataField label="Age" value={medicalData.age} />
                <DataField label="Weight" value={medicalData.weight} />
                <DataField label="Sex" value={medicalData.sex} />
                <DataField label="Height" value={medicalData.height} />
              </div>
            </div>

            <div className="h-px bg-[#D1D5DB]" />

            {/* Allergies */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[#101828] text-base font-medium" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
                Allergies
              </h3>
              <p className="text-[#1E2939] text-sm" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
                None
              </p>
            </div>

            <div className="h-px bg-[#D1D5DB]" />

            {/* Chronic Conditions */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[#101828] text-base font-medium" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
                Chronic Conditions
              </h3>
              <div className="flex flex-col gap-2">
                {medicalData.chronicConditions.map((condition, idx) => (
                  <Tag key={idx} text={condition} />
                ))}
              </div>
            </div>

            <div className="h-px bg-[#D1D5DB]" />

            {/* Past Surgical History */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[#101828] text-base font-medium" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
                Past Surgical History
              </h3>
              <div className="flex flex-col gap-2">
                {medicalData.surgicalHistory.map((surgery, idx) => (
                  <Tag key={idx} text={surgery} />
                ))}
              </div>
            </div>

            <div className="h-px bg-[#D1D5DB]" />

            {/* Social History */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-[#101828] text-base font-medium" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
                  Social History
                </h3>
                <p className="text-[#78716C] text-sm" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
                  Including smoking, alcohol and illicit drug use (like cocaine, PCP, methamphetamine, marijuana)
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {medicalData.socialHistory.map((item, idx) => (
                  <DoubleTag key={idx} label={item.type} value={item.level} />
                ))}
              </div>
            </div>

            <div className="h-px bg-[#D1D5DB]" />

            {/* Family History */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-[#101828] text-base font-medium" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
                  Family History
                </h3>
                <p className="text-[#78716C] text-sm" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
                  Problems that run in a family like heart disease or other genetic issues
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {medicalData.familyHistory.map((item, idx) => (
                  <Tag key={idx} text={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#FCFAF8] border-t border-[#D6D3D1] px-6 py-4">
        <div className="max-w-[1464px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="px-3 py-2 text-[#78716C] font-semibold text-base hover:text-[#1C1917] transition-colors" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
              About Us
            </button>
            <button className="px-3 py-2 text-[#78716C] font-semibold text-base hover:text-[#1C1917] transition-colors" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
              Privacy Policy
            </button>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 border border-[#78716C] rounded-full">
            <Lock className="w-6 h-6 text-[#78716C]" />
            <span className="text-[#78716C] font-semibold text-base" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
              HIPAA Compliant
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIMessage({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-[#DCE9EB] flex items-center justify-center flex-shrink-0">
        <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5977 23.9219C11.5094 23.1193 11.5631 22.3528 11.5528 21.5873C11.5428 20.839 11.1955 20.4814 10.4482 20.467C9.71007 20.4528 8.97106 20.5217 8.23371 20.4224C6.98651 20.2546 6.03498 19.21 6.02244 17.9559C6.01012 16.724 6.06662 15.4895 6.00427 14.2606C5.93547 12.9046 6.53921 11.1118 8 11C8.43521 10.9667 6.56375 11.0055 7.00104 11C7.25404 10.9968 7.40309 11.1052 7.39706 11.375C7.39639 11.405 7.39938 11.4351 7.39931 11.4651C7.39612 12.7564 9.2619 13.9875 8.00104 14C7.8351 14.0016 8.16645 13.49 8.00104 13.5C7.45345 13.5332 7.61883 13.5343 7.60947 14.0837C7.58772 15.3602 7.5878 16.6376 7.61005 17.9141C7.62002 18.4858 8.02478 18.8442 8.61271 18.8558C9.23102 18.8681 9.85001 18.8449 10.4684 18.8552C12.0495 18.8815 13.1185 19.9654 13.1302 21.5443C13.1344 22.1152 13.1256 22.6863 13.1388 23.257C13.1559 23.9947 13.552 24.3988 14.2975 24.4074C15.444 24.4207 16.5909 24.4179 17.7374 24.402C18.4542 24.3921 18.8559 24.014 18.866 23.2683C18.8907 21.4507 18.8884 19.6324 18.868 17.8147C18.8605 17.1484 18.4686 16.8022 17.7942 16.7972C16.6023 16.7882 15.4103 16.7981 14.2184 16.795C12.6354 16.7909 11.5641 15.7443 11.5553 14.1733C11.5451 12.3404 11.55 10.5074 11.5557 8.67444C11.5601 7.2837 12.4824 6.17859 13.8671 6.07884C15.2637 5.97824 16.6759 5.9643 18.0715 6.09356C19.5555 6.23102 20.4381 7.28077 20.4585 8.77199C20.4657 9.29769 20.449 9.82368 20.4525 10.3495C20.4583 11.2155 20.7994 11.5528 21.6563 11.5505C22.1844 11.5491 22.7125 11.54 23.2405 11.5447C24.8428 11.5591 25.9792 12.6812 25.9925 14.2696C26.0024 15.4565 26.0031 16.6435 25.9977 17.8304C25.9915 19.1827 25.0567 20.2485 23.714 20.4354C23.2192 20.5043 23.485 21.1005 23.001 21C22.2603 20.8461 23.8358 19.8865 23.714 19.5C23.6215 19.2065 23.6982 18.4938 24.001 18.5C24.3479 18.5071 23.6543 19.0096 24.001 19C24.6551 18.982 24.3847 18.4682 24.3969 17.8174C24.4197 16.6008 24.4222 15.3832 24.3963 14.1668C24.3817 13.4849 23.9397 13.1026 23.2418 13.1215C22.5637 13.1399 21.8883 13.1905 21.2086 13.1188C19.9208 12.9831 18.9242 11.949 18.8826 10.6574C18.8638 10.072 18.8821 9.48558 18.8775 8.89966C18.8706 8.01886 18.4526 7.58808 17.5617 7.62665C16.4303 7.67564 15.2993 7.65443 14.1682 7.66926C13.4755 7.67834 13.139 8.00776 13.1353 8.69872C13.1256 10.5016 13.1237 12.3045 13.1307 14.1074C13.1336 14.8482 13.5045 15.2157 14.2496 15.2212C15.4264 15.23 16.6033 15.2182 17.7802 15.2191C19.3454 15.2204 20.4218 16.2259 20.4489 17.7843C20.4819 19.6768 20.4817 21.5706 20.4547 23.4632C20.4349 24.8468 19.2799 25.9422 17.828 25.9768C16.5764 26.0066 15.3232 26.0065 14.0714 25.9832C12.8757 25.9608 11.9413 25.1704 11.5977 23.9219Z" fill="#164E63"/>
        </svg>
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <span className="text-[#292524] text-xs" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
          Sniffles Health Assistant
        </span>
        <div className="bg-[#ECF3F4] rounded-xl rounded-tl-none px-3 py-4">
          <p className="text-[#1C1917] text-base" style={{ fontFamily: 'Inter, -apple-system, sans-serif', letterSpacing: '-0.312px' }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function UserMessage({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-end gap-1">
      <span className="text-[#292524] text-xs" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
        You
      </span>
      <div className="bg-[#3E5E6A] rounded-[30px] rounded-tr-xl px-3 py-2">
        <p className="text-white text-base" style={{ fontFamily: 'Inter, -apple-system, sans-serif', letterSpacing: '-0.312px' }}>
          {text}
        </p>
      </div>
    </div>
  );
}

function DataField({ label, value }: { label: string; value: string }) {
  return (
    <div className="col-span-1">
      <span className="text-[#4A5565] text-sm block mb-1" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
        {label}
      </span>
      <div className="bg-[#FAFAF9] rounded-lg px-2 py-1">
        <span className="text-[#101828] text-base" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
          {value}
        </span>
      </div>
    </div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-between gap-1 bg-[#F3F4F6] rounded-lg px-3 py-1">
      <span className="text-[#1E2939] text-sm" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
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
        <span className="text-[#1E2939] text-sm font-medium" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
          {label}
        </span>
        <span className="text-[#1E2939] text-sm" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
          {value}
        </span>
      </div>
      <X className="w-4 h-4 text-[#4B5563] cursor-pointer hover:text-[#1C1917]" />
    </div>
  );
}
