"use client";

import Image from "next/image";

export const ChartActions = ({
  filter
}: {
  filter: boolean;
}) => (
  <div className="flex items-center gap-1">
    <button className="p-1 hover:opacity-80 transition-opacity">
      <Image
        src="/assets/svgs/bar chart.svg"
        alt="Bar View"
        width={16}
        height={16}
      />
    </button>
    <button className="p-1 hover:opacity-80 transition-opacity">
      <Image
        src="/assets/svgs/table.svg"
        alt="Table View"
        width={18}
        height={18}
      />
    </button>
    {filter &&
        <button className="bg-primary-blue text-white flex items-center gap-2 px-3 py-1.5 rounded-xl ml-2 text-[12px] font-medium hover:opacity-90 transition-colors">
      <Image
        src="/assets/svgs/filter 1.svg"
        alt="Filter"
        width={12}
        height={12}
      />
      Weekly
    </button>
    }
  </div>
);
