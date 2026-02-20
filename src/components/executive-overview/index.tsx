"use client";

import PageHeader from "@/components/ui/page-header";
import Card from "@/components/ui/cards";
import ReusableTable from "@/components/ui/reusable-table";
import {
  performanceTableData,
} from "@/utils/data/executive-overview";
import { useRouter } from "next/navigation";
import { KpiCardsComponent } from "./kpi-cards";
import DemandOverviewComponent from "./demand-overview";
import { ChartsRowComponent } from "./charts-row";

export default function ExecutiveOverview() {
  const router = useRouter();

  return (
    <div className="space-y-5">
      <PageHeader title="AMH Executive Overview" />

      <KpiCardsComponent />

      {/* Charts Row - 3 charts side by side - RESPONSIVE GRID */}
      <ChartsRowComponent />

      {/* Demand Overview Section */}
      <DemandOverviewComponent />

      {/* Performance Overview Table */}
      <Card title="Performance Overview" noPadding>
        <ReusableTable
          columns={performanceTableData.headers.map((header) => ({
            accessorKey: header === "Geo" ? "metric" : header,
            header: header,
            enableSorting: true,
            meta: {
              className:
                header === "Geo"
                  ? ""
                  : header === "YoY"
                    ? "w-[80px]"
                    : "w-[95px]",
            },
          }))}
          data={performanceTableData.rows}
          getRowClassName={() => "text-table-text-dark"}
        />
      </Card>
    </div>
  );
}
