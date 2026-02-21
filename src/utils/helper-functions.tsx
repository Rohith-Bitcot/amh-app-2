import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

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
  <div className={`flex flex-col items-center ${className ?? ""}`} style={{ gap: "2px" }}>
    <Image src="/assets/svgs/sort-1.svg" alt="sort line 1" width={14} height={2} />
    <Image src="/assets/svgs/sort-2.svg" alt="sort line 2" width={8} height={2} />
    <Image src="/assets/svgs/sort-3.svg" alt="sort line 3" width={4} height={2} />
  </div>
);
