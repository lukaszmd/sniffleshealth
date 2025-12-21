import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES, FONTS } from "@/constants";
import { PageHeader, AppFooter } from "@/components/layout";

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
      <PageHeader
        backTo={ROUTES.MEDICAL_PROFILE}
        step="Step 3 of 4"
        title="Building your medical profile"
      />

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

      <AppFooter />
    </div>
  );
}
