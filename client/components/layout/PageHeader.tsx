/**
 * Page Header component with back button, step indicator, and centered logo
 * Used across most pages for consistent navigation
 */

import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { FONTS, ROUTES } from "@/constants";
import { Logo } from "./Logo";

interface PageHeaderProps {
  backTo?: string;
  step?: string;
  title?: string;
  showLogo?: boolean;
}

export function PageHeader({
  backTo,
  step,
  title,
  showLogo = true,
}: PageHeaderProps) {
  return (
    <div className="bg-[#FCFAF8] border-b border-[#D6D3D1] px-6 py-4">
      <div className="max-w-[1464px] mx-auto flex items-center justify-between relative">
        {/* Left Side - Back Button & Title */}
        {(backTo || step || title) && (
          <div className="flex items-center gap-3">
            {backTo && (
              <Link
                to={backTo}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#D6D3D1] bg-[#FCFAF8] shadow-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <ArrowLeft className="w-6 h-6 text-[#1C1917]" />
              </Link>
            )}
            {(step || title) && (
              <div className="flex flex-col">
                {step && (
                  <span
                    className="text-[#4B5563] text-sm leading-5"
                    style={{ fontFamily: FONTS.inter }}
                  >
                    {step}
                  </span>
                )}
                {title && (
                  <span
                    className="text-[#111827] text-base font-medium leading-6"
                    style={{ fontFamily: FONTS.inter }}
                  >
                    {title}
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {/* Center - Logo */}
        {showLogo && (
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Logo />
          </div>
        )}

        {/* Right Side - Placeholder for symmetry */}
        {(backTo || step || title) && (
          <button className="flex items-center justify-center w-10 h-10 rounded-full border border-[#D1D5DB] shadow-sm opacity-0 pointer-events-none">
            <ArrowLeft className="w-6 h-6 text-[#4B5563]" />
          </button>
        )}
      </div>
    </div>
  );
}

