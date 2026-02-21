export type FunnelDataPoint = {
  stage: string;
  value: number;
  color: string;
  conversionPct: string | null;
  priorYearPct: string | null;
  pyPositive?: boolean;
  callout?: { label: string; value: number };
}

export type FunnelConversionChartProps = {
  data: FunnelDataPoint [];
  height?: number;
  onBarClick?: (stage: string) => void;
}

export type KpiCardProps = {
  children: React.ReactNode;
  className?: string;
  leasesSigned?: boolean;
}

export type LeadCountDataPoint = {
  range: string;
  value: number;
  color: string;
}

export type LeadCountBarChartProps = {  
  data: LeadCountDataPoint[];
}

export type RadarChartComponentProps = {
  data: Record<string, unknown>[];
  radars: {
    dataKey: string;
    color: string;
    name?: string;
    fillOpacity?: number;
  }[];
  angleKey: string;
  height?: number;
  showLegend?: boolean;
}

export type PolarAngleAxisTickProps = {
  x: number | string;
  y: number | string;
  payload: { value: string | number };
  textAnchor: "start" | "middle" | "end" | "inherit" | undefined;
  cx?: number;
  cy?: number;
}