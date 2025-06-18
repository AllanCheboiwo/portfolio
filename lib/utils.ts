import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the correct image path for the current environment
 * Handles both images and other files (like PDFs) correctly for SiteGround deployment
 */
export function getImagePath(path: string): string {
  // Remove leading slash if present to normalize the path
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  
  // For both development and production, return the path with a leading slash
  // SiteGround will serve files from the root directory
  return `/${normalizedPath}`
}
