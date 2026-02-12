"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { chartTheme } from "@/lib/chartTheme";

interface DonutChartProps {
  data: { name: string; value: number }[];
  colors: string[];
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
  centerLabel?: string;
  centerValue?: string;
  showLabels?: boolean;
  children?: React.ReactNode;
}

const RADIAN = Math.PI / 180;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderSegmentLabel(props: any) {
  const { cx, cy, midAngle, outerRadius, name, value } = props;
  const radius = outerRadius + 16;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const textAnchor = x > cx ? "start" : "end";

  return (
    <g>
      <text
        x={x}
        y={y - 4}
        textAnchor={textAnchor}
        fontSize={8}
        fill="#a3a3a3"
        fontFamily={chartTheme.fontFamily}
      >
        {name}
      </text>
      <text
        x={x}
        y={y + 10}
        textAnchor={textAnchor}
        fontSize={14}
        fontWeight={700}
        fill="#525252"
        fontFamily={chartTheme.fontFamily}
      >
        {value}
      </text>
    </g>
  );
}

export default function DonutChart({
  data,
  colors,
  height = 380,
  innerRadius = 70,
  outerRadius = 130,
  centerLabel,
  centerValue,
  showLabels = false,
  children,
}: DonutChartProps) {
  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={2}
            dataKey="value"
            strokeWidth={0}
            label={showLabels ? renderSegmentLabel : undefined}
            labelLine={false}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          {!showLabels && (
            <Tooltip
              contentStyle={chartTheme.tooltip.contentStyle}
              formatter={(value) => [`${value}%`]}
            />
          )}
        </PieChart>
      </ResponsiveContainer>
      {children ? (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {children}
        </div>
      ) : centerLabel || centerValue ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          {centerValue && (
            <span className="text-xl font-bold font-heading text-neutral-800">
              {centerValue}
            </span>
          )}
          {centerLabel && (
            <span className="text-[10px] font-normal font-heading text-neutral-500">
              {centerLabel}
            </span>
          )}
        </div>
      ) : null}
    </div>
  );
}
