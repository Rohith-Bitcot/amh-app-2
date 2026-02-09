"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area,
  AreaChart,
} from "recharts";
import { chartTheme } from "@/utils/chart-theme";

interface LineChartComponentProps {
  data: Record<string, unknown>[];
  lines: { dataKey: string; color: string; name?: string; dashed?: boolean }[];
  xAxisKey: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  showArea?: boolean;
}

export default function LineChartComponent({
  data,
  lines,
  xAxisKey,
  height = 300,
  showGrid = true,
  showLegend = false,
  showArea = false,
}: LineChartComponentProps) {
  if (showArea) {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          {showGrid && <CartesianGrid {...chartTheme.grid} vertical={false} />}
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
              iconType="line"
              wrapperStyle={{ fontSize: 11, fontFamily: chartTheme.fontFamily }}
            />
          )}
          {lines.map((line) => (
            <Area
              key={line.dataKey}
              type="monotone"
              dataKey={line.dataKey}
              stroke={line.color}
              strokeWidth={2}
              fill={line.color}
              fillOpacity={0.1}
              name={line.name || line.dataKey}
              strokeDasharray={line.dashed ? "5 5" : undefined}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        {showGrid && <CartesianGrid {...chartTheme.grid} vertical={false} />}
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
            iconType="line"
            wrapperStyle={{ fontSize: 11, fontFamily: chartTheme.fontFamily }}
          />
        )}
        {lines.map((line) => (
          <Line
            key={line.dataKey}
            type="monotone"
            dataKey={line.dataKey}
            stroke={line.color}
            strokeWidth={2}
            dot={{ r: 3, fill: line.color }}
            name={line.name || line.dataKey}
            strokeDasharray={line.dashed ? "5 5" : undefined}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
