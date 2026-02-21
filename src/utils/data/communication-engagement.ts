// Communication & Engagement mock data - structured for API replacement

import { createColumnHelper } from "@tanstack/react-table";

export const interactionLevelsData = [
  {
    stage: "Lead",
    data: [
      { name: "Avg Elise OB", value: 4 },
      { name: "Avg Agent IB", value: 1 },
      { name: "Total IB", value: 3 },
      { name: "Total OB", value: 4 },
      { name: "Avg Elise IB", value: 2 },
    ],
    // Blue chart - 5 segments with highly saturated colors
    colors: ["#01497B", "#2E6B9E", "#5A8FBF", "#86B3D9", "#B3D7F0"],
  },
  {
    stage: "Showing",
    data: [
      { name: "Avg Elise OB", value: 3 },
      { name: "Avg Agent IB", value: 1 },
      { name: "Avg Agent IB", value: 2 },
      { name: "Total IB", value: 3 },
      { name: "Total OB", value: 5 },
      { name: "Avg Elise IB", value: 2 },
    ],
    // Red chart - 6 segments with highly saturated colors
    colors: ["#B72828", "#CE4545", "#E06262", "#ED8F8F", "#F7BCBC", "#FBD9D9"],
  },
  {
    stage: "App Start to Submit",
    data: [
      { name: "Avg Elise OB", value: 6 },
      { name: "Avg Agent IB", value: 4 },
      { name: "Avg Agent OB", value: 1 },
      { name: "Total IB", value: 7 },
      { name: "Total OB", value: 7 },
      { name: "Avg Elise IB", value: 3 },
    ],
    // Green chart - 6 segments with highly saturated colors
    colors: ["#1B8B4A", "#3F9D65", "#63AF80", "#87C19B", "#ABD3B6", "#CFE5D1"],
  },
  {
    stage: "App Submit to Decision",
    data: [
      { name: "Avg Elise OB", value: 1 },
      { name: "Total OB", value: 1 },
      { name: "Avg Agent IB", value: 1 },
      { name: "Total IB", value: 1 },
    ],
    // Violet chart - 4 segments with highly saturated colors
    colors: ["#483297", "#6B56AD", "#8E7AC3", "#B19ED9"],
  },
];

export const sentimentFeedbackData = [
  {
    district: "District A",
    accessIssue: "2%",
    propertyCond: "5%",
    technicalIssue: "14%",
    priceConcern: "2%",
    locationIssue: "14%",
    amenityIssue: "2%",
    maintenanceDelay: "0%",
    other: "5%",
  },
  {
    district: "District B",
    accessIssue: "2%",
    propertyCond: "0%",
    technicalIssue: "2%",
    priceConcern: "5%",
    locationIssue: "2%",
    amenityIssue: "0%",
    maintenanceDelay: "5%",
    other: "2%",
  },
  {
    district: "District C",
    accessIssue: "0%",
    propertyCond: "2%",
    technicalIssue: "0%",
    priceConcern: "2%",
    locationIssue: "2%",
    amenityIssue: "14%",
    maintenanceDelay: "2%",
    other: "2%",
  },
  {
    district: "District D",
    accessIssue: "5%",
    propertyCond: "2%",
    technicalIssue: "5%",
    priceConcern: "2%",
    locationIssue: "14%",
    amenityIssue: "2%",
    maintenanceDelay: "2%",
    other: "5%",
  },
  {
    district: "District E",
    accessIssue: "0%",
    propertyCond: "2%",
    technicalIssue: "2%",
    priceConcern: "2%",
    locationIssue: "0%",
    amenityIssue: "2%",
    maintenanceDelay: "2%",
    other: "2%",
  },
  {
    district: "District F",
    accessIssue: "14%",
    propertyCond: "2%",
    technicalIssue: "14%",
    priceConcern: "2%",
    locationIssue: "2%",
    amenityIssue: "2%",
    maintenanceDelay: "2%",
    other: "5%",
  },
  {
    district: "District G",
    accessIssue: "0%",
    propertyCond: "14%",
    technicalIssue: "2%",
    priceConcern: "2%",
    locationIssue: "2%",
    amenityIssue: "2%",
    maintenanceDelay: "2%",
    other: "2%",
  },
  {
    district: "District H",
    accessIssue: "5%",
    propertyCond: "14%",
    technicalIssue: "0%",
    priceConcern: "2%",
    locationIssue: "5%",
    amenityIssue: "14%",
    maintenanceDelay: "14%",
    other: "2%",
  },
];

export const messageDrilldownData = [
  {
    propertyId: "AZ0001",
    leadName: "John Doe",
    date: "7/1/2025",
    messageType: "Inbound Text",
    sentimentCategory: "Inquiry",
    messageContent: '"How do I apply?"',
  },
  {
    propertyId: "AZ0002",
    leadName: "John Doe",
    date: "7/2/2025",
    messageType: "Survey",
    sentimentCategory: "Positive",
    messageContent: '"Loved the house layout"',
  },
  {
    propertyId: "AZ0003",
    leadName: "John Doe",
    date: "7/3/2025",
    messageType: "Outbound Text",
    sentimentCategory: "Inquiry",
    messageContent: '"How do I apply?"',
  },
  {
    propertyId: "AZ0004",
    leadName: "John Doe",
    date: "7/1/2025",
    messageType: "Survey",
    sentimentCategory: "Negative",
    messageContent: '"Time to clean?"',
  },
  {
    propertyId: "AZ0005",
    leadName: "John Doe",
    date: "7/4/2025",
    messageType: "Survey",
    sentimentCategory: "Positive",
    messageContent: '"Loved the house layout"',
  },
];

export const activityLogData = [
  {
    propertyId: "AZ0001",
    leadName: "John Doe",
    date: "7/1/2025",
    event: "Lead Created",
    source: "Elise AI",
    comment: '"Thank you for your interest..."',
  },
  {
    propertyId: "AZ0002",
    leadName: "John Doe",
    date: "7/2/2025",
    event: "Elise Outbound Text",
    source: "Elise AI",
    comment: '"Loved the house layout"',
  },
  {
    propertyId: "AZ0003",
    leadName: "John Doe",
    date: "7/3/2025",
    event: "Showing",
    source: "Lead",
    comment: '"Question about adding a guarantor"',
  },
  {
    propertyId: "AZ0004",
    leadName: "John Doe",
    date: "7/4/2025",
    event: "Survey Sent",
    source: "Lead",
    comment: '"Question about adding a guarantor"',
  },
  {
    propertyId: "AZ0005",
    leadName: "John Doe",
    date: "7/4/2025",
    event: "Survey Sent",
    source: "Lead",
    comment: '"Post showing survey completed"',
  },
];

const msgColumnHelper = createColumnHelper<(typeof messageDrilldownData)[0]>();
export const messageColumns = [
  msgColumnHelper.accessor("propertyId", {
    header: "Property",
    enableSorting: true,
    meta: { className: "w-[15%]" },
  }),
  msgColumnHelper.accessor("leadName", {
    header: "Lead info",
    enableSorting: true,
    meta: { className: "w-[15%]" },
  }),
  msgColumnHelper.accessor("date", { 
    header: "Date", 
    enableSorting: true,
    meta: { className: "w-[15%]" },
  }),
  msgColumnHelper.accessor("messageType", { 
    header: "Message Type",
    meta: { className: "w-[20%]" },
  }),
  msgColumnHelper.accessor("sentimentCategory", {
    header: "Sentiment Category",
    meta: { className: "w-[15%]" },
  }),
  msgColumnHelper.accessor("messageContent", { 
    header: "Message Content",
    meta: { className: "w-[20%]" },
  }),
];

const activityColumnHelper = createColumnHelper<(typeof activityLogData)[0]>();
export const activityColumns = [
  activityColumnHelper.accessor("propertyId", {
    header: "Property",
    enableSorting: true,
    meta: { className: "w-[15%]" },
  }),
  activityColumnHelper.accessor("leadName", {
    header: "Lead info",
    enableSorting: true,
    meta: { className: "w-[15%]" },
  }),
  activityColumnHelper.accessor("date", {
    header: "Date",
    enableSorting: true,
    meta: { className: "w-[15%]" },
  }),
  activityColumnHelper.accessor("event", { 
    header: "Event",
    meta: { className: "w-[20%]" }, 
  }),
  activityColumnHelper.accessor("source", { 
    header: "Sender",
    meta: { className: "w-[15%]" },
  }),
  activityColumnHelper.accessor("comment", { 
    header: "Content",
    meta: { className: "w-[20%]" },
  }),
];

export const sentimentFields = [
  { key: "accessIssue", label: "Access Issue" },
  { key: "propertyCond", label: "Property Cond." },
  { key: "technicalIssue", label: "Technical Issue" },
  { key: "priceConcern", label: "issue" },
  { key: "locationIssue", label: "issue" },
  { key: "amenityIssue", label: "issue" },
  { key: "maintenanceDelay", label: "issue" },
  { key: "other", label: "issue" },
] as const;
