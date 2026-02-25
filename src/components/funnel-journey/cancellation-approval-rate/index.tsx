import Card from "@/components/ui/cards";
import LineChartComponent from "../line-chart";
import { chartTheme } from "@/utils/chart-theme";
import { cancellationApprovalData } from "@/utils/data/funnel-journey";

export const CancellationApprovalDataComponent = () => {
    return (
        <Card title="Cancellation/Dropout Rate & Approval Rate">
            <div className="overflow-x-auto overflow-y-hidden w-full">
                <div className="min-w-[550px] overflow-hidden pt-4 px-2 pb-2">
            <LineChartComponent
                data={cancellationApprovalData}
                lines={[
                    {
                        dataKey: "approvalRate",
                        color: chartTheme.colors.palette.approval,
                        name: "Approval Rate",
                    },
                    {
                        dataKey: "cancellation",
                        color: chartTheme.colors.palette.cancellation,
                        name: "Cancellation",
                    },
                ]}
                reverseLegend
                xAxisKey="month"
                height={300}
                showLegend
                yAxisTicks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            />
            </div>
            </div>
        </Card>
    )
}