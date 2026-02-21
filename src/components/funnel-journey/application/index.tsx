import MiniTable from "../../ui/MiniTable";
import { showingCountsBySourceData, conversionFromPrevStageData } from "@/utils/data/funnel-journey";

export const ApplicationComponent = () => {
    return (
        <>
            <MiniTable
                title="Application counts by source"
                subtitle="Normalized on inventory"
                columns={["Source", "T7", "PW", "PY"]}
                rows={showingCountsBySourceData.map((r) => ({
                    Source: r.source,
                    T7: r.t7,
                    PW: r.pw,
                    PY: r.py,
                }))}
                toggle={{
                    options: ["days posted", "property posted"],
                    active: 0,
                }}
            />
            <MiniTable
                title="Conversion from previous stage to this stage"
                columns={["Source", "T7", "PW", "PY"]}
                rows={conversionFromPrevStageData.map((r) => ({
                    Source: r.source,
                    T7: r.t7,
                    PW: r.pw,
                    PY: r.py,
                }))}
            />
        </>
    );
}