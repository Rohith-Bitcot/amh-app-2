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
          <h3 className="text-[15px] font-bold font-heading text-neutral-800">
            {title}
          </h3>
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
      <div className="bg-gradient-to-b from-[#6CA9D3] to-[#CCE3FF] rounded-xl p-[14px] text-white shadow-[0px_3px_12px_rgba(0,0,0,0.06)]">
        {/* Top: label + big number + sub-metrics */}
        <div className="flex items-center justify-start gap-10 mb-0.5 font-medium">
          <div>
            <div className="text-[14px] font-heading font-medium mb-0.5">
              {kpiLabel}
            </div>
            <div className="text-[56px] font-bold font-heading leading-tight">
              {kpiValue}
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            {subMetrics.map((m) => (
              <div
                key={m.label}
                className="text-[17px] font-heading flex items-center gap-2 leading-tight"
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
