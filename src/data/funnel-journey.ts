// Funnel Journey mock data - structured for API replacement

// Section 1: Lead Counts & Registration (horizontal progress bars)
export const leadCountsData = [
  { source: "Zillow", leads: 12450, regRate: 65, avgConfirmTime: "4.2h", color: "#01497B" },
  { source: "AMH Website", leads: 12450, regRate: 48, avgConfirmTime: "4.2h", color: "#66B1EA" },
  { source: "Realtor", leads: 12450, regRate: 32, avgConfirmTime: "4.2h", color: "#3ACA76" },
];

// Section 1: Leads New vs Returning (area/line chart)
export const leadsNewReturningData = [
  { month: "Jan", newLeads: 65, returning: 30 },
  { month: "Feb", newLeads: 58, returning: 35 },
  { month: "Mar", newLeads: 72, returning: 28 },
  { month: "Apr", newLeads: 68, returning: 42 },
  { month: "May", newLeads: 80, returning: 38 },
  { month: "Jun", newLeads: 75, returning: 45 },
  { month: "Jul", newLeads: 85, returning: 40 },
  { month: "Aug", newLeads: 78, returning: 50 },
  { month: "Sep", newLeads: 90, returning: 48 },
  { month: "Oct", newLeads: 82, returning: 55 },
  { month: "Nov", newLeads: 88, returning: 52 },
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
  { month: "Dec 24", shoppingCycle: 30, showing: 12, appStart: 10, appSubmit: 15, appDecision: 10, leaveStart: 12, leaveSign: 11, totalDays: 35, delta: null, deltaPositive: null },
  { month: "Jan 25", shoppingCycle: 35, showing: 10, appStart: 12, appSubmit: 13, appDecision: 8, leaveStart: 10, leaveSign: 12, totalDays: 42, delta: 7, deltaPositive: false },
  { month: "Feb 25", shoppingCycle: 32, showing: 11, appStart: 11, appSubmit: 14, appDecision: 9, leaveStart: 11, leaveSign: 12, totalDays: 40, delta: 2, deltaPositive: true },
  { month: "Mar 25", shoppingCycle: 28, showing: 14, appStart: 13, appSubmit: 12, appDecision: 11, leaveStart: 10, leaveSign: 12, totalDays: 38, delta: 2, deltaPositive: true },
  { month: "Apr 25", shoppingCycle: 33, showing: 12, appStart: 10, appSubmit: 15, appDecision: 10, leaveStart: 10, leaveSign: 10, totalDays: 40, delta: 2, deltaPositive: false },
  { month: "May 25", shoppingCycle: 30, showing: 13, appStart: 12, appSubmit: 13, appDecision: 12, leaveStart: 10, leaveSign: 10, totalDays: 35, delta: 5, deltaPositive: true },
  { month: "Jun 25", shoppingCycle: 34, showing: 11, appStart: 11, appSubmit: 14, appDecision: 10, leaveStart: 10, leaveSign: 10, totalDays: 42, delta: 7, deltaPositive: false },
  { month: "Jul 25", shoppingCycle: 31, showing: 12, appStart: 13, appSubmit: 12, appDecision: 11, leaveStart: 11, leaveSign: 10, totalDays: 40, delta: 2, deltaPositive: true },
  { month: "Aug 25", shoppingCycle: 29, showing: 14, appStart: 12, appSubmit: 13, appDecision: 12, leaveStart: 10, leaveSign: 10, totalDays: 38, delta: 2, deltaPositive: true },
  { month: "Sep 25", shoppingCycle: 35, showing: 10, appStart: 10, appSubmit: 15, appDecision: 10, leaveStart: 10, leaveSign: 10, totalDays: 35, delta: 3, deltaPositive: true },
  { month: "Oct 25", shoppingCycle: 32, showing: 13, appStart: 11, appSubmit: 14, appDecision: 10, leaveStart: 10, leaveSign: 10, totalDays: 40, delta: 5, deltaPositive: false },
  { month: "Nov 25", shoppingCycle: 30, showing: 12, appStart: 12, appSubmit: 13, appDecision: 11, leaveStart: 11, leaveSign: 11, totalDays: 42, delta: 2, deltaPositive: false },
  { month: "Dec 25", shoppingCycle: 28, showing: 14, appStart: 13, appSubmit: 12, appDecision: 12, leaveStart: 10, leaveSign: 11, totalDays: 38, delta: 4, deltaPositive: true },
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
  { month: "Jan", cancellation: 15, approvalRate: 72 },
  { month: "Feb", cancellation: 18, approvalRate: 68 },
  { month: "Mar", cancellation: 12, approvalRate: 75 },
  { month: "Apr", cancellation: 20, approvalRate: 65 },
  { month: "May", cancellation: 16, approvalRate: 70 },
  { month: "Jun", cancellation: 22, approvalRate: 62 },
  { month: "Jul", cancellation: 14, approvalRate: 74 },
  { month: "Aug", cancellation: 19, approvalRate: 67 },
  { month: "Sep", cancellation: 17, approvalRate: 71 },
  { month: "Oct", cancellation: 13, approvalRate: 76 },
  { month: "Nov", cancellation: 21, approvalRate: 64 },
  { month: "Dec", cancellation: 16, approvalRate: 70 },
];

// Section 9: % Approval & Cancellation by Source (horizontal grouped bar)
export const approvalCancellationBySourceData = [
  { source: "Zillow", approval: 72, cancellation: 28 },
  { source: "AMH", approval: 68, cancellation: 32 },
  { source: "Apartments", approval: 58, cancellation: 42 },
];

// Section 10: Denial Reason Distribution (stacked bar, 3 segments)
export const denialReasonData = [
  { month: "Dec 24", reason1: 40, reason2: 35, reason3: 25 },
  { month: "Jan 25", reason1: 38, reason2: 37, reason3: 25 },
  { month: "Feb 25", reason1: 42, reason2: 33, reason3: 25 },
  { month: "Mar 25", reason1: 35, reason2: 40, reason3: 25 },
  { month: "Apr 25", reason1: 40, reason2: 35, reason3: 25 },
  { month: "May 25", reason1: 37, reason2: 38, reason3: 25 },
  { month: "Jun 25", reason1: 43, reason2: 32, reason3: 25 },
  { month: "Jul 25", reason1: 36, reason2: 39, reason3: 25 },
  { month: "Aug 25", reason1: 41, reason2: 34, reason3: 25 },
  { month: "Sep 25", reason1: 39, reason2: 36, reason3: 25 },
  { month: "Oct 25", reason1: 38, reason2: 37, reason3: 25 },
  { month: "Nov 25", reason1: 42, reason2: 33, reason3: 25 },
  { month: "Dec 25", reason1: 40, reason2: 35, reason3: 25 },
];

export const denialReasonLegend = [
  { key: "reason1", label: "Reason1", color: "#01497B" },
  { key: "reason2", label: "Reason2", color: "#66B1EA" },
  { key: "reason3", label: "Reason3", color: "#66EA9D" },
];

// Section 11: Website (grouped bar)
export const websiteData = [
  { category: "LYI Button Clicks", meta: 8.45, tiktok: 7.12, google: 7.05 },
  { category: "Apply Now Button Clicks", meta: 7.12, tiktok: 6.69, google: 6.50 },
  { category: "3D Tour Button Click", meta: 7.05, tiktok: 6.50, google: 6.20 },
  { category: "Other", meta: 6.69, tiktok: 6.20, google: 5.80 },
];

// Section 11: Page View / Market (comparison bars)
export const pageViewMarketData = [
  { label: "compare to last year", period1: "2024", value1: 7.1, period2: "2025", value2: 7.5, delta: "+10.5%" },
  { label: "compare to last quarter", period1: "Q4 2024", value1: 4.1, period2: "Q4 2025", value2: 4.5, delta: "+8.4%" },
  { label: "compare to last month", period1: "Nov 30, 2025", value1: 3.4, period2: "Dec 30, 2025", value2: 4.0, delta: "+13.2%" },
];
