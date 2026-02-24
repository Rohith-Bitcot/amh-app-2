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
                <div className="flex items-center justify-between">
                    <span className="text-[12px] font-heading text-(--color-text-black) capitalize w-[270px] h-[18px]" style={{
                        fontWeight:400,
                        opacity:0.6
                    }}>
                        Performance across active listings
                    </span>
                    <div className="flex flex-wrap gap-3">
                        {timingStagesLegend.map((item) => (
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
        </Card>
    );
}