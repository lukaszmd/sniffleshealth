/**
 * Central export for all custom hooks
 */

export { useScrollToBottom } from "./useScrollToBottom";
export { useChat } from "./useChat";
export type { UseChatOptions, UseChatReturn } from "./useChat";
export { useFormNavigation, CONSULTATION_STEPS } from "./useFormNavigation";
export type {
  FormStep,
  UseFormNavigationReturn,
} from "./useFormNavigation";
export { useConsultationFlow } from "./useConsultationFlow";
export type { UseConsultationFlowReturn } from "./useConsultationFlow";
export { useLocalStorage } from "./useLocalStorage";
export type {
  UseLocalStorageOptions,
  UseLocalStorageReturn,
} from "./useLocalStorage";
export { useDebounce, useDebouncedCallback } from "./useDebounce";
export type { UseDebounceOptions } from "./useDebounce";

