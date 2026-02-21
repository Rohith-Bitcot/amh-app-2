"use client";

import PageHeader from "@/components/ui/page-header";
import Card from "@/components/ui/cards";
import ReusableTable from "@/components/funnel-drilldown/reusable-table";
import { ColumnDef } from "@tanstack/react-table";
import {
  showingDrilldownData,
  leadDrilldownData,
} from "@/utils/data/funnel-drilldown";

const drilldownColumns: ColumnDef<(typeof showingDrilldownData)[0]>[] = [
  {
    accessorKey: "property",
    header: "Property",
    enableSorting: true,
  },
  {
    accessorKey: "date",
    header: "Date",
    enableSorting: true,
  },
  {
    accessorKey: "leadName",
    header: "Lead Name",
    enableSorting: true,
  },
  {
    accessorKey: "leadEmail",
    header: "Lead Email",
    enableSorting: true,
    cell: ({ getValue }) => (
      <span className="text-primary-blue hover:underline cursor-pointer">
        {getValue() as string}
      </span>
    ),
  },
  {
    accessorKey: "leadPhone",
    header: "Lead Phone",
    enableSorting: true,
  },
  {
    accessorKey: "feedback",
    header: "Feedback",
    enableSorting: true,
  },
];

export default function FunnelDrilldown() {
  return (
    <div className="space-y-6">
      <PageHeader title="Funnel Conversation Drilldown" />

      <Card title="Sample Showing Drilldown Table" noPadding>
        <ReusableTable columns={drilldownColumns} data={showingDrilldownData} />
      </Card>

      <Card title="Sample Lead Drilldown Table" noPadding>
        <ReusableTable columns={drilldownColumns} data={leadDrilldownData} />
      </Card>
    </div>
  );
}
