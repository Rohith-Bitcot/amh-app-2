import Card from "@/components/ui/cards";
import { timingDistributionData } from "@/utils/data/funnel-journey";
import Image from "next/image";

export const TimingDistributionComponent = () => {
    return (
        <Card 
            title="Timing Distribution (Day/Hs)"
            headerRight={
                <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-heading">
                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                        <span className="w-2.5 h-2.5 rounded-full bg-black" /> Benchmark
                    </span>
                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                        <span
                            className="w-2.5 h-2.5 rounded-full bg-(--colour-vivid-blue) opacity-40"
                        />{" "}
                        Actual
                    </span>
                </div>
            }
        >            {/* Chart area */}
            <div className="overflow-x-auto w-full pb-2 sm:pb-0">
                <div className="space-y-6 sm:space-y-8 mt-4 sm:mt-0 min-w-[580px]">
                {timingDistributionData.map((item) => {
                    const maxScale = 24; // Fixed 24-hour scale for all bars
                    const actualPercent = (item.actual / maxScale) * 100;

                    return (
                        <div key={item.stage}>
                            {/* Stage name and range */}
                            <div className="flex items-center justify-between mb-2 gap-1 sm:gap-0">
                                <span className="text-sm font-heading text-(--color-text-black) font-medium">
                                    {item.stage}
                                </span>
                                <span className="text-xs font-heading text-neutral-500">
                                    Range: {item.min} - {item.max} {item.unit}
                                </span>
                            </div>

                            {/* Bar chart with shared scale */}
                            <div className="relative w-full h-[22px] bg-gray-100 rounded">
                                {/* Actual bar (light blue) - extends to actual value + extra width */}
                                <div
                                    className="absolute h-full bg-(--colour-vivid-blue) opacity-40"
                                    style={{
                                        width: item.dimensions?.actualBar?.width,
                                        left: item.dimensions?.actualBar?.left,
                                    }}
                                    />
                                    <div className="absolute top-0.5 left-58">
                                    <Image src="/assets/svgs/timing-distribution-divider.svg" alt="Timing Distribution Divider" width={1} height={17.5}/>
                                    </div>

                                {/* Benchmark bar (dark/black) - sits on top, extends to benchmark */}
                                <div
                                    className="absolute z-5 bg-(--color-foreground)"
                                    style={{
                                        width:item.dimensions?.benchmarkBar?.width,
                                        height:item.dimensions?.benchmarkBar?.height,
                                        top:item.dimensions?.benchmarkBar?.top,
                                        left:item.dimensions?.benchmarkBar?.left,
                                    }}
                                />

                                {/* Actual value label - positioned above the actual bar */}
                                <div
                                    className="absolute -top-5 left-55 text-xs font-heading text-(--color-foreground) font-medium"
                                >
                                    {item.actual} {item.unit}
                                </div>

                                {/* Benchmark marker (black vertical line) - centered horizontally in blue bar */}
                                <div
                                    className="absolute top-1/2 -translate-y-1/2 h-full w-0. text-(--color-foreground)"
                                    style={{ 
                                        left: `${actualPercent / 2 + 10}%`,
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
                </div>

                {/* X-axis scale */}
                <div className="relative mt-4">
                    <div className="flex justify-between text-[10px] sm:text-[14px] font-heading font-medium text-(--colour-dark-grayish-blue)">
                        {[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24].map((val) => (
                            <span 
                                key={val} 
                                // On small screens, hide 2, 6, 10, etc., to stop numbers from overlapping!
                                className={`text-center shrink-0 ${val % 4 === 0 ? "block" : "hidden sm:block"}`}
                            >
                                {val}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
}