// Executive Overview mock data - structured for API replacement

export const kpiCards = {
  leasesSigned: {
    title: "Leases Signed (MTD)",
    value: "300",
    current: 32,
    priorDay: 45,
    pendingText: "20 Pending final signature",
    weeklyBars: [
      { day: "S", value: 40 },
      { day: "S", value: 55 },
      { day: "M", value: 48 },
      { day: "T", value: 70 },
      { day: "W", value: 62 },
      { day: "T", value: 45 },
      { day: "F", value: 30 },
    ],
  },
  leasePacing: {
    title: "Lease Pacing",
    value: "80%",
    subLabel: "to goal",
    approvedApps: 13,
    progressPercent: 80,
    bars: [65, 72, 80, 75, 85, 90, 82],
  },
  leasingSpread: {
    title: "Leasing Spread",
    releasing: { value: "3.2%", change: "+3.2 pp" },
    renewal: { value: "4.5%", change: "+6.4 pp" },
  },
  inventory: {
    title: "Current Fully Marketed Inventory",
    value: "155",
    agedPercent: "33%",
    agedDays: "+30",
    bars: [50, 65, 80, 70, 90, 85, 75],
  },
  leadPacing: {
    title: "Lead Pacing",
    value: "4.8",
    subLabel: "Leads per Marketed Day",
    pacingNote: "Pacing above 30-day average",
  },
};

export const funnelConversionsData = [
  {
    stage: "Leads",
    value: 375,
    color: "var(--color-stage-leads)",
    conversionPct: null,
    priorYearPct: null,
  },
  {
    stage: "Unique\nShowings",
    value: 300,
    color: "var(--color-stage-showings)",
    conversionPct: "64%",
    priorYearPct: "23% PY",
    pyPositive: true,
  },
  {
    stage: "Applications",
    value: 187,
    color: "var(--color-stage-applications)",
    conversionPct: "49%",
    priorYearPct: "12% PY",
    pyPositive: true,
    callout: { label: "No Showing", value: 32 },
  },
  {
    stage: "Approved",
    value: 102,
    color: "var(--color-stage-approved)",
    conversionPct: "34%",
    priorYearPct: "-6% PY",
    pyPositive: false,
  },
  {
    stage: "Leases",
    value: 38,
    color: "var(--color-stage-leases)",
    conversionPct: "31%",
    priorYearPct: "10% PY",
    pyPositive: true,
  },
];

export const radarChartData = [
  { metric: "0-7", application: 45, leads: 82, leases: 95 },
  { metric: "8-14", application: 55, leads: 68, leases: 75 },
  { metric: "15-30", application: 75, leads: 85, leases: 60 },
  { metric: "30-60", application: 82, leads: 70, leases: 90 },
  { metric: "60+", application: 40, leads: 55, leases: 80 },
];

export const leadCountByDOMData = [
  { range: "0-7", value: 20, color: "var(--color-stage-leads)" },
  { range: "8-14", value: 16, color: "var(--color-stage-leads)" },
  { range: "15-30", value: 11, color: "var(--color-stage-leads)" },
  { range: "30+", value: 7, color: "var(--color-range-old)" },
  { range: "60+", value: 5, color: "var(--color-range-old)" },
  { range: "90+", value: 3, color: "var(--color-range-old)" },
];

export const demandOverviewData = [
  {
    title: "New Accounts Creation Per Posted Day",
    pills: [{ label: "444.14" }, { label: "Monitored" }],
    kpiLabel: "New Accounts T7",
    kpiValue: "2.7",
    subMetrics: [
      { label: "Coming Soon", value: "1.7" },
      { label: "Fully Marketing", value: "3.4" },
    ],
    comparisons: [
      {
        label: "Vs Previous T7",
        total: "+0.25",
        breakdowns: [
          { label: "CS", value: "+0.7" },
          { label: "FM", value: "+0.2" },
        ],
      },
      {
        label: "Vs Last Year",
        total: "+0.14",
        breakdowns: [
          { label: "CS", value: "+0.5" },
          { label: "FM", value: "+0.4" },
        ],
      },
    ],
    chartTitle: "Current Year Vs Last Year Full Marketed",
    chartData: [
      { label: "Tue", current: 90, prior: 80 },
      { label: "Wed", current: 120, prior: 100 },
      { label: "Thu", current: 165, prior: 130 },
      { label: "Fri", current: 205, prior: 165 },
      { label: "Sat", current: 260, prior: 210 },
      { label: "Sun", current: 300, prior: 240 },
      { label: "Mon", current: 330, prior: 260 },
    ],
  },
  {
    title: "Property Progressions Per Period Day",
    pills: [{ label: "612.30" }, { label: "Monitored" }],
    kpiLabel: "Progressions T7",
    kpiValue: "3.4",
    subMetrics: [
      { label: "Coming Soon", value: "2.1" },
      { label: "Fully Marketing", value: "4.8" },
    ],
    comparisons: [
      {
        label: "Vs Previous T7",
        total: "+0.18",
        breakdowns: [
          { label: "CS", value: "+0.3" },
          { label: "FM", value: "+0.1" },
        ],
      },
      {
        label: "Vs Last Year",
        total: "+0.32",
        breakdowns: [
          { label: "CS", value: "+0.4" },
          { label: "FM", value: "+0.6" },
        ],
      },
    ],
    chartTitle: "Current Year Vs Last Year Full Marketed",
    chartData: [
      { label: "Tue", current: 110, prior: 95 },
      { label: "Wed", current: 155, prior: 125 },
      { label: "Thu", current: 210, prior: 160 },
      { label: "Fri", current: 275, prior: 200 },
      { label: "Sat", current: 340, prior: 245 },
      { label: "Sun", current: 395, prior: 285 },
      { label: "Mon", current: 440, prior: 320 },
    ],
  },
  {
    title: "Property Interest Per Period Day",
    pills: [{ label: "1,284" }, { label: "Monitored" }],
    kpiLabel: "Interests T7",
    kpiValue: "284",
    subMetrics: [
      { label: "Coming Soon", value: "89" },
      { label: "Fully Marketing", value: "195" },
    ],
    comparisons: [
      {
        label: "Vs Previous T7",
        total: "+12",
        breakdowns: [
          { label: "CS", value: "+8" },
          { label: "FM", value: "+4" },
        ],
      },
      {
        label: "Vs Last Year",
        total: "+22",
        breakdowns: [
          { label: "CS", value: "+10" },
          { label: "FM", value: "+12" },
        ],
      },
    ],
    chartTitle: "Current Year Vs Last Year Full Marketed",
    chartData: [
      { label: "Tue", current: 150, prior: 120 },
      { label: "Wed", current: 210, prior: 165 },
      { label: "Thu", current: 290, prior: 210 },
      { label: "Fri", current: 380, prior: 270 },
      { label: "Sat", current: 470, prior: 335 },
      { label: "Sun", current: 550, prior: 395 },
      { label: "Mon", current: 620, prior: 450 },
    ],
  },
  {
    title: "Leads Per Posted Day",
    pills: [{ label: "980.50" }, { label: "Monitored" }],
    kpiLabel: "Leads T7",
    kpiValue: "209",
    subMetrics: [
      { label: "Coming Soon", value: "64" },
      { label: "Fully Marketing", value: "145" },
    ],
    comparisons: [
      {
        label: "Vs Previous T7",
        total: "+8",
        breakdowns: [
          { label: "CS", value: "+5" },
          { label: "FM", value: "+3" },
        ],
      },
      {
        label: "Vs Last Year",
        total: "+15",
        breakdowns: [
          { label: "CS", value: "+7" },
          { label: "FM", value: "+8" },
        ],
      },
    ],
    chartTitle: "Current Year Vs Last Year Full Marketed",
    chartData: [
      { label: "Tue", current: 100, prior: 85 },
      { label: "Wed", current: 145, prior: 115 },
      { label: "Thu", current: 200, prior: 150 },
      { label: "Fri", current: 265, prior: 195 },
      { label: "Sat", current: 330, prior: 240 },
      { label: "Sun", current: 385, prior: 280 },
      { label: "Mon", current: 430, prior: 315 },
    ],
  },
  {
    title: "Showings Per Fully Monitored Day",
    pills: [{ label: "325.80" }, { label: "Monitored" }],
    kpiLabel: "Showings T7",
    kpiValue: "67",
    subMetrics: [
      { label: "Coming Soon", value: "19" },
      { label: "Fully Marketing", value: "48" },
    ],
    comparisons: [
      {
        label: "Vs Previous T7",
        total: "+4",
        breakdowns: [
          { label: "CS", value: "+2" },
          { label: "FM", value: "+2" },
        ],
      },
      {
        label: "Vs Last Year",
        total: "+6",
        breakdowns: [
          { label: "CS", value: "+3" },
          { label: "FM", value: "+3" },
        ],
      },
    ],
    chartTitle: "Current Year Vs Last Year Full Marketed",
    chartData: [
      { label: "Tue", current: 35, prior: 28 },
      { label: "Wed", current: 52, prior: 40 },
      { label: "Thu", current: 75, prior: 55 },
      { label: "Fri", current: 100, prior: 72 },
      { label: "Sat", current: 128, prior: 90 },
      { label: "Sun", current: 152, prior: 108 },
      { label: "Mon", current: 172, prior: 125 },
    ],
  },
  {
    title: "Applications Per Day Posted",
    pills: [{ label: "720.25" }, { label: "Monitored" }],
    kpiLabel: "Applications T7",
    kpiValue: "150",
    subMetrics: [
      { label: "Coming Soon", value: "42" },
      { label: "Fully Marketing", value: "108" },
    ],
    comparisons: [
      {
        label: "Vs Previous T7",
        total: "+6",
        breakdowns: [
          { label: "CS", value: "+3" },
          { label: "FM", value: "+3" },
        ],
      },
      {
        label: "Vs Last Year",
        total: "+10",
        breakdowns: [
          { label: "CS", value: "+4" },
          { label: "FM", value: "+6" },
        ],
      },
    ],
    chartTitle: "Current Year Vs Last Year Full Marketed",
    chartData: [
      { label: "Tue", current: 75, prior: 60 },
      { label: "Wed", current: 110, prior: 85 },
      { label: "Thu", current: 155, prior: 115 },
      { label: "Fri", current: 205, prior: 150 },
      { label: "Sat", current: 260, prior: 190 },
      { label: "Sun", current: 305, prior: 225 },
      { label: "Mon", current: 345, prior: 255 },
    ],
  },
];

export const performanceTableData = {
  headers: ["Geo", "2023", "2024", "2025", "YoY"],
  highlightedHeader: "2025",
  rows: [
    {
      metric: "Distinct Properties Marketed",
      "2023": "1,454",
      "2024": "3,588",
      "2025": "4,245",
      YoY: "5%",
    },
    {
      metric: "Distinct Coming Soon",
      "2023": "3,588",
      "2024": "$4,214",
      "2025": "2,154",
      YoY: "-2%",
    },
    {
      metric: "Distinct Fully Marketed",
      "2023": "2,154",
      "2024": "$4,214",
      "2025": "3,588",
      YoY: "-2%",
    },
    {
      metric: "Marketed Days",
      "2023": "4,245",
      "2024": "$4,214",
      "2025": "548",
      YoY: "12%",
    },
    {
      metric: "Coming Soon Days",
      "2023": "3,588",
      "2024": "2,154",
      "2025": "3,588",
      YoY: "12%",
    },
    {
      metric: "Fully Marketed Days",
      "2023": "548",
      "2024": "4,245",
      "2025": "2,154",
      YoY: "5%",
    },
    {
      metric: "Fully Marketed Days %",
      "2023": "3,588",
      "2024": "4,245",
      "2025": "1,554",
      YoY: "5%",
    },
    {
      metric: "Fully Marketed Days per Fully Marketed Property",
      "2023": "4,245",
      "2024": "2,154",
      "2025": "3,588",
      YoY: "-2%",
    },
    {
      metric: "Leads",
      "2023": "2,154",
      "2024": "4,245",
      "2025": "4,245",
      YoY: "-2%",
    },
    {
      metric: "Total Interest",
      "2023": "3,588",
      "2024": "2,154",
      "2025": "3,588",
      YoY: "12%",
    },
    {
      metric: "Distinct Interest",
      "2023": "548",
      "2024": "3,588",
      "2025": "2,154",
      YoY: "12%",
    },
  ],
};
