import DataTable from "@/components/ui/reusable-table";
import Card from "@/components/ui/cards";
import { messageDrilldownData } from "@/utils/data/communication-engagement";
import { createColumnHelper } from "@tanstack/react-table";

const msgColumnHelper = createColumnHelper<(typeof messageDrilldownData)[0]>();
const messageColumns = [
    msgColumnHelper.accessor("propertyId", {
        header: "Property",
        enableSorting: true,
        meta: { className: "w-[15%]" },
        cell: ({ getValue }) => (
            <span className="text-[14px] font-medium font-heading tracking-[0px] leading-[100%] text-neutral-800">
                {getValue()}
            </span>
        ),
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

export const MessageSentimentSurveryComponent = () => {
    return (
        <Card title="Messages / Sentiment / Survey Drilldown" noPadding>
            <div className="p-4">
                <DataTable columns={messageColumns} data={messageDrilldownData} />
            </div>
        </Card>
    )
}