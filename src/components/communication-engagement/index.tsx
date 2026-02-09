"use client";

import PageHeader from "@/components/layout/page-header";
import Card from "@/components/ui/card";
import DonutChart from "@/components/charts/donut-chart";
import DataTable from "@/components/tables/data-tables";
import { createColumnHelper } from "@tanstack/react-table";
import { getHeatmapColor } from "@/utils/constants";
import {
  interactionLevelsData,
  sentimentFeedbackData,
  messageDrilldownData,
  activityLogData,
} from "@/data/communication-engagement";

// Message drilldown columns
const msgColumnHelper = createColumnHelper<(typeof messageDrilldownData)[0]>();
const messageColumns = [
  msgColumnHelper.accessor("propertyId", {
    header: "Property ID",
    enableSorting: true,
  }),
  msgColumnHelper.accessor("leadName", {
    header: "Lead Info",
    enableSorting: true,
  }),
  msgColumnHelper.accessor("date", { header: "Date", enableSorting: true }),
  msgColumnHelper.accessor("messageType", { header: "Message Type" }),
  msgColumnHelper.accessor("sentimentCategory", {
    header: "Sentiment Category",
    cell: (info) => {
      const value = info.getValue();
      const colorMap: Record<string, string> = {
        Positive: "text-green-600 bg-green-50",
        Negative: "text-red-600 bg-red-50",
        Inquiry: "text-sky-600 bg-sky-50",
      };
      return (
        <span
          className={`px-2 py-0.5 rounded text-xs font-medium ${colorMap[value] || "text-neutral-600"}`}
        >
          {value}
        </span>
      );
    },
  }),
  msgColumnHelper.accessor("messageContent", { header: "Message Content" }),
];

// Activity log columns
const activityColumnHelper = createColumnHelper<(typeof activityLogData)[0]>();
const activityColumns = [
  activityColumnHelper.accessor("propertyId", {
    header: "Property ID",
    enableSorting: true,
  }),
  activityColumnHelper.accessor("leadName", {
    header: "Lead Info",
    enableSorting: true,
  }),
  activityColumnHelper.accessor("date", {
    header: "Date",
    enableSorting: true,
  }),
  activityColumnHelper.accessor("event", { header: "Event" }),
  activityColumnHelper.accessor("source", { header: "Source" }),
  activityColumnHelper.accessor("comment", { header: "Comment" }),
];

// Sentiment column keys
const sentimentFields = [
  { key: "accessIssue", label: "Access Issue" },
  { key: "propertyCond", label: "Property Cond." },
  { key: "technicalIssue", label: "Technical Issue" },
  { key: "priceConcern", label: "Price Concern" },
  { key: "locationIssue", label: "Location Issue" },
  { key: "amenityIssue", label: "Amenity Issue" },
  { key: "maintenanceDelay", label: "Maint. Delay" },
  { key: "other", label: "Other" },
  { key: "total", label: "Total" },
] as const;

export default function CommunicationEngagement() {
  return (
    <div className="space-y-5">
      <PageHeader title="Communication & Engagement" />

      {/* Interaction Levels in Funnel Stages */}
      <Card title="Interaction Levels in Funnel Stages">
        <div className="grid grid-cols-4 gap-4">
          {interactionLevelsData.map((stage) => (
            <div key={stage.stage}>
              <DonutChart
                data={stage.data}
                colors={stage.colors}
                height={380}
                innerRadius={70}
                outerRadius={130}
                showLabels
              >
                <span className="text-xs font-semibold font-heading text-neutral-700 text-center leading-tight max-w-[70px]">
                  {stage.stage}
                </span>
              </DonutChart>
            </div>
          ))}
        </div>
      </Card>

      {/* Customer Sentiment Feedback - Heatmap Table */}
      <Card title="Customer Sentiment Feedback" noPadding>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-sky-700 to-sky-600">
                <th className="px-4 py-3 text-white text-xs font-medium font-heading text-left">
                  District
                </th>
                {sentimentFields.map((field) => (
                  <th
                    key={field.key}
                    className="px-3 py-3 text-white text-xs font-medium font-heading text-center"
                  >
                    {field.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sentimentFeedbackData.map((row, rowIdx) => (
                <tr
                  key={row.district}
                  className={`border-b border-neutral-200 ${
                    rowIdx % 2 === 0 ? "bg-white" : "bg-sky-50/30"
                  }`}
                >
                  <td className="px-4 py-2.5 text-sm font-medium font-heading text-neutral-800">
                    {row.district}
                  </td>
                  {sentimentFields.map((field) => {
                    const value = row[field.key as keyof typeof row] as number;
                    const colorClass =
                      field.key === "total" ? "" : getHeatmapColor(value);
                    return (
                      <td
                        key={field.key}
                        className={`px-3 py-2.5 text-sm font-heading text-center ${colorClass} ${
                          field.key === "total"
                            ? "font-medium text-neutral-800"
                            : "text-neutral-700"
                        }`}
                      >
                        {field.key === "total" ? value : `${value}%`}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Messages / Sentiment / Survey Drilldown */}
      <Card title="Messages / Sentiment / Survey Drilldown" noPadding>
        <DataTable columns={messageColumns} data={messageDrilldownData} />
      </Card>

      {/* Detailed Activity Log */}
      <Card title="Detailed Activity Log" noPadding>
        <DataTable columns={activityColumns} data={activityLogData} />
      </Card>
    </div>
  );
}
