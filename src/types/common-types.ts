import { ColumnDef } from "@tanstack/react-table";

export type CardProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: React.ReactNode;
  subtitleClassName?: string;
  headerRight?: React.ReactNode;
  noPadding?: boolean;
}

export type FilterPopupProps = {
  onApply?: () => void;
  onDefault?: () => void;
  className?: string;
}

export type SubMetric = {
  label: string;
  value: string;
}

export type ComparisonRow = {
  label: string;
  total: string;
  breakdowns: { label: string; value: string }[];
}

export type ChartPoint = {
  label: string;
  current: number;
  prior: number;
}

export type MetricCardProps = {
  title: string;
  pills?: { label: string; color?: string }[];
  kpiLabel: string;
  kpiValue: string;
  subMetrics: SubMetric[];
  comparisons: ComparisonRow[];
  chartTitle: string;
  chartData: ChartPoint[];
  isExpanded?: boolean;
  onToggle?: () => void;
}

export type StackedBarChartProps = {
  data: Record<string, unknown>[];
  bars: { dataKey: string; color: string; name?: string }[];
  xAxisKey: string;
  height?: number;
  yAxisTicks?: number[]; // Optional custom Y-axis ticks
  yAxisDomain?: [number, number] | [string, string]; // Optional custom Y-axis domain
  yAxisFormatter?: (value: number) => string; // Optional Y-axis formatter
  showLegend?: boolean; // Show legend
  customLabel?: {
    valueKey: string; // e.g., "totalDays"
    deltaKey?: string; // e.g., "delta"
    deltaPositiveKey?: string; // e.g., "deltaPositive"
    suffix?: string; // e.g., "d" for days
  };
  barSize?: number; // Optional custom bar size
}

export type TabGroupProps = {
  tabs: { label: string; value: string }[];
  activeTab: string;
  onTabChange: (value: string) => void;
  variant?: "default" | "pill" | "underline-dark";
}

export type PageHeaderProps = {
  title: string;
  showFilter?: boolean;
  onFilterClick?: () => void;
}

export type DataTableProps<TData, TValue = unknown> = {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    compact?: boolean;
    getRowClassName?: (row: TData, index: number) => string;
    headerClassName?: string;
    showSortIcon?: boolean;
    containerClassName?: string;
}

export type FilterState = {
  demandViewMode: "perPostedDay" | "totalCounts";
  funnelTab: "unique-showings" | "application" | "leases";
  selectedDistricts: string[];
  setDemandViewMode: (mode: "perPostedDay" | "totalCounts") => void;
  setFunnelTab: (tab: "unique-showings" | "application" | "leases") => void;
  setSelectedDistricts: (districts: string[]) => void;
  resetFilters: () => void;
}

export type NavigationState = {
  activePage: string;
  sidebarOpen: boolean;
  setActivePage: (page: string) => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
}

export type DialogState = {
  open: boolean;
  data: { message: string; title: string };
  cancelText: string;
  confirmText: string;
  onConfirm: () => void;
}

export type NavItem = {
  label: string;
  href: string;
  icon: string;
}
