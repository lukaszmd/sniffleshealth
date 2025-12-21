import type { MedicalData } from "@shared/types";
import { FONTS } from "@/constants";
import { cn } from "@/lib/utils";

export interface MedicalFormProps {
  data: MedicalData;
  className?: string;
  showLabels?: boolean;
}

/**
 * MedicalForm - Reusable component for displaying medical data
 * Shows medical information in a structured grid format
 */
export function MedicalForm({
  data,
  className,
  showLabels = true,
}: MedicalFormProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-4", className)}>
      <DataField label="Age" value={data.age} showLabel={showLabels} />
      <DataField label="Sex" value={data.sex} showLabel={showLabels} />
      <DataField label="Weight" value={data.weight} showLabel={showLabels} />
      <DataField label="Height" value={data.height} showLabel={showLabels} />
      {data.allergies.length > 0 && (
        <div className="col-span-2">
          <span
            className="text-[#4A5565] text-sm block mb-2"
            style={{ fontFamily: FONTS.inter }}
          >
            Allergies
          </span>
          <div className="flex flex-wrap gap-2">
            {data.allergies.map((allergy, index) => (
              <Tag key={index} text={allergy} />
            ))}
          </div>
        </div>
      )}
      {data.chronicConditions.length > 0 && (
        <div className="col-span-2">
          <span
            className="text-[#4A5565] text-sm block mb-2"
            style={{ fontFamily: FONTS.inter }}
          >
            Chronic Conditions
          </span>
          <div className="flex flex-wrap gap-2">
            {data.chronicConditions.map((condition, index) => (
              <Tag key={index} text={condition} />
            ))}
          </div>
        </div>
      )}
      {data.surgicalHistory.length > 0 && (
        <div className="col-span-2">
          <span
            className="text-[#4A5565] text-sm block mb-2"
            style={{ fontFamily: FONTS.inter }}
          >
            Surgical History
          </span>
          <div className="flex flex-wrap gap-2">
            {data.surgicalHistory.map((surgery, index) => (
              <Tag key={index} text={surgery} />
            ))}
          </div>
        </div>
      )}
      {data.socialHistory.length > 0 && (
        <div className="col-span-2">
          <span
            className="text-[#4A5565] text-sm block mb-2"
            style={{ fontFamily: FONTS.inter }}
          >
            Social History
          </span>
          <div className="flex flex-wrap gap-2">
            {data.socialHistory.map((item, index) => (
              <Tag key={index} text={`${item.type}: ${item.level}`} />
            ))}
          </div>
        </div>
      )}
      {data.familyHistory.length > 0 && (
        <div className="col-span-2">
          <span
            className="text-[#4A5565] text-sm block mb-2"
            style={{ fontFamily: FONTS.inter }}
          >
            Family History
          </span>
          <div className="flex flex-wrap gap-2">
            {data.familyHistory.map((history, index) => (
              <Tag key={index} text={history} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface DataFieldProps {
  label: string;
  value: string;
  showLabel?: boolean;
}

function DataField({ label, value, showLabel = true }: DataFieldProps) {
  return (
    <div className="col-span-1">
      {showLabel && (
        <span
          className="text-[#4A5565] text-sm block mb-1"
          style={{ fontFamily: FONTS.inter }}
        >
          {label}
        </span>
      )}
      <div className="bg-[#FAFAF9] rounded-lg px-2 py-1">
        <span
          className="text-[#101828] text-base"
          style={{ fontFamily: FONTS.inter }}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

interface TagProps {
  text: string;
}

function Tag({ text }: TagProps) {
  return (
    <span
      className="bg-[#F3F4F6] border border-transparent rounded-full px-[13px] py-[5px] text-[#364153] text-xs font-medium"
      style={{ fontFamily: FONTS.inter, lineHeight: "16px" }}
    >
      {text}
    </span>
  );
}
