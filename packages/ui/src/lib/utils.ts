import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names and merges Tailwind classes intelligently
 * 
 * Example usage:
 * cn("px-4 py-2", "bg-blue-500", someBooleanCondition && "font-bold")
 * 
 * The function will:
 * 1. Combine all the class names
 * 2. Handle conditional classes
 * 3. Resolve Tailwind class conflicts (e.g., "p-4 p-2" becomes "p-2")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
