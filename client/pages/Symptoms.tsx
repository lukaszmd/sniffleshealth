import { useState } from "react";
import { ArrowLeft, Lock, Mic, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface Symptom {
  id: string;
  name: string;
  category: string;
}

const commonSymptoms: Symptom[] = [
  { id: '1', name: 'Sweatness', category: 'common' },
  { id: '2', name: 'Sore Throat', category: 'common' },
  { id: '3', name: 'Body Ache', category: 'common' },
  { id: '4', name: 'Headache', category: 'common' },
  { id: '5', name: 'Fatigue', category: 'common' },
];

const stomachSymptoms: Symptom[] = [
  { id: '6', name: 'Nausea', category: 'stomach' },
  { id: '7', name: 'Diarrhoea', category: 'stomach' },
  { id: '8', name: 'Ache', category: 'stomach' },
  { id: '9', name: 'Heartburn', category: 'stomach' },
  { id: '10', name: 'Fatigue', category: 'stomach' },
];

export default function Symptoms() {
  const navigate = useNavigate();
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(['4', '5', '9', '10']);
  const [customSymptom, setCustomSymptom] = useState('');

  const toggleSymptom = (symptomId: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptomId)
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const handleContinue = () => {
    navigate('/medical-profile');
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
                Step 2 of 4
              </span>
              <span className="text-[#111827] text-base font-medium" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
                Select symptoms
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
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 max-w-[1464px] mx-auto w-full p-6">
          <div className="bg-white rounded-xl border border-[#D6D3D1] h-full flex flex-col">
            {/* Content Area */}
            <div className="flex-1 overflow-y-auto pt-10 px-6 md:px-12">
              <div className="max-w-[963px] mx-auto flex flex-col gap-[60px]">
                {/* Header */}
                <div className="flex flex-col items-center gap-2 pt-5">
                  <h1 className="text-[#1F2937] text-3xl md:text-[32px] font-semibold text-center" style={{ fontFamily: 'SF Pro, -apple-system, sans-serif', lineHeight: '36px' }}>
                    What are your symptoms
                  </h1>
                  <p className="text-[#4B5563] text-base" style={{ fontFamily: 'SF Pro, -apple-system, sans-serif' }}>
                    Select from the list below or type your own
                  </p>
                </div>

                {/* Symptoms Sections */}
                <div className="flex flex-col gap-[19px]">
                  {/* Common Symptoms */}
                  <div className="flex flex-col gap-[19px]">
                    <h2 className="text-[#111827] text-xl font-semibold" style={{ fontFamily: 'Inter, -apple-system, sans-serif', lineHeight: '28px' }}>
                      Common symptoms
                    </h2>
                    <div className="flex flex-wrap items-center gap-6">
                      {commonSymptoms.map((symptom) => (
                        <SymptomPill
                          key={symptom.id}
                          name={symptom.name}
                          selected={selectedSymptoms.includes(symptom.id)}
                          onClick={() => toggleSymptom(symptom.id)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Stomach & Digestion */}
                  <div className="flex flex-col gap-[19px] mt-8">
                    <h2 className="text-[#111827] text-xl font-semibold" style={{ fontFamily: 'Inter, -apple-system, sans-serif', lineHeight: '28px' }}>
                      Stomach & Digestion
                    </h2>
                    <div className="flex flex-wrap items-center gap-6">
                      {stomachSymptoms.map((symptom) => (
                        <SymptomPill
                          key={symptom.id}
                          name={symptom.name}
                          selected={selectedSymptoms.includes(symptom.id)}
                          onClick={() => toggleSymptom(symptom.id)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Input Section */}
            <div className="border-t border-[#E5E7EB] p-6">
              <div className="max-w-[963px] mx-auto flex flex-col md:flex-row items-stretch gap-3">
                <div className="flex-1 flex items-center gap-2 bg-white border border-[#D1D5DB] rounded-[18px] px-5 py-4">
                  <input
                    type="text"
                    placeholder="You can also add any other symptoms directly here"
                    value={customSymptom}
                    onChange={(e) => setCustomSymptom(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-[#374151] text-sm"
                    style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}
                  />
                  <button className="p-2 bg-[#F5F5F4] rounded-xl">
                    <Mic className="w-4 h-4 text-[#164E63]" />
                  </button>
                </div>
                <button
                  onClick={handleContinue}
                  className="w-full md:w-auto px-12 py-4 bg-[#164E63] text-white font-semibold text-base rounded-[18px] hover:bg-[#164E63]/90 transition-colors"
                  style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}
                >
                  Continue
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

function SymptomPill({ name, selected, onClick }: { name: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-5 py-5 rounded-[18px] border-2 transition-all ${
        selected
          ? 'border-[#0891B2] bg-white'
          : 'border-[#D1D5DB] bg-white hover:border-[#0891B2]/50'
      }`}
    >
      {selected && <Check className="w-6 h-6 text-[#155E75]" />}
      <span
        className={`text-base font-${selected ? '600' : '500'} ${
          selected ? 'text-[#164E63]' : 'text-[#4B5563]'
        }`}
        style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}
      >
        {name}
      </span>
    </button>
  );
}
