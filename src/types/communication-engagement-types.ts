export type DonutChartProps = {
    data: { name: string; value: number }[];
    colors: string[];
    height?: number;
    innerRadius?: number;
    outerRadius?: number;
    centerLabel?: string;
    centerValue?: string;
    showLabels?: boolean;
    children?: React.ReactNode;
};

export type SegmentLabelProps = {
    cx?: number;
    cy?: number;
    midAngle?: number;
    innerRadius?: number;
    outerRadius?: number;
    name?: string;
    value?: number;
}