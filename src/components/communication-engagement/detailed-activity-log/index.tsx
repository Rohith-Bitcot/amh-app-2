import DataTable from "@/components/communication-engagement/reusable-table";
import Card from "@/components/ui/cards";
import { activityColumns, activityLogData } from "@/utils/data/communication-engagement";

export const DetailedActivityComponent = () => {
    return (
        <Card title="Detailed Activity Log" noPadding>
            <div className="p-4">
                <DataTable columns={activityColumns} data={activityLogData} />
            </div>
        </Card>
    )
}