/**
 * Logo component - Sniffles Health branding
 * Used across all pages for consistent branding
 */

import { FONTS } from "@/constants";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: { icon: "40", text: "text-xl" },
    md: { icon: "40", text: "text-xl" },
    lg: { icon: "56", text: "text-2xl md:text-3xl" },
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center gap-[5px] ${className}`}>
      <svg
        width={currentSize.icon}
        height={size === "lg" ? "73" : "52"}
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
          className={`text-[#0891B2] font-semibold ${currentSize.text} leading-tight`}
          style={{
            fontFamily: FONTS.interDisplay,
          }}
        >
          Sniffles
        </span>
        <span
          className={`text-[#1F2937] font-medium ${
            size === "lg" ? "text-lg md:text-xl" : "text-base"
          } leading-tight`}
          style={{
            fontFamily: FONTS.interDisplay,
          }}
        >
          health
        </span>
      </div>
    </div>
  );
}

