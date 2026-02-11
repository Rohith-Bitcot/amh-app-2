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
import { chartTheme } from "@/lib/chartTheme";

interface RadarChartComponentProps {
  data: Record<string, unknown>[];
  radars: { dataKey: string; color: string; name?: string; fillOpacity?: number }[];
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
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RadarChart data={data} margin={{ top: 5, right: 30, bottom: 5, left: 30 }}>
        <PolarGrid stroke="#e5e5e5" />
        <PolarAngleAxis
          dataKey={angleKey}
          tick={{ ...chartTheme.axis.tick, fontSize: 10 }}
        />
        <PolarRadiusAxis tick={{ fontSize: 9, fill: "#a3a3a3" }} />
        <Tooltip contentStyle={chartTheme.tooltip.contentStyle} />
        {showLegend && (
          <Legend
            verticalAlign="bottom"
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 11, fontFamily: chartTheme.fontFamily }}
          />
        )}
        {radars.map((radar) => (
          <Radar
            key={radar.dataKey}
            name={radar.name || radar.dataKey}
            dataKey={radar.dataKey}
            stroke={radar.color}
            fill={radar.color}
            fillOpacity={radar.fillOpacity ?? 0.2}
            strokeWidth={2}
          />
        ))}
      </RadarChart>
    </ResponsiveContainer>
  );
}
