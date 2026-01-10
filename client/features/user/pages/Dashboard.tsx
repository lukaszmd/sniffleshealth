import { Link } from "react-router-dom";
import { ROUTES, FONTS } from "@/constants";
import { Logo } from "@/components/layout";
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
    <div className="min-h-screen bg-neutral-light-gray flex">
      {/* Left Sidebar */}
      <div className="bg-white border-r border-neutral-gray w-[252px] flex flex-col">
        <div className="p-[13px] flex flex-col gap-11">
          {/* Logo */}
          <div className="h-[47px] flex items-center p-3">
            <Logo size="md" />
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2">
            <Link
              to={ROUTES.DASHBOARD}
              className="bg-warm-50 flex gap-[7px] items-center p-2 rounded-xl text-text-primary"
            >
              <Home className="w-6 h-6" />
              <span className="font-inter font-medium text-sm leading-5">
                My Dashboard
              </span>
            </Link>
            <Link
              to={ROUTES.DOCTOR_CHAT}
              className="flex gap-[7px] items-center p-2 rounded-xl text-neutral-stone hover:bg-warm-50 transition-colors"
            >
              <MessageSquare className="w-6 h-6" />
              <span className="font-inter font-medium text-sm leading-5">
                My Consultations
              </span>
            </Link>
            <Link
              to={ROUTES.PRESCRIPTION}
              className="flex gap-[7px] items-center p-2 rounded-xl text-neutral-stone hover:bg-warm-50 transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              <span className="font-inter font-medium text-sm leading-5">
                My Prescriptions
              </span>
            </Link>
            <Link
              to={ROUTES.MEDICAL_PROFILE}
              className="flex gap-[7px] items-center p-2 rounded-xl text-neutral-stone hover:bg-warm-50 transition-colors"
            >
              <Stethoscope className="w-6 h-6" />
              <span className="font-inter font-medium text-sm leading-5">
                My Medical Profile
              </span>
            </Link>
            <button className="flex gap-[7px] items-center p-2 rounded-xl text-neutral-stone hover:bg-warm-50 transition-colors text-left">
              <User className="w-6 h-6" />
              <span className="font-inter font-medium text-sm leading-5">
                My Profile
              </span>
            </button>
            <button className="flex gap-[7px] items-center p-2 rounded-xl text-neutral-stone hover:bg-warm-50 transition-colors text-left">
              <CreditCard className="w-6 h-6" />
              <span className="font-inter font-medium text-sm leading-5">
                Subscriptions
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-6 bg-gradient-to-b from-white via-white to-warm-50">
          <div className="max-w-full flex flex-col gap-6">
            {/* Welcome Section */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h1 className="text-neutral-charcoal text-3xl font-inter-display font-medium leading-normal tracking-tight">
                  My Dashboard
                </h1>
                <p className="text-text-secondary text-base font-inter font-normal leading-5">
                  Welcome to supercharge your health, John
                </p>
              </div>

              {/* Feature Cards */}
              <div className="flex gap-5 flex-wrap">
                <FeatureCard
                  image="/images/dashboard/consultations.png"
                  title="My Consultations"
                  description="Cold, cough and"
                />
                <FeatureCard
                  image="/images/dashboard/orders.png"
                  title="My orders"
                  description="Rashes, acne, and skin concerns"
                />
                <FeatureCard
                  image="/images/dashboard/medical-profile.png"
                  title="My Medical Profile"
                  description="Rashes, acne, and skin concerns"
                />
                <FeatureCard
                  image="/images/dashboard/subscribe.png"
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
                  <h2 className="text-neutral-charcoal text-3xl font-inter-display font-medium leading-normal tracking-tight">
                    My Consultations
                  </h2>
                  <button className="text-neutral-dark-gray text-base font-inter font-normal leading-5 hover:text-text-primary transition-colors">
                    View All
                  </button>
                </div>

                {/* Consultation Card */}
                <div className="bg-white border border-border-medium rounded-2xl shadow-[0px_4px_8px_0px_rgba(0,0,0,0.04)] p-5 flex flex-col gap-2">
                  <div className="flex items-start justify-between">
                    <div className="bg-brand-cyan-lighter flex items-center justify-center p-3 rounded-full w-[41px] h-[41px]">
                      <Stethoscope className="w-[17px] h-[17px] text-brand-cyan" />
                    </div>
                    <div className="bg-teal-50 flex items-center justify-center px-2 py-1 rounded-xl">
                      <span className="text-teal-700 text-sm font-inter font-normal leading-5">
                        Completed
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 pb-6 pt-1">
                    <h3 className="text-neutral-slate text-lg font-inter-display font-semibold leading-6 w-[269px]">
                      Consultation with Dr. Reed
                    </h3>
                    <p className="text-neutral-stone text-sm font-inter font-normal leading-5">
                      Prescription completed
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-warm-50 flex gap-[7px] items-center p-3 rounded-xl text-text-primary flex-1">
                      <RefreshCw className="w-6 h-6" />
                      <span className="font-inter font-medium text-sm leading-5">
                        Refill Medicine
                      </span>
                    </button>
                    <button className="bg-warm-50 flex gap-[7px] items-center p-3 rounded-xl text-text-primary flex-1">
                      <Calendar className="w-6 h-6" />
                      <span className="font-inter font-medium text-sm leading-5">
                        Book Consultation
                      </span>
                    </button>
                    <button className="bg-warm-50 flex gap-[7px] items-center p-3 rounded-xl text-text-primary flex-1">
                      <Printer className="w-6 h-6" />
                      <span className="font-inter font-medium text-sm leading-5">
                        Print Subscription
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* My Bookings */}
              <div className="flex flex-col gap-6 flex-1">
                <div className="flex items-center justify-between pr-6">
                  <h2 className="text-neutral-charcoal text-3xl font-inter-display font-medium leading-normal tracking-tight">
                    My Bookings
                  </h2>
                  <button className="text-neutral-dark-gray text-base font-inter font-normal leading-5 hover:text-text-primary transition-colors">
                    View All
                  </button>
                </div>

                {/* Booking Card */}
                <div className="bg-white border border-border-medium rounded-2xl shadow-[0px_4px_8px_0px_rgba(0,0,0,0.04)] p-5 flex flex-col gap-2 relative">
                  <div className="flex items-start">
                    <div className="bg-brand-cyan-lighter flex items-center justify-center p-3 rounded-full w-[41px] h-[41px]">
                      <ShoppingBag className="w-[17px] h-[17px] text-brand-cyan" />
                    </div>
                    {/* QR Code */}
                    <div className="absolute right-[18px] top-[18px] w-[114px] h-[111px]">
                      <img
                        src="/images/dashboard/qr-code.svg"
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
                    <h3 className="text-neutral-slate text-lg font-inter-display font-semibold leading-6 w-[269px]">
                      Pickup ready at CVS
                    </h3>
                    <p className="text-neutral-stone text-sm font-inter font-normal leading-5">
                      Amoxyllin x10, Ibuprofen x10
                    </p>
                  </div>
                  <div className="flex items-start">
                    <button className="bg-warm-50 flex gap-[7px] items-center p-3 rounded-xl text-text-primary flex-1">
                      <Share2 className="w-6 h-6" />
                      <span className="font-inter font-medium text-sm leading-5">
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
        <div className="bg-neutral-off-white border-t border-neutral-gray px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="px-3 py-2 text-neutral-dark-gray font-inter font-semibold text-base hover:text-text-primary transition-colors">
                About Us
              </button>
              <button className="px-3 py-2 text-neutral-dark-gray font-inter font-semibold text-base hover:text-text-primary transition-colors">
                Privacy Policy
              </button>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 border border-neutral-dark-gray rounded-full">
              <Lock className="w-6 h-6 text-neutral-dark-gray" />
              <span className="text-neutral-dark-gray font-inter font-semibold text-base">
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
    <div className="bg-neutral-off-white flex flex-col gap-3 p-6 rounded-3xl flex-1 min-w-[200px]">
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
          <h3 className="text-neutral-slate text-lg font-inter-display font-semibold leading-6 flex-1">
            {title}
          </h3>
          <ChevronRight className="w-6 h-6 text-text-dark flex-shrink-0" />
        </div>
        <p className="text-neutral-stone text-sm font-inter font-normal leading-5">
          {description}
        </p>
      </div>
    </div>
  );
}
