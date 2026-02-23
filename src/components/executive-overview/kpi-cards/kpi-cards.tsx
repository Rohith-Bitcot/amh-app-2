import { KpiCardProps } from "@/types/executive-overview-types";
import { cn } from "@/utils/common-services";

export default function KpiCard({
  children,
  className,
  leasesSigned,
}: Readonly<KpiCardProps>) {
  return (
    <div
      className={cn(
        "bg-linear-to-b from-metric-from to-metric-to rounded-xl p-4 min-h-[135px] flex flex-col shadow-sm overflow-hidden",
        leasesSigned
          ? "col-span-2 xl:col-span-3 min-w-[280px]"
          : "col-span-1 xl:col-span-2 min-w-[150px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
