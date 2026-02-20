import Card from "@/components/ui/cards";
import BarChartComponent from "./bar-chart";
import { approvalCancellationBySourceData, approvalCancellationBySourceBars } from "@/utils/data/funnel-journey";

export const ApprovalCancellationSource = () => {
    return (
        <Card title="% Approval & Cancellation by Source">
            <BarChartComponent
                data={approvalCancellationBySourceData}
                bars={approvalCancellationBySourceBars}
                reverseLegend
                xAxisKey="source"
                height={300}
                layout="vertical"
                showLegend
                xAxisTicks={[0, 20, 40, 60, 80, 100]}
            />
        </Card>
    )
}