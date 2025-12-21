import { useEffect } from "react";
import { ArrowLeft, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES, FONTS } from "@/constants";

export default function SummaryConsultation() {
  const navigate = useNavigate();

  // Auto-transition to consultation page after a brief moment
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(ROUTES.CONSULTATION);
    }, 1500); // 1.5 second delay

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#FCFAF8] flex flex-col">
      {/* Header */}
      <div className="bg-[#FCFAF8] border-b border-[#D6D3D1] px-6 py-4">
        <div className="max-w-[1464px] mx-auto flex items-center justify-between relative">
          {/* Left Side - Back Button & Title */}
          <div className="flex items-center gap-3">
            <Link
              to={ROUTES.MEDICAL_PROFILE}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-[#D6D3D1] bg-[#FCFAF8] shadow-sm opacity-90 hover:opacity-100 transition-opacity"
            >
              <ArrowLeft className="w-6 h-6 text-[#1C1917]" />
            </Link>
            <div className="flex flex-col">
              <span
                className="text-[#4B5563] text-sm"
                style={{ fontFamily: FONTS.inter }}
              >
                Step 3 of 4
              </span>
              <span
                className="text-[#111827] text-base font-medium"
                style={{ fontFamily: FONTS.inter }}
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
                    fontFamily: FONTS.interDisplay,
                  }}
                >
                  Sniffles
                </span>
                <span
                  className="text-[#1F2937] font-medium text-base leading-tight"
                  style={{
                    fontFamily: FONTS.interDisplay,
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

      {/* Main Content - Loading/Transition State */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0891B2] mx-auto mb-4"></div>
          <p
            className="text-[#4B5563] text-base"
            style={{ fontFamily: FONTS.inter }}
          >
            Preparing your summary...
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#FCFAF8] border-t border-[#D6D3D1] px-6 py-4">
        <div className="max-w-[1464px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="px-3 py-2 text-[#78716C] font-semibold text-base hover:text-[#1C1917] transition-colors"
              style={{ fontFamily: FONTS.inter }}
            >
              About Us
            </button>
            <button
              className="px-3 py-2 text-[#78716C] font-semibold text-base hover:text-[#1C1917] transition-colors"
              style={{ fontFamily: FONTS.inter }}
            >
              Privacy Policy
            </button>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 border border-[#78716C] rounded-full">
            <Lock className="w-6 h-6 text-[#78716C]" />
            <span
              className="text-[#78716C] font-semibold text-base"
              style={{ fontFamily: FONTS.inter }}
            >
              HIPAA Compliant
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

