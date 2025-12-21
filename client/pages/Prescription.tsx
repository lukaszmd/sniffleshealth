import { Printer, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES, FONTS } from "@/constants";
import { PageHeader, AppFooter, Logo } from "@/components/layout";

export default function Prescription() {
  const symptoms = ["Fever", "Persistent Cough", "Headache", "Fatigue"];
  const prescriptionId = "#34FDMDF";
  const doctorName = "Dr. Sarah Johnson";

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col">
      <PageHeader showLogo={true} />

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-[#F3F4F6]">
        <div className="max-w-[1464px] mx-auto p-6">
          <div className="flex items-center justify-center min-h-[750px]">
            {/* Prescription Card */}
            <div
              className="border border-[#D6D3D1] rounded-[24px] w-[1110px] h-[750px] flex flex-col p-6"
              style={{
                background:
                  "linear-gradient(180.401deg, rgb(249, 245, 242) 0.51257%, rgb(255, 255, 255) 102.65%)",
              }}
            >
              {/* Header with Back Button */}
              <div className="flex items-center mb-6">
                <div className="flex items-center gap-3">
                  <Link
                    to={ROUTES.DOCTOR_CHAT}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-[#D6D3D1] bg-[#FCFAF8] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.03)] opacity-90 hover:opacity-100 transition-opacity"
                  >
                    <ArrowLeft className="w-6 h-6 text-[#1C1917]" />
                  </Link>
                  <div className="flex flex-col">
                    <span
                      className="text-[#4B5563] text-sm leading-5"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                      }}
                    >
                      {prescriptionId}
                    </span>
                    <span
                      className="text-[#111827] text-base font-medium leading-6"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                      }}
                    >
                      Your Prescription from {doctorName.split(" ")[1]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Prescription Content */}
              <div className="flex-1 flex flex-col items-center justify-center gap-6 p-6">
                {/* Prescription Card */}
                <div className="bg-white border border-[#D1D5DB] rounded-xl shadow-[0px_8px_12px_0px_rgba(0,0,0,0.12)] w-[642px] h-[487px] p-10 relative">
                  {/* Print Button */}
                  <button className="absolute right-[31px] top-[31px] flex items-center justify-center w-10 h-10 rounded-full border border-[#D6D3D1] bg-[#FCFAF8] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.03)] opacity-90 hover:opacity-100 transition-opacity">
                    <Printer className="w-6 h-6 text-[#1C1917]" />
                  </button>

                  {/* My Diagnosis */}
                  <div className="flex flex-col gap-3 mb-6">
                    <p
                      className="text-[#364153] text-sm font-medium leading-5"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                        letterSpacing: "-0.1504px",
                      }}
                    >
                      My Diagnosis
                    </p>
                    <p
                      className="text-[#364153] text-xl font-normal leading-5"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                      }}
                    >
                      Acute Sinusitis
                    </p>
                  </div>

                  {/* Symptoms */}
                  <div className="flex flex-col gap-3 mb-6">
                    <p
                      className="text-[#364153] text-sm font-medium leading-5"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                        letterSpacing: "-0.1504px",
                      }}
                    >
                      Symptoms
                    </p>
                    <div className="flex flex-wrap gap-3">
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

                  {/* My Prescription */}
                  <div className="flex flex-col gap-3 mb-6 flex-1">
                    <p
                      className="text-[#364153] text-sm font-medium leading-5"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                        letterSpacing: "-0.1504px",
                      }}
                    >
                      My Prescription
                    </p>
                    <div
                      className="text-[#364153] text-sm font-normal leading-5"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                        letterSpacing: "-0.1504px",
                      }}
                    >
                      <p className="mb-0">
                        <span className="font-bold">1. Amoxicillin 500mg</span>
                        <span>
                          {" "}
                          - Take one capsule three times daily for 7 days
                        </span>
                      </p>
                      <p className="mb-0">
                        <span className="font-bold">2. Ibuprofen 400mg -</span>
                        <span>
                          {" "}
                          Take as needed for pain, up to 3 times daily
                        </span>
                      </p>
                      <p className="mb-0">3. Rest and increase fluid intake</p>
                      <p className="mb-0 text-sm">&nbsp;</p>
                      <p className="mb-0">
                        Follow-up: Schedule a follow-up if symptoms persist
                        after 7 days.
                      </p>
                    </div>
                  </div>

                  {/* My Doctor */}
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex flex-col gap-3 flex-1">
                      <p
                        className="text-[#364153] text-sm font-medium leading-5"
                        style={{
                          fontFamily: "Inter, -apple-system, sans-serif",
                          letterSpacing: "-0.1504px",
                        }}
                      >
                        My Doctor
                      </p>
                      <p
                        className="text-[#364153] text-xl font-normal leading-5"
                        style={{
                          fontFamily: "Inter, -apple-system, sans-serif",
                        }}
                      >
                        {doctorName}:
                      </p>
                    </div>
                    <Logo size="md" />
                  </div>
                </div>

                {/* Action Section */}
                <div className="flex items-center justify-between w-[642px] px-3">
                  <div className="flex flex-col flex-1 max-w-[344px]">
                    <p
                      className="text-[#292524] text-sm font-semibold leading-5"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                      }}
                    >
                      Schedule reminder for a follow up in 5 days for recurring
                      consultation
                    </p>
                  </div>
                  <button className="bg-[#0E3240] h-[57px] px-6 py-2.5 rounded-[18px] hover:bg-[#0E3240]/90 transition-colors flex-shrink-0">
                    <span
                      className="text-white text-base font-semibold leading-6"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                      }}
                    >
                      Select Pharmacy for pickup
                    </span>
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
