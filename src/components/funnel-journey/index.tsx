"use client";

import { chartTheme } from "@/utils/chart-theme";
import { useState } from "react";
import PageHeader from "@/components/layout/page-header";
import Card from "@/components/ui/cards";
import TabGroup from "@/components/ui/tab-group";
import ReusableTable from "@/components/ui/reusable-table";
import StackedBarChart from "@/components/ui/charts/stacked-bar-chart";
import LineChartComponent from "@/components/ui/charts/line-chart";
import BarChartComponent from "@/components/ui/charts/bar-chart";
import { FilterIcon, cn } from "@/utils/helper-functions";
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
} from "@/utils/data/funnel-journey";

import MiniTable from "@/components/funnel-journey/MiniTable";

const FunnelJourney = () => {
  const [funnelTab, setFunnelTab] = useState("unique-showings");

  const timingStagesBars = timingStagesLegend.map((l) => ({
    dataKey: l.key,
    color: l.color,
    name: l.label,
  }));

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
                dataKey: "returning",
                color: chartTheme.colors.palette.returning,
                name: "Returning",
                dashed: true,
              },
              {
                dataKey: "newLeads",
                color: chartTheme.colors.palette.newLeads,
                name: "New",
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
      <Card>
        <div className="flex flex-col gap-1 mb-3">
          <h3 className="text-black text-sm font-medium font-heading capitalize">
            Timing Stages
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-heading text-neutral-500">
              Performance across active listings
            </span>
            <div className="flex flex-wrap gap-3">
              {timingStagesLegend.map((item) => (
                <span
                  key={item.key}
                  className="flex items-center gap-1.5 text-[10px] font-heading text-neutral-600"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
        <StackedBarChart
          data={timingStagesData}
          bars={timingStagesBars}
          yAxisTicks={[0, 20, 40, 60, 80, 100]}
          yAxisFormatter={(value) => `${value}%`}
          xAxisKey="month"
          height={357}
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
          <div className="overflow-hidden rounded-xl border border-neutral-200 m-4 mt-0">
            <table className="w-full border-collapse">
              <thead>
                {/* First row: Main category headers with distinct shades of blue */}
                <tr className="text-white">
                  <th className="px-4 py-3 text-sm font-semibold font-heading text-center border-r border-white/10 first:rounded-tl-lg bg-[#1E6191]">
                    <div className="flex items-center justify-center gap-2">
                      Geo
                      <FilterIcon className="w-4 h-4" />
                    </div>
                  </th>
                  <th
                    colSpan={3}
                    className="px-3 py-2 text-sm font-semibold font-heading text-center border-r border-white/10 bg-[#1E6191]"
                  >
                    Unique Showing
                  </th>
                  <th
                    colSpan={3}
                    className="px-3 py-2 text-sm font-semibold font-heading text-center border-r border-white/10 bg-[#1E6191]"
                  >
                    App Start to Submit
                  </th>
                  <th
                    colSpan={3}
                    className="px-3 py-2 text-sm font-semibold font-heading text-center border-r border-white/10 bg-[#1E6191]"
                  >
                    Approval
                  </th>
                  <th
                    colSpan={3}
                    className="px-3 py-2 text-sm font-semibold font-heading text-center last:rounded-tr-lg bg-[#1E6191]"
                  >
                    Approval to Lease
                  </th>
                </tr>
                {/* Second row: Sub-column headers */}
                <tr className="bg-white border-b border-neutral-200">
                  {/* District under Geo */}
                  <th className="px-4 py-2 text-[#1F1F22] text-[10px] font-medium font-heading text-center border-r border-neutral-200">
                    District
                  </th>
                  {/* Unique Showing sub-columns */}
                  <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200">
                    T7
                  </th>
                  <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200">
                    PW
                  </th>
                  <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200">
                    PY
                  </th>
                  {/* App Start to Submit sub-columns - Highlighted bg #F0F8FE */}
                  <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]">
                    T7
                  </th>
                  <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]">
                    PW
                  </th>
                  <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]">
                    PY
                  </th>
                  {/* Approval sub-columns */}
                  <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200">
                    T7
                  </th>
                  <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200">
                    PW
                  </th>
                  <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200">
                    PY
                  </th>
                  {/* Approval to Lease sub-columns - Highlighted bg #F0F8FE */}
                  <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]">
                    T7
                  </th>
                  <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]">
                    PW
                  </th>
                  <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center bg-[#F0F8FE]">
                    PY
                  </th>
                </tr>
              </thead>
              <tbody>
                {leasingConversionsData.rows.map((row, idx) => (
                  <tr
                    key={row.geo}
                    className={cn(
                      "border-b border-neutral-100 last:border-0",
                      idx % 2 === 0 ? "bg-white" : "bg-table-alt",
                    )}
                  >
                    <td className="px-4 py-3 text-sm font-medium font-heading text-neutral-600 text-left border-r border-neutral-100">
                      {row.geo}
                    </td>
                    {/* Unique Showing values */}
                    {row.uniqueShowing.map((val, vi) => (
                      <td
                        key={`unique-${vi}`}
                        className="px-3 py-3 text-sm font-normal font-heading text-neutral-800 text-center border-r border-neutral-100"
                      >
                        {val}
                      </td>
                    ))}
                    {/* App Start to Submit values - Highlighted bg #F0F8FE */}
                    {row.appStartSubmit.map((val, vi) => (
                      <td
                        key={`app-${vi}`}
                        className="px-3 py-3 text-sm font-normal font-heading text-neutral-800 text-center bg-[#F0F8FE] border-r border-neutral-100"
                      >
                        {val}
                      </td>
                    ))}
                    {/* Approval values */}
                    {row.approval.map((val, vi) => (
                      <td
                        key={`approval-${vi}`}
                        className="px-3 py-3 text-sm font-normal font-heading text-neutral-800 text-center border-r border-neutral-100"
                      >
                        {val}
                      </td>
                    ))}
                    {/* Approval to Lease values - Highlighted bg #F0F8FE */}
                    {row.approvalToLease.map((val, vi) => (
                      <td
                        key={`lease-${vi}`}
                        className={cn(
                          "px-3 py-3 text-sm font-normal font-heading text-neutral-800 text-center bg-[#F0F8FE]",
                          vi < 2 ? "border-r border-neutral-100" : "",
                        )}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

      {/* Section 7: Application Metric */}
      <Card title="Application metric" noPadding>
        <ReusableTable
          columns={[
            {
              accessorKey: "geo",
              header: "Geo",
              enableSorting: true,
              cell: (info) => (
                <div className="text-center font-semibold">
                  {info.getValue() as string}
                </div>
              ),
            },
            {
              accessorKey: "denialRate",
              header: "Denial Rate",
              enableSorting: true,
              cell: (info) => (
                <div className="text-center">{info.getValue() as string}</div>
              ),
            },
            {
              accessorKey: "cancellationRate",
              header: "Cancellation Rate",
              enableSorting: true,
              cell: (info) => (
                <div className="text-center">{info.getValue() as string}</div>
              ),
            },
            {
              accessorKey: "selfService",
              header: "Self Service",
              enableSorting: true,
              cell: (info) => (
                <div className="text-center">{info.getValue() as string}</div>
              ),
            },
            {
              accessorKey: "avgApplicants",
              header: "Avg Applicants per Application",
              enableSorting: true,
              cell: (info) => (
                <div className="text-center font-bold">
                  {info.getValue() as number}
                </div>
              ),
            },
          ]}
          data={applicationMatricData}
        />
      </Card>

      {/* Section 8: App Stages Duration */}
      <Card>
        <div className="flex flex-col gap-1 mb-3">
          <h3 className="text-black text-sm font-medium font-heading capitalize">
            App Stages Duration
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-heading text-neutral-500">
              Performance across active listings
            </span>
            <div className="flex flex-wrap gap-3">
              {appStagesDurationLegend.map((item) => (
                <span
                  key={item.key}
                  className="flex items-center gap-1.5 text-[10px] font-heading text-neutral-600"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
        <StackedBarChart
          data={appStagesDurationData}
          bars={appStagesDurationLegend.map((l) => ({
            dataKey: l.key,
            color: l.color,
            name: l.label,
          }))}
          xAxisKey="month"
          height={400}
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
            reverseLegend
            xAxisKey="month"
            height={300}
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
            reverseLegend
            xAxisKey="source"
            height={300}
            layout="vertical"
            showLegend
            xAxisTicks={[0, 20, 40, 60, 80, 100]}
          />
        </Card>
      </div>

      {/* Section 10: Denial Reason Distribution */}
      <Card>
        <div className="flex flex-col gap-1 mb-3">
          <h3 className="text-black text-sm font-medium font-heading capitalize">
            Denial Reason Distribution
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-heading text-neutral-500">
              Performance across active listings
            </span>
            <div className="flex flex-wrap gap-3">
              {denialReasonLegend.map((item) => (
                <span
                  key={item.key}
                  className="flex items-center gap-1.5 text-[10px] font-heading text-neutral-600"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
        <StackedBarChart
          data={denialReasonData}
          bars={denialReasonLegend.map((l) => ({
            dataKey: l.key,
            color: l.color,
            name: l.label,
          }))}
          yAxisTicks={[0, 20, 40, 60, 80, 100]}
          xAxisKey="month"
          height={400}
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
                dataKey: "tiktok",
                color: chartTheme.colors.palette.tiktok,
                name: "Tiktok",
              },
              {
                dataKey: "meta",
                color: chartTheme.colors.palette.meta,
                name: "Meta",
              },
            ]}
            xAxisKey="category"
            height={300}
            showLegend
            yAxisTicks={[0, 2, 4, 6, 8, 10]}
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
