import Card from "@/components/ui/cards";
import { chartTheme } from "@/utils/chart-theme";
import { timingDistributionData } from "@/utils/data/funnel-journey";

export const TimingDistributionComponent = () => {
    return (
        <Card 
            title="Timing Distribution (Day/Hs)"
            headerRight={
                <div className="flex items-center gap-4 text-xs font-heading">
                    <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-black" /> Benchmark
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: chartTheme.colors.palette.actual }}
                        />{" "}
                        Actual
                    </span>
                </div>
            }
        >            {/* Chart area */}
            <div className="space-y-6">
                {timingDistributionData.map((item) => {
                    const maxScale = 24; // Fixed 24-hour scale for all bars
                    const actualPercent = (item.actual / maxScale) * 100;
                    const benchmarkPercent = (item.benchmark / maxScale) * 100;

                    return (
                        <div key={item.stage}>
                            {/* Stage name and range */}
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-bold font-heading text-neutral-800">
                                    {item.stage}
                                </span>
                                <span className="text-xs font-heading text-neutral-500">
                                    Range: {item.min} - {item.max} {item.unit}
                                </span>
                            </div>

                            {/* Bar chart with shared scale */}
                            <div className="relative h-8 bg-gray-100 rounded">
                                {/* Actual bar (light blue) - extends to actual value + extra width */}
                                <div
                                    className="absolute top-0 left-10 h-full"
                                    style={{
                                        backgroundColor: chartTheme.colors.palette.actual,
                                        width: `${actualPercent + 20}%`,
                                    }}
                                />

                                {/* Benchmark bar (dark/black) - sits on top, extends to benchmark */}
                                <div
                                    className="absolute top-3 left-10 h-2.5 z-5"
                                    style={{
                                        backgroundColor: chartTheme.colors.palette.benchmark,
                                        width: `${benchmarkPercent}%`,
                                    }}
                                />

                                {/* Actual value label - positioned above the actual bar */}
                                <div
                                    className="absolute -top-5 text-xs font-heading font-semibold text-[#000000B5]"
                                    style={{
                                        left: `${actualPercent}%`,
                                        transform: "translateX(-50%)",
                                    }}
                                >
                                    {item.actual} {item.unit}
                                </div>

                                {/* Benchmark marker (black vertical line) - centered horizontally in blue bar */}
                                <div
                                    className="absolute top-1/2 -translate-y-1/2 h-full w-0.5 bg-blue-500"
                                    style={{ left: `${actualPercent / 2 + 10}%` }}
                                />
                            </div>
                        </div>
                    );
                })}

                {/* X-axis scale (0-24) */}
                <div className="relative mt-4">
                    <div className="flex justify-between text-xs font-heading text-neutral-600">
                        {[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24].map((val) => (
                            <span key={val} className="w-8 text-center">
                                {val}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
}