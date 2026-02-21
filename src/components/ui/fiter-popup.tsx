"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/helper-functions";
import { ChevronDown } from "lucide-react";

interface FilterPopupProps {
  onApply?: () => void;
  onDefault?: () => void;
  className?: string;
}

export default function FilterPopup({
  onApply,
  onDefault,
  className,
}: Readonly<FilterPopupProps>) {
  const [timeRange, setTimeRange] = useState("Month");
  const [currentInventoryOnly, setCurrentInventoryOnly] = useState(true);

  const timeRanges = ["Month", "Quarter", "Year"];

  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-[0px_8px_30px_rgba(0,0,0,0.12)] border border-neutral-100 p-4 w-[260px] absolute right-0 top-11 z-50",
        className,
      )}
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-neutral-700 text-[14px] font-bold font-heading">
          Filter
        </h3>

        {/* Time Range Tabs */}
        <div className="flex items-center w-full border border-neutral-200 rounded-full p-0.5 h-[32px]">
          {timeRanges.map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={cn(
                "flex-1 h-full rounded-full text-[12px] font-medium transition-all",
                timeRange === range
                  ? "bg-primary-blue text-white"
                  : "bg-transparent text-neutral-600",
              )}
            >
              {range}
            </button>
          ))}
        </div>

        {/* Dropdowns */}
        <div className="flex flex-col gap-2.5">
          <div className="relative">
            <button className="w-full flex items-center justify-between px-3 h-[34px] bg-white border border-neutral-200 rounded-full text-[12px] text-neutral-700 font-medium">
              Geo rollup: District
              <ChevronDown className="w-3 h-3 text-neutral-500" />
            </button>
          </div>
          <div className="relative">
            <button className="w-full flex items-center justify-between px-3 h-[34px] bg-white border border-neutral-200 rounded-full text-[12px] text-neutral-700 font-medium">
              Same Home
              <ChevronDown className="w-3 h-3 text-neutral-500" />
            </button>
          </div>
        </div>

        {/* Checkbox */}
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            className="sr-only"
            checked={currentInventoryOnly}
            onChange={(e) => setCurrentInventoryOnly(e.target.checked)}
          />
          <div className="relative w-[15px] h-[15px] flex items-center justify-center">
            <Image
              src="/assets/svgs/Rectangle 3468541.svg"
              alt="Checkbox border"
              width={15}
              height={15}
              className="absolute inset-0"
            />
            {currentInventoryOnly && (
              <Image
                src="/assets/svgs/Rectangle 3468542.svg"
                alt="Checked state"
                width={9}
                height={9}
                className="relative top-px-1.5"
              />
            )}
          </div>
          <span className="text-[12px] text-neutral-700 font-medium">
            Current Inventory Only
          </span>
        </label>

        {/* Buttons */}
        <div className="flex items-center gap-2 mt-1">
          <button
            onClick={onDefault}
            className="flex-1 h-[34px] border border-primary-blue text-primary-blue rounded-lg text-[12px] font-bold hover:bg-neutral-50 transition-colors"
          >
            Default
          </button>
          <button
            onClick={onApply}
            className="flex-1 h-[34px] bg-primary-blue text-white rounded-lg text-[12px] font-bold hover:opacity-90 transition-colors"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
