"use client";

import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { chartTheme } from "@/utils/chart-theme";

interface FutureLeaseChartProps {
  data: Record<string, unknown>[];
  height?: number;
}

export default function FutureLeaseChart({
  data,
  height = 400,
}: Readonly<FutureLeaseChartProps>) {
  return (
    <div>
      {/* Legend */}
      <div className="flex items-center justify-end gap-5 mb-3 text-xs font-heading text-neutral-600">
        <span className="flex items-center gap-1.5">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{
              backgroundColor: chartTheme.colors.palette.leaseExpiration,
            }}
          />
          {""}
          Lease Expiration
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{
              backgroundColor: chartTheme.colors.palette.upcomingDelivery,
            }}
          />
          {""}
          Upcoming Delivery
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{
              backgroundColor: chartTheme.colors.palette.projectedAbsorption,
            }}
          />
          {""}
          Projected Absorption
        </span>
      </div>

      <ResponsiveContainer width="100%" height={height}>
        <ComposedChart
          data={data}
          margin={{ top: 10, right: 20, bottom: 5, left: 0 }}
          barCategoryGap="12%"
        >
          <defs>
            <pattern
              id="hatchPattern"
              patternUnits="userSpaceOnUse"
              width="6"
              height="6"
              patternTransform="rotate(45)"
            >
              <rect
                width="6"
                height="6"
                fill={chartTheme.colors.palette.leaseExpiration}
              />
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="6"
                stroke="#66B1EA"
                strokeWidth="7"
              />
            </pattern>
          </defs>
          <CartesianGrid {...chartTheme.grid} vertical={false} />
          <XAxis
            dataKey="month"
            tick={chartTheme.axis.tick}
            axisLine={{ stroke: chartTheme.colors.grid }}
            tickLine={false}
          />
          <YAxis
            tick={chartTheme.axis.tick}
            axisLine={{ stroke: chartTheme.colors.grid }}
            tickLine={false}
            ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]}
            domain={[0, 24]}
          />
          <Tooltip
            contentStyle={chartTheme.tooltip.contentStyle}
            cursor={false}
          />
          <Bar
            dataKey="leaseExpiration"
            stackId="stack"
            fill={chartTheme.colors.palette.leaseExpiration}
            name="Lease Expiration"
            radius={[0, 0, 0, 0]}
            barSize={49}
          />
          <Bar
            dataKey="upcomingDelivery"
            stackId="stack"
            fill="url(#hatchPattern)"
            name="Upcoming Delivery"
            radius={[2, 2, 0, 0]}
            barSize={49}
          />
          <Line
            type="linear"
            dataKey="projectedAbsorption"
            stroke={chartTheme.colors.palette.projectedAbsorption}
            strokeWidth={2.5}
            dot={false}
            name="Projected Absorption"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
