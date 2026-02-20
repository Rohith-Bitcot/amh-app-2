import DataTable from "@/components/tables/data-table";
import Card from "@/components/ui/cards";
import { messageColumns, messageDrilldownData } from "@/utils/data/communication-engagement";

export const MessageSentimentSurveryComponent = () => {
    return (
        <Card title="Messages / Sentiment / Survey Drilldown" noPadding>
            <div className="p-4">
                <DataTable columns={messageColumns} data={messageDrilldownData} />
            </div>
        </Card>
    )
}