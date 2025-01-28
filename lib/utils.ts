import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function for merging class names
export function cn(...inputs: ClassValue[]) {
  // Merge and return the combined class names
  return twMerge(clsx(...inputs));
}
m
