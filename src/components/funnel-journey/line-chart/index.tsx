"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    Area,
    AreaChart,
} from "recharts";
import { chartTheme } from "@/utils/chart-theme";
import { LineChartComponentProps, LineChartLegendItem } from "@/types/funnel-journey-types";


const CustomLegend = ({
    items,
    type = "circle",
}: {
    items: LineChartLegendItem[];
    type?: "circle" | "line";
}) => {
    return (
        <div
            style={{
                display: "flex",
                gap: "12px",
                justifyContent: "flex-end",
                fontSize: 11,
                fontFamily: chartTheme.fontFamily,
                color: "#374151",
            }}
        >
            {items.map((item) => (
                <div
                    key={item.dataKey}
                    style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                    {type === "circle" ? (
                        <div
                            style={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                backgroundColor: item.color,
                            }}
                        />
                    ) : (
                        <div
                            style={{ width: 12, height: 2, backgroundColor: item.color }}
                        />
                    )}
                    <span>{item.name || item.dataKey}</span>
                </div>
            ))}
        </div>
    );
};

export default function LineChartComponent({
    data,
    lines,
    xAxisKey,
    height = 300,
    showGrid = true,
    showLegend = false,
    showArea = false,
    yAxisTicks,
    reverseLegend = false,
    dashedGrid = false
}: Readonly<LineChartComponentProps>) {
    if (showArea) {
        return (
            <ResponsiveContainer width="100%" height={height}>
                <AreaChart
                    data={data}
                    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                >
                    {showGrid && <CartesianGrid {...chartTheme.grid} vertical={false} />}
                    <XAxis
                        dataKey={xAxisKey}
                        tick={chartTheme.axis.tick}
                        axisLine={{ stroke: "--color-axis-gray", fontWeight: 500 }}
                    />
                    <YAxis
                        tick={chartTheme.axis.tick}
                        axisLine={{ stroke: "--color-axis-gray", fontWeight: 500 }}
                        {...(yAxisTicks && { ticks: yAxisTicks })}
                    />
                    <Tooltip
                        contentStyle={chartTheme.tooltip.contentStyle}
                        cursor={false}
                    />
                    {showLegend && (
                        <Legend
                            verticalAlign="top"
                            align="right"
                            content={
                                <CustomLegend
                                    items={reverseLegend ? [...lines].reverse() : lines}
                                    type="line"
                                />
                            }
                            wrapperStyle={{ top: 0, right: 0 }}
                        />
                    )}
                    {lines.map((line) => (
                        <Area
                            key={line.dataKey}
                            type="natural"
                            dataKey={line.dataKey}
                            stroke={line.color}
                            strokeWidth={2}
                            fill={line.color}
                            fillOpacity={0.1}
                            name={line.name || line.dataKey}
                            strokeDasharray={line.dashed ? "5 5" : undefined}
                        />
                    ))}
                </AreaChart>
            </ResponsiveContainer>
        );
    }

    return (
        <ResponsiveContainer width="100%" height={height}>
            <LineChart data={data} margin={{ top: 5, right: 20, bottom: -13, left: -30 }}>
                {showGrid && <CartesianGrid {...chartTheme.grid} vertical={false} stroke="var(--color-axis-border)" strokeWidth={dashedGrid ? 0.4 : 0.3} strokeDasharray={dashedGrid ? "4 4" : undefined}/>}
                <XAxis
                    dataKey={xAxisKey}
                    domain={[0,100]}
                    tick={{
                        fill: "var(--color-axis-gray)",
                        fontSize: 10,
                        fontFamily: "var(--font-familjen)",
                        fontWeight: 500,
                        fontStyle: "medium"
                    }}
                    tickLine={false}
                    axisLine={{ stroke: "var(--color-axis-border)" }}
                />
                <YAxis
                type="number"
                domain={[0,100]}
                tickCount={11}
                interval={0}
                tick={{      fill: "var(--color-axis-gray)",
                            fontSize: 10,
                            fontFamily: "var(--font-familjen)",
                            fontWeight: 500,
                            }}
                    axisLine={{ stroke: "var(--color-axis-border)" , strokeWidth: dashedGrid ? 0.5 : undefined}}
                    tickLine={false}
                    tickFormatter={(value) => value % 2 === 0 ? value : ""}
                    {...(yAxisTicks && { ticks: yAxisTicks })}
                />
                <Tooltip
                    contentStyle={chartTheme.tooltip.contentStyle}
                    cursor={false}
                />
                {showLegend && (
                    <Legend
                        verticalAlign="top"
                        align="right"
                        content={
                            <CustomLegend
                                items={reverseLegend ? [...lines].reverse() : lines}
                                type="circle"
                            />
                        }
                        wrapperStyle={{ top: -10, right: 0 }}
                    />
                )}
                {lines.map((line) => (
                    <Line
                        key={line.dataKey}
                        type="monotone"
                        dataKey={line.dataKey}
                        stroke={line.color}
                        strokeWidth={3}
                        dot={false}
                        name={line.name || line.dataKey}
                        strokeDasharray={line.dashed ? "5 5" : undefined}
                    />
                ))}
            </LineChart>
        </ResponsiveContainer>
    );
}
