"use client";

import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";
import { chartTheme } from "@/utils/chart-theme";
import { DonutChartProps, SegmentLabelProps } from "@/types/communication-engagement-types";

const RADIAN = Math.PI / 180;

function renderSegmentLabel(props: SegmentLabelProps) {
    const { 
        cx = 0, 
        cy = 0, 
        midAngle = 0, 
        innerRadius = 0, 
        outerRadius = 0, 
        name = "", 
        value = 0 
    } = props;

    // Position text at the midpoint between inner and outer radius
    const radius = innerRadius + (outerRadius - innerRadius) / 2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    // Determine text anchor based on position
    const textAnchor = "middle";

    return (
        <g>
            <text
                x={x}
                y={y - 9}
                textAnchor={textAnchor}
                fontSize={9}
                fontWeight={500}
                fill="#FFFFFF"
                fontFamily={chartTheme.fontFamily}
            >
                {name}
            </text>
            <text
                x={x}
                y={y + 9}
                textAnchor={textAnchor}
                fontSize={18}
                fontWeight={700}
                fill="#FFFFFF"
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
}: Readonly<DonutChartProps>) {
    const renderCenterContent = () => {
        if (children) {
            return (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {children}
                </div>
            );
        }

        if (centerLabel || centerValue) {
            return (
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
            );
        }

        return null;
    };

    return (
        <div className="relative">
            <ResponsiveContainer width="100%" height={height}>
                <PieChart>
                    <Pie
                        data={data.map((entry, index) => ({
                            ...entry,
                            fill: colors[index % colors.length]
                        }))}
                        cx="50%"
                        cy="50%"
                        innerRadius={innerRadius}
                        outerRadius={outerRadius}
                        paddingAngle={2}
                        dataKey="value"
                        strokeWidth={0}
                        label={showLabels ? renderSegmentLabel : undefined}
                        labelLine={false}
                    />
                    {!showLabels && (
                        <Tooltip
                            contentStyle={chartTheme.tooltip.contentStyle}
                            formatter={(value) => [`${value}%`]}
                        />
                    )}
                </PieChart>
            </ResponsiveContainer>
            {renderCenterContent()}
        </div>
    );
}
