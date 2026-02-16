const PUBLIC_PATH = {};

const PRIVATE_PATH = {
  EXECUTIVE_OVERVIEW: "/executive-overview",
  FUNNEL_JOURNEY: "/funnel-journey",
  PROPERTY_HEALTH: "/property-health",
  COMMUNICATION_ENGAGEMENT: "/communication-engagement",
  FUNNEL_DRILLDOWN: "/executive-overview/funnel-drilldown",
};

export const ROUTES_PATH = {
  ...PUBLIC_PATH,
  ...PRIVATE_PATH,
};

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Executive Overview",
    href: ROUTES_PATH.EXECUTIVE_OVERVIEW,
    icon: "/assets/svgs/executive-overview.svg",
  },
  {
    label: "Funnel Journey",
    href: ROUTES_PATH.FUNNEL_JOURNEY,
    icon: "/assets/svgs/funnel-journey.svg",
  },
  {
    label: "Property Health",
    href: ROUTES_PATH.PROPERTY_HEALTH,
    icon: "/assets/svgs/property-health.svg",
  },
  {
    label: "Communication & Engagement",
    href: ROUTES_PATH.COMMUNICATION_ENGAGEMENT,
    icon: "/assets/svgs/communication-engagement.svg",
  },
];

export const LEASES_SIGNED_BAR_DATA = [
  { day: "S", h: "52px", isSpecial: false },
  { day: "S", h: "34px", isSpecial: false },
  { day: "M", h: "46px", isSpecial: false },
  { day: "T", h: "53px", isSpecial: false },
  { day: "W", h: "46px", isSpecial: false },
  { day: "T", h: "34px", isSpecial: false },
  { day: "F", h: "45px", isSpecial: true }, // Special striped bar
];

export const CHART_COLORS = {
  primary: "var(--color-sidebar)",
  secondary: "var(--color-link)",
  tertiary: "var(--color-light-blue)",
  quaternary: "#7dd3fc",
  quinary: "#bae6fd",

  blue: {
    900: "var(--color-dark-blue)",
    800: "var(--color-sidebar)",
    700: "var(--color-sidebar-hover)",
    600: "var(--color-link)",
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

  funnel: [
    "var(--color-sidebar)",
    "var(--color-link)",
    "#0ea5e9",
    "#38bdf8",
    "#7dd3fc",
    "#bae6fd",
  ],

  sentiment: {
    positive: "var(--color-green-success)",
    neutral: "#f59e0b",
    negative: "var(--color-live)",
  },

  donut: {
    lead: ["var(--color-sidebar)", "var(--color-link)", "#0ea5e9", "#38bdf8"],
    showing: ["var(--color-link)", "#38bdf8", "#7dd3fc", "#bae6fd"],
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

export function getHeatmapColor(value: number | string): string {
  const numValue = typeof value === "string" ? parseFloat(value) : value;
  const border = "border border-[var(--color-sentiment-border)]";
  if (numValue >= 10) return `bg-[var(--color-table-shade-3)] ${border}`;
  if (numValue >= 5) return `bg-[var(--color-table-shade-2)] ${border}`;
  if (numValue >= 1) return `bg-[var(--color-table-shade-1)] ${border}`;
  return `bg-white ${border}`;
}
