"use client";

import PageHeader from "@/components/ui/page-header";
import Card from "@/components/ui/cards";
import DonutChart from "@/components/ui/charts/donut-chart";
import DataTable from "@/components/tables/data-table";
import { getHeatmapColor } from "@/utils/constants";
import {
  interactionLevelsData,
  sentimentFeedbackData,
  messageDrilldownData,
  activityLogData,
  messageColumns,
  activityColumns,
  sentimentFields,
} from "@/utils/data/communication-engagement";
import { cn } from "@/utils/helper-functions";

export default function CommunicationEngagement() {
  return (
    <div className="space-y-5">
      <PageHeader title="Communication & Engagement" />

      {/* Interaction Levels in Funnel Stages */}
      <Card title="Interaction Levels in Funnel Stages">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
        <div className="p-4">
          <div className="overflow-x-auto rounded-lg border border-neutral-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1E6191]">
                  <th className="px-4 py-3 text-white text-[12px] font-medium font-heading text-left border-r border-white/10 w-[200px]">
                    Property
                  </th>
                  {sentimentFields.map((field, idx) => (
                    <th
                      key={field.key}
                      className={cn(
                        "px-2 py-3 text-white text-[12px] font-medium font-heading text-center",
                        idx < sentimentFields.length - 1
                          ? "border-r border-white/10"
                          : "",
                      )}
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
                    className={cn(
                      "border-b border-neutral-200 last:border-0",
                      rowIdx % 2 === 0 ? "bg-white" : "bg-neutral-50/30",
                    )}
                  >
                    <td className="px-4 py-3 text-sm font-bold font-heading text-neutral-800 border-r border-neutral-200">
                      {row.district}
                    </td>
                    {sentimentFields.map((field, cellIdx) => {
                      const value = row[field.key as keyof typeof row] as
                        | string
                        | number;
                      const colorClass = getHeatmapColor(value);
                      return (
                        <td
                          key={field.key}
                          className={cn(
                            "px-3 py-3 text-sm font-heading text-center text-neutral-700",
                            colorClass,
                            cellIdx < sentimentFields.length - 1
                              ? "border-r border-neutral-200"
                              : "",
                          )}
                        >
                          {value}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      {/* Messages / Sentiment / Survey Drilldown */}
      <Card title="Messages / Sentiment / Survey Drilldown" noPadding>
        <div className="p-4">
          <DataTable columns={messageColumns} data={messageDrilldownData} />
        </div>
      </Card>

      {/* Detailed Activity Log */}
      <Card title="Detailed Activity Log" noPadding>
        <div className="p-4">
          <DataTable columns={activityColumns} data={activityLogData} />
        </div>
      </Card>
    </div>
  );
}
