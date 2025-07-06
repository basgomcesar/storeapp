import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//Convert a prisma object to a regular js object
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

//Format number with decimal places
export function formatNumber(value: number, decimalPlaces: number = 2): string {
  const [intValue, floatValue] = value.toFixed(decimalPlaces).split('.');
  return floatValue ? `${intValue}.${floatValue}` : `${intValue}.00`;
}