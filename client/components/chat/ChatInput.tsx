/**
 * Chat input component
 * Used for message input in chat interfaces
 */

import { Plus, Mic, ArrowUp } from "lucide-react";
import { FONTS } from "@/constants";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  placeholder?: string;
  className?: string;
}

export function ChatInput({
  value,
  onChange,
  onSend,
  placeholder = "Enter your message here",
  className = "",
}: ChatInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSend();
    }
  };

  return (
    <div
      className={`bg-white border border-border-medium rounded-2xl flex items-center gap-2 h-[57px] pl-5 pr-2 py-5 ${className}`}
    >
      <div className="flex items-center justify-center p-1 rounded-lg opacity-75 flex-shrink-0">
        <Plus className="w-5 h-5 text-text-secondary" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-1 bg-transparent border-none outline-none text-text-primary text-sm font-inter placeholder:text-text-primary leading-5"
      />
      <button className="flex items-center justify-center p-2 rounded-xl hover:bg-neutral-light-gray transition-colors flex-shrink-0">
        <Mic className="w-6 h-6 text-brand-cyan-dark" />
      </button>
      <button
        onClick={onSend}
        className="bg-brand-cyan-dark flex items-center justify-center p-2 rounded-xl hover:bg-brand-cyan-dark/90 transition-colors flex-shrink-0 h-10 w-10"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}
