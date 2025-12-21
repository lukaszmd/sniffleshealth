/**
 * Application Footer component
 * Used across pages for consistent footer with HIPAA badge
 */

import { Lock } from "lucide-react";
import { FONTS } from "@/constants";

export function AppFooter() {
  return (
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
  );
}

