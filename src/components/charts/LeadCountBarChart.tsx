"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import { chartTheme } from "@/lib/chartTheme";

interface LeadCountDataPoint {
  range: string;
  value: number;
  color: string;
}

interface LeadCountBarChartProps {
  data: LeadCountDataPoint[];
  height?: number;
}

export default function LeadCountBarChart({
  data,
  height = 250,
}: LeadCountBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
        <CartesianGrid {...chartTheme.grid} vertical={false} />
        <XAxis
          dataKey="range"
          tick={chartTheme.axis.tick}
          axisLine={{ stroke: "#e5e5e5" }}
          tickLine={false}
        />
        <YAxis tick={chartTheme.axis.tick} axisLine={false} tickLine={false} />
        <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={36}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
          <LabelList
            dataKey="value"
            position="top"
            style={{
              fontSize: 13,
              fontWeight: 700,
              fontFamily: "'Familjen Grotesk', sans-serif",
              fill: "#374151",
            }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
