/**
 * SafetyStopBanner - Warning banner for safety stops
 * Reusable across chat components
 */

import { AlertTriangle } from "lucide-react";

interface SafetyStopBannerProps {
  message: string;
}

export function SafetyStopBanner({ message }: SafetyStopBannerProps) {
  return (
    <div className="p-6 bg-yellow-100 border-l-4 border-l-yellow-500">
      <div className="flex items-start gap-3 max-w-[672px] mx-auto">
        <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="text-yellow-800 font-inter font-semibold text-sm mb-1">
            Important Notice
          </h3>
          <p className="text-yellow-900 text-sm font-inter">{message}</p>
        </div>
      </div>
    </div>
  );
}
