import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { FONTS } from "@/constants";

export interface ErrorDisplayProps {
  message: string;
  title?: string;
  onRetry?: () => void;
  className?: string;
  variant?: "default" | "inline" | "banner";
}

/**
 * ErrorDisplay - Reusable component for displaying error messages
 */
export function ErrorDisplay({
  message,
  title = "Error",
  onRetry,
  className,
  variant = "default",
}: ErrorDisplayProps) {
  if (variant === "inline") {
    return (
      <div className={cn("flex items-start gap-2 text-[#DC2626]", className)}>
        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <p className="text-sm" style={{ fontFamily: FONTS.inter }}>
          {message}
        </p>
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <div
        className={cn(
          "bg-[#FEF2F2] border border-[#FECACA] rounded-lg p-4 flex items-start gap-3",
          className,
        )}
      >
        <AlertCircle className="w-5 h-5 text-[#DC2626] flex-shrink-0" />
        <div className="flex-1">
          <h3
            className="text-[#991B1B] font-semibold text-sm mb-1"
            style={{ fontFamily: FONTS.inter }}
          >
            {title}
          </h3>
          <p
            className="text-[#7F1D1D] text-sm"
            style={{ fontFamily: FONTS.inter }}
          >
            {message}
          </p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="mt-3 text-[#DC2626] text-sm font-medium hover:underline"
              style={{ fontFamily: FONTS.inter }}
            >
              Try again
            </button>
          )}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 p-8 text-center",
        className,
      )}
    >
      <AlertCircle className="w-12 h-12 text-[#DC2626]" />
      <div>
        <h3
          className="text-[#111827] font-semibold text-lg mb-2"
          style={{ fontFamily: FONTS.inter }}
        >
          {title}
        </h3>
        <p
          className="text-[#6A7282] text-sm"
          style={{ fontFamily: FONTS.inter }}
        >
          {message}
        </p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-[#0891B2] text-white rounded-lg hover:bg-[#0891B2]/90 transition-colors"
          style={{ fontFamily: FONTS.inter }}
        >
          Try again
        </button>
      )}
    </div>
  );
}
