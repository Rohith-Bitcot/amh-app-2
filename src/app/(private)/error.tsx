"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCcw } from "lucide-react";

interface ErrorPageProps {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log application error to console for debugging
    console.error("Application runtime error:", error);
  }, [error]);

  return (
    <div className="flex h-full min-h-[calc(100vh-150px)] w-full items-center justify-center px-4">
      <div className="bg-primary-blue text-white rounded-[16px] p-10 max-w-[480px] w-full text-center shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white">
          <AlertCircle className="h-8 w-8 text-primary-blue" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h1 className="mb-4 text-[28px] font-bold font-heading tracking-tight text-white">
          Something Went Wrong!
        </h1>

        {/* Description */}
        <p className="mb-10 text-[15px] text-white/90 leading-relaxed font-heading px-2">
          {error.message || "An unexpected error occurred while processing your request. Please try again later."}
        </p>

        {/* Action Button */}
        <div className="flex justify-center">
          <button
            onClick={() => reset()}
            className="flex items-center gap-2 rounded-lg bg-white px-8 py-2.5 text-sm font-bold font-heading text-primary-blue transition-transform hover:scale-105 active:scale-95 shadow-sm"
          >
            <RefreshCcw size={16} strokeWidth={2} />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
