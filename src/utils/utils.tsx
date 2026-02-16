import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number): string {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }
  return value.toLocaleString();
}

export function formatPercent(value: number): string {
  return `${value}%`;
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export const FilterIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="white"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={2}
  >
    <line x1="4" y1="6" x2="20" y2="6" strokeLinecap="round" />
    <line x1="7" y1="12" x2="17" y2="12" strokeLinecap="round" />
    <line x1="10" y1="18" x2="14" y2="18" strokeLinecap="round" />
  </svg>
);
