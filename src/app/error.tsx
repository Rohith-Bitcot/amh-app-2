"use client";

import { useEffect } from "react";
import ErrorUI from "@/components/ui/error-ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex h-full min-h-[60vh] w-full items-center justify-center rounded-2xl bg-white p-8 shadow-card">
      <ErrorUI reset={reset} />
    </div>
  );
}
