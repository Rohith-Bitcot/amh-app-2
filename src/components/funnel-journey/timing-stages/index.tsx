import Card from "@/components/ui/cards";
import { timingStagesData, timingStagesLegend } from "@/utils/data/funnel-journey";
import StackedBarChart from "@/components/ui/stacked-bar-chart";

export const TimingStagesComponent = () => {
    const timingStagesBars = timingStagesLegend.map((l) => ({
        dataKey: l.key,
        color: l.color,
        name: l.label,
    }));
    return (
        <Card>
            <div className="flex flex-col gap-1 mb-3">
                <h3 className="text-black text-sm font-medium font-heading capitalize">
                    Timing Stages
                </h3>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <span className="text-[12px] font-heading font-medium opacity-60 text-(--color-text-black) capitalize">
                        Performance across active listings
                    </span>
                    <div className="flex flex-wrap gap-2 sm:gap-3 md:justify-end">
                        {timingStagesLegend.map((item) => (
                            <span
                                key={item.key}
                                className="flex items-center gap-1.5 text-[10px] font-heading text-neutral-600 sm:text-xs shrink-0"
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
                data={timingStagesData}
                bars={timingStagesBars}
                yAxisTicks={[0, 20, 40, 60, 80, 100]}
                yAxisFormatter={(value) => `${value}%`}
                xAxisKey="month"
                height={357}
                customLabel={{
                    valueKey: "totalDays",
                    deltaKey: "delta",
                    deltaPositiveKey: "deltaPositive",
                    suffix: "d",
                }}
            />
                </div>
            </div>

        </Card>
    );
}