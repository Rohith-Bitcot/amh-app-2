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
import { chartTheme } from "@/lib/chartTheme";

interface BarChartComponentProps {
  data: Record<string, unknown>[];
  bars: { dataKey: string; color: string; name?: string }[];
  xAxisKey: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  layout?: "horizontal" | "vertical";
  xAxisTicks?: number[]; // Optional custom X-axis ticks
  yAxisFormatter?: (value: number) => string; // Optional Y-axis formatter
  showLabels?: boolean; // Show labels on top of bars
}

// Custom tick component for vertical Y-axis labels
const VerticalYAxisTick = (props: { x?: number | string; y?: number | string; payload?: { value: string } }) => {
  const { x, y, payload } = props;
  if (!payload) return null;
  const xNum = typeof x === 'number' ? x : Number.parseFloat(String(x || 0));
  return (
    <g transform={`translate(${xNum - 5},${y})`}>
      <text
        x={0}
        y={0}
        textAnchor="middle"
        fill="#666"
        fontSize={11}
        fontFamily={chartTheme.fontFamily}
        transform="rotate(270)"
      >
        {payload.value}
      </text>
    </g>
  );
};

export default function BarChartComponent({
  data,
  bars,
  xAxisKey,
  height = 300,
  showGrid = true,
  showLegend = false,
  layout = "horizontal",
  xAxisTicks,
  yAxisFormatter,
  showLabels = false,
}: Readonly<BarChartComponentProps>) {
  if (layout === "vertical") {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
          {showGrid && <CartesianGrid {...chartTheme.grid} horizontal={false} />}
          <XAxis
            type="number"
            tick={chartTheme.axis.tick}
            tickFormatter={(value) => `${value}%`}
            {...(xAxisTicks && { ticks: xAxisTicks })}
          />
          <YAxis
            type="category"
            dataKey={xAxisKey}
            tick={VerticalYAxisTick}
            width={25}
          />
          <Tooltip contentStyle={chartTheme.tooltip.contentStyle} />
          {showLegend && (
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              wrapperStyle={{ fontSize: 11, fontFamily: chartTheme.fontFamily }}
            />
          )}
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
        <YAxis
          tick={chartTheme.axis.tick}
          axisLine={{ stroke: "#e5e5e5" }}
          {...(yAxisFormatter && { tickFormatter: yAxisFormatter })}
        />
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
