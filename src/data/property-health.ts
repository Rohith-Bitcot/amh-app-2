// Property Health mock data - structured for API replacement

export const healthChartData = [
  { property: "Alabama A", holdRecentApp: 12, holdRecentPhotos: 8, marketingReview: 15, marketingOldPics: 5, dispoReview: 3 },
  { property: "Alabama B", holdRecentApp: 10, holdRecentPhotos: 12, marketingReview: 8, marketingOldPics: 7, dispoReview: 5 },
  { property: "Arizona A", holdRecentApp: 18, holdRecentPhotos: 6, marketingReview: 12, marketingOldPics: 9, dispoReview: 4 },
  { property: "Arizona B", holdRecentApp: 8, holdRecentPhotos: 14, marketingReview: 10, marketingOldPics: 6, dispoReview: 8 },
  { property: "Carolina", holdRecentApp: 15, holdRecentPhotos: 10, marketingReview: 18, marketingOldPics: 4, dispoReview: 2 },
  { property: "Dallas", holdRecentApp: 20, holdRecentPhotos: 5, marketingReview: 14, marketingOldPics: 8, dispoReview: 6 },
  { property: "Florida A", holdRecentApp: 14, holdRecentPhotos: 9, marketingReview: 11, marketingOldPics: 7, dispoReview: 4 },
  { property: "Florida B", holdRecentApp: 16, holdRecentPhotos: 11, marketingReview: 13, marketingOldPics: 5, dispoReview: 3 },
  { property: "Georgia", holdRecentApp: 22, holdRecentPhotos: 7, marketingReview: 16, marketingOldPics: 10, dispoReview: 5 },
  { property: "Houston", holdRecentApp: 11, holdRecentPhotos: 13, marketingReview: 9, marketingOldPics: 8, dispoReview: 7 },
  { property: "Illinois", holdRecentApp: 9, holdRecentPhotos: 15, marketingReview: 7, marketingOldPics: 11, dispoReview: 6 },
  { property: "Indiana", holdRecentApp: 13, holdRecentPhotos: 8, marketingReview: 14, marketingOldPics: 6, dispoReview: 4 },
  { property: "Nashville", holdRecentApp: 17, holdRecentPhotos: 10, marketingReview: 12, marketingOldPics: 7, dispoReview: 3 },
  { property: "Nevada", holdRecentApp: 7, holdRecentPhotos: 12, marketingReview: 8, marketingOldPics: 9, dispoReview: 5 },
  { property: "Orlando", holdRecentApp: 19, holdRecentPhotos: 6, marketingReview: 15, marketingOldPics: 4, dispoReview: 2 },
  { property: "Phoenix", holdRecentApp: 21, holdRecentPhotos: 8, marketingReview: 17, marketingOldPics: 6, dispoReview: 4 },
  { property: "Raleigh", holdRecentApp: 10, holdRecentPhotos: 14, marketingReview: 9, marketingOldPics: 8, dispoReview: 6 },
  { property: "Tampa", holdRecentApp: 16, holdRecentPhotos: 9, marketingReview: 13, marketingOldPics: 5, dispoReview: 3 },
];

export const districtTableData = [
  {
    district: "District A",
    rows: [
      { domRange: "0-7", holdRecentApp: 5, holdRecentPhotos: 1, marketingReview: 3, marketingOldPics: 1, dispoReview: 1 },
      { domRange: "8-14", holdRecentApp: 3, holdRecentPhotos: 1, marketingReview: 1, marketingOldPics: 0, dispoReview: 1 },
      { domRange: "15-21", holdRecentApp: 1, holdRecentPhotos: 2, marketingReview: 1, marketingOldPics: 1, dispoReview: 0 },
      { domRange: "22-30", holdRecentApp: 2, holdRecentPhotos: 0, marketingReview: 2, marketingOldPics: 0, dispoReview: 0 },
      { domRange: "30+", holdRecentApp: 1, holdRecentPhotos: 2, marketingReview: 1, marketingOldPics: 1, dispoReview: 0 },
    ],
  },
  {
    district: "District B",
    rows: [
      { domRange: "0-7", holdRecentApp: 4, holdRecentPhotos: 2, marketingReview: 4, marketingOldPics: 0, dispoReview: 2 },
      { domRange: "8-14", holdRecentApp: 2, holdRecentPhotos: 1, marketingReview: 2, marketingOldPics: 1, dispoReview: 0 },
      { domRange: "15-21", holdRecentApp: 3, holdRecentPhotos: 0, marketingReview: 3, marketingOldPics: 1, dispoReview: 0 },
      { domRange: "22-30", holdRecentApp: 1, holdRecentPhotos: 3, marketingReview: 0, marketingOldPics: 1, dispoReview: 0 },
      { domRange: "30+", holdRecentApp: 2, holdRecentPhotos: 1, marketingReview: 3, marketingOldPics: 1, dispoReview: 0 },
    ],
  },
];

export const propertyDrilldownData = [
  { propertyId: "RZ1112", category: "Hold Recent App", dom: 5, websitePageviews: 0, interests: 4, showings: 0, applications: 2, approvalPercent: 0, stageDeclinePercent: 3 },
  { propertyId: "RZ1113", category: "Hold Recent Photos", dom: 12, websitePageviews: 1, interests: 3, showings: 0, applications: 2, approvalPercent: 0, stageDeclinePercent: 7 },
  { propertyId: "RZ1114", category: "Hold Recent App", dom: 3, websitePageviews: 2, interests: 5, showings: 0, applications: 4, approvalPercent: 0, stageDeclinePercent: 2 },
  { propertyId: "RZ1115", category: "Marketing Review", dom: 8, websitePageviews: 0, interests: 2, showings: 0, applications: 0, approvalPercent: 0, stageDeclinePercent: 5 },
  { propertyId: "RZ1116", category: "Marketing Old Pics", dom: 18, websitePageviews: 1, interests: 3, showings: 1, applications: 0, approvalPercent: 0, stageDeclinePercent: 4 },
  { propertyId: "RZ1117", category: "Dispo Review", dom: 25, websitePageviews: 0, interests: 1, showings: 0, applications: 0, approvalPercent: 0, stageDeclinePercent: 8 },
  { propertyId: "RZ1118", category: "Hold Recent App", dom: 2, websitePageviews: 3, interests: 6, showings: 2, applications: 3, approvalPercent: 0, stageDeclinePercent: 1 },
  { propertyId: "RZ1119", category: "Hold Recent Photos", dom: 15, websitePageviews: 0, interests: 2, showings: 0, applications: 1, approvalPercent: 0, stageDeclinePercent: 6 },
];

export const futureExpirationData = [
  { month: "Dec 24", leaseExpiration: 8, upcomingDelivery: 5, projectedAbsorption: 12 },
  { month: "Jan 25", leaseExpiration: 10, upcomingDelivery: 4, projectedAbsorption: 13 },
  { month: "Feb 25", leaseExpiration: 9, upcomingDelivery: 5, projectedAbsorption: 11 },
  { month: "Mar 25", leaseExpiration: 8, upcomingDelivery: 6, projectedAbsorption: 12 },
  { month: "Apr 25", leaseExpiration: 7, upcomingDelivery: 4, projectedAbsorption: 10 },
  { month: "May 25", leaseExpiration: 9, upcomingDelivery: 5, projectedAbsorption: 14 },
  { month: "Jun 25", leaseExpiration: 10, upcomingDelivery: 6, projectedAbsorption: 13 },
  { month: "Jul 25", leaseExpiration: 8, upcomingDelivery: 4, projectedAbsorption: 11 },
  { month: "Aug 25", leaseExpiration: 7, upcomingDelivery: 5, projectedAbsorption: 12 },
  { month: "Sep 25", leaseExpiration: 10, upcomingDelivery: 6, projectedAbsorption: 14 },
  { month: "Oct 25", leaseExpiration: 9, upcomingDelivery: 5, projectedAbsorption: 13 },
  { month: "Nov 25", leaseExpiration: 6, upcomingDelivery: 4, projectedAbsorption: 10 },
  { month: "Dec 25", leaseExpiration: 7, upcomingDelivery: 3, projectedAbsorption: 9 },
];
