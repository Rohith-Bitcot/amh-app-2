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
        "bg-gradient-to-b from-[#6CA9D3] to-[#CCE9FF] rounded-xl p-4 flex-1 h-[127px]",
        leasesSigned ? "w-[340px] flex-none" : "w-[215px] flex-none",
        className,
      )}
    >
      {children}
    </div>
  );
}
