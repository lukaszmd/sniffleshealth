import { useState } from "react";
import { Smile, Car, FileText, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES, FONTS } from "@/constants";
import { useUserStore } from "@/stores";
import { PageHeader, AppFooter } from "@/components/layout";

export default function KYC() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<"license" | "other">(
    "license",
  );

  const handleContinue = () => {
    // Navigate to address details page after KYC
    // In a real app, this would handle file upload first, then redirect to third-party KYC
    // After third-party KYC completion, user would be redirected back to address details
    navigate(ROUTES.ADDRESS_DETAILS);
  };

  return (
    <div className="min-h-screen bg-neutral-light-gray flex flex-col">
      <PageHeader showLogo={true} />

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-neutral-light-gray flex items-center justify-center">
        <div className="max-w-[1464px] mx-auto p-6 w-full flex items-center justify-center">
          <div className="w-[966px] border border-neutral-gray rounded-3xl overflow-hidden relative min-h-[745px] flex flex-col bg-gradient-to-b from-warm-50 to-white">
            {/* Content */}
            <div className="flex flex-col gap-6 items-center h-full p-6 pt-10 pb-6">
              <div className="flex flex-col gap-6 items-center justify-center w-full max-w-[651px] flex-1">
                {/* Smile Icon */}
                <div className="bg-warm-300 flex items-center justify-center p-1 rounded-full">
                  <Smile className="w-6 h-6 text-neutral-dark-gray" />
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl font-inter-display font-medium leading-44 tracking-tight text-center text-neutral-charcoal">
                  Complete KYC
                </h1>

                {/* KYC Info Section */}
                <div className="flex flex-col gap-5 items-center w-full">
                  {/* Description Text */}
                  <p className="text-text-secondary text-base font-inter font-normal leading-6 text-center w-[348px]">
                    Legally we are required KYC before a consultation for proper
                    prescription
                  </p>

                  {/* Upload Options */}
                  <div className="flex flex-col gap-3 items-center w-full">
                    {/* Driver's License Option */}
                    <button
                      onClick={() => setSelectedOption("license")}
                      className={`w-[337px] bg-white border rounded-2xl p-5 flex items-center justify-between transition-all ${
                        selectedOption === "license"
                          ? "border-2 border-brand-cyan"
                          : "border border-border-medium"
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div
                          className={`flex items-center justify-center p-1 rounded-full ${
                            selectedOption === "license"
                              ? "bg-brand-cyan-pale"
                              : "bg-neutral-light-gray"
                          }`}
                        >
                          <Car
                            className={`w-6 h-6 ${
                              selectedOption === "license"
                                ? "text-brand-cyan"
                                : "text-text-light"
                            }`}
                          />
                        </div>
                        <p
                          className={`text-base font-inter leading-6 w-[194px] ${
                            selectedOption === "license"
                              ? "font-semibold text-text-primary tracking-body-tight"
                              : "font-medium text-text-secondary"
                          }`}
                        >
                          Upload driver's license
                        </p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-text-light" />
                    </button>

                    {/* Other Documents Option */}
                    <button
                      onClick={() => setSelectedOption("other")}
                      className={`w-[337px] bg-white border rounded-2xl p-5 flex items-center justify-between transition-all ${
                        selectedOption === "other"
                          ? "border-2 border-brand-cyan"
                          : "border border-border-medium"
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div
                          className={`flex items-center justify-center p-1 rounded-full ${
                            selectedOption === "other"
                              ? "bg-brand-cyan-pale"
                              : "bg-neutral-light-gray"
                          }`}
                        >
                          <FileText
                            className={`w-6 h-6 ${
                              selectedOption === "other"
                                ? "text-brand-cyan"
                                : "text-text-light"
                            }`}
                          />
                        </div>
                        <p
                          className={`text-base font-inter leading-6 w-[194px] ${
                            selectedOption === "other"
                              ? "font-semibold text-text-primary tracking-body-tight"
                              : "font-medium text-text-secondary"
                          }`}
                        >
                          Upload Other Documents
                        </p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-text-light" />
                    </button>
                  </div>

                  {/* Continue Button */}
                  <button
                    onClick={handleContinue}
                    className="bg-brand-cyan-dark text-white font-inter px-6 py-3 rounded-2xl font-semibold text-base leading-6 hover:bg-brand-cyan-dark/90 transition-colors h-[57px] flex items-center justify-center w-full"
                  >
                    Continue
                  </button>
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
