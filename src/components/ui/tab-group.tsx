"use client";

import { TabGroupProps } from "@/types/common-types";
import { cn } from "@/utils/common-services";

export default function TabGroup({
  tabs,
  activeTab,
  onTabChange,
  variant = "default",
}: Readonly<TabGroupProps>) {
  if (variant === "underline-dark") {
    return (
      <div className="flex items-center -mt-5 gap-[15px]">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onTabChange(tab.value)}
            className={cn(
              "flex-1 py-3 text-[15px] font-medium transition-all duration-300 capitalize whitespace-nowrap text-left border-b-[2.67px]",
              activeTab === tab.value
                ? "text-white border-white"
                : "text-white/60 hover:text-white/80 border-white/20",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  }

  if (variant === "pill") {
    return (
      <div className="flex items-center bg-sky-50 rounded-lg p-0.5 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onTabChange(tab.value)}
            className={cn(
              "px-3 py-1.5 text-xs font-medium font-heading rounded-md transition-all capitalize whitespace-nowrap",
              activeTab === tab.value
                ? "bg-sky-700 text-white shadow-sm"
                : "text-sky-700 hover:bg-sky-100",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-0.5 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={cn(
            "px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium font-heading border-b-2 transition-all capitalize whitespace-nowrap",
            activeTab === tab.value
              ? "border-sky-700 text-sky-700"
              : "border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300",
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
