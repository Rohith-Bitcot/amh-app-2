import Card from "@/components/ui/cards"
import { leadCountsData } from "@/utils/data/funnel-journey"

export const LeadCountsComponent = () => {
  return (
    <Card title="Lead Counts & Registration">
      <div className="space-y-4">
        {leadCountsData.map((item) => (
          <div key={item.source} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold font-heading text-neutral-800">
                {item.source}
              </span>
              <span className="text-sm font-heading text-neutral-600">
                {item.leads.toLocaleString()} Leads
              </span>
            </div>
            <div className="h-5 bg-gray-100 rounded overflow-hidden">
              <div
                className="h-full transition-all"
                style={{
                  width: `${item.regRate}%`,
                  backgroundColor: item.color,
                }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] font-heading">
              <span style={{ color: item.color }} className="font-semibold">
                {item.regRate}% Reg. Rate
              </span>
              <span className="text-neutral-500">
                Avg Time to AMH Account Confirmation {item.avgConfirmTime}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}