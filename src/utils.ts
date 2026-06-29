import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function triggerDonate() {
  window.dispatchEvent(new CustomEvent("open-donate-modal"));
}
