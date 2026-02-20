"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Legend,
} from "recharts";
import { chartTheme } from "@/utils/chart-theme";

interface StackedBarChartProps {
  data: Record<string, unknown>[];
  bars: { dataKey: string; color: string; name?: string }[];
  xAxisKey: string;
  height?: number;
  yAxisTicks?: number[]; // Optional custom Y-axis ticks
  yAxisDomain?: [number, number] | [string, string]; // Optional custom Y-axis domain
  yAxisFormatter?: (value: number) => string; // Optional Y-axis formatter
  showLegend?: boolean; // Show legend
  customLabel?: {
    valueKey: string; // e.g., "totalDays"
    deltaKey?: string; // e.g., "delta"
    deltaPositiveKey?: string; // e.g., "deltaPositive"
    suffix?: string; // e.g., "d" for days
  };
  barSize?: number; // Optional custom bar size
}

// Custom label renderer for showing values above bars with delta indicators
const renderCustomLabel = (
  props: Record<string, unknown> & {
    customLabel?: {
      valueKey: string;
      deltaKey?: string;
      deltaPositiveKey?: string;
      suffix?: string;
    };
    chartData?: Record<string, unknown>[];
  },
) => {
  const { x, y, width, index, customLabel, chartData } = props;

  if (
    !customLabel ||
    !chartData ||
    index === undefined ||
    x === undefined ||
    y === undefined ||
    width === undefined
  ) {
    return null;
  }

  const xNum = typeof x === "number" ? x : Number.parseFloat(String(x));
  const yNum = typeof y === "number" ? y : Number.parseFloat(String(y));
  const widthNum =
    typeof width === "number" ? width : Number.parseFloat(String(width));
  const dataIndex =
    typeof index === "number" ? index : Number.parseInt(String(index));

  // Get the data point using the index
  const dataPoint = chartData[dataIndex];
  if (!dataPoint) {
    return null;
  }

  const mainValue = dataPoint[customLabel.valueKey];
  const delta = customLabel.deltaKey ? dataPoint[customLabel.deltaKey] : null;
  const deltaPositive = customLabel.deltaPositiveKey
    ? dataPoint[customLabel.deltaPositiveKey]
    : null;
  const suffix = customLabel.suffix || "";

  // If mainValue is undefined or null, don't render
  if (mainValue === undefined || mainValue === null) {
    return null;
  }

  // Build label text
  const labelText = `${mainValue}${suffix}`;

  if (delta !== null && delta !== undefined) {
    const arrow = deltaPositive ? "↑" : "↓";
    const deltaColor = deltaPositive ? "#66EA9D" : "#F66969";
    const deltaText = ` ${arrow}${Math.abs(Number(delta))}`;

    return (
      <text
        x={xNum + widthNum / 2}
        y={yNum - 10}
        fill="#333"
        textAnchor="middle"
        fontSize="11"
        fontWeight="600"
        fontFamily={chartTheme.fontFamily}
      >
        {labelText}
        <tspan fill={deltaColor} fontSize="10" fontWeight="500">
          {deltaText}
        </tspan>
      </text>
    );
  }

  return (
    <text
      x={xNum + widthNum / 2}
      y={yNum - 10}
      fill="#333"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fontFamily={chartTheme.fontFamily}
    >
      {labelText}
    </text>
  );
};

export default function StackedBarChart({
  data,
  bars,
  xAxisKey,
  height = 300,
  yAxisTicks,
  yAxisDomain,
  yAxisFormatter,
  showLegend = false,
  customLabel,
}: Readonly<StackedBarChartProps>) {
  return (
    <div style={{ border: "none" }}>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          margin={{ top: 35, right: 20, bottom: 5, left: 0 }}
        >
          {/* Horizontal dashed lines only */}
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            horizontal={true}
            stroke="#e5e5e5"
          />
          <XAxis
            dataKey={xAxisKey}
            tick={chartTheme.axis.tick}
            axisLine={{ stroke: "#e5e5e5" }}
          />
          <YAxis
            tick={chartTheme.axis.tick}
            axisLine={{ stroke: "#e5e5e5" }}
            interval={0}
            {...(yAxisDomain && { domain: yAxisDomain })}
            {...(yAxisTicks && { ticks: yAxisTicks })}
            {...(yAxisFormatter && { tickFormatter: yAxisFormatter })}
          />
          <Tooltip
            contentStyle={chartTheme.tooltip.contentStyle}
            cursor={false}
          />
          {showLegend && (
            <Legend
              verticalAlign="middle"
              align="left"
              layout="vertical"
              iconType="circle"
              wrapperStyle={{
                fontSize: 11,
                fontFamily: chartTheme.fontFamily,
                left: 10,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
              content={(props) => {
                // Use bars prop directly to ensure consistent order with stack
                // Stack is rendered Bottom -> Top (0 -> N)
                // Legend should be Top -> Bottom (N -> 0)
                const reversedBars = [...bars].reverse();
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                      paddingLeft: "20px",
                    }}
                  >
                    {reversedBars.map((bar, index) => (
                      <div
                        key={`legend-${index}`}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "11px",
                            fontFamily: chartTheme.fontFamily,
                            color: "#1F2937",
                            fontWeight: 600,
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                            textAlign: "center",
                          }}
                        >
                          {bar.name || bar.dataKey}
                        </span>
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: bar.color,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                );
              }}
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
              barSize={49}
            >
              {index === bars.length - 1 && customLabel && (
                <LabelList
                  dataKey={customLabel.valueKey}
                  position="top"
                  content={(props) =>
                    renderCustomLabel({
                      ...props,
                      customLabel,
                      chartData: data,
                    })
                  }
                />
              )}
            </Bar>
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
