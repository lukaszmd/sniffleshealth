import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  MapPin,
  ChevronDown,
  Mic,
  ChevronRight,
  Lock,
  ArrowDown,
  Stethoscope,
  FileSignature,
  Clock,
  X,
  Check,
  Smile,
} from "lucide-react";
import { useDebounce } from "@/hooks";
import { Logo } from "@/components/layout";
import { ROUTES } from "@/constants";
import type { HealthCategory } from "@shared/types";
import { useConsultationStore } from "@/stores/consultation.store";

export default function Index() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, { delay: 300 });

  // Handle debounced search - this could trigger API calls or filtering
  useEffect(() => {
    if (debouncedSearchQuery) {
      // TODO: Implement search functionality when API layer is ready
      // This would trigger search API call or filter results
    }
  }, [debouncedSearchQuery]);

  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    // Intersection Observer for fade-in animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    // Observe all cards and sections
    const elements = document.querySelectorAll(".fade-in-card");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full px-4 md:px-8 lg:px-14 pt-8 pb-0">
        <div className="max-w-[1393px] mx-auto">
          <div className="bg-brand-cyan-light rounded-3xl px-6 md:px-12 lg:px-18 pt-10 md:pt-10 pb-0 flex flex-col items-center gap-8 md:gap-15">
            {/* Logo */}
            <Logo size="lg" />

            {/* Header */}
            <div className="w-full max-w-[1256px] flex flex-col justify-center items-center gap-2">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-inter-display font-medium text-center leading-tight tracking-display-tighter">
                <span className="text-neutral-charcoal">Get your </span>
                <span className="text-brand-cyan">consultation</span>
                <span className="text-neutral-charcoal"> in minutes</span>
              </h1>
              <p className="text-text-light text-xl md:text-2xl lg:text-2xl font-inter-display font-normal text-center leading-34">
                Super charging US private healthcare
              </p>
            </div>

            {/* Search Section */}
            <div className="w-full flex flex-col justify-center items-center gap-5">
              {/* Location & Search Bar */}
              <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-3">
                {/* Location Selector */}
                <div className="flex items-center gap-2 bg-neutral-off-white rounded-4xl px-4 py-3">
                  <MapPin className="w-6 h-6 text-text-secondary" />
                  <span className="text-text-dark font-inter font-semibold text-base">
                    New York
                  </span>
                  <div className="w-[9px] h-[9px] rounded-full bg-semantic-green"></div>
                  <ChevronDown className="w-6 h-6 text-text-secondary" />
                </div>

                {/* Search Bar */}
                <div className="flex-1 flex items-center gap-2 bg-neutral-off-white rounded-4xl px-4 py-3">
                  <Search className="w-5 h-5 text-text-secondary opacity-75" />
                  <input
                    type="text"
                    placeholder="Search By Name, keyword"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-neutral-slate text-sm font-inter"
                  />
                  <button className="w-8 h-8 rounded-full bg-neutral-charcoal flex items-center justify-center">
                    <Mic className="w-4 h-4 text-border-medium" />
                  </button>
                </div>
              </div>

              {/* Health Concern Cards */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <HealthCard
                  title="Fever and Flu"
                  description="Cold, cough and flu like symptoms"
                  image="https://api.builder.io/api/v1/image/assets/TEMP/2a54dd3f127905324c4ca0ea85747e7b1a044797?width=390"
                  category="FEVER_FLU"
                />
                <HealthCard
                  title="Skin Issues"
                  description="Rashes, acne, and skin concerns"
                  image="https://api.builder.io/api/v1/image/assets/TEMP/aa9faffe1110604dcdf0c3c3820831b0b5c53ba7?width=390"
                  category="SKIN_ISSUES"
                />
                <HealthCard
                  title="Infections"
                  description="Rashes, acne, and skin concerns"
                  image="https://api.builder.io/api/v1/image/assets/TEMP/9fb210009a698441291125022f5997ec6aba0e3f?width=390"
                  category="INFECTIONS"
                />
                <HealthCard
                  title="Sexual Health"
                  description="Rashes, acne, and skin concerns"
                  image="https://api.builder.io/api/v1/image/assets/TEMP/5b2757d6b7f35f77966035b8cc5904d5bdff6fc9?width=390"
                  category="SEXUAL_HEALTH"
                />
              </div>

              {/* Bottom Badges */}
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 px-1 pb-8">
                <div className="flex items-center gap-2 bg-brand-cyan-lighter rounded-2xl px-6 py-3 shadow-sm">
                  <Lock className="w-6 h-6 text-text-secondary" />
                  <span className="text-text-secondary font-inter font-semibold text-base">
                    HIPAA compliant
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-brand-cyan-lighter rounded-t-3xl px-6 py-4 shadow-sm">
                  <ArrowDown className="w-6 h-6 text-text-secondary" />
                  <span className="text-text-secondary font-inter font-semibold text-base">
                    Scroll down to see how
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-brand-cyan-lighter rounded-2xl px-6 py-3 shadow-sm">
                  <Lock className="w-6 h-6 text-text-secondary" />
                  <span className="text-text-secondary font-inter font-semibold text-base">
                    HIPAA compliant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full px-4 md:px-8 lg:px-14 pt-8 md:pt-10">
        <div className="max-w-[1393px] mx-auto">
          <div className="bg-gradient-to-br from-brand-cyan-darker via-brand-cyan-darker to-brand-cyan-pale rounded-3xl px-6 md:px-12 lg:px-30 py-12 md:py-20 relative overflow-hidden">
            {/* Content Container */}
            <div className="relative z-10 flex flex-col lg:flex-row items-start gap-8 md:gap-12">
              {/* Left Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-8">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d70e756501509614b665deb946de13d9f2aab9da"
                    alt="Doctor"
                    className="w-12 h-12 rounded-full"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d70e756501509614b665deb946de13d9f2aab9da"
                    alt="Doctor"
                    className="w-12 h-12 rounded-full -ml-4"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d70e756501509614b665deb946de13d9f2aab9da"
                    alt="Doctor"
                    className="w-12 h-12 rounded-full -ml-4"
                  />
                </div>
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-quincy font-medium mb-6 leading-tight">
                  Your Care, Your Terms, Just a Click Away
                </h2>
                <p className="text-white/90 text-base md:text-lg font-inter leading-relaxed max-w-xl">
                  Quality care you can trust. Fast, affordable, and
                  transparent—no hidden costs. Connect with licensed doctors in
                  your state and get medical advice instantly, all from the
                  comfort of your home.
                </p>
                <div className="mt-8">
                  <svg
                    width="112"
                    height="32"
                    viewBox="0 0 112 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 0C18.1217 0 20.1566 0.842855 21.6569 2.34315C23.1571 3.84344 24 5.87827 24 8V24C24 26.1217 23.1571 28.1566 21.6569 29.6569C20.1566 31.1571 18.1217 32 16 32C13.8783 32 11.8434 31.1571 10.3431 29.6569C8.84285 28.1566 8 26.1217 8 24V8C8 5.87827 8.84285 3.84344 10.3431 2.34315C11.8434 0.842855 13.8783 0 16 0Z"
                      fill="white"
                    />
                    <path
                      d="M48 0C50.1217 0 52.1566 0.842855 53.6569 2.34315C55.1571 3.84344 56 5.87827 56 8V24C56 26.1217 55.1571 28.1566 53.6569 29.6569C52.1566 31.1571 50.1217 32 48 32C45.8783 32 43.8434 31.1571 42.3431 29.6569C40.8429 28.1566 40 26.1217 40 24V8C40 5.87827 40.8429 3.84344 42.3431 2.34315C43.8434 0.842855 45.8783 0 48 0Z"
                      fill="white"
                    />
                    <path
                      d="M80 0C82.1217 0 84.1566 0.842855 85.6569 2.34315C87.1571 3.84344 88 5.87827 88 8V24C88 26.1217 87.1571 28.1566 85.6569 29.6569C84.1566 31.1571 82.1217 32 80 32C77.8783 32 75.8434 31.1571 74.3431 29.6569C72.8429 28.1566 72 26.1217 72 24V8C72 5.87827 72.8429 3.84344 74.3431 2.34315C75.8434 0.842855 77.8783 0 80 0Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              {/* Right Feature Cards */}
              <div className="flex gap-5">
                <div className="flex flex-col gap-5">
                  <FeatureCard
                    icon={<Stethoscope className="w-6 h-6 text-text-dark" />}
                    title="Top licensed doctors"
                    className="bg-brand-cyan-light"
                  />
                  <FeatureCard
                    icon={<FileSignature className="w-6 h-6 text-text-dark" />}
                    title="No Insurance Required"
                    className="bg-brand-cyan-light"
                  />
                  <FeatureCard
                    icon={<Clock className="w-6 h-6 text-text-dark" />}
                    title="Instant, within 15 mins appointments"
                    className="bg-brand-cyan-pale-blue"
                  />
                </div>
                <div className="hidden md:flex flex-col gap-5 mt-0 md:mt-12">
                  <FeatureCard
                    icon={<FileSignature className="w-6 h-6 text-text-dark" />}
                    title="No hidden fees"
                    className="bg-brand-cyan-pale-blue h-[149px]"
                  />
                  <FeatureCard
                    icon={<FileSignature className="w-6 h-6 text-text-dark" />}
                    title="Same day prescriptions send right to your local pharmacy"
                    className="bg-brand-cyan-pale-blue h-[149px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="w-full px-4 md:px-8 lg:px-14 pt-8 md:pt-10">
        <div className="max-w-[1393px] mx-auto">
          <div className="bg-bg-dark rounded-3xl px-6 md:px-12 lg:px-30 py-12 md:py-20 relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-start gap-6">
              <h2 className="text-warm-50 text-3xl md:text-4xl lg:text-6xl font-quincy font-medium max-w-2xl tracking-display-tight">
                Don't know what to search?
              </h2>
              <div className="w-full flex items-center gap-6 bg-brand-cyan-light rounded-3xl border-2 border-bg-darker px-6 py-6">
                <Search className="w-8 h-8 text-text-primary" />
                <input
                  type="text"
                  placeholder="I have a fever..."
                  className="flex-1 bg-transparent border-none outline-none text-text-primary text-2xl md:text-3xl lg:text-4xl font-inter-display font-medium placeholder:text-text-primary tracking-display-normal"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Treat Section */}
      <section className="w-full px-4 md:px-8 lg:px-14 pt-8 md:pt-10">
        <div className="max-w-[1393px] mx-auto">
          <div className="bg-neutral-off-white rounded-3xl px-6 md:px-12 lg:px-30 py-12 md:py-20">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              {/* Left Side */}
              <div className="flex flex-col justify-between gap-8 lg:gap-0 lg:h-full lg:min-h-[371px]">
                <h2 className="text-text-primary text-3xl md:text-4xl lg:text-6xl font-inter-display font-medium tracking-display-tight">
                  What we treat
                </h2>
                <div className="flex items-center gap-6">
                  <Check className="w-10 h-10 text-text-primary" />
                  <Lock className="w-10 h-10 text-text-primary" />
                  <Smile className="w-10 h-10 text-text-primary" />
                </div>
              </div>

              {/* Right Side - Conditions Grid */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <ConditionItem text="Strep Throat" active />
                <ConditionItem text="UTIs" />
                <ConditionItem text="Pneumonia" />
                <ConditionItem text="Stye Eye" />
                <ConditionItem text="Shingles" />
                <ConditionItem text="Shingles" />
                <ConditionItem text="Genital Herpes" />
                <ConditionItem text="GERD" />
                <ConditionItem text="Cold Sores" />
                <ConditionItem text="Gastritis" />
                <ConditionItem text="Birth Control" />
                <ConditionItem text="Diabetic Management" />
                <ConditionItem text="Oral Herpes" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Don't Treat Section */}
      <section className="w-full px-4 md:px-8 lg:px-14 pt-8 md:pt-10 pb-12">
        <div className="max-w-[1393px] mx-auto">
          <div className="bg-semantic-error-light rounded-3xl px-6 md:px-12 lg:px-30 py-12 md:py-20">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Left Side */}
              <div className="flex flex-col justify-between gap-8">
                <h2 className="text-semantic-error text-2xl md:text-3xl lg:text-4xl font-inter-display font-medium max-w-sm opacity-60 tracking-display-normal">
                  What we don't treat
                </h2>
                <div className="flex items-center gap-0">
                  <X className="w-10 h-10 text-semantic-error-medium" />
                  <X className="w-10 h-10 text-semantic-error-medium" />
                  <X className="w-10 h-10 text-semantic-error-medium" />
                </div>
              </div>

              {/* Right Side - Conditions Grid */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 opacity-30">
                <DontTreatItem text="Spinal Injuries" />
                <DontTreatItem text="Chest pains" />
                <DontTreatItem text="Coughing up blood" />
                <DontTreatItem text="Severe burns" />
                <DontTreatItem text="Birth Control" />
                <DontTreatItem text="Lacerations" />
                <DontTreatItem text="Broken bones" />
                <DontTreatItem text="Vomiting blood" />
                <DontTreatItem text="Blood in stools Management" />
                <DontTreatItem text="Oral Herpes" />
              </div>
            </div>
            <p className="text-semantic-error text-lg md:text-2xl font-inter-display font-medium text-center mt-8 tracking-tight">
              we do not prescribe narcotics & sedatives
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function HealthCard({
  title,
  description,
  image,
  category,
}: {
  title: string;
  description: string;
  image: string;
  category: HealthCategory;
}) {
  const navigate = useNavigate();
  const { setSelectedCategory } = useConsultationStore();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedCategory(category);
    navigate(ROUTES.SYMPTOMS);
  };

  return (
    <div
      onClick={handleClick}
      className="fade-in-card opacity-0 bg-neutral-off-white rounded-3xl p-6 flex flex-col justify-center items-center gap-3 transition-all duration-500 hover:shadow-lg cursor-pointer"
    >
      <div className="w-full flex flex-col justify-center items-start gap-1">
        <div className="w-full flex items-start justify-between gap-1">
          <h3 className="flex-1 text-neutral-slate text-lg font-inter-display font-semibold">
            {title}
          </h3>
          <ChevronRight className="w-6 h-6 text-text-dark" />
        </div>
        <p className="text-neutral-stone text-sm font-inter">
          {description}
        </p>
      </div>
      <img
        src={image}
        alt={title}
        className="w-full max-w-[195px] h-auto aspect-[39/34] object-contain"
        loading="lazy"
      />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`fade-in-card opacity-0 w-full max-w-[321px] rounded-3xl p-6 flex flex-col justify-between items-start gap-3 shadow-md transition-all duration-500 ${className}`}
    >
      {icon}
      <h3 className="text-text-dark text-xl md:text-xl font-quincy font-medium leading-6">
        {title}
      </h3>
    </div>
  );
}

function ConditionItem({
  text,
  active = false,
}: {
  text: string;
  active?: boolean;
}) {
  return (
    <div
      className={`${active ? "text-warm-400" : "text-neutral-gray"} text-2xl md:text-3xl lg:text-6xl font-inter-display font-medium leading-tight tracking-display-tight`}
    >
      {text}
    </div>
  );
}

function DontTreatItem({ text }: { text: string }) {
  return (
    <div className="text-semantic-error text-xl md:text-2xl lg:text-2xl font-inter-display font-medium leading-tight tracking-tight">
      {text}
    </div>
  );
}
