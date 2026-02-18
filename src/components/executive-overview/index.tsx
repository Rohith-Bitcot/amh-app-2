"use client";

import PageHeader from "@/components/layout/page-header";
import Image from "next/image";
import Card from "@/components/ui/cards";
import KpiCard from "@/components/ui/kpi-card";
import MetricCard from "@/components/ui/metric-card";
import TabGroup from "@/components/ui/tab-group";
import ReusableTable from "@/components/ui/reusable-table";
import RadarChartComponent from "@/components/ui/charts/radar-chart";
import FunnelConversionChart from "@/components/ui/charts/funnel-conversation-chart";
import LeadCountBarChart from "@/components/ui/charts/lead-count-bar-chart";
import { ArrowDown, ArrowUp } from "lucide-react";
import {
  kpiCards,
  funnelConversionsData,
  radarChartData,
  leadCountByDOMData,
  demandOverviewData,
  performanceTableData,
} from "@/utils/data/executive-overview";
import { useFilterStore } from "@/store/use-filter-store";
import { LEASES_SIGNED_BAR_DATA, ROUTES_PATH } from "@/utils/constants";
import { useState } from "react";
import { useRouter } from "next/navigation";

const d = kpiCards;

const ChartActions = () => (
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
    <button className="bg-primary-blue text-white flex items-center gap-2 px-3 py-1.5 rounded-xl ml-2 text-[12px] font-medium hover:opacity-90 transition-colors">
      <Image
        src="/assets/svgs/filter 1.svg"
        alt="Filter"
        width={12}
        height={12}
      />
      Weekly
    </button>
  </div>
);

export default function ExecutiveOverview() {
  const router = useRouter();
  const { demandViewMode, setDemandViewMode } = useFilterStore();
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null);

  return (
    <div className="space-y-5">
      <PageHeader title="AMH Executive Overview" />

      {/* KPI Cards Row - Using custom column setup to match 1.5x width of first card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 xl:grid-cols-11 gap-3">
        {/* 1. Leases Signed (MTD) */}
        <KpiCard leasesSigned={true}>
          <div className="text-[10px] font-medium font-heading text-white/90">
            {d.leasesSigned.title}
          </div>
          <div className="flex items-start justify-between h-full">
            <div className="flex flex-col h-full">
              <div className="text-4xl font-bold font-heading text-white">
                {d.leasesSigned.value}
              </div>
              <div className="flex items-center gap-2 mt-1 text-[10px] font-heading">
                <span className="flex items-center gap-1 text-red-500 font-heading">
                  <ArrowDown className="w-3 h-3" /> Current{" "}
                  {d.leasesSigned.current}
                </span>
                <span className="flex items-center gap-0.5 text-green-600">
                  <ArrowUp className="w-3 h-3" /> Prior Day{" "}
                  {d.leasesSigned.priorDay}
                </span>
              </div>
              <div className="text-[12px] font-heading text-slate-600 mt-1 w-full text-white">
                {d.leasesSigned.pendingText}
              </div>
            </div>
            <div className="flex items-end justify-center w-[120px] sm:w-[130px] h-full pb-1">
              <div className="flex items-end gap-[4px] sm:gap-[5px] h-full shrink-0">
                {LEASES_SIGNED_BAR_DATA.map((bar, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-end gap-1 h-full"
                  >
                    <div
                      className={`w-[6px] rounded-full ${!bar.isSpecial ? "bg-white/70" : ""}`}
                      style={{
                        height: bar.h,
                        background: bar.isSpecial
                          ? "linear-gradient(to bottom, transparent 35%, var(--color-primary-blue) 35%), repeating-linear-gradient(135deg, var(--color-leases), var(--color-leases) 1px, var(--color-primary-blue) 1px, var(--color-primary-blue) 2px)"
                          : undefined,
                      }}
                    />
                    <span className="text-[9px] text-white/80 font-bold leading-none">
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
          <div className="text-[10px] font-medium font-heading text-white">
            {d.leasePacing.title}
          </div>
          <div className="flex flex-col justify-start items-start mt-1">
            <div>
              <div className="text-4xl font-bold font-heading text-white">
                {d.leasePacing.value}
              </div>
              <div className="text-[10px] font-heading text-white">
                {d.leasePacing.subLabel}
              </div>
            </div>
            <div className="mt-1">
              <div className="text-[10px] font-heading mb-0.5 text-white">
                {d.leasePacing.approvedApps} approved applications
              </div>
              <div className="bg-white/60 rounded-full overflow-hidden w-[167px] h-[5px]">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${d.leasePacing.progressPercent}%`,
                    background:
                      "linear-gradient(179.15deg, var(--color-purple-accent) -41.63%, var(--color-chart-blue-main) 91.18%)",
                  }}
                />
              </div>
            </div>
          </div>
        </KpiCard>

        {/* 3. Leasing Spread */}
        <KpiCard>
          <div className="text-[10px] font-medium font-heading text-white">
            {d.leasingSpread.title}
          </div>
          <div className="grid grid-cols-2 gap-2 mt-auto pb-1">
            <div>
              <div className="text-[11px] font-heading text-dark-blue font-bold">
                Releasing
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-heading text-white">
                {d.leasingSpread.releasing.value}
              </div>
              <div className="text-[16px] font-heading text-white font-bold">
                {d.leasingSpread.releasing.change}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-heading text-dark-blue font-bold">
                Renewal
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-heading text-white">
                {d.leasingSpread.renewal.value}
              </div>
              <div className="text-[16px] font-heading text-white font-bold">
                {d.leasingSpread.renewal.change}
              </div>
            </div>
          </div>
        </KpiCard>

        {/* 4. Current Fully Marketed Inventory */}
        <KpiCard>
          <div className="text-[10px] font-medium font-heading text-white">
            {d.inventory.title}
          </div>
          <div className="flex items-start justify-between">
            <div className="min-w-0">
              <div className="text-[40px] font-bold font-heading text-white leading-tight">
                {d.inventory.value}
              </div>
              <div className="text-[12px] font-heading text-white/90">
                {d.inventory.agedPercent} aged {d.inventory.agedDays}
              </div>
            </div>
            <div className="flex items-center justify-center w-[70px] sm:w-[80px] h-[65px] self-end pr-2">
              <div className="flex items-end gap-[6px] h-full shrink-0">
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
                        ? "linear-gradient(179.15deg, var(--color-purple-accent) -41.63%, var(--color-primary-blue) 91.18%) top / 100% 23px no-repeat, var(--color-grid-gray)"
                        : "var(--color-grid-gray)",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </KpiCard>

        {/* 5. Lead Pacing */}
        <KpiCard>
          <div className="text-[10px] font-medium font-heading text-white">
            {d.leadPacing.title}
          </div>
          <div className="flex flex-col justify-end h-full gap-1 pb-1">
            <div className="text-[44px] font-bold font-heading text-white leading-none truncate">
              {d.leadPacing.value}
            </div>
            <div className="text-[12px] font-heading text-white/90">
              {d.leadPacing.subLabel}
            </div>
            <div className="flex items-center gap-1 text-[11px] font-heading text-green-success mt-1">
              <ArrowUp className="w-3 h-3" />
              {d.leadPacing.pacingNote}
            </div>
          </div>
        </KpiCard>
      </div>

      {/* Charts Row - 3 charts side by side - RESPONSIVE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Funnel Conversation" headerRight={<ChartActions />}>
          <FunnelConversionChart
            data={funnelConversionsData}
            height={280}
            onBarClick={() => router.push(ROUTES_PATH.FUNNEL_DRILLDOWN)}
          />
        </Card>

        <Card title="Conversions By Days Marketed">
          <RadarChartComponent
            data={radarChartData}
            radars={[
              {
                dataKey: "application",
                color: "var(--color-application)",
                name: "Application",
              },
              {
                dataKey: "leads",
                color: "var(--color-leads)",
                name: "Leads",
              },
              {
                dataKey: "leases",
                color: "var(--color-leases)",
                name: "Leases",
              },
            ]}
            angleKey="metric"
            height={300}
          />
        </Card>

        <Card title="Lead Count By Days On Market">
          <LeadCountBarChart data={leadCountByDOMData} height={300} />
        </Card>
      </div>

      {/* Demand Overview Section */}
      <div className="bg-linear-to-r from-overview-from to-overview-to rounded-2xl p-3 sm:p-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4">
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

      {/* Performance Overview Table */}
      <Card title="Performance Overview" noPadding>
        <ReusableTable
          columns={performanceTableData.headers.map((header) => ({
            accessorKey: header === "Geo" ? "metric" : header,
            header: header,
            enableSorting: true,
            meta: {
              className:
                header === "Geo"
                  ? ""
                  : header === "YoY"
                    ? "w-[80px]"
                    : "w-[95px]",
            },
          }))}
          data={performanceTableData.rows}
          getRowClassName={() => "text-table-text-dark"}
        />
      </Card>
    </div>
  );
}
