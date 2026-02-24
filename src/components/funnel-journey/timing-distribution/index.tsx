import Card from "@/components/ui/cards";
import { timingDistributionData } from "@/utils/data/funnel-journey";
import Image from "next/image";

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
                            className="w-2.5 h-2.5 rounded-full bg-(--colour-vivid-blue) opacity-40"
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

                    return (
                        <div key={item.stage}>
                            {/* Stage name and range */}
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-heading text-(--color-text-black)" style={{
                                    fontWeight:500
                                }}>
                                    {item.stage}
                                </span>
                                <span className="text-xs font-heading text-neutral-500">
                                    Range: {item.min} - {item.max} {item.unit}
                                </span>
                            </div>

                            {/* Bar chart with shared scale */}
                            <div className="relative w-[580px] h-[22px] bg-gray-100 rounded">
                                {/* Actual bar (light blue) - extends to actual value + extra width */}
                                <div
                                    className="absolute h-full bg-(--colour-vivid-blue)"
                                    style={{
                                        width:item.dimensions?.actualBar?.width,
                                        height:item.dimensions?.actualBar?.height,
                                        top:item.dimensions?.actualBar?.top,
                                        left:item.dimensions?.actualBar?.left,
                                        opacity: 0.4,
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
                                    className="absolute -top-5 left-55 text-xs font-heading font-semibold text-(--color-foreground)"
                                    style={{
                                        // transform: "translateX(-50%)",
                                        opacity:0.7,
                                        fontWeight:400
                                    }}
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

                {/* X-axis scale (0-24) */}
                <div className="relative mt-4">
                    <div className="flex justify-between text-[14px] font-heading text-(--colour-dark-grayish-blue) gap-0.5 ">
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