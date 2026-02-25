export type LegendItem = {
    dataKey: string;
    color: string;
    name?: string;
}

export type BarChartComponentProps = {
    data: Record<string, unknown>[];
    bars: { dataKey: string; color: string; name?: string }[];
    xAxisKey: string;
    height?: number;
    showGrid?: boolean;
    showLegend?: boolean;
    layout?: "horizontal" | "vertical";
    xAxisTicks?: number[]; // Optional custom X-axis ticks
    yAxisFormatter?: (value: number) => string; // Optional Y-axis formatter
    showLabels?: boolean; // Show labels on top of bars
    barSize?: number; // Optional custom bar size
    reverseLegend?: boolean;
}

export type LineChartLegendItem = {
    dataKey: string;
    color: string;
    name?: string;
    dashed?: boolean;
}

export type LineChartComponentProps = {
    data: Record<string, unknown>[];
    lines: { dataKey: string; color: string; name?: string; dashed?: boolean }[];
    xAxisKey: string;
    height?: number;
    showGrid?: boolean;
    showLegend?: boolean;
    showArea?: boolean;
    yAxisTicks?: number[]; // Optional custom Y-axis ticks
    reverseLegend?: boolean;
    dashedGrid?: boolean;
}