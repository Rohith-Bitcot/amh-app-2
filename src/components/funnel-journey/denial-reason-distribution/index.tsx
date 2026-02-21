import Card from "@/components/ui/cards"
import StackedBarChart from "@/components/ui/stacked-bar-chart"
import { denialReasonData, denialReasonLegend } from "@/utils/data/funnel-journey"

export const DenialReasonDistributionComponent = () => {
    return (
        <Card>
            <div className="flex flex-col gap-1 mb-3">
                <h3 className="text-black text-sm font-medium font-heading capitalize">
                    Denial Reason Distribution
                </h3>
                <div className="flex items-center justify-between">
                    <span className="text-[10px] font-heading text-neutral-500">
                        Performance across active listings
                    </span>
                    <div className="flex flex-wrap gap-3">
                        {denialReasonLegend.map((item) => (
                            <span
                                key={item.key}
                                className="flex items-center gap-1.5 text-[10px] font-heading text-neutral-600"
                            >
                                <span
                                    className="w-2.5 h-2.5 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                />
                                {item.label}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <StackedBarChart
                data={denialReasonData}
                bars={denialReasonLegend.map((l) => ({
                    dataKey: l.key,
                    color: l.color,
                    name: l.label,
                }))}
                yAxisTicks={[0, 20, 40, 60, 80, 100]}
                xAxisKey="month"
                height={400}
            />
        </Card>

    )
}