import MetricCard from "@/components/ui/metric-card";
import TabGroup from "@/components/ui/tab-group";
import {
  demandOverviewData,
  demandOverviewTabs,
} from "@/utils/data/executive-overview";
import React, { useState } from "react";
import { useFilterStore } from "@/store/use-filter-store";

const DemandOverviewComponent = () => {
  const { demandViewMode, setDemandViewMode } = useFilterStore();
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null);

  return (
    <div className="bg-linear-to-r from-overview-from to-overview-to rounded-2xl p-3 sm:p-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4">
        <h2 className="text-white text-xl font-bold font-heading capitalize">
          Demand Overview
        </h2>
        <TabGroup
          tabs={demandOverviewTabs}
          activeTab={demandViewMode}
          onTabChange={(v) =>
            setDemandViewMode(v as "perPostedDay" | "totalCounts")
          }
          variant="pill"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
        {demandOverviewData.map((metric) => (
          <MetricCard
            key={metric.title}
            title={metric.title}
            kpiLabel={metric.kpiLabel}
            kpiValue={metric.kpiValue}
            subMetrics={metric.subMetrics}
            comparisons={metric.comparisons}
            chartTitle={metric.chartTitle}
            chartData={metric.chartData}
            isExpanded={expandedTitle === metric.title}
            onToggle={() => {
              setExpandedTitle((prev) =>
                prev === metric.title ? null : metric.title,
              );
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DemandOverviewComponent;
