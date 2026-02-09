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

interface BarChartComponentProps {
  data: Record<string, unknown>[];
  bars: { dataKey: string; color: string; name?: string }[];
  xAxisKey: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  layout?: "horizontal" | "vertical";
}

export default function BarChartComponent({
  data,
  bars,
  xAxisKey,
  height = 300,
  showGrid = true,
  showLegend = false,
  layout = "horizontal",
}: BarChartComponentProps) {
  if (layout === "vertical") {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 20, bottom: 5, left: 60 }}
        >
          {showGrid && (
            <CartesianGrid {...chartTheme.grid} horizontal={false} />
          )}
          <XAxis type="number" tick={chartTheme.axis.tick} />
          <YAxis
            type="category"
            dataKey={xAxisKey}
            tick={chartTheme.axis.tick}
            width={80}
          />
          <Tooltip contentStyle={chartTheme.tooltip.contentStyle} />
          {showLegend && <Legend />}
          {bars.map((bar) => (
            <Bar
              key={bar.dataKey}
              dataKey={bar.dataKey}
              fill={bar.color}
              name={bar.name || bar.dataKey}
              radius={[0, 4, 4, 0]}
              barSize={16}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        {showGrid && <CartesianGrid {...chartTheme.grid} vertical={false} />}
        <XAxis
          dataKey={xAxisKey}
          tick={chartTheme.axis.tick}
          axisLine={{ stroke: "#e5e5e5" }}
        />
        <YAxis tick={chartTheme.axis.tick} axisLine={false} />
        <Tooltip contentStyle={chartTheme.tooltip.contentStyle} />
        {showLegend && <Legend />}
        {bars.map((bar) => (
          <Bar
            key={bar.dataKey}
            dataKey={bar.dataKey}
            fill={bar.color}
            name={bar.name || bar.dataKey}
            radius={[4, 4, 0, 0]}
            barSize={bars.length > 1 ? 12 : 24}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
