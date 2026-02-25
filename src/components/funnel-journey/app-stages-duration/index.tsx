import { ChartActions } from "@/components/executive-overview/chart-actions";
import Card from "@/components/ui/cards";
import StackedBarChart from "@/components/ui/stacked-bar-chart";
import { appStagesDurationData, appStagesDurationLegend } from "@/utils/data/funnel-journey";

export const AppStagesDuration = () => {
    return (

        <Card>
            <div className="flex flex-col mb-3">
                <div className="flex items-start justify-between">
                    <h3 className="text-black text-sm font-medium font-heading capitalize">
                        App Stages Duration
                    </h3>
                    <ChartActions filter={false} />
                </div>
                <div className="flex items-center justify-between mb-1 mt-1">
                    <span className="text-[12px] font-heading text-(--color-text-black) capitalize -mt-2 font-medium opacity-60">
                        Performance across active listings
                    </span>
                    <div className="flex flex-wrap gap-3 mt-2 sm:mt-0">
                        {appStagesDurationLegend.map((item) => (
                            <span
                                key={item.key}
                                className="flex items-center gap-1.5 text-[12px] font-heading text-radar-legend-text capitalize font-medium opacity-60"
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
            <div className="overflow-x-auto w-full pb-2 sm:pb-0">
                <div className="min-w-[1000px] overflow-hidden">
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
            </div>
            </div>
        </Card>
    );
}