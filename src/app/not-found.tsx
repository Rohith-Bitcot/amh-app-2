import Link from "next/link";
import { MoveLeft, Search } from "lucide-react";
import React from "react";

/**
 * Premium 404 Not Found Page.
 * Features a clean, dashboard-consistent design with helpful navigation.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <div className="max-w-sm text-center">
        {/* Animated Icon Container */}
        <div className="relative mx-auto mb-8 block h-32 w-32">
          <div className="absolute inset-0 animate-pulse rounded-full bg-sky-100 opacity-50" />
          <div className="flex h-full w-full items-center justify-center rounded-full bg-sky-50 text-sky-800">
            <Search size={56} strokeWidth={1.5} className="animate-bounce" />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="mb-4 font-heading text-6xl font-black tracking-tight text-sky-900 lg:text-8xl">
          404
        </h1>
        <h2 className="mb-3 text-2xl font-bold text-slate-800">
          Page Not Found
        </h2>
        <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-slate-500">
          The page you&apos;re searching for seems to have vanished or moved.
          Let&apos;s get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-xl bg-sky-800 px-8 py-3.5 font-heading text-sm font-semibold text-white shadow-lg transition-all hover:bg-sky-700 hover:shadow-sky-800/20 active:scale-95"
          >
            <MoveLeft
              size={18}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Dashboard
          </Link>
          <a
            href="mailto:support@amh.com"
            className="rounded-xl border border-slate-200 bg-white px-8 py-3.5 font-heading text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50 active:scale-95"
          >
            Contact Support
          </a>
        </div>

        {/* Decorative background elements */}
        <div className="fixed -bottom-20 -left-20 -z-10 h-80 w-80 rounded-full bg-sky-600/5 blur-3xl" />
        <div className="fixed -right-20 -top-20 -z-10 h-80 w-80 rounded-full bg-sky-600/5 blur-3xl" />
      </div>
    </div>
  );
}
