
import Image from "next/image";

export const FilterIcon = ({ className }: { className?: string }) => (
  <div className={`flex flex-col items-center ${className ?? ""}`} style={{ gap: "2px" }}>
    <Image src="/assets/svgs/sort-1.svg" alt="sort line 1" width={14} height={2} />
    <Image src="/assets/svgs/sort-2.svg" alt="sort line 2" width={8} height={2} />
    <Image src="/assets/svgs/sort-3.svg" alt="sort line 3" width={4} height={2} />
  </div>
);
