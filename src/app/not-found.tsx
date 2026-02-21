import Link from "next/link";
import { MoveLeft, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex h-full min-h-[calc(100vh-150px)] w-full items-center justify-center px-4">
      <div className="bg-primary-blue text-white rounded-[16px] p-10 max-w-[480px] w-full text-center shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white">
          <AlertCircle className="h-8 w-8 text-primary-blue" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h1 className="mb-4 text-[28px] font-bold font-heading tracking-tight text-white">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="mb-10 text-[15px] text-white/90 leading-relaxed font-heading px-2">
          The page you&apos;re searching for seems to have vanished or moved. Let&apos;s get you back on track.
        </p>

        {/* Action Button */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg bg-white px-8 py-2.5 text-sm font-bold font-heading text-primary-blue transition-transform hover:scale-105 active:scale-95 shadow-sm"
          >
            <MoveLeft size={16} strokeWidth={2} />
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
