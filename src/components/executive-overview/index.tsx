"use client";

import PageHeader from "@/components/ui/page-header";
import Image from "next/image";
import Card from "@/components/ui/cards";
import ReusableTable from "@/components/ui/reusable-table";
import RadarChartComponent from "./radar-chart/index";
import FunnelConversionChart from "./funnel-conversation";
import LeadCountBarChart from "./lead-count";
import {
  funnelConversionsData,
  radarChartData,
  leadCountByDOMData,
  performanceTableData,
  radarData,
} from "@/utils/data/executive-overview";
import { useRouter } from "next/navigation";
import { KpiCardsComponent } from "./kpi-cards";
import DemandOverviewComponent from "./demand-overview";
import { ROUTES_PATH } from "@/utils/constants";
import { ChartActions } from "./chart-actions";

export default function ExecutiveOverview() {
  const router = useRouter();

  return (
    <div className="space-y-5">
      <PageHeader title="AMH Executive Overview" />

      <KpiCardsComponent />

      {/* Charts Row - 3 charts side by side - RESPONSIVE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Funnel Conversation" headerRight={<ChartActions />}>
          <FunnelConversionChart
            data={funnelConversionsData}
            height={280}
            onBarClick={() => router.push(ROUTES_PATH.FUNNEL_DRILLDOWN)}
          />
        </Card>

        <Card title="Conversions By Days Marketed">
          <RadarChartComponent
            data={radarChartData}
            radars={radarData}
            angleKey="metric"
            height={300}
          />
        </Card>

        <Card title="Lead Count By Days On Market">
          <LeadCountBarChart data={leadCountByDOMData} height={300} />
        </Card>
      </div>

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
