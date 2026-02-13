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
import { chartTheme } from "@/lib/chartTheme";

const CustomLegend = ({ items, type = "circle" }: { items: any[]; type?: "circle" | "line" }) => {
  return (
    <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end", fontSize: 11, fontFamily: chartTheme.fontFamily, color: "#374151" }}>
      {items.map((item) => (
        <div key={item.dataKey} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {type === "circle" ? (
            <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: item.color }} />
          ) : (
            <div style={{ width: 12, height: 2, backgroundColor: item.color }} />
          )}
          <span>{item.name || item.dataKey}</span>
        </div>
      ))}
    </div>
  );
};

interface LineChartComponentProps {
  data: Record<string, unknown>[];
  lines: { dataKey: string; color: string; name?: string; dashed?: boolean }[];
  xAxisKey: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  showArea?: boolean;
  yAxisTicks?: number[]; // Optional custom Y-axis ticks
  reverseLegend?: boolean;
}

export default function LineChartComponent({
  data,
  lines,
  xAxisKey,
  height = 300,
  showGrid = true,
  showLegend = false,
  showArea = false,
  yAxisTicks,
  reverseLegend = false,
}: Readonly<LineChartComponentProps>) {
  if (showArea) {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          {showGrid && <CartesianGrid {...chartTheme.grid} vertical={false} />}
          <XAxis dataKey={xAxisKey} tick={chartTheme.axis.tick} axisLine={{ stroke: "#e5e5e5" }} />
          <YAxis tick={chartTheme.axis.tick} axisLine={{ stroke: "#e5e5e5" }} {...(yAxisTicks && { ticks: yAxisTicks })} />
          <Tooltip contentStyle={chartTheme.tooltip.contentStyle} />
          {showLegend && (
            <Legend
              verticalAlign="top"
              align="right"
              content={<CustomLegend items={reverseLegend ? [...lines].reverse() : lines} type="line" />}
            />
          )}
          {lines.map((line) => (
            <Area
              key={line.dataKey}
              type="natural"
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
        <XAxis dataKey={xAxisKey} tick={chartTheme.axis.tick} axisLine={{ stroke: "#e5e5e5" }} />
        <YAxis tick={chartTheme.axis.tick} axisLine={{ stroke: "#e5e5e5" }} {...(yAxisTicks && { ticks: yAxisTicks })} />
        <Tooltip contentStyle={chartTheme.tooltip.contentStyle} />
        {showLegend && (
          <Legend
            verticalAlign="top"
            align="right"
            content={<CustomLegend items={reverseLegend ? [...lines].reverse() : lines} type="circle" />}
          />
        )}
        {lines.map((line) => (
          <Line
            key={line.dataKey}
            type="natural"
            dataKey={line.dataKey}
            stroke={line.color}
            strokeWidth={2}
            dot={false}
            name={line.name || line.dataKey}
            strokeDasharray={line.dashed ? "5 5" : undefined}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
