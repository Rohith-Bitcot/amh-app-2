import { cn } from "@/lib/utils";

interface KpiCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function KpiCard({ children, className }: KpiCardProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-b from-[#6CA9D3] to-[#CCE9FF] rounded-xl p-3 sm:p-4 min-w-0",
        className
      )}
    >
      {children}
    </div>
  );
}
