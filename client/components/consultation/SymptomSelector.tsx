import { Check } from "lucide-react";
import type { Symptom } from "@shared/types";
import { FONTS } from "@/constants";
import { cn } from "@/lib/utils";

export interface SymptomSelectorProps {
  symptoms: Symptom[];
  selectedSymptomIds: string[];
  onToggleSymptom: (symptomId: string) => void;
  title?: string;
  className?: string;
}

/**
 * SymptomSelector - Reusable component for selecting symptoms
 * Displays symptoms as selectable pills/badges
 */
export function SymptomSelector({
  symptoms,
  selectedSymptomIds,
  onToggleSymptom,
  title,
  className,
}: SymptomSelectorProps) {
  return (
    <div className={cn("flex flex-col gap-[19px]", className)}>
      {title && (
        <h2
          className="text-[#111827] text-xl font-semibold"
          style={{
            fontFamily: FONTS.inter,
            lineHeight: "28px",
          }}
        >
          {title}
        </h2>
      )}
      <div className="flex flex-wrap items-center gap-6">
        {symptoms.map((symptom) => (
          <SymptomPill
            key={symptom.id}
            name={symptom.name}
            selected={selectedSymptomIds.includes(symptom.id)}
            onClick={() => onToggleSymptom(symptom.id)}
          />
        ))}
      </div>
    </div>
  );
}

interface SymptomPillProps {
  name: string;
  selected: boolean;
  onClick: () => void;
}

function SymptomPill({ name, selected, onClick }: SymptomPillProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-5 py-5 rounded-[18px] border-2 transition-all",
        selected
          ? "border-[#0891B2] bg-white"
          : "border-[#D1D5DB] bg-white hover:border-[#0891B2]/50"
      )}
    >
      {selected && <Check className="w-6 h-6 text-[#155E75]" />}
      <span
        className={cn(
          "text-base",
          selected ? "font-600 text-[#164E63]" : "font-500 text-[#4B5563]"
        )}
        style={{ fontFamily: FONTS.inter }}
      >
        {name}
      </span>
    </button>
  );
}

