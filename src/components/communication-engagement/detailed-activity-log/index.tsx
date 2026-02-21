import DataTable from "@/components/ui/reusable-table";
import Card from "@/components/ui/cards";
import { activityLogData } from "@/utils/data/communication-engagement";
import { createColumnHelper } from "@tanstack/react-table";

const activityColumnHelper = createColumnHelper<(typeof activityLogData)[0]>();
const activityColumns = [
    activityColumnHelper.accessor("propertyId", {
        header: "Property",
        enableSorting: true,
        meta: { className: "w-[19%]" },
        cell: ({ getValue }) => (
            <span className="text-[14px] font-medium font-heading tracking-[0px] leading-[100%] text-neutral-800">
                {getValue()}
            </span>
        ),
    }),
    activityColumnHelper.accessor("leadName", {
        header: "Lead Info",
        enableSorting: true,
        meta: { className: "w-[15%]" },
    }),
    activityColumnHelper.accessor("date", {
        header: "Date",
        enableSorting: false,
        meta: { className: "w-[13%]" },
    }),
    activityColumnHelper.accessor("event", {
        header: "Event",
        enableSorting: false,
        meta: { className: "w-[19%]" },
    }),
    activityColumnHelper.accessor("source", {
        header: "Sender",
        enableSorting: false,
        meta: { className: "w-[14%]" },
    }),
    activityColumnHelper.accessor("comment", {
        header: "Content",
        enableSorting: false,
        meta: { className: "w-[19%]" },
    }),
];

export const DetailedActivityComponent = () => {
    return (
        <Card title="Detailed Activity Log" noPadding>
            <div className="p-4">
                <DataTable columns={activityColumns} data={activityLogData} />
            </div>
        </Card>
    )
}