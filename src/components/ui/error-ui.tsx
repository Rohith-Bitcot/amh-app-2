"use client";

import { AlertTriangle, Home, RefreshCcw } from "lucide-react";
import Link from "next/link";

interface ErrorUIProps {
  title?: string;
  message?: string;
  reset?: () => void;
  showHome?: boolean;
}

export default function ErrorUI({
  title = "Something went wrong",
  message = "Our team has been notified. Please try again or return to the dashboard.",
  reset,
  showHome = true,
}: ErrorUIProps) {
  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center p-6 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-500">
        <AlertTriangle size={40} />
      </div>

      <h1 className="mb-2 font-heading text-3xl font-bold text-neutral-800">
        {title}
      </h1>

      <p className="mb-8 max-w-md text-neutral-600">{message}</p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {reset && (
          <button
            onClick={() => reset()}
            className="flex items-center gap-2 rounded-lg bg-primary-blue px-6 py-2.5 font-heading text-sm font-semibold text-white transition-all hover:bg-dark-blue active:scale-95"
          >
            <RefreshCcw size={16} />
            Try Again
          </button>
        )}

        {showHome && (
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-6 py-2.5 font-heading text-sm font-semibold text-neutral-700 transition-all hover:bg-neutral-50 active:scale-95"
          >
            <Home size={16} />
            Back to Dashboard
          </Link>
        )}
      </div>
    </div>
  );
}
