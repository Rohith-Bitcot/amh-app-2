import { cn } from "@/lib/utils";

interface KpiCardProps {
  children: React.ReactNode;
  className?: string;
  leasesSigned?: boolean;
}

export default function KpiCard({
  children,
  className,
  leasesSigned,
}: KpiCardProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-b from-metric-from to-metric-to rounded-xl p-4 h-[135px] flex flex-col shadow-sm",
        leasesSigned
          ? "col-span-2 xl:col-span-3 min-w-[300px]"
          : "col-span-1 xl:col-span-2 min-w-[180px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
