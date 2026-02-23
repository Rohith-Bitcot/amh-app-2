import Card from "@/components/ui/cards";
import { FilterIcon } from "@/components/ui/filterIcon";
import { drilldownColumns, propertyDrilldownData } from "@/utils/data/property-health";
import { useState } from "react";
import { SearchCard } from "./search-card";
import { SortCard } from "./sort-card";

export const PropertyDrilldownTable = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showSort, setShowSort] = useState(false);

    return (
        <Card title="Property Drilldown" noPadding>
            <div className="max-md:overflow-x-auto rounded-xl border-[0.5px] border-sentiment-border m-4 mt-0 min-h-[400px]">
                <table className="w-full border-collapse text-left md:table-fixed max-md:min-w-[1200px]">
                    <thead>
                        <tr className="bg-primary-blue text-white text-[13px] font-heading">
                            {drilldownColumns.map((col, i) => {
                                const header = typeof col.header === "string" ? col.header : String(col.header);
                                const widthClass = i === 0 ? "w-[15%]" : "w-[9.44%]";
                                const isProperty = i === 0;
                                const isCategory = i === 1;

                                const renderHeader = (text: string) => {
                                    if (text === "Website Pageviews") return <>Website<br />Pageviews</>;
                                    if (text === "Neg. Home Issue") return <>Neg.<br />Home Issue</>;
                                    if (text === "Neg. Access Issue") return <>Neg.<br />Access Issue</>;
                                    return text;
                                };

                                return (
                                    <th
                                        key={String(col.accessorKey ?? i)}
                                        className={`px-2 py-1.5 border-white/20 select-none first:rounded-tl-lg last:rounded-tr-lg whitespace-nowrap ${widthClass} ${i === 0 ? "" : "border-l"} relative`}
                                    >
                                        <div className="flex items-center gap-2 justify-start flex-nowrap">
                                            <span className="leading-tight">{renderHeader(header)}</span>
                                            <div className="relative">
                                                <button 
                                                    type="button"
                                                    className="cursor-pointer p-0.5 rounded transition-colors flex items-center justify-end"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        if (isProperty) {
                                                            setShowSearch(!showSearch);
                                                        } else if (isCategory) {
                                                            setShowSort(!showSort);
                                                        }
                                                    }}
                                                    aria-label={isProperty ? "Search Property" : "Sort Category"}
                                                >
                                                    <FilterIcon className="text-white brightness-200 opacity-90 shrink-0 mt-0" />
                                                </button>

                                                {isProperty && showSearch && (
                                                    <div className="absolute top-[20px] left-[-40px] z-50">
                                                        <SearchCard 
                                                            onReset={() => {}} 
                                                            onApply={() => setShowSearch(false)} 
                                                        />
                                                    </div>
                                                )}

                                                {isCategory && showSort && (
                                                    <div className="absolute top-[20px] left-[-20px] z-50">
                                                        <SortCard 
                                                            onReset={() => {}} 
                                                            onApply={() => setShowSort(false)} 
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {propertyDrilldownData.map((row, rowIndex) => {
                            return (
                                <tr key={row.property} className={`border-b-[0.5px] border-sentiment-border last:border-0 transition-colors text-text-black ${rowIndex % 2 === 0 ? "bg-white" : "bg-[#F0F8FE]"}`}>
                                    {drilldownColumns.map((col, i) => {
                                        const key = String(col.accessorKey ?? "");
                                        const value = row[key as keyof typeof row];
                                        const widthClass = i === 0 ? "w-[15%]" : "w-[9.44%]";

                                        return (
                                            <td
                                                key={key}
                                                className={`px-3 py-1.5 text-[13px] font-heading border-sentiment-border text-left ${widthClass} ${i === 0 ? "text-[14px] font-medium opacity-90" : "font-normal border-l-[0.5px]"}`}
                                            >
                                                {value}
                                            </td>
                                        );
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </Card>
    )
}
