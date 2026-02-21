import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <div className="max-w-sm text-center">

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
        </div>
      </div>
    </div>
  );
}
