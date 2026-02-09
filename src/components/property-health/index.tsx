"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/page-header";
import Card from "@/components/ui/card";
import StackedBarChart from "@/components/charts/stacked-bar-chart";
import FutureLeaseChart from "@/components/charts/future-lease-chart";
import DataTable from "@/components/tables/data-tables";
import { createColumnHelper } from "@tanstack/react-table";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  healthChartData,
  districtTableData,
  propertyDrilldownData,
  futureExpirationData,
} from "@/data/property-health";
import { CHART_COLORS } from "@/utils/constants";

const stackedBars = [
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
const drilldownColumns = [
  drilldownColumnHelper.accessor("propertyId", {
    header: "Property ID",
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
  drilldownColumnHelper.accessor("applications", { header: "Applications" }),
  drilldownColumnHelper.accessor("approvalPercent", { header: "Approval %" }),
  drilldownColumnHelper.accessor("stageDeclinePercent", {
    header: "Stage Decline %",
  }),
];

const categoryHeaders = [
  "DOM Range",
  "Hold Recent App",
  "Hold Recent Photos",
  "Marketing Review",
  "Marketing Old Pics",
  "Dispo Review",
];

export default function PropertyHealth() {
  const [expandedDistricts, setExpandedDistricts] = useState<Set<string>>(
    new Set(["District A"]),
  );

  const toggleDistrict = (district: string) => {
    setExpandedDistricts((prev) => {
      const next = new Set(prev);
      if (next.has(district)) next.delete(district);
      else next.add(district);
      return next;
    });
  };

  return (
    <div className="space-y-5">
      <PageHeader title="Property Health" />

      {/* Property Health Stacked Bar Chart */}
      <Card title="Property Health">
        <StackedBarChart
          data={healthChartData}
          bars={stackedBars}
          xAxisKey="property"
          height={350}
        />
      </Card>

      {/* District Expandable Tables */}
      <Card noPadding>
        {/* Tab row */}
        <div className="flex overflow-x-auto bg-gradient-to-r from-sky-700 to-sky-600 rounded-t-md">
          {[
            "Year",
            "OSHA Categories",
            "Hold recent/app",
            "Hold recent/photos",
            "Marketing review",
            "Marketing old pics",
            "Dispo review",
          ].map((tab, i) => (
            <div
              key={tab}
              className={`px-4 py-3 text-white text-xs font-medium font-heading whitespace-nowrap ${
                i === 0 ? "bg-white/10" : ""
              }`}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* District sections */}
        {districtTableData.map((district) => {
          const isExpanded = expandedDistricts.has(district.district);
          return (
            <div
              key={district.district}
              className="border-b border-neutral-200"
            >
              {/* District header row */}
              <button
                className="w-full flex items-center gap-2 px-4 py-3 bg-sky-50 hover:bg-sky-100 transition-colors text-left"
                onClick={() => toggleDistrict(district.district)}
              >
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-sky-700" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-sky-700" />
                )}
                <span className="text-sm font-medium font-heading text-sky-800">
                  {district.district}
                </span>
              </button>

              {/* Nested rows */}
              {isExpanded && (
                <div>
                  {/* Sub-header */}
                  <div className="grid grid-cols-6 bg-sky-50/50">
                    {categoryHeaders.map((header) => (
                      <div
                        key={header}
                        className="px-4 py-2 text-xs font-medium font-heading text-neutral-600"
                      >
                        {header}
                      </div>
                    ))}
                  </div>

                  {/* Data rows */}
                  {district.rows.map((row, rowIdx) => (
                    <div
                      key={row.domRange}
                      className={`grid grid-cols-6 ${
                        rowIdx % 2 === 0 ? "bg-white" : "bg-sky-50/30"
                      } border-t border-neutral-100`}
                    >
                      <div className="px-4 py-2.5 text-sm font-heading text-neutral-700">
                        {row.domRange}
                      </div>
                      <div className="px-4 py-2.5 text-sm font-heading text-neutral-800">
                        {row.holdRecentApp}
                      </div>
                      <div className="px-4 py-2.5 text-sm font-heading text-neutral-800">
                        {row.holdRecentPhotos}
                      </div>
                      <div className="px-4 py-2.5 text-sm font-heading text-neutral-800">
                        {row.marketingReview}
                      </div>
                      <div className="px-4 py-2.5 text-sm font-heading text-neutral-800">
                        {row.marketingOldPics}
                      </div>
                      <div className="px-4 py-2.5 text-sm font-heading text-neutral-800">
                        {row.dispoReview}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </Card>

      {/* Property Drilldown Table */}
      <Card title="Property Drilldown" noPadding>
        <DataTable columns={drilldownColumns} data={propertyDrilldownData} />
      </Card>

      {/* Future Leases Expiration & Upcoming Delivery */}
      <Card
        title="Future Lease Expiration & Upcoming Delivery (T 13M)"
        subtitle="Vs. Projected Absorption"
      >
        <FutureLeaseChart data={futureExpirationData} height={300} />
      </Card>
    </div>
  );
}
