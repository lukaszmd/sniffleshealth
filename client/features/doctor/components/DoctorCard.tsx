import { FONTS } from "@/constants";
import { cn } from "@/lib/utils";
import type { Doctor } from "@shared/types";

export interface DoctorCardProps {
  doctor: Doctor;
  waitTime?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
  className?: string;
}

/**
 * DoctorCard - Reusable component for displaying doctor information
 * Shows doctor avatar, name, specialty, and wait time
 */
export function DoctorCard({
  doctor,
  waitTime,
  icon,
  onClick,
  selected = false,
  className,
}: DoctorCardProps) {
  const initials = doctor.initials || getInitials(doctor.name);

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex-1 bg-white border rounded-[10px] p-[17px] flex flex-col gap-3 transition-colors",
        selected
          ? "border-[#0891B2] border-2 bg-[#F0FDFA]"
          : "border-[#E5E7EB]",
        onClick && "cursor-pointer hover:border-[#0891B2]",
        className
      )}
    >
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-[#E5E7EB] flex items-center justify-center flex-shrink-0">
          <span
            className="text-[#4A5565] text-base font-normal"
            style={{
              fontFamily: FONTS.inter,
              lineHeight: "24px",
              letterSpacing: "-0.312px",
            }}
          >
            {initials}
          </span>
        </div>

        {/* Doctor Info */}
        <div className="flex flex-col gap-0.5 flex-1 min-w-0">
          <h3
            className="text-[#101828] text-base font-normal truncate"
            style={{
              fontFamily: FONTS.inter,
              lineHeight: "24px",
              letterSpacing: "-0.312px",
            }}
          >
            {doctor.name}
          </h3>
          <p
            className="text-[#6A7282] text-sm font-normal"
            style={{
              fontFamily: FONTS.inter,
              lineHeight: "20px",
              letterSpacing: "-0.1504px",
            }}
          >
            {doctor.specialty}
          </p>
        </div>
      </div>

      {/* Wait Time */}
      {waitTime && (
        <div className="flex items-center gap-2">
          {icon}
          <span
            className="text-[#4A5565] text-sm font-normal"
            style={{
              fontFamily: FONTS.inter,
              lineHeight: "20px",
              letterSpacing: "-0.1504px",
            }}
          >
            {waitTime}
          </span>
        </div>
      )}
    </div>
  );
}

/**
 * Helper function to extract initials from a name
 */
function getInitials(name: string): string {
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}

