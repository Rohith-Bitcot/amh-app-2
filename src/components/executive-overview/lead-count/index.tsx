"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";

import { chartTheme } from "@/utils/chart-theme";
import { LeadCountBarChartProps } from "@/types/executive-overview-types";

export default function LeadCountBarChart({
  data,
}: Readonly<LeadCountBarChartProps>) {
  return (
    <div className="flex justify-center w-full ">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data.map((d) => ({ ...d, fill: d.color }))}
          margin={{ top: 30, right: 20, bottom: 20, left: 0 }}
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
