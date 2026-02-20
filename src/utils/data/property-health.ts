// Property Health mock data - structured for API replacement
import { CHART_COLORS } from "@/utils/constants";
import { createColumnHelper } from "@tanstack/react-table";

export const healthChartData = [
  {
    property: "District A",
    holdRecentApp: 3,
    holdRecentPhotos: 2,
    marketingReview: 3,
    marketingOldPics: 3,
    dispoReview: 1,
  }, // Total: 12
  {
    property: "District B",
    holdRecentApp: 2,
    holdRecentPhotos: 2,
    marketingReview: 2,
    marketingOldPics: 2,
    dispoReview: 1,
  }, // Total: 9
  {
    property: "District C",
    holdRecentApp: 4,
    holdRecentPhotos: 3,
    marketingReview: 3,
    marketingOldPics: 2,
    dispoReview: 2,
  }, // Total: 14
  {
    property: "District D",
    holdRecentApp: 5,
    holdRecentPhotos: 4,
    marketingReview: 4,
    marketingOldPics: 3,
    dispoReview: 3,
  }, // Total: 19
  {
    property: "District E",
    holdRecentApp: 3,
    holdRecentPhotos: 2,
    marketingReview: 3,
    marketingOldPics: 3,
    dispoReview: 1,
  }, // Total: 12
  {
    property: "District F",
    holdRecentApp: 4,
    holdRecentPhotos: 3,
    marketingReview: 3,
    marketingOldPics: 3,
    dispoReview: 3,
  }, // Total: 16
  {
    property: "District G",
    holdRecentApp: 2,
    holdRecentPhotos: 2,
    marketingReview: 2,
    marketingOldPics: 2,
    dispoReview: 2,
  }, // Total: 10
  {
    property: "District H",
    holdRecentApp: 4,
    holdRecentPhotos: 3,
    marketingReview: 3,
    marketingOldPics: 3,
    dispoReview: 3,
  }, // Total: 16
  {
    property: "District I",
    holdRecentApp: 3,
    holdRecentPhotos: 2,
    marketingReview: 3,
    marketingOldPics: 2,
    dispoReview: 2,
  }, // Total: 12
  {
    property: "District J",
    holdRecentApp: 4,
    holdRecentPhotos: 3,
    marketingReview: 3,
    marketingOldPics: 3,
    dispoReview: 2,
  }, // Total: 15
  {
    property: "District K",
    holdRecentApp: 3,
    holdRecentPhotos: 3,
    marketingReview: 3,
    marketingOldPics: 3,
    dispoReview: 2,
  }, // Total: 14
  {
    property: "District L",
    holdRecentApp: 3,
    holdRecentPhotos: 3,
    marketingReview: 4,
    marketingOldPics: 3,
    dispoReview: 2,
  }, // Total: 15
  {
    property: "District M",
    holdRecentApp: 5,
    holdRecentPhotos: 3,
    marketingReview: 4,
    marketingOldPics: 3,
    dispoReview: 3,
  }, // Total: 18
  {
    property: "District N",
    holdRecentApp: 4,
    holdRecentPhotos: 3,
    marketingReview: 3,
    marketingOldPics: 3,
    dispoReview: 2,
  }, // Total: 15
  {
    property: "District O",
    holdRecentApp: 3,
    holdRecentPhotos: 3,
    marketingReview: 4,
    marketingOldPics: 3,
    dispoReview: 2,
  }, // Total: 15
  {
    property: "District P",
    holdRecentApp: 3,
    holdRecentPhotos: 2,
    marketingReview: 3,
    marketingOldPics: 3,
    dispoReview: 2,
  }, // Total: 13
  {
    property: "District Q",
    holdRecentApp: 3,
    holdRecentPhotos: 3,
    marketingReview: 3,
    marketingOldPics: 3,
    dispoReview: 2,
  }, // Total: 14
  {
    property: "District R",
    holdRecentApp: 5,
    holdRecentPhotos: 4,
    marketingReview: 4,
    marketingOldPics: 3,
    dispoReview: 3,
  }, // Total: 19
];

export const districtTableData = [
  {
    district: "District A",
    rows: [
      {
        domRange: "0-7",
        holdRecentApp: 5,
        holdRecentPhotos: 1,
        marketingReview: 3,
        marketingOldPics: 1,
        dispoReview: 1,
      },
      {
        domRange: "8-14",
        holdRecentApp: 3,
        holdRecentPhotos: 1,
        marketingReview: 1,
        marketingOldPics: 0,
        dispoReview: 1,
      },
      {
        domRange: "15-21",
        holdRecentApp: 1,
        holdRecentPhotos: 2,
        marketingReview: 1,
        marketingOldPics: 1,
        dispoReview: 0,
      },
      {
        domRange: "22-30",
        holdRecentApp: 2,
        holdRecentPhotos: 0,
        marketingReview: 2,
        marketingOldPics: 0,
        dispoReview: 0,
      },
      {
        domRange: "30+",
        holdRecentApp: 1,
        holdRecentPhotos: 2,
        marketingReview: 1,
        marketingOldPics: 1,
        dispoReview: 0,
      },
    ],
  },
  {
    district: "District B",
    rows: [
      {
        domRange: "0-7",
        holdRecentApp: 4,
        holdRecentPhotos: 2,
        marketingReview: 4,
        marketingOldPics: 0,
        dispoReview: 2,
      },
      {
        domRange: "8-14",
        holdRecentApp: 2,
        holdRecentPhotos: 1,
        marketingReview: 2,
        marketingOldPics: 1,
        dispoReview: 0,
      },
      {
        domRange: "15-21",
        holdRecentApp: 3,
        holdRecentPhotos: 0,
        marketingReview: 3,
        marketingOldPics: 1,
        dispoReview: 0,
      },
      {
        domRange: "22-30",
        holdRecentApp: 1,
        holdRecentPhotos: 3,
        marketingReview: 0,
        marketingOldPics: 1,
        dispoReview: 0,
      },
      {
        domRange: "30+",
        holdRecentApp: 2,
        holdRecentPhotos: 1,
        marketingReview: 3,
        marketingOldPics: 1,
        dispoReview: 0,
      },
    ],
  },
];

export const propertyDrilldownData = [
  {
    property: "AZ1112",
    category: "Hold Recent App",
    dom: 5,
    websitePageviews: 0,
    interests: 4,
    showings: 0,
    apps: 2,
    denials: 1,
    negHomeIssue: 0,
    negAccessIssue: 0,
  },
  {
    property: "AZ1113",
    category: "Hold Recent Photos",
    dom: 12,
    websitePageviews: 1,
    interests: 3,
    showings: 0,
    apps: 2,
    denials: 2,
    negHomeIssue: 1,
    negAccessIssue: 0,
  },
  {
    property: "AZ1114",
    category: "Hold Recent App",
    dom: 3,
    websitePageviews: 2,
    interests: 5,
    showings: 0,
    apps: 4,
    denials: 0,
    negHomeIssue: 0,
    negAccessIssue: 1,
  },
  {
    property: "AZ1115",
    category: "Marketing Review",
    dom: 8,
    websitePageviews: 0,
    interests: 2,
    showings: 0,
    apps: 0,
    denials: 1,
    negHomeIssue: 1,
    negAccessIssue: 0,
  },
  {
    property: "AZ1116",
    category: "Marketing Old Pics",
    dom: 18,
    websitePageviews: 1,
    interests: 3,
    showings: 1,
    apps: 0,
    denials: 3,
    negHomeIssue: 0,
    negAccessIssue: 1,
  },
  {
    property: "AZ1117",
    category: "Dispo Review",
    dom: 25,
    websitePageviews: 0,
    interests: 1,
    showings: 0,
    apps: 0,
    denials: 2,
    negHomeIssue: 1,
    negAccessIssue: 1,
  },
  {
    property: "AZ1118",
    category: "Hold Recent App",
    dom: 2,
    websitePageviews: 3,
    interests: 6,
    showings: 2,
    apps: 3,
    denials: 0,
    negHomeIssue: 0,
    negAccessIssue: 0,
  },
  {
    property: "AZ1119",
    category: "Hold Recent Photos",
    dom: 15,
    websitePageviews: 0,
    interests: 2,
    showings: 0,
    apps: 1,
    denials: 1,
    negHomeIssue: 0,
    negAccessIssue: 1,
  },
];

export const futureExpirationData = [
  {
    month: "Dec 24",
    leaseExpiration: 8,
    upcomingDelivery: 5,
    projectedAbsorption: 19,
  },
  {
    month: "Jan 25",
    leaseExpiration: 10,
    upcomingDelivery: 4,
    projectedAbsorption: 20,
  },
  {
    month: "Feb 25",
    leaseExpiration: 9,
    upcomingDelivery: 5,
    projectedAbsorption: 18,
  },
  {
    month: "Mar 25",
    leaseExpiration: 8,
    upcomingDelivery: 6,
    projectedAbsorption: 19,
  },
  {
    month: "Apr 25",
    leaseExpiration: 7,
    upcomingDelivery: 4,
    projectedAbsorption: 14,
  },
  {
    month: "May 25",
    leaseExpiration: 9,
    upcomingDelivery: 5,
    projectedAbsorption: 21,
  },
  {
    month: "Jun 25",
    leaseExpiration: 10,
    upcomingDelivery: 6,
    projectedAbsorption: 22,
  },
  {
    month: "Jul 25",
    leaseExpiration: 8,
    upcomingDelivery: 4,
    projectedAbsorption: 17,
  },
  {
    month: "Aug 25",
    leaseExpiration: 7,
    upcomingDelivery: 5,
    projectedAbsorption: 20,
  },
  {
    month: "Sep 25",
    leaseExpiration: 10,
    upcomingDelivery: 6,
    projectedAbsorption: 22,
  },
  {
    month: "Oct 25",
    leaseExpiration: 9,
    upcomingDelivery: 5,
    projectedAbsorption: 21,
  },
  {
    month: "Nov 25",
    leaseExpiration: 6,
    upcomingDelivery: 4,
    projectedAbsorption: 18,
  },
  {
    month: "Dec 25",
    leaseExpiration: 7,
    upcomingDelivery: 3,
    projectedAbsorption: 17,
  },
];

export const stackedBars = [
  {
    dataKey: "holdRecentApp",
    color: CHART_COLORS.stacked[0],
    name: "Hold Recent App",
  },
  {
    dataKey: "holdRecentPhotos",
    color: CHART_COLORS.stacked[1],
    name: "Hold Recent Photos",
  },
  {
    dataKey: "marketingReview",
    color: CHART_COLORS.stacked[2],
    name: "Marketing Review",
  },
  {
    dataKey: "marketingOldPics",
    color: CHART_COLORS.stacked[3],
    name: "Marketing Old Pics",
  },
  {
    dataKey: "dispoReview",
    color: CHART_COLORS.stacked[4],
    name: "Dispo Review",
  },
];

const drilldownColumnHelper =
  createColumnHelper<(typeof propertyDrilldownData)[0]>();
export const drilldownColumns = [
  drilldownColumnHelper.accessor("property", {
    header: "Property",
    enableSorting: true,
  }),
  drilldownColumnHelper.accessor("category", {
    header: "Category",
    enableSorting: true,
  }),
  drilldownColumnHelper.accessor("dom", { header: "DOM", enableSorting: true }),
  drilldownColumnHelper.accessor("websitePageviews", {
    header: "Website Pageviews",
  }),
  drilldownColumnHelper.accessor("interests", { header: "Interests" }),
  drilldownColumnHelper.accessor("showings", { header: "Showings" }),
  drilldownColumnHelper.accessor("apps", { header: "Apps" }),
  drilldownColumnHelper.accessor("denials", { header: "Denials" }),
  drilldownColumnHelper.accessor("negHomeIssue", { header: "Neg. Home Issue" }),
  drilldownColumnHelper.accessor("negAccessIssue", {
    header: "Neg. Access Issue",
  }),
];

export const categoryHeaders = [
  "DOM Range",
  "Hold Recent App",
  "Hold Recent Photos",
  "Marketing Review",
  "Marketing Old Pics",
  "Dispo Review",
];

export const districtTableColumns = [
  { label: "Geo", isFirst: true },
  { label: "DOM Category", isFirst: false },
  { label: "Hold recent/app", isFirst: false },
  { label: "Hold recent/photos", isFirst: false },
  { label: "Marketing review", isFirst: false },
  { label: "Marketing old pics", isFirst: false },
  { label: "Dispo review", isFirst: false },
];
