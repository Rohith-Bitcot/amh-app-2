import Card from "@/components/ui/cards";
import StackedBarChart from "@/components/ui/stacked-bar-chart";
import { districtTableColumns, districtTableData, healthChartData, stackedBars } from "@/utils/data/property-health";
import { FilterIcon } from "@/components/ui/filterIcon";

export const PropertyHealthComponent = () => {
    return (
        <Card
            title="Property Health"
            noPadding
            className="overflow-hidden rounded-xl"
        >
            <div className="p-6 pb-2">
                <div className="flex flex-wrap items-center justify-end gap-4 mb-2">
                    {[...stackedBars].reverse().map((bar) => (
                        <div key={bar.dataKey} className="flex items-center gap-2">
                            <span
                                className="w-2.5 h-2.5 rounded-full"
                                style={{ backgroundColor: bar.color }}
                            />
                            <span className="text-xs font-heading text-neutral-600">
                                {bar.name}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="max-md:overflow-x-auto">
                    <div className="max-md:min-w-[800px]">
                        <StackedBarChart
                            data={healthChartData}
                            bars={stackedBars}
                            xAxisKey="property"
                            height={400}
                            yAxisTicks={Array.from({ length: 13 }, (_, i) => i * 2)}
                            yAxisDomain={[0, 24]}
                        />
                    </div>
                </div>
            </div>

            {/* District Table */}
            <div className="mt-4 p-6 ">
                <div className="max-md:overflow-x-auto bg-[#F5FAFF] rounded-xl border-[0.5px] border-sentiment-border">
                    <table className="w-full text-sm text-left border-collapse md:table-fixed max-md:min-w-[1000px]">
                        <thead>
                            <tr className="bg-[#1F78B4] text-white">
                                {districtTableColumns.map((col, index) => {
                                    const isLast = index === districtTableColumns.length - 1;
                                    const widthClass = index === 0 ? "w-[20%]" : "w-[13.33%]";
                                    return (
                                        <th
                                            key={col.label}
                                            className={`px-3 py-3 font-semibold text-left whitespace-nowrap border-b-[0.5px] border-sentiment-border ${widthClass} ${index === 0 ? "first:rounded-tl-xl" : ""} ${isLast ? "" : "border-r-[0.5px] border-white/20"}`}
                                        >
                                            <div className="flex items-center gap-1.5">
                                                <span>{col.label}</span>
                                                <FilterIcon/>
                                            </div>
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>
                        {districtTableData.map((district, dIndex) => {
                            // Logic for row slicing: 3 rows for first district, 5 for others
                            const visibleRows =
                                dIndex === 0
                                    ? district.rows.slice(0, 3)
                                    : district.rows.slice(0, 5);

                            return (
                                <tbody key={district.district}>
                                    {visibleRows.map((row, rIndex) => {
                                        const isEvenRow = rIndex % 2 === 0;
                                        const isFirstRowOfDistrict = rIndex === 0 && dIndex !== 0;
                                        const baseBgClass = isEvenRow
                                            ? "bg-[#F5FAFF]"
                                            : "bg-white";
                                        
                                        // Keep standard grey border for the grid
                                        const borderClass = "border-t-[0.5px] border-sentiment-border";

                                        return (
                                            <tr
                                                key={row.domRange}
                                                className={baseBgClass}
                                            >
                                                <td
                                                    className={`px-3 py-3 font-bold text-left text-text-black w-[20%] border-r-[0.5px] border-sentiment-border ${rIndex === 0 ? "bg-[#F0F9FF]" : "bg-white"}`}
                                                >
                                                    {rIndex === 0 ? district.district : ""}
                                                </td>
                                                <td className={`px-3 py-3 text-text-black w-[13.33%] text-left border-r-[0.5px] ${borderClass} relative`}>
                                                    {isFirstRowOfDistrict && (
                                                        <div className="absolute top-[-3px] left-0 w-[601%] h-[2px] bg-(--color-dark-blue) z-20 pointer-events-none" />
                                                    )}
                                                    {row.domRange}
                                                </td>
                                                <td className={`px-3 py-3 text-text-black w-[13.33%] text-left border-r-[0.5px] ${borderClass}`}>
                                                    {row.holdRecentApp}
                                                </td>
                                                <td className={`px-3 py-3 text-text-black w-[13.33%] text-left border-r-[0.5px] ${borderClass}`}>
                                                    {row.holdRecentPhotos}
                                                </td>
                                                <td className={`px-3 py-3 text-text-black w-[13.33%] text-left border-r-[0.5px] ${borderClass}`}>
                                                    {row.marketingReview}
                                                </td>
                                                <td className={`px-3 py-3 text-text-black w-[13.33%] text-left border-r-[0.5px] ${borderClass}`}>
                                                    {row.marketingOldPics}
                                                </td>
                                                <td className={`px-3 py-3 text-text-black w-[13.33%] text-left ${borderClass}`}>
                                                    {row.dispoReview}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            );
                        })}
                    </table>
                </div>
            </div>
        </Card>
    );
}