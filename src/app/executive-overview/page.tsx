"use client";

import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/cards";
import KpiCard from "@/components/ui/KpiCard";
import MetricCard from "@/components/ui/MetricCard";
import TabGroup from "@/components/ui/TabGroup";
import RadarChartComponent from "@/components/charts/RadarChartComponent";
import FunnelConversionChart from "@/components/charts/FunnelConversionChart";
import LeadCountBarChart from "@/components/charts/LeadCountBarChart";
import { ArrowDown, ArrowUp } from "lucide-react";
import {
  kpiCards,
  funnelConversionsData,
  radarChartData,
  leadCountByDOMData,
  demandOverviewData,
  performanceTableData,
} from "@/data/executive-overview";
import { useFilterStore } from "@/store/useFilterStore";
import { CHART_COLORS } from "@/lib/constants";

const d = kpiCards;

export default function ExecutiveOverview() {
  const { demandViewMode, setDemandViewMode } = useFilterStore();

  return (
    <div className="space-y-5">
      <PageHeader title="AMH Executive Overview" />

      {/* KPI Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3">
        {/* 1. Leases Signed (MTD) */}
        <KpiCard>
          <div className="text-xs font-medium font-heading text-slate-700">
            {d.leasesSigned.title}
          </div>
          <div className="flex items-start justify-between mt-1">
            <div>
              <div className="text-3xl sm:text-4xl font-bold font-heading text-slate-800">
                {d.leasesSigned.value}
              </div>
              <div className="flex items-center gap-2 mt-1 text-[10px] font-heading">
                <span className="flex items-center gap-0.5 text-red-600">
                  <ArrowDown className="w-2.5 h-2.5" /> Current{" "}
                  {d.leasesSigned.current}
                </span>
                <span className="flex items-center gap-0.5 text-green-600">
                  <ArrowUp className="w-2.5 h-2.5" /> Prior Day{" "}
                  {d.leasesSigned.priorDay}
                </span>
              </div>
              <div className="text-[10px] font-heading text-slate-600 mt-1">
                {d.leasesSigned.pendingText}
              </div>
            </div>
            <div className="flex items-end gap-[3px] h-12 shrink-0">
              {d.leasesSigned.weeklyBars.map((bar, i) => (
                <div key={i} className="flex flex-col items-center gap-0.5">
                  <div
                    className="w-3 bg-sky-800/60 rounded-t-sm"
                    style={{ height: `${(bar.value / 100) * 40}px` }}
                  />
                  <span className="text-[7px] text-slate-500">{bar.day}</span>
                </div>
              ))}
            </div>
          </div>
        </KpiCard>

        {/* 2. Lease Pacing */}
        <KpiCard>
          <div className="text-xs font-medium font-heading text-slate-700">
            {d.leasePacing.title}
          </div>
          <div className="flex items-start justify-between mt-1">
            <div>
              <div className="text-3xl sm:text-4xl font-bold font-heading text-slate-800">
                {d.leasePacing.value}
              </div>
              <div className="text-[10px] font-heading text-slate-600">
                {d.leasePacing.subLabel}
              </div>
            </div>
            <div className="flex items-end gap-[3px] h-12 shrink-0">
              {d.leasePacing.bars.map((v, i) => (
                <div
                  key={i}
                  className="w-3 bg-sky-800/50 rounded-t-sm"
                  style={{ height: `${(v / 100) * 40}px` }}
                />
              ))}
            </div>
          </div>
          <div className="mt-1">
            <div className="text-[10px] font-heading text-slate-600 mb-0.5">
              {d.leasePacing.approvedApps} approved applications
            </div>
            <div className="h-2 bg-white/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-700 to-purple-500 rounded-full"
                style={{ width: `${d.leasePacing.progressPercent}%` }}
              />
            </div>
          </div>
        </KpiCard>

        {/* 3. Leasing Spread */}
        <KpiCard>
          <div className="text-xs font-medium font-heading text-slate-700">
            {d.leasingSpread.title}
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <div className="text-[10px] font-heading text-slate-600 font-medium">
                Releasing
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-heading text-slate-800">
                {d.leasingSpread.releasing.value}
              </div>
              <div className="text-[10px] font-heading text-green-600 font-medium">
                {d.leasingSpread.releasing.change}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-heading text-slate-600 font-medium">
                Renewal
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-heading text-slate-800">
                {d.leasingSpread.renewal.value}
              </div>
              <div className="text-[10px] font-heading text-green-600 font-medium">
                {d.leasingSpread.renewal.change}
              </div>
            </div>
          </div>
        </KpiCard>

        {/* 4. Current Fully Marketed Inventory */}
        <KpiCard>
          <div className="text-xs font-medium font-heading text-slate-700">
            {d.inventory.title}
          </div>
          <div className="flex items-start justify-between mt-1">
            <div>
              <div className="text-3xl sm:text-4xl font-bold font-heading text-slate-800">
                {d.inventory.value}
              </div>
              <div className="text-[10px] font-heading text-slate-600">
                {d.inventory.agedPercent} aged {d.inventory.agedDays}
              </div>
            </div>
            <div className="flex items-end gap-[3px] h-12 shrink-0">
              {d.inventory.bars.map((v, i) => (
                <div
                  key={i}
                  className="w-3 bg-sky-800/50 rounded-t-sm"
                  style={{ height: `${(v / 100) * 40}px` }}
                />
              ))}
            </div>
          </div>
        </KpiCard>

        {/* 5. Lead Pacing */}
        <KpiCard>
          <div className="text-xs font-medium font-heading text-slate-700">
            {d.leadPacing.title}
          </div>
          <div className="mt-1">
            <div className="text-3xl sm:text-4xl font-bold font-heading text-slate-800">
              {d.leadPacing.value}
            </div>
            <div className="text-[10px] font-heading text-slate-600">
              {d.leadPacing.subLabel}
            </div>
            <div className="flex items-center gap-1 mt-2 text-[10px] font-heading text-green-600">
              <ArrowUp className="w-2.5 h-2.5" />
              {d.leadPacing.pacingNote}
            </div>
          </div>
        </KpiCard>
      </div>

      {/* Charts Row - 3 charts side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Funnel Conversions">
          <FunnelConversionChart data={funnelConversionsData} height={280} />
        </Card>

        <Card title="Conversions By Days Monitored">
          <RadarChartComponent
            data={radarChartData}
            radars={[
              {
                dataKey: "current",
                color: CHART_COLORS.primary,
                name: "Current",
                fillOpacity: 0.3,
              },
              {
                dataKey: "benchmark",
                color: CHART_COLORS.tertiary,
                name: "Benchmark",
                fillOpacity: 0.1,
              },
            ]}
            angleKey="metric"
            height={250}
          />
        </Card>

        <Card title="Lead Count By Days On Market">
          <LeadCountBarChart data={leadCountByDOMData} height={250} />
        </Card>
      </div>

      {/* Demand Overview Section */}
      <div className="bg-gradient-to-r from-[#0B66A6] to-[#123E5D] rounded-2xl p-3 sm:p-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4">
          <h2 className="text-white text-xl font-bold font-heading capitalize">
            Demand Overview
          </h2>
          <TabGroup
            tabs={[
              { label: "Communities", value: "communities" },
              { label: "Properties", value: "properties" },
            ]}
            activeTab={demandViewMode}
            onTabChange={(v) =>
              setDemandViewMode(v as "communities" | "properties")
            }
            variant="pill"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {demandOverviewData.map((metric) => (
            <MetricCard
              key={metric.title}
              title={metric.title}
              pills={metric.pills}
              kpiLabel={metric.kpiLabel}
              kpiValue={metric.kpiValue}
              subMetrics={metric.subMetrics}
              comparisons={metric.comparisons}
              chartTitle={metric.chartTitle}
              chartData={metric.chartData}
            />
          ))}
        </div>
      </div>

      {/* Performance Overview Table */}
      <Card title="Performance Overview" noPadding>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-sky-700 to-sky-600">
                {performanceTableData.headers.map((header) => (
                  <th
                    key={header}
                    className={`px-4 py-3 text-xs font-medium font-heading text-left ${
                      header === performanceTableData.highlightedHeader
                        ? "bg-orange-500/80 text-white"
                        : "text-white"
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {performanceTableData.rows.map((row, index) => (
                <tr
                  key={row.metric}
                  className={`border-b border-neutral-200 ${
                    index % 2 === 0 ? "bg-white" : "bg-sky-50"
                  }`}
                >
                  <td className="px-4 py-3 text-neutral-800 text-sm font-medium font-heading">
                    {row.metric}
                  </td>
                  {performanceTableData.headers.slice(1).map((header) => {
                    const val = row[header as keyof typeof row] as string;
                    const isYoY = header === "YoY";
                    const isNegative = isYoY && val?.startsWith("-");
                    const isHighlighted =
                      header === performanceTableData.highlightedHeader;
                    return (
                      <td
                        key={header}
                        className={`px-4 py-3 text-sm font-normal font-heading text-right ${
                          isHighlighted
                            ? "bg-orange-50 text-neutral-800 font-medium"
                            : isNegative
                              ? "text-red-600"
                              : "text-neutral-800"
                        }`}
                      >
                        {val}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
