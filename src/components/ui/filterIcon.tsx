
import Image from "next/image";

export const FilterIcon = ({ className }: { className?: string }) => (
  <div className={`flex flex-col items-center mt-0.5 ${className ?? ""}`}>
    <Image src="/assets/svgs/sort.svg" alt="sort" width={14} height={6} />
  </div>
);
