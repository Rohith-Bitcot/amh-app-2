import DonutChart from "./donut-chart";
import Card from "@/components/ui/cards";
import { interactionLevelsData } from "@/utils/data/communication-engagement";

export const InteractionLevelComponent = () => {
    return (
        <Card title="Interaction Levels in Funnel Stages">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {interactionLevelsData.map((stage) => (
                    <div key={stage.stage}>
                        <DonutChart
                            data={stage.data}
                            colors={stage.colors}
                            height={380}
                            innerRadius={70}
                            outerRadius={130}
                            showLabels
                        >
                            <span className="text-xs font-semibold font-heading text-neutral-700 text-center leading-tight max-w-[70px]">
                                {stage.stage}
                            </span>
                        </DonutChart>
                    </div>
                ))}
            </div>
        </Card>
    )
}