"use client";

import {
  Area,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ComposedChart,
} from "recharts";
import { chartTheme } from "@/utils/chart-theme";
import Image from "next/image";

interface SubMetric {
  label: string;
  value: string;
}

interface ComparisonRow {
  label: string;
  total: string;
  breakdowns: { label: string; value: string }[];
}

interface ChartPoint {
  label: string;
  current: number;
  prior: number;
}

interface MetricCardProps {
  title: string;
  pills?: { label: string; color?: string }[];
  kpiLabel: string;
  kpiValue: string;
  subMetrics: SubMetric[];
  comparisons: ComparisonRow[];
  chartTitle: string;
  chartData: ChartPoint[];
  isExpanded?: boolean;
  onToggle?: () => void;
}

export default function MetricCard({
  title,
  pills,
  kpiLabel,
  kpiValue,
  subMetrics,
  comparisons,
  chartTitle,
  chartData,
  isExpanded = false,
  onToggle,
}: MetricCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-card p-3 sm:p-4 flex flex-col gap-3 overflow-hidden relative">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-bold font-heading text-neutral-800">
            {title}
          </h3>
          {pills && pills.length > 0 && (
            <div className="flex gap-1 mt-1">
              {pills.map((pill) => (
                <span
                  key={pill.label}
                  className="px-2 py-0.5 text-[9px] rounded font-heading"
                  style={{
                    backgroundColor: pill.color ? `${pill.color}20` : "#fed7aa",
                    color: pill.color || "#c2410c",
                  }}
                >
                  {pill.label}
                </span>
              ))}
            </div>
          )}
        </div>
        <button className="text-neutral-400 hover:text-neutral-600 transition-colors mt-0.5">
          <Image
            src="/assets/svgs/about.svg"
            alt="About"
            width={11}
            height={11}
          />
        </button>
      </div>

      {/* KPI Summary Box */}
      <div className="bg-linear-to-b from-metric-from to-metric-to rounded-xl p-3 text-white">
        {/* Top: label + big number + sub-metrics */}
        <div className="flex items-center justify-between gap-4 mb-1 font-medium">
          <div>
            <div className="text-[14px] font-heading font-medium mb-0.5">
              {kpiLabel}
            </div>
            <div className="text-[46px] font-bold font-heading leading-tight">
              {kpiValue}
            </div>
          </div>
          <div className="flex flex-col gap-1.5 items-center justify-between mr-15">
            {subMetrics.map((m) => (
              <div
                key={m.label}
                className="text-[14px] font-heading flex items-center justify-end gap-2 leading-tight"
              >
                <span className="opacity-90 whitespace-nowrap">{m.label}</span>
                <span className="font-bold">{m.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison rows */}
        {comparisons.map((row) => (
          <div key={row.label}>
            <div className="border-t border-white/55 my-2.5" />
            <div className="flex items-center text-[15px] font-heading gap-5">
              <span className="opacity-90 min-w-[90px] font-medium">
                {row.label}
              </span>
              <span className="font-bold min-w-[55px] text-[15px]">
                {row.total}
              </span>
              <div className="flex gap-4">
                {row.breakdowns.map((b) => (
                  <span
                    key={b.label}
                    className="opacity-100 flex items-baseline gap-1"
                  >
                    <span className="text-[15px] opacity-90">{b.label}</span>
                    <span className="text-[15px] font-bold">{b.value}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {!isExpanded && (
        <button onClick={onToggle} className="flex items-center justify-center">
          <Image
            src="/assets/svgs/arrow-down.svg"
            alt="Collapse"
            width={10}
            height={5}
          />
        </button>
      )}

      {/* Chart Section */}
      {isExpanded && (
        <div>
          <h4 className="text-xs font-bold font-heading text-neutral-800 mb-2">
            {chartTitle}
          </h4>
          <ResponsiveContainer width="100%" height={160}>
            <ComposedChart
              data={chartData}
              margin={{ top: 5, right: 5, bottom: 0, left: -10 }}
            >
              <defs>
                <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="var(--color-link)"
                    stopOpacity={0.25}
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--color-link)"
                    stopOpacity={0.03}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--color-grid-gray)"
                vertical={false}
              />
              <XAxis
                dataKey="label"
                tick={{
                  fontSize: 10,
                  fill: "var(--color-axis-gray)",
                  fontFamily: chartTheme.fontFamily,
                }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{
                  fontSize: 10,
                  fill: "var(--color-axis-gray)",
                  fontFamily: chartTheme.fontFamily,
                }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={chartTheme.tooltip.contentStyle}
                cursor={false}
              />
              <Area
                type="monotone"
                dataKey="current"
                stroke="var(--color-link)"
                strokeWidth={2}
                fill="url(#areaFill)"
                name="Current Year"
              />
              <Line
                type="monotone"
                dataKey="prior"
                stroke="var(--color-leases)"
                strokeWidth={1.5}
                strokeDasharray="5 3"
                dot={false}
                name="Last Year"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      )}
      {isExpanded && (
        <button onClick={onToggle} className="flex items-center justify-center">
          <Image
            src="/assets/svgs/arrow-up.svg"
            alt="Collapse"
            width={10}
            height={5}
          />
        </button>
      )}
    </div>
  );
}
