import Card from "@/components/ui/cards"
import LineChartComponent from "../line-chart"
import { leadsNewReturningData } from "@/utils/data/funnel-journey"
import { lineChartComponentData } from "@/utils/data/funnel-drilldown"

export const NewVsReturningComponent = () => {
    return (
        <Card title="Leads: New vs. Returning">
            <LineChartComponent
                data={leadsNewReturningData}
                lines={lineChartComponentData}
                xAxisKey="month"
                height={220}
                showLegend
            />
        </Card>
    );
}