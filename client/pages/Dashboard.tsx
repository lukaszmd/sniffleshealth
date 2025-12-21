import { Link } from "react-router-dom";
import { ROUTES, FONTS } from "@/constants";
import {
  Home,
  MessageSquare,
  ShoppingBag,
  Stethoscope,
  User,
  CreditCard,
  ChevronRight,
  RefreshCw,
  Calendar,
  Printer,
  Share2,
  Lock,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] flex">
      {/* Left Sidebar */}
      <div className="bg-white border-r border-[#D6D3D1] w-[252px] flex flex-col">
        <div className="p-[13px] flex flex-col gap-11">
          {/* Logo */}
          <div className="h-[47px] flex items-center p-3">
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

          {/* Navigation */}
          <div className="flex flex-col gap-2">
            <Link
              to={ROUTES.DASHBOARD}
              className="bg-[#F5F5F4] flex gap-[7px] items-center p-2 rounded-[12px] text-[#1C1917]"
            >
              <Home className="w-6 h-6" />
              <span
                className="font-medium text-sm leading-5"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                }}
              >
                My Dashboard
              </span>
            </Link>
            <Link
              to={ROUTES.DOCTOR_CHAT}
              className="flex gap-[7px] items-center p-2 rounded-[12px] text-[#57534E] hover:bg-[#F5F5F4] transition-colors"
            >
              <MessageSquare className="w-6 h-6" />
              <span
                className="font-medium text-sm leading-5"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                }}
              >
                My Consultations
              </span>
            </Link>
            <Link
              to={ROUTES.PRESCRIPTION}
              className="flex gap-[7px] items-center p-2 rounded-[12px] text-[#57534E] hover:bg-[#F5F5F4] transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              <span
                className="font-medium text-sm leading-5"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                }}
              >
                My Prescriptions
              </span>
            </Link>
            <Link
              to={ROUTES.MEDICAL_PROFILE}
              className="flex gap-[7px] items-center p-2 rounded-[12px] text-[#57534E] hover:bg-[#F5F5F4] transition-colors"
            >
              <Stethoscope className="w-6 h-6" />
              <span
                className="font-medium text-sm leading-5"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                }}
              >
                My Medical Profile
              </span>
            </Link>
            <button className="flex gap-[7px] items-center p-2 rounded-[12px] text-[#57534E] hover:bg-[#F5F5F4] transition-colors text-left">
              <User className="w-6 h-6" />
              <span
                className="font-medium text-sm leading-5"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                }}
              >
                My Profile
              </span>
            </button>
            <button className="flex gap-[7px] items-center p-2 rounded-[12px] text-[#57534E] hover:bg-[#F5F5F4] transition-colors text-left">
              <CreditCard className="w-6 h-6" />
              <span
                className="font-medium text-sm leading-5"
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                }}
              >
                Subscriptions
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div
          className="flex-1 p-6"
          style={{
            background:
              "linear-gradient(180.408deg, rgb(255, 255, 255) 54.885%, rgb(249, 245, 242) 102.87%)",
          }}
        >
          <div className="max-w-full flex flex-col gap-6">
            {/* Welcome Section */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h1
                  className="text-[#1F2937] text-[34px] font-medium leading-normal tracking-[-1.7px]"
                  style={{
                    fontFamily: "Inter Display, -apple-system, sans-serif",
                  }}
                >
                  My Dashboard
                </h1>
                <p
                  className="text-[#4B5563] text-base font-normal leading-5"
                  style={{
                    fontFamily: "SF Pro, -apple-system, sans-serif",
                  }}
                >
                  Welcome to supercharge your health, John
                </p>
              </div>

              {/* Feature Cards */}
              <div className="flex gap-5 flex-wrap">
                <FeatureCard
                  image="http://localhost:3845/assets/f6bb992770e4b39369d3adce151f84654eb9be94.png"
                  title="My Consultations"
                  description="Cold, cough and"
                />
                <FeatureCard
                  image="http://localhost:3845/assets/25eab82456626a75e2b102ceb1979d622936ab76.png"
                  title="My orders"
                  description="Rashes, acne, and skin concerns"
                />
                <FeatureCard
                  image="http://localhost:3845/assets/3c50f9823d68c2508877e9eca8c1cb5fc81d144.png"
                  title="My Medical Profile"
                  description="Rashes, acne, and skin concerns"
                />
                <FeatureCard
                  image="http://localhost:3845/assets/9a580608530e830887f5d5f1fae0b893b3248531.png"
                  title="Subscribe now"
                  description="Rashes, acne, and skin concerns"
                />
              </div>
            </div>

            {/* Consultations and Bookings Section */}
            <div className="flex gap-6 flex-wrap">
              {/* My Consultations */}
              <div className="flex flex-col gap-6 flex-1 min-w-[588px]">
                <div className="flex items-center justify-between pr-6">
                  <h2
                    className="text-[#1F2937] text-[34px] font-medium leading-normal tracking-[-1.7px]"
                    style={{
                      fontFamily: "Inter Display, -apple-system, sans-serif",
                    }}
                  >
                    My Consultations
                  </h2>
                  <button
                    className="text-[#78716C] text-base font-normal leading-5 hover:text-[#1C1917] transition-colors"
                    style={{
                      fontFamily: "SF Pro, -apple-system, sans-serif",
                    }}
                  >
                    View All
                  </button>
                </div>

                {/* Consultation Card */}
                <div className="bg-white border border-[#D1D5DB] rounded-[18px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.04)] p-5 flex flex-col gap-2">
                  <div className="flex items-start justify-between">
                    <div className="bg-[#F1F8F9] flex items-center justify-center p-3 rounded-full w-[41px] h-[41px]">
                      <Stethoscope className="w-[17px] h-[17px] text-[#0891B2]" />
                    </div>
                    <div className="bg-[#F0FDFA] flex items-center justify-center px-2 py-1 rounded-[12px]">
                      <span
                        className="text-[#0D9488] text-sm font-normal leading-5"
                        style={{
                          fontFamily: "Inter, -apple-system, sans-serif",
                        }}
                      >
                        Completed
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 pb-6 pt-1">
                    <h3
                      className="text-[#292524] text-[19px] font-semibold leading-6 w-[269px]"
                      style={{
                        fontFamily: "Inter Display, -apple-system, sans-serif",
                      }}
                    >
                      Consultation with Dr. Reed
                    </h3>
                    <p
                      className="text-[#57534E] text-sm font-normal leading-5"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                      }}
                    >
                      Prescription completed
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-[#FAFAF9] flex gap-[7px] items-center p-3 rounded-[12px] text-[#1C1917] flex-1">
                      <RefreshCw className="w-6 h-6" />
                      <span
                        className="font-medium text-sm leading-5"
                        style={{
                          fontFamily: "Inter, -apple-system, sans-serif",
                        }}
                      >
                        Refill Medicine
                      </span>
                    </button>
                    <button className="bg-[#FAFAF9] flex gap-[7px] items-center p-3 rounded-[12px] text-[#1C1917] flex-1">
                      <Calendar className="w-6 h-6" />
                      <span
                        className="font-medium text-sm leading-5"
                        style={{
                          fontFamily: "Inter, -apple-system, sans-serif",
                        }}
                      >
                        Book Consultation
                      </span>
                    </button>
                    <button className="bg-[#FAFAF9] flex gap-[7px] items-center p-3 rounded-[12px] text-[#1C1917] flex-1">
                      <Printer className="w-6 h-6" />
                      <span
                        className="font-medium text-sm leading-5"
                        style={{
                          fontFamily: "Inter, -apple-system, sans-serif",
                        }}
                      >
                        Print Subscription
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* My Bookings */}
              <div className="flex flex-col gap-6 flex-1">
                <div className="flex items-center justify-between pr-6">
                  <h2
                    className="text-[#1F2937] text-[34px] font-medium leading-normal tracking-[-1.7px]"
                    style={{
                      fontFamily: "Inter Display, -apple-system, sans-serif",
                    }}
                  >
                    My Bookings
                  </h2>
                  <button
                    className="text-[#78716C] text-base font-normal leading-5 hover:text-[#1C1917] transition-colors"
                    style={{
                      fontFamily: "SF Pro, -apple-system, sans-serif",
                    }}
                  >
                    View All
                  </button>
                </div>

                {/* Booking Card */}
                <div className="bg-white border border-[#D1D5DB] rounded-[18px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.04)] p-5 flex flex-col gap-2 relative">
                  <div className="flex items-start">
                    <div className="bg-[#F1F8F9] flex items-center justify-center p-3 rounded-full w-[41px] h-[41px]">
                      <ShoppingBag className="w-[17px] h-[17px] text-[#0891B2]" />
                    </div>
                    {/* QR Code */}
                    <div className="absolute right-[18px] top-[18px] w-[114px] h-[111px]">
                      <img
                        src="http://localhost:3845/assets/bb607237bd1eb22f25ae94f5384c74a6b4688e3f.svg"
                        alt="QR Code"
                        className="w-full h-full"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 pb-6 pt-1">
                    <h3
                      className="text-[#292524] text-[19px] font-semibold leading-6 w-[269px]"
                      style={{
                        fontFamily: "Inter Display, -apple-system, sans-serif",
                      }}
                    >
                      Pickup ready at CVS
                    </h3>
                    <p
                      className="text-[#57534E] text-sm font-normal leading-5"
                      style={{
                        fontFamily: "Inter, -apple-system, sans-serif",
                      }}
                    >
                      Amoxyllin x10, Ibuprofen x10
                    </p>
                  </div>
                  <div className="flex items-start">
                    <button className="bg-[#FAFAF9] flex gap-[7px] items-center p-3 rounded-[12px] text-[#1C1917] flex-1">
                      <Share2 className="w-6 h-6" />
                      <span
                        className="font-medium text-sm leading-5"
                        style={{
                          fontFamily: "Inter, -apple-system, sans-serif",
                        }}
                      >
                        Share Reciept
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#FCFAF8] border-t border-[#D6D3D1] px-6 py-4">
          <div className="flex items-center justify-between">
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
    </div>
  );
}

function FeatureCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#FCFAF8] flex flex-col gap-3 p-6 rounded-[30px] flex-1 min-w-[200px]">
      <div className="h-[98px] w-[116px] relative flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain object-center"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-1 items-start">
          <h3
            className="text-[#292524] text-[19px] font-semibold leading-6 flex-1"
            style={{
              fontFamily: "Inter Display, -apple-system, sans-serif",
            }}
          >
            {title}
          </h3>
          <ChevronRight className="w-6 h-6 text-[#111827] flex-shrink-0" />
        </div>
        <p
          className="text-[#57534E] text-sm font-normal leading-5"
          style={{
            fontFamily: "Inter, -apple-system, sans-serif",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

