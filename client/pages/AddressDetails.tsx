import { useState } from "react";
import { Lock, MapPin, Mail, Phone, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AddressDetails() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "johndoe@gmail.com",
    phone: "+021 7348-2839",
    addressLine1: "",
    addressLine2: "",
    pincode: "",
    city: "New York",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    // Navigate to next step after address details
    // In a real app, this would validate and save the data
    console.log("Form data:", formData);
    navigate("/consultation");
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
            className="w-[966px] border border-[#D6D3D1] rounded-[24px] overflow-hidden relative min-h-[745px] flex flex-col"
            style={{
              backgroundImage:
                "linear-gradient(179.934deg, rgb(249, 245, 242) 0%, rgb(255, 255, 255) 23.573%)",
            }}
          >
            {/* Content */}
            <div className="flex flex-col gap-6 items-center h-full p-6 pt-10 pb-6">
              <div className="flex flex-col gap-6 items-center justify-center w-full max-w-[651px] flex-1">
                {/* Location Pin Icon */}
                <div className="bg-[#ECE8E4] flex items-center justify-center p-1 rounded-[2222px]">
                  <MapPin className="w-6 h-6 text-[#78716C]" />
                </div>

                {/* Main Heading */}
                <h1
                  className="text-[44px] font-medium leading-[44px] tracking-[-2.2px] text-center text-[#1F2937]"
                  style={{
                    fontFamily: "Inter Display, -apple-system, sans-serif",
                  }}
                >
                  Address and Details
                </h1>

                {/* Form Section */}
                <div className="flex flex-col gap-5 items-center w-full">
                  {/* Description Text */}
                  <p
                    className="text-[#4B5563] text-base font-normal leading-6 text-center w-[348px]"
                    style={{
                      fontFamily: "Inter, -apple-system, sans-serif",
                    }}
                  >
                    Legally we are required KYC before a consultation for proper
                    prescription
                  </p>

                  {/* Form Fields */}
                  <div className="flex flex-col gap-3 items-start w-full">
                    {/* Row 1: Email and Phone */}
                    <div className="flex gap-3 justify-center items-start w-full">
                      {/* Email Field */}
                      <div className="bg-white border border-[#D1D5DB] rounded-[18px] p-3 flex items-center gap-2 w-[268px]">
                        <div className="flex items-center justify-center p-1 rounded-lg opacity-75 flex-shrink-0">
                          <Mail className="w-5 h-5 text-[#4B5563]" />
                        </div>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className="flex-1 bg-transparent border-none outline-none text-[#374151] text-sm whitespace-nowrap"
                          style={{
                            fontFamily: "Inter, -apple-system, sans-serif",
                          }}
                        />
                      </div>

                      {/* Phone Field */}
                      <div className="bg-white border border-[#D1D5DB] rounded-[18px] p-3 flex items-center gap-2 w-[268px]">
                        <div className="flex items-center justify-center p-1 rounded-lg opacity-75 flex-shrink-0">
                          <Phone className="w-5 h-5 text-[#4B5563]" />
                        </div>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          className="flex-1 bg-transparent border-none outline-none text-[#374151] text-sm whitespace-nowrap"
                          style={{
                            fontFamily: "Inter, -apple-system, sans-serif",
                          }}
                        />
                      </div>
                    </div>

                    {/* Row 2: Address Line 1 and 2 */}
                    <div className="flex gap-3 justify-center items-start w-full">
                      {/* Address Line 1 */}
                      <input
                        type="text"
                        placeholder="Address line 1"
                        value={formData.addressLine1}
                        onChange={(e) =>
                          handleInputChange("addressLine1", e.target.value)
                        }
                        className="bg-white border border-[#D1D5DB] rounded-[18px] p-3 w-[268px] text-[#374151] text-sm placeholder:text-[#374151] outline-none"
                        style={{
                          fontFamily: "Inter, -apple-system, sans-serif",
                        }}
                      />

                      {/* Address Line 2 */}
                      <input
                        type="text"
                        placeholder="Address line 2"
                        value={formData.addressLine2}
                        onChange={(e) =>
                          handleInputChange("addressLine2", e.target.value)
                        }
                        className="bg-white border border-[#D1D5DB] rounded-[18px] p-3 w-[268px] text-[#374151] text-sm placeholder:text-[#374151] outline-none"
                        style={{
                          fontFamily: "Inter, -apple-system, sans-serif",
                        }}
                      />
                    </div>

                    {/* Row 3: Pincode and City */}
                    <div className="flex gap-3 justify-center items-start w-full">
                      {/* Pincode */}
                      <input
                        type="text"
                        placeholder="Pincode"
                        value={formData.pincode}
                        onChange={(e) =>
                          handleInputChange("pincode", e.target.value)
                        }
                        className="bg-white border border-[#D1D5DB] rounded-[18px] p-3 w-[268px] text-[#374151] text-sm placeholder:text-[#374151] outline-none"
                        style={{
                          fontFamily: "Inter, -apple-system, sans-serif",
                        }}
                      />

                      {/* City Dropdown */}
                      <div className="bg-white border border-[#D1D5DB] rounded-[18px] p-3 flex items-center justify-between w-[268px]">
                        <input
                          type="text"
                          value={formData.city}
                          readOnly
                          className="flex-1 bg-transparent border-none outline-none text-[#374151] text-sm"
                          style={{
                            fontFamily: "Inter, -apple-system, sans-serif",
                          }}
                        />
                        <button className="flex items-center justify-center p-2 rounded-xl">
                          <ChevronDown className="w-6 h-6 text-[#164E63]" />
                        </button>
                      </div>
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
                    Continue
                  </button>
                </div>
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
