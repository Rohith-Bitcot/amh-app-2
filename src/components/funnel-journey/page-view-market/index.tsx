import Card from "@/components/ui/cards"
import { chartTheme } from "@/utils/chart-theme"
import { pageViewMarketData } from "@/utils/data/funnel-journey"

export const PageViewMarketComponent = () => {
    return (

        <Card title="Page View / Market">
            <div className="space-y-6">
                {pageViewMarketData.map((item) => (
                    <div key={item.label} className="space-y-2">
                        <div className="text-sm font-heading font-semibold text-neutral-800">
                            {item.label}
                        </div>
                        <div className="space-y-2">
                            {/* Newer period (green bar) */}
                            <div className="flex items-center gap-2">
                                <div
                                    className="h-6 flex items-center px-2"
                                    style={{
                                        width: `${(item.value2 / 10) * 100}%`,
                                        backgroundColor: chartTheme.colors.palette.newerPeriod,
                                    }}
                                >
                                    <span className="text-xs font-heading font-medium text-white">
                                        {item.period2}
                                    </span>
                                </div>
                                <span className="text-xs font-heading font-medium text-neutral-700">
                                    {item.value2} Views
                                </span>
                                <span className="text-xs font-heading font-bold text-green-500">
                                    {item.delta}
                                </span>
                            </div>
                            {/* Older period (blue bar) */}
                            <div className="flex items-center gap-2">
                                <div
                                    className="h-6 flex items-center px-2"
                                    style={{
                                        width: `${(item.value1 / 10) * 100}%`,
                                        backgroundColor: chartTheme.colors.palette.olderPeriod,
                                    }}
                                >
                                    <span className="text-xs font-heading font-medium text-white">
                                        {item.period1}
                                    </span>
                                </div>
                                <span className="text-xs font-heading font-medium text-neutral-700">
                                    {item.value1} Views
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}