import { Lock, Check, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES, FONTS } from "@/constants";

export default function PaymentConfirmation() {
  const navigate = useNavigate();

  // Sample invoice data - in a real app, this would come from state/API
  const invoiceId = "JSDKM483";
  const paymentDate = "25th March 2024, 12:34 PM";
  const amount = "$25";

  const handleDownloadInvoice = () => {
    // Handle invoice download
    console.log("Downloading invoice:", invoiceId);
    // In a real app, this would trigger a download
  };

  const handleContinue = () => {
    // Navigate to HIPAA compliance page
    navigate(ROUTES.HIPAA_COMPLIANCE);
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col">
      {/* Header */}
      <div className="bg-[#FCFAF8] border-b border-[#D6D3D1] px-6 py-4">
        <div className="max-w-[1464px] mx-auto flex items-center justify-center relative">
          {/* Center - Logo */}
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
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-[#F3F4F6] flex items-center justify-center">
        <div className="max-w-[1464px] mx-auto p-6 w-full flex items-center justify-center">
          <div
            className="w-[482px] border border-[#D6D3D1] rounded-[24px] overflow-hidden relative min-h-[745px] flex flex-col"
            style={{
              backgroundImage:
                "linear-gradient(179.869deg, rgb(217, 242, 247) 0%, rgb(255, 255, 255) 23.573%)",
            }}
          >
            {/* Content */}
            <div className="flex flex-col items-center justify-center h-full p-6 pt-10 pb-0">
              <div className="flex flex-col gap-6 items-center w-full max-w-[400px]">
                {/* Success Icon */}
                <div className="bg-[#C9E7EC] flex items-center justify-center p-1 rounded-[2222px]">
                  <Check className="w-6 h-6 text-[#0891B2]" />
                </div>

                {/* Success Heading */}
                <h1
                  className="text-[44px] font-medium leading-[44px] tracking-[-2.2px] text-center text-[#1F2937]"
                  style={{
                    fontFamily: "Inter Display, -apple-system, sans-serif",
                  }}
                >
                  Payment Successful
                </h1>

                {/* Success Message */}
                <p
                  className="text-[#4B5563] text-base leading-6 text-center w-full"
                  style={{
                    fontFamily: "Inter, -apple-system, sans-serif",
                  }}
                >
                  Your payment of USD 25 is complete. You can download the
                  invoice for the payment below
                </p>

                {/* Invoice Card */}
                <div className="w-[302px] bg-white border border-[#D1D5DB] rounded-[18px] p-5 flex flex-col gap-2">
                  {/* Invoice Details */}
                  <div className="flex flex-col gap-2 items-start w-full">
                    <p
                      className="text-[#4B5563] text-base font-medium leading-6"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                      }}
                    >
                      Invoice ID #{invoiceId}
                    </p>
                    <p
                      className="text-[#4B5563] text-base font-medium leading-6"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                      }}
                    >
                      {paymentDate}
                    </p>
                  </div>

                  {/* Amount and Download */}
                  <div className="flex items-center justify-between w-full">
                    <p
                      className="text-[32px] font-medium leading-[32px] tracking-[-1.6px] text-[#1F2937]"
                      style={{
                        fontFamily: "Inter Display, -apple-system, sans-serif",
                      }}
                    >
                      {amount}
                    </p>
                    <button
                      onClick={handleDownloadInvoice}
                      className="bg-[#F3F4F6] flex items-center justify-center p-1 rounded-[2222px] hover:bg-[#E5E7EB] transition-colors"
                    >
                      <Download className="w-6 h-6 text-[#6B7280]" />
                    </button>
                  </div>
                </div>

                {/* Continue Button */}
                <button
                  onClick={handleContinue}
                  className="bg-[#0E3240] text-white px-6 py-3 rounded-[18px] font-semibold text-base hover:bg-[#0E3240]/90 transition-colors h-[57px] flex items-center justify-center w-full"
                  style={{
                    fontFamily: "Inter, -apple-system, sans-serif",
                    lineHeight: "24px",
                  }}
                >
                  Continue with consultation
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
