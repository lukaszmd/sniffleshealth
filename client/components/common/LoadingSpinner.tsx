import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};

/**
 * LoadingSpinner - Reusable loading spinner component
 */
export function LoadingSpinner({
  size = "md",
  className,
  text,
}: LoadingSpinnerProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-2", className)}>
      <Loader2
        className={cn(
          "text-[#0891B2] animate-spin",
          sizeClasses[size]
        )}
      />
      {text && (
        <p className="text-[#6A7282] text-sm" style={{ fontFamily: "Inter, -apple-system, sans-serif" }}>
          {text}
        </p>
      )}
    </div>
  );
}

