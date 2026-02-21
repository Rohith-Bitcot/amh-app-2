import Card from "@/components/ui/cards";
import { leasingConversionsData } from "@/utils/data/funnel-journey";
import { cn, FilterIcon } from "@/utils/helper-functions";

export const LeasingConversionsComponent = () => {
    return (
        <Card title="Leasing Conversions by Geo & Stage" noPadding>
            <div className="overflow-x-auto">
                <div className="overflow-hidden rounded-xl border border-neutral-200 m-4 mt-0">
                    <table className="w-full border-collapse">
                        <thead>
                            {/* First row: Main category headers with distinct shades of blue */}
                            <tr className="text-white">
                                <th className="px-4 py-3 text-sm font-semibold font-heading text-center border-r border-white/10 first:rounded-tl-lg bg-[#1E6191]">
                                    <div className="flex items-center justify-center gap-2">
                                        Geo
                                        <FilterIcon className="w-4 h-4" />
                                    </div>
                                </th>
                                <th
                                    colSpan={3}
                                    className="px-3 py-2 text-sm font-semibold font-heading text-center border-r border-white/10 bg-[#1E6191]"
                                >
                                    Unique Showing
                                </th>
                                <th
                                    colSpan={3}
                                    className="px-3 py-2 text-sm font-semibold font-heading text-center border-r border-white/10 bg-[#1E6191]"
                                >
                                    App Start to Submit
                                </th>
                                <th
                                    colSpan={3}
                                    className="px-3 py-2 text-sm font-semibold font-heading text-center border-r border-white/10 bg-[#1E6191]"
                                >
                                    Approval
                                </th>
                                <th
                                    colSpan={3}
                                    className="px-3 py-2 text-sm font-semibold font-heading text-center last:rounded-tr-lg bg-[#1E6191]"
                                >
                                    Approval to Lease
                                </th>
                            </tr>
                            {/* Second row: Sub-column headers */}
                            <tr className="bg-white border-b border-neutral-200">
                                {/* District under Geo */}
                                <th className="px-4 py-2 text-[#1F1F22] text-[10px] font-medium font-heading text-center border-r border-neutral-200">
                                    District
                                </th>
                                {/* Unique Showing sub-columns */}
                                <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200">
                                    T7
                                </th>
                                <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200">
                                    PW
                                </th>
                                <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200">
                                    PY
                                </th>
                                {/* App Start to Submit sub-columns - Highlighted bg #F0F8FE */}
                                <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]">
                                    T7
                                </th>
                                <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]">
                                    PW
                                </th>
                                <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]">
                                    PY
                                </th>
                                {/* Approval sub-columns */}
                                <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200">
                                    T7
                                </th>
                                <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200">
                                    PW
                                </th>
                                <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200">
                                    PY
                                </th>
                                {/* Approval to Lease sub-columns - Highlighted bg #F0F8FE */}
                                <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]">
                                    T7
                                </th>
                                <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]">
                                    PW
                                </th>
                                <th className="px-3 py-2 text-[#1F1F22] text-[10px] uppercase font-medium font-heading text-center bg-[#F0F8FE]">
                                    PY
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {leasingConversionsData.rows.map((row, idx) => (
                                <tr
                                    key={row.geo}
                                    className={cn(
                                        "border-b border-neutral-100 last:border-0",
                                        idx % 2 === 0 ? "bg-white" : "bg-table-alt",
                                    )}
                                >
                                    <td className="px-4 py-3 text-sm font-medium font-heading text-neutral-600 text-left border-r border-neutral-100">
                                        {row.geo}
                                    </td>
                                    {/* Unique Showing values */}
                                    {row.uniqueShowing.map((val, vi) => (
                                        <td
                                            key={`unique-${row.geo}-${['T7', 'PW', 'PY'][vi]}`}
                                            className="px-3 py-3 text-sm font-normal font-heading text-neutral-800 text-center border-r border-neutral-100"
                                        >
                                            {val}
                                        </td>
                                    ))}
                                    {/* App Start to Submit values - Highlighted bg #F0F8FE */}
                                    {row.appStartSubmit.map((val, vi) => (
                                        <td
                                            key={`app-${row.geo}-${['T7', 'PW', 'PY'][vi]}`}
                                            className="px-3 py-3 text-sm font-normal font-heading text-neutral-800 text-center bg-[#F0F8FE] border-r border-neutral-100"
                                        >
                                            {val}
                                        </td>
                                    ))}
                                    {/* Approval values */}
                                    {row.approval.map((val, vi) => (
                                        <td
                                            key={`approval-${row.geo}-${['T7', 'PW', 'PY'][vi]}`}
                                            className="px-3 py-3 text-sm font-normal font-heading text-neutral-800 text-center border-r border-neutral-100"
                                        >
                                            {val}
                                        </td>
                                    ))}
                                    {/* Approval to Lease values - Highlighted bg #F0F8FE */}
                                    {row.approvalToLease.map((val, vi) => (
                                        <td
                                            key={`lease-${row.geo}-${['T7', 'PW', 'PY'][vi]}`}
                                            className={cn(
                                                "px-3 py-3 text-sm font-normal font-heading text-neutral-800 text-center bg-[#F0F8FE]",
                                                vi < 2 ? "border-r border-neutral-100" : "",
                                            )}
                                        >
                                            {val}
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