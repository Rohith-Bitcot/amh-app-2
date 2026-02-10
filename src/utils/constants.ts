import { NavItem } from "@/types/dashboard";
import { Home, GitBranch, Activity, MessageSquare } from "lucide-react";

export const PRIVATE_PATH = {
  EXECUTIVE_OVERVIEW: "/executive-overview",
  PROPERTY_HEALTH: "/property-health",
  FUNNEL_JOURNEY: "/funnel-journey",
  COMMUNICATION_ENGAGEMENT: "/communication-engagement",
};

export const PUBLIC_PATH = {};

export const ROUTES_PATH = {
  ...PRIVATE_PATH,
  ...PUBLIC_PATH,
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Executive Overview", href: "/executive-overview", icon: Home },
  { label: "Funnel Journey", href: "/funnel-journey", icon: GitBranch },
  { label: "Property Health", href: "/property-health", icon: Activity },
  {
    label: "Communication & Engagement",
    href: "/communication-engagement",
    icon: MessageSquare,
  },
];

export const CHART_COLORS = {
  primary: "#0369a1",
  secondary: "#0284c7",
  tertiary: "#38bdf8",
  quaternary: "#7dd3fc",
  quinary: "#bae6fd",

  blue: {
    900: "#0c4a6e",
    800: "#075985",
    700: "#0369a1",
    600: "#0284c7",
    500: "#0ea5e9",
    400: "#38bdf8",
    300: "#7dd3fc",
    200: "#bae6fd",
    100: "#e0f2fe",
  },

  stacked: ["#34d399", "#60a5fa", "#818cf8", "#fbbf24", "#f87171"],
  stackedLabels: [
    "Hold Recent App",
    "Hold Recent Photos",
    "Marketing Review",
    "Marketing Old Pics",
    "Dispo Review",
  ],

  funnel: ["#0369a1", "#0284c7", "#0ea5e9", "#38bdf8", "#7dd3fc", "#bae6fd"],

  sentiment: {
    positive: "#22c55e",
    neutral: "#f59e0b",
    negative: "#ef4444",
  },

  donut: {
    lead: ["#0369a1", "#0284c7", "#0ea5e9", "#38bdf8"],
    showing: ["#0284c7", "#38bdf8", "#7dd3fc", "#bae6fd"],
    appStart: ["#16a34a", "#22c55e", "#4ade80", "#86efac"],
    tourCanceled: ["#dc2626", "#ef4444", "#f87171", "#fca5a5"],
  },
};

export const HEATMAP_COLORS = {
  0: "bg-white",
  1: "bg-rose-50",
  2: "bg-rose-100",
  5: "bg-rose-200",
  10: "bg-rose-300",
  15: "bg-red-300",
  20: "bg-red-400",
};

export function getHeatmapColor(value: number): string {
  if (value >= 20) return "bg-red-400 text-white";
  if (value >= 15) return "bg-red-300 text-white";
  if (value >= 10) return "bg-rose-300";
  if (value >= 5) return "bg-rose-200";
  if (value >= 2) return "bg-rose-100";
  if (value >= 1) return "bg-rose-50";
  return "bg-white";
}

export const LEASES_SIGNED_BAR_DATA = [
  { h: "52px", day: "S" },
  { h: "34px", day: "S" },
  { h: "46px", day: "M" },
  { h: "53px", day: "T" },
  { h: "46px", day: "W" },
  { h: "34px", day: "T" },
  { h: "45px", day: "F", isSpecial: true },
];
