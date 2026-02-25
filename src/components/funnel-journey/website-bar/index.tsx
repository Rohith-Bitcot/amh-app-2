import Card from "@/components/ui/cards"
import StackedBarChart from "@/components/ui/stacked-bar-chart"
import { websiteData, websiteBars } from "@/utils/data/funnel-journey"

export const WebsiteComponent = () => {
    return (
        <Card title="Website">
            <div className="overflow-x-auto w-full pb-2 sm:pb-0">
                <div className="min-w-[500px] overflow-hidden">
            <StackedBarChart
                data={websiteData}
                bars={websiteBars}
                xAxisKey="category"
                height={300}
                showLegend
                yAxisTicks={[0, 2, 4, 6, 8, 10]}
                yAxisFormatter={(value) => `${value}M`}
                customLabel={{
                    valueKey: "total",
                    suffix: "M",
                }}
            />
            </div>
            </div>
        </Card>
    )
}