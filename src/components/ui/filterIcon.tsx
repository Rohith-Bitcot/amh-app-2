
import Image from "next/image";

export const FilterIcon = ({ className }: { className?: string }) => (
  <div className={`inline-flex items-center justify-center shrink-0 w-[14px] h-[6px] ${className ?? ""}`}>
    <Image src="/assets/svgs/sort.svg" alt="sort" width={14} height={6} className="shrink-0" />
  </div>
);
