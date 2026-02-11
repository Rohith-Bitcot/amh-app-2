"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/cards";
import TabGroup from "@/components/ui/TabGroup";
import StackedBarChart from "@/components/charts/StackedBarChart";
import LineChartComponent from "@/components/charts/LineChartComponent";
import BarChartComponent from "@/components/charts/BarChartComponent";
import {
  leadCountsData,
  leadsNewReturningData,
  timingDistributionData,
  leadCountsBySourceData,
  timingStagesData,
  timingStagesLegend,
  leasingConversionsData,
  showingCountsBySourceData,
  conversionFromPrevStageData,
  applicationMatricData,
  appStagesDurationData,
  appStagesDurationLegend,
  cancellationApprovalData,
  approvalCancellationBySourceData,
  denialReasonData,
  denialReasonLegend,
  websiteData,
  pageViewMarketData,
} from "@/data/funnel-journey";

// Shared mini-table component for this page
function MiniTable({
  title,
  subtitle,
  columns,
  rows,
  toggle,
}: {
  title: string;
  subtitle?: string;
  columns: string[];
  rows: Record<string, string>[];
  toggle?: { options: string[]; active: number };
}) {
  const [activeToggle, setActiveToggle] = useState(toggle?.active ?? 0);
  return (
    <div className="bg-white rounded-2xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] p-3 sm:p-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 mb-3">
        <div>
          <h3 className="text-sm font-bold font-heading text-neutral-800">
            {title}
          </h3>
          {subtitle && (
            <p className="text-[10px] font-heading text-neutral-500">
              {subtitle}
            </p>
          )}
        </div>
        {toggle && (
          <div className="flex bg-gray-100 rounded-full text-[10px] font-heading">
            {toggle.options.map((opt, i) => (
              <button
                key={opt}
                onClick={() => setActiveToggle(i)}
                className={`px-3 py-1 rounded-full transition-colors ${
                  activeToggle === i ? "bg-sky-600 text-white" : "text-gray-600"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-sky-700 to-sky-500">
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-3 py-2 text-white text-xs font-medium font-heading text-left whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className={`border-b border-neutral-200 ${idx % 2 === 0 ? "bg-white" : "bg-sky-50"}`}
              >
                {columns.map((col) => (
                  <td
                    key={col}
                    className="px-3 py-2 text-sm font-heading text-neutral-700 whitespace-nowrap"
                  >
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function FunnelJourney() {
  const [funnelTab, setFunnelTab] = useState("unique-showings");

  return (
    <div className="space-y-5">
      <PageHeader title="Funnel Journey" />

      {/* Section 1: Lead Counts + New vs Returning */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Lead Counts & Registration - horizontal progress bars */}
        <Card title="Lead Counts & Registration">
          <div className="space-y-4">
            {leadCountsData.map((item) => (
              <div key={item.source} className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold font-heading text-neutral-800">
                    {item.source}
                  </span>
                  <span className="text-sm font-heading text-neutral-600">
                    {item.leads.toLocaleString()} Leads
                  </span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${item.regRate}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] font-heading">
                  <span style={{ color: item.color }} className="font-semibold">
                    {item.regRate}% Reg. Rate
                  </span>
                  <span className="text-neutral-500">
                    Avg Time to AMH Account Confirmation {item.avgConfirmTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Leads: New vs Returning */}
        <Card title="Leads: New vs. Returning">
          <LineChartComponent
            data={leadsNewReturningData}
            lines={[
              { dataKey: "newLeads", color: "#0077CA", name: "New" },
              { dataKey: "returning", color: "#FFB217", name: "Returning" },
            ]}
            xAxisKey="month"
            height={220}
            showArea
            showLegend
          />
        </Card>
      </div>

      {/* Section 2: Performance Overview heading */}
      <h2 className="text-sky-700 text-xl font-bold font-heading capitalize">
        Performance Overview
      </h2>

      {/* Section 3: Timing Distribution + Lead Counts by Source */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Timing Distribution - range/bullet chart */}
        <Card title="Timing Distribution (Day/Hs)">
          <div className="flex items-center gap-4 mb-4 text-xs font-heading">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-black" /> Benchmark
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#20A4FF]/40" />{" "}
              Actual
            </span>
          </div>
          <div className="space-y-5">
            {timingDistributionData.map((item) => (
              <div key={item.stage} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-heading">
                  <span className="text-neutral-700 font-medium">
                    {item.stage}
                  </span>
                  <span className="text-neutral-800 font-bold">
                    {item.actual} {item.unit}
                  </span>
                </div>
                <div className="relative h-5 bg-gray-100 rounded-full overflow-hidden">
                  {/* Actual bar */}
                  <div
                    className="absolute top-0 left-0 h-full rounded-full bg-[#20A4FF]/40"
                    style={{ width: `${(item.actual / item.max) * 100}%` }}
                  />
                  {/* Benchmark marker */}
                  <div
                    className="absolute top-0 h-full w-1.5 bg-black rounded-full"
                    style={{ left: `${(item.benchmark / item.max) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-[9px] text-neutral-400 font-heading">
                  <span>{item.min}</span>
                  <span>{item.max}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Lead Counts by Source - small table */}
        <MiniTable
          title="Lead Counts by Source"
          columns={["Source", "T7", "PW", "PY"]}
          rows={leadCountsBySourceData.map((r) => ({
            Source: r.source,
            T7: r.t7,
            PW: r.pw,
            PY: r.py,
          }))}
        />
      </div>

      {/* Section 4: Timing Stages - full width stacked bar */}
      <Card title="Timing Stages" subtitle="Performance across active listings">
        <div className="flex flex-wrap gap-3 mb-3">
          {timingStagesLegend.map((item) => (
            <span
              key={item.key}
              className="flex items-center gap-1.5 text-[10px] font-heading text-neutral-600"
            >
              <span
                className="w-2.5 h-2.5 rounded-sm"
                style={{ backgroundColor: item.color }}
              />
              {item.label}
            </span>
          ))}
        </div>
        <StackedBarChart
          data={timingStagesData}
          bars={timingStagesLegend.map((l) => ({
            dataKey: l.key,
            color: l.color,
            name: l.label,
          }))}
          xAxisKey="month"
          height={320}
        />
      </Card>

      {/* Section 5: Leasing Conversions by Geo & Stage */}
      <Card title="Leasing Conversions by Geo & Stage" noPadding>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-sky-700 to-sky-500">
                <th className="px-4 py-3 text-white text-xs font-medium font-heading text-left">
                  Geo
                </th>
                {leasingConversionsData.headers.slice(1).map((group) =>
                  group.columns.map((col, ci) => (
                    <th
                      key={`${group.group}-${col}`}
                      className={`px-3 py-3 text-white text-xs font-medium font-heading text-center ${
                        group.highlighted ? "bg-white/10" : ""
                      } ${ci === 0 ? "border-l border-white/20" : ""}`}
                    >
                      {ci === 0 ? (
                        <div>
                          <div className="text-[9px] opacity-70 mb-0.5">
                            {group.group}
                          </div>
                          {col}
                        </div>
                      ) : (
                        col
                      )}
                    </th>
                  )),
                )}
              </tr>
            </thead>
            <tbody>
              {leasingConversionsData.rows.map((row, idx) => (
                <tr
                  key={row.geo}
                  className={`border-b border-neutral-200 ${idx % 2 === 0 ? "bg-white" : "bg-sky-50"}`}
                >
                  <td className="px-4 py-3 text-sm font-medium font-heading text-neutral-800">
                    {row.geo}
                  </td>
                  {[
                    row.uniqueShowing,
                    row.appStartSubmit,
                    row.approval,
                    row.approvalToLease,
                  ].map((group, gi) =>
                    group.map((val, vi) => (
                      <td
                        key={`${gi}-${vi}`}
                        className={`px-3 py-3 text-sm font-heading text-neutral-700 text-center ${
                          gi === 1 || gi === 3 ? "bg-sky-50/50" : ""
                        } ${vi === 0 ? "border-l border-neutral-200" : ""}`}
                      >
                        {val}
                      </td>
                    )),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Section 6: Dark Lead Funnel with tabs */}
      <div className="bg-gradient-to-r from-[#004F86] to-[#123E5D] rounded-2xl p-3 sm:p-6">
        <TabGroup
          tabs={[
            { label: "Unique Showings", value: "unique-showings" },
            { label: "Application", value: "application" },
            { label: "Leases", value: "leases" },
          ]}
          activeTab={funnelTab}
          onTabChange={setFunnelTab}
          variant="pill"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
          <MiniTable
            title="Showing counts by source"
            subtitle="Normalized on inventory"
            columns={["Source", "T7", "PW", "PY"]}
            rows={showingCountsBySourceData.map((r) => ({
              Source: r.source,
              T7: r.t7,
              PW: r.pw,
              PY: r.py,
            }))}
            toggle={{ options: ["days posted", "property posted"], active: 0 }}
          />
          <MiniTable
            title="Conversion from previous stage to this stage"
            columns={["Source", "T7", "PW", "PY"]}
            rows={conversionFromPrevStageData.map((r) => ({
              Source: r.source,
              T7: r.t7,
              PW: r.pw,
              PY: r.py,
            }))}
          />
        </div>
      </div>

      {/* Section 7: Application Matric */}
      <Card title="Application matric" noPadding>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-sky-700 to-sky-500">
                {[
                  "Geo",
                  "Denial Rate",
                  "Cancellation Rate",
                  "Self Service",
                  "Avg Applicants per Application",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-white text-xs font-medium font-heading text-left"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {applicationMatricData.map((row, idx) => (
                <tr
                  key={row.geo}
                  className={`border-b border-neutral-200 ${idx % 2 === 0 ? "bg-white" : "bg-sky-50"}`}
                >
                  <td className="px-4 py-3 text-sm font-medium font-heading text-neutral-800">
                    {row.geo}
                  </td>
                  <td className="px-4 py-3 text-sm font-heading text-neutral-700">
                    {row.denialRate}
                  </td>
                  <td className="px-4 py-3 text-sm font-heading text-neutral-700">
                    {row.cancellationRate}
                  </td>
                  <td className="px-4 py-3 text-sm font-heading text-neutral-700">
                    {row.selfService}
                  </td>
                  <td className="px-4 py-3 text-sm font-heading text-neutral-700">
                    {row.avgApplicants}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Section 8: App Stages Duration */}
      <Card
        title="App Stages Duration"
        subtitle="Performance across active listings"
      >
        <div className="flex flex-wrap gap-3 mb-3">
          {appStagesDurationLegend.map((item) => (
            <span
              key={item.key}
              className="flex items-center gap-1.5 text-[10px] font-heading text-neutral-600"
            >
              <span
                className="w-2.5 h-2.5 rounded-sm"
                style={{ backgroundColor: item.color }}
              />
              {item.label}
            </span>
          ))}
        </div>
        <StackedBarChart
          data={appStagesDurationData}
          bars={appStagesDurationLegend.map((l) => ({
            dataKey: l.key,
            color: l.color,
            name: l.label,
          }))}
          xAxisKey="month"
          height={320}
        />
      </Card>

      {/* Section 9: Cancellation/Dropout Rate + Approval & Cancellation by Source */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card title="Cancellation/Dropout Rate & Approval Rate">
          <LineChartComponent
            data={cancellationApprovalData}
            lines={[
              {
                dataKey: "approvalRate",
                color: "#66EA9D",
                name: "Approval Rate",
              },
              {
                dataKey: "cancellation",
                color: "#F66969",
                name: "Cancellation",
              },
            ]}
            xAxisKey="month"
            height={250}
            showArea
            showLegend
          />
        </Card>
        <Card title="% Approval & Cancellation by Source">
          <BarChartComponent
            data={approvalCancellationBySourceData}
            bars={[
              { dataKey: "approval", color: "#66EA9D", name: "Approval" },
              {
                dataKey: "cancellation",
                color: "#F66969",
                name: "Cancellation",
              },
            ]}
            xAxisKey="source"
            height={250}
            layout="vertical"
            showLegend
          />
        </Card>
      </div>

      {/* Section 10: Denial Reason Distribution */}
      <Card
        title="Denial Reason Distribution"
        subtitle="Performance across active listings"
      >
        <div className="flex flex-wrap gap-3 mb-3">
          {denialReasonLegend.map((item) => (
            <span
              key={item.key}
              className="flex items-center gap-1.5 text-[10px] font-heading text-neutral-600"
            >
              <span
                className="w-2.5 h-2.5 rounded-sm"
                style={{ backgroundColor: item.color }}
              />
              {item.label}
            </span>
          ))}
        </div>
        <StackedBarChart
          data={denialReasonData}
          bars={denialReasonLegend.map((l) => ({
            dataKey: l.key,
            color: l.color,
            name: l.label,
          }))}
          xAxisKey="month"
          height={320}
        />
      </Card>

      {/* Section 11: Website + Page View / Market */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card title="Website">
          <BarChartComponent
            data={websiteData}
            bars={[
              { dataKey: "google", color: "#01497B", name: "Google" },
              { dataKey: "meta", color: "#66B1EA", name: "Meta" },
              { dataKey: "tiktok", color: "#66EA9D", name: "Tiktok" },
            ]}
            xAxisKey="category"
            height={280}
            showLegend
          />
        </Card>
        <Card title="Page View / Market">
          <div className="space-y-4">
            {pageViewMarketData.map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="text-xs font-heading text-neutral-500">
                  {item.label}
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-heading text-neutral-500 w-24 shrink-0">
                      {item.period1}
                    </span>
                    <div className="flex-1 h-5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-purple-400/60 to-sky-600"
                        style={{ width: `${(item.value1 / 10) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-heading font-medium text-neutral-700 w-16 text-right">
                      {item.value1} views
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-heading text-neutral-500 w-24 shrink-0">
                      {item.period2}
                    </span>
                    <div className="flex-1 h-5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-green-400"
                        style={{ width: `${(item.value2 / 10) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-heading font-medium text-neutral-700 w-16 text-right">
                      {item.value2} views
                    </span>
                  </div>
                </div>
                <div className="text-right text-xs font-heading font-bold text-green-500">
                  {item.delta}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
