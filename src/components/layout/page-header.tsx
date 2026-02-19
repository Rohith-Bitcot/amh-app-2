import { useState } from "react";
import FilterPopup from "@/components/ui/fiter-popup";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  showFilter?: boolean;
  onFilterClick?: () => void;
}

export default function PageHeader({
  title,
  showFilter = true,
  onFilterClick,
}: PageHeaderProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="flex items-center justify-between mb-5 relative">
      <div className="flex flex-col gap-0.5">
        <h1
          className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading capitalize leading-tight sm:leading-8 bg-clip-text text-transparent"
          style={{ backgroundImage: "var(--color-title-gradient)" }}
        >
          {title}
        </h1>
        <div className="flex items-center gap-1">
          <span className="text-neutral-800 text-xs font-normal font-heading capitalize">
            as of today 11:20am
          </span>
          <span className="text-neutral-800/20 text-xs">|</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-500 text-xs font-normal font-heading capitalize">
              live
            </span>
          </span>
        </div>
      </div>

      {showFilter && (
        <div className="relative">
          <button
            onClick={() => {
              setIsFilterOpen(!isFilterOpen);
              onFilterClick?.();
            }}
            className="flex items-center gap-2 px-4 py-1 bg-white rounded-xl shadow-sm text-neutral-700 text-sm font-normal font-heading hover:shadow-md transition-shadow"
          >
            Filters
            <div className="w-4 h-4">
              <Image
                src="/assets/svgs/filter-header.svg"
                alt="Filter icon"
                width={16}
                height={16}
              />
            </div>
          </button>

          {isFilterOpen && (
            <FilterPopup
              onApply={() => setIsFilterOpen(false)}
              onDefault={() => setIsFilterOpen(false)}
              className="mt-2"
            />
          )}
        </div>
      )}
    </div>
  );
}
