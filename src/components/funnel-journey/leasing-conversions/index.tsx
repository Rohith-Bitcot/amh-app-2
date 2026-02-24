import Card from "@/components/ui/cards";
import { leasingConversionsData, mainHeaders } from "@/utils/data/funnel-journey";
import { FilterIcon } from "@/components/ui/filterIcon";
import { cn } from "@/utils/common-services";

export const LeasingConversionsComponent = () => {
    return (
        <Card title="Leasing Conversions by Geo & Stage" noPadding>
            <div className="overflow-x-auto">
                <div className="overflow-hidden rounded-xl border border-neutral-200 m-4 mt-0">
                    <table className="w-full border-collapse">
                        <thead style={{
                            background:"var(--colour-dark-strong-blue-gradient)"
                        }}>
                            {/* First row: Main category headers with distinct shades of blue */}
<tr className="text-white">
  {mainHeaders.map((header, idx) => (
    <th
      key={header.label}
      colSpan={header.colSpan}
      className={`px-3 py-2 text-sm font-semibold font-heading text-center border-r border-white/10
        ${idx === 0 ? "first:rounded-tl-lg px-4 py-3" : ""} 
        ${idx === mainHeaders.length - 1 ? "last:rounded-tr-lg border-r-0" : ""}`}
    >
      <div className={`flex items-center justify-center gap-2 ${header.hasFilter ? "" : "w-full"}`}>
        {header.label}
        {header.hasFilter && <FilterIcon className="w-4 h-4" />}
      </div>
    </th>
  ))}
</tr>
                            {/* Second row: Sub-column headers */}
                            <tr className="bg-white border-b border-neutral-200">
                                {/* District under Geo */}
                                <th className="px-4 py-2 text-[#1F1F22] text-[14px] font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]" style={{
                                    fontWeight:500
                                }}>
                                    District
                                </th>
                                {/* Unique Showing sub-columns */}
                                <th className="px-3 py-2 text-[#1F1F22] text-[14px] uppercase font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]" style={{
                                    fontWeight:500
                                }}>
                                    T7
                                </th>
                                <th className="px-3 py-2 text-[#1F1F22] text-[14px] uppercase font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]" style={{
                                    fontWeight:500
                                }}>
                                    PW
                                </th>
                                <th className="px-3 py-2 text-[#1F1F22] text-[14px] uppercase font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]" style={{
                                    fontWeight:500
                                }}>
                                    PY
                                </th>
                                {/* App Start to Submit sub-columns - Highlighted bg #F0F8FE */}
                                <th className="px-3 py-2 text-[#1F1F22] text-[14px] uppercase font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]" style={{
                                    fontWeight:500
                                }}>
                                    T7
                                </th>
                                <th className="px-3 py-2 text-[#1F1F22] text-[14px] uppercase font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]" style={{
                                    fontWeight:500
                                }}>
                                    PW
                                </th>
                                <th className="px-3 py-2 text-[#1F1F22] text-[14px] uppercase font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]" style={{
                                    fontWeight:500
                                }}>
                                    PY
                                </th>
                                {/* Approval sub-columns */}
                                <th className="px-3 py-2 text-[#1F1F22] text-[14px] uppercase font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]" style={{
                                    fontWeight:500
                                }}>
                                    T7
                                </th>
                                <th className="px-3 py-2 text-[#1F1F22] text-[14px] uppercase font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]" style={{
                                    fontWeight:500
                                }}>
                                    PW
                                </th>
                                <th className="px-3 py-2 text-[#1F1F22] text-[14px] uppercase font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]" style={{
                                    fontWeight:500
                                }}>
                                    PY
                                </th>
                                {/* Approval to Lease sub-columns - Highlighted bg #F0F8FE */}
                                <th className="px-3 py-2 text-[#1F1F22] text-[14px] uppercase font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]" style={{
                                    fontWeight:500
                                }}>
                                    T7
                                </th>
                                <th className="px-3 py-2 text-[#1F1F22] text-[14px] uppercase font-medium font-heading text-center border-r border-neutral-200 bg-[#F0F8FE]" style={{
                                    fontWeight:500
                                }}>
                                    PW
                                </th>
                                <th className="px-3 py-2 text-[#1F1F22] text-[14px] uppercase font-medium font-heading text-center bg-[#F0F8FE]" style={{
                                    fontWeight:500
                                }}>
                                    PY
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {leasingConversionsData.rows.map((row) => (
                                <tr
                                    key={row.geo}
                                    className={cn(
                                        "border-b border-neutral-100 last:border-0 bg-white",
                                    )}
                                >
                                    <td className="px-4 py-3 text-sm font-medium font-heading text-[#1F1F22] text-[14px] text-center border-r border-neutral-100">
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