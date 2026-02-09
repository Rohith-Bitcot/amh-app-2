"use client";

import { cn } from "@/lib/utils";

interface TabGroupProps {
  tabs: { label: string; value: string }[];
  activeTab: string;
  onTabChange: (value: string) => void;
  variant?: "default" | "pill";
}

export default function TabGroup({ tabs, activeTab, onTabChange, variant = "default" }: TabGroupProps) {
  if (variant === "pill") {
    return (
      <div className="flex items-center bg-sky-50 rounded-lg p-0.5">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onTabChange(tab.value)}
            className={cn(
              "px-3 py-1.5 text-xs font-medium font-heading rounded-md transition-all capitalize",
              activeTab === tab.value
                ? "bg-sky-700 text-white shadow-sm"
                : "text-sky-700 hover:bg-sky-100"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-0.5">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={cn(
            "px-4 py-2 text-sm font-medium font-heading border-b-2 transition-all capitalize",
            activeTab === tab.value
              ? "border-sky-700 text-sky-700"
              : "border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
