"use client";

import PageHeader from "@/components/layout/page-header";
import Card from "@/components/ui/card";
import KpiCard from "@/components/ui/kpi-card";
import MetricCard from "@/components/ui/metric-card";
import TabGroup from "@/components/ui/tab-group";
import RadarChartComponent from "@/components/charts/radar-chart-component";
import FunnelConversionChart from "@/components/charts/funnel-conversation-chart";
import LeadCountBarChart from "@/components/charts/lead-count-bar-chart";
import { ArrowDown, ArrowUp } from "lucide-react";
import {
  kpiCards,
  funnelConversionsData,
  radarChartData,
  leadCountByDOMData,
  demandOverviewData,
  performanceTableData,
} from "@/data/executive-overview";
import { useFilterStore } from "@/store/use-filter-store";
import { LEASES_SIGNED_BAR_DATA } from "@/utils/constants";

import { useState } from "react";
const d = kpiCards;

export default function ExecutiveOverview() {
  const { demandViewMode, setDemandViewMode } = useFilterStore();
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null);

  return (
    <div className="space-y-5">
      <PageHeader title="AMH Executive Overview" />

      {/* KPI Cards Row */}
      <div className="flex gap-3">
        {/* 1. Leases Signed (MTD) */}
        <KpiCard leasesSigned={true}>
          <div className="text-xs font-medium font-heading text-slate-700 text-white">
            {d.leasesSigned.title}
          </div>
          <div className="flex items-start justify-between mt-1">
            <div>
              <div className="text-4xl font-bold font-heading text-slate-800 text-white">
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
              <div className="text-[12px] font-heading text-slate-600 mt-1 w-full text-white">
                {d.leasesSigned.pendingText}
              </div>
            </div>
            <div className="flex items-center justify-center w-[140px] h-[105px]">
              <div className="flex items-end gap-[5px] h-14 shrink-0 ">
                {LEASES_SIGNED_BAR_DATA.map((bar, i) => (
                  <div key={i} className="flex flex-col items-center gap-0.5">
                    <div
                      className={`w-[8px] rounded-full ${!bar.isSpecial ? "bg-[#E9ECF1]" : ""}`}
                      style={{
                        height: bar.h,
                        background: bar.isSpecial
                          ? "linear-gradient(179.15deg, #8C68D5 -41.63%, #01497B 91.18%)"
                          : undefined,
                      }}
                    />
                    <span className="text-[9px] text-white font-400">
                      {bar.day}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </KpiCard>

        {/* 2. Lease Pacing */}
        <KpiCard>
          <div className="text-xs font-medium font-heading text-slate-700 text-white">
            {d.leasePacing.title}
          </div>
          <div className="flex items-start justify-between mt-1">
            <div>
              <div className="text-4xl font-bold font-heading text-slate-800 text-white">
                {d.leasePacing.value}
              </div>
              <div className="text-[10px] font-heading text-slate-600 text-white">
                {d.leasePacing.subLabel}
              </div>
            </div>
            {/* <div className="flex items-end gap-[3px] h-12 shrink-0">
              {d.leasePacing.bars.map((v, i) => (
                <div
                  key={i}
                  className="w-3 bg-sky-800/50 rounded-t-sm"
                  style={{ height: `${(v / 100) * 40}px` }}
                />
              ))}
            </div> */}
          </div>
          <div className="mt-1">
            <div className="text-[10px] font-heading text-slate-600 mb-0.5 text-white">
              {d.leasePacing.approvedApps} approved applications
            </div>
            <div className="h-2 bg-white/60 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${d.leasePacing.progressPercent}%`,
                  background:
                    "linear-gradient(179.15deg, #8C68D5 -41.63%, #01497B 91.18%)",
                }}
              />
            </div>
          </div>
        </KpiCard>

        {/* 3. Leasing Spread */}
        <KpiCard>
          <div className="text-xs font-medium font-heading text-slate-700 text-white">
            {d.leasingSpread.title}
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <div className="text-[10px] font-heading text-slate-600 font-medium">
                Releasing
              </div>
              <div className="text-3xl font-bold font-heading text-slate-800 text-white">
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
              <div className="text-3xl font-bold font-heading text-slate-800 text-white">
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
          <div className="text-xs font-medium font-heading text-slate-700 text-white">
            {d.inventory.title}
          </div>
          <div className="flex items-start justify-between mt-1">
            <div>
              <div className="text-[35px] font-bold font-heading text-slate-800 text-white">
                {d.inventory.value}
              </div>
              <div className="text-[10px] font-heading text-slate-600 text-white">
                {d.inventory.agedPercent} aged {d.inventory.agedDays}
              </div>
            </div>
            <div className="flex items-center justify-center w-[80px] h-[65px]">
              <div className="flex items-end gap-[5px] h-12 shrink-0">
                {[
                  { h: "46px" },
                  { h: "34px" },
                  { h: "46px", isSplit: true },
                ].map((bar, i) => (
                  <div
                    key={i}
                    className="w-[8px] rounded-full"
                    style={{
                      height: bar.h,
                      background: bar.isSplit
                        ? "linear-gradient(179.15deg, #8C68D5 -41.63%, #01497B 91.18%) top / 100% 23px no-repeat, #E9ECF1"
                        : "#E9ECF1",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </KpiCard>

        {/* 5. Lead Pacing */}
        <KpiCard>
          <div className="text-xs font-medium font-heading text-slate-700 text-white">
            {d.leadPacing.title}
          </div>
          <div className="mt-1">
            <div className="text-4xl font-bold font-heading text-slate-800 text-white">
              {d.leadPacing.value}
            </div>
            <div className="text-[10px] font-heading text-slate-600 text-white">
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
      <div className="grid grid-cols-3 gap-4">
        <Card title="Funnel Conversions">
          <FunnelConversionChart data={funnelConversionsData} height={280} />
        </Card>

        <Card title="Conversions By Days Monitored">
          <RadarChartComponent
            data={radarChartData}
            radars={[
              {
                dataKey: "application",
                color: "#66EA9D",
                name: "Application",
                fillOpacity: 0.4,
              },
              {
                dataKey: "leads",
                color: "#E1EA66",
                name: "Leads",
                fillOpacity: 0.4,
              },
              {
                dataKey: "leases",
                color: "#EA8566",
                name: "Leases",
                fillOpacity: 0.4,
              },
            ]}
            angleKey="metric"
            height={300}
          />
        </Card>

        <Card title="Lead Count By Days On Market">
          <LeadCountBarChart data={leadCountByDOMData} height={250} />
        </Card>
      </div>

      {/* Demand Overview Section */}
      <div className="bg-gradient-to-r from-[#0B66A6] to-[#123E5D] rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-xl font-bold font-heading capitalize">
            Demand Overview
          </h2>
          <TabGroup
            tabs={[
              { label: "Per posted day", value: "perPostedDay" },
              { label: "Total counts", value: "totalCounts" },
            ]}
            activeTab={demandViewMode}
            onTabChange={(v) =>
              setDemandViewMode(v as "perPostedDay" | "totalCounts")
            }
            variant="pill"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 items-start">
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
