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
            stroke="#E5E7EB"
            strokeDasharray="0"
          />
          <XAxis
            dataKey="range"
            tick={{
              fill: "#838689",
              fontSize: 11,
              fontFamily: "'Familjen Grotesk', sans-serif",
            }}
            axisLine={{ stroke: "#C9CBCD" }}
            tickLine={false}
            dy={10}
          />
          <YAxis
            tick={{
              fill: "#838689",
              fontSize: 11,
              fontFamily: "'Familjen Grotesk', sans-serif",
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
                fontFamily: "'Familjen Grotesk', sans-serif",
                fill: "#374151",
              }}
              offset={10}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
