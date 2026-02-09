"use client";

import {
  Area,
  AreaChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ComposedChart,
} from "recharts";
import { Info } from "lucide-react";
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
    <div className="bg-white rounded-2xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] p-4 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-bold font-heading text-neutral-800">
            {title}
          </h3>
        </div>
        <button className="text-neutral-400 hover:text-neutral-600 transition-colors mt-0.5">
          <Info className="w-4 h-4" />
        </button>
      </div>

      {/* KPI Summary Box */}
      <div className="bg-gradient-to-b from-[#6CA9D3] to-[#CCE9FF] rounded-xl p-3 text-white">
        {/* Top: label + big number + sub-metrics */}
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[10px] font-heading opacity-80">
              {kpiLabel}
            </div>
            <div className="text-5xl font-bold font-heading leading-tight">
              {kpiValue}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-0.5 mt-1">
            {subMetrics.map((m) => (
              <div key={m.label} className="text-[11px] font-heading">
                <span className="opacity-80">{m.label}</span>{" "}
                <span className="font-semibold">{m.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison rows */}
        {comparisons.map((row) => (
          <div key={row.label}>
            <div className="border-t border-white/20 my-2" />
            <div className="flex items-center text-[10px] font-heading">
              <span className="opacity-70 min-w-[72px]">{row.label}</span>
              <span className="font-semibold min-w-[44px]">{row.total}</span>
              {row.breakdowns.map((b) => (
                <span key={b.label} className="ml-3 opacity-80">
                  {b.label} <span className="font-semibold">{b.value}</span>
                </span>
              ))}
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
                  <stop offset="0%" stopColor="#0284c7" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity={0.03} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#f1f5f9"
                vertical={false}
              />
              <XAxis
                dataKey="label"
                tick={{ fontSize: 10, fill: "#a3a3a3" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "#a3a3a3" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip contentStyle={chartTheme.tooltip.contentStyle} />
              <Area
                type="monotone"
                dataKey="current"
                stroke="#0284c7"
                strokeWidth={2}
                fill="url(#areaFill)"
                name="Current Year"
              />
              <Line
                type="monotone"
                dataKey="prior"
                stroke="#f59e0b"
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
