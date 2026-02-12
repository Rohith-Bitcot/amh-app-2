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
    <div className="flex justify-center w-full">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 30, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid
            vertical={false}
            stroke="var(--color-grid-gray)"
            strokeDasharray="0"
          />
          <XAxis
            dataKey="range"
            tick={{
              fill: "var(--color-axis-gray)",
              fontSize: 11,
              fontFamily: chartTheme.fontFamily,
            }}
            axisLine={{ stroke: "var(--color-axis-border)" }}
            tickLine={false}
            dy={10}
          />
          <YAxis
            tick={{
              fill: "var(--color-axis-gray)",
              fontSize: 11,
              fontFamily: chartTheme.fontFamily,
            }}
            axisLine={false}
            tickLine={false}
            domain={[0, 20]}
            tickCount={6}
            width={40}
          />
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
                fontFamily: chartTheme.fontFamily,
                fill: "var(--color-foreground)",
              }}
              offset={10}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
