"use client";

import { Area, AreaChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, ComposedChart } from "recharts";
import { Info } from "lucide-react";
import { chartTheme } from "@/lib/chartTheme";

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
}: MetricCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] p-3 sm:p-4 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-bold font-heading text-neutral-800">{title}</h3>
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
          <Info className="w-4 h-4" />
        </button>
      </div>

      {/* KPI Summary Box */}
      <div className="bg-gradient-to-b from-[#6CA9D3] to-[#CCE9FF] rounded-xl p-3 text-white">
        {/* Top: label + big number + sub-metrics */}
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[10px] font-heading opacity-80">{kpiLabel}</div>
            <div className="text-3xl sm:text-5xl font-bold font-heading leading-tight">{kpiValue}</div>
          </div>
          <div className="flex flex-col items-end gap-0.5 mt-1">
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
                  {b.label}{" "}
                  <span className="font-semibold">{b.value}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div>
        <h4 className="text-xs font-bold font-heading text-neutral-800 mb-2">{chartTitle}</h4>
        <ResponsiveContainer width="100%" height={160}>
          <ComposedChart data={chartData} margin={{ top: 5, right: 5, bottom: 0, left: -10 }}>
            <defs>
              <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0284c7" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#0284c7" stopOpacity={0.03} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
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
    </div>
  );
}
