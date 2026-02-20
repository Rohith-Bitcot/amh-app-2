import Card from "@/components/ui/cards";
import { applicationMatricData } from "@/utils/data/funnel-journey";
import { FilterIcon } from "@/utils/helper-functions";

const columns = [
    { key: "geo", header: "Geo", cellClass: "text-center font-semibold" },
    { key: "denialRate", header: "Denial Rate", cellClass: "text-center" },
    { key: "cancellationRate", header: "Cancellation Rate", cellClass: "text-center" },
    { key: "selfService", header: "Self Service", cellClass: "text-center" },
    { key: "avgApplicants", header: "Avg Applicants per Application", cellClass: "text-center font-bold" },
];

export const ApplicationMetricComponent = () => {
    return (
        <Card title="Application metric" noPadding>
            <div className="overflow-x-auto">
                <div className="overflow-hidden rounded-xl border border-sentiment-border m-4 mt-0">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="bg-primary-blue text-white">
                                {columns.map((col, i) => (
                                    <th
                                        key={col.key}
                                        className={`px-4 py-3 text-[13px] font-bold font-heading text-white cursor-pointer select-none hover:bg-white/10 first:rounded-tl-lg last:rounded-tr-lg ${i !== 0 ? "border-l border-white/20" : ""}`}
                                    >
                                        <div className="flex items-center justify-center gap-2">
                                            {col.header}
                                            <FilterIcon className="w-3.5 h-3.5 opacity-80" />
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {applicationMatricData.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className={`border-b border-sentiment-border last:border-0 transition-colors text-neutral-800 ${rowIndex % 2 === 0 ? "bg-white" : "bg-[#F0F8FE]"}`}
                                >
                                    {columns.map((col, i) => (
                                        <td
                                            key={col.key}
                                            className={`px-4 py-3 text-[13px] font-heading border-sentiment-border ${col.cellClass} ${i !== 0 ? "border-l-[0.5px]" : ""}`}
                                        >
                                            {row[col.key as keyof typeof row]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Card>
    );
}
