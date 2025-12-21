/**
 * Hook to automatically scroll to bottom when content changes
 * Useful for chat interfaces
 */

import { useEffect, useRef } from "react";

export function useScrollToBottom<T>(dependencies: T[]) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, dependencies);

  return { messagesEndRef, scrollToBottom };
}
