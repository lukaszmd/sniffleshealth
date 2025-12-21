import { useState } from "react";
import { Search } from "lucide-react";
import { DoctorList } from "./DoctorList";
import type { Doctor } from "@shared/types";
import { FONTS } from "@/constants";
import { cn } from "@/lib/utils";

export interface DoctorSearchProps {
  doctors: Doctor[];
  onSearch?: (query: string) => void;
  onDoctorClick?: (doctor: Doctor) => void;
  waitTime?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  className?: string;
}

/**
 * DoctorSearch - Reusable component for searching and displaying doctors
 */
export function DoctorSearch({
  doctors,
  onSearch,
  onDoctorClick,
  waitTime,
  icon,
  placeholder = "Search for a doctor...",
  className,
}: DoctorSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch?.(value);
  };

  // Filter doctors based on search query
  const filteredDoctors = searchQuery
    ? doctors.filter(
        (doctor) =>
          doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : doctors;

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6A7282]" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 bg-white border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0891B2] focus:border-transparent"
          style={{ fontFamily: FONTS.inter }}
        />
      </div>

      {/* Doctor List */}
      <DoctorList
        doctors={filteredDoctors}
        waitTime={waitTime}
        icon={icon}
        onDoctorClick={onDoctorClick}
      />
    </div>
  );
}

