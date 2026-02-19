import React from "react";

/**
 * Global Loading component for Next.js app directory.
 * Provides a premium, smooth loading experience with a pulsing logo and glassmorphism backdrop.
 */
export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-slate-50/80 backdrop-blur-sm">
      <div className="relative flex flex-col items-center">
        {/* Animated outer ring */}
        <div className="absolute h-24 w-24 animate-ping rounded-full bg-sky-800/20 duration-2000" />

        {/* Spinning border */}
        <div className="h-20 w-20 animate-spin rounded-full border-4 border-sky-100 border-t-sky-800" />

        {/* Pulsing Text or Logo placeholder */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <span className="text-xl font-bold tracking-wider text-sky-900 animate-pulse">
            AMH DEMAND
          </span>
          <div className="flex gap-1">
            <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-800 [animation-delay:-0.3s]" />
            <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-800 [animation-delay:-0.15s]" />
            <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-800" />
          </div>
        </div>
      </div>

      {/* Decorative background elements consistent with the app's theme */}
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-sky-600/10 blur-3xl" />
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-sky-600/10 blur-3xl" />
    </div>
  );
}
