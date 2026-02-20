import Card from "@/components/ui/cards"
import { funnelConversionsData, radarChartData, radarData, leadCountByDOMData } from "@/utils/data/executive-overview"
import FunnelConversionChart from "../funnel-conversation"
import { ChartActions } from "../chart-actions"
import { useRouter } from "next/navigation"
import { ROUTES_PATH } from "@/utils/constants"
import RadarChartComponent from "../radar-chart"
import LeadCountBarChart from "../lead-count"

export const ChartsRowComponent = () => {
    const router = useRouter()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card title="Funnel Conversation" headerRight={<ChartActions />}>
                <FunnelConversionChart
                    data={funnelConversionsData}
                    height={280}
                    onBarClick={() => router.push(ROUTES_PATH.FUNNEL_DRILLDOWN)}
                />
            </Card>

            <Card title="Conversions By Days Marketed">
                <RadarChartComponent
                    data={radarChartData}
                    radars={radarData}
                    angleKey="metric"
                    height={300}
                />
            </Card>

            <Card title="Lead Count By Days On Market">
                <LeadCountBarChart data={leadCountByDOMData} height={300} />
            </Card>
        </div>
    )
}