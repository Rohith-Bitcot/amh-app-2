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
  // height = 300,
}: LeadCountBarChartProps) {
  return (
    <div className="flex justify-center w-full">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 30, right: 10, bottom: 20, left: -10 }}
        >
          <CartesianGrid
            vertical={false}
            stroke="#C9CBCD"
            strokeWidth={0.57}
            strokeDasharray="0"
          />
          <XAxis
            dataKey="range"
            tick={{
              fill: "#838689",
              fontSize: 12,
              fontFamily: "'Familjen Grotesk', sans-serif",
            }}
            axisLine={{ stroke: "#C9CBCD", strokeWidth: 0.57 }}
            tickLine={false}
            dy={10}
          />
          <YAxis
            tick={{
              fill: "#838689",
              fontSize: 12,
              fontFamily: "'Familjen Grotesk', sans-serif",
            }}
            axisLine={false}
            tickLine={false}
          />
          <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={40}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList
              dataKey="value"
              position="top"
              offset={10}
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
    </div>
  );
}
