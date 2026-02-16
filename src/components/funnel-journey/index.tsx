"use client";

import { chartTheme } from "@/lib/chart-theme";
import { useState } from "react";
import PageHeader from "@/components/layout/page-header";
import Card from "@/components/ui/cards";
import TabGroup from "@/components/ui/tab-group";
import StackedBarChart from "@/components/charts/stacked-bar-chart";
import LineChartComponent from "@/components/charts/line-chart";
import BarChartComponent from "@/components/charts/bar-chart-component";
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
}: Readonly<{
  title: string;
  subtitle?: string;
  columns: string[];
  rows: Record<string, string>[];
  toggle?: { options: string[]; active: number };
}>) {
  const [activeToggle, setActiveToggle] = useState(toggle?.active ?? 0);
  return (
    <div className="bg-white rounded-2xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] p-3 sm:p-4 flex flex-col h-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 mb-3 min-h-[52px]">
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
      <div className="overflow-x-auto flex-1 border border-neutral-200 rounded-lg">
        <table className="w-full h-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-sky-700 to-sky-500">
              {columns.map((col, idx) => (
                <th
                  key={col}
                  className={`px-4 py-3 text-white text-sm font-semibold font-heading whitespace-nowrap border-r border-sky-600 last:border-r-0 ${
                    idx === 0 ? "text-left" : "text-center"
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx + 1}
                className={`${idx % 2 === 0 ? "bg-white" : "bg-sky-50"}`}
                style={{ height: `${100 / rows.length}%` }}
              >
                {columns.map((col, colIdx) => (
                  <td
                    key={col}
                    className={`px-4 py-4 text-sm font-heading text-neutral-700 whitespace-nowrap border-r border-t border-neutral-200 last:border-r-0 ${
                      colIdx === 0 ? "text-left font-semibold" : "text-center"
                    }`}
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

const FunnelJourney = () => {
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
                <div className="h-5 bg-gray-100 rounded overflow-hidden">
                  <div
                    className="h-full transition-all"
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
              {
                dataKey: "newLeads",
                color: chartTheme.colors.palette.newLeads,
                name: "New",
              },
              {
                dataKey: "returning",
                color: chartTheme.colors.palette.returning,
                name: "Returning",
                dashed: true,
              },
            ]}
            xAxisKey="month"
            height={220}
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
          {/* Legend at top right */}
          <div className="flex items-center justify-end gap-4 mb-6 text-xs font-heading">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-black" /> Benchmark
            </span>
            <span className="flex items-center gap-1.5">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: chartTheme.colors.palette.actual }}
              />{" "}
              Actual
            </span>
          </div>

          {/* Chart area */}
          <div className="space-y-6">
            {timingDistributionData.map((item) => {
              const maxScale = 24; // Fixed 24-hour scale for all bars
              const actualPercent = (item.actual / maxScale) * 100;
              const benchmarkPercent = (item.benchmark / maxScale) * 100;

              return (
                <div key={item.stage}>
                  {/* Stage name and range */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold font-heading text-neutral-800">
                      {item.stage}
                    </span>
                    <span className="text-xs font-heading text-neutral-500">
                      Range: {item.min} - {item.max} {item.unit}
                    </span>
                  </div>

                  {/* Bar chart with shared scale */}
                  <div className="relative h-8 bg-gray-100 rounded">
                    {/* Actual bar (light blue) - extends to actual value + extra width */}
                    <div
                      className="absolute top-0 left-10 h-full"
                      style={{
                        backgroundColor: chartTheme.colors.palette.actual,
                        width: `${actualPercent + 20}%`,
                      }}
                    />

                    {/* Benchmark bar (dark/black) - sits on top, extends to benchmark */}
                    <div
                      className="absolute top-3 left-10 h-2.5 z-[5]"
                      style={{
                        backgroundColor: chartTheme.colors.palette.benchmark,
                        width: `${benchmarkPercent}%`,
                      }}
                    />

                    {/* Actual value label - positioned above the actual bar */}
                    <div
                      className="absolute -top-5 text-xs font-heading font-semibold text-neutral-800"
                      style={{
                        left: `${actualPercent}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      {item.actual} {item.unit}
                    </div>

                    {/* Benchmark marker (black vertical line) - centered horizontally in blue bar */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 h-full w-0.5 bg-blue-500"
                      style={{ left: `${actualPercent / 2 + 10}%` }}
                    />
                  </div>
                </div>
              );
            })}

            {/* X-axis scale (0-24) */}
            <div className="relative mt-4">
              <div className="flex justify-between text-xs font-heading text-neutral-600">
                {[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24].map((val) => (
                  <span key={val} className="w-8 text-center">
                    {val}
                  </span>
                ))}
              </div>
            </div>
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
          customLabel={{
            valueKey: "totalDays",
            deltaKey: "delta",
            deltaPositiveKey: "deltaPositive",
            suffix: "d",
          }}
        />
      </Card>

      {/* Section 5: Leasing Conversions by Geo & Stage */}
      <Card title="Leasing Conversions by Geo & Stage" noPadding>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              {/* First row: Main category headers */}
              <tr className="bg-gradient-to-r from-sky-700 to-sky-500">
                <th className="px-4 py-3 text-white text-sm font-semibold font-heading text-center border-r border-white/20">
                  <div className="flex items-center justify-center gap-2">
                    Geo
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <line
                        x1="4"
                        y1="6"
                        x2="20"
                        y2="6"
                        strokeLinecap="round"
                      />
                      <line
                        x1="7"
                        y1="12"
                        x2="17"
                        y2="12"
                        strokeLinecap="round"
                      />
                      <line
                        x1="10"
                        y1="18"
                        x2="14"
                        y2="18"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </th>
                <th
                  colSpan={3}
                  className="px-3 py-2 text-white text-sm font-semibold font-heading text-center border-r border-white/20"
                >
                  Unique Showing
                </th>
                <th
                  colSpan={3}
                  className="px-3 py-2 text-white text-sm font-semibold font-heading text-center border-r border-white/20"
                >
                  App Start to Submit
                </th>
                <th
                  colSpan={3}
                  className="px-3 py-2 text-white text-sm font-semibold font-heading text-center border-r border-white/20"
                >
                  Approval
                </th>
                <th
                  colSpan={3}
                  className="px-3 py-2 text-white text-sm font-semibold font-heading text-center"
                >
                  Approval to Lease
                </th>
              </tr>
              {/* Second row: Sub-column headers */}
              <tr className="bg-sky-100 border-b border-neutral-300">
                {/* District under Geo */}
                <th className="px-4 py-2 text-neutral-700 text-xs font-medium font-heading text-center border-r border-neutral-300">
                  District
                </th>
                {/* Unique Showing sub-columns */}
                <th className="px-3 py-2 text-neutral-700 text-xs font-medium font-heading text-center">
                  T7
                </th>
                <th className="px-3 py-2 text-neutral-700 text-xs font-medium font-heading text-center">
                  PW
                </th>
                <th className="px-3 py-2 text-neutral-700 text-xs font-medium font-heading text-center border-r border-neutral-300">
                  PY
                </th>
                {/* App Start to Submit sub-columns */}
                <th className="px-3 py-2 text-neutral-700 text-xs font-medium font-heading text-center">
                  T7
                </th>
                <th className="px-3 py-2 text-neutral-700 text-xs font-medium font-heading text-center">
                  PW
                </th>
                <th className="px-3 py-2 text-neutral-700 text-xs font-medium font-heading text-center border-r border-neutral-300">
                  PY
                </th>
                {/* Approval sub-columns */}
                <th className="px-3 py-2 text-neutral-700 text-xs font-medium font-heading text-center">
                  T7
                </th>
                <th className="px-3 py-2 text-neutral-700 text-xs font-medium font-heading text-center">
                  PW
                </th>
                <th className="px-3 py-2 text-neutral-700 text-xs font-medium font-heading text-center border-r border-neutral-300">
                  PY
                </th>
                {/* Approval to Lease sub-columns */}
                <th className="px-3 py-2 text-neutral-700 text-xs font-medium font-heading text-center">
                  T7
                </th>
                <th className="px-3 py-2 text-neutral-700 text-xs font-medium font-heading text-center">
                  PW
                </th>
                <th className="px-3 py-2 text-neutral-700 text-xs font-medium font-heading text-center">
                  PY
                </th>
              </tr>
            </thead>
            <tbody>
              {leasingConversionsData.rows.map((row, idx) => (
                <tr key={row.geo} className={`border-b border-neutral-200 `}>
                  <td className="px-4 py-3 text-sm font-medium font-heading text-neutral-800 text-center border-r border-neutral-200">
                    {row.geo}
                  </td>
                  {/* Unique Showing values */}
                  {row.uniqueShowing.map((val, vi) => (
                    <td
                      key={`unique-${vi}`}
                      className="px-3 py-3 text-sm font-heading text-neutral-700 text-center border-r border-neutral-200"
                    >
                      {val}
                    </td>
                  ))}
                  {/* App Start to Submit values */}
                  {row.appStartSubmit.map((val, vi) => (
                    <td
                      key={`app-${vi}`}
                      className="px-3 py-3 text-sm font-heading text-neutral-700 text-center bg-sky-100 border-r border-neutral-200"
                    >
                      {val}
                    </td>
                  ))}
                  {/* Approval values */}
                  {row.approval.map((val, vi) => (
                    <td
                      key={`approval-${vi}`}
                      className="px-3 py-3 text-sm font-heading text-neutral-700 text-center border-r border-neutral-200"
                    >
                      {val}
                    </td>
                  ))}
                  {/* Approval to Lease values */}
                  {row.approvalToLease.map((val, vi) => (
                    <td
                      key={`lease-${vi}`}
                      className={`px-3 py-3 text-sm font-heading text-neutral-700 text-center bg-sky-100 ${vi < 2 ? "border-r border-neutral-200" : ""}`}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Section 6: Dark Lead Funnel with tabs */}
      <div
        className="rounded-2xl p-3 sm:p-6"
        style={{
          background: `linear-gradient(to right, ${chartTheme.colors.palette.gradientStart}, ${chartTheme.colors.palette.gradientEnd})`,
        }}
      >
        <TabGroup
          tabs={[
            { label: "Unique Showings", value: "unique-showings" },
            { label: "Application", value: "application" },
            { label: "Leases", value: "leases" },
          ]}
          activeTab={funnelTab}
          onTabChange={setFunnelTab}
          variant="underline-dark"
        />

        {/* Content changes based on active tab */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
          {funnelTab === "unique-showings" && (
            <>
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
                toggle={{
                  options: ["days posted", "property posted"],
                  active: 0,
                }}
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
            </>
          )}

          {funnelTab === "application" && (
            <>
              <MiniTable
                title="Application counts by source"
                subtitle="Normalized on inventory"
                columns={["Source", "T7", "PW", "PY"]}
                rows={showingCountsBySourceData.map((r) => ({
                  Source: r.source,
                  T7: r.t7,
                  PW: r.pw,
                  PY: r.py,
                }))}
                toggle={{
                  options: ["days posted", "property posted"],
                  active: 0,
                }}
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
            </>
          )}

          {funnelTab === "leases" && (
            <>
              <MiniTable
                title="Lease counts by source"
                subtitle="Normalized on inventory"
                columns={["Source", "T7", "PW", "PY"]}
                rows={showingCountsBySourceData.map((r) => ({
                  Source: r.source,
                  T7: r.t7,
                  PW: r.pw,
                  PY: r.py,
                }))}
                toggle={{
                  options: ["days posted", "property posted"],
                  active: 0,
                }}
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
            </>
          )}
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
                ].map((h, idx, arr) => (
                  <th
                    key={h}
                    className={`px-4 py-3 text-white text-xs font-medium font-heading text-center ${idx < arr.length - 1 ? "border-r border-white/20" : ""}`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {h}
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <line
                          x1="4"
                          y1="6"
                          x2="20"
                          y2="6"
                          strokeLinecap="round"
                        />
                        <line
                          x1="7"
                          y1="12"
                          x2="17"
                          y2="12"
                          strokeLinecap="round"
                        />
                        <line
                          x1="10"
                          y1="18"
                          x2="14"
                          y2="18"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
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
                  <td className="px-4 py-3 text-sm font-medium font-heading text-neutral-800 text-center border-r border-neutral-200">
                    {row.geo}
                  </td>
                  <td className="px-4 py-3 text-sm font-heading text-neutral-700 text-center border-r border-neutral-200">
                    {row.denialRate}
                  </td>
                  <td className="px-4 py-3 text-sm font-heading text-neutral-700 text-center border-r border-neutral-200">
                    {row.cancellationRate}
                  </td>
                  <td className="px-4 py-3 text-sm font-heading text-neutral-700 text-center border-r border-neutral-200">
                    {row.selfService}
                  </td>
                  <td className="px-4 py-3 text-sm font-heading text-neutral-700 text-center">
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
          yAxisTicks={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]}
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
                color: chartTheme.colors.palette.approval,
                name: "Approval Rate",
              },
              {
                dataKey: "cancellation",
                color: chartTheme.colors.palette.cancellation,
                name: "Cancellation",
              },
            ]}
            xAxisKey="month"
            height={250}
            showLegend
            yAxisTicks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          />
        </Card>
        <Card title="% Approval & Cancellation by Source">
          <BarChartComponent
            data={approvalCancellationBySourceData}
            bars={[
              {
                dataKey: "approval",
                color: chartTheme.colors.palette.approval,
                name: "Approval",
              },
              {
                dataKey: "cancellation",
                color: chartTheme.colors.palette.cancellation,
                name: "Cancellation",
              },
            ]}
            xAxisKey="source"
            height={250}
            layout="vertical"
            showLegend
            xAxisTicks={[0, 20, 40, 60, 80, 100]}
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
          <StackedBarChart
            data={websiteData}
            bars={[
              {
                dataKey: "google",
                color: chartTheme.colors.palette.google,
                name: "Google",
              },
              {
                dataKey: "meta",
                color: chartTheme.colors.palette.meta,
                name: "Meta",
              },
              {
                dataKey: "tiktok",
                color: chartTheme.colors.palette.tiktok,
                name: "Tiktok",
              },
            ]}
            xAxisKey="category"
            height={280}
            showLegend
            yAxisFormatter={(value) => `${value}M`}
            customLabel={{
              valueKey: "total",
              suffix: "M",
            }}
          />
        </Card>
        <Card title="Page View / Market">
          <div className="space-y-6">
            {pageViewMarketData.map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="text-sm font-heading font-semibold text-neutral-800">
                  {item.label}
                </div>
                <div className="space-y-2">
                  {/* Newer period (green bar) */}
                  <div className="flex items-center gap-2">
                    <div
                      className="h-6 flex items-center px-2"
                      style={{
                        width: `${(item.value2 / 10) * 100}%`,
                        backgroundColor: chartTheme.colors.palette.newerPeriod,
                      }}
                    >
                      <span className="text-xs font-heading font-medium text-white">
                        {item.period2}
                      </span>
                    </div>
                    <span className="text-xs font-heading font-medium text-neutral-700">
                      {item.value2} Views
                    </span>
                    <span className="text-xs font-heading font-bold text-green-500">
                      {item.delta}
                    </span>
                  </div>
                  {/* Older period (blue bar) */}
                  <div className="flex items-center gap-2">
                    <div
                      className="h-6 flex items-center px-2"
                      style={{
                        width: `${(item.value1 / 10) * 100}%`,
                        backgroundColor: chartTheme.colors.palette.olderPeriod,
                      }}
                    >
                      <span className="text-xs font-heading font-medium text-white">
                        {item.period1}
                      </span>
                    </div>
                    <span className="text-xs font-heading font-medium text-neutral-700">
                      {item.value1} Views
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FunnelJourney;
