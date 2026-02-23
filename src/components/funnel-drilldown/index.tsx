"use client";

import PageHeader from "@/components/ui/page-header/page-header";
import Card from "@/components/ui/cards";
import ReusableTable from "@/components/ui/reusable-table";
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
    meta: { className: "w-[20%]" },
    cell: ({ getValue }) => (
      <span className="text-[15px] font-medium font-heading">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    enableSorting: true,
    meta: { className: "w-[12%]" },
    cell: ({ getValue }) => (
      <span className="text-[14px] font-normal font-heading">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "leadName",
    header: "Lead Name",
    enableSorting: true,
    meta: { className: "w-[15%]" },
    cell: ({ getValue }) => (
      <span className="text-[15px] font-medium font-heading">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "leadEmail",
    header: "Lead Email",
    enableSorting: true,
    meta: { className: "w-[20%]" },
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
    meta: { className: "w-[15%]" },
    cell: ({ getValue }) => (
      <span className="text-[14px] font-normal font-heading">{getValue() as string}</span>
    ),
  },
  {
    accessorKey: "feedback",
    header: "Feedback",
    enableSorting: true,
    meta: { className: "w-[18%]" },
    cell: ({ getValue }) => (
      <span className="text-[14px] font-normal font-heading">{getValue() as string}</span>
    ),
  },
];

export default function FunnelDrilldown() {
  return (
    <div className="space-y-6">
      <PageHeader title="Funnel Conversation Drilldown" />

      <Card title="Sample Showing Drilldown Table" noPadding>
        <ReusableTable containerClassName="border border-sentiment-border m-4 mt-0 rounded-xl overflow-hidden" columns={drilldownColumns} data={showingDrilldownData} headerClassName="bg-primary-blue text-white" />
      </Card>

      <Card title="Sample Lead Drilldown Table" noPadding>
        <ReusableTable containerClassName="border border-sentiment-border m-4 mt-0 rounded-xl overflow-hidden" columns={drilldownColumns} data={leadDrilldownData} headerClassName="bg-primary-blue text-white" />
      </Card>
    </div>
  );
}
