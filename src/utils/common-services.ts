"use client";
import { DialogState } from "@/types/common-types";
import { toast } from "react-toastify";
import { BehaviorSubject } from "rxjs";
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

// for global loader service
export const isLoading = new BehaviorSubject<boolean>(false);

export const isDialogOpen = new BehaviorSubject<DialogState>({
  open: false,
  data: { message: "Are you Sure?", title: "" },
  cancelText: "Cancel",
  confirmText: "Okay",
  onConfirm: () => {},
});

export const forSuccess = (message: string, id?: string) =>
  toast.success(message, { autoClose: 3000, toastId: id || 1 });

export const forError = (message: string, id?: string) =>
  toast.error(message, { autoClose: 3000, toastId: id || 1 });

export const forWarning = (message: string, id?: string) =>
  toast.warning(message, { autoClose: 3000, toastId: id || 1 });
