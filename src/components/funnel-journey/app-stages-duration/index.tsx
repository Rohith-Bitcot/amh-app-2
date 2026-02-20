import Card from "@/components/ui/cards";
import StackedBarChart from "@/components/ui/stacked-bar-chart";
import { appStagesDurationData, appStagesDurationLegend } from "@/utils/data/funnel-journey";

export const AppStagesDuration = () => {
    return (

        <Card>
            <div className="flex flex-col gap-1 mb-3">
                <h3 className="text-black text-sm font-medium font-heading capitalize">
                    App Stages Duration
                </h3>
                <div className="flex items-center justify-between">
                    <span className="text-[10px] font-heading text-neutral-500">
                        Performance across active listings
                    </span>
                    <div className="flex flex-wrap gap-3">
                        {appStagesDurationLegend.map((item) => (
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
                data={appStagesDurationData}
                bars={appStagesDurationLegend.map((l) => ({
                    dataKey: l.key,
                    color: l.color,
                    name: l.label,
                }))}
                xAxisKey="month"
                height={400}
                yAxisTicks={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]}
            />
        </Card>
    );
}