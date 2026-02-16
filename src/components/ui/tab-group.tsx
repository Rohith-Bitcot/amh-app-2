"use client";

import { cn } from "@/utils/helper-functions";

interface TabGroupProps {
  tabs: { label: string; value: string }[];
  activeTab: string;
  onTabChange: (value: string) => void;
  variant?: "default" | "pill" | "underline-dark";
}

export default function TabGroup({
  tabs,
  activeTab,
  onTabChange,
  variant = "default",
}: Readonly<TabGroupProps>) {
  if (variant === "underline-dark") {
    return (
      <div className="flex items-center border-b border-white/20">
        {tabs.map((tab, index) => (
          <button
            key={tab.value}
            onClick={() => onTabChange(tab.value)}
            className={cn(
              "flex-1 py-3 text-sm font-medium font-heading transition-all duration-300 capitalize whitespace-nowrap relative",
              activeTab === tab.value
                ? "text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-white after:transition-all after:duration-300"
                : "text-white/60 hover:text-white/80",
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
