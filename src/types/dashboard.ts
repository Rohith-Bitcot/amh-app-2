import { type LucideIcon } from "lucide-react";

export interface KpiData {
  label: string;
  value: number | string;
  trend: number[];
  changePercent?: number;
  changeLabel?: string;
}

export interface DemandMetricData {
  title: string;
  value: number;
  unit?: string;
  sparklineData: number[];
  currentMonth: { label: string; value: number };
  previousMonth: { label: string; value: number };
  monthlyBreakdown: { month: string; value: number }[];
}

export interface PerformanceRow {
  metric: string;
  [year: string]: string | number;
}

export interface FilterState {
  dateRange: { start: string; end: string } | null;
  demandViewMode: "communities" | "properties";
  funnelTab: "unique-showings" | "application" | "leases";
}

export interface PropertyDrilldownRow {
  propertyId: string;
  category: string;
  dom: number;
  websitePageviews: number;
  interests: number;
  showings: number;
  applications: number;
  approvalPercent: number;
  stageDeclinePercent: number;
}

export interface DistrictRow {
  district: string;
  domRange: string;
  holdRecentApp: number;
  holdRecentPhotos: number;
  marketingReview: number;
  marketingOldPics: number;
  dispoReview: number;
}

export interface SentimentRow {
  district: string;
  accessIssue: number;
  propertyCond: number;
  technicalIssue: number;
  priceConcern: number;
  locationIssue: number;
  amenityIssue: number;
  maintenanceDelay: number;
  other: number;
  total: number;
}

export interface MessageDrilldownRow {
  propertyId: string;
  leadName: string;
  date: string;
  messageType: string;
  sentimentCategory: string;
  messageContent: string;
}

export interface ActivityLogRow {
  propertyId: string;
  leadName: string;
  date: string;
  event: string;
  source: string;
  comment: string;
}

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};
