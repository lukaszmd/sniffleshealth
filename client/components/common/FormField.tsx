import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { FONTS } from "@/constants";
import type { ReactNode } from "react";

export interface FormFieldProps {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
  labelClassName?: string;
}

/**
 * FormField - Standardized form input wrapper component
 * Provides consistent styling and error handling for form fields
 */
export function FormField({
  label,
  error,
  hint,
  required,
  children,
  className,
  labelClassName,
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <Label
          className={cn(
            "text-[#111827] text-sm font-medium",
            required && "after:content-['*'] after:ml-1 after:text-[#DC2626]",
            labelClassName,
          )}
          style={{ fontFamily: FONTS.inter }}
        >
          {label}
        </Label>
      )}
      {children}
      {hint && !error && (
        <p
          className="text-[#6A7282] text-xs"
          style={{ fontFamily: FONTS.inter }}
        >
          {hint}
        </p>
      )}
      {error && (
        <p
          className="text-[#DC2626] text-xs"
          style={{ fontFamily: FONTS.inter }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
