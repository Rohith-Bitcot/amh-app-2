"use client";

import PageHeader from "@/components/ui/page-header/page-header";

import { KpiCardsComponent } from "./kpi-cards";
import DemandOverviewComponent from "./demand-overview";
import { ChartsRowComponent } from "./charts-row";
import { PerformanceOverviewComponent } from "./performace-overview";



export default function ExecutiveOverview() {

  return (
    <div className="space-y-5">
      <PageHeader title="AMH Executive Overview" />

      <KpiCardsComponent />

      {/* Charts Row - 3 charts side by side - RESPONSIVE GRID */}
      <ChartsRowComponent />

      {/* Demand Overview Section */}
      <DemandOverviewComponent />

      {/* Performance Overview Table */}
      <PerformanceOverviewComponent />
    </div>
  );
}
