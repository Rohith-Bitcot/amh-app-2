/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { chartTheme } from "@/utils/chart-theme";

interface RadarChartComponentProps {
  data: Record<string, unknown>[];
  radars: {
    dataKey: string;
    color: string;
    name?: string;
    fillOpacity?: number;
  }[];
  angleKey: string;
  height?: number;
  showLegend?: boolean;
}

export default function RadarChartComponent({
  data,
  radars,
  angleKey,
  height = 300,
  showLegend = true,
}: RadarChartComponentProps) {
  // 1. Create background value of 100 for the solid blue pentagon base
  const chartData = data.map((item) => ({ ...item, bgValue: 100 }));

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="75%"
        data={chartData}
        margin={{ top: 10, right: 30, bottom: 10, left: 30 }}
      >
        {/* LAYER 1: The Blue Background Shape */}
        <Radar
          name="Background"
          dataKey="bgValue"
          stroke="none"
          fill="var(--color-light-blue)"
          fillOpacity={0.75}
          isAnimationActive={false}
          legendType="none"
          dot={false}
          activeDot={false}
        />

        {/* LAYER 3: Axis Labels (Outer Text) */}
        <PolarAngleAxis
          dataKey={angleKey}
          pointerEvents="none"
          tick={({ x, y, payload, textAnchor, cx, cy }: any) => {
            const radiusAdjustment = 25;
            return (
              <text
                x={x}
                y={y}
                dy={y > cy ? radiusAdjustment : -radiusAdjustment}
                dx={x > cx ? 10 : x < cx ? -10 : 0}
                textAnchor={textAnchor}
                fill="var(--color-axis-gray)"
                fontSize={12}
                fontWeight={500}
                fontFamily={chartTheme.fontFamily}
              >
                {payload.value}
              </text>
            );
          }}
        />

        {/* LAYER 4: Vertical Axis Percentage */}
        <PolarRadiusAxis
          angle={90}
          domain={[0, 100]}
          pointerEvents="none"
          tick={{
            fill: "var(--color-axis-gray)",
            fontSize: 10,
            fontWeight: 500,
            fontFamily: chartTheme.fontFamily,
          }}
          tickFormatter={(v) => (v === 0 ? "" : `${v}%`)}
          axisLine={false}
          tickCount={6}
        />

        {/* LAYER 5: The Actual Data */}
        {radars.map((radar) => (
          <Radar
            key={radar.dataKey}
            name={radar.name || radar.dataKey}
            dataKey={radar.dataKey}
            stroke={radar.color}
            fill={radar.color}
            fillOpacity={0.25}
            strokeWidth={2}
            isAnimationActive={false}
            dot={false}
            activeDot={false}
          />
        ))}

        {/* LAYER 6: The Grid Lines - Rendered last AND with explicit dash logic */}
        {/* Solid concentric pentagons */}
        <PolarGrid
          gridType="polygon"
          radialLines={false}
          stroke="#FFFFFF"
          strokeWidth={1.5}
          strokeOpacity={2}
          pointerEvents="none"
        />
        {/* Dashed radial spokes */}
        <PolarGrid
          gridType="polygon"
          polarRadius={[0]} // Use a single 0 radius to hide concentric lines while keeping radial lines visible
          radialLines={true}
          stroke="#FFFFFF"
          strokeWidth={1.5}
          strokeOpacity={0.8}
          strokeDasharray="4 4"
          pointerEvents="none"
        />

        <Tooltip
          contentStyle={{
            ...chartTheme.tooltip.contentStyle,
            borderRadius: "8px",
            border: "none",
            boxShadow: "0px 4px 12px var(--color-card-shadow)",
          }}
          formatter={(value: any) => [`${value}%`]}
          cursor={false}
        />

        {showLegend && (
          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            iconSize={8}
            wrapperStyle={{
              paddingTop: "20px",
              fontSize: 12,
              fontWeight: 500,
              color: "var(--color-foreground)",
              fontFamily: chartTheme.fontFamily,
            }}
          />
        )}
      </RadarChart>
    </ResponsiveContainer>
  );
}
