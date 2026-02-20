import Card from "@/components/ui/cards";
import StackedBarChart from "@/components/ui/stacked-bar-chart";
import { districtTableData, healthChartData, stackedBars } from "@/utils/data/property-health";
import { FilterIcon } from "@/utils/helper-functions";

export const PropertyHealthComponent = () => {
    return (
        <Card
            title="Property Health"
            noPadding
            className="overflow-hidden rounded-xl"
        >
            <div className="p-6 pb-2">
                <div className="flex flex-wrap items-center justify-end gap-4 mb-2">
                    {stackedBars.map((bar) => (
                        <div key={bar.dataKey} className="flex items-center gap-2">
                            <span
                                className="w-2.5 h-2.5 rounded-full"
                                style={{ backgroundColor: bar.color }}
                            />
                            <span className="text-xs font-medium font-heading text-neutral-600">
                                {bar.name}
                            </span>
                        </div>
                    ))}
                </div>
                <StackedBarChart
                    data={healthChartData}
                    bars={stackedBars}
                    xAxisKey="property"
                    height={400}
                    yAxisTicks={Array.from({ length: 13 }, (_, i) => i * 2)}
                    yAxisDomain={[0, 24]}
                />
            </div>

            {/* District Table */}
            <div className="mt-4 p-6 ">
                <div className="overflow-x-auto bg-[#F5FAFF]">
                    <table className="w-full text-sm text-center border-collapse">
                        <thead>
                            <tr className="bg-[#1F78B4] text-white">
                                <th className="px-6 py-5 font-semibold text-left border-r border-white/20 whitespace-nowrap w-64 first:rounded-tl-xl">
                                    Geo{" "}
                                    <FilterIcon className="text-white/80 inline w-3 h-3 ml-1" />
                                </th>
                                <th className="px-6 py-5 font-semibold border-r border-white/20 whitespace-nowrap w-24">
                                    DOM Category{" "}
                                    <FilterIcon className="text-white/80 inline w-3 h-3 ml-1" />
                                </th>
                                <th className="px-6 py-5 font-semibold border-r border-white/20 whitespace-nowrap w-24">
                                    Hold recent/app{" "}
                                    <FilterIcon className="text-white/80 inline w-3 h-3 ml-1" />
                                </th>
                                <th className="px-6 py-5 font-semibold border-r border-white/20 whitespace-nowrap w-24">
                                    Hold recent/photos{" "}
                                    <FilterIcon className="text-white/80 inline w-3 h-3 ml-1" />
                                </th>
                                <th className="px-6 py-5 font-semibold border-r border-white/20 whitespace-nowrap w-24">
                                    Marketing review{" "}
                                    <FilterIcon className="text-white/80 inline w-3 h-3 ml-1" />
                                </th>
                                <th className="px-6 py-5 font-semibold border-r border-white/20 whitespace-nowrap w-24">
                                    Marketing old pics{" "}
                                    <FilterIcon className="text-white/80 inline w-3 h-3 ml-1" />
                                </th>
                                <th className="px-6 py-5 font-semibold whitespace-nowrap w-24 last:rounded-tr-xl">
                                    Dispo review{" "}
                                    <FilterIcon className="text-white/80 inline w-3 h-3 ml-1" />
                                </th>
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
                                        const separatorClass = isFirstRowOfDistrict
                                            ? "border-t-2 border-[#D0D7E2]"
                                            : "";

                                        return (
                                            <tr
                                                key={row.domRange}
                                                className={`${baseBgClass} ${separatorClass}`}
                                            >
                                                <td
                                                    className={`px-6 py-5 font-bold text-left text-neutral-800 border-r border-[#E2E8F0] w-64 ${rIndex === 0 ? "bg-[#F0F9FF]" : "bg-white"
                                                        }`}
                                                >
                                                    {rIndex === 0 ? district.district : ""}
                                                </td>
                                                <td className="px-6 py-5 text-neutral-600 border-r border-[#E2E8F0] w-24">
                                                    {row.domRange}
                                                </td>
                                                <td className="px-6 py-5 text-neutral-800 border-r border-[#E2E8F0] w-24">
                                                    {row.holdRecentApp}
                                                </td>
                                                <td className="px-6 py-5 text-neutral-800 border-r border-[#E2E8F0] w-24">
                                                    {row.holdRecentPhotos}
                                                </td>
                                                <td className="px-6 py-5 text-neutral-800 border-r border-[#E2E8F0] w-24">
                                                    {row.marketingReview}
                                                </td>
                                                <td className="px-6 py-5 text-neutral-800 border-r border-[#E2E8F0] w-24">
                                                    {row.marketingOldPics}
                                                </td>
                                                <td className="px-6 py-5 text-neutral-800 w-24">
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