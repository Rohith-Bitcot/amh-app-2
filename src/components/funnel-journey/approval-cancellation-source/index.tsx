import Card from "@/components/ui/cards";
import BarChartComponent from "./bar-chart";
import { approvalCancellationBySourceData, approvalCancellationBySourceBars } from "@/utils/data/funnel-journey";

export const ApprovalCancellationSource = () => {
    return (
        <Card title="% Approval & Cancellation by Source">
            <div className="overflow-x-auto overflow-y-hidden w-full">
                <div className="min-w-[550px] overflow-hidden pt-4 px-2 pb-2">
            <BarChartComponent
                data={approvalCancellationBySourceData}
                bars={approvalCancellationBySourceBars}
                reverseLegend
                xAxisKey="source"
                height={300}
                layout="vertical"
                showLegend
                xAxisTicks={[
                    0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50,
                    55, 60, 65, 70, 75, 80, 85, 90, 95, 100
                ]} />
                </div>
                </div>
        </Card>
    )
}