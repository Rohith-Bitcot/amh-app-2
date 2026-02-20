import MiniTable from "../../ui/MiniTable"
import { leadCountsBySourceData } from "@/utils/data/funnel-journey"

export const LeadCountsBySourceComponent = () => {
    return (
        <MiniTable
            title="Lead Counts by Source"
            columns={["Source", "T7", "PW", "PY"]}
            rows={leadCountsBySourceData.map((r) => ({
                Source: r.source,
                T7: r.t7,
                PW: r.pw,
                PY: r.py,
            }))}
        />
    )
}