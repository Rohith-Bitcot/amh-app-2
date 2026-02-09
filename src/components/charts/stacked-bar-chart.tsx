"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { chartTheme } from "@/utils/chart-theme";

interface StackedBarChartProps {
  data: Record<string, unknown>[];
  bars: { dataKey: string; color: string; name?: string }[];
  xAxisKey: string;
  height?: number;
  showLegend?: boolean;
}

export default function StackedBarChart({
  data,
  bars,
  xAxisKey,
  height = 300,
  showLegend = true,
}: StackedBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <CartesianGrid {...chartTheme.grid} vertical={false} />
        <XAxis
          dataKey={xAxisKey}
          tick={chartTheme.axis.tick}
          axisLine={{ stroke: "#e5e5e5" }}
        />
        <YAxis tick={chartTheme.axis.tick} axisLine={false} />
        <Tooltip contentStyle={chartTheme.tooltip.contentStyle} />
        {showLegend && (
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 11, fontFamily: chartTheme.fontFamily }}
          />
        )}
        {bars.map((bar, index) => (
          <Bar
            key={bar.dataKey}
            dataKey={bar.dataKey}
            stackId="stack"
            fill={bar.color}
            name={bar.name || bar.dataKey}
            radius={index === bars.length - 1 ? [4, 4, 0, 0] : [0, 0, 0, 0]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
