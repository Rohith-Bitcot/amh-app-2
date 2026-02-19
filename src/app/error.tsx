"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCcw, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

/**
 * Premium Global Error Boundary Page.
 * Handles runtime crashes with a polished UI and clear recovery actions.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log application error to console for debugging
    console.error("Application runtime error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <div className="max-w-sm text-center">
        {/* Error icon with warning pulse */}
        <div className="relative mx-auto mb-8 block h-28 w-28">
          <div className="absolute inset-0 animate-ping rounded-full bg-red-100 opacity-20" />
          <div className="flex h-full w-full items-center justify-center rounded-3xl bg-red-50 text-red-600 shadow-[0_10px_40px_-10px_rgba(220,38,38,0.2)]">
            <AlertCircle size={52} strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="mb-3 font-heading text-3xl font-bold text-slate-900 lg:text-4xl">
          Unexpected Error Occurred
        </h1>
        <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-slate-500">
          We&apos;ve encountered a glitch in the system. Don&apos;t worry, our
          developers have been notified. Please try refreshing or return to safe
          ground.
        </p>

        {/* Technical Hint (Optional/Hidden for non-devs but kept in DOM for debugging) */}
        {error.digest && (
          <div className="mb-8 rounded-lg bg-slate-100 p-3 text-xs font-mono text-slate-400">
            Error ID: {error.digest}
          </div>
        )}

        {/* Recovery Options */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => reset()}
            className="group flex items-center gap-2 rounded-xl bg-sky-800 px-8 py-3.5 font-heading text-sm font-semibold text-white shadow-lg transition-all hover:bg-sky-700 active:scale-95"
          >
            <RefreshCcw
              size={18}
              className="transition-transform group-hover:rotate-180 duration-500"
            />
            Try Refreshing
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-3.5 font-heading text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50 active:scale-95"
          >
            <Home size={18} />
            Home Dashboard
          </Link>
        </div>

        {/* Background Gradients */}
        <div className="fixed -bottom-40 left-0 -z-10 h-96 w-96 rounded-full bg-red-500/5 blur-[120px]" />
        <div className="fixed -top-40 right-0 -z-10 h-96 w-96 rounded-full bg-sky-500/5 blur-[120px]" />
      </div>
    </div>
  );
}
