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
  height = 345,
  showLegend = true,
}: RadarChartComponentProps) {
  // Create a background data set that is always 100% to form the solid blue pentagon
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
        {/* LAYER 1: BACKGROUND (Rendered FIRST so it sits behind everything) 
           This creates the solid blue pentagon base.
        */}
        {/* LAYER 2: THE GRID (Rendered SECOND so it sits ON TOP of the blue background) 
           - strokeDasharray="4 4": Creates the dashed line effect from Figma
           - stroke="#FFFFFF": Ensures lines are white
           - strokeWidth={1}: Matches the thin line weight
        */}
        <PolarGrid
          gridType="polygon"
          stroke="#FFFFFF"
          strokeWidth={1}
          strokeOpacity={0.6} // Slight opacity to blend nicely like design
          strokeDasharray="4 4"
          fill="#66B1EA"
          fillOpacity={0.8}
        />

        {/* LAYER 3: AXIS LABELS */}
        <PolarAngleAxis
          dataKey={angleKey}
          tick={({ x, y, payload, textAnchor, cx, cy }: any) => {
            const radiusAdjustment = 20;
            return (
              <text
                x={x}
                y={y}
                dy={y > cy ? radiusAdjustment : -radiusAdjustment}
                dx={x > cx ? 10 : x < cx ? -10 : 0}
                textAnchor={textAnchor}
                fill="#475569"
                fontSize={12}
                fontWeight={500}
                fontFamily="'Familjen Grotesk', sans-serif"
              >
                {payload.value}
              </text>
            );
          }}
        />

        {/* LAYER 4: RADIAL AXIS (The vertical % numbers)
           - domain={[0, 100]}: Ensures scale is fixed 0-100%
           - tickFormatter: Shows "0%" at center and standard percentages up
        */}
        <PolarRadiusAxis
          angle={90}
          domain={[0, 100]}
          tick={{ fill: "#5d6b7e", fontSize: 10, fontWeight: 600 }}
          tickFormatter={(v) => `${v}%`}
          axisLine={false}
          tickCount={6}
        />

        {/* LAYER 5: DATA RADARS (Rendered LAST so they overlay everything) */}
        {radars.map((radar) => (
          <Radar
            key={radar.dataKey}
            name={radar.name || radar.dataKey}
            dataKey={radar.dataKey}
            stroke={radar.color}
            fill={radar.color}
            fillOpacity={0.25}
            strokeWidth={2}
          />
        ))}

        <Tooltip
          contentStyle={{
            ...chartTheme.tooltip.contentStyle,
            borderRadius: "8px",
            border: "none",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          }}
          formatter={(value: any) => [`${value}%`]}
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
              color: "#344054",
              fontFamily: "'Familjen Grotesk', sans-serif",
            }}
          />
        )}
      </RadarChart>
    </ResponsiveContainer>
  );
}
