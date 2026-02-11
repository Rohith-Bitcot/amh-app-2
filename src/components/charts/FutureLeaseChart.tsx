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
import { chartTheme } from "@/lib/chartTheme";

interface FutureLeaseChartProps {
  data: Record<string, unknown>[];
  height?: number;
}

export default function FutureLeaseChart({
  data,
  height = 300,
}: FutureLeaseChartProps) {
  return (
    <div>
      {/* Legend */}
      <div className="flex items-center gap-5 mb-3 text-xs font-heading text-neutral-600">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-[#1B3A5C]" />
          Lease Expiration
        </span>
        <span className="flex items-center gap-1.5">
          <svg width="12" height="12">
            <defs>
              <pattern id="legend-hatch" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
                <rect width="4" height="4" fill="#1B3A5C" />
                <line x1="0" y1="0" x2="0" y2="4" stroke="white" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect width="12" height="12" rx="2" fill="url(#legend-hatch)" />
          </svg>
          Upcoming Delivery
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 bg-[#3ACA76]" />
          Projected Absorption
        </span>
      </div>

      <ResponsiveContainer width="100%" height={height}>
        <ComposedChart data={data} margin={{ top: 10, right: 20, bottom: 5, left: 0 }} barCategoryGap="12%">
          <defs>
            <pattern
              id="hatchPattern"
              patternUnits="userSpaceOnUse"
              width="6"
              height="6"
              patternTransform="rotate(45)"
            >
              <rect width="6" height="6" fill="#1B3A5C" />
              <line x1="0" y1="0" x2="0" y2="6" stroke="white" strokeWidth="2" />
            </pattern>
          </defs>
          <CartesianGrid {...chartTheme.grid} vertical={false} />
          <XAxis
            dataKey="month"
            tick={chartTheme.axis.tick}
            axisLine={{ stroke: "#e5e5e5" }}
            tickLine={false}
          />
          <YAxis tick={chartTheme.axis.tick} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={chartTheme.tooltip.contentStyle} />
          <Bar
            dataKey="leaseExpiration"
            stackId="stack"
            fill="#1B3A5C"
            name="Lease Expiration"
            radius={[0, 0, 0, 0]}
            barSize={48}
          />
          <Bar
            dataKey="upcomingDelivery"
            stackId="stack"
            fill="url(#hatchPattern)"
            name="Upcoming Delivery"
            radius={[2, 2, 0, 0]}
            barSize={48}
          />
          <Line
            type="monotone"
            dataKey="projectedAbsorption"
            stroke="#3ACA76"
            strokeWidth={2.5}
            dot={false}
            name="Projected Absorption"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
