// Funnel Journey mock data - structured for API replacement

// Section 1: Lead Counts & Registration (horizontal progress bars)
export const leadCountsData = [
  { source: "Zillow", leads: 12450, regRate: 65, avgConfirmTime: "4.2h", color: "#01497B" },
  { source: "AMH Website", leads: 12450, regRate: 48, avgConfirmTime: "4.2h", color: "#66B1EA" },
  { source: "Realtor", leads: 12450, regRate: 32, avgConfirmTime: "4.2h", color: "#3ACA76" },
];

// Section 1: Leads New vs Returning (area/line chart)
export const leadsNewReturningData = [
  { month: "Jan", newLeads: 50, returning: 10 },
  { month: "Feb", newLeads: 58, returning: 18 },
  { month: "Mar", newLeads: 58, returning: 28 },
  { month: "Apr", newLeads: 30, returning: 30 },
  { month: "May", newLeads: 28, returning: 42 },
  { month: "Jun", newLeads: 50, returning: 46 },
  { month: "Jul", newLeads: 70, returning: 42 },
  { month: "Aug", newLeads: 55, returning: 48 },
  { month: "Sep", newLeads: 30, returning: 50 },
  { month: "Oct", newLeads: 82, returning: 52 },
  { month: "Nov", newLeads: 90, returning: 55 },
  { month: "Dec", newLeads: 95, returning: 58 },
];

// Section 3: Timing Distribution (range/bullet chart)
export const timingDistributionData = [
  { stage: "Lead to Showing", min: 2, max: 24, actual: 8, benchmark: 10, unit: "hrs" },
  { stage: "Showing to Application", min: 0.5, max: 12, actual: 6.2, benchmark: 7, unit: "hrs" },
  { stage: "Application to Approval", min: 4, max: 30, actual: 13, benchmark: 16, unit: "hrs" },
];

// Section 3: Lead Counts by Source (table)
export const leadCountsBySourceData = [
  { source: "Zillow", t7: "2.2", pw: "2.1", py: "1.8" },
  { source: "AMH", t7: "2.7", pw: "1.8", py: "1.9" },
  { source: "Apartments", t7: "1.2", pw: "1.4", py: "1.8" },
];

// Section 4: Timing Stages (stacked bar, 7 segments)
export const timingStagesData = [
  { month: "Dec 24", shoppingCycle: 20, showing: 8, appStart: 15, appSubmit: 10, appDecision: 5, leaveStart: 30, leaveSign: 12, totalDays: 35, delta: 2, deltaPositive: false },
  { month: "Jan 25", shoppingCycle: 10, showing: 20, appStart: 8, appSubmit: 15, appDecision: 12, leaveStart: 25, leaveSign: 10, totalDays: 42, delta: 7, deltaPositive: false },
  { month: "Feb 25", shoppingCycle: 25, showing: 15, appStart: 12, appSubmit: 8, appDecision: 20, leaveStart: 10, leaveSign: 10, totalDays: 40, delta: 2, deltaPositive: true },
  { month: "Mar 25", shoppingCycle: 20, showing: 10, appStart: 18, appSubmit: 12, appDecision: 8, leaveStart: 22, leaveSign: 10, totalDays: 35, delta: 3, deltaPositive: true },
  { month: "Apr 25", shoppingCycle: 12, showing: 18, appStart: 10, appSubmit: 15, appDecision: 15, leaveStart: 20, leaveSign: 10, totalDays: 42, delta: 7, deltaPositive: false },
  { month: "May 25", shoppingCycle: 25, showing: 12, appStart: 15, appSubmit: 10, appDecision: 8, leaveStart: 20, leaveSign: 10, totalDays: 40, delta: 2, deltaPositive: true },
  { month: "Jun 25", shoppingCycle: 20, showing: 15, appStart: 10, appSubmit: 18, appDecision: 10, leaveStart: 17, leaveSign: 10, totalDays: 35, delta: 5, deltaPositive: true },
  { month: "Jul 25", shoppingCycle: 30, showing: 10, appStart: 12, appSubmit: 15, appDecision: 8, leaveStart: 15, leaveSign: 10, totalDays: 42, delta: 7, deltaPositive: false },
  { month: "Aug 25", shoppingCycle: 22, showing: 18, appStart: 10, appSubmit: 12, appDecision: 10, leaveStart: 18, leaveSign: 10, totalDays: 40, delta: 2, deltaPositive: true },
  { month: "Sep 25", shoppingCycle: 20, showing: 12, appStart: 15, appSubmit: 18, appDecision: 8, leaveStart: 17, leaveSign: 10, totalDays: 35, delta: 5, deltaPositive: true },
  { month: "Oct 25", shoppingCycle: 12, showing: 15, appStart: 10, appSubmit: 12, appDecision: 25, leaveStart: 16, leaveSign: 10, totalDays: 40, delta: 5, deltaPositive: false },
  { month: "Nov 25", shoppingCycle: 25, showing: 10, appStart: 15, appSubmit: 12, appDecision: 8, leaveStart: 20, leaveSign: 10, totalDays: 42, delta: 2, deltaPositive: false },
  { month: "Dec 25", shoppingCycle: 20, showing: 15, appStart: 12, appSubmit: 15, appDecision: 10, leaveStart: 18, leaveSign: 10, totalDays: 38, delta: 4, deltaPositive: true },
];

export const timingStagesLegend = [
  { key: "shoppingCycle", label: "Shopping cycle", color: "#01497B" },
  { key: "showing", label: "Showing", color: "#66EA9D" },
  { key: "appStart", label: "App start", color: "#66B1EA" },
  { key: "appSubmit", label: "App submit", color: "#8489F7" },
  { key: "appDecision", label: "App decision", color: "#F7D256" },
  { key: "leaveStart", label: "Leave start", color: "#F69F69" },
  { key: "leaveSign", label: "Leave sign", color: "#F66969" },
];

// Section 5: Leasing Conversions by Geo & Stage
export const leasingConversionsData = {
  headers: [
    { group: "Geo", columns: ["Geo"] },
    { group: "Unique Showing", columns: ["T7", "PW", "PY"] },
    { group: "App Start to Submit", columns: ["T7", "PW", "PY"], highlighted: true },
    { group: "Approval", columns: ["T7", "PW", "PY"] },
    { group: "Approval to Lease", columns: ["T7", "PW", "PY"], highlighted: true },
  ],
  rows: [
    { geo: "District A", uniqueShowing: ["10%", "10%", "10%"], appStartSubmit: ["10%", "10%", "10%"], approval: ["10%", "10%", "10%"], approvalToLease: ["10%", "10%", "10%"] },
    { geo: "District B", uniqueShowing: ["10%", "10%", "10%"], appStartSubmit: ["10%", "10%", "10%"], approval: ["10%", "10%", "8%"], approvalToLease: ["10%", "10%", "10%"] },
    { geo: "District C", uniqueShowing: ["10%", "10%", "10%"], appStartSubmit: ["10%", "10%", "10%"], approval: ["10%", "10%", "10%"], approvalToLease: ["11%", "10%", "10%"] },
    { geo: "District D", uniqueShowing: ["10%", "10%", "10%"], appStartSubmit: ["10%", "10%", "10%"], approval: ["10%", "10%", "10%"], approvalToLease: ["10%", "10%", "10%"] },
    { geo: "District E", uniqueShowing: ["10%", "10%", "10%"], appStartSubmit: ["10%", "10%", "10%"], approval: ["10%", "10%", "10%"], approvalToLease: ["10%", "10%", "10%"] },
    { geo: "District F", uniqueShowing: ["10%", "10%", "10%"], appStartSubmit: ["10%", "10%", "10%"], approval: ["10%", "10%", "10%"], approvalToLease: ["10%", "10%", "10%"] },
  ],
};

// Section 6: Dark Lead Funnel tabs content
export const showingCountsBySourceData = [
  { source: "Zillow", t7: "2.2", pw: "2.1", py: "1.8" },
  { source: "AMH", t7: "2.7", pw: "1.8", py: "1.9" },
  { source: "Apartments", t7: "1.2", pw: "1.4", py: "1.8" },
];

export const conversionFromPrevStageData = [
  { source: "Zillow", t7: "10%", pw: "10%", py: "10%" },
  { source: "AMH", t7: "10%", pw: "10%", py: "10%" },
  { source: "Apartments", t7: "10%", pw: "10%", py: "10%" },
];

// Section 7: Application Matric table
export const applicationMatricData = [
  { geo: "District A", denialRate: "50%", cancellationRate: "20%", selfService: "35%", avgApplicants: 22 },
  { geo: "District B", denialRate: "20", cancellationRate: "45%", selfService: "66", avgApplicants: 33 },
  { geo: "District C", denialRate: "40%", cancellationRate: "15%", selfService: "27%", avgApplicants: 20 },
  { geo: "District D", denialRate: "50%", cancellationRate: "70%", selfService: "10%", avgApplicants: 50 },
  { geo: "District E", denialRate: "60%", cancellationRate: "22%", selfService: "30%", avgApplicants: 70 },
  { geo: "District F", denialRate: "30%", cancellationRate: "44%", selfService: "12%", avgApplicants: 44 },
];

// Section 8: App Stages Duration (stacked bar, 3 segments)
export const appStagesDurationData = [
  { month: "Dec 24", appStart: 4, appSubmit: 6, appDecision: 5 },
  { month: "Jan 25", appStart: 5, appSubmit: 7, appDecision: 4 },
  { month: "Feb 25", appStart: 4, appSubmit: 5, appDecision: 6 },
  { month: "Mar 25", appStart: 6, appSubmit: 6, appDecision: 5 },
  { month: "Apr 25", appStart: 5, appSubmit: 7, appDecision: 6 },
  { month: "May 25", appStart: 6, appSubmit: 5, appDecision: 7 },
  { month: "Jun 25", appStart: 5, appSubmit: 8, appDecision: 5 },
  { month: "Jul 25", appStart: 7, appSubmit: 6, appDecision: 6 },
  { month: "Aug 25", appStart: 6, appSubmit: 7, appDecision: 7 },
  { month: "Sep 25", appStart: 7, appSubmit: 8, appDecision: 6 },
  { month: "Oct 25", appStart: 6, appSubmit: 7, appDecision: 8 },
  { month: "Nov 25", appStart: 8, appSubmit: 8, appDecision: 7 },
  { month: "Dec 25", appStart: 6, appSubmit: 7, appDecision: 5 },
];

export const appStagesDurationLegend = [
  { key: "appStart", label: "App start", color: "#66B1EA" },
  { key: "appSubmit", label: "App submit", color: "#8489F7" },
  { key: "appDecision", label: "App decision", color: "#F7D256" },
];

// Section 9: Cancellation/Dropout & Approval Rate (dual area chart)
export const cancellationApprovalData = [
  { month: "Jan", cancellation: 40, approvalRate: 55 },
  { month: "Feb", cancellation: 58, approvalRate: 62 },
  { month: "Mar", cancellation: 45, approvalRate: 58 },
  { month: "Apr", cancellation: 38, approvalRate: 55 },
  { month: "May", cancellation: 42, approvalRate: 60 },
  { month: "Jun", cancellation: 48, approvalRate: 68 },
  { month: "Jul", cancellation: 62, approvalRate: 78 },
  { month: "Aug", cancellation: 68, approvalRate: 88 },
  { month: "Sep", cancellation: 70, approvalRate: 95 },
  { month: "Oct", cancellation: 60, approvalRate: 85 },
  { month: "Nov", cancellation: 55, approvalRate: 78 },
  { month: "Dec", cancellation: 58, approvalRate: 80 },
];

// Section 9: % Approval & Cancellation by Source (horizontal grouped bar)
export const approvalCancellationBySourceData = [
  { source: "Zillow", approval: 72, cancellation: 28 },
  { source: "AMH", approval: 68, cancellation: 32 },
  { source: "Apartments", approval: 58, cancellation: 42 },
];

// Section 10: Denial Reason Distribution (stacked bar, 3 segments)
export const denialReasonData = [
  { month: "Dec 24", reason1: 25, reason2: 35, reason3: 40 },
  { month: "Jan 25", reason1: 68, reason2: 20, reason3: 12 },
  { month: "Feb 25", reason1: 28, reason2: 22, reason3: 50 },
  { month: "Mar 25", reason1: 40, reason2: 25, reason3: 35 },
  { month: "Apr 25", reason1: 40, reason2: 25, reason3: 35 },
  { month: "May 25", reason1: 25, reason2: 25, reason3: 50 },
  { month: "Jun 25", reason1: 35, reason2: 25, reason3: 40 },
  { month: "Jul 25", reason1: 35, reason2: 50, reason3: 15 },
  { month: "Aug 25", reason1: 68, reason2: 20, reason3: 12 },
  { month: "Sep 25", reason1: 60, reason2: 25, reason3: 15 },
  { month: "Oct 25", reason1: 68, reason2: 15, reason3: 17 },
  { month: "Nov 25", reason1: 60, reason2: 15, reason3: 25 },
  { month: "Dec 25", reason1: 68, reason2: 15, reason3: 17 },
];

export const denialReasonLegend = [
  { key: "reason1", label: "Reason1", color: "#01497B" },
  { key: "reason2", label: "Reason2", color: "#66B1EA" },
  { key: "reason3", label: "Reason3", color: "#66EA9D" },
];

// Section 11: Website (stacked bar)
export const websiteData = [
  { category: "LYI Button Clicks", google: 2.5, meta: 3.5, tiktok: 2.45, total: 8.45 },
  { category: "Apply Now Button Clicks", google: 2.2, meta: 2.8, tiktok: 2.12, total: 7.12 },
  { category: "3D Tour Button Click", google: 2.0, meta: 2.5, tiktok: 2.55, total: 7.05 },
  { category: "Other", google: 1.8, meta: 2.4, tiktok: 2.47, total: 6.67 },
];

// Section 11: Page View / Market (comparison bars)
export const pageViewMarketData = [
  { label: "compare to last year", period1: "2024", value1: 7.1, period2: "2025", value2: 7.5, delta: "+10.5%" },
  { label: "compare to last quarter", period1: "Q4 2024", value1: 4.1, period2: "Q4 2025", value2: 4.5, delta: "+8.4%" },
  { label: "compare to last month", period1: "Nov 30, 2025", value1: 3.4, period2: "Dec 30, 2025", value2: 4.0, delta: "+13.2%" },
];
